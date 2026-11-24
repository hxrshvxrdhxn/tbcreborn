#!/usr/bin/env bash
# TBC server bootstrap: Docker + Caddy (automatic HTTPS) + the TBC website with pull-based deploys.
# Safe to run again. Contains no secrets: site secrets live only in /opt/tbc/site.env on the server.
#
#   curl -fsSL https://raw.githubusercontent.com/hxrshvxrdhxn/tbcreborn/master/deploy/server/bootstrap.sh | sudo bash
set -euo pipefail
[ "$(id -u)" = 0 ] || { echo "Run as root (sudo -i)."; exit 1; }
export DEBIAN_FRONTEND=noninteractive
BASE=/opt/tbc
SITE=$BASE/tbcreborn
REPO=https://github.com/hxrshvxrdhxn/tbcreborn.git
BRANCH=master

echo "== swap (builds need more than 4 GB RAM)"
if ! swapon --show | grep -q /swapfile; then
  fallocate -l 4G /swapfile && chmod 600 /swapfile && mkswap /swapfile >/dev/null && swapon /swapfile
  grep -q /swapfile /etc/fstab || echo '/swapfile none swap sw 0 0' >> /etc/fstab
fi

echo "== packages"
apt-get update -y
apt-get install -y ca-certificates curl git ufw fail2ban unattended-upgrades docker.io docker-compose-v2 docker-buildx
systemctl enable --now docker fail2ban

echo "== firewall"
ufw allow OpenSSH >/dev/null
ufw allow 80/tcp >/dev/null
ufw allow 443/tcp >/dev/null
ufw --force enable

echo "== code"
mkdir -p $BASE/logs
[ -d $SITE/.git ] || git clone -q -b $BRANCH $REPO $SITE
git -C $SITE pull -q --ff-only || true
touch $BASE/site.env
chmod 600 $BASE/site.env
install -m 0644 $SITE/deploy/server/compose.yml $BASE/compose.yml
install -m 0644 $SITE/deploy/server/Caddyfile $BASE/Caddyfile
install -m 0755 $SITE/deploy/server/deploy.sh $BASE/deploy.sh
install -m 0755 $SITE/deploy/server/cron-call.sh $BASE/cron-call.sh

echo "== schedules"
cat > /etc/cron.d/tbc <<'CRON'
# Deploy when master changes (checked every 5 minutes)
*/5 * * * * root /opt/tbc/deploy.sh >> /opt/tbc/logs/deploy.log 2>&1
# The site's own scheduled jobs (were Vercel crons; times in UTC)
30 3 * * * root /opt/tbc/cron-call.sh /api/cron/daily-visitors
0 4 * * *  root /opt/tbc/cron-call.sh /api/cron/verify-blog
15 4 * * * root /opt/tbc/cron-call.sh /api/cron/indexnow
CRON

echo
echo "Bootstrap done."
echo "Next: put the site's environment variables in /opt/tbc/site.env, then run: /opt/tbc/deploy.sh --force"
