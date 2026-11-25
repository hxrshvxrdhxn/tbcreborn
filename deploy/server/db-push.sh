#!/usr/bin/env bash
# Applies the Prisma schema to the local database (refuses changes that would lose data).
set -euo pipefail
set -a; . /opt/tbc/site.env; set +a
docker run --rm --network host -v /opt/tbc/tbcreborn/prisma:/p:ro \
  -e DATABASE_URL -e DIRECT_URL node:20-alpine \
  sh -c "apk add --no-cache openssl >/dev/null && npx -y prisma@5 db push --skip-generate --schema /p/schema.prisma" 2>&1 | grep -vE 'npm (notice|warn)'
