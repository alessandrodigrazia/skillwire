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
    slug: "ai-research-without-sources-is-fiction",
    title: {
      en: "AI Research Without Sources Is Just Sophisticated Fiction",
      it: "La ricerca AI senza fonti \u00e8 solo narrativa sofisticata",
    },
    excerpt: {
      en: "You asked your AI for market research. It gave you two thousand words of confident analysis and zero citations. Here's why that's a problem, and what structured research actually looks like.",
      it: "Hai chiesto al tuo AI una ricerca di mercato. Ti ha dato duemila parole di analisi sicura di s\u00e9 e zero citazioni. Ecco perch\u00e9 \u00e8 un problema, e come appare una ricerca strutturata per davvero.",
    },
    category: "insight",
    tags: ["deep-research", "citations", "methodology", "ai-tools", "graph-of-thoughts"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-20",
    readingTime: 7,
    coverEmoji: "\uD83D\uDD2C",
    relatedSkillSlug: "deep-research-agent",
    metaTitle: {
      en: "AI Research Without Sources Is Just Fiction | Skillwire Blog",
      it: "La ricerca AI senza fonti \u00e8 solo narrativa | Skillwire Blog",
    },
    metaDescription: {
      en: "AI produces confident text without citations. Learn why unsourced research is dangerous for professionals and how structured methodologies fix the problem.",
      it: "L'AI produce testo convincente senza citazioni. Perch\u00e9 la ricerca senza fonti \u00e8 pericolosa per i professionisti e come le metodologie strutturate risolvono il problema.",
    },
  },
  {
    slug: "why-your-cv-never-reaches-a-human",
    title: {
      en: "Why Your CV Never Reaches a Human",
      it: "Perch\u00e9 il tuo CV non arriva mai a un umano",
    },
    excerpt: {
      en: "75% of CVs are rejected by ATS software before a recruiter sees them. The problem isn't your experience. It's the six-second filter your document fails before a human even opens the file.",
      it: "Il 75% dei CV viene scartato dal software ATS prima che un recruiter li veda. Il problema non \u00e8 la tua esperienza. \u00c8 il filtro dei sei secondi che il tuo documento non supera prima ancora che un umano apra il file.",
    },
    category: "guide",
    tags: ["CV", "ATS", "job-search", "interview", "STAR", "career"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-20",
    readingTime: 6,
    coverEmoji: "\uD83D\uDCC4",
    relatedSkillSlug: "cv-guru",
    metaTitle: {
      en: "Why Your CV Never Reaches a Human | Skillwire Blog",
      it: "Perch\u00e9 il tuo CV non arriva mai a un umano | Skillwire Blog",
    },
    metaDescription: {
      en: "ATS filters reject most CVs before recruiters see them. Learn how automated screening works, what kills your application, and how to fix it.",
      it: "I filtri ATS scartano la maggior parte dei CV prima che i recruiter li vedano. Come funziona lo screening automatico, cosa uccide la tua candidatura e come correggerlo.",
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
  {
    slug: "how-to-build-claude-code-skills-that-work",
    title: {
      en: "How to Build Claude Code Skills That Actually Work",
      it: "Come costruire skill per Claude Code che funzionano davvero",
    },
    excerpt: {
      en: "Anthropic gives you the basics. Six steps, a SKILL.md template, done. But building a skill that works reliably in production requires answering questions the documentation doesn't cover.",
      it: "Anthropic ti d\u00e0 le basi. Sei step, un template SKILL.md, fatto. Costruire una skill che funzioni in modo affidabile in produzione richiede per\u00f2 risposte a domande che la documentazione non copre.",
    },
    category: "tutorial",
    tags: ["claude-code", "skills", "skill-creation", "SKILL.md", "best-practices"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-20",
    readingTime: 7,
    coverEmoji: "\uD83D\uDD28",
    relatedSkillSlug: "skill-creator-guru",
    metaTitle: {
      en: "How to Build Claude Code Skills That Work | Skillwire Blog",
      it: "Come costruire skill per Claude Code che funzionano | Skillwire Blog",
    },
    metaDescription: {
      en: "Beyond Anthropic's basics: PRD methodology, token optimization, quality pillars, and anti-patterns for building production-grade Claude Code skills.",
      it: "Oltre le basi di Anthropic: metodologia PRD, ottimizzazione token, pilastri di qualit\u00e0 e anti-pattern per costruire skill Claude Code pronte per la produzione.",
    },
  },
  {
    slug: "why-your-ai-plan-breaks-at-step-four",
    title: {
      en: "Why Your AI Plan Breaks at Step Four",
      it: "Perch\u00e9 il tuo piano AI si rompe al quarto step",
    },
    excerpt: {
      en: "AI-generated plans read beautifully. Then you execute them and step three depends on something that step five was supposed to create. Google DeepMind measured the problem: 50% accuracy on complex planning. Here's the fix.",
      it: "I piani generati dall'AI si leggono benissimo. Poi li esegui e lo step tre dipende da qualcosa che lo step cinque avrebbe dovuto creare. Google DeepMind ha misurato il problema: 50% di accuratezza sul planning complesso. Ecco la soluzione.",
    },
    category: "insight",
    tags: ["AI-planning", "self-critique", "DeepMind", "validation", "n8n", "architecture"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-20",
    readingTime: 6,
    coverEmoji: "\uD83D\uDD04",
    relatedSkillSlug: "iterative-self-critique",
    metaTitle: {
      en: "Why Your AI Plan Breaks at Step Four | Skillwire Blog",
      it: "Perch\u00e9 il tuo piano AI si rompe al quarto step | Skillwire Blog",
    },
    metaDescription: {
      en: "LLMs plan at 50% accuracy on complex tasks. Google DeepMind's Plan-Critique-Revise pattern doubles that. How structured self-critique catches broken dependencies before execution.",
      it: "Gli LLM pianificano con il 50% di accuratezza sui task complessi. Il pattern Plan-Critique-Revise di DeepMind raddoppia quel numero. Come la self-critique strutturata intercetta le dipendenze rotte prima dell'esecuzione.",
    },
  },
  {
    slug: "choosing-a-school-with-zero-data",
    title: {
      en: "Choosing a School With Zero Data",
      it: "Scegliere una scuola con zero dati",
    },
    excerpt: {
      en: "Italian families face two education decisions that shape the next decade. Most make them based on open day impressions and what the neighbors' kids chose. Employment data exists. Almost nobody uses it.",
      it: "Le famiglie italiane affrontano due decisioni scolastiche che condizionano il prossimo decennio. La maggior parte le prende in base alle impressioni degli open day e a cosa hanno scelto i figli dei vicini. I dati occupazionali esistono. Quasi nessuno li usa.",
    },
    category: "insight",
    tags: ["school-choice", "RIASEC", "Italian-education", "orientation", "career-data"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-20",
    readingTime: 6,
    coverEmoji: "\uD83C\uDF93",
    relatedSkillSlug: "ask-to-andrew",
    metaTitle: {
      en: "Choosing a School With Zero Data | Skillwire Blog",
      it: "Scegliere una scuola con zero dati | Skillwire Blog",
    },
    metaDescription: {
      en: "Italian families choose schools based on open days and word of mouth. RIASEC assessments and Almalaurea employment data exist but rarely reach the families who need them most.",
      it: "Le famiglie italiane scelgono le scuole in base agli open day e al passaparola. Assessment RIASEC e dati occupazionali Almalaurea esistono ma raramente raggiungono chi ne ha pi\u00f9 bisogno.",
    },
  },
  {
    slug: "why-your-b2b-deck-loses-the-room",
    title: {
      en: "Why Your B2B Deck Loses the Room in the First Five Slides",
      it: "Perch\u00e9 il tuo deck B2B perde la sala nelle prime cinque slide",
    },
    excerpt: {
      en: "The CFO checks email on slide three. The CIO loses interest on slide five. Your deck is well-built. It's just built for no one in particular.",
      it: "Il CFO controlla le email alla slide tre. Il CIO perde interesse alla slide cinque. Il tuo deck \u00e8 ben fatto. Semplicemente non \u00e8 fatto per nessuno in particolare.",
    },
    category: "insight",
    tags: ["B2B-sales", "presentations", "C-level", "Challenger", "storytelling"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-20",
    readingTime: 7,
    coverEmoji: "\uD83C\uDFAF",
    relatedSkillSlug: "b2b-presentation-builder",
    metaTitle: {
      en: "Why Your B2B Deck Loses the Room | Skillwire Blog",
      it: "Perch\u00e9 il tuo deck B2B perde la sala | Skillwire Blog",
    },
    metaDescription: {
      en: "Generic decks fail because they serve no specific audience. Learn how structural and narrative frameworks solve the multi-stakeholder presentation problem.",
      it: "I deck generici falliscono perch\u00e9 non servono nessun audience specifico. Come i framework strutturali e narrativi risolvono il problema delle presentazioni multi-stakeholder.",
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
