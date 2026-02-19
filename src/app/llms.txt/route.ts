import { skills, categories } from "@/lib/data/skills";
import { bundles } from "@/lib/data/bundles";
import { articles } from "@/lib/data/blog";

export const dynamic = "force-static";

const categoryNames: Record<string, string> = {
  sales: "Sales & Business",
  career: "Career & Coaching",
  content: "Content & Writing",
  automation: "Automation",
  devtools: "Developer Tools",
};

export function GET() {
  const skillsByCategory = categories
    .map((cat) => ({
      name: categoryNames[cat.slug] ?? cat.slug,
      skills: skills.filter((s) => s.category === cat.slug),
    }))
    .filter((g) => g.skills.length > 0);

  const skillsSection = skillsByCategory
    .map(({ name, skills: catSkills }) => {
      const lines = catSkills.map((s) => {
        const price = s.isFree ? "Free" : `€${s.price}`;
        return `- [${s.name}](/en/skills/${s.slug}) — ${price} — ${s.tagline.en}`;
      });
      return [`### ${name}`, ...lines].join("\n");
    })
    .join("\n\n");

  const bundlesSection = bundles
    .map(
      (b) =>
        `- [${b.name}](/en/bundles/${b.slug}) — €${b.bundlePrice} — ${b.tagline.en}`
    )
    .join("\n");

  const blogSection = articles
    .map((a) => `- [${a.title.en}](/en/blog/${a.slug})`)
    .join("\n");

  const text = [
    "# Skillwire",
    "",
    "> Professional skill packs for Claude Code. Buy once, use forever.",
    "",
    "Skillwire is a marketplace of production-ready skill packs for Claude Code — the AI coding CLI by Anthropic.",
    "Each skill is a structured system: SKILL.md + reference files + templates + workflows.",
    "Not single prompts — complete professional tools built by practitioners.",
    "",
    "Built by Alessandro Di Grazia, Sales & GTM Leader at iSquared (Var Group).",
    "Contact: hello@skillwire.ai",
    "",
    "---",
    "",
    `## Skills Catalog (${skills.length} skills)`,
    "",
    skillsSection,
    "",
    "---",
    "",
    `## Bundles (${bundles.length} bundles)`,
    "",
    bundlesSection,
    "",
    "---",
    "",
    "## Education & Resources",
    "",
    "- [What Are Claude Skills?](/en/what-are-claude-skills) — Complete guide to Claude Code skill packs",
    "- [How It Works](/en/how-it-works) — Installation and usage walkthrough",
    "- [Blog](/en/blog) — Articles on Claude Code skills, AI tools, and workflow automation",
    "",
    "### Blog Articles",
    "",
    blogSection,
    "",
    "---",
    "",
    "## Technical Details",
    "",
    "- Skills are installed via Claude Code CLI in seconds: place SKILL.md in ~/.claude/skills/",
    "- Compatible with: Claude Code (macOS, Linux), Claude Desktop (Windows, macOS, Linux)",
    "- All skills include: SKILL.md, reference files, templates, examples",
    "- Languages: English and Italian (bilingual skills)",
    "- License: single-user lifetime license, buy once use forever",
    "",
    "---",
    "",
    "## About Skillwire",
    "",
    "Skillwire was created by Alessandro Di Grazia, a Sales & GTM Leader with 15+ years in enterprise B2B.",
    "The skills are built from real professional practice — not theoretical prompts.",
    "Each skill has been used in production before being published on the marketplace.",
    "",
    "Website: https://skillwire.ai",
    "Twitter: @skillwireai",
  ].join("\n");

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
}
