#!/usr/bin/env python3
"""
Lemon Squeezy — Crea prodotti Skillwire via API.

Uso:
  export LS_API_KEY="your_api_key"
  export LS_STORE_ID="your_store_id"   # numero intero, es. 12345
  python3 scripts/create-ls-products.py

Output:
  - Stampa slug → variant_id per ogni prodotto creato
  - Salva il mapping in scripts/ls-variant-map.json
  - Genera lo snippet TypeScript da incollare in src/lib/lemon-squeezy.ts
"""

import os, sys, json, time
import urllib.request
import urllib.error

API_KEY  = os.environ.get("LS_API_KEY", "")
STORE_ID = os.environ.get("LS_STORE_ID", "")

BASE_URL = "https://api.lemonsqueezy.com/v1"

HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type":  "application/vnd.api+json",
    "Accept":        "application/vnd.api+json",
}

# ---------------------------------------------------------------------------
# Prodotti da creare
# Formato: { slug, name, description, price_cents }
# bundle-only e free non vengono creati come prodotti standalone su LS
# ---------------------------------------------------------------------------

SKILLS = [
    {
        "slug": "ai-b2b-sales-methodology",
        "name": "AI-Powered B2B Sales Methodology",
        "desc": "MEDDPICC+RR, SPICED, negotiation frameworks. 49 files — from first call to closed-won.",
        "price": 14900,  # €149
    },
    {
        "slug": "b2b-presentation-builder",
        "name": "B2B Presentation Builder",
        "desc": "C-level presentations with ROI focus and multi-persona frameworks.",
        "price": 7900,  # €79
    },
    {
        "slug": "janus",
        "name": "Janus — Critical Analysis",
        "desc": "Stress-tests your pitches, plans and proposals across 5 dimensions. No flattery.",
        "price": 3900,  # €39
    },
    {
        "slug": "human-writer",
        "name": "HumanWriter",
        "desc": "Transform AI-generated text into authentic, human-sounding writing.",
        "price": 2900,  # €29
    },
    {
        "slug": "deep-research-agent",
        "name": "Deep Research Agent",
        "desc": "Multi-source research with citations, executive summaries and structured reports.",
        "price": 2900,  # €29
    },
    {
        "slug": "cv-guru",
        "name": "CV Guru",
        "desc": "CV optimization and interview preparation with ATS-friendly formatting.",
        "price": 2500,  # €25
    },
    {
        "slug": "iterative-self-critique",
        "name": "Iterative Self-Critique",
        "desc": "Multi-round self-critique for planning, architecture and strategy tasks.",
        "price": 1900,  # €19
    },
    {
        "slug": "maia",
        "name": "MaIA — Multi-Agent Intelligence",
        "desc": "Orchestrate specialist agents for complex, multi-step projects.",
        "price": 2500,  # €25
    },
    {
        "slug": "memory-manager",
        "name": "Memory Manager",
        "desc": "Persistent cross-session memory system for Claude Code.",
        "price": 1900,  # €19
    },
    {
        "slug": "remotion-best-practices",
        "name": "Remotion Best Practices",
        "desc": "43 rules and patterns for production-grade programmatic video with React.",
        "price": 2900,  # €29
    },
    {
        "slug": "n8n-ai-workflow-expert",
        "name": "n8n AI Workflow Expert",
        "desc": "Create and optimize n8n workflows with AI. From beginner to enterprise automation.",
        "price": 3900,  # €39
    },
    {
        "slug": "ask-to-andrew",
        "name": "SchoolPath AI",
        "desc": "AI guidance counselor for students choosing educational paths.",
        "price": 1900,  # €19
    },
    {
        "slug": "ask-to-vera",
        "name": "Vera Career Coach",
        "desc": "AI career and purpose coach for professionals in transition.",
        "price": 2900,  # €29
    },
    {
        "slug": "llm-arena-vs",
        "name": "LLM Arena VS",
        "desc": "Orchestrate Claude, ChatGPT and Gemini in parallel. Compare. Decide.",
        "price": 2500,  # €25
    },
    {
        "slug": "nano-banana-guru",
        "name": "Nano Banana Guru",
        "desc": "Proactive prompt engineering consultant for Google's visual reasoning model.",
        "price": 2500,  # €25
    },
    {
        "slug": "content-pipeline-pro",
        "name": "Content Pipeline Pro",
        "desc": "Full content creation pipeline from idea to published post.",
        "price": 2900,  # €29
    },
]

