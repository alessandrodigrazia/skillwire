import type { CategorySlug } from "@/types";

type L = { en: string; it: string };

export interface ChangelogEntry {
  version: string;
  date: string;
  changes: L[];
}

export interface SkillDetail {
  slug: string;
  name: string;
  technicalName: string;
  tagline: L;
  category: CategorySlug;
  tags: string[];
  price: number;
  currency: "EUR";
  isFree: boolean;
  isBundleOnly: boolean;
  badge: string | null;
  icon: string;
  filesCount: number;
  launchPhase: 1 | 2 | 3;
  complexity: 1 | 2 | 3 | 4 | 5;
  version: string;
  changelog: ChangelogEntry[];
  bundleSlugs: string[];
  metaTitle: L;
  metaDescription: L;
  averageRating: number;
  reviewCount: number;
  problem: L;
  solution: L;
  result: L;
  whatsInside: L[];
  whoIsThisFor: L[];
  notFor: L;
  beforeAfter: { before: L; after: L }[];
  faq: { question: L; answer: L }[];
  relatedSlugs: string[];
  compatibleWith: "Claude Code" | "Claude Code + Desktop" | "All Platforms";
  prerequisites: string[];
  hasTerminalVideo?: boolean;
}

/* Resolve a localized value */
export function t(val: L, locale: string): string {
  return locale === "it" ? val.it : val.en;
}

export const categories: {
  slug: CategorySlug;
  name: L;
  icon: string;
  description: L;
}[] = [
  {
    slug: "sales",
    name: { en: "Sales & Business", it: "Sales & Business" },
    icon: "target",
    description: {
      en: "Skills for B2B sales methodology, negotiation, presentations, and deal management",
      it: "Skill per metodologia vendita B2B, negoziazione, presentazioni e gestione trattative",
    },
  },
  {
    slug: "career",
    name: { en: "Career & Coaching", it: "Carriera & Coaching" },
    icon: "compass",
    description: {
      en: "AI-powered career coaching, school orientation, CV optimization",
      it: "Career coaching AI, orientamento scolastico, ottimizzazione CV",
    },
  },
  {
    slug: "content",
    name: { en: "Content & Writing", it: "Contenuti & Scrittura" },
    icon: "pen-tool",
    description: {
      en: "Content humanization, editorial pipelines, LinkedIn thought leadership",
      it: "Umanizzazione contenuti, pipeline editoriali, thought leadership LinkedIn",
    },
  },
  {
    slug: "automation",
    name: { en: "Automation", it: "Automazione" },
    icon: "zap",
    description: {
      en: "n8n workflow creation, automation templates, documentation",
      it: "Creazione workflow n8n, template automazione, documentazione",
    },
  },
  {
    slug: "devtools",
    name: { en: "Developer Tools", it: "Strumenti Developer" },
    icon: "terminal",
    description: {
      en: "Skill creation, multi-agent orchestration, research frameworks",
      it: "Creazione skill, orchestrazione multi-agente, framework di ricerca",
    },
  },
];

/* ── Curated ordering ─────────────────────────────────── */

export const FEATURED_SLUGS = [
  "human-writer",
  "ai-b2b-sales-methodology",
  "ask-to-vera",
  "content-pipeline-pro",
  "janus",
  "deep-research-agent",
  "cv-guru",
  "skill-creator-guru",
] as const;

const CATALOG_ORDER = [
  ...FEATURED_SLUGS,
  "b2b-presentation-builder",
  "ask-to-andrew",
  "iterative-self-critique",
  "n8n-ai-workflow-expert",
  "n8n-docs-live",
  "n8n-workflow-repository",
  "memory-manager",
  "maia",
  "llm-arena-vs",
  "remotion-best-practices",
  "nano-banana-guru",
] as const;

const catalogIndex = new Map<string, number>(CATALOG_ORDER.map((slug, i) => [slug, i]));

export function getFeaturedSkills(): SkillDetail[] {
  return FEATURED_SLUGS.map((slug) => skills.find((s) => s.slug === slug)!);
}

export function getSkillsSorted(): SkillDetail[] {
  return [...skills].sort(
    (a, b) => (catalogIndex.get(a.slug) ?? 99) - (catalogIndex.get(b.slug) ?? 99)
  );
}

/* ── Skills data ──────────────────────────────────────── */

