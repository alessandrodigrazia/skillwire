import type { ChangelogEntry } from "./skills";

type L = { en: string; it: string };

export interface BundleSkillSummary {
  slug: string;
  name: string;
  emoji: string;
  price: number;
  tagline: L;
}

export interface BundleDetail {
  slug: string;
  name: string;
  emoji: string;
  tagline: L;
  description: L;
  skillSummaries: BundleSkillSummary[];
  originalPrice: number;
  bundlePrice: number;
  savingsPercent: number;
  badge: string | null;
  version: string;
  changelog: ChangelogEntry[];
  whoIsThisFor: L[];
  faq: { question: L; answer: L }[];
  metaTitle: L;
  metaDescription: L;
}

/* Resolve a localized value */
export function t(val: L, locale: string): string {
  return locale === "it" ? val.it : val.en;
}

export const bundles: BundleDetail[] = [
  /* ─── Bundle 1: B2B Sales Pro System ─── */
  {
    slug: "b2b-sales-pro",
    name: "B2B Sales Pro System",
    emoji: "\uD83C\uDFAF",
    tagline: {
      en: "The complete B2B enterprise sales arsenal \u2014 from first call to signed contract.",
      it: "L\u2019intero arsenale del venditore B2B enterprise \u2014 dalla prima call alla firma del contratto.",
    },
    description: {
      en: "These 4 skills cover the entire B2B sales cycle. Research your prospect in depth (Deep Research Agent), prepare a structured pitch following a proven enterprise methodology (Sales Methodology Pro), stress-test your proposal before presenting it (Janus), and build C-level presentations that close deals (B2B Presentation Builder). Together they form a complete system \u2014 not isolated tools.",
      it: "Queste 4 skill coprono l\u2019intero ciclo di vendita B2B. Ricerca approfondita sul prospect (Deep Research Agent), preparazione di un pitch strutturato con metodologia enterprise collaudata (Sales Methodology Pro), stress-test della proposta prima di presentarla (Janus), e creazione di presentazioni C-level che chiudono i deal (B2B Presentation Builder). Insieme formano un sistema completo \u2014 non strumenti isolati.",
    },
    skillSummaries: [
      {
        slug: "sales-methodology-pro",
        name: "Sales Methodology Pro",
        emoji: "\uD83D\uDCCA",
        price: 149,
        tagline: {
          en: "Structured enterprise sales methodology for complex B2B deals.",
          it: "Metodologia di vendita enterprise strutturata per deal B2B complessi.",
        },
      },
      {
        slug: "b2b-presentation-builder",
        name: "B2B Presentation Builder",
        emoji: "\uD83D\uDCBB",
        price: 79,
        tagline: {
          en: "Build C-level presentations with ROI focus and multi-persona frameworks.",
          it: "Crea presentazioni C-level con focus ROI e framework multi-persona.",
        },
      },
      {
        slug: "janus",
        name: "Janus",
        emoji: "\uD83D\uDD2E",
        price: 29,
        tagline: {
          en: "Critical analysis sparring partner that stress-tests your ideas and proposals.",
          it: "Sparring partner di analisi critica che stress-testa le tue idee e proposte.",
        },
      },
      {
        slug: "deep-research-agent",
        name: "Deep Research Agent",
        emoji: "\uD83D\uDD0D",
        price: 49,
        tagline: {
          en: "Multi-source deep research with citations and structured reports.",
          it: "Ricerca approfondita multi-fonte con citazioni e report strutturati.",
        },
      },
    ],
    originalPrice: 306,
    bundlePrice: 249,
    savingsPercent: 19,
    badge: "flagship",
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          {
            en: "Initial release with 4 complementary B2B sales skills.",
            it: "Rilascio iniziale con 4 skill complementari per vendita B2B.",
          },
        ],
      },
    ],
    whoIsThisFor: [
      {
        en: "Sales managers running complex B2B deals (\u20AC50K+)",
        it: "Sales manager che gestiscono deal B2B complessi (\u20AC50K+)",
      },
      {
        en: "VP Sales and CROs implementing structured sales methodology",
        it: "VP Sales e CRO che implementano metodologie di vendita strutturate",
      },
      {
        en: "Enterprise sales teams with 3-18 month sales cycles",
        it: "Team di vendita enterprise con cicli di vendita 3-18 mesi",
      },
      {
        en: "Sales consultants building proposals for C-level buyers",
        it: "Consulenti di vendita che creano proposte per buyer C-level",
      },
    ],
    faq: [
      {
        question: {
          en: "Do I need all 4 skills or can I buy them individually?",
          it: "Ho bisogno di tutte e 4 le skill o posso comprarle singolarmente?",
        },
        answer: {
          en: "Each skill works independently, but the bundle is designed as a complete system. The sales methodology feeds into the presentation builder, Janus validates your approach, and the research agent powers everything with data.",
          it: "Ogni skill funziona in modo indipendente, ma il bundle \u00e8 progettato come un sistema completo. La metodologia di vendita alimenta il presentation builder, Janus valida il tuo approccio, e il research agent alimenta tutto con i dati.",
        },
      },
      {
        question: {
          en: "Is this suitable for small businesses or only enterprise?",
          it: "Va bene per piccole aziende o solo per enterprise?",
        },
        answer: {
          en: "The methodology is enterprise-grade but applies to any structured B2B sale. If your deals involve multiple stakeholders and presentations, this bundle will help.",
          it: "La metodologia \u00e8 enterprise-grade ma si applica a qualsiasi vendita B2B strutturata. Se i tuoi deal coinvolgono pi\u00f9 stakeholder e presentazioni, questo bundle ti sar\u00e0 utile.",
        },
      },
    ],
    metaTitle: {
      en: "B2B Sales Pro System \u2014 Complete Enterprise Sales Toolkit",
      it: "B2B Sales Pro System \u2014 Toolkit Completo Vendita Enterprise",
    },
    metaDescription: {
      en: "4 professional skills for B2B enterprise sales: methodology, presentations, critical analysis, and deep research. Save 19%.",
      it: "4 skill professionali per vendita B2B enterprise: metodologia, presentazioni, analisi critica e ricerca approfondita. Risparmia il 19%.",
    },
  },

  /* ─── Bundle 2: Career & Life Navigator ─── */
  {
    slug: "career-navigator",
    name: "Career & Life Navigator",
    emoji: "\uD83E\uDDED",
    tagline: {
      en: "AI coach for professionals in transition and students choosing their future.",
      it: "Coach AI per professionisti in transizione e studenti che scelgono il futuro.",
    },
    description: {
      en: "These 4 skills cover the entire career journey \u2014 from understanding who you are (Vera Career Coach), to choosing the right path (SchoolPath AI), to presenting yourself effectively (CV Guru), to making sure your writing sounds like you, not a robot (HumanWriter). Whether you\u2019re a professional in transition or a parent guiding your child\u2019s future, this bundle gives you a complete career toolkit.",
      it: "Queste 4 skill coprono l\u2019intero percorso di carriera \u2014 dal capire chi sei (Vera Career Coach), alla scelta del percorso giusto (SchoolPath AI), al presentarti in modo efficace (CV Guru), all\u2019assicurarti che i tuoi testi suonino come te, non come un robot (HumanWriter). Che tu sia un professionista in transizione o un genitore che guida il futuro del proprio figlio, questo bundle ti offre un toolkit completo per la carriera.",
    },
    skillSummaries: [
      {
        slug: "ask-to-vera",
        name: "Vera Career Coach",
        emoji: "\uD83C\uDF1F",
        price: 49,
        tagline: {
          en: "AI career & purpose coach for professionals in transition.",
          it: "Career & purpose coach AI per professionisti in transizione.",
        },
      },
      {
        slug: "ask-to-andrew",
        name: "SchoolPath AI",
        emoji: "\uD83C\uDF93",
        price: 29,
        tagline: {
          en: "AI guidance counselor for Italian students choosing their educational path.",
          it: "Orientatore AI per studenti italiani che scelgono il proprio percorso formativo.",
        },
      },
      {
        slug: "cv-guru",
        name: "CV Guru",
        emoji: "\uD83D\uDCDD",
        price: 19,
        tagline: {
          en: "CV optimization and interview preparation with ATS-friendly formatting.",
          it: "Ottimizzazione CV e preparazione colloqui con formattazione ATS-friendly.",
        },
      },
      {
        slug: "human-writer",
        name: "HumanWriter",
        emoji: "\u270D\uFE0F",
        price: 29,
        tagline: {
          en: "Transform AI-generated text into authentic, human-sounding writing.",
          it: "Trasforma testi generati dall\u2019AI in scrittura autentica e dal suono umano.",
        },
      },
    ],
    originalPrice: 126,
    bundlePrice: 79,
    savingsPercent: 37,
    badge: "popular",
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          {
            en: "Initial release with 4 career-focused skills.",
            it: "Rilascio iniziale con 4 skill focalizzate sulla carriera.",
          },
        ],
      },
    ],
    whoIsThisFor: [
      {
        en: "Professionals aged 25-55 in career transition",
        it: "Professionisti 25-55 anni in transizione di carriera",
      },
      {
        en: "Parents guiding their children\u2019s educational choices (ages 12-18)",
        it: "Genitori che guidano le scelte formative dei figli (12-18 anni)",
      },
      {
        en: "Career counselors looking for an AI-powered tool",
        it: "Career counselor che cercano uno strumento potenziato dall\u2019AI",
      },
      {
        en: "Schools and educational institutions",
        it: "Scuole e istituzioni educative",
      },
    ],
    faq: [
      {
        question: {
          en: "Can I use the career coaching skills in Italian?",
          it: "Posso usare le skill di career coaching in italiano?",
        },
        answer: {
          en: "Yes! All skills in this bundle are fully bilingual (English and Italian). Vera and SchoolPath AI were specifically designed for the Italian education and job market.",
          it: "S\u00ec! Tutte le skill in questo bundle sono completamente bilingui (inglese e italiano). Vera e SchoolPath AI sono state progettate specificamente per il mercato del lavoro e dell\u2019istruzione italiano.",
        },
      },
      {
        question: {
          en: "Is SchoolPath AI suitable for university students too?",
          it: "SchoolPath AI va bene anche per studenti universitari?",
        },
        answer: {
          en: "SchoolPath AI focuses on middle and high school students choosing their educational path. For university students and professionals, Vera Career Coach is the right fit.",
          it: "SchoolPath AI si concentra sugli studenti delle medie e superiori che scelgono il percorso formativo. Per studenti universitari e professionisti, Vera Career Coach \u00e8 la scelta giusta.",
        },
      },
    ],
    metaTitle: {
      en: "Career & Life Navigator \u2014 Complete Career Coaching Toolkit",
      it: "Career & Life Navigator \u2014 Toolkit Completo di Career Coaching",
    },
    metaDescription: {
      en: "4 AI-powered skills for career coaching, school guidance, CV optimization, and authentic writing. Save 37%.",
      it: "4 skill AI per career coaching, orientamento scolastico, ottimizzazione CV e scrittura autentica. Risparmia il 37%.",
    },
  },

  /* ─── Bundle 3: n8n Power Pack ─── */
  {
    slug: "n8n-power-pack",
    name: "n8n Power Pack",
    emoji: "\u26A1",
    tagline: {
      en: "1,500+ workflows, complete docs, and an AI expert for your n8n automations.",
      it: "1.500+ workflow, documentazione completa e un esperto AI per le tue automazioni n8n.",
    },
    description: {
      en: "Everything you need to master n8n automation with Claude Code. Create workflows with an AI expert that knows every n8n node (n8n Workflow Expert), browse complete documentation without leaving your editor (n8n Docs Live), access 1,486 real-world templates organized by service (n8n Workflow Repository), and validate your workflows before deploying (Iterative Self-Critique). Stop building workflows from scratch \u2014 start with a proven foundation.",
      it: "Tutto ci\u00f2 che serve per padroneggiare l\u2019automazione n8n con Claude Code. Crea workflow con un esperto AI che conosce ogni nodo n8n (n8n Workflow Expert), consulta la documentazione completa senza uscire dall\u2019editor (n8n Docs Live), accedi a 1.486 template reali organizzati per servizio (n8n Workflow Repository), e valida i tuoi workflow prima del deploy (Iterative Self-Critique). Smetti di costruire workflow da zero \u2014 parti da una base collaudata.",
    },
    skillSummaries: [
      {
        slug: "n8n-ai-workflow-expert",
        name: "n8n Workflow Expert",
        emoji: "\uD83E\uDD16",
        price: 39,
        tagline: {
          en: "AI expert for creating and optimizing n8n workflows.",
          it: "Esperto AI per creare e ottimizzare workflow n8n.",
        },
      },
      {
        slug: "n8n-docs-live",
        name: "n8n Docs Live",
        emoji: "\uD83D\uDCDA",
        price: 19,
        tagline: {
          en: "Complete n8n documentation accessible directly from your editor.",
          it: "Documentazione n8n completa accessibile direttamente dal tuo editor.",
        },
      },
      {
        slug: "n8n-workflow-repository",
        name: "n8n Workflow Repository",
        emoji: "\uD83D\uDCC2",
        price: 29,
        tagline: {
          en: "1,486 real-world workflow templates organized by service.",
          it: "1.486 template di workflow reali organizzati per servizio.",
        },
      },
      {
        slug: "iterative-self-critique",
        name: "Iterative Self-Critique",
        emoji: "\uD83D\uDD04",
        price: 19,
        tagline: {
          en: "Iterative validation for complex planning tasks and workflows.",
          it: "Validazione iterativa per task di planning complessi e workflow.",
        },
      },
    ],
    originalPrice: 106,
    bundlePrice: 69,
    savingsPercent: 35,
    badge: "new",
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          {
            en: "Initial release with 4 n8n automation skills.",
            it: "Rilascio iniziale con 4 skill per automazione n8n.",
          },
        ],
      },
    ],
    whoIsThisFor: [
      {
        en: "n8n users who build automations with Claude Code",
        it: "Utenti n8n che creano automazioni con Claude Code",
      },
      {
        en: "Freelancers and agencies building automation for clients",
        it: "Freelancer e agenzie che costruiscono automazioni per i clienti",
      },
      {
        en: "No-code developers looking to scale their workflow library",
        it: "Sviluppatori no-code che vogliono scalare la loro libreria di workflow",
      },
      {
        en: "Tech teams automating internal processes",
        it: "Team tecnici che automatizzano processi interni",
      },
    ],
    faq: [
      {
        question: {
          en: "Do I need to know n8n to use this bundle?",
          it: "Devo conoscere n8n per usare questo bundle?",
        },
        answer: {
          en: "Basic familiarity with n8n helps, but the Workflow Expert skill guides you step by step. The Docs Live skill gives you instant access to documentation for any node.",
          it: "Una familiarit\u00e0 di base con n8n aiuta, ma la skill Workflow Expert ti guida passo dopo passo. La skill Docs Live ti d\u00e0 accesso immediato alla documentazione di ogni nodo.",
        },
      },
      {
        question: {
          en: "Are the 1,486 templates ready to use or do they need customization?",
          it: "I 1.486 template sono pronti all\u2019uso o richiedono personalizzazione?",
        },
        answer: {
          en: "Templates are real-world workflows that serve as starting points. Most need minor adjustments (credentials, specific parameters) but the structure and logic are production-ready.",
          it: "I template sono workflow reali che servono come punto di partenza. La maggior parte richiede piccole modifiche (credenziali, parametri specifici) ma la struttura e la logica sono production-ready.",
        },
      },
    ],
    metaTitle: {
      en: "n8n Power Pack \u2014 Complete n8n Automation Toolkit",
      it: "n8n Power Pack \u2014 Toolkit Completo per Automazione n8n",
    },
    metaDescription: {
      en: "4 skills for n8n automation: workflow expert, live docs, 1,486 templates, and validation. Save 35%.",
      it: "4 skill per automazione n8n: esperto workflow, docs live, 1.486 template e validazione. Risparmia il 35%.",
    },
  },

  /* ─── Bundle 4: Claude Code Mastery ─── */
  {
    slug: "claude-code-mastery",
    name: "Claude Code Mastery",
    emoji: "\uD83D\uDE80",
    tagline: {
      en: "Everything you need to master Claude Code \u2014 skills, orchestration, multi-AI.",
      it: "Tutto quello che serve per padroneggiare Claude Code \u2014 skill, orchestrazione, multi-AI.",
    },
    description: {
      en: "Go from basic Claude Code user to power user. Learn to create your own skills (Skill Creator Guru), manage persistent memory across sessions (Memory Manager), orchestrate multiple AI agents on complex projects (MaIA), run multi-AI workflows combining Claude, GPT, and Gemini (LLM Arena VS), and validate your outputs with iterative self-critique. This bundle turns Claude Code into a professional-grade development platform.",
      it: "Passa da utente base a power user di Claude Code. Impara a creare le tue skill (Skill Creator Guru), gestisci la memoria persistente tra sessioni (Memory Manager), orchestra pi\u00f9 agenti AI su progetti complessi (MaIA), esegui workflow multi-AI combinando Claude, GPT e Gemini (LLM Arena VS), e valida i tuoi output con self-critique iterativo. Questo bundle trasforma Claude Code in una piattaforma di sviluppo professionale.",
    },
    skillSummaries: [
      {
        slug: "skill-creator-guru",
        name: "Skill Creator Guru",
        emoji: "\uD83D\uDEE0\uFE0F",
        price: 19,
        tagline: {
          en: "Comprehensive guide for creating effective Claude Code skills.",
          it: "Guida completa per creare skill efficaci per Claude Code.",
        },
      },
      {
        slug: "memory-manager",
        name: "Memory Manager",
        emoji: "\uD83E\uDDE0",
        price: 9,
        tagline: {
          en: "Persistent cross-session memory system for Claude Code.",
          it: "Sistema di memoria persistente cross-session per Claude Code.",
        },
      },
      {
        slug: "maia",
        name: "MaIA",
        emoji: "\uD83D\uDD17",
        price: 19,
        tagline: {
          en: "Multi-Agent Intelligence Architecture for complex projects.",
          it: "Architettura Multi-Agent Intelligence per progetti complessi.",
        },
      },
      {
        slug: "llm-arena-vs",
        name: "LLM Arena VS",
        emoji: "\u2694\uFE0F",
        price: 9,
        tagline: {
          en: "Multi-AI orchestration combining Claude, GPT, and Gemini.",
          it: "Orchestrazione multi-AI che combina Claude, GPT e Gemini.",
        },
      },
      {
        slug: "iterative-self-critique",
        name: "Iterative Self-Critique",
        emoji: "\uD83D\uDD04",
        price: 19,
        tagline: {
          en: "Iterative validation for complex planning tasks.",
          it: "Validazione iterativa per task di planning complessi.",
        },
      },
    ],
    originalPrice: 75,
    bundlePrice: 39,
    savingsPercent: 48,
    badge: "best-seller",
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          {
            en: "Initial release with 5 Claude Code power-user skills.",
            it: "Rilascio iniziale con 5 skill per power-user Claude Code.",
          },
        ],
      },
    ],
    whoIsThisFor: [
      {
        en: "Claude Code power users who want to unlock advanced features",
        it: "Power user di Claude Code che vogliono sbloccare funzionalit\u00e0 avanzate",
      },
      {
        en: "Developers and tech leads building with AI assistants",
        it: "Developer e tech lead che sviluppano con assistenti AI",
      },
      {
        en: "Teams adopting Claude Code as their primary development tool",
        it: "Team che adottano Claude Code come strumento di sviluppo primario",
      },
      {
        en: "Anyone who wants to create and share their own skills",
        it: "Chiunque voglia creare e condividere le proprie skill",
      },
    ],
    faq: [
      {
        question: {
          en: "I'm new to Claude Code. Is this bundle too advanced for me?",
          it: "Sono nuovo di Claude Code. Questo bundle \u00e8 troppo avanzato per me?",
        },
        answer: {
          en: "Start with Skill Creator Guru and Memory Manager \u2014 they\u2019re beginner-friendly. MaIA and LLM Arena VS are more advanced, but you\u2019ll grow into them as you get comfortable with Claude Code.",
          it: "Inizia con Skill Creator Guru e Memory Manager \u2014 sono adatti ai principianti. MaIA e LLM Arena VS sono pi\u00f9 avanzati, ma ci arriverai man mano che prendi confidenza con Claude Code.",
        },
      },
      {
        question: {
          en: "Does LLM Arena VS require API keys for GPT and Gemini?",
          it: "LLM Arena VS richiede API key per GPT e Gemini?",
        },
        answer: {
          en: "Yes, to use the multi-AI features you need active API keys for the models you want to include. The skill guides you through the setup.",
          it: "S\u00ec, per usare le funzionalit\u00e0 multi-AI servono API key attive per i modelli che vuoi includere. La skill ti guida nella configurazione.",
        },
      },
    ],
    metaTitle: {
      en: "Claude Code Mastery \u2014 Power User Toolkit",
      it: "Claude Code Mastery \u2014 Toolkit Power User",
    },
    metaDescription: {
      en: "5 skills to master Claude Code: skill creation, memory, multi-agent, multi-AI, and validation. Save 48%.",
      it: "5 skill per padroneggiare Claude Code: creazione skill, memoria, multi-agente, multi-AI e validazione. Risparmia il 48%.",
    },
  },

  /* ─── Bundle 5: LinkedIn Thought Leadership Toolkit ─── */
  {
    slug: "linkedin-toolkit",
    name: "LinkedIn Thought Leadership Toolkit",
    emoji: "\uD83D\uDCF1",
    tagline: {
      en: "Create executive-level LinkedIn content that doesn\u2019t sound AI-generated.",
      it: "Crea contenuti LinkedIn executive-level che non sembrano scritti da un robot.",
    },
    description: {
      en: "Build a LinkedIn content machine that sounds authentically you. Draft posts using a proven editorial framework (Content Pipeline Pro), humanize them so they pass any AI detector (HumanWriter), stress-test your messaging before publishing (Janus), and analyze what your competitors are doing (Competitive Ads Extractor). The result: consistent, high-quality LinkedIn content that builds your professional authority.",
      it: "Costruisci una macchina per contenuti LinkedIn che suona autenticamente come te. Scrivi post usando un framework editoriale collaudato (Content Pipeline Pro), umanizzali in modo che passino qualsiasi AI detector (HumanWriter), stress-testa il tuo messaggio prima di pubblicare (Janus), e analizza cosa fanno i tuoi competitor (Competitive Ads Extractor). Il risultato: contenuti LinkedIn coerenti e di alta qualit\u00e0 che costruiscono la tua autorit\u00e0 professionale.",
    },
    skillSummaries: [
      {
        slug: "content-pipeline-pro",
        name: "Content Pipeline Pro",
        emoji: "\uD83D\uDCF0",
        price: 29,
        tagline: {
          en: "Editorial framework for transforming content into LinkedIn posts.",
          it: "Framework editoriale per trasformare contenuti in post LinkedIn.",
        },
      },
      {
        slug: "human-writer",
        name: "HumanWriter",
        emoji: "\u270D\uFE0F",
        price: 29,
        tagline: {
          en: "Transform AI-generated text into authentic, human-sounding writing.",
          it: "Trasforma testi generati dall\u2019AI in scrittura autentica e dal suono umano.",
        },
      },
      {
        slug: "janus",
        name: "Janus",
        emoji: "\uD83D\uDD2E",
        price: 29,
        tagline: {
          en: "Critical analysis sparring partner that stress-tests your ideas and proposals.",
          it: "Sparring partner di analisi critica che stress-testa le tue idee e proposte.",
        },
      },
      {
        slug: "competitive-ads-extractor",
        name: "Competitive Ads Extractor",
        emoji: "\uD83D\uDD0E",
        price: 19,
        tagline: {
          en: "Extract and analyze competitors\u2019 ads from ad libraries.",
          it: "Estrai e analizza le ads dei competitor dalle librerie pubblicitarie.",
        },
      },
    ],
    originalPrice: 106,
    bundlePrice: 79,
    savingsPercent: 25,
    badge: "premium",
    version: "1.0",
    changelog: [
      {
        version: "1.0",
        date: "2026-02-17",
        changes: [
          {
            en: "Initial release with 4 LinkedIn content creation skills.",
            it: "Rilascio iniziale con 4 skill per creazione contenuti LinkedIn.",
          },
        ],
      },
    ],
    whoIsThisFor: [
      {
        en: "C-level executives building thought leadership on LinkedIn",
        it: "C-level executive che costruiscono thought leadership su LinkedIn",
      },
      {
        en: "Consultants and coaches sharing expertise publicly",
        it: "Consulenti e coach che condividono la propria expertise pubblicamente",
      },
      {
        en: "Marketing professionals managing executive social presence",
        it: "Professionisti marketing che gestiscono la presenza social di executive",
      },
      {
        en: "Anyone publishing regularly on LinkedIn who wants authentic content",
        it: "Chiunque pubblichi regolarmente su LinkedIn e voglia contenuti autentici",
      },
    ],
    faq: [
      {
        question: {
          en: "Will my posts still sound like me, not like AI?",
          it: "I miei post suoneranno ancora come me, non come un AI?",
        },
        answer: {
          en: "That\u2019s exactly the point. HumanWriter specializes in making AI-assisted content sound authentically human, and Janus reviews your drafts with a critical eye before you publish.",
          it: "\u00c8 esattamente questo il punto. HumanWriter \u00e8 specializzata nel rendere i contenuti assistiti dall\u2019AI autenticamente umani, e Janus rivede le tue bozze con occhio critico prima della pubblicazione.",
        },
      },
      {
        question: {
          en: "Can I use this for other platforms besides LinkedIn?",
          it: "Posso usarlo per altre piattaforme oltre a LinkedIn?",
        },
        answer: {
          en: "The content creation and humanization skills work for any platform. The editorial framework is optimized for LinkedIn\u2019s format but the principles apply everywhere.",
          it: "Le skill di creazione contenuti e umanizzazione funzionano per qualsiasi piattaforma. Il framework editoriale \u00e8 ottimizzato per il formato LinkedIn ma i principi si applicano ovunque.",
        },
      },
    ],
    metaTitle: {
      en: "LinkedIn Thought Leadership Toolkit \u2014 Professional Content System",
      it: "LinkedIn Thought Leadership Toolkit \u2014 Sistema di Contenuti Professionali",
    },
    metaDescription: {
      en: "4 skills for LinkedIn content: editorial framework, humanization, critical review, and competitor analysis. Save 25%.",
      it: "4 skill per contenuti LinkedIn: framework editoriale, umanizzazione, review critica e analisi competitor. Risparmia il 25%.",
    },
  },
];

export function getBundleBySlug(slug: string): BundleDetail | undefined {
  return bundles.find((b) => b.slug === slug);
}

export function getAllBundles(): BundleDetail[] {
  return bundles;
}
