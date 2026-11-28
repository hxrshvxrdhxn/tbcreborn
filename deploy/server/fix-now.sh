#!/usr/bin/env bash
# One-shot maintenance run: shows why deploys stopped, clears a stuck deploy, makes sure the session key exists,
# installs the latest server scripts and fail2ban jails, redeploys, and prints a short status report.
# Prints no secret values.
#   curl -fsSL https://raw.githubusercontent.com/hxrshvxrdhxn/tbcreborn/master/deploy/server/fix-now.sh | bash
set -uo pipefail
[ "$(id -u)" = 0 ] || { echo "Run as root."; exit 1; }
cd /opt/tbc
line() { printf '\n== %s\n' "$1"; }

line "last deploy log lines"
tail -n 25 logs/deploy.log 2>/dev/null || echo "(no deploy log)"

line "stuck deploys"
for pid in $(pgrep -f /opt/tbc/deploy.sh || true); do
  age=$(ps -o etimes= -p "$pid" | tr -d ' ')
  if [ "${age:-0}" -gt 1800 ]; then echo "killing deploy pid $pid (running ${age}s)"; pkill -TERM -P "$pid" 2>/dev/null; kill -TERM "$pid" 2>/dev/null; fi
done
pgrep -fa "docker compose build|docker-buildx" | head -5 || true

line "session key"
if grep -qE '^SESSION_SECRET=.+' site.env; then echo "SESSION_SECRET already set"; else
  printf 'SESSION_SECRET="%s"\n' "$(openssl rand -hex 32)" >> site.env && chmod 600 site.env && echo "SESSION_SECRET created"; fi

line "latest server scripts"
cd /opt/tbc/tbcreborn && git fetch -q origin master && git reset -q --hard origin/master && cd /opt/tbc
for f in deploy.sh backup.sh health.sh db-push.sh security-scan.sh; do install -m 0755 tbcreborn/deploy/server/$f /opt/tbc/$f; done
install -m 0644 tbcreborn/deploy/server/compose.yml /opt/tbc/compose.yml
install -m 0644 tbcreborn/deploy/server/Caddyfile /opt/tbc/Caddyfile
mkdir -p logs/caddy && touch logs/caddy/access.log
install -m 0644 tbcreborn/deploy/server/fail2ban/tbc-flood.conf /etc/fail2ban/filter.d/tbc-flood.conf
install -m 0644 tbcreborn/deploy/server/fail2ban/tbc-abuse.conf /etc/fail2ban/filter.d/tbc-abuse.conf
install -m 0644 tbcreborn/deploy/server/fail2ban/tbc.local /etc/fail2ban/jail.d/tbc.local
systemctl restart fail2ban && echo "fail2ban restarted"
rm -f /opt/tbc/.live-sha /opt/tbc/.failed-sha
echo "installed"

line "deploy (takes a few minutes)"
if /opt/tbc/deploy.sh --force >> logs/deploy.log 2>&1; then echo "DEPLOY OK: $(tail -1 logs/deploy.log)"; else
  echo "DEPLOY FAILED. Last 40 lines:"; tail -n 40 logs/deploy.log; fi

line "status"
curl -s -o /dev/null -w "site via localhost: %{http_code}\n" http://127.0.0.1:3000/
curl -s https://turbobytesconsulting.com/ | grep -q "General AI knows the internet" && echo "new homepage: LIVE" || echo "new homepage: NOT live"
fail2ban-client status | tail -1
env-status 2>/dev/null | grep -E "SESSION|SMTP|ADMIN" || true
grep -qE '^SESSION_SECRET=.+' site.env && echo "SESSION_SECRET            set"
df -h / | tail -1 | awk '{print "disk used: "$5}'
line "security scan summary (from 26 Nov)"
grep -E "open|Overall Grade|WARN-NEW|FAIL-NEW|\[(medium|high|critical)\]" logs/security-last.txt 2>/dev/null | head -25 || echo "(no scan results)"
echo; echo "Done. Send Claude a screenshot of this output."
