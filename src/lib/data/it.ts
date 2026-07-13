import * as c from "./common";

export const navLinks = [
  { href: "#about", label: "chi sono" },
  { href: "#skills", label: "competenze" },
  { href: "#experience", label: "esperienza" },
  { href: "#projects", label: "progetti" },
  { href: "#services", label: "servizi" },
  { href: "#contact", label: "contatti" },
];

export const heroData = {
  name: c.personal.name,
  role: c.personal.role,
  stack: "['.NET', 'Node.js', 'Angular', 'React', 'SQL']",
  location: "Full Remote | Trieste, Italia",
  taglines: [
    "10+ anni di esperienza nello sviluppo, la manutenzione e la gestione di applicazioni",
    "disponibile come freelance",
  ],
  ctaContact: { href: "#contact", label: "contatti" },
  ctaDownload: { href: "/nicholaspellizer-it.pdf", label: "scarica cv" },
};

export const aboutData = {
  paragraphs: [
    "Risolvo problemi e costruisco soluzioni. Con oltre dieci anni di esperienza nello sviluppo e la manutenzione del software, mi sono sporcato le mani su data warehouse e sulle moderne applicazioni web.",
    "La mia carriera mi ha permesso di vedere mondi diversi. Ho collaborato con grandi aziende nel settore finanziario, assicurativo e produttivo, dove servono precisione, sicurezza e scalabilità. Ho collaborato con startup, dove la velocità di esecuzione e l'adattabilità comandano.",
    "Ho iniziato quando jQuery era indispensabile. Ho studiato .NET prima che fosse open source. Ho usato React prima che esistessero gli Hook, Angular prima di TypeScript, e ho guidato la transizione verso il web di storiche applicazioni desktop. Dai primi framework monolitici agli odierni agenti AI. Non mi limito a usare la tecnologia, continuo ad imparare ogni giorno.",
  ],
};

export const skills = [
  {
    category: "Backend",
    items: [".NET", "Node.js", "PostgreSQL", "SQL Server", "MongoDB", "Redis"],
    note: "e senno dimmi cosa ti serve che lo imparo",
  },
  {
    category: "Frontend",
    items: ["React", "Angular", "Vue", "Astro", "NextJs", "Tailwind"],
    note: "so centrare un <div> senza chiedere a Claude o a ChatGPT, in meno di cinque minuti",
  },
  {
    category: "DevOps",
    items: [
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Ansible",
      "Google Cloud",
      "Azure",
    ],
    note: "da grande faró il devops, per ora mi arrangio",
  },
  {
    category: "Linguaggi",
    items: ["C#", "Italiano", "TypeScript", "SQL", "Inglese", "Rust", "Bash"],
    note: "in quest'ordine",
  },
  {
    category: "Other",
    items: ["Linux", "Arduino", "Raspberry Pi", "Neovim", "VS Code"],
    note: "i use arch btw",
  },
  {
    category: "Non_tech",
    items: [
      "Team Leadership",
      "Project Management",
      "Metodologie Agile",
      "Comunicazione efficace",
      "Analisi dei requisiti",
      "Problem solving",
    ],
    note: "sono simpatico",
  },
];

