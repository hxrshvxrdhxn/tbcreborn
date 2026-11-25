#!/usr/bin/env bash
# Nightly dump of the website database, kept 14 days on the server (/opt/tbc/backups).
# Off-server copies (Google Drive / the backup phones) pick up from this folder once they are set up.
set -euo pipefail
DIR=/opt/tbc/backups; mkdir -p "$DIR"; chmod 700 "$DIR"
F="$DIR/tbc-db-$(date -u +%Y%m%dT%H%MZ).sql.gz"
cd /opt/tbc
docker compose exec -T db pg_dump -U tbc -d tbc --no-owner | gzip -9 > "$F.part"
# A dump smaller than 10 KB means something went wrong: keep the old ones and fail loudly.
[ "$(stat -c %s "$F.part")" -gt 10240 ] || { rm -f "$F.part"; echo "$(date -Is) BACKUP FAILED (too small)" >> /opt/tbc/logs/backup.log; exit 1; }
mv "$F.part" "$F"; chmod 600 "$F"
find "$DIR" -name 'tbc-db-*.sql.gz' -mtime +14 -delete
echo "$(date -Is) ok $(basename "$F") $(du -h "$F" | cut -f1)" >> /opt/tbc/logs/backup.log
