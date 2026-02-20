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
      en: "Your critical analysis sparring partner \u2014 no flattery, only truth",
      it: "Il tuo sparring partner di analisi critica \u2014 niente adulazione, solo verit\u00e0",
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
      en: "Janus \u2014 Critical Analysis Sparring Partner for Claude Code",
      it: "Janus \u2014 Sparring Partner di Analisi Critica per Claude Code",
    },
    metaDescription: {
      en: "Stress-test business plans, pitch decks, and proposals across 5 analysis dimensions and 11 scenarios. No flattery, only truth.",
      it: "Stress-test di business plan, pitch deck e proposte su 5 dimensioni di analisi e 11 scenari. Niente adulazione, solo verit\u00e0.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You\u2019ve spent weeks on a business plan, a pitch deck, or a strategic proposal. It looks solid to you. But when you present it, stakeholders find holes you never considered. The ideas that seem bulletproof in your head get torn apart in the room.",
      it: "Hai passato settimane su un business plan, un pitch deck o una proposta strategica. Ti sembra solido. Ma quando lo presenti, gli stakeholder trovano falle che non avevi considerato. Le idee che sembravano blindate nella tua testa vengono smontate in sala riunioni.",
    },
    solution: {
      en: "Janus is your critical analysis sparring partner. It examines your work across 5 mandatory dimensions \u2014 logical flaws, implicit assumptions, hidden risks, uncomfortable questions, and concrete improvements \u2014 in 11 specialized scenarios from pitch decks to due diligence. No flattery. No encouragement. Just the truth.",
      it: "Janus \u00e8 il tuo sparring partner di analisi critica. Esamina il tuo lavoro su 5 dimensioni obbligatorie \u2014 falle logiche, assunzioni implicite, rischi nascosti, domande scomode e miglioramenti concreti \u2014 in 11 scenari specializzati dal pitch deck alla due diligence. Niente adulazione. Niente incoraggiamento. Solo la verit\u00e0.",
    },
    result: {
      en: "You walk into every meeting having already stress-tested your ideas. The objections? You\u2019ve anticipated them. The weak spots? Already fixed. The uncomfortable questions? You have answers.",
      it: "Entri in ogni riunione avendo gi\u00e0 stress-testato le tue idee. Le obiezioni? Le hai anticipate. I punti deboli? Gi\u00e0 corretti. Le domande scomode? Hai le risposte.",
    },
    whatsInside: [
      { en: "11 files covering specialized analysis scenarios", it: "11 file che coprono scenari di analisi specializzati" },
      { en: "5 mandatory analysis dimensions per review", it: "5 dimensioni di analisi obbligatorie per ogni review" },
      { en: "11 specialized scenarios: pitch decks, business plans, contracts, proposals, and more", it: "11 scenari specializzati: pitch deck, business plan, contratti, proposte e altro" },
      { en: "Structured output with severity scoring", it: "Output strutturato con scoring di gravit\u00e0" },
      { en: "Actionable improvement recommendations", it: "Raccomandazioni di miglioramento concrete e attuabili" },
      { en: "No-flattery protocol \u2014 always honest, never encouraging", it: "Protocollo zero adulazione \u2014 sempre onesto, mai incoraggiante" },
    ],
    whoIsThisFor: [
      { en: "Sales leaders preparing pitch decks and proposals", it: "Sales leader che preparano pitch deck e proposte" },
      { en: "Founders stress-testing business plans before investor meetings", it: "Founder che stress-testano business plan prima di meeting con investitori" },
      { en: "Consultants reviewing deliverables before client presentation", it: "Consulenti che revisianano deliverable prima della presentazione al cliente" },
    ],
    notFor: {
      en: "Anyone looking for encouragement or positive reinforcement",
      it: "Chi cerca incoraggiamento o rinforzo positivo",
    },
    beforeAfter: [
      {
        before: { en: "Stakeholders find critical flaws during your presentation", it: "Gli stakeholder trovano falle critiche durante la tua presentazione" },
        after: { en: "Every objection anticipated and addressed before the meeting", it: "Ogni obiezione anticipata e gestita prima del meeting" },
      },
      {
        before: { en: "Implicit assumptions go unchallenged until it\u2019s too late", it: "Le assunzioni implicite non vengono contestate finch\u00e9 non \u00e8 troppo tardi" },
        after: { en: "5 analysis dimensions expose blind spots automatically", it: "5 dimensioni di analisi espongono i punti ciechi automaticamente" },
      },
      {
        before: { en: "You rely on colleagues who are too polite to give honest feedback", it: "Ti affidi a colleghi troppo educati per dare feedback onesto" },
        after: { en: "A sparring partner that never flatters and always finds weaknesses", it: "Uno sparring partner che non adula mai e trova sempre le debolezze" },
      },
    ],
    faq: [
      {
        question: { en: "What exactly do I get when I buy this?", it: "Cosa ricevo esattamente quando acquisto?" },
        answer: {
          en: "A ZIP file containing 11 files: analysis frameworks for each scenario, severity scoring system, and structured output templates. No subscription needed.",
          it: "Un file ZIP con 11 file: framework di analisi per ogni scenario, sistema di scoring e template di output strutturato. Nessun abbonamento.",
        },
      },
      {
        question: { en: "Can I use it for any type of document?", it: "Posso usarlo per qualsiasi tipo di documento?" },
        answer: {
          en: "Janus is optimized for 11 specific scenarios (pitch decks, business plans, contracts, etc.) but works well with any strategic or analytical document.",
          it: "Janus \u00e8 ottimizzato per 11 scenari specifici (pitch deck, business plan, contratti, ecc.) ma funziona bene con qualsiasi documento strategico o analitico.",
        },
      },
      {
        question: { en: "Is it really that harsh?", it: "\u00c8 davvero cos\u00ec severo?" },
        answer: {
          en: "Yes. Janus is designed to find problems, not validate your work. It follows a strict no-flattery protocol. That\u2019s the point.",
          it: "S\u00ec. Janus \u00e8 progettato per trovare problemi, non per validare il tuo lavoro. Segue un protocollo rigoroso di zero adulazione. Questo \u00e8 il punto.",
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
      en: "Generate C-level presentations with structural and narrative frameworks",
      it: "Genera presentazioni C-level con framework strutturali e narrativi",
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
      en: "B2B Presentation Builder - C-Level Decks That Close Deals",
      it: "B2B Presentation Builder - Deck C-Level che Chiudono i Deal",
    },
    metaDescription: {
      en: "4 structural frameworks, 3 narrative frameworks, multi-persona targeting (CFO/CIO/CEO). Build presentations that speak the language of every stakeholder.",
      it: "4 framework strutturali, 3 framework narrativi, targeting multi-persona (CFO/CIO/CEO). Crea presentazioni che parlano la lingua di ogni stakeholder.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You build the same generic deck for every audience. The CFO wants ROI numbers. The CIO wants architecture. The CEO wants strategic vision. One deck cannot serve all three, but you keep trying. And you waste hours on structure instead of content.",
      it: "Costruisci lo stesso deck generico per ogni audience. Il CFO vuole numeri di ROI. Il CIO vuole architettura. Il CEO vuole visione strategica. Un unico deck non può servire tutti e tre, ma continui a provarci. E sprechi ore sulla struttura invece che sul contenuto.",
    },
    solution: {
      en: "4 structural frameworks (Executive, Operational, Sales Conversation, Executive Summary) combined with 3 narrative frameworks (Raskin 5-Step, Dunford 8-Step, Challenger 6-Step). Multi-persona targeting adapts content for CFO, CIO, or CEO. A 3-level QA workflow catches weak slides before your audience does.",
      it: "4 framework strutturali (Executive, Operational, Sales Conversation, Executive Summary) combinati con 3 framework narrativi (Raskin 5-Step, Dunford 8-Step, Challenger 6-Step). Il targeting multi-persona adatta il contenuto per CFO, CIO o CEO. Un workflow QA a 3 livelli intercetta le slide deboli prima del tuo pubblico.",
    },
    result: {
      en: "Every deck is built for a specific audience from the start. Structure is solved in seconds. You focus only on the message. The QA workflow ensures nothing ships with weak arguments or missing proof points.",
      it: "Ogni deck è costruito per un pubblico specifico fin dall'inizio. La struttura si risolve in secondi. Ti concentri solo sul messaggio. Il workflow QA assicura che nulla esca con argomentazioni deboli o proof point mancanti.",
    },
    whatsInside: [
      { en: "12 files with structural and narrative frameworks", it: "12 file con framework strutturali e narrativi" },
      { en: "4 structural frameworks: Executive, Operational, Sales Conversation, Executive Summary", it: "4 framework strutturali: Executive, Operational, Sales Conversation, Executive Summary" },
      { en: "3 narrative frameworks: Raskin 5-Step, Dunford 8-Step, Challenger 6-Step", it: "3 framework narrativi: Raskin 5-Step, Dunford 8-Step, Challenger 6-Step" },
      { en: "Multi-persona targeting: CFO, CIO, CEO content adaptation", it: "Targeting multi-persona: adattamento contenuto CFO, CIO, CEO" },
      { en: "3-level QA workflow for slide-by-slide review", it: "Workflow QA a 3 livelli per revisione slide per slide" },
    ],
    whoIsThisFor: [
      { en: "Sales professionals presenting to C-level executives", it: "Professionisti vendita che presentano a dirigenti C-level" },
      { en: "Presales and solutions architects building technical decks", it: "Presales e solution architect che costruiscono deck tecnici" },
      { en: "Anyone who builds more than 2 B2B presentations per month", it: "Chiunque costruisca più di 2 presentazioni B2B al mese" },
    ],
    notFor: {
      en: "Internal team updates or non-commercial presentations",
      it: "Aggiornamenti interni al team o presentazioni non commerciali",
    },
    beforeAfter: [
      {
        before: { en: "Same generic deck for CFO, CIO, and CEO", it: "Stesso deck generico per CFO, CIO e CEO" },
        after: { en: "Persona-specific content: ROI for CFO, architecture for CIO, vision for CEO", it: "Contenuto specifico per persona: ROI per CFO, architettura per CIO, visione per CEO" },
      },
      {
        before: { en: "Hours spent deciding deck structure before writing a single slide", it: "Ore spese a decidere la struttura del deck prima di scrivere una sola slide" },
        after: { en: "Structure solved in seconds with 4 proven frameworks", it: "Struttura risolta in secondi con 4 framework collaudati" },
      },
      {
        before: { en: "Weak slides discovered during the actual presentation", it: "Slide deboli scoperte durante la presentazione vera e propria" },
        after: { en: "3-level QA catches weak arguments before you present", it: "QA a 3 livelli intercetta argomentazioni deboli prima che presenti" },
      },
    ],
    faq: [
      {
        question: { en: "What exactly do I get when I buy this?", it: "Cosa ricevo esattamente quando acquisto?" },
        answer: {
          en: "A ZIP with 12 files: 4 structural frameworks, 3 narrative frameworks, persona targeting guides, and a QA workflow. No subscription.",
          it: "Un ZIP con 12 file: 4 framework strutturali, 3 framework narrativi, guide targeting persona e un workflow QA. Nessun abbonamento.",
        },
      },
      {
        question: { en: "Does it generate the actual PowerPoint file?", it: "Genera il file PowerPoint effettivo?" },
        answer: {
          en: "It generates the content, structure, and narrative. You can then use Claude Code's PPTX skill or copy the output into your preferred tool.",
          it: "Genera il contenuto, la struttura e la narrativa. Puoi poi usare la skill PPTX di Claude Code o copiare l'output nel tuo strumento preferito.",
        },
      },
      {
        question: { en: "Can I use it for non-sales presentations?", it: "Posso usarlo per presentazioni non commerciali?" },
        answer: {
          en: "The frameworks are designed for B2B commercial contexts. They work for any business presentation, but the persona targeting is optimized for buyer roles.",
          it: "I framework sono progettati per contesti commerciali B2B. Funzionano per qualsiasi presentazione business, ma il targeting persona è ottimizzato per ruoli buyer.",
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
      en: "Multi-source deep research with Graph-of-Thoughts methodology",
      it: "Ricerca approfondita multi-fonte con metodologia Graph-of-Thoughts",
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
      en: "Deep Research Agent - Structured Multi-Source Research for Claude Code",
      it: "Deep Research Agent - Ricerca Strutturata Multi-Fonte per Claude Code",
    },
    metaDescription: {
      en: "7-phase research pipeline: Scope, Plan, Retrieve, Triangulate, Draft, Critique, Package. Inline citations, bibliography, executive summary.",
      it: "Pipeline di ricerca a 7 fasi: Scope, Plan, Retrieve, Triangulate, Draft, Critique, Package. Citazioni inline, bibliografia, executive summary.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "AI gives you answers without sources. You ask for research and get a wall of text with no citations, no methodology, and no way to verify the claims. For serious work, that is useless.",
      it: "L'AI ti dà risposte senza fonti. Chiedi una ricerca e ottieni un muro di testo senza citazioni, senza metodologia e senza modo di verificare le affermazioni. Per lavoro serio, è inutile.",
    },
    solution: {
      en: "A 7-phase research pipeline: Scope (define the question), Plan (identify sources), Retrieve (gather data), Triangulate (cross-reference claims), Draft (write with inline citations), Critique (self-review), Package (executive summary + full report + bibliography). Every claim is traceable to a source.",
      it: "Una pipeline di ricerca a 7 fasi: Scope (definisci la domanda), Plan (identifica le fonti), Retrieve (raccogli dati), Triangulate (incrocia le affermazioni), Draft (scrivi con citazioni inline), Critique (auto-revisione), Package (executive summary + report completo + bibliografia). Ogni affermazione è tracciabile a una fonte.",
    },
    result: {
      en: "You get a structured report with executive summary, inline citations, and a complete bibliography. Every claim can be verified. Ready for board presentations, due diligence, or publication.",
      it: "Ottieni un report strutturato con executive summary, citazioni inline e bibliografia completa. Ogni affermazione è verificabile. Pronto per presentazioni al board, due diligence o pubblicazione.",
    },
    whatsInside: [
      { en: "4 files implementing the Graph-of-Thoughts research methodology", it: "4 file che implementano la metodologia di ricerca Graph-of-Thoughts" },
      { en: "7-phase pipeline: Scope, Plan, Retrieve, Triangulate, Draft, Critique, Package", it: "Pipeline a 7 fasi: Scope, Plan, Retrieve, Triangulate, Draft, Critique, Package" },
      { en: "Inline citation system with automatic bibliography generation", it: "Sistema di citazioni inline con generazione automatica della bibliografia" },
      { en: "Executive summary generator for quick stakeholder consumption", it: "Generatore di executive summary per consumo rapido degli stakeholder" },
      { en: "Auto-revision loop: the report critiques and improves itself", it: "Loop di auto-revisione: il report si critica e migliora da solo" },
    ],
    whoIsThisFor: [
      { en: "Analysts and consultants producing research deliverables", it: "Analisti e consulenti che producono deliverable di ricerca" },
      { en: "Sales professionals needing industry or competitor intelligence", it: "Professionisti vendita che necessitano di intelligence su settore o competitor" },
      { en: "Anyone who needs cited, verifiable research instead of AI guesswork", it: "Chiunque necessiti di ricerche citate e verificabili invece di ipotesi AI" },
    ],
    notFor: {
      en: "Quick lookups or simple factual questions that don't need a structured report",
      it: "Ricerche rapide o domande fattuali semplici che non necessitano di un report strutturato",
    },
    beforeAfter: [
      {
        before: { en: "AI-generated text with no sources and no way to verify claims", it: "Testo generato dall'AI senza fonti e senza modo di verificare le affermazioni" },
        after: { en: "Every claim has an inline citation and full bibliography", it: "Ogni affermazione ha una citazione inline e bibliografia completa" },
      },
      {
        before: { en: "Unstructured research that takes hours to organize into a report", it: "Ricerca destrutturata che richiede ore per organizzarla in un report" },
        after: { en: "7-phase pipeline delivers a ready-to-present report with executive summary", it: "La pipeline a 7 fasi produce un report pronto da presentare con executive summary" },
      },
      {
        before: { en: "No cross-referencing. Single-source claims presented as facts", it: "Nessun incrocio fonti. Affermazioni da singola fonte presentate come fatti" },
        after: { en: "Triangulation phase cross-references every claim across multiple sources", it: "La fase di triangolazione incrocia ogni affermazione su più fonti" },
      },
    ],
    faq: [
      {
        question: { en: "What exactly do I get when I buy this?", it: "Cosa ricevo esattamente quando acquisto?" },
        answer: {
          en: "A ZIP with 4 files: the research methodology, the pipeline orchestrator, the citation engine, and the report packager. No subscription.",
          it: "Un ZIP con 4 file: la metodologia di ricerca, l'orchestratore della pipeline, il motore di citazioni e il packager del report. Nessun abbonamento.",
        },
      },
      {
        question: { en: "What sources does it use?", it: "Che fonti utilizza?" },
        answer: {
          en: "It uses whatever tools are available in your Claude Code environment: web search, MCP servers, local files, APIs. The more tools you have configured, the richer the research.",
          it: "Utilizza qualsiasi strumento disponibile nel tuo ambiente Claude Code: ricerca web, server MCP, file locali, API. Più strumenti hai configurato, più ricca è la ricerca.",
        },
      },
      {
        question: { en: "How long does a research session take?", it: "Quanto dura una sessione di ricerca?" },
        answer: {
          en: "Depends on scope. A focused topic takes 5-10 minutes. A broad competitive analysis can take 20-30 minutes. The pipeline shows progress at each phase.",
          it: "Dipende dall'ambito. Un argomento focalizzato richiede 5-10 minuti. Un'analisi competitiva ampia può richiedere 20-30 minuti. La pipeline mostra l'avanzamento ad ogni fase.",
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
      en: "AI career coach: CV optimization, interview prep, head hunter perspective",
      it: "Career coach AI: ottimizzazione CV, preparazione colloqui, prospettiva head hunter",
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
      en: "CV Guru - AI-Powered CV Optimization and Interview Preparation",
      it: "CV Guru - Ottimizzazione CV e Preparazione Colloqui con AI",
    },
    metaDescription: {
      en: "6-phase workflow: CV analysis, job-fit scoring, ATS optimization, STAR interview stories, DOCX generation. Think like a head hunter.",
      it: "Workflow a 6 fasi: analisi CV, scoring job-fit, ottimizzazione ATS, storie STAR per colloqui, generazione DOCX. Pensa come un head hunter.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "Your CV gets rejected by ATS filters before a human ever reads it. You send the same resume to every job. You walk into interviews without prepared stories. Professional CV services charge 200-500 EUR for a single rewrite.",
      it: "Il tuo CV viene scartato dai filtri ATS prima che un umano lo legga. Invii lo stesso curriculum per ogni posizione. Entri ai colloqui senza storie preparate. I servizi professionali di CV costano 200-500 EUR per una singola riscrittura.",
    },
    solution: {
      en: "6-phase workflow: analyze your current CV, define job context, calculate job-fit score, optimize for ATS, prepare STAR interview stories, generate final briefing. The skill thinks like a head hunter: it tells you what a recruiter sees in the first 6 seconds. Python script generates a polished DOCX.",
      it: "Workflow a 6 fasi: analizza il tuo CV attuale, definisci il contesto lavorativo, calcola il punteggio di job-fit, ottimizza per ATS, prepara storie STAR per i colloqui, genera briefing finale. La skill pensa come un head hunter: ti dice cosa vede un recruiter nei primi 6 secondi. Uno script Python genera un DOCX professionale.",
    },
    result: {
      en: "A CV optimized for ATS and human readers. STAR stories ready for behavioral interviews. A clear job-fit score that tells you if it is worth applying. All for 19 EUR instead of 500 EUR.",
      it: "Un CV ottimizzato per ATS e lettori umani. Storie STAR pronte per i colloqui comportamentali. Un punteggio job-fit chiaro che ti dice se vale la pena candidarti. Tutto per 19 EUR invece di 500 EUR.",
    },
    whatsInside: [
      { en: "8 files covering the complete career coaching pipeline", it: "8 file che coprono l'intera pipeline di career coaching" },
      { en: "ATS-friendliness scoring with specific fix recommendations", it: "Scoring compatibilità ATS con raccomandazioni specifiche di correzione" },
      { en: "STAR story generator for behavioral interview preparation", it: "Generatore di storie STAR per preparazione colloqui comportamentali" },
      { en: "Head hunter perspective analysis: what recruiters see first", it: "Analisi prospettiva head hunter: cosa vedono prima i recruiter" },
      { en: "Python script for professional DOCX generation", it: "Script Python per generazione DOCX professionale" },
    ],
    whoIsThisFor: [
      { en: "Job seekers applying to positions that use ATS screening", it: "Chi cerca lavoro e si candida a posizioni con screening ATS" },
      { en: "Professionals preparing for behavioral interviews at top companies", it: "Professionisti che preparano colloqui comportamentali per grandi aziende" },
      { en: "Career changers who need to reframe their experience for a new industry", it: "Chi cambia carriera e deve riformulare la propria esperienza per un nuovo settore" },
    ],
    notFor: {
      en: "Freelancers or entrepreneurs who don't need a traditional CV",
      it: "Freelancer o imprenditori che non hanno bisogno di un CV tradizionale",
    },
    beforeAfter: [
      {
        before: { en: "Same CV sent to every job. No customization per role", it: "Stesso CV inviato per ogni posizione. Nessuna personalizzazione per ruolo" },
        after: { en: "Job-fit score and targeted optimization for each application", it: "Punteggio job-fit e ottimizzazione mirata per ogni candidatura" },
      },
      {
        before: { en: "Rejected by ATS filters. No human ever reads your CV", it: "Scartato dai filtri ATS. Nessun umano legge mai il tuo CV" },
        after: { en: "ATS-optimized format with keyword matching and scoring", it: "Formato ottimizzato ATS con matching keyword e scoring" },
      },
      {
        before: { en: "Improvising answers in behavioral interviews", it: "Improvvisare risposte nei colloqui comportamentali" },
        after: { en: "Pre-built STAR stories tailored to the target role", it: "Storie STAR pre-costruite su misura per il ruolo target" },
      },
    ],
    faq: [
      {
        question: { en: "What exactly do I get when I buy this?", it: "Cosa ricevo esattamente quando acquisto?" },
        answer: {
          en: "A ZIP with 8 files: the 6-phase coaching workflow, ATS scoring engine, STAR story templates, and a Python DOCX generator. No subscription.",
          it: "Un ZIP con 8 file: il workflow di coaching a 6 fasi, il motore di scoring ATS, template storie STAR e un generatore Python DOCX. Nessun abbonamento.",
        },
      },
      {
        question: { en: "Does it work for non-Italian job markets?", it: "Funziona per mercati del lavoro non italiani?" },
        answer: {
          en: "Yes. The ATS optimization and STAR methodology are universal. The skill works in English and Italian for any job market.",
          it: "Sì. L'ottimizzazione ATS e la metodologia STAR sono universali. La skill funziona in inglese e italiano per qualsiasi mercato del lavoro.",
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
        question: { en: "Can I get a refund?", it: "Posso ottenere un rimborso?" },
        answer: {
          en: "Skills are digital products. All sales are final. We recommend reviewing the skill details carefully before purchasing.",
          it: "Le skill sono prodotti digitali. Tutte le vendite sono definitive. Ti consigliamo di leggere attentamente i dettagli della skill prima dell'acquisto.",
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
      en: "Editorial pipeline: 7 AI agents transform articles into executive LinkedIn posts",
      it: "Pipeline editoriale: 7 agenti AI trasformano articoli in post LinkedIn executive",
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
      en: "Content Pipeline Pro - Editorial AI Pipeline for LinkedIn",
      it: "Content Pipeline Pro - Pipeline Editoriale AI per LinkedIn",
    },
    metaDescription: {
      en: "7 specialized AI agents. 4 content types with dedicated writers. 3 validation phases. Voice consistency tracking. From raw source to publish-ready post.",
      it: "7 agenti AI specializzati. 4 tipi di contenuto con writer dedicati. 3 fasi di validazione. Tracking consistenza della voce. Dalla fonte grezza al post pronto per la pubblicazione.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You read a great article or watch a video. You want to share an insight on LinkedIn. But transforming source material into an original, voice-consistent post takes 45-60 minutes. Your writing sounds different every time. Quality is inconsistent.",
      it: "Leggi un articolo interessante o guardi un video. Vuoi condividere un insight su LinkedIn. Ma trasformare il materiale sorgente in un post originale e coerente con la tua voce richiede 45-60 minuti. La tua scrittura suona diversa ogni volta. La qualità è inconsistente.",
    },
    solution: {
      en: "7 specialized agents work in sequence: Classifier (identifies content type), 4 Writers (one per content type: news, opinion, tutorial, case study), QA Director (quality check), Strategic Echo (voice consistency). 3 validation phases ensure the final post matches your voice, adds original perspective, and is ready to publish.",
      it: "7 agenti specializzati lavorano in sequenza: Classifier (identifica il tipo di contenuto), 4 Writer (uno per tipo: news, opinione, tutorial, case study), QA Director (controllo qualità), Strategic Echo (consistenza della voce). 3 fasi di validazione assicurano che il post finale corrisponda alla tua voce, aggiunga una prospettiva originale e sia pronto per la pubblicazione.",
    },
    result: {
      en: "From source material to publish-ready LinkedIn post in 10 minutes instead of 60. Consistent voice across all posts. Each content type gets a writer trained for that specific format.",
      it: "Dal materiale sorgente al post LinkedIn pronto in 10 minuti invece di 60. Voce coerente su tutti i post. Ogni tipo di contenuto ha un writer addestrato per quel formato specifico.",
    },
    whatsInside: [
      { en: "22 files with 7 specialized AI agents", it: "22 file con 7 agenti AI specializzati" },
      { en: "4 content type writers: news, opinion, tutorial, case study", it: "4 writer per tipo contenuto: news, opinione, tutorial, case study" },
      { en: "Classifier agent: auto-detects content type from source material", it: "Agente Classifier: rileva automaticamente il tipo di contenuto dal materiale sorgente" },
      { en: "QA Director + Strategic Echo: 3-phase validation pipeline", it: "QA Director + Strategic Echo: pipeline di validazione a 3 fasi" },
      { en: "Voice consistency tracking across all generated posts", it: "Tracking consistenza della voce su tutti i post generati" },
    ],
    whoIsThisFor: [
      { en: "LinkedIn thought leaders publishing 3+ posts per week", it: "Thought leader LinkedIn che pubblicano 3+ post a settimana" },
      { en: "Content managers running LinkedIn accounts for executives", it: "Content manager che gestiscono account LinkedIn per dirigenti" },
      { en: "Professionals who want to share industry insights without spending hours writing", it: "Professionisti che vogliono condividere insight di settore senza spendere ore a scrivere" },
    ],
    notFor: {
      en: "Casual LinkedIn users who post once a month or less",
      it: "Utenti LinkedIn casuali che pubblicano una volta al mese o meno",
    },
    beforeAfter: [
      {
        before: { en: "45-60 minutes to transform one article into a LinkedIn post", it: "45-60 minuti per trasformare un articolo in un post LinkedIn" },
        after: { en: "Source to publish-ready post in 10 minutes with 7 specialized agents", it: "Dalla fonte al post pronto in 10 minuti con 7 agenti specializzati" },
      },
      {
        before: { en: "Voice inconsistency. Every post sounds like a different person wrote it", it: "Voce inconsistente. Ogni post sembra scritto da una persona diversa" },
        after: { en: "Strategic Echo agent tracks and maintains your voice across all posts", it: "L'agente Strategic Echo traccia e mantiene la tua voce su tutti i post" },
      },
      {
        before: { en: "Same writing style for news, opinions, and tutorials", it: "Stesso stile di scrittura per news, opinioni e tutorial" },
        after: { en: "4 dedicated writers, each trained for a specific content format", it: "4 writer dedicati, ciascuno addestrato per un formato di contenuto specifico" },
      },
    ],
    faq: [
      {
        question: { en: "What exactly do I get when I buy this?", it: "Cosa ricevo esattamente quando acquisto?" },
        answer: {
          en: "A ZIP with 22 files: 7 agent definitions, content type templates, validation rules, and voice tracking system. No subscription.",
          it: "Un ZIP con 22 file: 7 definizioni agente, template tipi contenuto, regole di validazione e sistema tracking voce. Nessun abbonamento.",
        },
      },
      {
        question: { en: "Does it post to LinkedIn automatically?", it: "Pubblica su LinkedIn automaticamente?" },
        answer: {
          en: "No. It generates publish-ready content. You copy and paste to LinkedIn, or use an automation tool for scheduling.",
          it: "No. Genera contenuto pronto per la pubblicazione. Copi e incolli su LinkedIn, o usi uno strumento di automazione per la programmazione.",
        },
      },
      {
        question: { en: "Can I customize the writing voice?", it: "Posso personalizzare la voce di scrittura?" },
        answer: {
          en: "Yes. The voice profile is configurable. Feed it 5-10 of your best posts and it learns your style, tone, and vocabulary preferences.",
          it: "Sì. Il profilo voce è configurabile. Dagli 5-10 dei tuoi migliori post e impara il tuo stile, tono e preferenze di vocabolario.",
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
