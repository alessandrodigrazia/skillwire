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
      en: "Help your child pick the right school. RIASEC test, Italian pathways, employment data, 29 EUR.",
      it: "Aiuta tuo figlio a scegliere la scuola giusta. Test RIASEC, percorsi italiani, dati occupazionali, 29 EUR.",
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
      en: "SchoolPath AI | School & University Orientation for Italian Students",
      it: "SchoolPath AI | Orientamento Scolastico e Universitario per Studenti Italiani",
    },
    metaDescription: {
      en: "RIASEC assessment mapped to Italian schools: licei, tecnici, ITS, universities. Employment data from Almalaurea. 29 EUR instead of 200 EUR counseling sessions.",
      it: "Test RIASEC mappato sulle scuole italiane: licei, tecnici, ITS, universit\u00e0. Dati occupazionali da Almalaurea. 29 EUR invece di sessioni di orientamento da 200 EUR.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "Your child has to choose a high school. Or a university. The decision shapes the next five to ten years, and the information available is a mess. Free online tests say 'you're creative' and stop there. Open day events are marketing pitches. The school counselor has 400 students and fifteen minutes per family. Private orientation consultants charge 80-200 EUR per session. You end up choosing based on what friends' kids chose, which building looked nicer at the open day, or which option sounds most prestigious. None of these are good criteria.",
      it: "Tuo figlio deve scegliere la scuola superiore. O l'universit\u00e0. La decisione condiziona i prossimi cinque-dieci anni, e le informazioni disponibili sono un caos. I test gratuiti online dicono 'sei creativo' e si fermano l\u00ec. Le giornate porte aperte sono pitch di marketing. Il consulente scolastico ha 400 studenti e quindici minuti per famiglia. I consulenti privati di orientamento chiedono 80-200 EUR a sessione. Si finisce per scegliere in base a cosa hanno scelto i figli degli amici, quale edificio era più bello all'open day, o quale opzione suona più prestigiosa. Nessuno di questi è un buon criterio.",
    },
    solution: {
      en: "SchoolPath AI starts with what matters: who your child actually is. A 30-item RIASEC Holland assessment (the same framework used by career psychologists worldwide) maps their interests, aptitudes, and working style into six dimensions. Then the skill does what no generic test can: it maps those results onto the actual Italian education system. Two specialized branches handle two different decision points. The high school branch covers every option: liceo classico, scientifico, linguistico, artistico, delle scienze umane; istituti tecnici (economico, tecnologico); istituti professionali. The university branch maps faculties, ITS pathways, and direct workforce entry, with employment statistics from Almalaurea and Excelsior so families see real hiring rates, not just brochure promises. A 'Dream vs Reality' protocol handles cases where the student wants to become an astronaut or an influencer: it takes the aspiration seriously, shows the actual data, and finds realistic pathways that preserve the core interest.",
      it: "SchoolPath AI parte da quello che conta: chi è davvero tuo figlio. Un assessment RIASEC Holland a 30 item (lo stesso framework usato dagli psicologi del lavoro in tutto il mondo) mappa interessi, attitudini e stile lavorativo in sei dimensioni. Poi la skill fa quello che nessun test generico può fare: mappa quei risultati sul sistema scolastico italiano reale. Due branch specializzati gestiscono due momenti decisionali diversi. Il branch scuole superiori copre ogni opzione: liceo classico, scientifico, linguistico, artistico, delle scienze umane; istituti tecnici (economico, tecnologico); istituti professionali. Il branch universit\u00e0 mappa facolt\u00e0, percorsi ITS e ingresso diretto nel lavoro, con statistiche occupazionali da Almalaurea ed Excelsior perch\u00e9 le famiglie vedano tassi di assunzione reali, non promesse da brochure. Un protocollo 'Sogno vs Realt\u00e0' gestisce i casi in cui lo studente vuole fare l'astronauta o l'influencer: prende l'aspirazione sul serio, mostra i dati reali e trova percorsi realistici che preservano l'interesse di fondo.",
    },
    result: {
      en: "A personalized report with three recommended pathways, each backed by employment data and compatibility scores. The family sees not just 'you should go to liceo scientifico' but why, which specific schools match, what career paths open up, and what the employment rate is five years after graduation. The whole process takes one evening instead of months of uncertainty. Total cost: 29 EUR. Reusable as many times as needed, for siblings or revised decisions.",
      it: "Un report personalizzato con tre percorsi consigliati, ciascuno supportato da dati occupazionali e punteggi di compatibilit\u00e0. La famiglia vede non solo 'dovresti andare al liceo scientifico' ma perch\u00e9, quali scuole specifiche corrispondono, quali percorsi professionali si aprono e qual è il tasso di occupazione cinque anni dopo il diploma. L'intero processo richiede una serata invece di mesi di incertezza. Costo totale: 29 EUR. Riutilizzabile quante volte serve, per fratelli o decisioni riviste.",
    },
    whatsInside: [
      { en: "30-item RIASEC Holland assessment with automated scoring across six dimensions", it: "Assessment RIASEC Holland a 30 item con scoring automatico su sei dimensioni" },
      { en: "High school branch: complete mapping of licei, tecnici, and professionali with compatibility matching", it: "Branch scuole superiori: mappatura completa di licei, tecnici e professionali con matching di compatibilit\u00e0" },
      { en: "University branch: faculty mapping, ITS pathways, and workforce entry with Almalaurea employment statistics", it: "Branch universit\u00e0: mappatura facolt\u00e0, percorsi ITS e ingresso lavorativo con statistiche occupazionali Almalaurea" },
      { en: "'Dream vs Reality' protocol: takes unrealistic aspirations seriously and finds realistic adjacent pathways", it: "Protocollo 'Sogno vs Realt\u00e0': prende sul serio le aspirazioni irrealistiche e trova percorsi realistici adiacenti" },
      { en: "Personalized report generator with 3 ranked pathways, compatibility scores, and action plan", it: "Generatore di report personalizzato con 3 percorsi classificati, punteggi di compatibilit\u00e0 e piano d'azione" },
      { en: "14 files total, including reference data aligned with MIM 2023 guidelines", it: "14 file totali, inclusi dati di riferimento allineati alle linee guida MIM 2023" },
    ],
    whoIsThisFor: [
      { en: "Parents of 12-13 year olds facing the scuola superiore choice who want data instead of guesswork", it: "Genitori di ragazzi di 12-13 anni davanti alla scelta delle superiori che vogliono dati invece di congetture" },
      { en: "Students aged 17-18 deciding between university faculties, ITS programs, or entering the workforce", it: "Studenti di 17-18 anni che decidono tra facolt\u00e0 universitarie, programmi ITS o ingresso nel mondo del lavoro" },
      { en: "School counselors managing hundreds of students who need a structured, repeatable orientation tool", it: "Consulenti scolastici che gestiscono centinaia di studenti e hanno bisogno di uno strumento di orientamento strutturato e ripetibile" },
      { en: "Families who can't afford 200 EUR per counseling session but want the same quality of guidance", it: "Famiglie che non possono permettersi 200 EUR a sessione di consulenza ma vogliono la stessa qualit\u00e0 di orientamento" },
    ],
    notFor: {
      en: "Students outside Italy. The pathway mapping, employment data, and school types are specific to the Italian education system.",
      it: "Studenti fuori dall'Italia. La mappatura dei percorsi, i dati occupazionali e i tipi di scuola sono specifici per il sistema scolastico italiano.",
    },
    beforeAfter: [
      {
        before: { en: "Free online tests that label your child 'creative' or 'analytical' with no concrete path forward", it: "Test online gratuiti che etichettano tuo figlio come 'creativo' o 'analitico' senza un percorso concreto" },
        after: { en: "RIASEC assessment mapped to specific Italian schools with compatibility scores and employment data", it: "Assessment RIASEC mappato su scuole italiane specifiche con punteggi di compatibilit\u00e0 e dati occupazionali" },
      },
      {
        before: { en: "Choosing a school based on open day impressions and what friends' kids picked", it: "Scegliere una scuola basandosi sulle impressioni dell'open day e su cosa hanno scelto i figli degli amici" },
        after: { en: "Three ranked pathways with reasons, employment rates, and a clear action plan", it: "Tre percorsi classificati con motivazioni, tassi di occupazione e un piano d'azione chiaro" },
      },
      {
        before: { en: "80-200 EUR per session with a private orientation consultant", it: "80-200 EUR a sessione con un consulente privato di orientamento" },
        after: { en: "Complete orientation system for 29 EUR, reusable for siblings and revised decisions", it: "Sistema di orientamento completo a 29 EUR, riutilizzabile per fratelli e decisioni riviste" },
      },
      {
        before: { en: "No employment data: choosing a faculty without knowing the hiring rate five years later", it: "Nessun dato occupazionale: scegliere una facolt\u00e0 senza conoscere il tasso di assunzione cinque anni dopo" },
        after: { en: "Almalaurea and Excelsior statistics for every pathway, so the family sees real numbers", it: "Statistiche Almalaurea ed Excelsior per ogni percorso, perch\u00e9 la famiglia veda numeri reali" },
      },
    ],
    faq: [
      {
        question: { en: "What do I get when I buy this?", it: "Cosa ricevo quando acquisto?" },
        answer: {
          en: "A ZIP with 14 files: the RIASEC assessment with scoring, the high school orientation branch, the university orientation branch, employment data references, and the report generator. Install once, use for every child. No subscription.",
          it: "Un ZIP con 14 file: l'assessment RIASEC con scoring, il branch orientamento scuole superiori, il branch orientamento universit\u00e0, riferimenti dati occupazionali e il generatore di report. Installi una volta, lo usi per ogni figlio. Nessun abbonamento.",
        },
      },
      {
        question: { en: "Is this only for Italian students?", it: "\u00c8 solo per studenti italiani?" },
        answer: {
          en: "Yes. The school types, pathway mapping, and employment statistics are specific to the Italian education system, aligned with MIM 2023 guidelines and Almalaurea data.",
          it: "S\u00ec. I tipi di scuola, la mappatura dei percorsi e le statistiche occupazionali sono specifici per il sistema scolastico italiano, allineati alle linee guida MIM 2023 e ai dati Almalaurea.",
        },
      },
      {
        question: { en: "Does my child use Claude Code directly?", it: "Mio figlio usa Claude Code direttamente?" },
        answer: {
          en: "Typically a parent or counselor runs the session. The child answers the 30 RIASEC questions verbally while the adult interacts with Claude. The output report can be printed or saved as reference.",
          it: "Normalmente un genitore o consulente gestisce la sessione. Il ragazzo risponde alle 30 domande RIASEC a voce mentre l'adulto interagisce con Claude. Il report finale può essere stampato o salvato come riferimento.",
        },
      },
      {
        question: { en: "What if my child has unrealistic career expectations?", it: "E se mio figlio ha aspettative professionali irrealistiche?" },
        answer: {
          en: "The 'Dream vs Reality' protocol handles this. It doesn't dismiss the dream. It shows real data about that career path, identifies the core interest behind the aspiration, and finds realistic pathways that satisfy the same underlying motivation.",
          it: "Il protocollo 'Sogno vs Realt\u00e0' gestisce questa situazione. Non liquida il sogno. Mostra dati reali su quel percorso professionale, identifica l'interesse di fondo dietro l'aspirazione e trova percorsi realistici che soddisfano la stessa motivazione sottostante.",
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
      en: "100 files of n8n expertise. Describe your automation, get a working workflow. n8n Power Pack.",
      it: "100 file di competenza n8n. Descrivi la tua automazione, ottieni un workflow funzionante. n8n Power Pack.",
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
      en: "n8n Workflow Expert | 545 AI Patterns Inside Claude Code",
      it: "n8n Workflow Expert | 545 Pattern AI Dentro Claude Code",
    },
    metaDescription: {
      en: "100 files with every n8n node documented. 545 AI workflow patterns analyzed. Describe what you need, Claude builds the workflow. Available in the n8n Power Pack.",
      it: "100 file con ogni nodo n8n documentato. 545 pattern di workflow AI analizzati. Descrivi cosa ti serve, Claude costruisce il workflow. Disponibile nel n8n Power Pack.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You need an HTTP Request node to call a REST API with OAuth2. The n8n docs page shows basic authentication but not the header format for Bearer tokens with refresh. You try three configurations, each fails with a different error. Forty-five minutes later you find the answer in a community forum post from eight months ago. This happens every time you touch a node you haven't used before. The documentation is spread across hundreds of pages. AI workflow patterns (agent chains, RAG pipelines, tool calling) are even harder to find because they're buried in forum threads and blog posts, not in the official reference. You spend more time searching for the right configuration than building the actual automation.",
      it: "Ti serve un nodo HTTP Request per chiamare una REST API con OAuth2. La pagina docs n8n mostra l'autenticazione base ma non il formato header per Bearer token con refresh. Provi tre configurazioni, ognuna fallisce con un errore diverso. Quarantacinque minuti dopo trovi la risposta in un post del forum community di otto mesi fa. Succede ogni volta che tocchi un nodo che non hai usato prima. La documentazione \u00e8 sparsa su centinaia di pagine. I pattern di workflow AI (catene di agenti, pipeline RAG, tool calling) sono ancora pi\u00f9 difficili da trovare perch\u00e9 sono sepolti in thread del forum e post di blog, non nella reference ufficiale. Passi pi\u00f9 tempo a cercare la configurazione giusta che a costruire l'automazione vera e propria.",
    },
    solution: {
      en: "100 files with 2.6 million characters of structured n8n knowledge. Every node documented with configuration examples, common pitfalls, and the specific edge cases that the official docs miss. 545 AI workflow patterns analyzed and categorized: agent chains, RAG pipelines, tool calling, memory management, embeddings. The skill has intelligent routing that connects to two companion skills in the Power Pack: Docs Live for official documentation lookup and Repository for 1,486 searchable templates. You describe the automation you need. Claude builds the workflow using the right nodes, the right configuration, and patterns that have already been tested.",
      it: "100 file con 2,6 milioni di caratteri di conoscenza n8n strutturata. Ogni nodo documentato con esempi di configurazione, errori comuni e i casi limite specifici che i docs ufficiali non coprono. 545 pattern di workflow AI analizzati e categorizzati: catene di agenti, pipeline RAG, tool calling, gestione memoria, embeddings. La skill ha routing intelligente che si connette a due skill companion nel Power Pack: Docs Live per lookup documentazione ufficiale e Repository per 1.486 template ricercabili. Descrivi l'automazione che ti serve. Claude costruisce il workflow usando i nodi giusti, la configurazione giusta, e pattern gi\u00e0 testati.",
    },
    result: {
      en: "You describe what you need in plain language. The skill builds the complete workflow: node selection, configuration, credential setup, error handling. From a simple Slack notification triggered by a webhook to a multi-step AI agent pipeline with RAG and tool calling. The forty-five-minute documentation hunt becomes a ten-second conversation.",
      it: "Descrivi cosa ti serve in linguaggio naturale. La skill costruisce il workflow completo: selezione nodi, configurazione, setup credenziali, gestione errori. Da una semplice notifica Slack triggerata da un webhook a una pipeline multi-step con agenti AI, RAG e tool calling. La caccia di quarantacinque minuti nella documentazione diventa una conversazione di dieci secondi.",
    },
    whatsInside: [
      { en: "100 files with 2.6M characters of structured n8n knowledge base", it: "100 file con 2,6M caratteri di knowledge base n8n strutturata" },
      { en: "545 AI workflow patterns: agent chains, RAG, tool calling, memory, embeddings", it: "545 pattern workflow AI: catene di agenti, RAG, tool calling, memoria, embeddings" },
      { en: "Node-by-node reference with configuration, pitfalls, and edge cases the docs miss", it: "Reference nodo per nodo con configurazione, errori e casi limite che i docs non coprono" },
      { en: "Intelligent routing to Docs Live (official reference) and Repository (1,486 templates)", it: "Routing intelligente verso Docs Live (reference ufficiale) e Repository (1.486 template)" },
      { en: "Credential setup guides for OAuth2, API keys, webhooks, and service-specific auth", it: "Guide setup credenziali per OAuth2, API key, webhook e autenticazione servizi specifici" },
    ],
    whoIsThisFor: [
      { en: "Developers building n8n automations who are tired of hunting through documentation", it: "Developer che costruiscono automazioni n8n stanchi di cercare nella documentazione" },
      { en: "Teams adopting n8n for AI-powered workflows and needing proven patterns", it: "Team che adottano n8n per workflow AI e hanno bisogno di pattern collaudati" },
      { en: "No-code builders who need help with complex node configurations", it: "No-code builder che hanno bisogno di aiuto con configurazioni nodo complesse" },
      { en: "Anyone who has spent 45 minutes configuring a single n8n node", it: "Chiunque abbia speso 45 minuti a configurare un singolo nodo n8n" },
    ],
    notFor: {
      en: "Users of Zapier, Make, or other automation platforms. This skill is specific to n8n.",
      it: "Utenti di Zapier, Make o altre piattaforme di automazione. Questa skill \u00e8 specifica per n8n.",
    },
    beforeAfter: [
      {
        before: { en: "45 minutes searching docs and forums to configure one HTTP Request node", it: "45 minuti a cercare nei docs e forum per configurare un nodo HTTP Request" },
        after: { en: "Every node documented with config examples, common errors, and edge cases", it: "Ogni nodo documentato con esempi di configurazione, errori comuni e casi limite" },
      },
      {
        before: { en: "Building AI agent workflows from scratch by trial and error", it: "Costruire workflow con agenti AI da zero per tentativi" },
        after: { en: "545 analyzed AI patterns: agent chains, RAG pipelines, tool calling, memory", it: "545 pattern AI analizzati: catene di agenti, pipeline RAG, tool calling, memoria" },
      },
      {
        before: { en: "Describing an automation to Claude and getting a generic answer", it: "Descrivere un'automazione a Claude e ottenere una risposta generica" },
        after: { en: "Claude has 2.6M characters of n8n knowledge and builds working workflows", it: "Claude ha 2,6M caratteri di conoscenza n8n e costruisce workflow funzionanti" },
      },
      {
        before: { en: "OAuth2 credentials that fail silently. No idea where to put the refresh token", it: "Credenziali OAuth2 che falliscono silenziosamente. Nessuna idea di dove mettere il refresh token" },
        after: { en: "Credential setup guides for every authentication pattern n8n supports", it: "Guide setup credenziali per ogni pattern di autenticazione che n8n supporta" },
      },
    ],
    faq: [
      {
        question: { en: "What do I get when I buy this?", it: "Cosa ricevo quando acquisto?" },
        answer: {
          en: "This skill is part of the n8n Power Pack bundle. You get 100 files: node references, AI workflow patterns, routing logic, and integration guides. 2.6 million characters of content. Install once. No subscription.",
          it: "Questa skill fa parte del bundle n8n Power Pack. Ricevi 100 file: reference nodi, pattern workflow AI, logica di routing e guide integrazione. 2,6 milioni di caratteri di contenuto. Installi una volta. Nessun abbonamento.",
        },
      },
      {
        question: { en: "How do the three n8n Power Pack skills work together?", it: "Come funzionano insieme le tre skill del n8n Power Pack?" },
        answer: {
          en: "Workflow Expert is the brain: it understands n8n and builds workflows. Docs Live is the reference: it provides official documentation inside Claude Code. Repository is the library: 1,486 templates searchable by service and pattern. The Expert skill automatically routes to the other two when it needs docs or template inspiration.",
          it: "Workflow Expert \u00e8 il cervello: capisce n8n e costruisce workflow. Docs Live \u00e8 la reference: fornisce documentazione ufficiale dentro Claude Code. Repository \u00e8 la libreria: 1.486 template ricercabili per servizio e pattern. La skill Expert si connette automaticamente alle altre due quando serve documentazione o ispirazione da template.",
        },
      },
      {
        question: { en: "Does it work with both self-hosted and cloud n8n?", it: "Funziona sia con n8n self-hosted che cloud?" },
        answer: {
          en: "Yes. Node configurations and workflow patterns are identical for both. The only difference is credential setup for the MCP server connection, and the skill covers both scenarios.",
          it: "S\u00ec. Le configurazioni nodo e i pattern workflow sono identici per entrambi. L'unica differenza \u00e8 il setup credenziali per la connessione al server MCP, e la skill copre entrambi gli scenari.",
        },
      },
      {
        question: { en: "Can I buy just the Expert skill without the full bundle?", it: "Posso comprare solo la skill Expert senza il bundle completo?" },
        answer: {
          en: "The three n8n skills are designed to work together. The Expert skill references Docs Live and Repository through intelligent routing. They're available exclusively as the n8n Power Pack bundle.",
          it: "Le tre skill n8n sono progettate per funzionare insieme. La skill Expert referenzia Docs Live e Repository tramite routing intelligente. Sono disponibili esclusivamente come bundle n8n Power Pack.",
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
      en: "Every n8n node documented inside Claude Code. No browser tabs, no context switching.",
      it: "Ogni nodo n8n documentato dentro Claude Code. Niente tab del browser, niente context switching.",
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
      en: "n8n Docs Live | Official n8n Documentation Inside Claude Code",
      it: "n8n Docs Live | Documentazione Ufficiale n8n Dentro Claude Code",
    },
    metaDescription: {
      en: "16 files with indexed n8n documentation. Core nodes, AI nodes, expressions, integrations. Searchable from Claude Code with live fallback for new content.",
      it: "16 file con documentazione n8n indicizzata. Nodi core, nodi AI, espressioni, integrazioni. Ricercabile da Claude Code con fallback live per nuovi contenuti.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You're building an n8n workflow and need to check how the Switch node handles empty arrays. You open the browser, search n8n docs, click through two pages that aren't quite right, find the answer on a third page. By the time you switch back to Claude Code, you've lost the thread of what you were building. This happens five or six times per workflow. Each context switch costs two to three minutes and a piece of your working memory. The cognitive overhead of toggling between your editor and browser documentation adds up faster than the actual building time.",
      it: "Stai costruendo un workflow n8n e devi controllare come il nodo Switch gestisce gli array vuoti. Apri il browser, cerchi nei docs n8n, clicchi su due pagine che non sono quelle giuste, trovi la risposta su una terza. Quando torni su Claude Code, hai perso il filo di quello che stavi costruendo. Succede cinque o sei volte per workflow. Ogni context switch costa due-tre minuti e un pezzo della tua memoria di lavoro. Il costo cognitivo del passare avanti e indietro tra editor e documentazione nel browser si accumula pi\u00f9 velocemente del tempo di costruzione vero e proprio.",
    },
    solution: {
      en: "A local searchable index of official n8n documentation that lives inside Claude Code. 16 files covering core nodes (HTTP, Code, Function, Switch, Merge, IF), AI nodes (Agent, Chain, Tool, Memory, Embeddings), expression syntax, and built-in functions. Claude searches the local index first. When something isn't covered locally, a live fallback queries the official n8n docs in real time. You stay in your editor. The documentation comes to you.",
      it: "Un indice locale ricercabile della documentazione n8n ufficiale che vive dentro Claude Code. 16 file che coprono nodi core (HTTP, Code, Function, Switch, Merge, IF), nodi AI (Agent, Chain, Tool, Memory, Embeddings), sintassi espressioni e funzioni built-in. Claude cerca prima nell'indice locale. Quando qualcosa non \u00e8 coperto localmente, un fallback live interroga i docs n8n ufficiali in tempo reale. Resti nel tuo editor. La documentazione viene da te.",
    },
    result: {
      en: "Zero browser tabs. You ask Claude about any n8n node and get the official documentation without leaving your editor. The five context switches per workflow become five instant answers. Works offline for everything in the local index.",
      it: "Zero tab del browser. Chiedi a Claude di qualsiasi nodo n8n e ottieni la documentazione ufficiale senza uscire dal tuo editor. I cinque context switch per workflow diventano cinque risposte istantanee. Funziona offline per tutto ci\u00f2 che \u00e8 nell'indice locale.",
    },
    whatsInside: [
      { en: "16 files with indexed official n8n documentation", it: "16 file con documentazione ufficiale n8n indicizzata" },
      { en: "Core node reference: HTTP, Code, Function, Switch, Merge, IF, Set, and more", it: "Reference nodi core: HTTP, Code, Function, Switch, Merge, IF, Set e altri" },
      { en: "AI node reference: Agent, Chain, Tool, Memory, Embeddings with config examples", it: "Reference nodi AI: Agent, Chain, Tool, Memory, Embeddings con esempi di configurazione" },
      { en: "Expression syntax, built-in functions, and data transformation reference", it: "Sintassi espressioni, funzioni built-in e reference trasformazione dati" },
      { en: "Live search fallback that queries official n8n docs when the local index doesn't cover it", it: "Fallback ricerca live che interroga i docs n8n ufficiali quando l'indice locale non copre" },
    ],
    whoIsThisFor: [
      { en: "n8n developers who want documentation inside their editor, not in browser tabs", it: "Developer n8n che vogliono la documentazione nel loro editor, non nei tab del browser" },
      { en: "Teams using n8n Workflow Expert who need instant node reference", it: "Team che usano n8n Workflow Expert e hanno bisogno di reference nodi istantanea" },
      { en: "Builders working with n8n's AI nodes who need Agent/Chain/Tool config details", it: "Builder che lavorano con i nodi AI di n8n e hanno bisogno dei dettagli config Agent/Chain/Tool" },
      { en: "Anyone who has lost their flow state because of a browser tab switch", it: "Chiunque abbia perso il proprio stato di flow a causa di un tab switch del browser" },
    ],
    notFor: {
      en: "Standalone purchase. Available only in the n8n Power Pack bundle.",
      it: "Acquisto standalone. Disponibile solo nel bundle n8n Power Pack.",
    },
    beforeAfter: [
      {
        before: { en: "Open browser, search n8n docs, navigate three pages, lose your building flow", it: "Apri browser, cerca nei docs n8n, naviga tre pagine, perdi il filo di quello che stavi costruendo" },
        after: { en: "Ask Claude about any node. Get the official answer without leaving your editor", it: "Chiedi a Claude di qualsiasi nodo. Ottieni la risposta ufficiale senza uscire dall'editor" },
      },
      {
        before: { en: "Five to six context switches per workflow, each costing minutes and focus", it: "Cinque-sei context switch per workflow, ognuno costa minuti e concentrazione" },
        after: { en: "Zero browser tabs. Documentation comes to you inside Claude Code", it: "Zero tab del browser. La documentazione viene da te dentro Claude Code" },
      },
      {
        before: { en: "No quick reference for AI-specific nodes: Agent, Chain, Tool, Memory, Embeddings", it: "Nessuna reference rapida per i nodi AI: Agent, Chain, Tool, Memory, Embeddings" },
        after: { en: "Dedicated AI node section with configuration examples and common patterns", it: "Sezione dedicata nodi AI con esempi di configurazione e pattern comuni" },
      },
      {
        before: { en: "Local notes that go stale as n8n releases new features", it: "Appunti locali che diventano obsoleti quando n8n rilascia nuove funzionalit\u00e0" },
        after: { en: "Live fallback queries official docs in real time for anything not in the index", it: "Il fallback live interroga i docs ufficiali in tempo reale per qualsiasi cosa non nell'indice" },
      },
    ],
    faq: [
      {
        question: { en: "What do I get when I buy this?", it: "Cosa ricevo quando acquisto?" },
        answer: {
          en: "This skill is part of the n8n Power Pack bundle. You get 16 files with indexed n8n documentation and a live search fallback for anything not in the local index.",
          it: "Questa skill fa parte del bundle n8n Power Pack. Ricevi 16 file con documentazione n8n indicizzata e un fallback ricerca live per qualsiasi cosa non nell'indice locale.",
        },
      },
      {
        question: { en: "Does it replace the official n8n docs?", it: "Sostituisce i docs ufficiali n8n?" },
        answer: {
          en: "It brings them inside Claude Code for faster access. The live fallback queries the official site when the local index doesn't have what you need. You get the same information without the context switch.",
          it: "Li porta dentro Claude Code per accesso pi\u00f9 veloce. Il fallback live interroga il sito ufficiale quando l'indice locale non ha quello che ti serve. Ottieni le stesse informazioni senza il context switch.",
        },
      },
      {
        question: { en: "Can I buy it separately?", it: "Posso comprarlo separatamente?" },
        answer: {
          en: "No. n8n Docs Live is designed to work with the other n8n Power Pack skills. The Expert skill routes to Docs Live automatically when it needs official documentation.",
          it: "No. n8n Docs Live \u00e8 progettata per funzionare con le altre skill del n8n Power Pack. La skill Expert si connette a Docs Live automaticamente quando serve documentazione ufficiale.",
        },
      },
      {
        question: { en: "Does it work offline?", it: "Funziona offline?" },
        answer: {
          en: "Everything in the local index (16 files of core and AI node documentation) works offline. The live fallback requires internet access for queries that go beyond the index.",
          it: "Tutto ci\u00f2 che \u00e8 nell'indice locale (16 file di documentazione nodi core e AI) funziona offline. Il fallback live richiede accesso internet per query che vanno oltre l'indice.",
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
      en: "1,486 workflow templates searchable by service and pattern. Start from what works.",
      it: "1.486 template workflow ricercabili per servizio e pattern. Parti da ci\u00f2 che funziona.",
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
      en: "n8n Workflow Repository | 1,486 Searchable Templates",
      it: "n8n Workflow Repository | 1.486 Template Ricercabili",
    },
    metaDescription: {
      en: "98 files with 1,486 n8n workflow templates. Search by service, pattern, or integration. Rich metadata with node count, complexity rating, and credential requirements.",
      it: "98 file con 1.486 template workflow n8n. Cerca per servizio, pattern o integrazione. Metadata con conteggio nodi, rating complessit\u00e0 e requisiti credenziali.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You need a workflow that syncs new HubSpot contacts to a Google Sheet and sends a Slack notification. The n8n community library has something similar, but searching takes fifteen minutes. The results are two years old. Some use deprecated nodes. You end up building from scratch anyway, reinventing a pattern that hundreds of people have already built and tested. This happens for every new workflow. The community has solved most common automation patterns, but there's no fast way to find the right template, check if it's current, or gauge its complexity before you start implementing.",
      it: "Ti serve un workflow che sincronizzi i nuovi contatti HubSpot su un Google Sheet e invii una notifica Slack. La libreria community n8n ha qualcosa di simile, ma la ricerca richiede quindici minuti. I risultati hanno due anni. Alcuni usano nodi deprecati. Finisci per costruire da zero comunque, reinventando un pattern che centinaia di persone hanno gi\u00e0 costruito e testato. Succede per ogni nuovo workflow. La community ha risolto la maggior parte dei pattern di automazione comuni, ma non c'\u00e8 un modo veloce per trovare il template giusto, verificare se \u00e8 aggiornato, o valutarne la complessit\u00e0 prima di iniziare a implementare.",
    },
    solution: {
      en: "1,486 real-world workflow templates organized in 98 searchable files. Each template has rich metadata: services used, node count, complexity rating, credential requirements, and a use case description. Search by service name (Slack, Gmail, Notion, HubSpot), integration type (webhook, schedule, manual trigger), or workflow pattern (sync, notification, pipeline, ETL). Claude finds the closest template, shows you the structure, and adapts it to your specific requirements. The Expert skill in the Power Pack uses the Repository automatically when building new workflows.",
      it: "1.486 template di workflow reali organizzati in 98 file ricercabili. Ogni template ha metadata ricchi: servizi usati, conteggio nodi, rating complessit\u00e0, requisiti credenziali e descrizione del caso d'uso. Cerca per nome servizio (Slack, Gmail, Notion, HubSpot), tipo integrazione (webhook, schedule, trigger manuale) o pattern workflow (sync, notifica, pipeline, ETL). Claude trova il template pi\u00f9 vicino, ti mostra la struttura e lo adatta ai tuoi requisiti specifici. La skill Expert nel Power Pack usa il Repository automaticamente quando costruisce nuovi workflow.",
    },
    result: {
      en: "You stop building from scratch. Instead, you start from a tested template that's already been through the trial-and-error phase. Adapting an existing pattern takes minutes. Building from zero takes hours. The difference compounds across every workflow you build.",
      it: "Smetti di costruire da zero. Parti da un template testato che ha gi\u00e0 superato la fase di tentativi. Adattare un pattern esistente richiede minuti. Costruire da zero richiede ore. La differenza si accumula su ogni workflow che costruisci.",
    },
    whatsInside: [
      { en: "98 files containing 1,486 workflow templates from the n8n community", it: "98 file contenenti 1.486 template workflow dalla community n8n" },
      { en: "Rich metadata per template: services, node count, complexity, credentials", it: "Metadata ricchi per ogni template: servizi, conteggio nodi, complessit\u00e0, credenziali" },
      { en: "Search by service name, integration type, or workflow pattern", it: "Ricerca per nome servizio, tipo integrazione o pattern workflow" },
      { en: "Templates spanning from simple webhooks to multi-step AI agent pipelines", it: "Template che vanno da semplici webhook a pipeline multi-step con agenti AI" },
      { en: "Automatic integration with n8n Workflow Expert for template-assisted building", it: "Integrazione automatica con n8n Workflow Expert per costruzione assistita da template" },
    ],
    whoIsThisFor: [
      { en: "n8n developers who want a tested starting point instead of a blank canvas", it: "Developer n8n che vogliono un punto di partenza testato invece di una tela bianca" },
      { en: "Teams standardizing automation patterns across the organization", it: "Team che standardizzano pattern di automazione in tutta l'organizzazione" },
      { en: "Builders who have solved the same Slack-to-Google-Sheet pattern three times already", it: "Builder che hanno gi\u00e0 risolto lo stesso pattern Slack-Google-Sheet tre volte" },
      { en: "n8n Workflow Expert users who want 1,486 extra patterns for Claude to reference", it: "Utenti di n8n Workflow Expert che vogliono 1.486 pattern extra da cui Claude pu\u00f2 attingere" },
    ],
    notFor: {
      en: "Standalone purchase. Available only in the n8n Power Pack bundle.",
      it: "Acquisto standalone. Disponibile solo nel bundle n8n Power Pack.",
    },
    beforeAfter: [
      {
        before: { en: "Building every workflow from a blank canvas. Reinventing solved patterns", it: "Costruire ogni workflow da una tela bianca. Reinventare pattern gi\u00e0 risolti" },
        after: { en: "1,486 tested templates to start from. Adapt in minutes, not hours", it: "1.486 template testati da cui partire. Adatta in minuti, non ore" },
      },
      {
        before: { en: "Searching community forums for 15 minutes to find one outdated example", it: "Cercare nei forum community per 15 minuti per trovare un esempio obsoleto" },
        after: { en: "Searchable by service, pattern, and integration type. Results in seconds", it: "Ricercabile per servizio, pattern e tipo integrazione. Risultati in secondi" },
      },
      {
        before: { en: "No way to judge template complexity before starting implementation", it: "Nessun modo di valutare la complessit\u00e0 del template prima di iniziare l'implementazione" },
        after: { en: "Rich metadata: node count, services, complexity rating, credential requirements", it: "Metadata ricchi: conteggio nodi, servizi, rating complessit\u00e0, requisiti credenziali" },
      },
      {
        before: { en: "Claude gives generic n8n advice without real workflow examples", it: "Claude d\u00e0 consigli n8n generici senza esempi di workflow reali" },
        after: { en: "Claude references 1,486 real patterns when building your workflow", it: "Claude referenzia 1.486 pattern reali quando costruisce il tuo workflow" },
      },
    ],
    faq: [
      {
        question: { en: "What do I get when I buy this?", it: "Cosa ricevo quando acquisto?" },
        answer: {
          en: "This skill is part of the n8n Power Pack bundle. You get 98 files with 1,486 searchable workflow templates, each with rich metadata (services, node count, complexity, credentials).",
          it: "Questa skill fa parte del bundle n8n Power Pack. Ricevi 98 file con 1.486 template workflow ricercabili, ognuno con metadata ricchi (servizi, conteggio nodi, complessit\u00e0, credenziali).",
        },
      },
      {
        question: { en: "Are these ready-to-import JSON workflows?", it: "Sono workflow JSON pronti da importare?" },
        answer: {
          en: "They're structured descriptions with node configurations. Claude Code turns them into importable n8n JSON when you ask for a specific workflow. More useful than raw JSON because Claude adapts them to your specific services and credentials.",
          it: "Sono descrizioni strutturate con configurazioni nodo. Claude Code li trasforma in JSON importabile in n8n quando chiedi un workflow specifico. Pi\u00f9 utili dei JSON grezzi perch\u00e9 Claude li adatta ai tuoi servizi e credenziali specifiche.",
        },
      },
      {
        question: { en: "Can I buy it separately?", it: "Posso comprarlo separatamente?" },
        answer: {
          en: "No. The Repository is designed to work with the Expert skill, which uses it automatically when building workflows. Available exclusively in the n8n Power Pack.",
          it: "No. Il Repository \u00e8 progettato per funzionare con la skill Expert, che lo usa automaticamente quando costruisce workflow. Disponibile esclusivamente nel n8n Power Pack.",
        },
      },
      {
        question: { en: "How current are the templates?", it: "Quanto sono aggiornati i template?" },
        answer: {
          en: "The templates are curated from the n8n community library with deprecated nodes updated. The Expert skill also checks node validity when building from a template, so even if a node version changed, the output workflow uses the current API.",
          it: "I template sono curati dalla libreria community n8n con nodi deprecati aggiornati. La skill Expert controlla anche la validit\u00e0 dei nodi quando costruisce da un template, quindi anche se una versione nodo \u00e8 cambiata, il workflow prodotto usa l'API corrente.",
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
      en: "Your AI plans look right until you run them. DeepMind's fix costs 19 EUR.",
      it: "I tuoi piani AI sembrano corretti finch\u00e9 non li esegui. La soluzione DeepMind costa 19 EUR.",
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
      en: "Iterative Self-Critique | AI Plans That Survive Execution",
      it: "Iterative Self-Critique | Piani AI che Sopravvivono all'Esecuzione",
    },
    metaDescription: {
      en: "DeepMind paper shows AI planning accuracy jumps from 50% to 90% with structured self-critique. Three validation steps. Domain templates for n8n, migrations, architecture.",
      it: "Il paper DeepMind mostra che l'accuratezza del planning AI salta dal 50% al 90% con self-critique strutturata. Tre step di validazione. Template per n8n, migrazioni, architettura.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You asked Claude to plan a database migration. The plan had six steps, clean sequencing, clear explanations. You ran it. Step three failed because it depended on a table that step five was supposed to create. You went back, reordered, fixed the dependency, ran again. Step four failed because credentials for the target database needed to be set up before step two, not after. The plan read well. It just wasn't right. This happens reliably with AI-generated plans for anything beyond trivial tasks. Workflow sequences where a trigger depends on a node that hasn't been configured yet. Architecture decisions where a microservice calls another service that doesn't exist in the plan. Google DeepMind measured it: LLMs plan at roughly 50% accuracy on complex multi-step tasks. Half the plans break on execution.",
      it: "Hai chiesto a Claude di pianificare una migrazione database. Il piano aveva sei step, sequenziamento pulito, spiegazioni chiare. L'hai eseguito. Lo step tre \u00e8 fallito perch\u00e9 dipendeva da una tabella che lo step cinque avrebbe dovuto creare. Sei tornato indietro, riordinato, corretto la dipendenza, eseguito di nuovo. Lo step quattro \u00e8 fallito perch\u00e9 le credenziali per il database target dovevano essere configurate prima dello step due, non dopo. Il piano si leggeva bene. Semplicemente non era corretto. Succede in modo prevedibile con piani generati dall'AI per qualsiasi cosa oltre i task banali. Sequenze workflow dove un trigger dipende da un nodo non ancora configurato. Decisioni architetturali dove un microservizio chiama un altro servizio che non esiste nel piano. Google DeepMind l'ha misurato: gli LLM pianificano con circa il 50% di accuratezza sui task complessi multi-step. Met\u00e0 dei piani si rompe in esecuzione.",
    },
    solution: {
      en: "The Plan-Critique-Revise pattern comes from a Google DeepMind paper published in 2025. After generating a plan, run a structured critique before executing it. Three validation steps for every action: identify what must be true before this step can run (preconditions), verify that previous steps actually satisfy those preconditions, and calculate the resulting state after the step completes. If any precondition fails, the plan gets revised and re-critiqued. The cycle continues until the plan passes or reaches a maximum iteration count. The skill packages this methodology with domain-specific templates. An n8n template knows that a webhook trigger must be the first node, that credential setup is a precondition for API nodes, and that IF nodes require the evaluated field to exist in the input. A migration template knows that CREATE TABLE must precede INSERT, that foreign keys require the referenced table to exist. An architecture template validates service dependencies, API contracts, and deployment ordering.",
      it: "Il pattern Plan-Critique-Revise viene da un paper Google DeepMind pubblicato nel 2025. Dopo aver generato un piano, esegui una critica strutturata prima di implementarlo. Tre step di validazione per ogni azione: identificare cosa deve essere vero prima che questo step possa partire (precondizioni), verificare che gli step precedenti soddisfino effettivamente quelle precondizioni, e calcolare lo stato risultante dopo che lo step si completa. Se qualche precondizione fallisce, il piano viene rivisto e ri-criticato. Il ciclo continua finch\u00e9 il piano passa o raggiunge un numero massimo di iterazioni. La skill impacchetta questa metodologia con template specifici per dominio. Un template n8n sa che un trigger webhook deve essere il primo nodo, che il setup delle credenziali \u00e8 una precondizione per i nodi API, e che i nodi IF richiedono che il campo valutato esista nell'input. Un template migrazione sa che CREATE TABLE deve precedere INSERT, che le foreign key richiedono che la tabella referenziata esista. Un template architettura valida le dipendenze tra servizi, i contratti API e l'ordine di deployment.",
    },
    result: {
      en: "Plans that survive contact with reality. The DeepMind benchmark shows accuracy jumping from roughly 50% to 90% on complex planning tasks. In practice: fewer rollbacks, fewer hours debugging a sequence that should have been caught before you ran it. Five files, 19 EUR, applicable to any planning domain.",
      it: "Piani che sopravvivono al contatto con la realt\u00e0. Il benchmark DeepMind mostra l'accuratezza che salta da circa il 50% al 90% sui task di planning complessi. In pratica: meno rollback, meno ore a debuggare una sequenza che sarebbe dovuta essere intercettata prima dell'esecuzione. Cinque file, 19 EUR, applicabili a qualsiasi dominio di planning.",
    },
    whatsInside: [
      { en: "Plan-Critique-Revise algorithm with configurable iteration limits and verbose mode", it: "Algoritmo Plan-Critique-Revise con limiti di iterazione configurabili e modalit\u00e0 verbose" },
      { en: "Three-step validation engine: preconditions, satisfaction check, resulting state calculation", it: "Motore di validazione a tre step: precondizioni, verifica di soddisfacimento, calcolo stato risultante" },
      { en: "n8n domain template: node ordering, credential dependencies, trigger-first validation", it: "Template dominio n8n: ordinamento nodi, dipendenze credenziali, validazione trigger-first" },
      { en: "Database migration template: schema ordering, foreign key validation, index timing", it: "Template dominio migrazione database: ordinamento schemi, validazione foreign key, timing indici" },
      { en: "Architecture template: service dependency graph, API contract validation, deployment sequencing", it: "Template dominio architettura: grafo dipendenze servizi, validazione contratti API, sequenziamento deployment" },
    ],
    whoIsThisFor: [
      { en: "Developers who use AI to plan migrations, deployments, or refactoring sequences", it: "Developer che usano l'AI per pianificare migrazioni, deployment o sequenze di refactoring" },
      { en: "n8n and automation builders who need workflow sequences that work the first time", it: "Builder n8n e automazione che hanno bisogno di sequenze workflow che funzionino al primo tentativo" },
      { en: "Solution architects generating system design plans with AI assistance", it: "Solution architect che generano piani di design di sistemi con assistenza AI" },
      { en: "Anyone who has lost hours debugging an AI-generated plan that looked correct", it: "Chiunque abbia perso ore a debuggare un piano generato dall'AI che sembrava corretto" },
    ],
    notFor: {
      en: "Simple one-shot tasks. If the plan has fewer than four steps, the overhead of structured critique doesn't pay off.",
      it: "Task semplici a singolo step. Se il piano ha meno di quattro passaggi, il costo della critica strutturata non ripaga.",
    },
    beforeAfter: [
      {
        before: { en: "AI generates a six-step migration plan. Step three fails because step five hasn't run yet", it: "L'AI genera un piano di migrazione a sei step. Lo step tre fallisce perch\u00e9 lo step cinque non \u00e8 ancora stato eseguito" },
        after: { en: "Precondition check catches the dependency inversion before you execute anything", it: "Il controllo precondizioni intercetta l'inversione di dipendenza prima che tu esegua qualsiasi cosa" },
      },
      {
        before: { en: "n8n workflow looks complete. Activate it, the webhook returns 404 because the trigger node was misconfigured", it: "Il workflow n8n sembra completo. Lo attivi, il webhook restituisce 404 perch\u00e9 il nodo trigger era mal configurato" },
        after: { en: "Domain template validates trigger-first ordering and credential dependencies automatically", it: "Il template di dominio valida automaticamente l'ordinamento trigger-first e le dipendenze delle credenziali" },
      },
      {
        before: { en: "Architecture plan passes review. Implementation reveals two services calling each other in a loop", it: "Il piano architetturale supera la review. L'implementazione rivela due servizi che si chiamano a vicenda in loop" },
        after: { en: "Service dependency graph validation catches circular dependencies at planning time", it: "La validazione del grafo di dipendenze dei servizi intercetta le dipendenze circolari in fase di planning" },
      },
      {
        before: { en: "Trusting AI output because it reads well and sounds confident", it: "Fidarsi dell'output dell'AI perch\u00e9 si legge bene e suona sicuro" },
        after: { en: "Structured critique that checks preconditions regardless of how convincing the plan sounds", it: "Critica strutturata che verifica le precondizioni indipendentemente da quanto il piano suoni convincente" },
      },
    ],
    faq: [
      {
        question: { en: "What do I get when I buy this?", it: "Cosa ricevo quando acquisto?" },
        answer: {
          en: "A ZIP with 5 files: the core Plan-Critique-Revise algorithm plus three domain-specific templates (n8n, database migration, architecture). Install once, works on any planning task. No subscription.",
          it: "Un ZIP con 5 file: l'algoritmo core Plan-Critique-Revise pi\u00f9 tre template specifici per dominio (n8n, migrazione database, architettura). Installi una volta, funziona su qualsiasi task di planning. Nessun abbonamento.",
        },
      },
      {
        question: { en: "Where does the 50% to 90% number come from?", it: "Da dove viene il dato dal 50% al 90%?" },
        answer: {
          en: "From Google DeepMind research published in 2025 on self-critique patterns for LLM planning. The improvement varies by task complexity, but the pattern consistently outperforms single-pass planning across all benchmarks in the paper.",
          it: "Dalla ricerca Google DeepMind pubblicata nel 2025 sui pattern di self-critique per planning LLM. Il miglioramento varia in base alla complessit\u00e0 del task, ma il pattern supera costantemente il planning single-pass in tutti i benchmark del paper.",
        },
      },
      {
        question: { en: "Can I apply it beyond n8n and migrations?", it: "Posso applicarlo oltre n8n e migrazioni?" },
        answer: {
          en: "Yes. The methodology is universal. The domain templates are starting points. You can write your own domain definition for any planning context: deployment pipelines, data processing, business processes, approval workflows.",
          it: "S\u00ec. La metodologia \u00e8 universale. I template di dominio sono punti di partenza. Puoi scrivere la tua definizione di dominio per qualsiasi contesto di planning: pipeline di deployment, elaborazione dati, processi business, workflow di approvazione.",
        },
      },
      {
        question: { en: "How many extra tokens does the critique cycle consume?", it: "Quanti token extra consuma il ciclo di critica?" },
        answer: {
          en: "Each critique iteration roughly doubles the token cost of the original plan. Most plans converge in 2-3 iterations. Verbose mode shows you each cycle so you can decide whether the additional validation is worth it for that specific task.",
          it: "Ogni iterazione di critica raddoppia circa il costo token del piano originale. La maggior parte dei piani converge in 2-3 iterazioni. La modalit\u00e0 verbose ti mostra ogni ciclo cos\u00ec puoi decidere se la validazione aggiuntiva vale il costo per quel task specifico.",
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
      en: "Anthropic's original skill-creator covers the basics (6 steps, SKILL.md structure, init and package scripts) but stops there. No guidance on designing complex skills, no quality framework, no token optimization strategy, no security considerations. You end up with skills that work but are not production-grade: bloated context windows, no error handling, no versioning, no PRD to align on requirements before writing a single line.",
      it: "La skill-creator originale di Anthropic copre le basi (6 step, struttura SKILL.md, script di init e package) ma si ferma l\u00ec. Nessuna guida per progettare skill complesse, nessun framework di qualit\u00e0, nessuna strategia di ottimizzazione token, nessuna considerazione sulla sicurezza. Il risultato sono skill che funzionano ma non sono production-grade: finestre di contesto gonfiate, nessuna gestione errori, nessun versioning, nessun PRD per allinearsi sui requisiti prima di scrivere una singola riga.",
    },
    solution: {
      en: "Skill Creator Guru takes Anthropic's foundation and adds everything learned from building 25+ production skills daily for months. A 7-step process (vs the original 6) with a dedicated PRD step for complex skills. Four Pillars of Quality framework (Effectiveness, Efficiency, Robustness, Safety). Token budget optimization with progressive disclosure costs. 7 documented anti-patterns. Security audit checklist for third-party skills. Extended Thinking vs Think Tool guidance. Common skill patterns (workflow, task, reference, capabilities). Plus the same 3 Python scripts for init, package, and validate.",
      it: "Skill Creator Guru prende le fondamenta di Anthropic e aggiunge tutto ciò che si impara costruendo 25+ skill in produzione quotidianamente per mesi. Un processo a 7 step (vs i 6 originali) con uno step PRD dedicato per skill complesse. Framework Four Pillars of Quality (Effectiveness, Efficiency, Robustness, Safety). Ottimizzazione budget token con costi di progressive disclosure. 7 anti-pattern documentati. Checklist audit sicurezza per skill di terze parti. Guida Extended Thinking vs Think Tool. Pattern comuni per skill (workflow, task, reference, capabilities). Più gli stessi 3 script Python per init, package e validate.",
    },
    result: {
      en: "You create skills that are not just functional but production-grade. The PRD methodology catches requirement gaps before you write code. The quality pillars give you a framework to evaluate every skill. Token optimization keeps your skills fast and cost-effective. You know exactly what to avoid and what patterns to follow, tested across 25+ real skills used daily.",
      it: "Crei skill che non sono solo funzionali, ma production-grade. La metodologia PRD intercetta i gap nei requisiti prima di scrivere codice. I pilastri di qualit\u00e0 ti danno un framework per valutare ogni skill. L'ottimizzazione token mantiene le skill veloci e cost-effective. Sai esattamente cosa evitare e quali pattern seguire, testati su 25+ skill reali usate quotidianamente.",
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
        before: { en: "No quality framework, skills work but you cannot evaluate how well", it: "Nessun framework di qualit\u00e0: le skill funzionano ma non puoi valutare quanto bene" },
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
      en: "Claude Code forgets everything between sessions. This fixes that. 9 EUR.",
      it: "Claude Code dimentica tutto tra le sessioni. Questo lo risolve. 9 EUR.",
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
      en: "Memory Manager | Cross-Session Memory for Claude Code",
      it: "Memory Manager | Memoria Cross-Sessione per Claude Code",
    },
    metaDescription: {
      en: "Claude Code forgets between sessions. Memory Manager adds persistent storage: users, projects, preferences. Local JSON files, zero cloud. Slash commands for management. 9 EUR.",
      it: "Claude Code dimentica tra le sessioni. Memory Manager aggiunge storage persistente: utenti, progetti, preferenze. File JSON locali, zero cloud. Comandi slash per la gestione. 9 EUR.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "Monday you spent twenty minutes explaining the Acme deal to Claude: the stakeholders, the budget, the timeline, the blockers. Tuesday you opened a new session and Claude had no idea what Acme was. You repeated the same context. Wednesday, same thing. By Thursday you started keeping a text file with the context dump and pasting it at the start of every session. Claude Code has no built-in memory between sessions. Every conversation starts from zero. If you use skills for recurring work (client projects, sales deals, content with a consistent voice), you're re-explaining the same context dozens of times.",
      it: "Luned\u00ec hai passato venti minuti a spiegare il deal Acme a Claude: gli stakeholder, il budget, la timeline, i blocchi. Marted\u00ec hai aperto una nuova sessione e Claude non sapeva cos'era Acme. Hai ripetuto lo stesso contesto. Mercoled\u00ec, uguale. Gioved\u00ec hai iniziato a tenere un file di testo con il dump del contesto da incollare a inizio sessione. Claude Code non ha memoria integrata tra le sessioni. Ogni conversazione parte da zero. Se usi skill per lavoro ricorrente (progetti cliente, deal commerciali, contenuti con voce consistente), stai ri-spiegando lo stesso contesto decine di volte.",
    },
    solution: {
      en: "A distributed memory system where each skill stores its own data in local JSON files. Three memory types cover most professional use cases: users (clients, stakeholders, assessment results), projects (deals, initiatives, timelines, deliverables), and preferences (communication styles, recurring patterns, formatting choices). Five slash commands handle the lifecycle: /memory remember saves a fact, /memory recall searches stored information, /memory consolidate extracts key facts from the current session, /memory forget removes outdated data, /memory list shows what's stored. Memory loads automatically when a skill starts. Privacy-first: everything stays on your machine. No cloud, no external APIs.",
      it: "Un sistema di memoria distribuito dove ogni skill salva i propri dati in file JSON locali. Tre tipi di memoria coprono la maggior parte dei casi d'uso professionali: users (clienti, stakeholder, risultati assessment), projects (deal, iniziative, timeline, deliverable) e preferences (stili di comunicazione, pattern ricorrenti, scelte di formattazione). Cinque comandi slash gestiscono il ciclo di vita: /memory remember salva un fatto, /memory recall cerca informazioni salvate, /memory consolidate estrae fatti chiave dalla sessione corrente, /memory forget rimuove dati obsoleti, /memory list mostra cosa c'\u00e8 in memoria. La memoria si carica automaticamente quando una skill parte. Privacy-first: tutto resta sulla tua macchina. Nessun cloud, nessuna API esterna.",
    },
    result: {
      en: "Tuesday's session already knows about the Acme deal. The stakeholders, the budget, your last interaction. You pick up where you left off instead of starting from scratch. Each session enriches the next. Over weeks, your skills accumulate context that makes every interaction faster and more relevant. Four files, 9 EUR, compatible with any Claude Code skill.",
      it: "La sessione di marted\u00ec sa gi\u00e0 del deal Acme. Gli stakeholder, il budget, la tua ultima interazione. Riprendi da dove ti eri fermato invece di ripartire da zero. Ogni sessione arricchisce la successiva. Nel corso delle settimane, le tue skill accumulano contesto che rende ogni interazione pi\u00f9 veloce e rilevante. Quattro file, 9 EUR, compatibile con qualsiasi skill Claude Code.",
    },
    whatsInside: [
      { en: "Distributed storage architecture: each skill gets its own memory folder", it: "Architettura storage distribuito: ogni skill ha la propria cartella di memoria" },
      { en: "Three memory types: users (people), projects (initiatives), preferences (patterns)", it: "Tre tipi di memoria: users (persone), projects (iniziative), preferences (pattern)" },
      { en: "Five slash commands: remember, recall, consolidate, forget, list", it: "Cinque comandi slash: remember, recall, consolidate, forget, list" },
      { en: "Auto-load protocol: relevant memory loads automatically at skill start", it: "Protocollo auto-load: la memoria rilevante si carica automaticamente all'avvio della skill" },
      { en: "Integration guide for adding memory to your own custom skills", it: "Guida integrazione per aggiungere memoria alle tue skill custom" },
    ],
    whoIsThisFor: [
      { en: "Claude Code users who run the same skills on recurring clients or projects", it: "Utenti Claude Code che usano le stesse skill su clienti o progetti ricorrenti" },
      { en: "Skill creators who want their skills to remember context across sessions", it: "Creatori di skill che vogliono che le loro skill ricordino il contesto tra sessioni" },
      { en: "Sales professionals tracking deals and stakeholders through Claude skills", it: "Professionisti sales che tracciano deal e stakeholder attraverso skill Claude" },
      { en: "Anyone tired of re-explaining the same context at the start of every session", it: "Chiunque sia stanco di ri-spiegare lo stesso contesto a inizio di ogni sessione" },
    ],
    notFor: {
      en: "One-off tasks with no recurring context. If you never use the same skill twice on the same project, memory won't add value.",
      it: "Task una tantum senza contesto ricorrente. Se non usi mai la stessa skill due volte sullo stesso progetto, la memoria non aggiunge valore.",
    },
    beforeAfter: [
      {
        before: { en: "Re-explaining the Acme deal context at the start of every session", it: "Ri-spiegare il contesto del deal Acme a inizio di ogni sessione" },
        after: { en: "Memory auto-loads. Claude already knows about Acme, the stakeholders, the timeline", it: "La memoria si carica da sola. Claude sa gi\u00e0 di Acme, degli stakeholder, della timeline" },
      },
      {
        before: { en: "Keeping a text file with context dumps to paste into every new session", it: "Tenere un file di testo con dump del contesto da incollare in ogni nuova sessione" },
        after: { en: "/memory consolidate at session end. /memory recall at session start. Done", it: "/memory consolidate a fine sessione. /memory recall a inizio sessione. Fatto" },
      },
      {
        before: { en: "Skills that treat every interaction as if it's the first one", it: "Skill che trattano ogni interazione come se fosse la prima" },
        after: { en: "Skills that accumulate context and get more useful over weeks", it: "Skill che accumulano contesto e diventano pi\u00f9 utili nel corso delle settimane" },
      },
      {
        before: { en: "One giant CLAUDE.md file stuffed with project details that slows everything down", it: "Un unico file CLAUDE.md enorme pieno di dettagli progetto che rallenta tutto" },
        after: { en: "Distributed per-skill storage. Each skill loads only its own relevant memory", it: "Storage distribuito per skill. Ogni skill carica solo la propria memoria rilevante" },
      },
    ],
    faq: [
      {
        question: { en: "What do I get when I buy this?", it: "Cosa ricevo quando acquisto?" },
        answer: {
          en: "A ZIP with 4 files: the memory system architecture, storage schema, slash command definitions, and an integration guide for adding memory to any skill. Install once. No subscription.",
          it: "Un ZIP con 4 file: l'architettura del sistema di memoria, lo schema di storage, le definizioni dei comandi slash e una guida integrazione per aggiungere memoria a qualsiasi skill. Installi una volta. Nessun abbonamento.",
        },
      },
      {
        question: { en: "Where is the data stored?", it: "Dove vengono salvati i dati?" },
        answer: {
          en: "In local JSON files under .claude/skills/{skill-name}/memory/. Nothing leaves your machine. No cloud services, no external APIs, no data collection. If you sync .claude via OneDrive or Dropbox, the memory follows you across devices.",
          it: "In file JSON locali sotto .claude/skills/{nome-skill}/memory/. Nulla esce dalla tua macchina. Nessun servizio cloud, nessuna API esterna, nessuna raccolta dati. Se sincronizzi .claude via OneDrive o Dropbox, la memoria ti segue tra i dispositivi.",
        },
      },
      {
        question: { en: "Does it work with any Claude Code skill?", it: "Funziona con qualsiasi skill Claude Code?" },
        answer: {
          en: "Yes. Any skill that follows the standard .claude/skills/ folder structure can use Memory Manager. The integration guide shows how to add memory support to skills you've built yourself.",
          it: "S\u00ec. Qualsiasi skill che segue la struttura standard .claude/skills/ pu\u00f2 usare Memory Manager. La guida integrazione mostra come aggiungere il supporto memoria alle skill che hai costruito tu.",
        },
      },
      {
        question: { en: "Can I delete stored data?", it: "Posso cancellare i dati salvati?" },
        answer: {
          en: "/memory forget removes specific items. You can also delete the JSON files directly. The system never saves anything without explicit confirmation, so you always know what's stored.",
          it: "/memory forget rimuove elementi specifici. Puoi anche cancellare i file JSON direttamente. Il sistema non salva mai nulla senza conferma esplicita, quindi sai sempre cosa c'\u00e8 in memoria.",
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
      en: "Eight specialists. Four quality gates. Projects that stop drifting at step three.",
      it: "Otto specialisti. Quattro gate di qualit\u00e0. Progetti che smettono di andare alla deriva al terzo step.",
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
      en: "MaIA - Multi-Agent Architecture for Complex AI Projects",
      it: "MaIA - Architettura Multi-Agente per Progetti AI Complessi",
    },
    metaDescription: {
      en: "Turn complex projects into structured workflows with 8 agent types, 4 QA gates, and milestone-by-milestone control. For work too big for one Claude session.",
      it: "Trasforma progetti complessi in workflow strutturati con 8 tipi di agente, 4 gate QA e controllo milestone per milestone. Per lavori troppo grandi per una sessione Claude.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You ask Claude to build a fifteen-page market analysis. The first three sections are sharp. By section five, Claude has forgotten the competitive framework from section two. Section eight contradicts section three. You catch it because you're reading every paragraph, cross-referencing every claim. But you shouldn't have to be the QA department, the project manager, and the domain specialist all at once. You asked for help precisely because the project was too big to handle alone.",
      it: "Chiedi a Claude di costruire un'analisi di mercato da quindici pagine. Le prime tre sezioni sono precise. Alla sezione cinque, Claude ha dimenticato il framework competitivo della sezione due. La sezione otto contraddice la tre. Te ne accorgi perch\u00e9 stai rileggendo ogni paragrafo, incrociando ogni affermazione. Ma non dovresti fare il reparto qualit\u00e0, il project manager e lo specialista di dominio tutto insieme. Hai chiesto aiuto proprio perch\u00e9 il progetto era troppo grande per gestirlo da solo.",
    },
    solution: {
      en: "MaIA decomposes your project into specialist agents, each with a role defined in advance. A Genesis agent validates the objective. A Swarm Architect designs the team of four to six specialists. Each specialist executes its domain and passes the output to a QA agent that checks four gates: source freshness, recency verification, spec alignment, and confidence level. You approve each milestone before the next agent starts. If something needs changing mid-project, an Orchestrator replans without losing completed work. An Assembler integrates everything into the final deliverable.",
      it: "MaIA scompone il tuo progetto in agenti specialisti, ciascuno con un ruolo definito in anticipo. Un agente Genesis valida l'obiettivo. Uno Swarm Architect progetta il team di quattro-sei specialisti. Ogni specialista esegue il suo dominio e passa l'output a un agente QA che verifica quattro gate: freschezza delle fonti, verifica di attualit\u00e0, allineamento alle specifiche e livello di confidenza. Tu approvi ogni milestone prima che il prossimo agente parta. Se qualcosa va cambiato a met\u00e0 progetto, un Orchestrator ripianifica senza perdere il lavoro completato. Un Assembler integra tutto nel deliverable finale.",
    },
    result: {
      en: "A fifteen-page report gets built by specialists, checked at four gates, and assembled with full traceability. You review milestones, not paragraphs. The project stays coherent because every step has a checkpoint. You go back to being the person who makes decisions instead of the person who hunts for contradictions.",
      it: "Un report da quindici pagine viene costruito da specialisti, verificato a quattro gate e assemblato con tracciabilit\u00e0 completa. Rivedi milestone, non paragrafi. Il progetto resta coerente perch\u00e9 ogni step ha un checkpoint. Torni a essere la persona che prende decisioni invece di quella che cerca le contraddizioni.",
    },
    whatsInside: [
      { en: "8 agent types with role specs and handoff protocols (Genesis, Swarm Architect, Specialist, QA, Orchestrator, Plan Refiner, Assembler, Stress Test)", it: "8 tipi di agente con specifiche di ruolo e protocolli di handoff (Genesis, Swarm Architect, Specialist, QA, Orchestrator, Plan Refiner, Assembler, Stress Test)" },
      { en: "4 QA validation gates with pass/fail criteria for every agent output", it: "4 gate di validazione QA con criteri pass/fail per ogni output di agente" },
      { en: "3-layer context system (FONTE 1/2/3) that prevents information loss across long projects", it: "Sistema di contesto a 3 livelli (FONTE 1/2/3) che previene la perdita di informazioni nei progetti lunghi" },
      { en: "Computational Honesty Protocol for transparent handling of missing sources", it: "Protocollo di Onest\u00e0 Computazionale per la gestione trasparente delle fonti mancanti" },
      { en: "DOCX export script for converting deliverables to client-ready documents", it: "Script di export DOCX per convertire i deliverable in documenti pronti per il cliente" },
    ],
    whoIsThisFor: [
      { en: "Consultants building multi-section reports and strategies for clients who expect coherent, source-backed deliverables", it: "Consulenti che costruiscono report multi-sezione e strategie per clienti che si aspettano deliverable coerenti e documentati" },
      { en: "Tech leads coordinating complex system designs who need quality checkpoints between phases", it: "Tech lead che coordinano design di sistemi complessi e servono checkpoint di qualit\u00e0 tra le fasi" },
      { en: "Analysts producing research-intensive deliverables where source freshness and claim verification matter", it: "Analisti che producono deliverable ad alta intensit\u00e0 di ricerca dove la freschezza delle fonti e la verifica delle affermazioni contano" },
      { en: "Anyone whose Claude projects keep losing coherence after the third step", it: "Chiunque i cui progetti Claude continuino a perdere coerenza dopo il terzo step" },
    ],
    notFor: {
      en: "Quick questions, single-file edits, or anything that fits comfortably in one Claude session.",
      it: "Domande rapide, modifiche a singoli file, o qualsiasi cosa che stia comodamente in una sessione Claude.",
    },
    beforeAfter: [
      {
        before: { en: "You read every paragraph to catch where Claude contradicted itself three sections ago", it: "Rileggi ogni paragrafo per trovare dove Claude si \u00e8 contraddetto tre sezioni prima" },
        after: { en: "QA gates catch contradictions, source gaps, and confidence issues before the output reaches you", it: "I gate QA intercettano contraddizioni, lacune nelle fonti e problemi di confidenza prima che l'output arrivi a te" },
      },
      {
        before: { en: "Halfway through, Claude forgets the framework from step one and builds on wrong assumptions", it: "A met\u00e0 percorso, Claude dimentica il framework dello step uno e costruisce su presupposti sbagliati" },
        after: { en: "Three context layers keep the original objective, approved summaries, and full outputs accessible to every agent", it: "Tre livelli di contesto mantengono l'obiettivo originale, i riassunti approvati e gli output completi accessibili a ogni agente" },
      },
      {
        before: { en: "Changing direction at step five means starting over or patching inconsistencies by hand", it: "Cambiare direzione allo step cinque significa ricominciare o rattoppare le incoerenze a mano" },
        after: { en: "The Orchestrator replans from step five forward while keeping completed work frozen and consistent", it: "L'Orchestrator ripianifica dallo step cinque in avanti mantenendo il lavoro completato congelato e consistente" },
      },
      {
        before: { en: "One long session that produces a blob of text you have to reorganize and fact-check yourself", it: "Una lunga sessione che produce un blocco di testo che devi riorganizzare e verificare tu stesso" },
        after: { en: "Specialist agents produce modular deliverables. The Assembler integrates them into a coherent final output", it: "Agenti specialisti producono deliverable modulari. L'Assembler li integra in un output finale coerente" },
      },
    ],
    faq: [
      {
        question: { en: "How is this different from asking Claude to break a project into steps?", it: "Che differenza c'\u00e8 rispetto a chiedere a Claude di dividere un progetto in step?" },
        answer: {
          en: "Claude will divide things into steps if you ask. But it won't enforce quality checks between steps, won't manage context across a long project, and won't let you approve milestones before proceeding. MaIA adds the structure that a verbal instruction can't: four validation gates, three context layers, and checkpoint-based supervision.",
          it: "Claude divider\u00e0 le cose in step se lo chiedi. Ma non imporr\u00e0 controlli qualit\u00e0 tra uno step e l'altro, non gestir\u00e0 il contesto lungo un progetto articolato, e non ti lascer\u00e0 approvare le milestone prima di procedere. MaIA aggiunge la struttura che un'istruzione verbale non pu\u00f2 dare: quattro gate di validazione, tre livelli di contesto e supervisione basata su checkpoint.",
        },
      },
      {
        question: { en: "Does MaIA spawn multiple Claude sessions?", it: "MaIA lancia pi\u00f9 sessioni Claude?" },
        answer: {
          en: "No. It orchestrates within a single Claude Code session using role-based instructions. Each agent type has its own context, rules, and output format. The result feels like a coordinated team, but runs in one session without extra API costs.",
          it: "No. Orchestra all'interno di una singola sessione Claude Code usando istruzioni basate sui ruoli. Ogni tipo di agente ha il proprio contesto, regole e formato di output. Il risultato sembra un team coordinato, ma gira in una sessione senza costi API aggiuntivi.",
        },
      },
      {
        question: { en: "What happens when sources can't be found during research?", it: "Cosa succede quando le fonti non si trovano durante la ricerca?" },
        answer: {
          en: "The Computational Honesty Protocol activates. After two search attempts, the agent tags the gap explicitly, explains why sources weren't found, and provides a clearly marked hypothesis. QA evaluates the hypothesis quality separately from source availability. You always know what's verified and what's estimated.",
          it: "Si attiva il Protocollo di Onest\u00e0 Computazionale. Dopo due tentativi di ricerca, l'agente tagga il gap esplicitamente, spiega perch\u00e9 le fonti non sono state trovate e fornisce un'ipotesi chiaramente marcata. Il QA valuta la qualit\u00e0 dell'ipotesi separatamente dalla disponibilit\u00e0 delle fonti. Sai sempre cosa \u00e8 verificato e cosa \u00e8 stimato.",
        },
      },
      {
        question: { en: "Can I modify the plan after execution has started?", it: "Posso modificare il piano dopo che l'esecuzione \u00e8 iniziata?" },
        answer: {
          en: "Yes. Request a replan at any milestone. The Orchestrator adjusts remaining steps while keeping completed work frozen. No re-doing approved deliverables, no losing context from earlier phases.",
          it: "S\u00ec. Puoi richiedere una ripianificazione a qualsiasi milestone. L'Orchestrator aggiusta gli step rimanenti mantenendo il lavoro completato congelato. Nessun rifacimento dei deliverable approvati, nessuna perdita di contesto delle fasi precedenti.",
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
      en: "Three AI models on the same task. From one terminal.",
      it: "Tre modelli AI sullo stesso task. Da un solo terminale.",
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
      en: "LLM Arena VS - Run Claude, ChatGPT, Gemini Together",
      it: "LLM Arena VS - Claude, ChatGPT e Gemini Insieme",
    },
    metaDescription: {
      en: "Run Claude, ChatGPT, and Gemini on the same task from VS Code. Shared workspace, disagreement protocol, persistent sessions. Three perspectives, one decision.",
      it: "Esegui Claude, ChatGPT e Gemini sullo stesso task da VS Code. Workspace condiviso, protocollo di disaccordo, sessioni persistenti. Tre prospettive, una decisione.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You trusted Claude's architecture recommendation. It looked solid. Two weeks into implementation, you hit a scaling issue the model didn't anticipate. A colleague ran the same question through GPT and got a different answer that accounted for the exact bottleneck you encountered. The knowledge existed. It lived in a different model. Running three models on the same question takes five minutes manually: copy context, switch to GPT's tab, paste, then Gemini, then read three responses and try to compare them without a shared reference. For a quick question, manageable. For a complex analysis where context matters, the copy-paste workflow falls apart fast.",
      it: "Hai seguito la raccomandazione architetturale di Claude. Sembrava solida. Due settimane dopo, durante l'implementazione, hai incontrato un problema di scalabilit\u00e0 che il modello non aveva previsto. Un collega ha posto la stessa domanda a GPT e ha ottenuto una risposta diversa che teneva conto dell'esatto collo di bottiglia che avevi incontrato. La conoscenza esisteva. Stava in un modello diverso. Eseguire tre modelli sulla stessa domanda richiede cinque minuti manualmente: copia il contesto, passa al tab di GPT, incolla, poi Gemini, poi leggi tre risposte e prova a confrontarle senza un riferimento condiviso. Per una domanda veloce, gestibile. Per un'analisi complessa dove il contesto conta, il workflow copia-incolla crolla in fretta.",
    },
    solution: {
      en: "LLM Arena VS runs Claude, ChatGPT (via Codex CLI), and Gemini from inside VS Code. A shared ARENA_WORKSPACE.md file keeps all three models working from the same context. Claude produces the primary analysis, identifies where it needs support, and calls the right subagent for each gap: GPT-5.2 Codex for coding, GPT-5.2 for abstract reasoning, Gemini Pro for deep multimodal analysis, Gemini Flash for fast lookups. When models disagree, a structured protocol surfaces the conflict, compares the reasoning chains, and gives you the information to decide. Sessions persist across days.",
      it: "LLM Arena VS esegue Claude, ChatGPT (via Codex CLI) e Gemini da dentro VS Code. Un file ARENA_WORKSPACE.md condiviso mantiene tutti e tre i modelli sullo stesso contesto. Claude produce l'analisi primaria, identifica dove serve supporto, e chiama il subagente giusto per ogni gap: GPT-5.2 Codex per il coding, GPT-5.2 per il ragionamento astratto, Gemini Pro per l'analisi multimodale profonda, Gemini Flash per lookup veloci. Quando i modelli sono in disaccordo, un protocollo strutturato fa emergere il conflitto, confronta le catene di ragionamento, e ti d\u00e0 le informazioni per decidere. Le sessioni persistono tra i giorni.",
    },
    result: {
      en: "When two models agree and one disagrees, you know exactly where to dig deeper. When all three disagree, you know the question needs more evidence before you commit. You stop relying on one model's confidence and start relying on consensus.",
      it: "Quando due modelli concordano e uno dissente, sai esattamente dove approfondire. Quando tutti e tre dissentono, sai che la questione richiede pi\u00f9 evidenze prima di impegnarti. Smetti di affidarti alla confidenza di un modello e inizi ad affidarti al consenso.",
    },
    whatsInside: [
      { en: "Shared workspace template (ARENA_WORKSPACE.md) for synchronized multi-model analysis", it: "Template workspace condiviso (ARENA_WORKSPACE.md) per analisi multi-modello sincronizzata" },
      { en: "Four CLI subagent patterns: GPT-5.2 Codex (coding), GPT-5.2 (reasoning), Gemini Pro (deep analysis), Gemini Flash (fast tasks)", it: "Quattro pattern subagente CLI: GPT-5.2 Codex (coding), GPT-5.2 (ragionamento), Gemini Pro (analisi profonda), Gemini Flash (task veloci)" },
      { en: "Structured disagreement protocol for resolving conflicts between models with evidence comparison", it: "Protocollo di disaccordo strutturato per risolvere conflitti tra modelli con confronto delle evidenze" },
      { en: "Persistent session management to continue multi-model analysis across days", it: "Gestione sessioni persistenti per continuare l'analisi multi-modello tra i giorni" },
      { en: "Quality gates checklist for validating integrated outputs before delivery", it: "Checklist quality gates per validare gli output integrati prima della consegna" },
    ],
    whoIsThisFor: [
      { en: "Developers making architecture decisions who want validation beyond one model's opinion", it: "Developer che prendono decisioni architetturali e vogliono validazione oltre l'opinione di un singolo modello" },
      { en: "Analysts producing high-stakes deliverables where a single AI blind spot is too risky", it: "Analisti che producono deliverable ad alto impatto dove un singolo punto cieco dell'AI \u00e8 troppo rischioso" },
      { en: "Researchers who need to triangulate AI perspectives on complex or ambiguous questions", it: "Ricercatori che devono triangolare le prospettive AI su domande complesse o ambigue" },
      { en: "Anyone who has been burned by trusting one model's confident-sounding wrong answer", it: "Chiunque sia stato scottato dall'aver creduto alla risposta sbagliata ma dal tono sicuro di un modello" },
    ],
    notFor: {
      en: "Users who only have Claude Code. You need API access or subscriptions to ChatGPT (Codex CLI) and Gemini as well.",
      it: "Utenti che hanno solo Claude Code. Servono anche accesso API o abbonamenti a ChatGPT (Codex CLI) e Gemini.",
    },
    beforeAfter: [
      {
        before: { en: "One model, one perspective. Its blind spots are your blind spots", it: "Un modello, una prospettiva. I suoi punti ciechi sono i tuoi punti ciechi" },
        after: { en: "Three models surface different angles. Blind spots in one get caught by another", it: "Tre modelli fanno emergere angoli diversi. I punti ciechi di uno vengono intercettati dagli altri" },
      },
      {
        before: { en: "Copy-paste context between ChatGPT, Claude, and Gemini browser tabs for each question", it: "Copia-incolla del contesto tra i tab di ChatGPT, Claude e Gemini per ogni domanda" },
        after: { en: "Shared workspace file keeps all models working from the same context automatically", it: "Il file workspace condiviso mantiene tutti i modelli sullo stesso contesto automaticamente" },
      },
      {
        before: { en: "Two models disagree and you guess which one is right based on gut feeling", it: "Due modelli sono in disaccordo e indovini chi ha ragione a sensazione" },
        after: { en: "Disagreement protocol compares reasoning chains and surfaces where the evidence diverges", it: "Il protocollo di disaccordo confronta le catene di ragionamento e fa emergere dove le evidenze divergono" },
      },
      {
        before: { en: "Multi-model work starts from scratch every session because context doesn't carry over", it: "Il lavoro multi-modello riparte da zero ogni sessione perch\u00e9 il contesto non si trasferisce" },
        after: { en: "Persistent sessions let you resume multi-model analysis across days without re-explaining", it: "Le sessioni persistenti permettono di riprendere l'analisi multi-modello tra i giorni senza ri-spiegare" },
      },
    ],
    faq: [
      {
        question: { en: "Do I need API keys for all three models?", it: "Servono chiavi API per tutti e tre i modelli?" },
        answer: {
          en: "You need Claude Code (which you already have), plus Codex CLI (free with ChatGPT Plus or an OpenAI API key) and Gemini CLI (free with a Google account). The skill works with two models as well: two gives you second-opinion validation, three gives you majority voting.",
          it: "Serve Claude Code (che hai gi\u00e0), pi\u00f9 Codex CLI (gratuito con ChatGPT Plus o una chiave API OpenAI) e Gemini CLI (gratuito con un account Google). La skill funziona anche con due modelli: due danno la validazione con seconda opinione, tre danno il voto a maggioranza.",
        },
      },
      {
        question: { en: "Does this run three separate sessions at the same time?", it: "Questo lancia tre sessioni separate contemporaneamente?" },
        answer: {
          en: "Claude is the primary analyst and orchestrator. It calls the other models as subagents via their CLIs when it needs a different perspective. The workflow is sequential, not parallel, so you're not burning three context windows at once.",
          it: "Claude \u00e8 l'analista primario e l'orchestratore. Chiama gli altri modelli come subagenti via le loro CLI quando serve una prospettiva diversa. Il workflow \u00e8 sequenziale, non parallelo, quindi non stai bruciando tre finestre di contesto contemporaneamente.",
        },
      },
      {
        question: { en: "What happens when models disagree?", it: "Cosa succede quando i modelli sono in disaccordo?" },
        answer: {
          en: "The disagreement protocol surfaces the conflict explicitly: what each model claims, what evidence supports each position, and where the reasoning diverges. You make the final call with full visibility into why they disagree instead of guessing which one sounds more convincing.",
          it: "Il protocollo di disaccordo fa emergere il conflitto esplicitamente: cosa afferma ogni modello, quali evidenze supportano ogni posizione, e dove il ragionamento diverge. Prendi la decisione finale con piena visibilit\u00e0 sul perch\u00e9 sono in disaccordo, invece di indovinare quale suona pi\u00f9 convincente.",
        },
      },
      {
        question: { en: "Can I customize which subagent gets called for what?", it: "Posso personalizzare quale subagente viene chiamato per cosa?" },
        answer: {
          en: "Yes. The subagent selector defines when to use each model based on task type and benchmarks. GPT-5.2 Codex for coding tasks, Gemini Pro for multimodal analysis, Gemini Flash for quick lookups. You can override the defaults to match your workflow.",
          it: "S\u00ec. Il selettore di subagenti definisce quando usare ogni modello in base al tipo di task e ai benchmark. GPT-5.2 Codex per task di coding, Gemini Pro per analisi multimodale, Gemini Flash per lookup veloci. Puoi sovrascrivere i default per adattarli al tuo workflow.",
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
      en: "The motion design knowledge Remotion docs don't teach you. 43 rule files.",
      it: "La conoscenza di motion design che i docs Remotion non insegnano. 43 file di regole.",
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
      en: "Remotion Best Practices - From Animated Slides to Real Videos",
      it: "Remotion Best Practices - Da slide animate a video veri",
    },
    metaDescription: {
      en: "43 rule files covering every Remotion API plus motion design principles from 12 production prompts. Spring presets, kinetic typography, narrative arcs, creative transitions.",
      it: "43 file di regole che coprono ogni API Remotion pi\u00f9 principi di motion design da 12 prompt di produzione. Preset spring, tipografia cinetica, archi narrativi, transizioni creative.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You installed Remotion, followed the docs, and your video renders. It also looks like a PowerPoint presentation that learned to move. Every element fades in at the same speed. Text appears and sits there. Transitions are basic cuts or dissolves. You know the video should look better but you don't know what \"better\" means in motion design terms. The Remotion API docs explain how spring() works. They don't explain when to use a spring with overshoot versus a damped settle, why staggered entries look alive and simultaneous ones look dead, or how to structure a sixty-second video so the viewer stays engaged past second fifteen.",
      it: "Hai installato Remotion, seguito i docs, e il tuo video renderizza. Sembra anche una presentazione PowerPoint che ha imparato a muoversi. Ogni elemento appare con un fade alla stessa velocit\u00e0. Il testo compare e resta l\u00ec. Le transizioni sono tagli base o dissolvenze. Sai che il video dovrebbe essere migliore ma non sai cosa significhi \"migliore\" in termini di motion design. I docs API di Remotion spiegano come funziona spring(). Non spiegano quando usare uno spring con overshoot rispetto a un assestamento smorzato, perch\u00e9 le entrate sfalsate sembrano vive e quelle simultanee sembrano morte, o come strutturare un video di sessanta secondi perch\u00e9 lo spettatore resti agganciato oltre il quindicesimo secondo.",
    },
    solution: {
      en: "Two layers of knowledge. Layer one covers every Remotion API: 36 rule files on spring(), interpolate(), Sequence, audio, video, 3D, fonts, charts, captions, transitions, and timing. Layer two is the creative gap: 6 motion design rule files with 69 principles extracted from analyzing 12 production-grade video prompts. When to use overshoot. How stagger timing works (3-8 frame initial delays, 8 frame intervals, 20 frame final gaps). Why breathing pauses between scenes keep the viewer's eye from fatiguing. How to build narrative arcs in 3, 4, 6, or 8 acts. Kinetic typography techniques: highlight boxes that scale on X, word insertion animations, stacked text at 0.8 line-height, stroke-to-fill wipes.",
      it: "Due livelli di conoscenza. Il primo copre ogni API Remotion: 36 file di regole su spring(), interpolate(), Sequence, audio, video, 3D, font, grafici, sottotitoli, transizioni e timing. Il secondo \u00e8 il gap creativo: 6 file di regole di motion design con 69 principi estratti dall'analisi di 12 prompt video production-grade. Quando usare l'overshoot. Come funziona il timing sfalsato (3-8 frame di ritardo iniziale, intervalli di 8 frame, 20 frame di gap finale). Perch\u00e9 le pause di breathing tra le scene evitano l'affaticamento visivo. Come costruire archi narrativi in 3, 4, 6 o 8 atti. Tecniche di tipografia cinetica: highlight box che scalano su X, animazioni di inserimento parole, testo sovrapposto a 0.8 di line-height, wipe stroke-to-fill.",
    },
    result: {
      en: "Your Remotion videos look like they were made by someone who understands motion design, not just React. Elements enter with spring curves that have personality. Text moves with kinetic energy. Scenes follow a narrative arc instead of a flat slideshow sequence. The gap between \"it renders\" and \"it looks professional\" closes.",
      it: "I tuoi video Remotion sembrano fatti da qualcuno che capisce il motion design, non solo React. Gli elementi entrano con curve spring che hanno personalit\u00e0. Il testo si muove con energia cinetica. Le scene seguono un arco narrativo invece di una sequenza piatta da slideshow. Il gap tra \"renderizza\" e \"sembra professionale\" si chiude.",
    },
    whatsInside: [
      { en: "36 API rule files covering every Remotion feature: spring(), interpolate(), Sequence, audio, video, 3D, fonts, charts, captions, maps, Lottie, GIFs", it: "36 file di regole API che coprono ogni funzionalit\u00e0 Remotion: spring(), interpolate(), Sequence, audio, video, 3D, font, grafici, sottotitoli, mappe, Lottie, GIF" },
      { en: "Motion design principles: spring strategy (overshoot vs damped), stagger timing formulas, breathing pauses, z-index as narrative tool", it: "Principi di motion design: strategia spring (overshoot vs smorzato), formule di timing sfalsato, pause di breathing, z-index come strumento narrativo" },
      { en: "Visual storytelling rules: narrative arcs (3/4/6/8 acts), pacing by scene type, progressive reveal, freeze frames, variable rhythm", it: "Regole di visual storytelling: archi narrativi (3/4/6/8 atti), pacing per tipo di scena, reveal progressivo, freeze frame, ritmo variabile" },
      { en: "Kinetic typography: highlight boxes (scaleX), word insertion, stacked text at 0.8 line-height, stroke-to-fill wipe, emphasis systems", it: "Tipografia cinetica: highlight box (scaleX), inserimento parole, testo sovrapposto a 0.8 line-height, wipe stroke-to-fill, sistemi di enfasi" },
      { en: "Component architecture: config-first structure, JSON-driven timelines, parametrized components, animation primitive hooks", it: "Architettura componenti: struttura config-first, timeline guidate da JSON, componenti parametrizzati, hook per primitive di animazione" },
    ],
    whoIsThisFor: [
      { en: "React developers using Remotion whose videos render correctly but look amateur", it: "Developer React che usano Remotion i cui video renderizzano correttamente ma sembrano amatoriali" },
      { en: "Content creators building programmatic video pipelines who need professional motion design output", it: "Content creator che costruiscono pipeline video programmatiche e servono output di motion design professionale" },
      { en: "Teams producing product demos, explainer videos, or social content with Remotion at scale", it: "Team che producono demo prodotto, video esplicativi o contenuti social con Remotion su scala" },
      { en: "Anyone who watched a TopView.ai ad and wondered how to get that level of quality from code", it: "Chiunque abbia visto una pubblicit\u00e0 TopView.ai e si sia chiesto come ottenere quel livello di qualit\u00e0 dal codice" },
    ],
    notFor: {
      en: "Users of After Effects, DaVinci Resolve, or other timeline-based editors. Remotion is code-based: you write React components, not drag clips.",
      it: "Utenti di After Effects, DaVinci Resolve o altri editor basati su timeline. Remotion \u00e8 basato su codice: scrivi componenti React, non trascini clip.",
    },
    beforeAfter: [
      {
        before: { en: "Linear animations everywhere. Every element moves at the same constant speed", it: "Animazioni lineari ovunque. Ogni elemento si muove alla stessa velocit\u00e0 costante" },
        after: { en: "Spring presets with personality: overshoot for energy, damped for elegance, stagger for rhythm", it: "Preset spring con personalit\u00e0: overshoot per energia, smorzato per eleganza, sfalsamento per ritmo" },
      },
      {
        before: { en: "Flat sequence: scene one, scene two, scene three. No tension, no arc, no pacing", it: "Sequenza piatta: scena uno, scena due, scena tre. Nessuna tensione, nessun arco, nessun pacing" },
        after: { en: "Narrative arcs with hooks, rising tension, climax moments, breathing pauses, and resolution", it: "Archi narrativi con hook, tensione crescente, momenti di climax, pause di breathing e risoluzione" },
      },
      {
        before: { en: "Text fades in and sits there. No kinetic energy. Looks like a slideshow", it: "Il testo appare in fade e resta l\u00ec. Nessuna energia cinetica. Sembra una slideshow" },
        after: { en: "Kinetic typography: highlight boxes that scale, words that insert character by character, stroke-to-fill wipes", it: "Tipografia cinetica: highlight box che scalano, parole che si inseriscono carattere per carattere, wipe stroke-to-fill" },
      },
      {
        before: { en: "Basic cuts between scenes. No visual continuity, no creative transitions", it: "Tagli base tra le scene. Nessuna continuit\u00e0 visiva, nessuna transizione creativa" },
        after: { en: "Camera push, Ken Burns, diagonal slice, center-open mask, 3D rotateY flip, synchronized slides", it: "Camera push, Ken Burns, taglio diagonale, maschera center-open, flip 3D rotateY, slide sincronizzate" },
      },
    ],
    faq: [
      {
        question: { en: "Do I need to know React to use this?", it: "Devo conoscere React per usare questo?" },
        answer: {
          en: "Yes, basic React knowledge is required. Remotion videos are React components rendered frame by frame. You should be comfortable with JSX, props, hooks, and component composition. The skill handles the motion design knowledge. You handle the React fundamentals.",
          it: "S\u00ec, serve conoscenza base di React. I video Remotion sono componenti React renderizzati frame per frame. Dovresti essere a tuo agio con JSX, props, hook e composizione di componenti. La skill gestisce la conoscenza di motion design. Tu gestisci i fondamentali React.",
        },
      },
      {
        question: { en: "Is Remotion itself free?", it: "Remotion stesso \u00e8 gratuito?" },
        answer: {
          en: "Remotion is free for individuals. Companies with three or more employees need a paid license from remotion.dev. This skill is a separate purchase that teaches Claude how to use Remotion well. It doesn't include Remotion itself.",
          it: "Remotion \u00e8 gratuito per uso individuale. Le aziende con tre o pi\u00f9 dipendenti hanno bisogno di una licenza a pagamento da remotion.dev. Questa skill \u00e8 un acquisto separato che insegna a Claude come usare Remotion bene. Non include Remotion stesso.",
        },
      },
      {
        question: { en: "Where did the creative motion design rules come from?", it: "Da dove vengono le regole di creative motion design?" },
        answer: {
          en: "From reverse-engineering 12 production-grade video prompts used by TopView.ai, a platform that generates short-form video ads. The 69 creative rules capture patterns that make the difference between developer-grade and designer-grade output: stagger timing, breathing rhythm, kinetic typography techniques, transition choices.",
          it: "Dal reverse-engineering di 12 prompt video production-grade usati da TopView.ai, una piattaforma che genera video pubblicitari short-form. Le 69 regole creative catturano i pattern che fanno la differenza tra output di livello sviluppatore e output di livello designer: timing sfalsato, ritmo di breathing, tecniche di tipografia cinetica, scelte di transizione.",
        },
      },
      {
        question: { en: "How does this work with Claude Code?", it: "Come funziona con Claude Code?" },
        answer: {
          en: "Install the skill files in your .claude/skills/ folder. When you work on Remotion code, Claude automatically loads the relevant rules: API rules for the features you're using, creative rules for the visual decisions. You describe the video you want. Claude writes the code using the right spring curves, stagger patterns, and narrative structure.",
          it: "Installa i file della skill nella cartella .claude/skills/. Quando lavori su codice Remotion, Claude carica automaticamente le regole rilevanti: regole API per le funzionalit\u00e0 che stai usando, regole creative per le decisioni visive. Descrivi il video che vuoi. Claude scrive il codice usando le curve spring giuste, i pattern di sfalsamento e la struttura narrativa corretta.",
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
      en: "Stop prompting image AI like a search engine. Brief it like a Creative Director.",
      it: "Smettila di promptare l'AI visiva come un motore di ricerca. Briefala come un Direttore Creativo.",
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
      en: "Nano Banana Guru - Visual AI Prompt Engineering That Works",
      it: "Nano Banana Guru - Prompt Engineering per AI Visiva Che Funziona",
    },
    metaDescription: {
      en: "Go from generic AI images to professional visual artifacts. 8-area prompt canvas, 26 production examples, proactive trigger system. For Google Nano Banana Pro.",
      it: "Passa da immagini AI generiche ad artefatti visivi professionali. Canvas prompt a 8 aree, 26 esempi di produzione, sistema trigger proattivo. Per Google Nano Banana Pro.",
    },
    averageRating: 0,
    reviewCount: 0,
    problem: {
      en: "You type \"futuristic city, neon, 4k, cinematic\" into an image generator and get something that looks like every other AI image on the internet. You try again with more keywords. Same energy. You spend twenty minutes adding and removing tags, regenerating the entire image each time, and the results stay generic. The model can produce professional infographics, dashboards with accurate data visualization, comic strips with consistent characters, and architectural renders from floor plans. You don't know any of that because nobody taught you how to brief it. You're prompting a visual reasoning engine like it's a search bar.",
      it: "Scrivi \"citt\u00e0 futuristica, neon, 4k, cinematico\" in un generatore di immagini e ottieni qualcosa che sembra identico a ogni altra immagine AI su internet. Riprovi con pi\u00f9 keyword. Stessa energia. Passi venti minuti ad aggiungere e togliere tag, rigenerando l'intera immagine ogni volta, e i risultati restano generici. Il modello pu\u00f2 produrre infografiche professionali, dashboard con visualizzazione dati accurata, fumetti con personaggi consistenti, e render architettonici da planimetrie. Non sai nulla di tutto ci\u00f2 perch\u00e9 nessuno ti ha insegnato come briefarlo. Stai promptando un motore di ragionamento visivo come se fosse una barra di ricerca.",
    },
    solution: {
      en: "An 8-area structured prompt canvas that turns vague intentions into precise briefs: Intent and Goal, Subject, Work Surface (dashboard? comic? blueprint?), Layout with spatial ratios, Style with hex color codes, Components, Constraints (what NOT to do), and Context (the \"why\" that helps the model make creative decisions). Twenty-six production-ready examples covering text rendering, character consistency across scenes, identity locking with up to 14 reference images, 2D-to-3D dimensional translation, advanced editing (colorization, localization, seasonal adaptation), and structural control from sketches. A proactive trigger detection system that watches your conversation and suggests relevant capabilities before you ask. JSON output format for precision.",
      it: "Un canvas prompt strutturato a 8 aree che trasforma intenzioni vaghe in brief precisi: Intento e Obiettivo, Soggetto, Superficie di Lavoro (dashboard? fumetto? planimetria?), Layout con proporzioni spaziali, Stile con codici colore hex, Componenti, Vincoli (cosa NON fare), e Contesto (il \"perch\u00e9\" che aiuta il modello a prendere decisioni creative). Ventisei esempi production-ready che coprono rendering testo, consistenza personaggi tra scene, identity locking con fino a 14 immagini di riferimento, traduzione dimensionale 2D-3D, editing avanzato (colorizzazione, localizzazione, adattamento stagionale), e controllo strutturale da schizzi. Un sistema proattivo di rilevamento trigger che osserva la conversazione e suggerisce capacit\u00e0 rilevanti prima che tu le chieda. Formato output JSON per la precisione.",
    },
    result: {
      en: "You describe a dashboard for an earnings report and get one with accurate chart layouts, KPI cards, and proper typography hierarchy. You provide a floor plan sketch and get a photorealistic interior render. You upload a character reference and get consistent illustrations across a ten-image carousel. The gap between \"AI-generated image\" and \"professional visual artifact\" closes because you're communicating intent, not throwing keywords.",
      it: "Descrivi una dashboard per un report finanziario e ne ottieni una con layout grafici accurati, card KPI e gerarchia tipografica corretta. Fornisci lo schizzo di una planimetria e ottieni un render d'interni fotorealistico. Carichi un riferimento personaggio e ottieni illustrazioni consistenti lungo un carosello di dieci immagini. Il gap tra \"immagine generata dall'AI\" e \"artefatto visivo professionale\" si chiude perch\u00e9 stai comunicando intento, non lanciando keyword.",
    },
    whatsInside: [
      { en: "8-area prompt canvas: structured framework that works for any visual artifact from infographics to storyboards", it: "Canvas prompt a 8 aree: framework strutturato che funziona per qualsiasi artefatto visivo, dalle infografiche agli storyboard" },
      { en: "26 production-ready examples covering text rendering, character consistency, identity locking, 2D-to-3D, editing, and structural control", it: "26 esempi production-ready che coprono rendering testo, consistenza personaggi, identity locking, 2D-3D, editing e controllo strutturale" },
      { en: "Proactive trigger detection matrix: the skill suggests capabilities based on what you're discussing, before you ask", it: "Matrice proattiva di rilevamento trigger: la skill suggerisce capacit\u00e0 basandosi su ci\u00f2 di cui stai parlando, prima che tu chieda" },
      { en: "JSON work surface templates for precision prompting with spatial ratios, hex colors, and typography specs", it: "Template JSON per superfici di lavoro con proporzioni spaziali, colori hex e specifiche tipografiche" },
      { en: "Video-to-carousel workflow: extract key concepts from YouTube videos and generate cover images plus concept cards", it: "Workflow video-to-carousel: estrai concetti chiave da video YouTube e genera immagini di copertina pi\u00f9 concept card" },
    ],
    whoIsThisFor: [
      { en: "Content creators who need infographics, thumbnails, and social visuals that look designed, not generated", it: "Content creator che servono infografiche, thumbnail e visual social che sembrino progettati, non generati" },
      { en: "Marketers producing visual assets at scale who are tired of generic AI output and manual re-rolling", it: "Marketer che producono asset visivi su scala e sono stanchi dell'output AI generico e della rigenerazione manuale" },
      { en: "Developers and product teams creating storyboards, wireframe-to-render conversions, and UI mockups", it: "Developer e team prodotto che creano storyboard, conversioni wireframe-to-render e mockup UI" },
      { en: "Anyone who knows Nano Banana Pro is powerful but hasn't figured out how to unlock its structured visual capabilities", it: "Chiunque sappia che Nano Banana Pro \u00e8 potente ma non abbia capito come sbloccare le sue capacit\u00e0 visive strutturate" },
    ],
    notFor: {
      en: "Users who need photorealistic photography. Nano Banana Pro excels at structured visual artifacts (dashboards, diagrams, infographics, comics), not at replacing a camera.",
      it: "Utenti che necessitano di fotografia fotorealistica. Nano Banana Pro eccelle negli artefatti visivi strutturati (dashboard, diagrammi, infografiche, fumetti), non nel sostituire una macchina fotografica.",
    },
    beforeAfter: [
      {
        before: { en: "Keyword soup: \"city, neon, 4k, cinematic.\" Output looks like every other AI image", it: "Zuppa di keyword: \"citt\u00e0, neon, 4k, cinematico.\" L'output sembra identico a ogni altra immagine AI" },
        after: { en: "Structured 8-area brief with intent, spatial layout, hex colors, and constraints. Output matches your vision", it: "Brief strutturato a 8 aree con intento, layout spaziale, colori hex e vincoli. L'output corrisponde alla tua visione" },
      },
      {
        before: { en: "Image is 80% right but one detail is wrong. You regenerate from scratch and lose everything", it: "L'immagine \u00e8 corretta all'80% ma un dettaglio \u00e8 sbagliato. Rigeneri da zero e perdi tutto" },
        after: { en: "Conversational editing: \"change the background to sunset and make the text neon blue.\" The 80% stays", it: "Editing conversazionale: \"cambia lo sfondo al tramonto e rendi il testo blu neon.\" L'80% resta" },
      },
      {
        before: { en: "You had no idea the model could render accurate data visualizations from numbers you provide", it: "Non avevi idea che il modello potesse renderizzare visualizzazioni dati accurate dai numeri che fornisci" },
        after: { en: "26 examples reveal capabilities you didn't know existed: data viz, identity locking, 2D-to-3D, sprite sheets", it: "26 esempi rivelano capacit\u00e0 che non sapevi esistessero: data viz, identity locking, 2D-3D, sprite sheet" },
      },
      {
        before: { en: "Character looks different in every image of a series. No visual consistency across a carousel", it: "Il personaggio sembra diverso in ogni immagine di una serie. Nessuna consistenza visiva in un carosello" },
        after: { en: "Identity locking with reference images keeps characters consistent across ten or more images", it: "L'identity locking con immagini di riferimento mantiene i personaggi consistenti su dieci o pi\u00f9 immagini" },
      },
    ],
    faq: [
      {
        question: { en: "Do I need a Google API key to use this?", it: "Serve una chiave API Google per usare questo?" },
        answer: {
          en: "Nano Banana Pro is available free in Google AI Studio and via the Gemini API. You need a Gemini Advanced account for image generation. The skill teaches you how to prompt effectively regardless of which interface you use.",
          it: "Nano Banana Pro \u00e8 disponibile gratuitamente in Google AI Studio e tramite l'API Gemini. Serve un account Gemini Advanced per la generazione immagini. La skill ti insegna come promptare efficacemente indipendentemente dall'interfaccia che usi.",
        },
      },
      {
        question: { en: "Does the 8-area canvas work with other image models like DALL-E or Midjourney?", it: "Il canvas a 8 aree funziona con altri modelli immagine come DALL-E o Midjourney?" },
        answer: {
          en: "The structured briefing approach and creative director mindset transfer to any model. The 26 production examples and trigger detection matrix are specifically tuned for Nano Banana Pro's seven visual reasoning engines. Other models will benefit from the canvas structure but won't match the same capabilities.",
          it: "L'approccio di briefing strutturato e la mentalit\u00e0 da direttore creativo si trasferiscono a qualsiasi modello. I 26 esempi production e la matrice di rilevamento trigger sono specificamente tarati sui sette motori di ragionamento visivo di Nano Banana Pro. Altri modelli beneficeranno della struttura del canvas ma non replicheranno le stesse capacit\u00e0.",
        },
      },
      {
        question: { en: "What is the trigger detection system?", it: "Cos'\u00e8 il sistema di rilevamento trigger?" },
        answer: {
          en: "While you work, the skill monitors your conversation for patterns that match Nano Banana Pro capabilities. Mention \"carousel\" and it suggests identity locking for character consistency. Mention \"data\" and it suggests the data visualization engine with search grounding. You discover capabilities in context instead of reading documentation.",
          it: "Mentre lavori, la skill monitora la conversazione per pattern che corrispondono alle capacit\u00e0 di Nano Banana Pro. Menzioni \"carosello\" e suggerisce l'identity locking per la consistenza dei personaggi. Menzioni \"dati\" e suggerisce il motore di visualizzazione dati con search grounding. Scopri le capacit\u00e0 nel contesto invece di leggere documentazione.",
        },
      },
      {
        question: { en: "How does the video-to-carousel workflow work?", it: "Come funziona il workflow video-to-carousel?" },
        answer: {
          en: "Give it a YouTube video. Gemini extracts the key concepts. Nano Banana Pro generates a cover image and up to ten concept cards with consistent visual style. You get a ready-to-post carousel from a video in minutes instead of hours of manual design.",
          it: "Dagli un video YouTube. Gemini estrae i concetti chiave. Nano Banana Pro genera un'immagine di copertina e fino a dieci concept card con stile visivo consistente. Ottieni un carosello pronto per la pubblicazione da un video in minuti invece che ore di design manuale.",
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