BUNDLES = [
    {
        "slug": "b2b-sales-pro",
        "name": "B2B Sales Pro System",
        "desc": "4 skills: Sales Methodology + Presentation Builder + Janus + Deep Research. Save 19%.",
        "price": 24900,  # €249
    },
    {
        "slug": "career-navigator",
        "name": "Career & Life Navigator",
        "desc": "4 skills: Vera Career Coach + SchoolPath AI + CV Guru + HumanWriter. Save 37%.",
        "price": 7900,  # €79
    },
    {
        "slug": "n8n-power-pack",
        "name": "n8n Power Pack",
        "desc": "3 skills: n8n Expert + 1500 Workflow Templates + Live Docs. Save on the complete pack.",
        "price": 6900,  # €69
    },
    {
        "slug": "claude-code-mastery",
        "name": "Claude Code Mastery",
        "desc": "5 skills: Skill Creator + Memory Manager + MaIA + LLM Arena + Self-Critique. Save 37%.",
        "price": 3900,  # €39
    },
    {
        "slug": "linkedin-toolkit",
        "name": "LinkedIn Toolkit",
        "desc": "3 skills: Content Pipeline Pro + HumanWriter + Janus. Save on your LinkedIn growth stack.",
        "price": 6500,  # €65
    },
]

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def api_request(method: str, path: str, body: dict | None = None) -> dict:
    url = f"{BASE_URL}{path}"
    data = json.dumps(body).encode() if body else None
    req = urllib.request.Request(url, data=data, headers=HEADERS, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        error_body = e.read().decode()
        print(f"  ✗ HTTP {e.code}: {error_body[:300]}", file=sys.stderr)
        raise


def create_product(slug: str, name: str, desc: str) -> str:
    """Crea il prodotto su LS. Restituisce product_id."""
    payload = {
        "data": {
            "type": "products",
            "attributes": {
                "name": name,
                "description": desc,
                "status": "draft",  # draft finché non carichi il file ZIP
            },
            "relationships": {
                "store": {"data": {"type": "stores", "id": STORE_ID}},
            },
        }
    }
    resp = api_request("POST", "/products", payload)
    product_id = resp["data"]["id"]
    return product_id


def get_variant_id(product_id: str) -> str:
    """Recupera il variant_id del variant di default creato automaticamente."""
    resp = api_request("GET", f"/variants?filter[product_id]={product_id}")
    variants = resp.get("data", [])
    if not variants:
        raise RuntimeError(f"Nessun variant trovato per product_id={product_id}")
    return variants[0]["id"]


def set_variant_price(variant_id: str, price_cents: int) -> None:
    """Aggiorna il prezzo del variant (in centesimi)."""
    payload = {
        "data": {
            "type": "variants",
            "id": variant_id,
            "attributes": {
                "price": price_cents,
                "is_membership": False,
                "has_free_trial": False,
                "pay_what_you_want": False,
                "status": "active",
            },
        }
    }
    api_request("PATCH", f"/variants/{variant_id}", payload)


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    if not API_KEY or not STORE_ID:
        print("Errore: imposta LS_API_KEY e LS_STORE_ID come variabili d'ambiente.", file=sys.stderr)
        sys.exit(1)

    variant_map: dict[str, str] = {}
    all_items = [("skill", s) for s in SKILLS] + [("bundle", b) for b in BUNDLES]

    print(f"\nCreazione di {len(all_items)} prodotti su Lemon Squeezy (store {STORE_ID})...\n")

    for kind, item in all_items:
        slug  = item["slug"]
        name  = item["name"]
        desc  = item["desc"]
        price = item["price"]

        print(f"  [{kind}] {name} (€{price // 100}) ...", end=" ", flush=True)

        try:
            product_id  = create_product(slug, name, desc)
            time.sleep(0.5)  # rate limit gentile
            variant_id  = get_variant_id(product_id)
            time.sleep(0.5)
            set_variant_price(variant_id, price)
            variant_map[slug] = variant_id
            print(f"✓  product={product_id}  variant={variant_id}")
        except Exception as exc:
            print(f"✗  ERRORE: {exc}")

        time.sleep(1)  # pausa tra prodotti

    # ── Salva JSON ──
    out_json = "scripts/ls-variant-map.json"
    with open(out_json, "w") as f:
        json.dump(variant_map, f, indent=2)
    print(f"\nMapping salvato in {out_json}")

    # ── Genera snippet TypeScript ──
    print("\n── VARIANT_MAP per lemon-squeezy.ts ──────────────────────────\n")
    print("const VARIANT_MAP: Record<string, string> = {")
    print("  // Skills")
    for s in SKILLS:
        slug = s["slug"]
        vid  = variant_map.get(slug, "TODO")
        print(f'  "{slug}": "{vid}",')
    print("  // Bundles")
    for b in BUNDLES:
        slug = b["slug"]
        vid  = variant_map.get(slug, "TODO")
        print(f'  "{slug}": "{vid}",')
    print("};")
    print("\n────────────────────────────────────────────────────────────────")
    print("Copia questo blocco in src/lib/lemon-squeezy.ts e sostituisci VARIANT_MAP.")
    print("\nProssimo step: carica i file ZIP su ogni prodotto nel dashboard LS.")
    print("URL dashboard: https://app.lemonsqueezy.com/products")


if __name__ == "__main__":
    main()