export const skills: SkillDetail[] = [
  {
    slug: "ask-to-andrew",
    name: "SchoolPath AI",
    technicalName: "ask-to-andrew",
    tagline: {
      en: "AI-powered school & university orientation for Italian students",
      it: "Orientamento scolastico e universitario AI per studenti italiani",
    },
    category: "career",
    tags: ["orientation", "education", "RIASEC", "Italian students"],
    price: 29,
    currency: "EUR",
    isFree: false,
    isBundleOnly: false,
    badge: "new",
    icon: "graduation-cap",
    filesCount: 14,
    launchPhase: 1,
    complexity: 3,
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          { en: "Initial release with RIASEC assessment and Italian pathway mapping", it: "Rilascio iniziale con test RIASEC e mappatura percorsi formativi italiani" },
        ],
      },
    ],
    bundleSlugs: ["career-navigator"],
    metaTitle: {
      en: "SchoolPath AI \u2014 AI School & University Orientation",
      it: "SchoolPath AI \u2014 Orientamento Scolastico e Universitario AI",
    },
    metaDescription: {
      en: "Help your child choose the right school or university with AI-powered RIASEC testing and Italian education pathway mapping.",
      it: "Aiuta tuo figlio a scegliere la scuola o l\u2019universit\u00e0 giusta con test RIASEC e mappatura dei percorsi formativi italiani.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "Choosing the right school or university is one of the most stressful decisions for Italian families. Generic orientation tests give vague results. Private career counselors charge \u20AC80-200 per session. And most tools ignore the specifics of the Italian education system \u2014 licei, tecnici, professionali, ITS, university faculties.",
      it: "Scegliere la scuola o l\u2019universit\u00e0 giusta \u00e8 una delle decisioni pi\u00f9 stressanti per le famiglie italiane. I test di orientamento generici danno risultati vaghi. I consulenti privati costano \u20AC80-200 a sessione. E la maggior parte degli strumenti ignora le specificit\u00e0 del sistema scolastico italiano \u2014 licei, tecnici, professionali, ITS, facolt\u00e0 universitarie.",
    },
    solution: {
      en: "SchoolPath AI runs a validated RIASEC Holland assessment (30 items), then maps results to every Italian education pathway. Two specialized branches: one for students aged 12-13 choosing high school, another for 17-18 year-olds deciding between university, ITS, or the workforce. It includes employment data from Almalaurea and Excelsior, and a \u201CDream vs Reality\u201D protocol for unrealistic career expectations.",
      it: "SchoolPath AI esegue un test RIASEC Holland validato (30 item), poi mappa i risultati su ogni percorso formativo italiano. Due branch specializzati: uno per studenti di 12-13 anni che scelgono le superiori, uno per 17-18enni che decidono tra universit\u00e0, ITS o lavoro. Include dati occupazionali da Almalaurea ed Excelsior e un protocollo \u201CSogno vs Realt\u00e0\u201D per aspettative irrealistiche.",
    },
    result: {
      en: "Families get a personalized report with 3 realistic pathways, employment statistics, and a clear action plan \u2014 all for the price of a pizza dinner instead of a \u20AC200 counseling session.",
      it: "Le famiglie ricevono un report personalizzato con 3 percorsi realistici, statistiche occupazionali e un piano d\u2019azione chiaro \u2014 tutto al prezzo di una pizza invece di una sessione da \u20AC200.",
    },
    whatsInside: [
      { en: "14 files organized in 2 specialized branches", it: "14 file organizzati in 2 branch specializzati" },
      { en: "RIASEC Holland test: 30-item validated assessment with scoring", it: "Test RIASEC Holland: 30 item validati con scoring" },
      { en: "High School branch: complete mapping of licei, tecnici, professionali", it: "Branch Scuole Superiori: mappatura completa di licei, tecnici, professionali" },
      { en: "University branch: faculty mapping with Almalaurea employment data", it: "Branch Universit\u00e0: mappatura facolt\u00e0 con dati occupazionali Almalaurea" },
      { en: "Dream vs Reality protocol for unrealistic career expectations", it: "Protocollo Sogno vs Realt\u00e0 per aspettative irrealistiche" },
      { en: "Personalized report generator with 3 recommended pathways", it: "Generatore di report personalizzato con 3 percorsi consigliati" },
    ],
    whoIsThisFor: [
      { en: "Parents helping their 12-13 year old choose a high school", it: "Genitori che aiutano il figlio di 12-13 anni a scegliere la scuola superiore" },
      { en: "Students aged 17-18 deciding between university, ITS, or work", it: "Studenti di 17-18 anni che decidono tra universit\u00e0, ITS o lavoro" },
      { en: "School counselors who want an AI-powered orientation tool", it: "Consulenti scolastici che vogliono uno strumento di orientamento AI" },
    ],
    notFor: {
      en: "Anyone outside the Italian school system (the data is Italy-specific)",
      it: "Chi non fa parte del sistema scolastico italiano (i dati sono specifici per l\u2019Italia)",
    },
    beforeAfter: [
      {
        before: { en: "Generic online tests that say \u201Cyou\u2019re creative\u201D with no actionable path", it: "Test online generici che dicono \u201Csei creativo\u201D senza un percorso concreto" },
        after: { en: "RIASEC-validated assessment mapped to specific Italian school types", it: "Valutazione RIASEC validata mappata su specifici tipi di scuola italiana" },
      },
      {
        before: { en: "\u20AC80-200 for a single orientation session with a counselor", it: "\u20AC80-200 per una singola sessione di orientamento con un consulente" },
        after: { en: "Complete orientation system for \u20AC29 \u2014 reusable anytime", it: "Sistema di orientamento completo a \u20AC29 \u2014 riutilizzabile quando vuoi" },
      },
      {
        before: { en: "No employment data \u2014 choosing based on gut feeling", it: "Nessun dato occupazionale \u2014 scelta basata sull\u2019istinto" },
        after: { en: "Almalaurea & Excelsior employment statistics for every pathway", it: "Statistiche occupazionali Almalaurea ed Excelsior per ogni percorso" },
      },
    ],
    faq: [
      {
        question: { en: "What exactly do I get when I buy this?", it: "Cosa ricevo esattamente quando acquisto?" },
        answer: {
          en: "A ZIP file containing 14 files: the RIASEC test, two specialized orientation branches, employment data, and a personalized report generator. No subscription needed.",
          it: "Un file ZIP con 14 file: il test RIASEC, due branch di orientamento specializzati, dati occupazionali e un generatore di report personalizzato. Nessun abbonamento necessario.",
        },
      },
      {
        question: { en: "Is this only for Italian students?", it: "\u00c8 solo per studenti italiani?" },
        answer: {
          en: "Yes. The education pathway mapping, employment data, and school types are specific to the Italian system (MIM 2023 guidelines).",
          it: "S\u00ec. La mappatura dei percorsi formativi, i dati occupazionali e i tipi di scuola sono specifici per il sistema italiano (linee guida MIM 2023).",
        },
      },
      {
        question: { en: "Does my child need to use Claude Code directly?", it: "Mio figlio deve usare Claude Code direttamente?" },
        answer: {
          en: "A parent or counselor typically runs the session. The child answers the RIASEC questions verbally while the adult interacts with Claude.",
          it: "Un genitore o consulente gestisce tipicamente la sessione. Il ragazzo risponde alle domande RIASEC a voce mentre l\u2019adulto interagisce con Claude.",
        },
      },
      {
        question: { en: "Do I need to know how to code?", it: "Devo saper programmare?" },
        answer: {
          en: "No. You interact with the skill through natural conversation in Claude Code.",
          it: "No. Interagisci con la skill attraverso conversazione naturale in Claude Code.",
        },
      },
      {
        question: { en: "Can I get a refund?", it: "Posso ottenere un rimborso?" },
        answer: {
          en: "Skills are digital products. All sales are final. We recommend reviewing the skill details carefully before purchasing.",
          it: "Le skill sono prodotti digitali. Tutte le vendite sono definitive. Ti consigliamo di leggere attentamente i dettagli della skill prima dell\u2019acquisto.",
        },
      },
    ],
    relatedSlugs: ["ask-to-vera", "human-writer"],
  compatibleWith: "All Platforms",
  prerequisites: [],
  hasTerminalVideo: true,
  },
  {
    slug: "human-writer",
    name: "HumanWriter",
    technicalName: "human-writer",
    tagline: {
      en: "Remove the invisible fingerprint AI leaves on everything you write",
      it: "Cancella la firma invisibile che l'AI lascia in ogni testo",
    },
    category: "content",
    tags: ["humanization", "writing", "AI detection", "bilingual"],
    price: 29,
    currency: "EUR",
    isFree: false,
    isBundleOnly: false,
    badge: "best-seller",
    icon: "pen-line",
    filesCount: 7,
    launchPhase: 1,
    complexity: 3,
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          { en: "Initial release with 5-layer humanization engine", it: "Rilascio iniziale con motore di umanizzazione a 5 livelli" },
        ],
      },
    ],
    bundleSlugs: ["career-navigator", "linkedin-toolkit"],
    metaTitle: {
      en: "HumanWriter: Make Every AI-Written Text Sound Human",
      it: "HumanWriter: fai suonare umano ogni testo scritto con l'AI",
    },
    metaDescription: {
      en: "200+ AI patterns per language detected and corrected. 4 severity tiers, model-specific detection. The only bilingual IT/EN humanization tool for Claude.",
      it: "200+ pattern AI per lingua rilevati e corretti. 4 livelli di gravit\u00e0, rilevamento per modello. L'unico tool di umanizzazione bilingue IT/EN per Claude.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You publish a LinkedIn post. Engagement rolls in, then someone drops the comment you dread: 'Great post. ChatGPT?' You use AI to write. Everyone does. Some people get caught. Every model leaves fingerprints: 'moreover' five times in one piece, 'it's worth noting' scattered everywhere, that predictable three-item list structure. Italian AI text has entirely different tells: 'inoltre' chains, '\u00e8 interessante notare che', American motivational tone where it doesn't belong. You spend 30 minutes editing each draft, but there are hundreds of patterns and your eyes catch maybe ten. If you write in both English and Italian, the problem doubles because the signatures change across languages.",
      it: "Pubblichi un post su LinkedIn. Le reazioni arrivano, ma un commento ti gela: \"Bello, scritto bene. ChatGPT?\" Usi l'AI per scrivere, e si vede. Ogni modello lascia tracce riconoscibili: \"inoltre\" ripetuto cinque volte nello stesso testo, frasi come \"\u00e8 interessante notare che\", elenchi sempre da tre punti. In inglese succede lo stesso con \"moreover\", \"it's worth noting\", l'apertura \"in today's rapidly evolving world\". Rileggi e correggi per mezz'ora, ma i pattern sono centinaia e il tuo occhio ne coglie forse dieci. Se poi scrivi in italiano e in inglese, la situazione peggiora: i segnali AI cambiano completamente da una lingua all'altra.",
    },
    solution: {
      en: "HumanWriter maps over 200 AI writing patterns per language across a 4-tier severity system: CRITICAL, HIGH, MEDIUM, STYLE. It tells ChatGPT's fingerprints apart from Claude's and Gemini's. It knows that formal connectors are normal in an academic paper but scream 'AI' in a LinkedIn post. For Italian, it enforces VARIATIO: the stylistic rule requiring word variation in close proximity, which no AI model follows. Every flagged pattern comes with concrete alternatives: before and after, plus an explanation of why that specific detail gives away the artificial origin.",
      it: "HumanWriter mappa oltre 200 pattern di scrittura AI per ciascuna lingua, organizzati su 4 livelli di gravit\u00e0: CRITICO, ALTO, MEDIO e STILE. Sa distinguere la firma di ChatGPT da quella di Claude o Gemini. Riconosce la differenza tra un paper accademico (dove certi formalismi sono normali) e un post LinkedIn (dove quegli stessi formalismi gridano 'AI'). Per l'italiano applica il principio del VARIATIO: quella regola stilistica che nessun modello AI rispetta, cio\u00e8 non ripetere mai la stessa parola a breve distanza. Ogni pattern segnalato arriva con alternative concrete: prima e dopo, con la spiegazione del perch\u00e9 quel dettaglio tradisce l'origine artificiale.",
    },
    result: {
      en: "Your writing passes both human readers and automated detection tools. Manual editing drops from 30 minutes to 5. You write with AI and stop worrying about it. You publish knowing the text sounds like you, not like a language model. It works with equal precision in English and Italian because the pattern databases are separate, built specifically for each language.",
      it: "I tuoi testi passano il giudizio dei lettori e i rilevatori automatici. L'editing manuale scende da 30 minuti a 5. Scrivi con l'AI senza pi\u00f9 pensarci. Pubblichi sapendo che il testo suona come te, non come un modello linguistico. Funziona con la stessa precisione in italiano e in inglese, perch\u00e9 i database sono separati e costruiti specificamente per ciascuna lingua.",
    },
    whatsInside: [
      { en: "200+ AI patterns per language with real frequency data (e.g. 'moreover' appears 8-10x more in AI text)", it: "200+ pattern AI per lingua con dati di frequenza reali (es. 'inoltre' compare 5-8 volte pi\u00f9 spesso nei testi AI)" },
      { en: "Model-specific detection: identifies ChatGPT, Claude and Gemini by their stylistic fingerprints", it: "Rilevamento per modello: identifica ChatGPT, Claude e Gemini dalla loro firma stilistica" },
      { en: "4 severity tiers with probabilistic scoring (from 0% to 99% AI likelihood)", it: "4 livelli di gravit\u00e0 con scoring probabilistico (da 0% a 99% di probabilit\u00e0 AI)" },
      { en: "Concrete alternatives with before/after examples for every pattern category", it: "Alternative concrete con esempi prima/dopo per ogni categoria di pattern" },
      { en: "Context-aware analysis: same word flags differently in academic papers vs LinkedIn posts", it: "Analisi contestuale: la stessa parola ha gravit\u00e0 diversa in un paper accademico e in un post LinkedIn" },
      { en: "Cultural rules built in: Italian vs American professional tone, VARIATIO principle, typography", it: "Regole culturali integrate: tono professionale italiano vs americano, principio VARIATIO, tipografia" },
    ],
    whoIsThisFor: [
      { en: "Professionals who publish on LinkedIn and need credibility, not suspicion", it: "Professionisti che pubblicano su LinkedIn e vogliono credibilit\u00e0, non sospetti" },
      { en: "Content creators and copywriters who draft with AI but sign with their name", it: "Content creator e copywriter che scrivono con l'AI ma firmano con il proprio nome" },
      { en: "Bilingual professionals who need text that sounds native in both languages", it: "Chi lavora in due lingue e ha bisogno che il testo suoni nativo in entrambe" },
      { en: "Freelancers and consultants who can't afford to sound AI-generated", it: "Freelance e consulenti che non possono permettersi di sembrare 'generati dall'AI'" },
    ],
    notFor: {
      en: "Anyone looking for a spell-checker or grammar tool. This skill works on style, not syntax.",
      it: "Chi cerca un correttore ortografico o grammaticale. Questa skill lavora sullo stile, non sulla sintassi.",
    },
    beforeAfter: [
      {
        before: { en: "Your colleagues spot the AI text and trust what you write a little less each time", it: "I tuoi colleghi riconoscono il testo AI e perdono fiducia in quello che scrivi" },
        after: { en: "You publish content that sounds authentically yours. Nobody suspects AI.", it: "Pubblichi contenuti che suonano autenticamente tuoi. Nessuno sospetta l'AI." },
      },
      {
        before: { en: "You reread every draft for 30 minutes hunting for suspicious patterns by eye", it: "Rileggi ogni bozza per 30 minuti cercando a occhio i pattern sospetti" },
        after: { en: "Full analysis in seconds: every pattern found, cataloged, with a ready alternative", it: "Analisi completa in pochi secondi: ogni pattern trovato, catalogato, con alternativa pronta" },
      },
      {
        before: { en: "English-only tools miss the patterns specific to Italian AI writing", it: "I tool solo in inglese non colgono i segnali specifici della scrittura AI italiana" },
        after: { en: "200+ dedicated Italian patterns, including the VARIATIO principle no other tool knows", it: "200+ pattern italiani dedicati, incluso il principio VARIATIO che nessun altro tool conosce" },
      },
      {
        before: { en: "You know the text 'sounds AI' but can't pinpoint exactly where or why", it: "Sai che il testo 'suona AI' ma non riesci a capire esattamente dove e perch\u00e9" },
        after: { en: "Probabilistic scoring: you see the reason behind every flag, with severity and frequency data", it: "Scoring probabilistico: vedi il perch\u00e9 di ogni segnalazione, con gravit\u00e0 e frequenza precisa" },
      },
    ],
    faq: [
      {
        question: { en: "How many patterns does it actually detect?", it: "Quanti pattern rileva esattamente?" },
        answer: {
          en: "Over 200 per language, each documented with real-world frequency data. For example, 'moreover' appears 8-10x more often in AI text than in human writing. Every pattern includes concrete before/after alternatives with an explanation of why it triggers detection.",
          it: "Oltre 200 per lingua, ciascuno documentato con dati di frequenza reali. Per esempio, 'inoltre' compare 5-8 volte pi\u00f9 spesso nei testi AI rispetto a quelli umani. Ogni pattern include alternative concrete prima/dopo con la spiegazione del perch\u00e9 attiva il rilevamento.",
        },
      },
      {
        question: { en: "Does it work with text from any AI model?", it: "Funziona con testo di qualsiasi modello AI?" },
        answer: {
          en: "Yes. The patterns cover output from ChatGPT, Claude, Gemini and other models. The skill can also identify which model generated the text by its stylistic signature: ChatGPT has different tells than Claude, which writes differently from Gemini.",
          it: "S\u00ec. I pattern coprono gli output di ChatGPT, Claude, Gemini e altri modelli. La skill sa anche identificare quale modello ha generato il testo dalla firma stilistica: ChatGPT ha tic diversi da Claude, che a sua volta scrive diversamente da Gemini.",
        },
      },
      {
        question: { en: "Do I need to know how to code?", it: "Devo saper programmare?" },
        answer: {
          en: "No. Paste your text into Claude and ask it to analyze with HumanWriter. You get back a detailed report with patterns found, severity levels and suggested alternatives. The whole interaction happens in natural language.",
          it: "No. Incolli il testo in Claude e chiedi di analizzarlo con HumanWriter. Ricevi un report dettagliato con i pattern trovati, i livelli di gravit\u00e0 e le alternative suggerite. L'intera interazione avviene in linguaggio naturale.",
        },
      },
      {
        question: { en: "Can I get a refund?", it: "Posso ottenere un rimborso?" },
        answer: {
          en: "Skills are digital products and all sales are final. Before buying, check the skill details and the demo video on this page to see exactly how it works.",
          it: "Le skill sono prodotti digitali e tutte le vendite sono definitive. Prima di acquistare, leggi i dettagli della skill e guarda il video dimostrativo in questa pagina per capire esattamente come funziona.",
        },
      },
    ],
    relatedSlugs: ["janus", "ask-to-andrew"],
  compatibleWith: "All Platforms",
  prerequisites: [],
  hasTerminalVideo: true,
  },
  {
    slug: "janus",
    name: "Janus",
    technicalName: "janus",
    tagline: {
      en: "Stress-test any idea before the room does it for you. Five analysis dimensions, ten scenarios, zero flattery.",
      it: "Stress-testa qualsiasi idea prima che lo faccia la sala riunioni. Cinque dimensioni di analisi, dieci scenari, zero adulazione.",
    },
    category: "sales",
    tags: ["critical analysis", "stress testing", "due diligence", "strategy"],
    price: 29,
    currency: "EUR",
    isFree: false,
    isBundleOnly: false,
    badge: "popular",
    icon: "scale",
    filesCount: 11,
    launchPhase: 1,
    complexity: 4,
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          { en: "Initial release with adversarial analysis and 8 critical lenses", it: "Rilascio iniziale con analisi avversaria e 8 lenti critiche" },
        ],
      },
    ],
    bundleSlugs: ["b2b-sales-pro", "linkedin-toolkit"],
    metaTitle: {
      en: "Janus: Critical Analysis Sparring Partner for Claude Code",
      it: "Janus: sparring partner di analisi critica per Claude Code",
    },
    metaDescription: {
      en: "Find the holes in your business plan before investors do. 5 analysis dimensions, 10 specialized scenarios, severity scoring. Built for people who prefer truth over encouragement.",
      it: "Trova le falle nel tuo business plan prima degli investitori. 5 dimensioni di analisi, 10 scenari specializzati, scoring di gravit\u00e0. Per chi preferisce la verit\u00e0 all'incoraggiamento.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You've spent three weeks on the business plan. You've reviewed it four times. It looks solid. Then you walk into the board meeting and the CFO asks a question you never considered. The CTO points out a technical assumption you took for granted. The CEO wants to know what happens if the market shifts. Forty-five minutes later, your \"solid\" plan has six open issues and a follow-up meeting. The problem was never the plan. The problem was that nobody stress-tested it before the room did.",
      it: "Hai lavorato tre settimane sul business plan. L'hai riletto quattro volte. Ti sembra solido. Poi entri nella riunione del board e il CFO fa una domanda che non avevi considerato. Il CTO evidenzia un'assunzione tecnica che davi per scontata. Il CEO vuole sapere cosa succede se il mercato cambia direzione. Quarantacinque minuti dopo, il tuo piano \"solido\" ha sei punti aperti e una riunione di follow-up. Il problema non era il piano. Il problema era che nessuno l'aveva messo alla prova prima della sala riunioni.",
    },
    solution: {
      en: "Janus examines your work the way a hostile board member would, except before the meeting. Every analysis runs through five mandatory dimensions: logical flaws and internal contradictions, implicit assumptions you're taking for granted, risks you haven't mapped, uncomfortable questions you need to answer, and concrete suggestions to fix what's broken. Each finding gets a severity tag (critical, medium, low) so you know what to fix first. The skill auto-detects which of ten specialized scenarios applies: investor pitch, go-to-market, product UX, technical due diligence, ESG assessment, partnership evaluation, sales presentation, public speech, operational scaling, or full 360-degree analysis. Different scenarios trigger different analytical lenses.",
      it: "Janus esamina il tuo lavoro come farebbe un membro ostile del board, solo che lo fa prima della riunione. Ogni analisi passa attraverso cinque dimensioni obbligatorie: falle logiche e contraddizioni interne, assunzioni implicite che stai dando per scontate, rischi che non hai mappato, domande scomode a cui devi rispondere, suggerimenti concreti per correggere quello che non funziona. Ogni criticit\u00e0 riceve un tag di gravit\u00e0 (critico, medio, basso) perch\u00e9 tu sappia cosa correggere prima. La skill rileva automaticamente quale dei dieci scenari specializzati si applica: pitch per investitori, go-to-market, prodotto digitale, due diligence tecnica, valutazione ESG, analisi partnership, presentazione commerciale, speech pubblico, scalabilit\u00e0 operativa o analisi 360 gradi completa. Scenari diversi attivano lenti analitiche diverse.",
    },
    result: {
      en: "You walk into the meeting having already heard the worst questions. The CFO's budget objection? Anticipated in the investor pitch analysis. The CTO's integration concern? Flagged as a critical risk in the technical due diligence. The CEO's market question? Addressed in the 360-degree review. Your plan still has weaknesses. The difference is that you know exactly what they are, how severe each one is, and what you're doing about them.",
      it: "Entri in riunione avendo gi\u00e0 sentito le domande peggiori. L'obiezione del CFO sul budget? Anticipata nell'analisi pitch investitori. La preoccupazione del CTO sull'integrazione? Segnalata come rischio critico nella due diligence tecnica. La domanda del CEO sul mercato? Affrontata nella review a 360 gradi. Il tuo piano ha ancora debolezze. La differenza \u00e8 che sai esattamente quali sono, quanto \u00e8 grave ciascuna, e cosa stai facendo per risolverle.",
    },
    whatsInside: [
      { en: "5 mandatory analysis dimensions: logic, assumptions, risks, tough questions, fixes", it: "5 dimensioni di analisi obbligatorie: logica, assunzioni, rischi, domande scomode, correzioni" },
      { en: "10 specialized scenarios from investor pitch to ESG due diligence", it: "10 scenari specializzati dal pitch investitori alla due diligence ESG" },
      { en: "Three-level severity scoring: critical, medium, low", it: "Scoring di gravit\u00e0 a tre livelli: critico, medio, basso" },
      { en: "Auto-detection: Janus picks the right analytical lens from your input", it: "Auto-rilevamento: Janus sceglie la lente analitica giusta dal tuo input" },
      { en: "Proportionality protocol: solid ideas get lighter critique, weak ones get heavier", it: "Protocollo di proporzionalit\u00e0: le idee solide ricevono critica leggera, quelle deboli pesante" },
      { en: "11 files, zero flattery, works entirely inside Claude Code", it: "11 file, zero adulazione, funziona interamente dentro Claude Code" },
    ],
    whoIsThisFor: [
      { en: "The founder presenting to investors next week who needs someone to find the holes first", it: "Il founder che presenta agli investitori la settimana prossima e ha bisogno che qualcuno trovi le falle prima" },
      { en: "The sales director reviewing a six-figure proposal before sending it to the C-suite", it: "Il direttore commerciale che rivede una proposta a sei cifre prima di inviarla al C-level" },
      { en: "The consultant delivering a strategy deck who can't afford to look unprepared", it: "Il consulente che presenta un deck strategico e non pu\u00f2 permettersi di sembrare impreparato" },
      { en: "The product leader defending a roadmap in front of skeptical stakeholders", it: "Il product leader che difende una roadmap davanti a stakeholder scettici" },
    ],
    notFor: {
      en: "If you want encouragement, validation, or a gentle review, Janus is the wrong tool. It's built for people who'd rather hear the truth from a screen than from a boardroom.",
      it: "Se cerchi incoraggiamento, validazione o una review gentile, Janus \u00e8 lo strumento sbagliato. \u00c8 costruito per chi preferisce sentire la verit\u00e0 da uno schermo piuttosto che da una sala riunioni.",
    },
    beforeAfter: [
      {
        before: { en: "The board finds three critical flaws in your plan during the presentation", it: "Il board trova tre falle critiche nel tuo piano durante la presentazione" },
        after: { en: "You found them yesterday, tagged them as critical, and prepared answers", it: "Le hai trovate ieri, taggate come critiche, e hai preparato le risposte" },
      },
      {
        before: { en: "You assumed the market would grow 15% and nobody questioned it", it: "Hai assunto che il mercato crescesse del 15% e nessuno l'ha messo in discussione" },
        after: { en: "Janus flagged the assumption as implicit and asked for your evidence", it: "Janus ha segnalato l'assunzione come implicita e chiesto le tue evidenze" },
      },
      {
        before: { en: "Your colleague reviewed the deck and said \"looks good to me\"", it: "Il tuo collega ha revisionato il deck e ha detto \"mi sembra a posto\"" },
        after: { en: "Janus returned 4 critical findings, 6 medium, and 2 low with specific fixes", it: "Janus ha restituito 4 criticit\u00e0 critiche, 6 medie e 2 basse con correzioni specifiche" },
      },
      {
        before: { en: "You used the same analytical lens for a pitch deck and a technical review", it: "Hai usato la stessa lente analitica per un pitch deck e una review tecnica" },
        after: { en: "Janus auto-selects the right scenario: financial lens for pitches, technical lens for due diligence", it: "Janus seleziona automaticamente lo scenario giusto: lente finanziaria per i pitch, lente tecnica per la due diligence" },
      },
    ],
    faq: [
      {
        question: { en: "What do I get when I buy this?", it: "Cosa ottengo con l'acquisto?" },
        answer: {
          en: "A ZIP with 11 files: the core SKILL.md with the analysis engine, plus 10 scenario-specific reference files for investor pitch, go-to-market, product UX, technical due diligence, ESG, partnerships, sales presentations, public speaking, operational scaling, and full 360-degree analysis. Install once, use forever.",
          it: "Un file ZIP con 11 file: il SKILL.md principale con il motore di analisi, pi\u00f9 10 file di riferimento specifici per scenario: pitch investitori, go-to-market, prodotto digitale, due diligence tecnica, ESG, partnership, presentazioni commerciali, public speaking, scalabilit\u00e0 operativa e analisi 360 gradi completa. Installi una volta, usi per sempre.",
        },
      },
      {
        question: { en: "Does it work with any type of document?", it: "Funziona con qualsiasi tipo di documento?" },
        answer: {
          en: "Yes, but it shines with the ten scenarios it's trained for. Drop in a pitch deck and it activates the investor analysis lens (financial sustainability, TAM/SAM/SOM, path to profitability). Drop in an architecture document and it switches to technical due diligence (security posture, scalability, single points of failure). For anything else, the 360-degree analysis covers the full spectrum.",
          it: "S\u00ec, ma d\u00e0 il meglio con i dieci scenari per cui \u00e8 addestrato. Inserisci un pitch deck e attiva la lente analisi investitori (sostenibilit\u00e0 finanziaria, TAM/SAM/SOM, percorso alla profittabilit\u00e0). Inserisci un documento di architettura e passa alla due diligence tecnica (sicurezza, scalabilit\u00e0, single point of failure). Per tutto il resto, l'analisi a 360 gradi copre l'intero spettro.",
        },
      },
      {
        question: { en: "How harsh is it really?", it: "Quanto \u00e8 severo davvero?" },
        answer: {
          en: "It follows a proportionality protocol. Solid ideas get focused critique on the most significant issues. Weak ideas get heavier treatment. But it never opens with praise, never softens findings, and never tells you your plan is great when it isn't. If a category has no significant issues, it says so. It doesn't invent problems to justify its existence.",
          it: "Segue un protocollo di proporzionalit\u00e0. Le idee solide ricevono critica mirata sulle questioni pi\u00f9 significative. Le idee deboli ricevono un trattamento pi\u00f9 pesante. Non apre mai con un complimento, non ammorbidisce i risultati e non ti dice che il tuo piano \u00e8 ottimo quando non lo \u00e8. Se una categoria non presenta criticit\u00e0 significative, lo dice. Non inventa problemi per giustificare la propria esistenza.",
        },
      },
      {
        question: { en: "Can I run multiple rounds of analysis?", it: "Posso fare pi\u00f9 passaggi di analisi?" },
        answer: {
          en: "Yes. Fix the critical findings from the first pass, then run Janus again. The follow-up only expands on findings already identified. It won't invent new criticalities to move the goalposts. Most users converge on a solid version in two to three iterations.",
          it: "S\u00ec. Correggi le criticit\u00e0 critiche dal primo passaggio, poi rilancia Janus. Il follow-up espande solo le criticit\u00e0 gi\u00e0 identificate. Non inventa nuove criticit\u00e0 per spostare i paletti. La maggior parte degli utenti arriva a una versione solida in due o tre iterazioni.",
        },
      },
    ],
    relatedSlugs: ["human-writer", "ask-to-vera"],
  compatibleWith: "All Platforms",
  prerequisites: [],
  hasTerminalVideo: true,
  },
  {
    slug: "ask-to-vera",
    name: "Vera Career Coach",
    technicalName: "ask-to-vera",
    tagline: {
      en: "A complete career coaching program with validated assessments. Eight sessions, three months, \u20ac49.",
      it: "Un programma completo di career coaching con assessment validati. Otto sessioni, tre mesi, 49\u20ac.",
    },
    category: "career",
    tags: ["career coaching", "job crafting", "career transition", "assessments"],
    price: 49,
    currency: "EUR",
    isFree: false,
    isBundleOnly: false,
    badge: "premium",
    icon: "compass",
    filesCount: 35,
    launchPhase: 1,
    complexity: 4,
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          { en: "Initial release with 6 evidence-based assessments and career coaching framework", it: "Rilascio iniziale con 6 assessment evidence-based e framework di career coaching" },
        ],
      },
    ],
    bundleSlugs: ["career-navigator"],
    metaTitle: {
      en: "Vera Career Coach: AI Career Coaching with Validated Assessments",
      it: "Vera Career Coach: career coaching AI con assessment validati",
    },
    metaDescription: {
      en: "8-session career coaching with PERMA, Career Anchors, and UWES-9. Three branches: Job Crafting, Career Transition, Purpose Discovery. Safety screening included.",
      it: "8 sessioni di career coaching con PERMA, Career Anchors e UWES-9. Tre percorsi: Job Crafting, Career Transition, Purpose Discovery. Screening di sicurezza incluso.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You've been thinking about your career for months. Maybe you open LinkedIn on Sunday night and feel a knot in your stomach. Maybe you sit through meetings wondering if this is really what you want to do for the next ten years. You know you need to do something, but you're not sure what. Change roles? Change companies? Change fields entirely? Stay and redesign what you have? Coaching could help. A good career coach charges \u20ac100-200 per session, and you need at least eight sessions to get anywhere. That's \u20ac800-1,600 you probably can't justify right now. So you read articles, take free personality tests online, and end up exactly where you started.",
      it: "Ci pensi da mesi. Forse apri LinkedIn la domenica sera e senti un nodo allo stomaco. Forse ti siedi in riunione chiedendoti se davvero vuoi fare questo per i prossimi dieci anni. Sai che devi fare qualcosa, ma non sai cosa. Cambiare ruolo? Cambiare azienda? Cambiare settore del tutto? Restare e ridisegnare quello che hai? Il coaching potrebbe aiutare. Un buon career coach chiede 100-200\u20ac a sessione, e ne servono almeno otto per andare da qualche parte. Sono 800-1.600\u20ac che probabilmente non puoi giustificare adesso. Allora leggi articoli, fai test di personalit\u00e0 gratuiti online, e ti ritrovi esattamente al punto di partenza.",
    },
    solution: {
      en: "Vera runs like a real coaching program. Eight sessions over three months, each built on validated psychological instruments. You start with an intake assessment that determines which of three branches fits your situation. Job Crafting if you want to redesign your current role without leaving. Career Transition if you're ready to move somewhere new. Purpose Discovery if you've achieved success but something still feels empty. Every session uses real assessments: PERMA for wellbeing, Career Anchors for your core motivators, UWES-9 for engagement levels. The skill also screens for depression and anxiety (PHQ-9/GAD-7) and recommends professional support if clinical thresholds are reached. This is coaching, not therapy, and Vera knows the difference.",
      it: "Vera funziona come un vero programma di coaching. Otto sessioni distribuite su tre mesi, ciascuna costruita su strumenti psicologici validati. Inizi con un assessment di ingresso che determina quale dei tre percorsi si adatta alla tua situazione. Job Crafting se vuoi ridisegnare il tuo ruolo senza lasciare l'azienda. Career Transition se sei pronto a muoverti verso qualcosa di nuovo. Purpose Discovery se hai raggiunto il successo ma qualcosa continua a sembrarti vuoto. Ogni sessione usa assessment reali: PERMA per il benessere, Career Anchors per i tuoi motivatori profondi, UWES-9 per i livelli di ingaggio. La skill effettua anche screening per depressione e ansia (PHQ-9/GAD-7) e raccomanda supporto professionale se le soglie cliniche vengono raggiunte. Questo \u00e8 coaching, non terapia, e Vera conosce la differenza.",
    },
    result: {
      en: "After three months, you have a career direction backed by data, not guesswork. Your PERMA profile shows where your wellbeing gaps are. Your Career Anchors reveal what actually drives your decisions (often different from what you think). Your UWES-9 scores tell you if your current role truly engages you or just keeps you busy. You also have a concrete action plan with milestones, validation checkpoints, and exit strategies. All for \u20ac49. The price of half a session with a human coach.",
      it: "Dopo tre mesi, hai una direzione di carriera supportata da dati, non da intuizioni. Il tuo profilo PERMA mostra dove sono le lacune nel tuo benessere. I Career Anchors rivelano cosa guida davvero le tue decisioni (spesso diverso da quello che pensi). I punteggi UWES-9 ti dicono se il tuo ruolo attuale ti coinvolge realmente o ti tiene solo occupato. Hai anche un piano d'azione concreto con milestone, checkpoint di validazione e strategie di uscita. Tutto per 49\u20ac. Il prezzo di mezza sessione con un coach umano.",
    },
    whatsInside: [
      { en: "8-session coaching program with three specialized branches: Job Crafting, Career Transition, Purpose Discovery", it: "Programma di coaching in 8 sessioni con tre percorsi specializzati: Job Crafting, Career Transition, Purpose Discovery" },
      { en: "6 validated psychological assessments including PERMA, Career Anchors (40-item COI-it), and UWES-9", it: "6 assessment psicologici validati tra cui PERMA, Career Anchors (COI-it a 40 item) e UWES-9" },
      { en: "Clinical safety screening (PHQ-9/GAD-7) with handoff protocols for depression and anxiety", it: "Screening clinico di sicurezza (PHQ-9/GAD-7) con protocolli di handoff per depressione e ansia" },
      { en: "Concrete deliverables per session: micro-experiments, action plans, decision matrices, 90-day roadmaps", it: "Deliverable concreti per sessione: micro-esperimenti, piani d'azione, matrici decisionali, roadmap a 90 giorni" },
      { en: "35 files with session guides, assessment protocols, and branch-specific exercises", it: "35 file con guide sessione, protocolli di assessment ed esercizi specifici per percorso" },
    ],
    whoIsThisFor: [
      { en: "Professionals aged 25-55 who know they need a change but can't figure out what kind", it: "Professionisti tra i 25 e i 55 anni che sanno di aver bisogno di un cambiamento ma non riescono a capire quale" },
      { en: "Employees who feel stuck in their role and want to redesign it without leaving the company", it: "Dipendenti che si sentono bloccati nel proprio ruolo e vogliono ridisegnarlo senza lasciare l'azienda" },
      { en: "Career changers who want a structured, evidence-based decision process before making the leap", it: "Chi sta valutando un cambio di carriera e vuole un processo decisionale strutturato e basato su evidenze prima di fare il salto" },
      { en: "High achievers who've reached their goals but feel disconnected from their work", it: "Professionisti di successo che hanno raggiunto i propri obiettivi ma si sentono disconnessi dal loro lavoro" },
    ],
    notFor: {
      en: "Vera is career coaching. If you're experiencing depression, anxiety, or other mental health challenges, the skill will screen for these and recommend professional support. It complements therapy, it doesn't replace it.",
      it: "Vera \u00e8 career coaching. Se stai vivendo depressione, ansia o altre difficolt\u00e0 psicologiche, la skill effettuer\u00e0 uno screening e raccomanderà supporto professionale. Integra la terapia, non la sostituisce.",
    },
    beforeAfter: [
      {
        before: { en: "Reading generic career articles and free personality tests that tell you nothing actionable", it: "Leggere articoli generici sulla carriera e fare test di personalit\u00e0 gratuiti che non ti dicono nulla di utile" },
        after: { en: "40-item Career Anchors assessment revealing your core motivators, with a structured action plan", it: "Assessment Career Anchors a 40 item che rivela i tuoi motivatori profondi, con un piano d'azione strutturato" },
      },
      {
        before: { en: "\u20ac800-1,600 for a coaching program that might not use validated methods", it: "800-1.600\u20ac per un programma di coaching che potrebbe non usare metodi validati" },
        after: { en: "Complete 8-session program for \u20ac49 with 6 validated psychological instruments", it: "Programma completo di 8 sessioni a 49\u20ac con 6 strumenti psicologici validati" },
      },
      {
        before: { en: "Deciding whether to stay or leave based on gut feeling and Sunday-night dread", it: "Decidere se restare o andarsene basandosi sull'istinto e sull'angoscia della domenica sera" },
        after: { en: "PERMA profile, UWES-9 engagement scores, and push-vs-pull analysis before making any decision", it: "Profilo PERMA, punteggi di ingaggio UWES-9 e analisi push-vs-pull prima di qualsiasi decisione" },
      },
      {
        before: { en: "Months of going in circles with no structured path forward", it: "Mesi a girare in tondo senza un percorso strutturato davanti" },
        after: { en: "Clear 90-day roadmap with milestones, validation checkpoints, and concrete next steps", it: "Roadmap chiara a 90 giorni con milestone, checkpoint di validazione e prossimi passi concreti" },
      },
    ],
    faq: [
      {
        question: { en: "What do I get when I buy this?", it: "Cosa ricevo quando acquisto?" },
        answer: {
          en: "35 files containing a complete 8-session coaching program, 6 validated assessment protocols (PERMA, Career Anchors, UWES-9, Ikigai-9, PHQ-9, GAD-7), session guides for three branches, and exercise templates. One purchase, no subscription.",
          it: "35 file contenenti un programma completo di 8 sessioni di coaching, 6 protocolli di assessment validati (PERMA, Career Anchors, UWES-9, Ikigai-9, PHQ-9, GAD-7), guide sessione per tre percorsi e template per gli esercizi. Acquisto singolo, nessun abbonamento.",
        },
      },
      {
        question: { en: "Does this replace a human career coach?", it: "Pu\u00f2 sostituire un career coach umano?" },
        answer: {
          en: "It provides the same structure and tools a professional coach would use, at a fraction of the cost. The assessments are the same validated instruments used in research and practice. What it doesn't provide is the human relationship. For many people, that tradeoff works. For some, it won't.",
          it: "Offre la stessa struttura e gli stessi strumenti che userebbe un coach professionista, a una frazione del costo. Gli assessment sono gli stessi strumenti validati usati nella ricerca e nella pratica. Quello che non offre \u00e8 la relazione umana. Per molte persone, questo compromesso funziona. Per altre, no.",
        },
      },
      {
        question: { en: "What if the screening finds something concerning?", it: "Cosa succede se lo screening rileva qualcosa di preoccupante?" },
        answer: {
          en: "If your PHQ-9 or GAD-7 scores reach clinical thresholds, Vera will pause the coaching program and recommend that you speak with a mental health professional. It includes specific handoff scripts and resources. This is an intentional safety boundary.",
          it: "Se i tuoi punteggi PHQ-9 o GAD-7 raggiungono le soglie cliniche, Vera metter\u00e0 in pausa il programma di coaching e raccomanderà di parlare con un professionista della salute mentale. Include script di handoff specifici e risorse. \u00c8 un confine di sicurezza intenzionale.",
        },
      },
      {
        question: { en: "Can I get a refund?", it: "Posso ottenere un rimborso?" },
        answer: {
          en: "Skills are digital products delivered immediately. All sales are final. Review the full skill description before purchasing.",
          it: "Le skill sono prodotti digitali consegnati immediatamente. Le vendite sono definitive. Leggi la descrizione completa prima dell'acquisto.",
        },
      },
    ],
    relatedSlugs: ["ask-to-andrew", "human-writer"],
  compatibleWith: "All Platforms",
  prerequisites: [],
  hasTerminalVideo: true,
  },
  {
    slug: "ai-b2b-sales-methodology",
    name: "AI-Powered B2B Sales Methodology",
    technicalName: "ai-b2b-sales-methodology",
    tagline: {
      en: "20 years of enterprise sales distilled into one system. From first call to signed contract.",
      it: "20 anni di vendita enterprise distillati in un unico sistema. Dalla prima call al contratto firmato.",
    },
    category: "sales",
    tags: ["B2B sales", "enterprise", "MEDDPICC", "SPICED", "negotiation", "BATNA", "qualification", "stakeholder mapping"],
    price: 149,
    currency: "EUR",
    isFree: false,
    isBundleOnly: false,
    badge: "flagship",
    icon: "trending-up",
    filesCount: 49,
    launchPhase: 2,
    complexity: 5,
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          { en: "Initial release with 4-Phase tactical selling, MEDDPICC+RR qualification, and 5-Phase negotiation", it: "Rilascio iniziale con vendita tattica a 4 fasi, qualificazione MEDDPICC+RR e negoziazione a 5 fasi" },
        ],
      },
    ],
    bundleSlugs: [],
    metaTitle: {
      en: "AI B2B Sales Methodology: Complete Enterprise Sales System",
      it: "Metodologia vendita B2B AI: sistema enterprise completo",
    },
    metaDescription: {
      en: "Three integrated B2B sales frameworks: MEDDPICC+RR qualification, SPICED discovery, BATNA/ZOPA negotiation. 49 files, 22 templates, 12 workflows built from 20 years of enterprise sales.",
      it: "Tre framework integrati per la vendita B2B: qualificazione MEDDPICC+RR, discovery SPICED, negoziazione BATNA/ZOPA. 49 file, 22 template, 12 workflow. Nato da 20 anni di vendita enterprise.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You've taken the sales training. Probably more than one. Sandler for prospecting, MEDDIC for qualification, maybe a negotiation workshop from someone else. Each program gave you a piece. None of them gave you the whole picture. So you stitch fragments together and hope they hold when a deal gets complicated. They usually don't. You miss qualification criteria because they weren't designed to work with your discovery questions. You walk into negotiations without the intelligence your qualification should have surfaced. And every quarter, you watch deals slip because the system you're running isn't really a system at all.",
      it: "Hai fatto i corsi di vendita. Probabilmente più di uno. Sandler per il prospecting, MEDDIC per la qualificazione, magari un workshop di negoziazione da un altro provider. Ogni programma ti ha dato un pezzo. Nessuno ti ha dato il quadro completo. Allora assembli i frammenti e speri che reggano quando un deal si complica. Di solito non reggono. Ti sfuggono criteri di qualificazione perché non erano progettati per lavorare con le tue domande di discovery. Entri in trattativa senza le informazioni che la qualificazione avrebbe dovuto far emergere. E ogni trimestre guardi opportunità slittare perché il processo che stai usando non è davvero un processo.",
    },
    solution: {
      en: "This skill contains 49 files organized around three frameworks that were designed to work together. A 4-phase tactical selling process (Trust Building, SPICED discovery, FAB solution design, strategic closing) feeds directly into a 7-phase strategic process with MEDDPICC+RR qualification. Ten weighted criteria give you a clear GO or NO-GO on every opportunity. When you reach the table, a 5-phase negotiation framework covers everything from BATNA analysis to If-Then Trading. The intelligence you gathered in discovery flows into qualification, then into your negotiation prep. Nothing gets lost between stages. The system also includes 22 templates, 12 executable workflows, and 3 Python scripts that calculate ROI, NPV, and opportunity scores automatically.",
      it: "Questa skill contiene 49 file organizzati intorno a tre framework progettati per funzionare insieme. Un processo di vendita tattica a 4 fasi (Trust Building, discovery SPICED, solution design FAB, closing strategico) alimenta direttamente un processo strategico a 7 fasi con qualificazione MEDDPICC+RR. Dieci criteri pesati ti danno un verdetto chiaro GO o NO-GO su ogni opportunità. Quando arrivi al tavolo negoziale, un framework a 5 fasi copre tutto dall'analisi BATNA al Trading condizionale If-Then. Le informazioni raccolte in discovery confluiscono nella qualificazione, poi nella preparazione negoziale. Nulla si perde tra una fase e l'altra. Il sistema include anche 22 template, 12 workflow eseguibili e 3 script Python che calcolano ROI, NPV e punteggi di opportunità in automatico.",
    },
    result: {
      en: "You get one integrated system for the entire B2B sales cycle. Instead of guessing which framework applies at which stage, 12 workflows guide you through specific scenarios: preparing a C-level meeting, qualifying an opportunity, mapping a buying committee, building a business case, negotiating a contract. The author built this from 20 years of enterprise sales at Vodafone, IBM, and Var Group, and distilled the same material into two books published on Amazon. The skill is the working version of those books, designed for Claude Code.",
      it: "Un sistema integrato per l'intero ciclo di vendita B2B. Invece di chiederti quale framework applicare in quale fase, 12 workflow ti guidano attraverso scenari concreti: preparare un meeting C-level, qualificare un'opportunità, mappare il buying committee, costruire un business case, negoziare un contratto. L'autore ha costruito questo sistema in 20 anni di vendita enterprise tra Vodafone, IBM e Var Group, e ha distillato lo stesso materiale in due libri pubblicati su Amazon. La skill è la versione operativa di quei libri, progettata per Claude Code.",
    },
    whatsInside: [
      { en: "Three methodology frameworks covering tactical selling, strategic deal management, and structured negotiation", it: "Tre framework metodologici che coprono vendita tattica, gestione strategica del deal e negoziazione strutturata" },
      { en: "MEDDPICC+RR qualification with 10 weighted criteria and automatic GO/NO-GO scoring", it: "Qualificazione MEDDPICC+RR con 10 criteri pesati e scoring automatico GO/NO-GO" },
      { en: "SPICED discovery questions mapped directly to qualification criteria", it: "Domande discovery SPICED collegate direttamente ai criteri di qualificazione" },
      { en: "Buying Committee mapping for 5 stakeholder roles with per-role engagement strategies", it: "Mappatura Buying Committee per 5 ruoli stakeholder con strategia di ingaggio per ciascuno" },
      { en: "22 templates: account plans, C-SWOT, business cases, negotiation prep sheets, meeting summaries", it: "22 template: account plan, C-SWOT, business case, schede preparazione negoziazione, memo post-meeting" },
      { en: "3 Python scripts for ROI/NPV calculations and opportunity scoring", it: "3 script Python per calcolo ROI/NPV e scoring opportunità" },
    ],
    whoIsThisFor: [
      { en: "Account executives running deals above €100K with 3+ month sales cycles", it: "Account executive che gestiscono deal sopra i 100K€ con cicli di vendita superiori a 3 mesi" },
      { en: "Sales managers building or standardizing their team's methodology", it: "Sales manager che costruiscono o standardizzano la metodologia del proprio team" },
      { en: "Enterprise sales directors who need a repeatable, measurable sales process", it: "Direttori commerciali enterprise che necessitano di un processo di vendita ripetibile e misurabile" },
      { en: "Solution consultants and presales who support complex deal cycles", it: "Solution consultant e presales che supportano cicli di vendita complessi" },
    ],
    notFor: {
      en: "This is enterprise B2B. If your average deal closes in one call or your price point is under €10K, the qualification and negotiation frameworks will feel like overkill.",
      it: "Pensata per il B2B enterprise. Se il tuo deal medio si chiude in una telefonata o il tuo prezzo è sotto i 10K€, i framework di qualificazione e negoziazione saranno sovradimensionati.",
    },
    beforeAfter: [
      {
        before: { en: "Frankensteining 3-4 sales methodologies that weren't built to work together", it: "Assemblare 3-4 metodologie di vendita che non sono state costruite per funzionare insieme" },
        after: { en: "One integrated system where discovery feeds qualification feeds negotiation", it: "Un sistema integrato dove la discovery alimenta la qualificazione che alimenta la negoziazione" },
      },
      {
        before: { en: "Qualifying opportunities by gut feeling. Learning too late that a deal was dead from the start", it: "Qualificare le opportunità a sensazione. Scoprire troppo tardi che il deal era morto dall'inizio" },
        after: { en: "MEDDPICC+RR scoring with 10 criteria. GO/NO-GO in minutes, not months", it: "Scoring MEDDPICC+RR con 10 criteri. GO/NO-GO in minuti, non in mesi" },
      },
      {
        before: { en: "Walking into negotiations having prepared your BATNA on a napkin ten minutes before", it: "Entrare in trattativa con il BATNA preparato su un tovagliolo dieci minuti prima" },
        after: { en: "Structured negotiation playbook: BATNA, ZOPA, trading variables matrix, defined team roles", it: "Playbook negoziale strutturato: BATNA, ZOPA, matrice variabili di scambio, ruoli del team definiti" },
      },
      {
        before: { en: "Generic discovery questions that sound like a checklist instead of a conversation", it: "Domande di discovery generiche che suonano come una checklist invece che una conversazione" },
        after: { en: "SPICED questions designed to surface pain, impact, and critical events naturally", it: "Domande SPICED progettate per far emergere pain, impatto e critical event in modo naturale" },
      },
    ],
    faq: [
      {
        question: { en: "What do I get when I buy this?", it: "Cosa ricevo quando acquisto?" },
        answer: {
          en: "49 files organized into three integrated frameworks, 22 ready-to-use templates, 12 step-by-step workflows for specific scenarios (meeting prep, qualification, negotiation, RFQ analysis), and 3 Python scripts for ROI/NPV calculations. One purchase, no subscription.",
          it: "49 file organizzati in tre framework integrati, 22 template pronti all'uso, 12 workflow passo-passo per scenari specifici (preparazione meeting, qualificazione, negoziazione, analisi RFQ) e 3 script Python per calcoli ROI/NPV. Acquisto singolo, nessun abbonamento.",
        },
      },
      {
        question: { en: "Who created this methodology?", it: "Chi ha creato questa metodologia?" },
        answer: {
          en: "The author spent 20 years leading sales teams at Vodafone, IBM, and Var Group. He published two books on B2B sales methodology (available on Amazon in English and Italian). This skill is the working version of that experience, structured for Claude Code.",
          it: "L'autore ha maturato 20 anni di esperienza alla guida di team commerciali in Vodafone, IBM e Var Group. Ha pubblicato due libri sulla metodologia di vendita B2B (disponibili su Amazon in italiano e in inglese). Questa skill è la versione operativa di quell'esperienza, strutturata per Claude Code.",
        },
      },
      {
        question: { en: "Which sales frameworks does it use?", it: "Quali framework di vendita utilizza?" },
        answer: {
          en: "MEDDPICC+RR for qualification, SPICED (Winning by Design) for discovery, BATNA/ZOPA (Fisher and Ury) for negotiation, and the Trust Equation (Maister and Green) for relationship building. All properly attributed to their original authors.",
          it: "MEDDPICC+RR per la qualificazione, SPICED (Winning by Design) per la discovery, BATNA/ZOPA (Fisher e Ury) per la negoziazione e la Trust Equation (Maister e Green) per la costruzione delle relazioni. Tutti correttamente attribuiti agli autori originali.",
        },
      },
      {
        question: { en: "Can I get a refund?", it: "Posso ottenere un rimborso?" },
        answer: {
          en: "Skills are digital products delivered immediately. All sales are final. Review the full skill description before purchasing.",
          it: "Le skill sono prodotti digitali consegnati immediatamente. Le vendite sono definitive. Leggi la descrizione completa prima dell'acquisto.",
        },
      },
    ],
    relatedSlugs: ["b2b-presentation-builder", "janus"],
  compatibleWith: "Claude Code",
  prerequisites: ["Python 3.x (optional, for export scripts)"],
  hasTerminalVideo: true,
  },
  {
    slug: "b2b-presentation-builder",
    name: "B2B Presentation Builder",
    technicalName: "b2b-presentation-builder",
    tagline: {
      en: "Build decks that speak each stakeholder's language. CFO gets ROI. CIO gets architecture. CEO gets vision.",
      it: "Costruisci deck che parlano la lingua di ogni stakeholder. Il CFO vede il ROI. Il CIO l'architettura. Il CEO la visione.",
    },
    category: "sales",
    tags: ["presentations", "C-level", "ROI", "pitch deck", "Challenger"],
    price: 79,
    currency: "EUR",
    isFree: false,
    isBundleOnly: false,
    badge: null,
    icon: "layout-template",
    filesCount: 12,
    launchPhase: 2,
    complexity: 4,
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          { en: "Initial release with 4 structural and 3 narrative frameworks", it: "Rilascio iniziale con 4 framework strutturali e 3 narrativi" },
        ],
      },
    ],
    bundleSlugs: ["b2b-sales-pro"],
    metaTitle: {
      en: "B2B Presentation Builder for Claude Code | Multi-Persona Decks",
      it: "B2B Presentation Builder per Claude Code | Deck Multi-Persona",
    },
    metaDescription: {
      en: "Turn Claude Code into a presentation strategist. 4 structural + 3 narrative frameworks, CFO/CIO/CEO targeting, 3-level QA. Stop building generic decks.",
      it: "Trasforma Claude Code in uno stratega delle presentazioni. 4 framework strutturali + 3 narrativi, targeting CFO/CIO/CEO, QA a 3 livelli. Basta deck generici.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You have a meeting with the CFO on Tuesday and the CIO on Thursday. Same deal, same product, completely different conversations. The CFO needs to see payback period, TCO reduction, and impact on margin. The CIO needs integration architecture, security posture, and implementation timeline. You know this. You still end up building one generic deck and hoping the right slides land with the right person. They don't. The CFO glazes over during the architecture slide. The CIO checks email during the ROI waterfall. Both leave the meeting with partial understanding and no urgency.",
      it: "Hai un incontro con il CFO martedì e il CIO giovedì. Stesso deal, stesso prodotto, conversazioni completamente diverse. Il CFO ha bisogno di vedere periodo di payback, riduzione TCO e impatto sul margine. Il CIO ha bisogno di architettura di integrazione, postura di sicurezza e timeline di implementazione. Lo sai. Finisci comunque per costruire un deck generico sperando che le slide giuste colpiscano la persona giusta. Non succede. Il CFO si spegne durante la slide sull'architettura. Il CIO controlla le email durante il waterfall ROI. Entrambi escono dall'incontro con una comprensione parziale e nessuna urgenza.",
    },
    solution: {
      en: "B2B Presentation Builder gives you two layers of framework. The structural layer offers four templates: Executive (10-15 slides for C-suite, vision and ROI focus), Operational (15-25 slides for technical stakeholders, architecture and implementation), Sales Conversation (6-10 slides for discovery meetings, problem-solution flow), and Executive Summary (3-5 slides for board-level updates). The narrative layer offers three storytelling approaches: Raskin 5-Step (status quo, problem, solution, proof, next steps), Dunford 8-Step (positioning against alternatives), and Challenger 6-Step (teach, tailor, take control). You pick one structural and one narrative framework. The skill combines them and adapts every slide for your target persona. A three-level QA pass then reviews each slide for argument strength, evidence quality, and audience fit.",
      it: "B2B Presentation Builder ti dà due livelli di framework. Il livello strutturale offre quattro template: Executive (10-15 slide per C-suite, focus su visione e ROI), Operational (15-25 slide per stakeholder tecnici, architettura e implementazione), Sales Conversation (6-10 slide per incontri di discovery, flusso problema-soluzione) ed Executive Summary (3-5 slide per aggiornamenti a livello board). Il livello narrativo offre tre approcci di storytelling: Raskin 5-Step (status quo, problema, soluzione, prova, prossimi passi), Dunford 8-Step (posizionamento contro alternative) e Challenger 6-Step (insegna, personalizza, prendi il controllo). Scegli un framework strutturale e uno narrativo. La skill li combina e adatta ogni slide per la tua persona target. Un passaggio QA a tre livelli poi revisiona ogni slide per forza dell'argomentazione, qualità delle evidenze e fit con l'audience.",
    },
    result: {
      en: "Two meetings, two decks, each speaking the language of the person across the table. The CFO deck leads with financial impact and closes with payback timeline. The CIO deck leads with architecture fit and closes with implementation milestones. Both are built from the same source material in minutes, not hours. The QA pass flags any slide with a weak argument or missing proof point before you walk into the room.",
      it: "Due incontri, due deck, ciascuno che parla la lingua della persona dall'altra parte del tavolo. Il deck per il CFO apre con l'impatto finanziario e chiude con la timeline di payback. Il deck per il CIO apre con il fit architetturale e chiude con le milestone di implementazione. Entrambi costruiti dallo stesso materiale sorgente in minuti, non ore. Il passaggio QA segnala ogni slide con un'argomentazione debole o un proof point mancante prima che tu entri nella stanza.",
    },
    whatsInside: [
      { en: "4 structural frameworks: Executive, Operational, Sales Conversation, Executive Summary with slide-by-slide templates", it: "4 framework strutturali: Executive, Operational, Sales Conversation, Executive Summary con template slide per slide" },
      { en: "3 narrative frameworks: Raskin 5-Step, Dunford 8-Step, Challenger 6-Step with story arc guides", it: "3 framework narrativi: Raskin 5-Step, Dunford 8-Step, Challenger 6-Step con guide all'arco narrativo" },
      { en: "Persona targeting system: CFO (financial), CIO (technical), CEO (strategic) content adaptation rules", it: "Sistema di targeting persona: regole di adattamento contenuto CFO (finanziario), CIO (tecnico), CEO (strategico)" },
      { en: "3-level QA workflow: argument strength, evidence quality, audience fit per slide", it: "Workflow QA a 3 livelli: forza argomentazione, qualità evidenze, fit con audience per ogni slide" },
      { en: "Competitive positioning templates for multi-vendor scenarios", it: "Template di posizionamento competitivo per scenari multi-vendor" },
      { en: "12 files total, including reference guides and best practices from 20+ years of enterprise sales", it: "12 file totali, incluse guide di riferimento e best practice da 20+ anni di vendita enterprise" },
    ],
    whoIsThisFor: [
      { en: "The sales director who presents to a different C-level stakeholder every week and needs each deck tailored in hours, not days", it: "Il direttore vendite che presenta a un diverso stakeholder C-level ogni settimana e ha bisogno di ogni deck su misura in ore, non giorni" },
      { en: "The presales engineer who knows the technology cold but struggles to translate features into business impact for executives", it: "Il presales engineer che conosce la tecnologia a fondo ma fatica a tradurre le feature in impatto business per i dirigenti" },
      { en: "The account manager juggling five active deals who can't afford to spend a day building each presentation from scratch", it: "L'account manager che gestisce cinque deal attivi e non può permettersi di spendere una giornata per costruire ogni presentazione da zero" },
      { en: "The consultant preparing client deliverables who needs professional structure without reinventing the framework every time", it: "Il consulente che prepara deliverable per i clienti e ha bisogno di una struttura professionale senza reinventare il framework ogni volta" },
    ],
    notFor: {
      en: "Internal team updates, all-hands presentations, or non-commercial contexts. The persona targeting and narrative frameworks are built for buyer-facing situations.",
      it: "Aggiornamenti interni al team, presentazioni all-hands o contesti non commerciali. Il targeting persona e i framework narrativi sono costruiti per situazioni rivolte ai buyer.",
    },
    beforeAfter: [
      {
        before: { en: "One generic deck for every stakeholder, hoping the right slides resonate with each person", it: "Un deck generico per tutti gli stakeholder, sperando che le slide giuste colpiscano la persona giusta" },
        after: { en: "A CFO deck, a CIO deck, and a CEO deck built from the same source in minutes", it: "Un deck CFO, un deck CIO e un deck CEO costruiti dalla stessa fonte in minuti" },
      },
      {
        before: { en: "Starting every presentation from a blank slide and spending hours on structure", it: "Iniziare ogni presentazione da una slide vuota e spendere ore sulla struttura" },
        after: { en: "Pick a structural + narrative framework, fill in your content, done", it: "Scegli un framework strutturale + narrativo, inserisci il tuo contenuto, fatto" },
      },
      {
        before: { en: "Discovering a weak slide when the CFO's expression changes mid-presentation", it: "Scoprire una slide debole quando l'espressione del CFO cambia a metà presentazione" },
        after: { en: "Three-level QA flags weak arguments and missing evidence before you present", it: "Il QA a tre livelli segnala argomentazioni deboli e evidenze mancanti prima che tu presenti" },
      },
      {
        before: { en: "Features and specs dumped onto slides without a narrative thread connecting them", it: "Feature e specifiche scaricate sulle slide senza un filo narrativo che le colleghi" },
        after: { en: "Every deck follows a proven story arc: Raskin, Dunford, or Challenger", it: "Ogni deck segue un arco narrativo collaudato: Raskin, Dunford o Challenger" },
      },
    ],
    faq: [
      {
        question: { en: "What do I get when I buy this?", it: "Cosa ricevo quando acquisto?" },
        answer: {
          en: "A ZIP with 12 files: 4 structural framework guides (Executive, Operational, Sales Conversation, Executive Summary), 3 narrative framework guides (Raskin, Dunford, Challenger), persona targeting rules for CFO/CIO/CEO, QA workflow documentation, and competitive positioning templates. Install once, use for every presentation. No subscription.",
          it: "Un ZIP con 12 file: 4 guide framework strutturali (Executive, Operational, Sales Conversation, Executive Summary), 3 guide framework narrativi (Raskin, Dunford, Challenger), regole di targeting persona per CFO/CIO/CEO, documentazione workflow QA e template di posizionamento competitivo. Installi una volta, lo usi per ogni presentazione. Nessun abbonamento.",
        },
      },
      {
        question: { en: "Does it generate PowerPoint files directly?", it: "Genera direttamente file PowerPoint?" },
        answer: {
          en: "It generates the complete content, structure, narrative, and speaker notes for every slide. For the actual PPTX file, pair it with Claude Code's built-in PPTX skill or with python-pptx. The skill tells you what to say on each slide. The PPTX tool handles the formatting.",
          it: "Genera il contenuto completo, la struttura, la narrativa e le note del presentatore per ogni slide. Per il file PPTX vero e proprio, abbinalo alla skill PPTX integrata di Claude Code o a python-pptx. La skill ti dice cosa dire in ogni slide. Lo strumento PPTX gestisce la formattazione.",
        },
      },
      {
        question: { en: "Which narrative framework should I pick?", it: "Quale framework narrativo dovrei scegliere?" },
        answer: {
          en: "Raskin 5-Step for straightforward problem-solution pitches. Dunford 8-Step when you need to position against specific alternatives (including the status quo). Challenger 6-Step when the buyer doesn't yet see the problem and you need to teach them something new before proposing the solution.",
          it: "Raskin 5-Step per pitch problema-soluzione diretti. Dunford 8-Step quando devi posizionarti contro alternative specifiche (incluso lo status quo). Challenger 6-Step quando il buyer non vede ancora il problema e devi insegnargli qualcosa di nuovo prima di proporre la soluzione.",
        },
      },
      {
        question: { en: "How is this different from a PowerPoint template?", it: "In cosa è diverso da un template PowerPoint?" },
        answer: {
          en: "A template gives you colors and layouts. This skill gives you the thinking: which slides go where, what story to tell, how to adapt the message for each stakeholder, and what makes each slide strong or weak. Templates solve formatting. This solves strategy.",
          it: "Un template ti dà colori e layout. Questa skill ti dà il ragionamento: quali slide vanno dove, quale storia raccontare, come adattare il messaggio per ogni stakeholder e cosa rende ogni slide forte o debole. I template risolvono la formattazione. Questa risolve la strategia.",
        },
      },
    ],
    relatedSlugs: ["ai-b2b-sales-methodology", "janus"],
  compatibleWith: "Claude Code",
  prerequisites: ["Python 3.x", "python-pptx (pip install python-pptx)"],
  hasTerminalVideo: true,
  },
  {
    slug: "deep-research-agent",
    name: "Deep Research Agent",
    technicalName: "deep-research-agent",
    tagline: {
      en: "Research that shows its work. Seven phases, inline citations, zero guesswork.",
      it: "Ricerca che mostra le prove. Sette fasi, citazioni inline, zero improvvisazione.",
    },
    category: "sales",
    tags: ["research", "Graph-of-Thoughts", "citations", "analysis"],
    price: 49,
    currency: "EUR",
    isFree: false,
    isBundleOnly: false,
    badge: null,
    icon: "microscope",
    filesCount: 4,
    launchPhase: 1,
    complexity: 3,
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          { en: "Initial release with 7-phase research pipeline and inline citations", it: "Rilascio iniziale con pipeline di ricerca a 7 fasi e citazioni inline" },
        ],
      },
    ],
    bundleSlugs: ["b2b-sales-pro"],
    metaTitle: {
      en: "Deep Research Agent for Claude Code | Cited, Verified Reports",
      it: "Deep Research Agent per Claude Code | Report con citazioni verificate",
    },
    metaDescription: {
      en: "Turn Claude Code into a research analyst. 7-phase pipeline with source triangulation, inline citations, and executive summaries. Every claim traceable.",
      it: "Trasforma Claude Code in un analista di ricerca. Pipeline a 7 fasi con triangolazione fonti, citazioni inline ed executive summary. Ogni dato verificabile.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You asked Claude to research a topic. Twenty minutes later, you have two thousand words of confident prose and not a single source. You can't send it to a client. You can't use it in a board deck. You can't even verify whether the numbers are real. The research sounds plausible, which makes it worse: if something is wrong, you won't catch it until someone else does.",
      it: "Hai chiesto a Claude di fare una ricerca. Venti minuti dopo, hai duemila parole di prosa sicura di sé e nemmeno una fonte. Non puoi mandarlo a un cliente. Non puoi usarlo in un deck per il board. Non riesci neppure a verificare se i numeri sono reali. La ricerca suona plausibile, e questo la rende peggiore: se c'è un errore, non lo trovi tu. Lo trova qualcun altro.",
    },
    solution: {
      en: "Deep Research Agent structures every investigation into seven distinct phases. Scope pins down what you actually need to know. Plan decomposes the question into parallel branches using Graph-of-Thoughts methodology (published at AAAI 2024 by ETH Zurich). Retrieve gathers sources with a strict hierarchy: primary documentation first, analyst reports second, journalism third. Triangulate cross-checks every major claim across independent sources and flags conflicts explicitly. Draft writes the report with inline citations on every factual statement. Critique runs a self-review pass for gaps, bias, and unsupported claims. Package delivers the final output: executive summary, full report, numbered bibliography.",
      it: "Deep Research Agent struttura ogni indagine in sette fasi distinte. Scope inquadra cosa serve davvero sapere. Plan decompone la domanda in rami paralleli con la metodologia Graph-of-Thoughts (pubblicata ad AAAI 2024 da ETH Zurigo). Retrieve raccoglie le fonti seguendo una gerarchia rigorosa: documentazione primaria prima, report di analisti poi, giornalismo dopo. Triangulate verifica ogni affermazione importante su fonti indipendenti e segnala i conflitti in modo esplicito. Draft scrive il report con citazioni inline su ogni dato fattuale. Critique esegue un passaggio di auto-revisione per gap, bias e affermazioni non supportate. Package consegna l'output finale: executive summary, report completo, bibliografia numerata.",
    },
    result: {
      en: "A report you can actually sign your name on. Every number has a source. Every claim has been cross-checked. Conflicts between sources are flagged instead of hidden. The executive summary is ready for stakeholders who won't read the full document. The bibliography is ready for those who will. Typical output: 2,000-5,000 words, 10-25 sources, delivered in 10-30 minutes depending on scope.",
      it: "Un report su cui puoi mettere il tuo nome. Ogni numero ha una fonte. Ogni affermazione è stata verificata incrociando le fonti. I conflitti tra le fonti sono segnalati, non nascosti. L'executive summary è pronto per gli stakeholder che non leggeranno il documento completo. La bibliografia è pronta per quelli che lo faranno. Output tipico: 2.000-5.000 parole, 10-25 fonti, consegnato in 10-30 minuti a seconda dell'ambito.",
    },
    whatsInside: [
      { en: "Graph-of-Thoughts decomposition engine that splits complex questions into parallel research branches", it: "Motore di decomposizione Graph-of-Thoughts che divide domande complesse in rami di ricerca paralleli" },
      { en: "Source hierarchy system: primary docs, analyst reports, journalism, with credibility scoring for each", it: "Sistema di gerarchia fonti: documentazione primaria, report di analisti, giornalismo, con scoring di credibilità per ciascuna" },
      { en: "Triangulation matrix that cross-references claims across independent sources and surfaces conflicts", it: "Matrice di triangolazione che incrocia le affermazioni su fonti indipendenti e fa emergere i conflitti" },
      { en: "Inline citation engine with automatic numbered bibliography in APA format", it: "Motore di citazioni inline con bibliografia numerata automatica in formato APA" },
      { en: "Self-critique loop that checks for gaps, bias, unsupported claims, and logical consistency", it: "Ciclo di auto-critica che verifica gap, bias, affermazioni non supportate e coerenza logica" },
      { en: "Sub-agent parallelization for broad topics: multiple research branches run simultaneously", it: "Parallelizzazione con sub-agenti per argomenti ampi: più rami di ricerca eseguiti in simultanea" },
    ],
    whoIsThisFor: [
      { en: "The consultant who bills by the deliverable and needs every claim in the report to hold up under scrutiny", it: "Il consulente che fattura a deliverable e ha bisogno che ogni affermazione nel report regga sotto esame" },
      { en: "The sales director preparing competitive intelligence before a pitch, who can't afford to present unverified data", it: "Il direttore vendite che prepara intelligence competitiva prima di un pitch e non può permettersi dati non verificati" },
      { en: "The product manager writing a market analysis for the leadership team, where 'I read it somewhere' won't cut it", it: "Il product manager che scrive un'analisi di mercato per il leadership team, dove 'l'ho letto da qualche parte' non basta" },
      { en: "The founder doing due diligence on a market before committing resources, who needs facts instead of impressions", it: "Il founder che fa due diligence su un mercato prima di impegnare risorse, e ha bisogno di fatti al posto di impressioni" },
    ],
    notFor: {
      en: "Quick factual lookups where a web search gives you the answer in ten seconds. This skill is for investigations, not for checking today's weather.",
      it: "Ricerche rapide dove una ricerca web ti dà la risposta in dieci secondi. Questa skill è per indagini, non per controllare il meteo.",
    },
    beforeAfter: [
      {
        before: { en: "You ask Claude for research and get two pages of confident text with zero sources", it: "Chiedi a Claude una ricerca e ottieni due pagine di testo sicuro di sé con zero fonti" },
        after: { en: "Every factual statement has an inline citation linking to a numbered bibliography", it: "Ogni dato fattuale ha una citazione inline collegata a una bibliografia numerata" },
      },
      {
        before: { en: "You spend three hours collecting sources, organizing notes, and writing a coherent report", it: "Passi tre ore a raccogliere fonti, organizzare appunti e scrivere un report coerente" },
        after: { en: "The seven-phase pipeline delivers a structured report with executive summary in 10-30 minutes", it: "La pipeline a sette fasi consegna un report strutturato con executive summary in 10-30 minuti" },
      },
      {
        before: { en: "Two sources say different things and the report picks whichever sounds better", it: "Due fonti dicono cose diverse e il report sceglie quella che suona meglio" },
        after: { en: "The triangulation phase flags the conflict explicitly and presents both positions", it: "La fase di triangolazione segnala il conflitto esplicitamente e presenta entrambe le posizioni" },
      },
      {
        before: { en: "You send the research to a stakeholder and they ask where a specific number came from", it: "Mandi la ricerca a uno stakeholder e ti chiede da dove viene un numero specifico" },
        after: { en: "You click the citation number and it links directly to the source and page", it: "Clicchi il numero di citazione e si collega direttamente alla fonte e alla pagina" },
      },
    ],
    faq: [
      {
        question: { en: "What do I get when I buy this?", it: "Cosa ricevo quando acquisto?" },
        answer: {
          en: "A ZIP with 4 files: the SKILL.md research methodology (7 phases, prompt patterns, anti-patterns), the Graph-of-Thoughts reference, the research phases reference, and ready-to-use prompt templates. Install once, use it for every research task. No subscription, no API fees beyond your normal Claude Code usage.",
          it: "Un ZIP con 4 file: la metodologia di ricerca SKILL.md (7 fasi, pattern di prompt, anti-pattern), il riferimento Graph-of-Thoughts, il riferimento sulle fasi di ricerca e i template di prompt pronti all'uso. Installi una volta, lo usi per ogni ricerca. Nessun abbonamento, nessun costo API oltre al tuo normale utilizzo di Claude Code.",
        },
      },
      {
        question: { en: "What sources does it actually access?", it: "A quali fonti accede concretamente?" },
        answer: {
          en: "Every tool available in your Claude Code environment: web search, MCP servers (Zapier, Apify, databases), local files on your machine, APIs you've connected. The skill provides the methodology and structure. Your configured tools provide the data. More tools means richer research.",
          it: "Ogni strumento disponibile nel tuo ambiente Claude Code: ricerca web, server MCP (Zapier, Apify, database), file locali sulla tua macchina, API che hai connesso. La skill fornisce la metodologia e la struttura. I tuoi strumenti configurati forniscono i dati. Più strumenti, più ricca la ricerca.",
        },
      },
      {
        question: { en: "How is this different from just asking Claude to 'do research' on something?", it: "In cosa è diverso dal chiedere semplicemente a Claude di 'fare una ricerca' su qualcosa?" },
        answer: {
          en: "Without this skill, Claude gives you a persuasive essay. With it, Claude runs a structured investigation: defines scope, plans parallel research branches, gathers sources by credibility tier, cross-checks claims, writes with inline citations, self-critiques the draft, and packages a report with bibliography. The difference is the same as between a blog post and a research paper.",
          it: "Senza questa skill, Claude ti dà un saggio convincente. Con essa, Claude conduce un'indagine strutturata: definisce lo scope, pianifica rami di ricerca paralleli, raccoglie fonti per livello di credibilità, verifica le affermazioni in modo incrociato, scrive con citazioni inline, auto-critica la bozza e confeziona un report con bibliografia. La differenza è la stessa tra un blog post e un paper di ricerca.",
        },
      },
      {
        question: { en: "How long does a research session take?", it: "Quanto dura una sessione di ricerca?" },
        answer: {
          en: "A focused topic with 10 sources: 10-15 minutes. A broad competitive analysis with 20+ sources: 20-30 minutes. The pipeline shows you which phase it's in at each step, so you always know where the research stands.",
          it: "Un argomento focalizzato con 10 fonti: 10-15 minuti. Un'analisi competitiva ampia con 20+ fonti: 20-30 minuti. La pipeline ti mostra in quale fase si trova ad ogni passaggio, così sai sempre a che punto è la ricerca.",
        },
      },
    ],
    relatedSlugs: ["janus", "ai-b2b-sales-methodology"],
  compatibleWith: "Claude Code",
  prerequisites: [],
  hasTerminalVideo: true,
  },
  {
    slug: "cv-guru",
    name: "CV Guru",
    technicalName: "cv-guru",
    tagline: {
      en: "Your CV through a head hunter's eyes. ATS scoring, job-fit analysis, STAR stories for the interview.",
      it: "Il tuo CV con gli occhi di un head hunter. Scoring ATS, analisi job-fit, storie STAR per il colloquio.",
    },
    category: "career",
    tags: ["CV", "resume", "interview", "ATS", "STAR", "job search"],
    price: 19,
    currency: "EUR",
    isFree: false,
    isBundleOnly: false,
    badge: null,
    icon: "file-text",
    filesCount: 8,
    launchPhase: 1,
    complexity: 3,
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          { en: "Initial release with 6-phase career coaching workflow", it: "Rilascio iniziale con workflow di career coaching a 6 fasi" },
        ],
      },
    ],
    bundleSlugs: ["career-navigator"],
    metaTitle: {
      en: "CV Guru for Claude Code | ATS Optimization + Interview Prep",
      it: "CV Guru per Claude Code | Ottimizzazione ATS + Preparazione Colloqui",
    },
    metaDescription: {
      en: "Turn Claude Code into a head hunter who rewrites your CV for each role. ATS scoring, job-fit analysis, STAR stories, DOCX output. 19 EUR, no subscription.",
      it: "Trasforma Claude Code in un head hunter che riscrive il tuo CV per ogni ruolo. Scoring ATS, analisi job-fit, storie STAR, output DOCX. 19 EUR, nessun abbonamento.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You spent a weekend rewriting your CV. You sent it to twelve companies. You got two automated rejections and ten silences. The CV wasn't bad. It just wasn't written for the specific role, wasn't formatted for ATS filters, and didn't contain the keywords the screening software was looking for. A recruiter never saw it. The algorithm did, and the algorithm said no.",
      it: "Hai passato un weekend a riscrivere il CV. L'hai mandato a dodici aziende. Hai ricevuto due rifiuti automatici e dieci silenzi. Il CV non era brutto. Semplicemente non era scritto per quel ruolo specifico, non era formattato per i filtri ATS e non conteneva le keyword che il software di screening cercava. Un recruiter non l'ha mai visto. L'algoritmo sì, e l'algoritmo ha detto no.",
    },
    solution: {
      en: "CV Guru runs your profile through six phases, the same sequence a senior head hunter uses when preparing a candidate. Phase 1 analyzes your CV and scores its ATS readiness on a 1-10 scale with specific fixes. Phase 2 maps the target role: company, job description, required competencies. Phase 3 calculates a job-fit percentage that tells you honestly whether the application makes sense. Phase 4 rewrites the CV for that specific role: keywords aligned, achievements quantified, format ATS-proof. Phase 5 builds your interview preparation: STAR stories extracted from your real experience, likely questions with guided answers, red flags with scripts to handle them. Phase 6 packages everything into a DOCX file ready to send.",
      it: "CV Guru analizza il tuo profilo attraverso sei fasi, la stessa sequenza che un head hunter senior usa quando prepara un candidato. La Fase 1 analizza il tuo CV e assegna un punteggio di compatibilità ATS su scala 1-10 con correzioni specifiche. La Fase 2 mappa il ruolo target: azienda, job description, competenze richieste. La Fase 3 calcola una percentuale di job-fit che ti dice onestamente se la candidatura ha senso. La Fase 4 riscrive il CV per quel ruolo specifico: keyword allineate, risultati quantificati, formato a prova di ATS. La Fase 5 costruisce la preparazione al colloquio: storie STAR estratte dalla tua esperienza reale, domande probabili con risposte guidate, red flag con script per gestirle. La Fase 6 impacchetta tutto in un file DOCX pronto da inviare.",
    },
    result: {
      en: "A CV tailored to the specific role you're targeting, not a generic document you send everywhere. A job-fit score that prevents you from wasting time on applications where you're below 60% match. STAR stories built from your actual career, ready to use in behavioral interviews. A head hunter's honest assessment of what a recruiter sees in the first six seconds. Total cost: 19 EUR. A professional CV service charges 200-500 EUR for one rewrite. This skill handles unlimited rewrites for every role you apply to.",
      it: "Un CV su misura per il ruolo specifico a cui ti candidi, non un documento generico che mandi ovunque. Un punteggio di job-fit che ti evita di perdere tempo su candidature dove sei sotto il 60% di match. Storie STAR costruite dalla tua carriera reale, pronte per i colloqui comportamentali. La valutazione onesta di un head hunter su cosa vede un recruiter nei primi sei secondi. Costo totale: 19 EUR. Un servizio professionale di CV ne chiede 200-500 EUR per una singola riscrittura. Questa skill gestisce riscritture illimitate per ogni ruolo a cui ti candidi.",
    },
    whatsInside: [
      { en: "6-phase coaching pipeline: from CV analysis to DOCX-ready output", it: "Pipeline di coaching a 6 fasi: dall'analisi del CV all'output DOCX pronto" },
      { en: "ATS scoring engine that rates your CV 1-10 and lists exactly what to fix", it: "Motore di scoring ATS che valuta il tuo CV da 1 a 10 e indica esattamente cosa correggere" },
      { en: "Job-fit calculator: percentage match between your profile and the target role", it: "Calcolatore di job-fit: percentuale di match tra il tuo profilo e il ruolo target" },
      { en: "STAR story builder that extracts interview-ready narratives from your actual experience", it: "Costruttore di storie STAR che estrae narrative pronte per il colloquio dalla tua esperienza reale" },
      { en: "Interview briefing generator with likely questions, red flags, and closing scripts", it: "Generatore di briefing colloquio con domande probabili, red flag e script di chiusura" },
      { en: "Python script that produces a formatted DOCX file with professional typography", it: "Script Python che produce un file DOCX formattato con tipografia professionale" },
    ],
    whoIsThisFor: [
      { en: "The professional who sends the same CV to every opening and wonders why nobody calls back", it: "Il professionista che manda lo stesso CV a ogni annuncio e si chiede perché nessuno richiama" },
      { en: "The career changer who has fifteen years of experience but can't translate it into the language of a new industry", it: "Chi cambia carriera e ha quindici anni di esperienza ma non riesce a tradurla nel linguaggio di un nuovo settore" },
      { en: "The candidate preparing for a behavioral interview at a company that asks STAR-format questions", it: "Il candidato che prepara un colloquio comportamentale in un'azienda che usa domande in formato STAR" },
      { en: "Anyone tired of paying 300 EUR every time they need a CV rewrite for a different role", it: "Chiunque sia stanco di pagare 300 EUR ogni volta che serve una riscrittura del CV per un ruolo diverso" },
    ],
    notFor: {
      en: "Freelancers, entrepreneurs, or anyone who doesn't need a traditional CV. If your work finds you through referrals and portfolio, this isn't for you.",
      it: "Freelancer, imprenditori, o chiunque non abbia bisogno di un CV tradizionale. Se il lavoro ti trova tramite referral e portfolio, non fa per te.",
    },
    beforeAfter: [
      {
        before: { en: "You send the same CV to every job and get silence", it: "Mandi lo stesso CV a ogni annuncio e ricevi silenzio" },
        after: { en: "Each application gets a CV rewritten for that specific role with matched keywords", it: "Ogni candidatura ha un CV riscritto per quel ruolo specifico con keyword allineate" },
      },
      {
        before: { en: "ATS filters reject your CV before a human touches it", it: "I filtri ATS scartano il tuo CV prima che un umano lo tocchi" },
        after: { en: "ATS score 8+/10 with format, keywords, and structure optimized for automated screening", it: "Score ATS 8+/10 con formato, keyword e struttura ottimizzati per lo screening automatico" },
      },
      {
        before: { en: "You walk into interviews and improvise answers to behavioral questions", it: "Entri ai colloqui e improvvisi le risposte alle domande comportamentali" },
        after: { en: "Five STAR stories ready, each mapped to a likely question for that specific role", it: "Cinque storie STAR pronte, ciascuna mappata su una domanda probabile per quel ruolo specifico" },
      },
      {
        before: { en: "You pay a CV writer 300 EUR and wait a week for one version", it: "Paghi un CV writer 300 EUR e aspetti una settimana per una versione" },
        after: { en: "Unlimited rewrites in minutes, for 19 EUR total", it: "Riscritture illimitate in minuti, per 19 EUR totali" },
      },
    ],
    faq: [
      {
        question: { en: "What do I get when I buy this?", it: "Cosa ricevo quando acquisto?" },
        answer: {
          en: "A ZIP with 8 files: the SKILL.md with the complete 6-phase workflow, reference files for CV analysis, fit scoring, ATS optimization, interview preparation, layout profiles for different industries, and Python scripts for DOCX generation. Install once, use for every application. No subscription.",
          it: "Un ZIP con 8 file: lo SKILL.md con il workflow completo a 6 fasi, file di riferimento per analisi CV, scoring fit, ottimizzazione ATS, preparazione colloqui, profili layout per diversi settori e script Python per la generazione DOCX. Installi una volta, lo usi per ogni candidatura. Nessun abbonamento.",
        },
      },
      {
        question: { en: "Does it work for non-Italian job markets?", it: "Funziona per mercati del lavoro non italiani?" },
        answer: {
          en: "Yes. ATS systems and STAR methodology are international standards. The skill works in English and Italian, and the CV optimization applies to any market where companies use automated screening.",
          it: "Sì. I sistemi ATS e la metodologia STAR sono standard internazionali. La skill funziona in inglese e italiano, e l'ottimizzazione CV si applica a qualsiasi mercato dove le aziende usano screening automatizzato.",
        },
      },
      {
        question: { en: "How is this different from ChatGPT rewriting my CV?", it: "In cosa è diverso dal farsi riscrivere il CV da ChatGPT?" },
        answer: {
          en: "ChatGPT gives you a generic rewrite. CV Guru runs a structured process: ATS scoring with specific fixes, job-fit percentage, keyword alignment against the actual job description, STAR story extraction from your experience, and interviewer-specific preparation. The difference is between getting a polished paragraph and getting an actual career coaching session.",
          it: "ChatGPT ti dà una riscrittura generica. CV Guru esegue un processo strutturato: scoring ATS con correzioni specifiche, percentuale di job-fit, allineamento keyword contro la job description reale, estrazione storie STAR dalla tua esperienza e preparazione specifica per l'interviewer. La differenza è tra ottenere un paragrafo riformulato e ricevere una sessione di career coaching vera.",
        },
      },
      {
        question: { en: "Do I need Python installed?", it: "Serve avere Python installato?" },
        answer: {
          en: "Only if you want the automatic DOCX generation. The entire coaching workflow works without Python. The DOCX script is a bonus for producing a print-ready file with professional formatting.",
          it: "Solo se vuoi la generazione automatica del DOCX. L'intero workflow di coaching funziona senza Python. Lo script DOCX è un bonus per produrre un file pronto da stampare con formattazione professionale.",
        },
      },
    ],
    relatedSlugs: ["ask-to-vera", "human-writer"],
  compatibleWith: "Claude Code",
  prerequisites: ["Python 3.x", "python-docx (pip install python-docx)"],
  hasTerminalVideo: true,
  },
  {
    slug: "n8n-ai-workflow-expert",
    name: "n8n Workflow Expert",
    technicalName: "n8n-ai-workflow-expert",
    tagline: {
      en: "Expert system for n8n workflows with 545 AI patterns and 1,495 community templates",
      it: "Sistema esperto per workflow n8n con 545 pattern AI e 1.495 template community",
    },
    category: "automation",
    tags: ["n8n", "workflow", "automation", "AI", "no-code"],
    price: 39,
    currency: "EUR",
    isFree: false,
    isBundleOnly: true,
    badge: "popular",
    icon: "workflow",
    filesCount: 100,
    launchPhase: 2,
    complexity: 5,
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          { en: "Initial release with 100 files, 545 AI workflows, and intelligent routing", it: "Rilascio iniziale con 100 file, 545 workflow AI e routing intelligente" },
        ],
      },
    ],
    bundleSlugs: ["n8n-power-pack"],
    metaTitle: {
      en: "n8n Workflow Expert - Build AI Workflows with 545 Analyzed Patterns",
      it: "n8n Workflow Expert - Crea Workflow AI con 545 Pattern Analizzati",
    },
    metaDescription: {
      en: "100 files, 2.6M of content. 545 AI workflows analyzed. Intelligent routing to 3 companion skills. Every n8n node covered with examples.",
      it: "100 file, 2.6M di contenuto. 545 workflow AI analizzati. Routing intelligente verso 3 skill companion. Ogni nodo n8n coperto con esempi.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "n8n documentation is scattered across hundreds of pages. You spend more time searching for the right node configuration than building. AI workflow patterns are buried in community forums. There is no single source that covers every node with real examples.",
      it: "La documentazione n8n è sparsa su centinaia di pagine. Passi più tempo a cercare la configurazione giusta del nodo che a costruire. I pattern di workflow AI sono sepolti nei forum della community. Non esiste un'unica fonte che copra ogni nodo con esempi reali.",
    },
    solution: {
      en: "100 files with 2.6M of content. 545 AI workflow patterns analyzed and categorized. 1,495 community templates searchable by service and integration. Intelligent routing connects to 3 companion skills (Docs Live for reference, Repository for templates). Every n8n node documented with configuration examples and common pitfalls.",
      it: "100 file con 2.6M di contenuto. 545 pattern di workflow AI analizzati e categorizzati. 1.495 template community ricercabili per servizio e integrazione. Il routing intelligente si connette a 3 skill companion (Docs Live per reference, Repository per template). Ogni nodo n8n documentato con esempi di configurazione e errori comuni.",
    },
    result: {
      en: "You describe what you need, the skill builds the workflow. Node configurations, error handling, credential setup. From simple HTTP requests to multi-step AI agent pipelines. No more trial-and-error.",
      it: "Descrivi cosa ti serve, la skill costruisce il workflow. Configurazioni nodo, gestione errori, setup credenziali. Da semplici richieste HTTP a pipeline multi-step con agenti AI. Basta tentativi alla cieca.",
    },
    whatsInside: [
      { en: "100 files totaling 2.6M of structured n8n knowledge", it: "100 file per un totale di 2.6M di conoscenza n8n strutturata" },
      { en: "545 AI workflow patterns analyzed and categorized", it: "545 pattern di workflow AI analizzati e categorizzati" },
      { en: "Intelligent routing to 3 companion skills for documentation and templates", it: "Routing intelligente verso 3 skill companion per documentazione e template" },
      { en: "Node-by-node reference with configuration examples and pitfalls", it: "Reference nodo per nodo con esempi di configurazione ed errori comuni" },
      { en: "AI-specific patterns: agent chains, RAG, tool calling, memory", it: "Pattern AI specifici: catene di agenti, RAG, tool calling, memoria" },
    ],
    whoIsThisFor: [
      { en: "Developers and no-coders building n8n automations", it: "Developer e no-coder che costruiscono automazioni n8n" },
      { en: "Teams adopting n8n for AI-powered workflows", it: "Team che adottano n8n per workflow con AI" },
      { en: "Anyone tired of searching n8n docs for 20 minutes to configure one node", it: "Chiunque sia stanco di cercare nei docs n8n per 20 minuti per configurare un nodo" },
    ],
    notFor: {
      en: "Users of Zapier, Make, or other automation platforms (this is n8n-specific)",
      it: "Utenti di Zapier, Make o altre piattaforme di automazione (questa skill è specifica per n8n)",
    },
    beforeAfter: [
      {
        before: { en: "20 minutes searching docs to configure a single node", it: "20 minuti a cercare nei docs per configurare un singolo nodo" },
        after: { en: "Every node covered with examples, pitfalls, and tested configurations", it: "Ogni nodo coperto con esempi, errori comuni e configurazioni testate" },
      },
      {
        before: { en: "Building AI workflows from scratch by trial and error", it: "Costruire workflow AI da zero per tentativi" },
        after: { en: "545 analyzed AI patterns ready to adapt to your use case", it: "545 pattern AI analizzati pronti da adattare al tuo caso d'uso" },
      },
      {
        before: { en: "No idea which nodes to combine for complex automations", it: "Nessuna idea di quali nodi combinare per automazioni complesse" },
        after: { en: "1,495 real community templates searchable by service and integration", it: "1.495 template community reali ricercabili per servizio e integrazione" },
      },
    ],
    faq: [
      {
        question: { en: "What exactly do I get when I buy this?", it: "Cosa ricevo esattamente quando acquisto?" },
        answer: {
          en: "A ZIP with 100 files: node references, AI workflow patterns, routing logic, and integration guides. 2.6M of content. No subscription.",
          it: "Un ZIP con 100 file: reference nodi, pattern workflow AI, logica di routing e guide integrazione. 2.6M di contenuto. Nessun abbonamento.",
        },
      },
      {
        question: { en: "Do I need the companion skills (Docs Live, Repository)?", it: "Servono le skill companion (Docs Live, Repository)?" },
        answer: {
          en: "No. The Expert skill works standalone. The companions add live documentation search and 1,486 extra templates. They are available in the n8n Power Pack bundle.",
          it: "No. La skill Expert funziona standalone. Le companion aggiungono ricerca documentazione live e 1.486 template extra. Sono disponibili nel bundle n8n Power Pack.",
        },
      },
      {
        question: { en: "Does it work with self-hosted and cloud n8n?", it: "Funziona con n8n self-hosted e cloud?" },
        answer: {
          en: "Yes. The patterns and node configurations are identical for both versions.",
          it: "Sì. I pattern e le configurazioni nodo sono identici per entrambe le versioni.",
        },
      },
      {
        question: { en: "Can I get a refund?", it: "Posso ottenere un rimborso?" },
        answer: {
          en: "Skills are digital products. All sales are final. We recommend reviewing the skill details carefully before purchasing.",
          it: "Le skill sono prodotti digitali. Tutte le vendite sono definitive. Ti consigliamo di leggere attentamente i dettagli della skill prima dell'acquisto.",
        },
      },
    ],
    relatedSlugs: ["n8n-docs-live", "n8n-workflow-repository"],
  compatibleWith: "Claude Code + Desktop",
  prerequisites: ["n8n account", "n8n-mcp server (recommended, via npx)"],
  hasTerminalVideo: true,
  },
  {
    slug: "n8n-docs-live",
    name: "n8n Docs Live",
    technicalName: "n8n-docs-live",
    tagline: {
      en: "Searchable local index of official n8n documentation with live sync",
      it: "Indice locale ricercabile della documentazione n8n ufficiale con sync live",
    },
    category: "automation",
    tags: ["n8n", "documentation", "reference", "offline"],
    price: 19,
    currency: "EUR",
    isFree: false,
    isBundleOnly: true,
    badge: null,
    icon: "book-open",
    filesCount: 16,
    launchPhase: 1,
    complexity: 3,
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          { en: "Initial release with local searchable index and live fallback", it: "Rilascio iniziale con indice locale ricercabile e fallback live" },
        ],
      },
    ],
    bundleSlugs: ["n8n-power-pack"],
    metaTitle: {
      en: "n8n Docs Live - Searchable n8n Documentation for Claude Code",
      it: "n8n Docs Live - Documentazione n8n Ricercabile per Claude Code",
    },
    metaDescription: {
      en: "Local searchable index of n8n documentation. Core nodes, AI nodes, expressions, integrations. Auto-sync with live search fallback.",
      it: "Indice locale ricercabile della documentazione n8n. Nodi core, nodi AI, espressioni, integrazioni. Auto-sync con fallback ricerca live.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You are building an n8n workflow and need to check how a node works. You open the browser, search n8n docs, navigate three pages, and lose your flow. Context switching between Claude Code and browser documentation slows everything down.",
      it: "Stai costruendo un workflow n8n e devi controllare come funziona un nodo. Apri il browser, cerchi nei docs n8n, navighi tre pagine e perdi il filo. Il context switching tra Claude Code e la documentazione nel browser rallenta tutto.",
    },
    solution: {
      en: "A local searchable index of official n8n documentation, accessible directly from Claude Code. 16 files covering core nodes, AI nodes, expressions, and integrations. Auto-sync keeps the index current. When something is not in the local index, a live search fallback queries n8n docs in real time.",
      it: "Un indice locale ricercabile della documentazione n8n ufficiale, accessibile direttamente da Claude Code. 16 file che coprono nodi core, nodi AI, espressioni e integrazioni. L'auto-sync mantiene l'indice aggiornato. Quando qualcosa non è nell'indice locale, un fallback di ricerca live interroga i docs n8n in tempo reale.",
    },
    result: {
      en: "No more browser tab switching. Ask Claude about any n8n node and get the official documentation instantly. Works offline for indexed content.",
      it: "Basta cambiare tab del browser. Chiedi a Claude di qualsiasi nodo n8n e ottieni la documentazione ufficiale istantaneamente. Funziona offline per i contenuti indicizzati.",
    },
    whatsInside: [
      { en: "16 files with indexed n8n documentation", it: "16 file con documentazione n8n indicizzata" },
      { en: "Core node reference: HTTP, Code, Function, Switch, Merge, and more", it: "Reference nodi core: HTTP, Code, Function, Switch, Merge e altri" },
      { en: "AI node reference: Agent, Chain, Tool, Memory, Embeddings", it: "Reference nodi AI: Agent, Chain, Tool, Memory, Embeddings" },
      { en: "Expression syntax and built-in functions reference", it: "Sintassi espressioni e reference funzioni built-in" },
      { en: "Live search fallback for content not in the local index", it: "Fallback ricerca live per contenuti non nell'indice locale" },
    ],
    whoIsThisFor: [
      { en: "n8n developers who want documentation inside Claude Code", it: "Developer n8n che vogliono la documentazione dentro Claude Code" },
      { en: "Teams using n8n Workflow Expert who need quick node reference", it: "Team che usano n8n Workflow Expert e necessitano di reference nodi rapida" },
      { en: "Anyone building n8n workflows who hates browser tab switching", it: "Chiunque costruisca workflow n8n e odi il tab switching del browser" },
    ],
    notFor: {
      en: "Standalone purchase. Available only in the n8n Power Pack bundle",
      it: "Acquisto standalone. Disponibile solo nel bundle n8n Power Pack",
    },
    beforeAfter: [
      {
        before: { en: "Open browser, search n8n docs, navigate 3 pages, lose your flow", it: "Apri browser, cerca nei docs n8n, naviga 3 pagine, perdi il filo" },
        after: { en: "Ask Claude about any node. Get the answer without leaving your editor", it: "Chiedi a Claude di qualsiasi nodo. Ottieni la risposta senza uscire dall'editor" },
      },
      {
        before: { en: "Outdated local notes that drift from official documentation", it: "Appunti locali obsoleti che divergono dalla documentazione ufficiale" },
        after: { en: "Auto-sync keeps the index current with live fallback for edge cases", it: "L'auto-sync mantiene l'indice aggiornato con fallback live per i casi limite" },
      },
      {
        before: { en: "No quick reference for AI-specific nodes (Agent, Chain, Tool)", it: "Nessuna reference rapida per i nodi AI-specifici (Agent, Chain, Tool)" },
        after: { en: "Dedicated AI node section with configuration examples", it: "Sezione dedicata nodi AI con esempi di configurazione" },
      },
    ],
    faq: [
      {
        question: { en: "What exactly do I get when I buy this?", it: "Cosa ricevo esattamente quando acquisto?" },
        answer: {
          en: "This skill is available only in the n8n Power Pack bundle. You get 16 files with indexed n8n documentation and a live search fallback system.",
          it: "Questa skill è disponibile solo nel bundle n8n Power Pack. Ricevi 16 file con documentazione n8n indicizzata e un sistema di fallback ricerca live.",
        },
      },
      {
        question: { en: "Does it replace the official n8n documentation?", it: "Sostituisce la documentazione ufficiale n8n?" },
        answer: {
          en: "No. It brings the official docs into Claude Code for faster access. The live fallback queries the official site when needed.",
          it: "No. Porta i docs ufficiali dentro Claude Code per accesso più rapido. Il fallback live interroga il sito ufficiale quando serve.",
        },
      },
      {
        question: { en: "Can I buy it separately?", it: "Posso comprarlo separatamente?" },
        answer: {
          en: "No. n8n Docs Live is a bundle-only skill, available in the n8n Power Pack.",
          it: "No. n8n Docs Live è una skill solo-bundle, disponibile nel n8n Power Pack.",
        },
      },
      {
        question: { en: "Can I get a refund?", it: "Posso ottenere un rimborso?" },
        answer: {
          en: "Skills are digital products. All sales are final. We recommend reviewing the skill details carefully before purchasing.",
          it: "Le skill sono prodotti digitali. Tutte le vendite sono definitive. Ti consigliamo di leggere attentamente i dettagli della skill prima dell'acquisto.",
        },
      },
    ],
    relatedSlugs: ["n8n-ai-workflow-expert", "n8n-workflow-repository"],
  compatibleWith: "Claude Code + Desktop",
  prerequisites: ["n8n account"],
  hasTerminalVideo: true,
  },
  {
    slug: "n8n-workflow-repository",
    name: "n8n Workflow Repository",
    technicalName: "n8n-workflow-repository",
    tagline: {
      en: "1,486 real-world n8n workflow templates in 98 searchable files",
      it: "1.486 template di workflow n8n reali in 98 file ricercabili",
    },
    category: "automation",
    tags: ["n8n", "templates", "workflow", "library"],
    price: 29,
    currency: "EUR",
    isFree: false,
    isBundleOnly: true,
    badge: null,
    icon: "library",
    filesCount: 106,
    launchPhase: 1,
    complexity: 3,
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          { en: "Initial release with 1,486 workflow templates in 98 files", it: "Rilascio iniziale con 1.486 template workflow in 98 file" },
        ],
      },
    ],
    bundleSlugs: ["n8n-power-pack"],
    metaTitle: {
      en: "n8n Workflow Repository - 1,486 Real-World Templates",
      it: "n8n Workflow Repository - 1.486 Template Reali",
    },
    metaDescription: {
      en: "98 searchable files with 1,486 n8n workflow templates. Search by service, integration, or pattern. From HTTP requests to AI agent pipelines.",
      it: "98 file ricercabili con 1.486 template workflow n8n. Cerca per servizio, integrazione o pattern. Da richieste HTTP a pipeline agenti AI.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You need an n8n workflow for a specific integration. The community library has thousands, but searching is slow and results are often outdated. You end up building from scratch every time, reinventing patterns that others have already solved.",
      it: "Ti serve un workflow n8n per un'integrazione specifica. La libreria community ne ha migliaia, ma la ricerca è lenta e i risultati sono spesso obsoleti. Finisci per costruire da zero ogni volta, reinventando pattern che altri hanno già risolto.",
    },
    solution: {
      en: "1,486 real-world workflow templates organized in 98 searchable files. Rich metadata for pattern clustering. Search by service (Slack, Gmail, Notion), integration type, or workflow pattern. Every template includes node configuration, credential requirements, and use case description.",
      it: "1.486 template di workflow reali organizzati in 98 file ricercabili. Metadata ricchi per clustering di pattern. Cerca per servizio (Slack, Gmail, Notion), tipo di integrazione o pattern workflow. Ogni template include configurazione nodo, requisiti credenziali e descrizione del caso d'uso.",
    },
    result: {
      en: "Instead of building from scratch, you start from a tested template and adapt it. Search takes seconds. The template gives you the node structure, configuration, and error handling patterns.",
      it: "Invece di costruire da zero, parti da un template testato e lo adatti. La ricerca richiede secondi. Il template ti dà la struttura nodi, configurazione e pattern di gestione errori.",
    },
    whatsInside: [
      { en: "98 files containing 1,486 workflow templates", it: "98 file contenenti 1.486 template workflow" },
      { en: "Rich metadata: service, integration type, complexity, node count", it: "Metadata ricchi: servizio, tipo integrazione, complessità, numero nodi" },
      { en: "Search by service, pattern, or integration type", it: "Ricerca per servizio, pattern o tipo integrazione" },
      { en: "Templates from simple webhooks to complex AI agent pipelines", it: "Template da semplici webhook a pipeline complesse con agenti AI" },
    ],
    whoIsThisFor: [
      { en: "n8n developers who want a starting point instead of blank canvas", it: "Developer n8n che vogliono un punto di partenza invece di una tela bianca" },
      { en: "Teams standardizing n8n patterns across the organization", it: "Team che standardizzano pattern n8n in tutta l'organizzazione" },
      { en: "Users of n8n Workflow Expert who want more templates to reference", it: "Utenti di n8n Workflow Expert che vogliono più template di riferimento" },
    ],
    notFor: {
      en: "Standalone purchase. Available only in the n8n Power Pack bundle",
      it: "Acquisto standalone. Disponibile solo nel bundle n8n Power Pack",
    },
    beforeAfter: [
      {
        before: { en: "Building every workflow from scratch. Reinventing solved patterns", it: "Costruire ogni workflow da zero. Reinventare pattern già risolti" },
        after: { en: "Start from 1,486 tested templates. Adapt, not rebuild", it: "Parti da 1.486 template testati. Adatta, non ricostruire" },
      },
      {
        before: { en: "Searching community forums for 15 minutes to find one example", it: "Cercare nei forum community per 15 minuti per trovare un esempio" },
        after: { en: "Searchable index by service, pattern, and integration in seconds", it: "Indice ricercabile per servizio, pattern e integrazione in secondi" },
      },
      {
        before: { en: "No metadata on templates. Hard to judge complexity before starting", it: "Nessun metadata sui template. Difficile giudicare la complessità prima di iniziare" },
        after: { en: "Rich metadata: node count, services used, complexity rating", it: "Metadata ricchi: numero nodi, servizi usati, rating complessità" },
      },
    ],
    faq: [
      {
        question: { en: "What exactly do I get when I buy this?", it: "Cosa ricevo esattamente quando acquisto?" },
        answer: {
          en: "This skill is available only in the n8n Power Pack bundle. You get 98 files with 1,486 searchable workflow templates and rich metadata.",
          it: "Questa skill è disponibile solo nel bundle n8n Power Pack. Ricevi 98 file con 1.486 template workflow ricercabili e metadata ricchi.",
        },
      },
      {
        question: { en: "Are these ready-to-import JSON workflows?", it: "Sono workflow JSON pronti da importare?" },
        answer: {
          en: "They are structured descriptions with node configurations that Claude Code can turn into importable n8n JSON. Not raw JSON files, but detailed enough for instant implementation.",
          it: "Sono descrizioni strutturate con configurazioni nodo che Claude Code può trasformare in JSON importabile in n8n. Non file JSON grezzi, ma abbastanza dettagliati per implementazione immediata.",
        },
      },
      {
        question: { en: "Can I buy it separately?", it: "Posso comprarlo separatamente?" },
        answer: {
          en: "No. n8n Workflow Repository is a bundle-only skill, available in the n8n Power Pack.",
          it: "No. n8n Workflow Repository è una skill solo-bundle, disponibile nel n8n Power Pack.",
        },
      },
      {
        question: { en: "Can I get a refund?", it: "Posso ottenere un rimborso?" },
        answer: {
          en: "Skills are digital products. All sales are final. We recommend reviewing the skill details carefully before purchasing.",
          it: "Le skill sono prodotti digitali. Tutte le vendite sono definitive. Ti consigliamo di leggere attentamente i dettagli della skill prima dell'acquisto.",
        },
      },
    ],
    relatedSlugs: ["n8n-ai-workflow-expert", "n8n-docs-live"],
  compatibleWith: "Claude Code + Desktop",
  prerequisites: [],
  hasTerminalVideo: true,
  },
  {
    slug: "iterative-self-critique",
    name: "Iterative Self-Critique",
    technicalName: "iterative-self-critique",
    tagline: {
      en: "Plan-Critique-Revise pattern that takes accuracy from 50% to 90%",
      it: "Pattern Plan-Critique-Revise che porta l'accuratezza dal 50% al 90%",
    },
    category: "devtools",
    tags: ["validation", "planning", "DeepMind", "self-critique"],
    price: 19,
    currency: "EUR",
    isFree: false,
    isBundleOnly: false,
    badge: null,
    icon: "refresh-ccw",
    filesCount: 3,
    launchPhase: 1,
    complexity: 2,
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          { en: "Initial release with Plan-Critique-Revise pattern and domain templates", it: "Rilascio iniziale con pattern Plan-Critique-Revise e template di dominio" },
        ],
      },
    ],
    bundleSlugs: ["n8n-power-pack", "claude-code-mastery"],
    metaTitle: {
      en: "Iterative Self-Critique - DeepMind-Validated Planning Pattern",
      it: "Iterative Self-Critique - Pattern di Planning Validato da DeepMind",
    },
    metaDescription: {
      en: "Google DeepMind validated: Plan-Critique-Revise improves accuracy from 50% to 90%. 3 validation steps. Domain templates for n8n, migration, architecture.",
      it: "Validato da Google DeepMind: Plan-Critique-Revise migliora l'accuratezza dal 50% al 90%. 3 step di validazione. Template di dominio per n8n, migrazione, architettura.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "AI plans look reasonable but fail on execution. The model generates a migration plan, an architecture, or a workflow sequence. It reads well. Then you implement it and discover missed dependencies, wrong ordering, or impossible steps. LLMs plan at 50% accuracy on complex tasks.",
      it: "I piani dell'AI sembrano ragionevoli ma falliscono in esecuzione. Il modello genera un piano di migrazione, un'architettura o una sequenza di workflow. Si legge bene. Poi lo implementi e scopri dipendenze mancanti, ordine sbagliato o step impossibili. Gli LLM pianificano con 50% di accuratezza su task complessi.",
    },
    solution: {
      en: "The Plan-Critique-Revise pattern from Google DeepMind (2025). Three validation steps for every plan: identify preconditions, verify each step satisfies its preconditions, calculate the resulting state. Domain-specific templates for n8n workflows, database migrations, and system architecture. The critique phase catches errors before execution.",
      it: "Il pattern Plan-Critique-Revise di Google DeepMind (2025). Tre step di validazione per ogni piano: identifica precondizioni, verifica che ogni step soddisfi le sue precondizioni, calcola lo stato risultante. Template specifici per dominio: workflow n8n, migrazioni database, architettura sistemi. La fase di critica intercetta gli errori prima dell'esecuzione.",
    },
    result: {
      en: "Plans that actually work when executed. Accuracy goes from 50% to 90% on planning tasks (DeepMind benchmarks). You catch the broken step before you run it, not after.",
      it: "Piani che funzionano davvero quando li esegui. L'accuratezza passa dal 50% al 90% sui task di planning (benchmark DeepMind). Intercetti lo step rotto prima di eseguirlo, non dopo.",
    },
    whatsInside: [
      { en: "5 files implementing the Plan-Critique-Revise methodology", it: "5 file che implementano la metodologia Plan-Critique-Revise" },
      { en: "3 validation steps: preconditions, satisfaction, resulting state", it: "3 step di validazione: precondizioni, soddisfacimento, stato risultante" },
      { en: "Domain template: n8n workflow planning and validation", it: "Template dominio: planning e validazione workflow n8n" },
      { en: "Domain template: database migration sequencing", it: "Template dominio: sequenziamento migrazione database" },
      { en: "Domain template: system architecture decision validation", it: "Template dominio: validazione decisioni architettura sistemi" },
    ],
    whoIsThisFor: [
      { en: "Developers using AI for architecture and migration planning", it: "Developer che usano l'AI per planning di architettura e migrazioni" },
      { en: "n8n builders who need validated workflow sequences", it: "Builder n8n che necessitano sequenze di workflow validate" },
      { en: "Anyone who has been burned by an AI plan that looked right but failed", it: "Chiunque sia stato scottato da un piano AI che sembrava corretto ma è fallito" },
    ],
    notFor: {
      en: "Simple one-step tasks that do not need planning validation",
      it: "Task semplici a uno step che non necessitano validazione del planning",
    },
    beforeAfter: [
      {
        before: { en: "AI plans that read well but fail on execution. 50% accuracy", it: "Piani AI che si leggono bene ma falliscono in esecuzione. 50% di accuratezza" },
        after: { en: "Plans validated with 3-step critique. 90% accuracy (DeepMind benchmarks)", it: "Piani validati con critica a 3 step. 90% di accuratezza (benchmark DeepMind)" },
      },
      {
        before: { en: "Discovering missed dependencies after running the migration", it: "Scoprire dipendenze mancanti dopo aver eseguito la migrazione" },
        after: { en: "Precondition check catches every dependency before execution", it: "Il controllo precondizioni intercetta ogni dipendenza prima dell'esecuzione" },
      },
      {
        before: { en: "Generic planning with no domain-specific validation", it: "Planning generico senza validazione specifica per dominio" },
        after: { en: "Domain templates for n8n, migrations, and architecture decisions", it: "Template di dominio per n8n, migrazioni e decisioni architetturali" },
      },
    ],
    faq: [
      {
        question: { en: "What exactly do I get when I buy this?", it: "Cosa ricevo esattamente quando acquisto?" },
        answer: {
          en: "A ZIP with 5 files: the Plan-Critique-Revise methodology and 3 domain-specific templates. No subscription.",
          it: "Un ZIP con 5 file: la metodologia Plan-Critique-Revise e 3 template specifici per dominio. Nessun abbonamento.",
        },
      },
      {
        question: { en: "Where does the 50% to 90% number come from?", it: "Da dove viene il dato dal 50% al 90%?" },
        answer: {
          en: "From Google DeepMind research published in 2025 on self-critique patterns for LLM planning tasks. The improvement varies by task complexity.",
          it: "Dalla ricerca Google DeepMind pubblicata nel 2025 sui pattern di self-critique per task di planning LLM. Il miglioramento varia in base alla complessità del task.",
        },
      },
      {
        question: { en: "Can I use it with skills other than n8n?", it: "Posso usarlo con skill diverse da n8n?" },
        answer: {
          en: "Yes. The methodology is universal. The domain templates are examples. You can apply Plan-Critique-Revise to any complex planning task.",
          it: "Sì. La metodologia è universale. I template di dominio sono esempi. Puoi applicare Plan-Critique-Revise a qualsiasi task di planning complesso.",
        },
      },
      {
        question: { en: "Can I get a refund?", it: "Posso ottenere un rimborso?" },
        answer: {
          en: "Skills are digital products. All sales are final. We recommend reviewing the skill details carefully before purchasing.",
          it: "Le skill sono prodotti digitali. Tutte le vendite sono definitive. Ti consigliamo di leggere attentamente i dettagli della skill prima dell'acquisto.",
        },
      },
    ],
    relatedSlugs: ["maia", "n8n-ai-workflow-expert"],
  compatibleWith: "All Platforms",
  prerequisites: [],
  hasTerminalVideo: true,
  },
  {
    slug: "skill-creator-guru",
    name: "Skill Creator Guru",
    technicalName: "skill-creator-guru",
    tagline: {
      en: "Anthropic's skill-creator, supercharged with PRD methodology and production-tested best practices",
      it: "La skill-creator di Anthropic, potenziata con metodologia PRD e best practice testate in produzione",
    },
    category: "devtools",
    tags: ["skill creation", "SKILL.md", "best practices", "packaging"],
    price: 0,
    currency: "EUR",
    isFree: true,
    isBundleOnly: false,
    badge: "lead-magnet",
    icon: "hammer",
    filesCount: 8,
    launchPhase: 1,
    complexity: 3,
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          { en: "Initial release with SKILL.md patterns, bundled resources, and packaging scripts", it: "Rilascio iniziale con pattern SKILL.md, risorse bundle e script di packaging" },
        ],
      },
    ],
    bundleSlugs: ["claude-code-mastery"],
    metaTitle: {
      en: "Skill Creator Guru - Anthropic's Skill-Creator Enhanced with PRD & Best Practices",
      it: "Skill Creator Guru - La Skill-Creator di Anthropic Potenziata con PRD e Best Practice",
    },
    metaDescription: {
      en: "Builds on Anthropic's original skill-creator with PRD methodology, 4 quality pillars, token optimization, anti-patterns, security audit, and months of daily production experience. Free.",
      it: "Estende la skill-creator originale di Anthropic con metodologia PRD, 4 pilastri di qualità, ottimizzazione token, anti-pattern, audit sicurezza e mesi di esperienza quotidiana in produzione. Gratis.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "Anthropic's original skill-creator covers the basics — 6 steps, SKILL.md structure, init and package scripts — but stops there. No guidance on designing complex skills, no quality framework, no token optimization strategy, no security considerations. You end up with skills that work but are not production-grade: bloated context windows, no error handling, no versioning, no PRD to align on requirements before writing a single line.",
      it: "La skill-creator originale di Anthropic copre le basi — 6 step, struttura SKILL.md, script di init e package — ma si ferma lì. Nessuna guida per progettare skill complesse, nessun framework di qualità, nessuna strategia di ottimizzazione token, nessuna considerazione sulla sicurezza. Il risultato sono skill che funzionano ma non sono production-grade: finestre di contesto gonfiate, nessuna gestione errori, nessun versioning, nessun PRD per allinearsi sui requisiti prima di scrivere una singola riga.",
    },
    solution: {
      en: "Skill Creator Guru takes Anthropic's foundation and adds everything learned from building 25+ production skills daily for months. A 7-step process (vs the original 6) with a dedicated PRD step for complex skills. Four Pillars of Quality framework (Effectiveness, Efficiency, Robustness, Safety). Token budget optimization with progressive disclosure costs. 7 documented anti-patterns. Security audit checklist for third-party skills. Extended Thinking vs Think Tool guidance. Common skill patterns (workflow, task, reference, capabilities). Plus the same 3 Python scripts for init, package, and validate.",
      it: "Skill Creator Guru prende le fondamenta di Anthropic e aggiunge tutto ciò che si impara costruendo 25+ skill in produzione quotidianamente per mesi. Un processo a 7 step (vs i 6 originali) con uno step PRD dedicato per skill complesse. Framework Four Pillars of Quality (Effectiveness, Efficiency, Robustness, Safety). Ottimizzazione budget token con costi di progressive disclosure. 7 anti-pattern documentati. Checklist audit sicurezza per skill di terze parti. Guida Extended Thinking vs Think Tool. Pattern comuni per skill (workflow, task, reference, capabilities). Più gli stessi 3 script Python per init, package e validate.",
    },
    result: {
      en: "You create skills that are not just functional but production-grade. The PRD methodology catches requirement gaps before you write code. The quality pillars give you a framework to evaluate every skill. Token optimization keeps your skills fast and cost-effective. You know exactly what to avoid and what patterns to follow — tested across 25+ real skills used daily.",
      it: "Crei skill che non sono solo funzionali, ma production-grade. La metodologia PRD intercetta i gap nei requisiti prima di scrivere codice. I pilastri di qualità ti danno un framework per valutare ogni skill. L'ottimizzazione token mantiene le skill veloci e cost-effective. Sai esattamente cosa evitare e quali pattern seguire — testati su 25+ skill reali usate quotidianamente.",
    },
    whatsInside: [
      { en: "8 files: enhanced guide, best practices, patterns, testing guide, and 3 Python scripts", it: "8 file: guida potenziata, best practice, pattern, guida test e 3 script Python" },
      { en: "PRD methodology: full template for designing complex skills before coding", it: "Metodologia PRD: template completo per progettare skill complesse prima di scrivere codice" },
      { en: "Four Pillars of Quality: evaluation framework (Effectiveness, Efficiency, Robustness, Safety)", it: "Four Pillars of Quality: framework di valutazione (Effectiveness, Efficiency, Robustness, Safety)" },
      { en: "7 anti-patterns to avoid + token budget optimization + security audit checklist", it: "7 anti-pattern da evitare + ottimizzazione budget token + checklist audit sicurezza" },
      { en: "Everything from Anthropic's original plus months of daily production experience", it: "Tutto ciò che è nell'originale di Anthropic più mesi di esperienza quotidiana in produzione" },
    ],
    whoIsThisFor: [
      { en: "Developers who want to create and sell Claude Code skills", it: "Developer che vogliono creare e vendere skill per Claude Code" },
      { en: "Teams building internal skills for their organization", it: "Team che costruiscono skill interne per la propria organizzazione" },
      { en: "Anyone with domain expertise who wants to package it as a reusable skill", it: "Chiunque abbia competenze di dominio e voglia impacchettarle come skill riutilizzabile" },
    ],
    notFor: {
      en: "Users who only want to use skills, not create them",
      it: "Utenti che vogliono solo usare le skill, non crearle",
    },
    beforeAfter: [
      {
        before: { en: "Anthropic's original: 6 steps, basic SKILL.md structure, no design methodology", it: "Originale di Anthropic: 6 step, struttura SKILL.md base, nessuna metodologia di design" },
        after: { en: "7-step process with dedicated PRD step, quality pillars, and production-tested patterns", it: "Processo a 7 step con step PRD dedicato, pilastri di qualità e pattern testati in produzione" },
      },
      {
        before: { en: "No guidance on token costs, context window management, or skill efficiency", it: "Nessuna guida su costi token, gestione finestra di contesto o efficienza skill" },
        after: { en: "Token budget optimization with progressive disclosure costs and loading strategies", it: "Ottimizzazione budget token con costi di progressive disclosure e strategie di caricamento" },
      },
      {
        before: { en: "No quality framework — skills work but you cannot evaluate how well", it: "Nessun framework di qualità — le skill funzionano ma non puoi valutare quanto bene" },
        after: { en: "Four Pillars of Quality + 7 anti-patterns + security audit checklist", it: "Four Pillars of Quality + 7 anti-pattern + checklist audit sicurezza" },
      },
    ],
    faq: [
      {
        question: { en: "How is this different from Anthropic's built-in skill-creator?", it: "In cosa si differenzia dalla skill-creator integrata di Anthropic?" },
        answer: {
          en: "Anthropic's original is a lean 6-step guide (~1,200 words) covering basic SKILL.md structure. Skill Creator Guru is 4x larger, adds a PRD methodology for complex skills, a quality evaluation framework, token optimization strategies, 7 documented anti-patterns, security audit checklist, and patterns extracted from 25+ production skills built daily over months.",
          it: "L'originale di Anthropic è una guida sintetica a 6 step (~1.200 parole) che copre la struttura base di SKILL.md. Skill Creator Guru è 4 volte più grande, aggiunge una metodologia PRD per skill complesse, un framework di valutazione qualità, strategie di ottimizzazione token, 7 anti-pattern documentati, checklist audit sicurezza e pattern estratti da 25+ skill in produzione costruite quotidianamente per mesi.",
        },
      },
      {
        question: { en: "Do I need to know Python?", it: "Devo conoscere Python?" },
        answer: {
          en: "No. Claude Code runs the scripts for you. They are convenience tools for scaffolding, packaging, and validation.",
          it: "No. Claude Code esegue gli script per te. Sono strumenti di utilità per scaffolding, packaging e validazione.",
        },
      },
      {
        question: { en: "Can I sell skills I create with this?", it: "Posso vendere le skill che creo con questa?" },
        answer: {
          en: "Yes. The skills you create are yours. This tool teaches you how to build them. What you do with them is up to you.",
          it: "Sì. Le skill che crei sono tue. Questo strumento ti insegna come costruirle. Cosa farne è una tua scelta.",
        },
      },
      {
        question: { en: "Why is it free?", it: "Perch\u00e9 \u00e8 gratuita?" },
        answer: {
          en: "Because the best way to grow a skill marketplace is to help people build good skills. If you create something worth selling, Skillwire is where you'd sell it. The incentives align.",
          it: "Perch\u00e9 il modo migliore per far crescere un marketplace di skill \u00e8 aiutare le persone a costruirne di buone. Se crei qualcosa che vale la pena vendere, Skillwire \u00e8 dove lo venderesti. Gli incentivi sono allineati.",
        },
      },
    ],
    relatedSlugs: ["memory-manager", "maia"],
  compatibleWith: "All Platforms",
  prerequisites: [],
  hasTerminalVideo: true,
  },
  {
    slug: "memory-manager",
    name: "Memory Manager",
    technicalName: "memory-manager",
    tagline: {
      en: "Persistent cross-session memory system for Claude Code skills",
      it: "Sistema di memoria persistente cross-sessione per skill Claude Code",
    },
    category: "devtools",
    tags: ["memory", "persistence", "cross-session", "storage"],
    price: 9,
    currency: "EUR",
    isFree: false,
    isBundleOnly: false,
    badge: null,
    icon: "brain",
    filesCount: 4,
    launchPhase: 1,
    complexity: 3,
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          { en: "Initial release with 3 memory types and slash command management", it: "Rilascio iniziale con 3 tipi di memoria e gestione tramite comandi slash" },
        ],
      },
    ],
    bundleSlugs: ["claude-code-mastery"],
    metaTitle: {
      en: "Memory Manager - Persistent Memory for Claude Code Skills",
      it: "Memory Manager - Memoria Persistente per Skill Claude Code",
    },
    metaDescription: {
      en: "Cross-session memory with 3 storage types (users, projects, preferences). Distributed per-skill storage. Slash commands for management.",
      it: "Memoria cross-sessione con 3 tipi di storage (utenti, progetti, preferenze). Storage distribuito per skill. Comandi slash per la gestione.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "Claude Code forgets everything between sessions. You repeat the same context every time: client names, project details, your preferences. Skills cannot build on previous interactions. Every conversation starts from zero.",
      it: "Claude Code dimentica tutto tra le sessioni. Ripeti lo stesso contesto ogni volta: nomi clienti, dettagli progetto, le tue preferenze. Le skill non possono costruire sulle interazioni precedenti. Ogni conversazione parte da zero.",
    },
    solution: {
      en: "A distributed memory system where each skill stores its own data in 3 types: users (people, clients, stakeholders), projects (deals, initiatives, opportunities), and preferences (styles, recurring patterns). Slash commands for consolidation, search, and cleanup. Memory loads automatically at skill start.",
      it: "Un sistema di memoria distribuito dove ogni skill salva i propri dati in 3 tipi: users (persone, clienti, stakeholder), projects (deal, iniziative, opportunità) e preferences (stili, pattern ricorrenti). Comandi slash per consolidamento, ricerca e pulizia. La memoria si carica automaticamente all'avvio della skill.",
    },
    result: {
      en: "Skills remember your clients, your projects, and your preferences across sessions. No more repeating context. Every interaction builds on the last one.",
      it: "Le skill ricordano i tuoi clienti, i tuoi progetti e le tue preferenze tra le sessioni. Basta ripetere il contesto. Ogni interazione costruisce sulla precedente.",
    },
    whatsInside: [
      { en: "4 files implementing the distributed memory system", it: "4 file che implementano il sistema di memoria distribuito" },
      { en: "3 memory types: users, projects, preferences", it: "3 tipi di memoria: users, projects, preferences" },
      { en: "Slash commands: /memory consolidate, /memory search, /memory cleanup", it: "Comandi slash: /memory consolidate, /memory search, /memory cleanup" },
      { en: "Auto-load protocol: memory loads when a skill starts", it: "Protocollo auto-load: la memoria si carica all'avvio della skill" },
    ],
    whoIsThisFor: [
      { en: "Claude Code power users who run skills daily", it: "Power user di Claude Code che eseguono skill ogni giorno" },
      { en: "Skill creators who want to add memory to their own skills", it: "Creatori di skill che vogliono aggiungere memoria alle proprie skill" },
      { en: "Professionals who work with recurring clients and projects", it: "Professionisti che lavorano con clienti e progetti ricorrenti" },
    ],
    notFor: {
      en: "Users who start fresh every session and do not need continuity",
      it: "Utenti che ripartono da zero ogni sessione e non hanno bisogno di continuità",
    },
    beforeAfter: [
      {
        before: { en: "Repeating client names, project details, preferences every session", it: "Ripetere nomi clienti, dettagli progetto, preferenze ogni sessione" },
        after: { en: "Memory auto-loads at skill start. Context is already there", it: "La memoria si carica automaticamente all'avvio. Il contesto è già presente" },
      },
      {
        before: { en: "Skills cannot build on previous interactions. Every chat is isolated", it: "Le skill non possono costruire sulle interazioni precedenti. Ogni chat è isolata" },
        after: { en: "Cross-session persistence. Each interaction enriches the next", it: "Persistenza cross-sessione. Ogni interazione arricchisce la successiva" },
      },
      {
        before: { en: "One giant memory file that becomes unmanageable after a month", it: "Un unico file di memoria gigante che diventa ingestibile dopo un mese" },
        after: { en: "Distributed storage: each skill has its own organized memory folder", it: "Storage distribuito: ogni skill ha la propria cartella di memoria organizzata" },
      },
    ],
    faq: [
      {
        question: { en: "What exactly do I get when I buy this?", it: "Cosa ricevo esattamente quando acquisto?" },
        answer: {
          en: "A ZIP with 4 files: the memory system, storage schema, slash commands, and integration guide. No subscription.",
          it: "Un ZIP con 4 file: il sistema di memoria, lo schema di storage, i comandi slash e la guida all'integrazione. Nessun abbonamento.",
        },
      },
      {
        question: { en: "Where is the data stored?", it: "Dove vengono salvati i dati?" },
        answer: {
          en: "In local files under .claude/skills/{skill-name}/memory/. Nothing leaves your machine. No cloud, no API calls.",
          it: "In file locali sotto .claude/skills/{nome-skill}/memory/. Nulla esce dal tuo computer. Nessun cloud, nessuna chiamata API.",
        },
      },
      {
        question: { en: "Does it work with skills I did not buy from Skillwire?", it: "Funziona con skill che non ho comprato da Skillwire?" },
        answer: {
          en: "Yes. The memory system works with any Claude Code skill that follows the standard folder structure.",
          it: "Sì. Il sistema di memoria funziona con qualsiasi skill Claude Code che segue la struttura cartelle standard.",
        },
      },
      {
        question: { en: "Can I get a refund?", it: "Posso ottenere un rimborso?" },
        answer: {
          en: "Skills are digital products. All sales are final. We recommend reviewing the skill details carefully before purchasing.",
          it: "Le skill sono prodotti digitali. Tutte le vendite sono definitive. Ti consigliamo di leggere attentamente i dettagli della skill prima dell'acquisto.",
        },
      },
    ],
    relatedSlugs: ["skill-creator-guru", "maia"],
  compatibleWith: "Claude Code",
  prerequisites: [],
  hasTerminalVideo: true,
  },
  {
    slug: "maia",
    name: "MaIA",
    technicalName: "maia",
    tagline: {
      en: "Multi-Agent Intelligence Architecture for complex projects with 8 agent types",
      it: "Multi-Agent Intelligence Architecture per progetti complessi con 8 tipi di agente",
    },
    category: "devtools",
    tags: ["multi-agent", "orchestration", "QA gates", "architecture"],
    price: 19,
    currency: "EUR",
    isFree: false,
    isBundleOnly: false,
    badge: "niche",
    icon: "network",
    filesCount: 9,
    launchPhase: 1,
    complexity: 4,
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          { en: "Initial release with 8 agent types, 4 QA gates, and 3 context levels", it: "Rilascio iniziale con 8 tipi di agente, 4 gate QA e 3 livelli di contesto" },
        ],
      },
    ],
    bundleSlugs: ["claude-code-mastery"],
    metaTitle: {
      en: "MaIA - Multi-Agent Architecture for Complex Projects",
      it: "MaIA - Architettura Multi-Agente per Progetti Complessi",
    },
    metaDescription: {
      en: "8 specialized agent types, 4 QA gates, 3 context levels. User supervision at every milestone. For projects too complex for a single AI session.",
      it: "8 tipi di agente specializzati, 4 gate QA, 3 livelli di contesto. Supervisione utente ad ogni milestone. Per progetti troppo complessi per una singola sessione AI.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "Complex projects exceed what a single Claude session can handle. You lose context halfway through. The AI contradicts its own earlier decisions. There is no way to decompose a large project into coordinated sub-tasks with quality checks at each step.",
      it: "I progetti complessi superano quello che una singola sessione Claude può gestire. Perdi il contesto a metà. L'AI contraddice le proprie decisioni precedenti. Non c'è modo di scomporre un progetto grande in sotto-task coordinati con controlli qualità ad ogni step.",
    },
    solution: {
      en: "8 specialized agent types: Genesis (project init), Swarm Architect (decomposition), Specialist (domain execution), QA (validation), Orchestrator (coordination), Plan Refiner (iteration), Assembler (integration), Stress Test (adversarial review). 4 QA gates ensure quality. 3 context levels manage information flow. You approve every milestone before proceeding.",
      it: "8 tipi di agente specializzati: Genesis (init progetto), Swarm Architect (decomposizione), Specialist (esecuzione di dominio), QA (validazione), Orchestrator (coordinamento), Plan Refiner (iterazione), Assembler (integrazione), Stress Test (revisione avversaria). 4 gate QA assicurano la qualità. 3 livelli di contesto gestiscono il flusso informativo. Tu approvi ogni milestone prima di procedere.",
    },
    result: {
      en: "Large projects get decomposed, executed by specialists, validated at 4 gates, and assembled with full traceability. You stay in control. The AI handles the complexity.",
      it: "I progetti grandi vengono scomposti, eseguiti da specialisti, validati a 4 gate e assemblati con tracciabilità completa. Tu mantieni il controllo. L'AI gestisce la complessità.",
    },
    whatsInside: [
      { en: "9 files defining the multi-agent architecture", it: "9 file che definiscono l'architettura multi-agente" },
      { en: "8 agent types: Genesis, Swarm Architect, Specialist, QA, Orchestrator, Plan Refiner, Assembler, Stress Test", it: "8 tipi di agente: Genesis, Swarm Architect, Specialist, QA, Orchestrator, Plan Refiner, Assembler, Stress Test" },
      { en: "4 QA gates with pass/fail criteria", it: "4 gate QA con criteri pass/fail" },
      { en: "3 context levels: project-wide, task-specific, agent-local", it: "3 livelli di contesto: project-wide, task-specific, agent-local" },
      { en: "User supervision protocol: milestone approval before proceeding", it: "Protocollo supervisione utente: approvazione milestone prima di procedere" },
    ],
    whoIsThisFor: [
      { en: "Developers tackling projects that are too complex for one session", it: "Developer che affrontano progetti troppo complessi per una singola sessione" },
      { en: "Tech leads who need structured decomposition with quality gates", it: "Tech lead che necessitano decomposizione strutturata con gate di qualità" },
      { en: "Anyone building systems with 10+ components that need coordination", it: "Chiunque costruisca sistemi con 10+ componenti che richiedono coordinamento" },
    ],
    notFor: {
      en: "Simple tasks or small scripts that fit in a single Claude session",
      it: "Task semplici o piccoli script che stanno in una singola sessione Claude",
    },
    beforeAfter: [
      {
        before: { en: "Context lost halfway through. AI contradicts its earlier decisions", it: "Contesto perso a metà. L'AI contraddice le proprie decisioni precedenti" },
        after: { en: "3 context levels. Every agent works with the right information", it: "3 livelli di contesto. Ogni agente lavora con l'informazione corretta" },
      },
      {
        before: { en: "No quality checks. Errors compound through the project", it: "Nessun controllo qualità. Gli errori si accumulano nel progetto" },
        after: { en: "4 QA gates with pass/fail criteria at each milestone", it: "4 gate QA con criteri pass/fail ad ogni milestone" },
      },
      {
        before: { en: "No decomposition. One long session that drifts off course", it: "Nessuna scomposizione. Un'unica sessione lunga che perde la rotta" },
        after: { en: "Structured decomposition: 8 agent types, each with a clear role", it: "Scomposizione strutturata: 8 tipi di agente, ciascuno con un ruolo chiaro" },
      },
    ],
    faq: [
      {
        question: { en: "What exactly do I get when I buy this?", it: "Cosa ricevo esattamente quando acquisto?" },
        answer: {
          en: "A ZIP with 9 files: agent type definitions, QA gate criteria, context level rules, and the orchestration protocol. No subscription.",
          it: "Un ZIP con 9 file: definizioni tipi agente, criteri gate QA, regole livelli di contesto e protocollo di orchestrazione. Nessun abbonamento.",
        },
      },
      {
        question: { en: "Does it actually spawn multiple Claude sessions?", it: "Lancia effettivamente più sessioni Claude?" },
        answer: {
          en: "It orchestrates within a single Claude Code session using the subagent delegation pattern. Each agent type has its own context and instructions.",
          it: "Orchestra all'interno di una singola sessione Claude Code usando il pattern di delega subagente. Ogni tipo di agente ha il proprio contesto e istruzioni.",
        },
      },
      {
        question: { en: "How large does a project need to be to justify MaIA?", it: "Quanto deve essere grande un progetto per giustificare MaIA?" },
        answer: {
          en: "If your project has 5+ components that interact with each other and would take more than 2 Claude sessions to complete, MaIA will save you time and errors.",
          it: "Se il tuo progetto ha 5+ componenti che interagiscono tra loro e richiederebbe più di 2 sessioni Claude per completarlo, MaIA ti farà risparmiare tempo ed errori.",
        },
      },
      {
        question: { en: "Can I get a refund?", it: "Posso ottenere un rimborso?" },
        answer: {
          en: "Skills are digital products. All sales are final. We recommend reviewing the skill details carefully before purchasing.",
          it: "Le skill sono prodotti digitali. Tutte le vendite sono definitive. Ti consigliamo di leggere attentamente i dettagli della skill prima dell'acquisto.",
        },
      },
    ],
    relatedSlugs: ["llm-arena-vs", "iterative-self-critique"],
  compatibleWith: "Claude Code",
  prerequisites: [],
  hasTerminalVideo: true,
  },
  {
    slug: "llm-arena-vs",
    name: "LLM Arena VS",
    technicalName: "llm-arena-vs",
    tagline: {
      en: "Multi-AI orchestration: Claude, ChatGPT, and Gemini working together in VS Code",
      it: "Orchestrazione multi-AI: Claude, ChatGPT e Gemini che lavorano insieme in VS Code",
    },
    category: "devtools",
    tags: ["multi-AI", "Claude", "GPT", "Gemini", "orchestration"],
    price: 9,
    currency: "EUR",
    isFree: false,
    isBundleOnly: false,
    badge: null,
    icon: "swords",
    filesCount: 8,
    launchPhase: 1,
    complexity: 3,
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          { en: "Initial release with shared workspace, CLI subagents, and disagreement protocol", it: "Rilascio iniziale con workspace condiviso, subagenti CLI e protocollo di disaccordo" },
        ],
      },
    ],
    bundleSlugs: ["claude-code-mastery"],
    metaTitle: {
      en: "LLM Arena VS - Multi-AI Orchestration in VS Code",
      it: "LLM Arena VS - Orchestrazione Multi-AI in VS Code",
    },
    metaDescription: {
      en: "Run Claude, ChatGPT, and Gemini on the same task. Shared workspace, disagreement protocol, persistent sessions. Get 3 perspectives, keep the best.",
      it: "Esegui Claude, ChatGPT e Gemini sullo stesso task. Workspace condiviso, protocollo disaccordo, sessioni persistenti. Ottieni 3 prospettive, tieni la migliore.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "Each AI model has blind spots. Claude is great at reasoning but misses some patterns. ChatGPT has broad knowledge but hallucinates details. Gemini is strong on data but weak on structure. Using only one model means inheriting all its weaknesses.",
      it: "Ogni modello AI ha punti ciechi. Claude ragiona benissimo ma perde alcuni pattern. ChatGPT ha conoscenza ampia ma allucina dettagli. Gemini è forte sui dati ma debole sulla struttura. Usare un solo modello significa ereditare tutte le sue debolezze.",
    },
    solution: {
      en: "Run all three on the same task from VS Code. A shared ARENA_WORKSPACE.md keeps context synchronized. CLI subagents call Codex and Gemini directly. When models disagree, a structured disagreement protocol helps you resolve conflicts. Persistent sessions let you continue multi-model work across days.",
      it: "Esegui tutti e tre sullo stesso task da VS Code. Un ARENA_WORKSPACE.md condiviso mantiene il contesto sincronizzato. I subagenti CLI chiamano Codex e Gemini direttamente. Quando i modelli sono in disaccordo, un protocollo strutturato ti aiuta a risolvere i conflitti. Le sessioni persistenti permettono di continuare il lavoro multi-modello per giorni.",
    },
    result: {
      en: "Three perspectives on every problem. When two models agree and one disagrees, you know where to dig deeper. When all three disagree, you know the question is genuinely hard.",
      it: "Tre prospettive su ogni problema. Quando due modelli concordano e uno dissente, sai dove approfondire. Quando tutti e tre dissentono, sai che la questione è genuinamente difficile.",
    },
    whatsInside: [
      { en: "8 files for multi-AI orchestration", it: "8 file per orchestrazione multi-AI" },
      { en: "Shared ARENA_WORKSPACE.md for context synchronization", it: "ARENA_WORKSPACE.md condiviso per sincronizzazione contesto" },
      { en: "CLI subagent patterns for Codex and Gemini integration", it: "Pattern subagenti CLI per integrazione Codex e Gemini" },
      { en: "Disagreement protocol: structured conflict resolution between models", it: "Protocollo disaccordo: risoluzione strutturata dei conflitti tra modelli" },
      { en: "Persistent session management across multiple work days", it: "Gestione sessioni persistenti su più giorni di lavoro" },
    ],
    whoIsThisFor: [
      { en: "Developers who want second opinions from multiple AI models", it: "Developer che vogliono seconde opinioni da più modelli AI" },
      { en: "Researchers comparing model outputs on the same task", it: "Ricercatori che confrontano gli output dei modelli sullo stesso task" },
      { en: "Anyone making high-stakes decisions who wants multiple AI perspectives", it: "Chiunque prenda decisioni ad alto impatto e voglia più prospettive AI" },
    ],
    notFor: {
      en: "Users who only have access to Claude (you need ChatGPT and Gemini API access too)",
      it: "Utenti che hanno accesso solo a Claude (servono anche gli accessi API di ChatGPT e Gemini)",
    },
    beforeAfter: [
      {
        before: { en: "One model, one perspective, all its blind spots", it: "Un modello, una prospettiva, tutti i suoi punti ciechi" },
        after: { en: "Three models, three perspectives, blind spots cancel each other out", it: "Tre modelli, tre prospettive, i punti ciechi si annullano a vicenda" },
      },
      {
        before: { en: "Copy-pasting context between ChatGPT, Claude, and Gemini tabs", it: "Copia-incolla del contesto tra tab di ChatGPT, Claude e Gemini" },
        after: { en: "Shared workspace keeps all models synchronized automatically", it: "Workspace condiviso mantiene tutti i modelli sincronizzati automaticamente" },
      },
      {
        before: { en: "No structured way to handle model disagreements", it: "Nessun modo strutturato per gestire i disaccordi tra modelli" },
        after: { en: "Disagreement protocol: identify the conflict, compare reasoning, decide", it: "Protocollo disaccordo: identifica il conflitto, confronta il ragionamento, decidi" },
      },
    ],
    faq: [
      {
        question: { en: "What exactly do I get when I buy this?", it: "Cosa ricevo esattamente quando acquisto?" },
        answer: {
          en: "A ZIP with 8 files: the orchestration framework, workspace template, subagent patterns, and disagreement resolution protocol. No subscription.",
          it: "Un ZIP con 8 file: il framework di orchestrazione, template workspace, pattern subagenti e protocollo risoluzione disaccordi. Nessun abbonamento.",
        },
      },
      {
        question: { en: "Do I need API keys for all three models?", it: "Servono chiavi API per tutti e tre i modelli?" },
        answer: {
          en: "You need Claude Code (which you already have) plus CLI access to ChatGPT (Codex) and Gemini. API keys or OAuth for each.",
          it: "Serve Claude Code (che hai già) più accesso CLI a ChatGPT (Codex) e Gemini. Chiavi API o OAuth per ciascuno.",
        },
      },
      {
        question: { en: "Can I use it with just two models?", it: "Posso usarlo con solo due modelli?" },
        answer: {
          en: "Yes. The skill works with 2 or 3 models. Two is enough for second-opinion validation. Three gives you majority voting.",
          it: "Sì. La skill funziona con 2 o 3 modelli. Due bastano per validazione con seconda opinione. Tre permettono il voto a maggioranza.",
        },
      },
      {
        question: { en: "Can I get a refund?", it: "Posso ottenere un rimborso?" },
        answer: {
          en: "Skills are digital products. All sales are final. We recommend reviewing the skill details carefully before purchasing.",
          it: "Le skill sono prodotti digitali. Tutte le vendite sono definitive. Ti consigliamo di leggere attentamente i dettagli della skill prima dell'acquisto.",
        },
      },
    ],
    relatedSlugs: ["maia", "iterative-self-critique"],
  compatibleWith: "Claude Code",
  prerequisites: ["OpenAI Codex CLI (ChatGPT Plus or API key)", "Google Gemini CLI"],
  hasTerminalVideo: true,
  },
  {
    slug: "content-pipeline-pro",
    name: "Content Pipeline Pro",
    technicalName: "the-genai-break",
    tagline: {
      en: "From raw article to publish-ready LinkedIn post in 10 minutes. Seven specialized agents, one consistent voice.",
      it: "Dall'articolo grezzo al post LinkedIn pronto in 10 minuti. Sette agenti specializzati, una voce coerente.",
    },
    category: "content",
    tags: ["LinkedIn", "editorial", "content", "AI agents", "pipeline", "thought leadership"],
    price: 29,
    currency: "EUR",
    isFree: false,
    isBundleOnly: false,
    badge: "new",
    icon: "layers",
    filesCount: 22,
    launchPhase: 2,
    complexity: 4,
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          { en: "Initial release with 7 specialized agents and 3 validation phases", it: "Rilascio iniziale con 7 agenti specializzati e 3 fasi di validazione" },
        ],
      },
    ],
    bundleSlugs: ["linkedin-toolkit"],
    metaTitle: {
      en: "Content Pipeline Pro: Editorial AI Pipeline for LinkedIn",
      it: "Content Pipeline Pro: pipeline editoriale AI per LinkedIn",
    },
    metaDescription: {
      en: "Seven AI agents turn raw articles into publish-ready LinkedIn posts. Adaptive onboarding, 4 specialized writers, 3-phase QA. From 60 minutes to 10.",
      it: "Sette agenti AI trasformano articoli grezzi in post LinkedIn pronti. Onboarding adattivo, 4 writer specializzati, QA a 3 fasi. Da 60 minuti a 10.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You find a great article at 7 AM. By the time you've read it, extracted the key insight, written a LinkedIn post in your voice, edited it twice, and added a hook that doesn't sound like everyone else's, it's 8 AM. One post. One hour. And if you're posting three times a week, that's three hours of your week spent turning other people's content into your own perspective. The alternative is worse: you skip the post entirely, and your LinkedIn goes quiet for a week.",
      it: "Trovi un articolo interessante alle 7 di mattina. Lo leggi, estrai il punto chiave, scrivi un post LinkedIn con la tua voce, lo correggi due volte, aggiungi un hook che non suoni come quello di tutti gli altri. Sono le 8. Un post. Un'ora. Se pubblichi tre volte a settimana, sono tre ore spese a trasformare contenuti altrui nella tua prospettiva. L'alternativa? Salti il post. Il tuo LinkedIn resta fermo per una settimana.",
    },
    solution: {
      en: "Content Pipeline Pro replaces that blank screen with a seven-agent editorial team. You drop in a source (article, video, RSS feed), and the pipeline takes over. The Classifier reads the material and decides the format: news commentary, opinion piece, tutorial, or case study. Then one of four specialized Writers takes it from there, each trained for that specific format. The QA Director runs three validation passes. Strategic Echo checks that the result sounds like you, not like a generic AI. The whole chain runs inside Claude Code, start to finish.",
      it: "Content Pipeline Pro sostituisce lo schermo vuoto con una redazione di sette agenti. Inserisci una fonte (articolo, video, feed RSS) e la pipeline prende il controllo. Il Classifier analizza il materiale e decide il formato: commento news, pezzo d'opinione, tutorial o case study. Poi uno dei quattro Writer specializzati sviluppa il testo, ognuno addestrato per quel formato specifico. Il QA Director esegue tre passaggi di validazione. Strategic Echo verifica che il risultato suoni come te, non come un AI generico. Tutta la catena gira dentro Claude Code, dall'inizio alla fine.",
    },
    result: {
      en: "What took 45-60 minutes now takes 10. Your voice stays consistent across every post because the editorial profile locks it in from the first session. News posts read differently from opinion pieces because different writers handle them. The QA layer catches the mistakes you'd notice two hours after publishing. Three posts a week, thirty minutes total instead of three hours.",
      it: "Quello che richiedeva 45-60 minuti ora ne richiede 10. La tua voce resta coerente su ogni post perch\u00e9 il profilo editoriale la fissa dalla prima sessione. I post news hanno un ritmo diverso dai pezzi d'opinione perch\u00e9 li gestiscono writer diversi. Il livello QA intercetta gli errori che noteresti due ore dopo la pubblicazione. Tre post a settimana, trenta minuti totali invece di tre ore.",
    },
    whatsInside: [
      { en: "7 specialized agents: Classifier, 4 format-specific Writers, QA Director, Strategic Echo", it: "7 agenti specializzati: Classifier, 4 Writer per formato, QA Director, Strategic Echo" },
      { en: "Adaptive onboarding that builds your editorial profile from existing posts", it: "Onboarding adattivo che costruisce il tuo profilo editoriale dai post esistenti" },
      { en: "4 content formats: news commentary, opinion, tutorial, case study", it: "4 formati contenuto: commento news, opinione, tutorial, case study" },
      { en: "3-phase QA pipeline: factual accuracy, voice consistency, engagement check", it: "Pipeline QA a 3 fasi: accuratezza fattuale, coerenza voce, check engagement" },
      { en: "Voice tracking system that improves with every post you approve", it: "Sistema di tracking voce che migliora con ogni post che approvi" },
      { en: "22 files, zero subscriptions, works entirely inside Claude Code", it: "22 file, zero abbonamenti, funziona interamente dentro Claude Code" },
    ],
    whoIsThisFor: [
      { en: "The LinkedIn thought leader publishing 3+ posts a week who can't afford an hour per post", it: "Il thought leader LinkedIn che pubblica 3+ post a settimana e non pu\u00f2 permettersi un'ora per post" },
      { en: "The content manager running a CEO's LinkedIn and drowning in approval cycles", it: "Il content manager che gestisce il LinkedIn di un CEO e affoga nei cicli di approvazione" },
      { en: "The consultant who reads industry content daily but rarely turns it into posts", it: "Il consulente che legge contenuti di settore ogni giorno ma raramente li trasforma in post" },
      { en: "The founder who knows consistent posting matters but keeps deprioritizing it", it: "Il founder che sa che pubblicare con costanza conta ma continua a rimandare" },
    ],
    notFor: {
      en: "If you post on LinkedIn once a month or less, the setup time won't pay off. This is built for consistent publishers.",
      it: "Se pubblichi su LinkedIn una volta al mese o meno, il tempo di setup non si ripaga. Questo strumento \u00e8 costruito per chi pubblica con costanza.",
    },
    beforeAfter: [
      {
        before: { en: "One hour per post: read, extract, write, edit, rewrite the hook", it: "Un'ora per post: leggere, estrarre, scrivere, correggere, riscrivere l'hook" },
        after: { en: "Ten minutes: drop the source, review the output, publish", it: "Dieci minuti: inserisci la fonte, rivedi l'output, pubblica" },
      },
      {
        before: { en: "Monday's post sounds professional, Wednesday's sounds casual, Friday's sounds like someone else", it: "Il post di luned\u00ec suona professionale, quello di mercoled\u00ec informale, quello di venerd\u00ec sembra scritto da un altro" },
        after: { en: "Strategic Echo locks your voice across every post, every format, every week", it: "Strategic Echo blocca la tua voce su ogni post, ogni formato, ogni settimana" },
      },
      {
        before: { en: "Same tone whether you're commenting on news or writing an opinion piece", it: "Lo stesso tono sia che tu stia commentando una news o scrivendo un'opinione" },
        after: { en: "Four writers, each trained for a specific format: different rhythm, same voice", it: "Quattro writer, ciascuno addestrato per un formato specifico: ritmo diverso, stessa voce" },
      },
      {
        before: { en: "AI-generated posts that read like everyone else's AI-generated posts", it: "Post generati dall'AI che sembrano i post generati dall'AI di tutti gli altri" },
        after: { en: "An editorial profile built on your best posts, not a generic prompt template", it: "Un profilo editoriale costruito sui tuoi migliori post, non un template prompt generico" },
      },
    ],
    faq: [
      {
        question: { en: "What do I get when I buy this?", it: "Cosa ottengo con l'acquisto?" },
        answer: {
          en: "A ZIP with 22 files: 7 agent definitions, format-specific templates, QA validation rules, and the voice tracking system. Install once, use forever. No subscription.",
          it: "Un file ZIP con 22 file: 7 definizioni agente, template per formato, regole di validazione QA e il sistema di tracking voce. Installi una volta, usi per sempre. Nessun abbonamento.",
        },
      },
      {
        question: { en: "Does it publish to LinkedIn automatically?", it: "Pubblica su LinkedIn in automatico?" },
        answer: {
          en: "No. It generates the post, ready to copy and paste. If you want automated scheduling, connect it to a tool like Buffer or n8n.",
          it: "No. Genera il post pronto per copia-incolla. Se vuoi la programmazione automatica, collegalo a uno strumento come Buffer o n8n.",
        },
      },
      {
        question: { en: "How does it learn my voice?", it: "Come impara la mia voce?" },
        answer: {
          en: "During onboarding, you feed it 5-10 of your best LinkedIn posts. The system extracts patterns: sentence structure, vocabulary preferences, typical hooks, signature phrases. This becomes your editorial profile, and it refines with every post you approve.",
          it: "Durante l'onboarding, gli fornisci 5-10 dei tuoi migliori post LinkedIn. Il sistema estrae i pattern: struttura delle frasi, preferenze di vocabolario, hook tipici, espressioni ricorrenti. Questo diventa il tuo profilo editoriale, e si affina con ogni post che approvi.",
        },
      },
      {
        question: { en: "Can I use it for content other than LinkedIn?", it: "Posso usarlo per contenuti diversi da LinkedIn?" },
        answer: {
          en: "The pipeline is optimized for LinkedIn post formats. You could adapt the templates for other platforms, but the writers, QA rules, and voice tracking are all calibrated for LinkedIn's specific dynamics.",
          it: "La pipeline \u00e8 ottimizzata per i formati post LinkedIn. Potresti adattare i template per altre piattaforme, ma i writer, le regole QA e il tracking voce sono tutti calibrati sulle dinamiche specifiche di LinkedIn.",
        },
      },
    ],
    relatedSlugs: ["human-writer", "janus"],
  compatibleWith: "All Platforms",
  prerequisites: [],
  hasTerminalVideo: true,
  },
  {
    slug: "remotion-best-practices",
    name: "Remotion Best Practices",
    technicalName: "remotion-best-practices",
    tagline: {
      en: "46 rule files for creating production-grade videos with Remotion and React",
      it: "46 file di regole per creare video production-grade con Remotion e React",
    },
    category: "devtools",
    tags: ["Remotion", "React", "video", "motion design", "animation"],
    price: 29,
    currency: "EUR",
    isFree: false,
    isBundleOnly: false,
    badge: "niche",
    icon: "clapperboard",
    filesCount: 46,
    launchPhase: 2,
    complexity: 4,
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          { en: "Initial release with 36 API rules and 6 Creative Motion Design rules (69 creative rules total)", it: "Rilascio iniziale con 36 regole API e 6 regole Creative Motion Design (69 regole creative totali)" },
        ],
      },
    ],
    bundleSlugs: [],
    metaTitle: {
      en: "Remotion Best Practices - Production-Grade Video Creation with React",
      it: "Remotion Best Practices - Creazione Video Production-Grade con React",
    },
    metaDescription: {
      en: "43 rule files: 36 Remotion API rules (images, audio, 3D, fonts, transitions) + 6 Creative Motion Design rules. 69 creative rules from 12 production prompts.",
      it: "43 file di regole: 36 regole API Remotion (immagini, audio, 3D, font, transizioni) + 6 regole Creative Motion Design. 69 regole creative da 12 prompt di produzione.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "Remotion lets you create videos with React, but the learning curve is steep. The API docs tell you how spring() works, not when to use it. You end up with linear animations, static compositions, and videos that look like animated slides. Nobody explains the motion design principles that separate amateur from production-grade output.",
      it: "Remotion permette di creare video con React, ma la curva di apprendimento è ripida. I docs API ti dicono come funziona spring(), non quando usarlo. Finisci con animazioni lineari, composizioni statiche e video che sembrano slide animate. Nessuno spiega i principi di motion design che separano l'output amatoriale da quello production-grade.",
    },
    solution: {
      en: "Two layers of rules. Layer 1: 36 API rule files covering every Remotion feature (images, audio, 3D, fonts, transitions, timing, captions, charts). Layer 2: 6 Creative Motion Design rule files with 69 rules extracted from analysis of 12 production-grade video prompts. Covers storytelling, kinetic typography, motion design principles, creative transitions, color/mood, and component architecture.",
      it: "Due livelli di regole. Livello 1: 36 file di regole API che coprono ogni funzionalità Remotion (immagini, audio, 3D, font, transizioni, timing, sottotitoli, grafici). Livello 2: 6 file di regole Creative Motion Design con 69 regole estratte dall'analisi di 12 prompt video production-grade. Copre storytelling, tipografia cinetica, principi di motion design, transizioni creative, colore/mood e architettura componenti.",
    },
    result: {
      en: "Your Remotion videos look like they were made by a motion designer, not a developer. Spring presets with overshoot instead of linear movement. Staggered entries instead of everything appearing at once. Narrative arcs instead of flat sequences.",
      it: "I tuoi video Remotion sembrano fatti da un motion designer, non da uno sviluppatore. Preset spring con overshoot invece di movimento lineare. Entrate sfalsate invece di tutto che appare insieme. Archi narrativi invece di sequenze piatte.",
    },
    whatsInside: [
      { en: "43 rule files across 2 knowledge layers", it: "43 file di regole su 2 livelli di conoscenza" },
      { en: "36 API rules: spring(), interpolate(), Sequence, audio, video, 3D, fonts, charts", it: "36 regole API: spring(), interpolate(), Sequence, audio, video, 3D, font, grafici" },
      { en: "Motion design principles: spring presets, stagger timing, breathing, overshoot", it: "Principi motion design: preset spring, timing sfalsato, breathing, overshoot" },
      { en: "Visual storytelling: narrative arcs (3/4/6/8 acts), pacing, progressive reveal", it: "Visual storytelling: archi narrativi (3/4/6/8 atti), pacing, reveal progressivo" },
      { en: "Kinetic typography: highlight boxes, word insertion, stacked words, stroke-to-fill", it: "Tipografia cinetica: highlight box, inserimento parole, parole sovrapposte, stroke-to-fill" },
    ],
    whoIsThisFor: [
      { en: "React developers creating videos with Remotion", it: "Developer React che creano video con Remotion" },
      { en: "Content creators who want programmatic video generation", it: "Content creator che vogliono generazione video programmatica" },
      { en: "Anyone who tried Remotion and got flat, amateur-looking output", it: "Chiunque abbia provato Remotion e ottenuto output piatto e amatoriale" },
    ],
    notFor: {
      en: "Users of After Effects, DaVinci, or other traditional video editors (Remotion is code-based)",
      it: "Utenti di After Effects, DaVinci o altri editor video tradizionali (Remotion è basato su codice)",
    },
    beforeAfter: [
      {
        before: { en: "Linear animations. Everything moves at the same speed. No life", it: "Animazioni lineari. Tutto si muove alla stessa velocità. Nessuna vita" },
        after: { en: "Spring presets with overshoot, stagger timing, breathing pauses", it: "Preset spring con overshoot, timing sfalsato, pause di breathing" },
      },
      {
        before: { en: "Flat sequences. Slide 1, slide 2, slide 3. No narrative", it: "Sequenze piatte. Slide 1, slide 2, slide 3. Nessuna narrativa" },
        after: { en: "Narrative arcs with pacing, progressive reveal, and freeze frames", it: "Archi narrativi con pacing, reveal progressivo e freeze frame" },
      },
      {
        before: { en: "Text that just appears. No kinetic energy. Boring", it: "Testo che appare e basta. Nessuna energia cinetica. Noioso" },
        after: { en: "Kinetic typography: highlight boxes, word insertion, stroke-to-fill wipes", it: "Tipografia cinetica: highlight box, inserimento parole, wipe stroke-to-fill" },
      },
    ],
    faq: [
      {
        question: { en: "What exactly do I get when I buy this?", it: "Cosa ricevo esattamente quando acquisto?" },
        answer: {
          en: "A ZIP with 43 rule files: 36 Remotion API rules and 6 Creative Motion Design rules. Install as a Claude Code skill and it guides your video creation.",
          it: "Un ZIP con 43 file di regole: 36 regole API Remotion e 6 regole Creative Motion Design. Installalo come skill Claude Code e guida la tua creazione video.",
        },
      },
      {
        question: { en: "Do I need to know React?", it: "Devo conoscere React?" },
        answer: {
          en: "Basic React knowledge is needed. Remotion videos are React components. You should be comfortable with JSX, props, and hooks.",
          it: "Serve conoscenza base di React. I video Remotion sono componenti React. Dovresti essere a tuo agio con JSX, props e hooks.",
        },
      },
      {
        question: { en: "Is Remotion free?", it: "Remotion è gratuito?" },
        answer: {
          en: "Remotion is free for individual use. Companies with 3+ employees need a paid license. Check remotion.dev for current pricing.",
          it: "Remotion è gratuito per uso individuale. Le aziende con 3+ dipendenti necessitano di una licenza a pagamento. Controlla remotion.dev per i prezzi aggiornati.",
        },
      },
      {
        question: { en: "Can I get a refund?", it: "Posso ottenere un rimborso?" },
        answer: {
          en: "Skills are digital products. All sales are final. We recommend reviewing the skill details carefully before purchasing.",
          it: "Le skill sono prodotti digitali. Tutte le vendite sono definitive. Ti consigliamo di leggere attentamente i dettagli della skill prima dell'acquisto.",
        },
      },
    ],
    relatedSlugs: ["skill-creator-guru", "maia"],
  compatibleWith: "Claude Code",
  prerequisites: ["Node.js 18+", "npm", "ffmpeg (brew install ffmpeg)"],
  hasTerminalVideo: true,
  },
  {
    slug: "nano-banana-guru",
    name: "Nano Banana Guru",
    technicalName: "nano-banana-guru",
    tagline: {
      en: "Proactive prompt engineering consultant for Google's Nano Banana Pro visual reasoning model",
      it: "Consulente proattivo di prompt engineering per il modello di ragionamento visivo Nano Banana Pro di Google",
    },
    category: "devtools",
    tags: ["visual reasoning", "prompt engineering", "image generation", "Nano Banana Pro", "Google"],
    price: 29,
    currency: "EUR",
    isFree: false,
    isBundleOnly: false,
    badge: "new",
    icon: "sparkles",
    filesCount: 4,
    launchPhase: 1,
    complexity: 3,
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          { en: "Initial release with 8-area prompt canvas, 26 production examples, and video-to-carousel workflow", it: "Rilascio iniziale con canvas prompt a 8 aree, 26 esempi production e workflow video-to-carousel" },
        ],
      },
    ],
    bundleSlugs: ["claude-code-mastery"],
    metaTitle: {
      en: "Nano Banana Guru - Prompt Engineering for Visual AI",
      it: "Nano Banana Guru - Prompt Engineering per AI Visiva",
    },
    metaDescription: {
      en: "8-area prompt canvas, 26 production-ready examples, trigger detection matrix, JSON templates, and video-to-carousel workflow for Google's Nano Banana Pro.",
      it: "Canvas prompt a 8 aree, 26 esempi production-ready, matrice di rilevamento trigger, template JSON e workflow video-to-carousel per Nano Banana Pro di Google.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You try to generate images with AI using tag soups like 'dog, park, 4k, realistic' and get generic, inconsistent results. You do not know how to brief a visual reasoning model like a Creative Director. You waste time re-rolling entire images instead of editing what is already 80% correct.",
      it: "Provi a generare immagini con AI usando tag soup come 'dog, park, 4k, realistic' e ottieni risultati generici e inconsistenti. Non sai come briefare un modello di ragionamento visivo come un Direttore Creativo. Sprechi tempo a rigenerare intere immagini invece di modificare ciò che è già corretto all'80%.",
    },
    solution: {
      en: "An 8-area structured prompt canvas (Intent, Subject, Work Surface, Layout, Style, Components, Constraints, Context) with 26 production-ready examples covering text rendering, character consistency, identity locking, dimensional translation, advanced editing, and structural control. A proactive trigger detection matrix suggests relevant capabilities based on your conversation context. JSON output format for precision.",
      it: "Un canvas prompt strutturato a 8 aree (Intento, Soggetto, Superficie di lavoro, Layout, Stile, Componenti, Vincoli, Contesto) con 26 esempi production-ready che coprono rendering testo, consistenza personaggi, identity locking, traduzione dimensionale, editing avanzato e controllo strutturale. Una matrice proattiva di rilevamento trigger suggerisce capacità rilevanti in base al contesto della conversazione. Formato output JSON per precisione.",
    },
    result: {
      en: "You go from generic AI images to professional-grade visual artifacts: dashboards, infographics, thumbnails, comics, diagrams, storyboards. The model understands your intent because you brief it like a Creative Director, not a search engine.",
      it: "Passi da immagini AI generiche ad artefatti visivi professionali: dashboard, infografiche, thumbnail, fumetti, diagrammi, storyboard. Il modello capisce il tuo intento perché lo briefi come un Direttore Creativo, non come un motore di ricerca.",
    },
    whatsInside: [
      { en: "4 files: prompt engineering guide, 26 examples library, work surface templates, interactive architect protocol", it: "4 file: guida prompt engineering, libreria 26 esempi, template superfici di lavoro, protocollo architetto interattivo" },
      { en: "8-area prompt canvas: structured framework for any visual artifact", it: "Canvas prompt a 8 aree: framework strutturato per qualsiasi artefatto visivo" },
      { en: "26 production-ready examples: infographics, thumbnails, sprites, 2D-to-3D, editing, storyboards", it: "26 esempi production-ready: infografiche, thumbnail, sprite, 2D-to-3D, editing, storyboard" },
      { en: "Trigger detection matrix: proactive suggestions based on conversation context", it: "Matrice rilevamento trigger: suggerimenti proattivi basati sul contesto della conversazione" },
      { en: "Video-to-carousel workflow: transform YouTube videos into visual carousels", it: "Workflow video-to-carousel: trasforma video YouTube in caroselli visivi" },
    ],
    whoIsThisFor: [
      { en: "Content creators who need professional visual artifacts from AI", it: "Content creator che necessitano di artefatti visivi professionali dall'AI" },
      { en: "Marketers creating thumbnails, infographics, and social media visuals", it: "Marketer che creano thumbnail, infografiche e visual per social media" },
      { en: "Anyone who tried image generation AI and got disappointed by generic results", it: "Chiunque abbia provato AI di generazione immagini e sia rimasto deluso dai risultati generici" },
    ],
    notFor: {
      en: "Users who need photorealistic photography (Nano Banana Pro excels at structured visual artifacts, not photo replacement)",
      it: "Utenti che necessitano di fotografia fotorealistica (Nano Banana Pro eccelle negli artefatti visivi strutturati, non nella sostituzione fotografica)",
    },
    beforeAfter: [
      {
        before: { en: "Tag soups: 'dog, park, 4k, realistic'. Generic, inconsistent results", it: "Tag soup: 'dog, park, 4k, realistic'. Risultati generici e inconsistenti" },
        after: { en: "Structured 8-area canvas with natural language briefs. Professional, intentional output", it: "Canvas strutturato a 8 aree con brief in linguaggio naturale. Output professionale e intenzionale" },
      },
      {
        before: { en: "Re-rolling entire images when one detail is wrong", it: "Rigenerare intere immagini quando un dettaglio è sbagliato" },
        after: { en: "Edit, don't re-roll: conversational edits for the 20% that needs fixing", it: "Modifica, non rigenerare: edit conversazionali per il 20% che va corretto" },
      },
      {
        before: { en: "No idea what the model can actually do (text rendering? identity locking? 2D-to-3D?)", it: "Nessuna idea di cosa il modello possa realmente fare (rendering testo? identity locking? 2D-to-3D?)" },
        after: { en: "26 categorized examples + proactive trigger system that suggests capabilities in context", it: "26 esempi categorizzati + sistema trigger proattivo che suggerisce capacità nel contesto" },
      },
    ],
    faq: [
      {
        question: { en: "What exactly do I get when I buy this?", it: "Cosa ricevo esattamente quando acquisto?" },
        answer: {
          en: "A ZIP with 4 files: the prompt engineering guide with golden rules and 8-area canvas, a library of 26 production examples, work surface templates in JSON format, and the interactive architect protocol. No subscription.",
          it: "Un ZIP con 4 file: la guida di prompt engineering con regole d'oro e canvas a 8 aree, una libreria di 26 esempi production, template superfici di lavoro in formato JSON e il protocollo architetto interattivo. Nessun abbonamento.",
        },
      },
      {
        question: { en: "Do I need a Google API key?", it: "Serve una chiave API Google?" },
        answer: {
          en: "Nano Banana Pro is available in Google AI Studio (free) and via the Gemini API. The skill teaches you how to prompt it effectively regardless of which interface you use.",
          it: "Nano Banana Pro è disponibile in Google AI Studio (gratuito) e tramite l'API Gemini. La skill ti insegna come promptarlo efficacemente indipendentemente dall'interfaccia che usi.",
        },
      },
      {
        question: { en: "Does this work with other image generation models?", it: "Funziona con altri modelli di generazione immagini?" },
        answer: {
          en: "The 8-area canvas and creative director approach work with any model, but the 26 examples and trigger matrix are specifically optimized for Nano Banana Pro's visual reasoning capabilities.",
          it: "Il canvas a 8 aree e l'approccio da direttore creativo funzionano con qualsiasi modello, ma i 26 esempi e la matrice trigger sono specificamente ottimizzati per le capacità di ragionamento visivo di Nano Banana Pro.",
        },
      },
      {
        question: { en: "Can I get a refund?", it: "Posso ottenere un rimborso?" },
        answer: {
          en: "Skills are digital products. All sales are final. We recommend reviewing the skill details carefully before purchasing.",
          it: "Le skill sono prodotti digitali. Tutte le vendite sono definitive. Ti consigliamo di leggere attentamente i dettagli della skill prima dell'acquisto.",
        },
      },
    ],
    relatedSlugs: ["skill-creator-guru", "llm-arena-vs"],
  compatibleWith: "All Platforms",
  prerequisites: ["Gemini Advanced account (required for image generation)"],
  hasTerminalVideo: true,
  },
];

export function getSkillBySlug(slug: string): SkillDetail | undefined {
  return skills.find((s) => s.slug === slug);
}

export function getSkillsByCategory(category: CategorySlug): SkillDetail[] {
  return skills.filter((s) => s.category === category);
}

export function getRelatedSkills(slug: string): SkillDetail[] {
  const skill = getSkillBySlug(slug);
  if (!skill) return [];
  return skill.relatedSlugs
    .map((rs) => getSkillBySlug(rs))
    .filter((s): s is SkillDetail => s !== undefined);
}
