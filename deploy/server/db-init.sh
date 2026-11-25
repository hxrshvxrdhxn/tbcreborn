#!/usr/bin/env bash
# One-time: local Postgres for the website, plus cleaning the env file pulled from Vercel.
# Prints no secret values.
set -euo pipefail
cd /opt/tbc
F=site.env
# 1. Drop Vercel/Turbo build noise and "[SENSITIVE]" placeholders (a placeholder must never become a real password).
grep -vE '^(VERCEL_|TURBO_|NX_)|\[SENSITIVE\]' "$F" > "$F.tmp" || true
install -m 600 "$F.tmp" "$F"; rm -f "$F.tmp"
# 2. Database password (generated once, kept in a root-only file).
[ -s pgpass ] || { openssl rand -hex 24 > pgpass; chmod 600 pgpass; }
PW=$(cat pgpass)
URL="postgresql://tbc:${PW}@127.0.0.1:5432/tbc"
grep -vE '^(DATABASE_URL|DIRECT_URL)=' "$F" > "$F.tmp" || true
printf 'DATABASE_URL="%s"\nDIRECT_URL="%s"\n' "$URL" "$URL" >> "$F.tmp"
install -m 600 "$F.tmp" "$F"; rm -f "$F.tmp"
# 3. Admin password: random until the owner sets his own with `set-secret ADMIN_PASSWORD`.
grep -q '^ADMIN_PASSWORD=' "$F" || set-secret ADMIN_PASSWORD --random >/dev/null
# 4. Start Postgres and create the tables from the Prisma schema.
docker compose up -d db
for i in $(seq 1 30); do docker compose exec -T db pg_isready -h 127.0.0.1 -U tbc >/dev/null 2>&1 && break; sleep 2; done
/opt/tbc/db-push.sh
echo "Local database ready."