export const jobs = [
  {
    company: "Freelance",
    role: "Senior Full Stack Developer & Solution Architect",
    period: "01/2026 - Oggi",
    summary:
      "Sviluppo di applicazioni web e desktop su misura con architetture manutenibili. Docenza presso EnaipFVG su SQL e database relazionali.",
    stack: [".NET", "SQL", "PostgreSQL", "SQLite"],
    highlights: [
      "Applicazioni web e desktop custom in ecosistema .NET",
      "Docenza SQL e database relazionali presso EnaipFVG",
    ],
  },

  {
    company: "Etiqa Srl",
    role: "Senior Software Developer",
    period: "09/2022 - 01/2026",
    summary:
      "Sono inserito come Senior Developer in un team di 8+ persone per lo sviluppo di una nuova piattaforme di virtual Healthcare (elty.it) e di welfare aziendale (Welbee) basate su architettura a microservizi in NestJS. Progressivamente mi occupo di definire l'architettura dei microservizi, la gestione dei dati e l'integrazione con sistemi esterni.",
    stack: [
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Kafka",
      "GraphQL",
      "Google Cloud Platform (GCP)",
      "Aws",
      "Microservices",
      "TypeScript",
      "Vue",
      "TailwindCSS",
      "Cypress",
      "Playwright",
      "Artillery",
      "k6",
      "SonarQube",
      "NATS",
    ],
    highlights: [
      "Progettazione dell'integrazione con Algolia per la ricerca di prestazioni sanitarie.",
      "Automatizzazione della pipeline CI/CD con GitHub Actions e deploy su cluster Kubernetes.",
      "Definisco le strategie transazionali per gestire un portafoglio monetario virtuale.",
      "Aggiunta dei test end-to-end e stress test su ambiente replica di produzione.",
    ],
    achievements: [
      "Individuo la causa di un grave problema di scalabilità tra microservizi NestJS in Kubernetes",
      "Risolta instabilità sui picchi di carico con 1000+ richieste al minuto",
      "Riduco i tempi di caricamento di report basati su viste PostgreSQL fino al 90%",
    ],
  },
  {
    company: "Gruppo Euris S.P.A.",
    role: "Tech Leader",
    period: "09/2019 - 09/2022",
    summary:
      "Team leader di progetto internazionale a supporto ABB Italia per la manutenzione, la creazione e la migrazione di applicazioni interne.",
    stack: [
      ".NET",
      "Angular",
      "React",
      "TypeScript",
      "C#",
      "Azure",
      "SharePoint",
      "TFS/Azure Devops",
      "Bash",
      "REST API",
      "WebSockets",
      "Entity Framework",
      "MS SQL Server",
      "Snowflake",
      "Apache ECharts",
      "Apache Spark",
      "Kendo UI",
      "Nintex Workflow",
      "ServiceNow",
    ],
    highlights: [
      "Guido la migrazione da progetto MS Access + SharePoint Online a .NET, SQL Server e Angular.",
      "Coordinamento team 4-8 persone e tutoraggio di figure junior dall'onboarding alla piena autonomia.",
      "Manutenzione di 50+ applicazioni, gestendo incident, change request e manutenzione ordinaria completa di analisi dei requisiti.",
      "Gestione stakeholder internazionali tra Italia, Polonia, Finlandia, Cina.",
      "Miglioramento processi di gestione del progetto e del team con metodologie Agile.",
    ],
    achievements: [
      "Consegno il primo progetto da 450+ GG/U completato con piena soddisfazione del cliente",
      "Progetto e consegno oltre 15 applicazioni web in ecosistema .NET",
      "Migro 20+ applicazioni custom SharePoint da 2010 a 2014 a SharePoint Online",
      "Ottimizzo configurazioni IIS per impianti in Cina e Americhe: riducendo tempi di caricamento da 3000ms a 200ms",
    ],
  },
  {
    company: "Gruppo Euris S.P.A.",
    role: "Junior & Senior Software Developer",
    period: "05/2014 - 09/2019",
    summary:
      "Sviluppo e manutenzione di applicativi prevalentemente su ecosistema Microsoft. Prendo rapidamente confidenza con .NET e SQL Server. Vedo molti progetti diversi per diversi clienti che mi permettono di crescere rapidamente come sviluppatore e come professionista.",
    stack: [
      ".NET Framework",
      "Razor",
      "Javascript",
      "REST API",
      "CSS3",
      "SVN",
      "AngularJS",
      "Jest",
      "NUnit",
      "xUnit",
      "MS SQL Server",
      "Entity Framework",
      "Git",
      "MicroStation",
      "RabbitMQ",
    ],
    highlights: [
      "Gestisco un Data Warehouse di Risk Management per Banca Generali con 500+ stored procedure e ~2GB/giorno di crescita",
      "Sviluppo plugin in .NET per CAD 3D MicroStation per gestione cavi navali per Fincantieri",
      "Integro messaggistica asincrona con RabbitMQ per collegare diversi servizi di HeraAcegasApsAmga",
    ],
  },
];

export const projects = [
  {
    name: "GitHub",
    url: "https://github.com/Guybrush21",
    description: "Se vuoi vedere un po' di codice, questo è il posto giusto.",
  },
  {
    name: "nicholaspellizer.it",
    url: "https://nicholaspellizer.it",
    description: "Questo sito qui. Vedi: ricorsione",
  },
  {
    name: "azionecattolica.trieste.it",
    url: "https://azionecattolica.trieste.it",
    description:
      "Mi son trovato a gestire il sito dell'associazione di cui faccio parte. Un semplice wordpress.",
  },
  {
    name: "puntomedia.trieste.it",
    url: "https://puntomedia.trieste.it",
    description:
      "Sito vetrina per un negozio di telefonia. Realizzato con Grav per permettere al proprietario veloci personalizzazioni.",
  },
  {
    name: "oggifabora.it",
    url: "https://oggifabora.it",
    description:
      "Quando non programmo conduco, registro e monto un podcast su Trieste. Questo template scarica gli episodi da un feed RSS e genera un sito statico con Astro che viene deployato via FTP da delle GitHub Actions.",
  },
  {
    name: "decadi.it",
    url: "https://decadi.it",
    description: "Il primo podcast che ho fatto. Jekyll e Cloudfare pages.",
  },
];

