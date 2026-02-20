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
      en: "How to Stress-Test Your Business Plan Before the Room Does It for You",
      it: "Come stress-testare il tuo business plan prima che lo faccia la sala riunioni",
    },
    excerpt: {
      en: "Your business plan looks solid. So did the one that collapsed at the first investor question. Here's a structured framework for finding the holes before someone else does.",
      it: "Il tuo business plan sembra solido. Anche quello che \u00e8 crollato alla prima domanda dell'investitore. Ecco un framework strutturato per trovare le falle prima che lo faccia qualcun altro.",
    },
    category: "insight",
    tags: ["business-plan", "janus", "critical-thinking", "strategy", "stress-test"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-20",
    readingTime: 7,
    coverEmoji: "\uD83D\uDD2E",
    relatedSkillSlug: "janus",
    metaTitle: {
      en: "How to Stress-Test Your Business Plan with AI | Skillwire Blog",
      it: "Come stress-testare il tuo business plan con l'AI | Skillwire Blog",
    },
    metaDescription: {
      en: "Traditional feedback is too polite, too busy, and too biased to find the real problems. A structured stress test with severity scoring finds them in minutes.",
      it: "Il feedback tradizionale \u00e8 troppo gentile, troppo frettoloso e troppo parziale per trovare i problemi reali. Uno stress test strutturato con scoring di gravit\u00e0 li trova in minuti.",
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
    slug: "ai-editorial-pipeline-linkedin",
    title: {
      en: "Why Your LinkedIn Content Sounds Like Everyone Else's",
      it: "Perch\u00e9 i tuoi contenuti LinkedIn sembrano quelli di tutti gli altri",
    },
    excerpt: {
      en: "The bottleneck isn't writing speed. It's the gap between reading something worth sharing and turning it into a post that sounds like you. Here's how an editorial pipeline closes that gap.",
      it: "Il collo di bottiglia non \u00e8 la velocit\u00e0 di scrittura. \u00c8 il divario tra leggere qualcosa che vale la pena condividere e trasformarlo in un post che suona come te. Ecco come una pipeline editoriale colma quel vuoto.",
    },
    category: "insight",
    tags: ["linkedin", "content-pipeline", "editorial", "ai-agents", "thought-leadership"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-20",
    readingTime: 6,
    coverEmoji: "\uD83D\uDCDD",
    relatedSkillSlug: "content-pipeline-pro",
    metaTitle: {
      en: "Why Your LinkedIn Content Sounds Like Everyone Else's | Skillwire Blog",
      it: "Perch\u00e9 i tuoi contenuti LinkedIn sembrano quelli di tutti gli altri | Skillwire Blog",
    },
    metaDescription: {
      en: "Consistent LinkedIn publishing requires more than writing fast. Learn why editorial pipelines with specialized agents produce better content than single-prompt approaches.",
      it: "Pubblicare su LinkedIn con costanza richiede pi\u00f9 della velocit\u00e0 di scrittura. Scopri perch\u00e9 le pipeline editoriali con agenti specializzati producono contenuti migliori degli approcci a singolo prompt.",
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
