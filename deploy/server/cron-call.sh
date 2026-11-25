#!/usr/bin/env bash
# Calls one of the site's cron routes the way Vercel Cron did (Bearer CRON_SECRET).
set -euo pipefail
SECRET=$(grep -E '^CRON_SECRET=' /opt/tbc/site.env | head -1 | cut -d= -f2- | tr -d '"')
curl -fsS -m 120 -H "Authorization: Bearer ${SECRET}" "http://127.0.0.1:3000$1" -H "Host: turbobytesconsulting.com" \
  -o /dev/null -w "$(date -Is) $1 %{http_code}\n" >> /opt/tbc/logs/cron.log 2>&1 || true