export const servicesData = [
  {
    name: "Architettura e Sviluppo Software",
    description:
      "Progettazione e sviluppo di sistemi scalabili e manutenibili, su misura per le esigenze del tuo business. Sviluppo full-stack su .NET, Node.js, React, Angular e infrastrutture cloud moderne, dall'MVP alla piattaforma in produzione.",
    highlights: [
      "System design e architettura tecnica",
      "Sviluppo full-stack (backend, frontend, API)",
      "Soluzioni cloud-native e a microservizi",
      "Code review e quality assurance",
      "Soluzioni di sistemi di CI/CD per progetti nuovi o esistenti",
    ],
  },
  {
    name: "Migrazione di Sistemi Legacy",
    description:
      "Modernizza le tue applicazioni datate senza interrompere il business. Esperienza comprovata nella migrazione da MS Access, SharePoint On-Premise e framework .NET monolitici verso architetture moderne e manutenibili.",
    highlights: [
      "Assessment e pianificazione della migrazione",
      "Migrazione incrementale con strategie zero downtime",
      "Re-platforming verso ambienti web e cloud",
      "Documentazione e trasferimento delle conoscenze",
    ],
  },
  {
    name: "Tech Leadership e Mentoring",
    description:
      "Team lead e mentor con esperienza consolidata. Dalla pianificazione della roadmap alla guida pratica sul codice, posso coordinare il tuo team tecnico o supportare i lead esistenti aiutando i developer a crescere e i progetti a restare in carreggiata.",
    highlights: [
      "Coordinamento del team tecnico e gestione dei task",
      "Mentoring di figure junior e mid-level",
      "Facilitazione dei processi Agile e refinement",
      "Comunicazione con gli stakeholder e i vari team cross-funzionali",
    ],
  },
  {
    name: "Data Management",
    description:
      "Progettazione, manutenzione e ottimizzazione di sistemi dati complessi. Dai grandi data warehouse SQL alle soluzioni NoSQL moderne, garantisco affidabilità e performance al tuo data layer.",
    highlights: [
      "Progettazione e manutenzione di data warehouse",
      "Ottimizzazione SQL e architettura a stored procedure",
      "MongoDB, PostgreSQL, Redis, SQL Server",
      "Pipeline di reportistica e normalizzazione dei dati per integrazioni terze",
    ],
  },
];

export const footerData = {
  name: "Nicholas Pellizer",
  tagline: "mi piace risolvere problemi e aggiustare cose",
};

export const sectionTitles = {
  about: "Chi Sono",
  skills: "Competenze",
  experience: "Esperienza lavorativa",
  services: "Servizi",
  projects: "Progetti",
  contact: "Contatti",
  fullExperience: "Vedi tutte le esperienze",
};

export const ui = {
  visitSite: "Visita sito",
};

export const personalInfo = {
  ...c.personal,
  location: "Trieste, Italia",
  nationality: " Italiano",
  bio: "Senior Software Developer & Solution Architect con oltre 10 anni di esperienza nella progettazione di applicazioni enterprise su stack .NET e Node.js. Specializzato in architetture distribuite, integrazione di sistemi complessi, modernizzazione applicativa e leadership tecnica. Esperienza nella guida di team, nella definizione di architetture software e nel supporto a clienti enterprise nei settori assicurativo, finanziario, healthcare e industriale. Curioso per natura e orientato al miglioramento continuo, mi piace affrontare problemi complessi e trasformarli in soluzioni semplici, affidabili e manutenibili.",
  languages: [
    { name: "Italiano", level: "Madrelingua" },
    { name: "Inglese", level: "B1 - Intermedio" },
  ],
};

export const contactData = {
  intro: "Vuoi lavorare insieme? Parliamo del tuo progetto.",
  items: [
    {
      label: "Email",
      value: c.personal.email,
      href: "mailto:mail@nicholaspellizer.it",
    },
    { label: "Telefono", value: "+39 338 284 8486", href: "tel:+393382848486" },
    { label: "Località", value: "Trieste, Italia" },
  ],
  downloadCv: { href: "/nicholaspellizer.pdf", label: "scarica cv" },
};

export const otherActivities = [
  {
    title: "Oggi fa bora",
    role: "Co-founder, Podcaster & Audio Engineer",
    period: "03/2025 - Attuale",
    summary:
      "Creo Oggi fa bora: un podcast che racconta le realtà della città di Trieste. Oltre a prestare la voce, mi occupo della registrazione, dell'editing e della pubblicazione degli episodi.",
    link: {
      url: "https://oggifabora.it",
      label: "oggifabora.it",
    },
  },
  {
    title: "Azione Cattolica Trieste",
    role: "Vicepresidente",
    period: "02/2017 - 02/2024",
    summary:
      "Vengo eletto vicepresidente del Settore Giovani per due mandati consecutivi. Siedo in Consiglio e Presidenza. Mi occupo dell'organizzazione di attività di aggregazione sociale e di interesse culturale per i giovani.",
  },
];

export const cvPage = {
  title: "Curriculum Vitae",
  printButton: "Stampa CV",
  backToSite: "Torna al sito",
  summary: "Profilo",
  technicalSkills: "Competenze Tecniche",
  softSkills: "Soft Skills",
  languages: "Lingue",
  links: "Link",
  otherActivities: "Altre Attività",
  achievements: "Risultati",
  highlight: "Attività",
};

export const techLabels = {
  languages: "Linguaggi",
  backend: "Backend",
  frontend: "Frontend",
  data: "Database & ORM",
  devopsAndCloud: "DevOps & Cloud",
  testingAndQuality: "Testing & Quality",
  others: "Altri",
  techStack: "Stack Tecnologico",
  tools: "Tools",
};
