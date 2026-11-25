#!/usr/bin/env bash
# Pull-based deploy: rebuilds only when master has a new commit, or with --force.
set -euo pipefail
exec 9>/opt/tbc/.deploy.lock
flock -n 9 || exit 0
cd /opt/tbc/tbcreborn
git fetch -q origin master
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/master)
if [ "$LOCAL" = "$REMOTE" ] && [ "${1:-}" != "--force" ]; then exit 0; fi
echo "$(date -Is) deploying $REMOTE"
git reset -q --hard origin/master
# Server files can change with the repo; refresh them before building.
install -m 0644 deploy/server/compose.yml /opt/tbc/compose.yml
install -m 0644 deploy/server/Caddyfile /opt/tbc/Caddyfile
install -m 0755 deploy/server/db-push.sh /opt/tbc/db-push.sh
install -m 0755 deploy/server/backup.sh /opt/tbc/backup.sh
install -m 0755 deploy/server/health.sh /opt/tbc/health.sh
cd /opt/tbc
docker compose up -d db
/opt/tbc/db-push.sh
DOCKER_BUILDKIT=1 docker compose build web
docker compose up -d
docker compose exec -T caddy caddy reload --config /etc/caddy/Caddyfile >/dev/null 2>&1 || true
docker image prune -f >/dev/null
echo "$(date -Is) live $REMOTE"
