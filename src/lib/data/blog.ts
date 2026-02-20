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
      it: "Come far suonare umana la scrittura AI",
    },
    excerpt: {
      en: "AI text has patterns your eyes can't catch. Frequency data, structural habits, model-specific fingerprints. Here's a practical framework to find and fix them all.",
      it: "I testi AI hanno pattern che il tuo occhio non coglie. Dati di frequenza, abitudini strutturali, firme specifiche di ogni modello. Ecco come trovarli e correggerli.",
    },
    category: "tutorial",
    tags: ["ai-writing", "humanwriter", "content-creation", "linkedin", "italian-writing"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-20",
    readingTime: 6,
    coverEmoji: "\u270D\uFE0F",
    relatedSkillSlug: "human-writer",
    metaTitle: {
      en: "How to Make AI Writing Sound Human | Skillwire Blog",
      it: "Come far suonare umana la scrittura AI | Skillwire Blog",
    },
    metaDescription: {
      en: "AI writing has patterns your eyes miss. Learn the frequency data, structural tells, and model-specific signatures that give away AI text, plus how to fix them.",
      it: "La scrittura AI ha pattern che il tuo occhio non coglie. Dati di frequenza, segnali strutturali e firme dei modelli: scopri come trovarli e correggerli.",
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
  {
    slug: "why-enterprise-deals-keep-slipping",
    title: {
      en: "Why Your Enterprise Deals Keep Slipping",
      it: "Perch\u00e9 i tuoi deal enterprise continuano a slittare",
    },
    excerpt: {
      en: "Enterprise deals don't fail at the negotiation table. They fail two stages earlier, when disconnected sales frameworks let critical intelligence slip through the gaps.",
      it: "I deal enterprise non falliscono al tavolo negoziale. Falliscono due fasi prima, quando framework di vendita scollegati lasciano sfuggire informazioni critiche tra le fasi.",
    },
    category: "insight",
    tags: ["B2B-sales", "MEDDPICC", "enterprise-sales", "qualification", "negotiation"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-20",
    readingTime: 7,
    coverEmoji: "\uD83D\uDCC9",
    relatedSkillSlug: "ai-b2b-sales-methodology",
    metaTitle: {
      en: "Why Your Enterprise Deals Keep Slipping | Skillwire Blog",
      it: "Perch\u00e9 i tuoi deal enterprise continuano a slittare | Skillwire Blog",
    },
    metaDescription: {
      en: "Enterprise deals fail when disconnected sales frameworks create gaps between discovery, qualification, and negotiation. Learn how an integrated system prevents pipeline leaks.",
      it: "I deal enterprise falliscono quando framework scollegati creano buchi tra discovery, qualificazione e negoziazione. Scopri come un sistema integrato previene le perdite di pipeline.",
    },
  },
  {
    slug: "when-you-know-you-need-a-career-change",
    title: {
      en: "When You Know You Need a Change But Can\u2019t Figure Out What",
      it: "Quando sai che hai bisogno di un cambiamento ma non riesci a capire quale",
    },
    excerpt: {
      en: "Free personality tests give you a label. Validated career assessments give you a direction. Here's the difference, and why it matters when your career feels stuck.",
      it: "I test di personalit\u00e0 gratuiti ti danno un'etichetta. Gli assessment di carriera validati ti danno una direzione. Ecco la differenza, e perch\u00e9 conta quando la tua carriera sembra bloccata.",
    },
    category: "insight",
    tags: ["career-coaching", "career-change", "assessments", "job-crafting", "purpose"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-20",
    readingTime: 6,
    coverEmoji: "\uD83E\uDDED",
    relatedSkillSlug: "ask-to-vera",
    metaTitle: {
      en: "When You Know You Need a Career Change | Skillwire Blog",
      it: "Quando sai che hai bisogno di un cambiamento di carriera | Skillwire Blog",
    },
    metaDescription: {
      en: "Career dissatisfaction has three patterns. Knowing which one you're in changes what you should do next. Evidence-based assessments vs. generic career advice.",
      it: "L'insoddisfazione professionale ha tre pattern. Sapere in quale ti trovi cambia quello che dovresti fare. Assessment validati vs. consigli di carriera generici.",
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
