#!/usr/bin/env python3
"""
Legge scripts/ls-variant-map.json e aggiorna VARIANT_MAP in
src/lib/lemon-squeezy.ts automaticamente.

Uso:
  python3 scripts/apply-variant-map.py
"""

import json, re, sys
from pathlib import Path

ROOT   = Path(__file__).parent.parent  # skillwire/
MAP_F  = ROOT / "scripts" / "ls-variant-map.json"
TS_F   = ROOT / "src" / "lib" / "lemon-squeezy.ts"

if not MAP_F.exists():
    print(f"Errore: {MAP_F} non trovato. Esegui prima create-ls-products.py.", file=sys.stderr)
    sys.exit(1)

with open(MAP_F) as f:
    variant_map: dict = json.load(f)

# Costruisce il blocco TypeScript
lines = ["const VARIANT_MAP: Record<string, string> = {"]
skills_slugs = [
    "ai-b2b-sales-methodology", "b2b-presentation-builder", "janus",
    "human-writer", "deep-research-agent", "cv-guru", "iterative-self-critique",
    "maia", "memory-manager", "remotion-best-practices", "n8n-ai-workflow-expert",
    "ask-to-andrew", "ask-to-vera", "llm-arena-vs", "nano-banana-guru",
    "content-pipeline-pro",
]
bundle_slugs = [
    "b2b-sales-pro", "career-navigator", "n8n-power-pack",
    "claude-code-mastery", "linkedin-toolkit",
]

lines.append("  // Skills")
for slug in skills_slugs:
    vid = variant_map.get(slug, "")
    lines.append(f'  "{slug}": "{vid}",')
lines.append("  // Bundles")
for slug in bundle_slugs:
    vid = variant_map.get(slug, "")
    lines.append(f'  "{slug}": "{vid}",')
lines.append("};")
new_block = "\n".join(lines)

# Sostituisce il blocco esistente nel file TS
ts_content = TS_F.read_text()

pattern = r"const VARIANT_MAP: Record<string, string> = \{[^}]*\};"
if not re.search(pattern, ts_content, re.DOTALL):
    print("Errore: pattern VARIANT_MAP non trovato in lemon-squeezy.ts", file=sys.stderr)
    sys.exit(1)

updated = re.sub(pattern, new_block, ts_content, flags=re.DOTALL)
TS_F.write_text(updated)

print(f"✓ VARIANT_MAP aggiornato in {TS_F.relative_to(ROOT)}")
print(f"  {len(variant_map)} voci: {list(variant_map.keys())[:3]}...")
print("\nProssimi step:")
print("  1. Verifica src/lib/lemon-squeezy.ts — controlla che tutti gli ID siano corretti")
print("  2. Aggiungi env vars su Vercel (LS_API_KEY, LS_STORE_ID, LS_WEBHOOK_SECRET)")
print("  3. Configura webhook su LS: https://skillwire.ai/api/webhook/lemon-squeezy")
print("  4. git add + commit + push → deploy Vercel")
