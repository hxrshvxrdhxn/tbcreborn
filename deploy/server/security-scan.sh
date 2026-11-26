#!/usr/bin/env bash
# Non-destructive security scan of our own site. Safe for production: passive web scan, TLS check,
# port scan, and template checks with intrusive/DoS/fuzz templates excluded. Submits no forms.
#   /opt/tbc/security-scan.sh            -> writes /opt/tbc/logs/security/<date>/ and prints a summary
set -uo pipefail
HOST=${1:-turbobytesconsulting.com}
URL="https://$HOST"
OUT=/opt/tbc/logs/security/$(date +%F-%H%M)
mkdir -p "$OUT"; chmod 700 /opt/tbc/logs/security
echo "== ports (nmap, top 1000, from this server)"
docker run --rm instrumentisto/nmap -Pn -sV --top-ports 1000 129.121.168.29 > "$OUT/nmap.txt" 2>&1
grep -E '^[0-9]+/tcp' "$OUT/nmap.txt" || echo "no open ports listed"
echo "== TLS (testssl.sh)"
docker run --rm drwetter/testssl.sh --quiet --color 0 --severity MEDIUM "$URL" > "$OUT/testssl.txt" 2>&1
grep -E 'MEDIUM|HIGH|CRITICAL' "$OUT/testssl.txt" | head -20 || true
grep -E 'Overall Grade' "$OUT/testssl.txt" || true
echo "== template checks (nuclei, medium and above, no intrusive/dos/fuzz)"
docker run --rm projectdiscovery/nuclei:latest -u "$URL" -severity medium,high,critical \
  -etags intrusive,dos,fuzz,bruteforce -rl 10 -silent -nc > "$OUT/nuclei.txt" 2>&1
[ -s "$OUT/nuclei.txt" ] && cat "$OUT/nuclei.txt" || echo "no findings"
echo "== web app passive scan (OWASP ZAP baseline, 3 min spider)"
docker run --rm -u root -v "$OUT":/zap/wrk:rw ghcr.io/zaproxy/zaproxy:stable \
  zap-baseline.py -t "$URL" -m 3 -I -r zap.html -w zap.md > "$OUT/zap.txt" 2>&1
grep -E '^(WARN-NEW|FAIL-NEW)' "$OUT/zap.txt" || true
grep -E '^FAIL-NEW|^WARN-NEW|^PASS' "$OUT/zap.txt" | awk '{print $1}' | sort | uniq -c
echo
echo "Full reports in $OUT"
