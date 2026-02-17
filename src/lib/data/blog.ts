type L = { en: string; it: string };

export type BlogCategory = "guide" | "insight" | "tutorial";

export interface BlogArticle {
  slug: string;
  title: L;
  excerpt: L;
  category: BlogCategory;
  tags: string[];
  author: string;
  publishedAt: string;
  readingTime: number;
  coverEmoji: string;
  relatedSkillSlug?: string;
  metaTitle: L;
  metaDescription: L;
}

/* Resolve a localized value */
export function t(val: L, locale: string): string {
  return locale === "it" ? val.it : val.en;
}

export const blogCategories: { slug: BlogCategory; name: L }[] = [
  { slug: "guide", name: { en: "Guide", it: "Guida" } },
  { slug: "insight", name: { en: "Insight", it: "Approfondimento" } },
  { slug: "tutorial", name: { en: "Tutorial", it: "Tutorial" } },
];

export const articles: BlogArticle[] = [
  {
    slug: "claude-code-skills-complete-guide",
    title: {
      en: "Claude Code Skills: The Complete Guide",
      it: "Le Skill di Claude Code: La Guida Completa",
    },
    excerpt: {
      en: "Everything you need to know about Claude Code skills \u2014 what they are, how they work, why they matter, and how to install them in 30 seconds.",
      it: "Tutto quello che devi sapere sulle skill di Claude Code \u2014 cosa sono, come funzionano, perch\u00e9 contano, e come installarle in 30 secondi.",
    },
    category: "guide",
    tags: ["claude-code", "skills", "getting-started", "ai-tools"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-17",
    readingTime: 6,
    coverEmoji: "\uD83D\uDCDA",
    metaTitle: {
      en: "Claude Code Skills: The Complete Guide \u2014 Skillwire Blog",
      it: "Le Skill di Claude Code: La Guida Completa \u2014 Skillwire Blog",
    },
    metaDescription: {
      en: "Learn what Claude Code skills are, how they transform your AI assistant into a domain expert, and how to install them in seconds.",
      it: "Scopri cosa sono le skill di Claude Code, come trasformano il tuo assistente AI in un esperto di dominio, e come installarle in pochi secondi.",
    },
  },
  {
    slug: "how-to-make-ai-writing-sound-human",
    title: {
      en: "How to Make AI Writing Sound Human",
      it: "Come Far Suonare Umana la Scrittura AI",
    },
    excerpt: {
      en: "AI-generated text is easy to spot. Here\u2019s a practical framework to transform robotic output into authentic writing that passes any detector.",
      it: "I testi generati dall\u2019AI si riconoscono subito. Ecco un framework pratico per trasformare output robotici in scrittura autentica che passa qualsiasi detector.",
    },
    category: "tutorial",
    tags: ["ai-writing", "humanwriter", "content-creation", "linkedin"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-15",
    readingTime: 5,
    coverEmoji: "\u270D\uFE0F",
    relatedSkillSlug: "human-writer",
    metaTitle: {
      en: "How to Make AI Writing Sound Human \u2014 Skillwire Blog",
      it: "Come Far Suonare Umana la Scrittura AI \u2014 Skillwire Blog",
    },
    metaDescription: {
      en: "Practical techniques to humanize AI-generated text. Stop sounding like a robot and start writing content that connects.",
      it: "Tecniche pratiche per umanizzare i testi generati dall\u2019AI. Smetti di sembrare un robot e inizia a scrivere contenuti che connettono.",
    },
  },
  {
    slug: "stress-test-business-plan-with-ai",
    title: {
      en: "How to Stress-Test Your Business Plan with AI",
      it: "Come Stress-Testare il Tuo Business Plan con l\u2019AI",
    },
    excerpt: {
      en: "Before pitching investors or launching a product, run your plan through an AI sparring partner that finds the weak spots you can\u2019t see.",
      it: "Prima di presentare agli investitori o lanciare un prodotto, sottoponi il tuo piano a uno sparring partner AI che trova i punti deboli che non riesci a vedere.",
    },
    category: "insight",
    tags: ["business-plan", "janus", "critical-thinking", "strategy"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-12",
    readingTime: 4,
    coverEmoji: "\uD83D\uDD2E",
    relatedSkillSlug: "janus",
    metaTitle: {
      en: "How to Stress-Test Your Business Plan with AI \u2014 Skillwire Blog",
      it: "Come Stress-Testare il Tuo Business Plan con l\u2019AI \u2014 Skillwire Blog",
    },
    metaDescription: {
      en: "Use an AI critical analysis tool to find blind spots in your business plan before stakeholders do.",
      it: "Usa uno strumento di analisi critica AI per trovare i punti ciechi nel tuo business plan prima che lo facciano gli stakeholder.",
    },
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllArticles(): BlogArticle[] {
  return [...articles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getArticlesByCategory(category: BlogCategory): BlogArticle[] {
  return getAllArticles().filter((a) => a.category === category);
}
