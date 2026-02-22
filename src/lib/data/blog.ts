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
    slug: "the-context-tax-of-stateless-ai",
    title: {
      en: "The Context Tax: Why You Spend 20% of Every AI Session Repeating Yourself",
      it: "La tassa del contesto: perch\u00e9 passi il 20% di ogni sessione AI a ripeterti",
    },
    excerpt: {
      en: "You told Claude about the Acme deal on Monday. On Tuesday it had no idea what Acme was. By Thursday you were keeping a text file to paste at the start of every session. The problem has a name: stateless sessions.",
      it: "Luned\u00ec hai parlato a Claude del deal Acme. Marted\u00ec non sapeva cos'era Acme. Gioved\u00ec tenevi un file di testo da incollare a inizio di ogni sessione. Il problema ha un nome: sessioni stateless.",
    },
    category: "insight",
    tags: ["claude-code", "memory", "persistence", "productivity", "workflow"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-20",
    readingTime: 6,
    coverEmoji: "\uD83E\uDDE0",
    relatedSkillSlug: "memory-manager",
    metaTitle: {
      en: "The Context Tax of Stateless AI | Skillwire Blog",
      it: "La tassa del contesto dell'AI stateless | Skillwire Blog",
    },
    metaDescription: {
      en: "Every Claude Code session starts from zero. You re-explain context, clients, projects. The cost compounds daily. Here's what persistent memory looks like in practice.",
      it: "Ogni sessione Claude Code parte da zero. Ri-spieghi contesto, clienti, progetti. Il costo si accumula ogni giorno. Ecco come funziona la memoria persistente in pratica.",
    },
  },
  {
    slug: "you-are-prompting-image-ai-wrong",
    title: {
      en: "You Are Prompting Image AI Wrong",
      it: "Stai promptando l'AI visiva nel modo sbagliato",
    },
    excerpt: {
      en: "\"Futuristic city, neon, 4k, cinematic.\" You type it and get the same image everyone else gets. The model can produce professional infographics, consistent character series, and architectural renders from floor plans. You just never learned how to ask.",
      it: "\"Citt\u00e0 futuristica, neon, 4k, cinematico.\" Lo scrivi e ottieni la stessa immagine che ottengono tutti. Il modello pu\u00f2 produrre infografiche professionali, serie di personaggi consistenti, e render architettonici da planimetrie. Non hai mai imparato come chiedere.",
    },
    category: "insight",
    tags: ["visual-AI", "prompt-engineering", "Nano-Banana-Pro", "image-generation", "creative-direction"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-20",
    readingTime: 6,
    coverEmoji: "\uD83C\uDFA8",
    relatedSkillSlug: "nano-banana-guru",
    metaTitle: {
      en: "You Are Prompting Image AI Wrong | Skillwire Blog",
      it: "Stai promptando l'AI visiva nel modo sbagliato | Skillwire Blog",
    },
    metaDescription: {
      en: "Tag soups produce generic AI images. Structured briefs produce professional visual artifacts. The difference is how you talk to the model, not which model you use.",
      it: "Le zuppe di tag producono immagini AI generiche. I brief strutturati producono artefatti visivi professionali. La differenza \u00e8 come parli al modello, non quale modello usi.",
    },
  },
  {
    slug: "the-gap-between-rendering-and-motion-design",
    title: {
      en: "The Gap Between Rendering a Video and Making One That Looks Good",
      it: "Il gap tra renderizzare un video e farne uno che sembra professionale",
    },
    excerpt: {
      en: "Your Remotion video renders. It also looks like a PowerPoint that learned to move. The problem isn't the framework. It's the missing layer between API knowledge and motion design intuition.",
      it: "Il tuo video Remotion renderizza. Sembra anche un PowerPoint che ha imparato a muoversi. Il problema non \u00e8 il framework. \u00c8 il livello mancante tra la conoscenza delle API e l'intuizione di motion design.",
    },
    category: "insight",
    tags: ["Remotion", "React", "video", "motion-design", "animation", "programmatic-video"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-20",
    readingTime: 6,
    coverEmoji: "\uD83C\uDFAC",
    relatedSkillSlug: "remotion-best-practices",
    metaTitle: {
      en: "The Gap Between Rendering and Motion Design | Skillwire Blog",
      it: "Il gap tra renderizzare e fare motion design | Skillwire Blog",
    },
    metaDescription: {
      en: "Remotion gives you React-based video creation. What it doesn't give you is motion design knowledge: when to use spring with overshoot, why stagger timing matters, how narrative arcs keep viewers engaged.",
      it: "Remotion ti d\u00e0 la creazione video basata su React. Quello che non ti d\u00e0 \u00e8 la conoscenza di motion design: quando usare spring con overshoot, perch\u00e9 il timing sfalsato conta, come gli archi narrativi tengono agganciati gli spettatori.",
    },
  },
  {
    slug: "why-ai-projects-lose-coherence",
    title: {
      en: "Why AI Projects Lose Coherence After Step Three",
      it: "Perch\u00e9 i progetti AI perdono coerenza dopo il terzo step",
    },
    excerpt: {
      en: "You start a complex project with Claude. The first three steps are brilliant. By step five, the AI contradicts step two. By step eight, you're correcting more than creating. The problem isn't capability. It's the absence of project structure.",
      it: "Inizi un progetto complesso con Claude. I primi tre step sono brillanti. Allo step cinque, l'AI contraddice lo step due. Allo step otto, correggi pi\u00f9 di quanto crei. Il problema non \u00e8 la capacit\u00e0. \u00c8 l'assenza di struttura progettuale.",
    },
    category: "insight",
    tags: ["multi-agent", "AI-projects", "quality-assurance", "orchestration", "Claude-Code"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-20",
    readingTime: 6,
    coverEmoji: "\uD83C\uDFD7\uFE0F",
    relatedSkillSlug: "maia",
    metaTitle: {
      en: "Why AI Projects Lose Coherence After Step Three | Skillwire Blog",
      it: "Perch\u00e9 i progetti AI perdono coerenza dopo il terzo step | Skillwire Blog",
    },
    metaDescription: {
      en: "Complex AI projects drift because there's no structure between steps. No quality checks, no context management, no milestone control. Software development solved this decades ago. AI project execution hasn't.",
      it: "I progetti AI complessi vanno alla deriva perch\u00e9 non c'\u00e8 struttura tra gli step. Nessun controllo qualit\u00e0, nessuna gestione del contesto, nessun controllo delle milestone. Lo sviluppo software lo ha risolto decenni fa. L'esecuzione dei progetti AI no.",
    },
  },
  {
    slug: "when-one-ai-model-isnt-enough",
    title: {
      en: "When One AI Model Isn't Enough",
      it: "Quando un solo modello AI non basta",
    },
    excerpt: {
      en: "You trusted Claude's recommendation. Two weeks later you hit a flaw that GPT would have caught. Every model has blind spots. The question is whether you discover them before or after you commit.",
      it: "Hai seguito la raccomandazione di Claude. Due settimane dopo hai incontrato un difetto che GPT avrebbe intercettato. Ogni modello ha punti ciechi. La domanda \u00e8 se li scopri prima o dopo esserti impegnato.",
    },
    category: "insight",
    tags: ["multi-AI", "Claude", "ChatGPT", "Gemini", "orchestration", "decision-making"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-20",
    readingTime: 6,
    coverEmoji: "\u2694\uFE0F",
    relatedSkillSlug: "llm-arena-vs",
    metaTitle: {
      en: "When One AI Model Isn't Enough | Skillwire Blog",
      it: "Quando un solo modello AI non basta | Skillwire Blog",
    },
    metaDescription: {
      en: "Every AI model has blind spots. Claude reasons differently from GPT, which reasons differently from Gemini. Running all three on the same task reveals what no single model shows you.",
      it: "Ogni modello AI ha punti ciechi. Claude ragiona diversamente da GPT, che ragiona diversamente da Gemini. Eseguire tutti e tre sullo stesso task rivela ci\u00f2 che nessun singolo modello ti mostra.",
    },
  },
  {
    slug: "the-n8n-knowledge-gap",
    title: {
      en: "Why Building n8n Workflows Takes 10x Longer Than It Should",
      it: "Perch\u00e9 costruire workflow n8n richiede 10 volte pi\u00f9 tempo del dovuto",
    },
    excerpt: {
      en: "The bottleneck in n8n automation isn't the building. It's the searching: docs in one tab, community forums in another, Stack Overflow in a third. The knowledge exists. It's just scattered across a hundred sources.",
      it: "Il collo di bottiglia nell'automazione n8n non \u00e8 la costruzione. \u00c8 la ricerca: docs in un tab, forum community in un altro, Stack Overflow in un terzo. La conoscenza esiste. \u00c8 solo sparsa su cento fonti diverse.",
    },
    category: "insight",
    tags: ["n8n", "workflow-automation", "AI-workflows", "no-code", "productivity"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-20",
    readingTime: 7,
    coverEmoji: "\u26A1",
    relatedSkillSlug: "n8n-ai-workflow-expert",
    metaTitle: {
      en: "Why n8n Workflows Take 10x Longer Than They Should | Skillwire Blog",
      it: "Perch\u00e9 i workflow n8n richiedono 10x pi\u00f9 tempo del dovuto | Skillwire Blog",
    },
    metaDescription: {
      en: "n8n documentation is scattered across hundreds of pages. AI workflow patterns are buried in forums. A knowledge system inside your editor changes the equation.",
      it: "La documentazione n8n \u00e8 sparsa su centinaia di pagine. I pattern workflow AI sono sepolti nei forum. Un sistema di conoscenza dentro il tuo editor cambia l'equazione.",
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
    slug: "from-chatbot-to-operating-system",
    title: {
      en: "From Chatbot to Operating System: What Happens When Claude Code Remembers Everything",
      it: "Da chatbot a sistema operativo: cosa succede quando Claude Code ricorda tutto",
    },
    excerpt: {
      en: "Your CLAUDE.md has four lines. No session logs, no agents, no tracking. You are running a professional tool on a sticky note. Here is what a complete workspace looks like and how to build one in thirty minutes.",
      it: "Il tuo CLAUDE.md ha quattro righe. Nessun log delle sessioni, nessun agente, nessun tracking. Stai usando uno strumento professionale con un post-it. Ecco come appare un workspace completo e come costruirne uno in trenta minuti.",
    },
    category: "insight",
    tags: ["claude-code", "workspace", "setup", "session-management", "productivity", "ecosystem"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-21",
    readingTime: 7,
    coverEmoji: "\uD83C\uDFD7\uFE0F",
    relatedSkillSlug: "workspace-architect",
    metaTitle: {
      en: "From Chatbot to Operating System: Building a Complete Claude Code Workspace | Skillwire Blog",
      it: "Da chatbot a sistema operativo: costruire un workspace Claude Code completo | Skillwire Blog",
    },
    metaDescription: {
      en: "Most Claude Code users run on a four-line CLAUDE.md. A complete workspace adds session management, agents, ROI tracking, and self-improvement. Here is the difference it makes.",
      it: "La maggior parte degli utenti Claude Code lavora con un CLAUDE.md di quattro righe. Un workspace completo aggiunge gestione sessioni, agenti, tracking ROI e auto-miglioramento. Ecco che differenza fa.",
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
  {
    slug: "communication-patterns-hidden-in-your-meetings",
    title: {
      en: "The Communication Patterns Hiding in Your Meeting Recordings",
      it: "I pattern comunicativi nascosti nelle tue registrazioni meeting",
    },
    excerpt: {
      en: "You transcribe your meetings. You never open those transcripts again. The feedback that could make you a better communicator is sitting in those files waiting to be read.",
      it: "Trascrivi i tuoi meeting. Non riapri mai quelle trascrizioni. Il feedback che potrebbe renderti un comunicatore migliore \u00e8 in quei file ad aspettare di essere letto.",
    },
    category: "insight",
    tags: ["communication", "meeting-analysis", "coaching", "transcript", "self-improvement"],
    author: "Alessandro Di Grazia",
    publishedAt: "2026-02-22",
    readingTime: 6,
    coverEmoji: "\uD83C\uDFA4",
    relatedSkillSlug: "meeting-insights-analyzer",
    metaTitle: {
      en: "The Communication Patterns Hiding in Your Meeting Recordings | Skillwire Blog",
      it: "I pattern comunicativi nascosti nelle tue registrazioni meeting | Skillwire Blog",
    },
    metaDescription: {
      en: "You transcribe meetings but never analyze them. Here is what a structured analysis of your transcripts reveals about your communication habits -- and how to track improvement over time.",
      it: "Trascrivi i meeting ma non li analizzi mai. Ecco cosa rivela un'analisi strutturata delle tue trascrizioni sui tuoi pattern comunicativi -- e come tracciare il miglioramento nel tempo.",
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
