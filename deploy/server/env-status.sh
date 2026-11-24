#!/usr/bin/env bash
# Lists which site settings are set, without printing any value.
F=/opt/tbc/site.env
for k in DATABASE_URL DIRECT_URL ADMIN_PASSWORD CRON_SECRET SMTP_HOST SMTP_USER SMTP_PASS SMTP_FROM GOOGLE_SHEETS_WEBHOOK_URL ANTHROPIC_API_KEY; do
  v=$(grep -E "^${k}=" "$F" | tail -1 | cut -d= -f2- | tr -d '"')
  if [ -z "$v" ]; then s=MISSING; elif [ "$v" = "[SENSITIVE]" ]; then s=NEEDS-VALUE; else s=set; fi
  printf '%-28s %s\n' "$k" "$s"
done
