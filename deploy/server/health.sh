#!/usr/bin/env bash
# Every 5 minutes: is the site up, is the certificate fine, is the server short of disk or memory?
# Writes one line to /opt/tbc/logs/health.log; problems are prefixed with ALERT so they are easy to grep.
set -uo pipefail
L=/opt/tbc/logs/health.log
code=$(curl -s -o /dev/null -m 20 -w '%{http_code}' --resolve turbobytesconsulting.com:443:127.0.0.1 https://turbobytesconsulting.com/)
days=$(echo | openssl s_client -servername turbobytesconsulting.com -connect 127.0.0.1:443 2>/dev/null | openssl x509 -noout -enddate 2>/dev/null | cut -d= -f2)
left=$(( ( $(date -d "${days:-now}" +%s) - $(date +%s) ) / 86400 ))
disk=$(df --output=pcent / | tail -1 | tr -dc 0-9)
mem=$(free | awk '/Mem:/{printf "%d", ($2-$7)*100/$2}')
msg="site=$code cert_days=$left disk=${disk}% mem=${mem}%"
alert=""
[ "$code" = "200" ] || alert="site down"
[ "$left" -ge 14 ] || alert="$alert cert expiring"
[ "$disk" -lt 85 ] || alert="$alert disk"
[ "$mem" -lt 92 ] || alert="$alert memory"
if [ -n "$alert" ]; then echo "$(date -Is) ALERT ($alert) $msg" >> "$L"; else echo "$(date -Is) ok $msg" >> "$L"; fi
# keep the log short
tail -n 5000 "$L" > "$L.tmp" && mv "$L.tmp" "$L"
