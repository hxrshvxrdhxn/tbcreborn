#!/usr/bin/env bash
# Store one secret in /opt/tbc/site.env without it showing on screen.
#   set-secret DATABASE_URL        -> prompts, input hidden
#   set-secret CRON_SECRET --random -> generates a strong random value
set -euo pipefail
NAME=${1:?usage: set-secret NAME [--random]}
F=/opt/tbc/site.env
if [ "${2:-}" = "--random" ]; then
  VAL=$(openssl rand -hex 32)
else
  read -rsp "Paste the value for $NAME (it stays hidden), then press Enter: " VAL; echo
fi
[ -n "$VAL" ] || { echo "Empty value, nothing saved."; exit 1; }
TMP=$(mktemp)
grep -v "^${NAME}=" "$F" > "$TMP" || true
printf '%s="%s"\n' "$NAME" "$VAL" >> "$TMP"
install -m 600 "$TMP" "$F"; rm -f "$TMP"
echo "$NAME saved."
