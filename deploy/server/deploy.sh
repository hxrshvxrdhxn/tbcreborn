#!/usr/bin/env bash
# Pull-based deploy: rebuilds only when master has a new commit, or with --force.
set -euo pipefail
trap 'echo "$(date -Is) ALERT deploy failed at line $LINENO" >> /opt/tbc/logs/health.log' ERR
exec 9>/opt/tbc/.deploy.lock
flock -n 9 || exit 0
cd /opt/tbc/tbcreborn
git fetch -q origin master
# Compare with the last commit that actually went live, so a failed build is retried on the next run.
LOCAL=$(cat /opt/tbc/.live-sha 2>/dev/null || echo none)
REMOTE=$(git rev-parse origin/master)
if [ "$LOCAL" = "$REMOTE" ] && [ "${1:-}" != "--force" ]; then exit 0; fi
# After a failed build, wait 30 minutes before trying the same commit again (spares the CPU).
if [ "${1:-}" != "--force" ] && [ "$(cat /opt/tbc/.failed-sha 2>/dev/null)" = "$REMOTE" ] && \
   [ -n "$(find /opt/tbc/.failed-sha -mmin -30 2>/dev/null)" ]; then exit 0; fi
echo "$REMOTE" > /opt/tbc/.failed-sha
echo "$(date -Is) deploying $REMOTE"
git reset -q --hard origin/master
# Server files can change with the repo; refresh them before building.
install -m 0644 deploy/server/compose.yml /opt/tbc/compose.yml
install -m 0644 deploy/server/Caddyfile /opt/tbc/Caddyfile
install -m 0755 deploy/server/db-push.sh /opt/tbc/db-push.sh
install -m 0755 deploy/server/backup.sh /opt/tbc/backup.sh
install -m 0755 deploy/server/health.sh /opt/tbc/health.sh
install -m 0755 deploy/server/security-scan.sh /opt/tbc/security-scan.sh
mkdir -p /opt/tbc/logs/caddy && touch /opt/tbc/logs/caddy/access.log
install -m 0644 deploy/server/fail2ban/tbc-flood.conf /etc/fail2ban/filter.d/tbc-flood.conf
install -m 0644 deploy/server/fail2ban/tbc-abuse.conf /etc/fail2ban/filter.d/tbc-abuse.conf
install -m 0644 deploy/server/fail2ban/tbc.local /etc/fail2ban/jail.d/tbc.local
cd /opt/tbc
docker compose up -d db
/opt/tbc/db-push.sh
DOCKER_BUILDKIT=1 docker compose build web
docker compose up -d
docker compose exec -T caddy caddy reload --config /etc/caddy/Caddyfile >/dev/null 2>&1 || true
fail2ban-client reload >/dev/null 2>&1 || systemctl restart fail2ban || true
docker image prune -f >/dev/null
# deploy.sh keeps itself current for the next run
install -m 0755 /opt/tbc/tbcreborn/deploy/server/deploy.sh /opt/tbc/deploy.sh
echo "$REMOTE" > /opt/tbc/.live-sha
rm -f /opt/tbc/.failed-sha
echo "$(date -Is) live $REMOTE"
