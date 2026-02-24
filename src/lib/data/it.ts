// Italian content

export const navLinks = [
  { href: "#about", label: "chi sono" },
  { href: "#skills", label: "competenze" },
  { href: "#experience", label: "esperienza" },
  { href: "#projects", label: "progetti" },
  { href: "#contact", label: "contatti" },
];

export const heroData = {
  name: "Nicholas Pellizer",
  role: "FullStack Software Developer",
  stack: "['.NET', 'Node.js', 'Angular', 'React', 'SQL']",
  location: "Full Remote | Trieste, Italia",
  taglines: [
    "10+ anni di esperienza nello sviluppo, la manutenzione e la gestione di applicazioni",
    "disponibile come freelance",
    "correggo quello che l'AI ha incasinato",
  ],
  ctaContact: { href: "#contact", label: "contatti" },
  ctaDownload: { href: "/nicholaspellizer.pdf", label: "scarica cv" },
};

export const aboutData = {
  paragraphs: [
    "Risolvo problemi e costruisco soluzioni. Con oltre un dieci anni di esperienza nello sviluppo software, ho lavorato su tutto lo stack, dai data warehouse complessi alle moderne applicazioni web.",
    "La mia carriera mi ha permesso di muovermi con successo tra mondi diversi. Ho collaborato con grandi aziende nel settore finanziario, assicurativo e produttivo, dove la precisione, la sicurezza e la scalabilità sono fondamentali. Ho supportato startup, dove la velocità di esecuzione e l'adattabilità fanno la differenza tra un'idea e un prodotto di successo.",
    "Dopo aver guidato team e gestito progetti critici, non offro solo codice, ma sviluppo software affidabile, di alta qualità e orientato ai risultati.",
    "Ho iniziato quando jQuery era la novità del momento. Ho usato React prima che esistessero gli Hook, Angular prima di TypeScript, e ho guidato la transizione verso il web di storiche applicazioni desktop. Dai primi framework monolitici agli odierni agenti AI, la mia costante è stata l'evoluzione: non mi limito a usare la tecnologia, la imparo ogni giorno. ",
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
      "Github Actions",
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
    items: ["C#", "Italiano", "Typescript", "SQL", "Inglese", "Rust", "Bash"],
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
    company: "Etiqa Srl",
    role: "Senior Software Developer",
    period: "09/2022 - 01/2026",
    highlights: [
      "Progettazione e Ricerca (Healthcare): Analizzo e finalizzo l'integrazione con il provider di ricerca **Algolia** per un prodotto di prenotazione prestazioni sanitarie, gestendo la normalizzazione dei dati da database **MongoDB** e backend **NestJS**. Mi occupo di varie integrazioni tra cui **MUX** per gestire una libreria di videolezioni.",
      "Ambito Welfare: Sviluppo un portale di welfare aziendale con backend in **microservizi NestJS**, frontend in **Vue** e dati su **PostgreSQL**, garantendo la stabilità del sistema sotto picchi di carico superiori alle migliaia di richieste al minuto. Gestisco anche la parte di reportistica garantendo affidabilità e velocità sulle viste interessate.",
      "Risoluzione Criticità e Scalabilità: Individuato e risolto un collo di bottiglia sulla scalabilità orizzontale causato dai limiti delle connessioni TCP dirette tra **microservizi NestJS**. Ho proposto di riprogettare la comunicazione interna utilizzando un message broker **Kafka** o **NATS**, permettendo al sistema di scalare correttamente su cluster **Kubernetes** (**GCP**).",
      "Analisi e Teamwork: Inserito in un team di sviluppatori senior e middle, mi sono occupato della rifinitura dei task e dell'analisi tecnica per garantire efficienza e qualità in ogni rilascio.",
    ],
  },
  {
    company: "Gruppo Euris S.P.A.",
    role: "Tech Leader",
    period: "09/2019 - 09/2022",
    highlights: [
      "Lead di Progetto Internazionale (450+ GG/U): Coordinato un team di 4-6 persone per la migrazione di un sistema critico di problem solving industriale (pattern 5 Why, Ishikawa) da **MS Access** a una moderna architettura **.NET Core WebAPI** con frontend **Angular**.",
      "Performance Optimization (Global Scale): Ottimizzato le rotte di rete per gli impianti produttivi in Cina, riducendo i tempi di caricamento da 3000ms a 200ms.",
      "Management & Financial Accountability: Gestito l'assegnazione dei task e il supporto tecnico costante al team, mantenendo la responsabilità dei target finanziari di progetto (marginalità e giornate/uomo) con pieno raggiungimento degli obiettivi.",
      "Mentoring & Formazione: Responsabile della crescita professionale di diverse figure junior, guidandole dall'onboarding alla piena autonomia tecnica.",
      "Modernizzazione Applicativa: Orchestrato il passaggio degli applicativi **SharePoint** da infrastrutture On-Premise a **SharePoint Online**, gestendo stakeholder internazionali in Polonia e Finlandia.",
      "Technical Stack: Sviluppo su ecosistema Microsoft (**ASP.NET MVC**, **.NET Core**) con esteso utilizzo di **Entity Framework** e **MS SQL Server**.",
    ],
  },
  {
    company: "Gruppo Euris S.P.A.",
    role: "Junior & Senior Software Developer",
    period: "05/2014 - 09/2019",
    highlights: [
      "Data Management (Banca Generali): Gestito e mantenuto un complesso Data Warehouse di Risk Management con dati globali. Responsabile della manutenzione di oltre 500 stored procedure (layer architecture) su un database con volumi di crescita di circa 2GB/giorno.",
      "Sviluppo Specialistico (Fincantieri): Progettato e sviluppato un plugin in **.NET** per il CAD 3D **MicroStation**, dedicato all'ottimizzazione e alla gestione della stesura dei cavi all'interno delle commesse navali.",
      "Integrazione & Legacy (AcegasApsAmga): Manutenzione evolutiva di applicativi legacy e implementazione di sistemi di messaggistica asincrona tramite l'integrazione di **RabbitMQ**.",
      "Full Stack Development: Sviluppo e manutenzione di vari progetti basati su **.NET Framework MVC** e database **MS SQL Server**.",
    ],
  },
];

export const projects = [
  {
    name: "Profilo GitHub",
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
      "Quando non programmo conduco, registro e monto un podcast su Trieste. Questo template scarica gli episodi da un feed RSS e genera un sito statico con Astro che viene deployato via FTP da delle Github Actions.",
  },
  {
    name: "decadi.it",
    url: "https://decadi.it",
    description: "Il primo podcast che ho fatto. Jekyll e Cloudfare pages.",
  },
];

export const contactData = {
  intro: "Vuoi lavorare insieme? Parliamo del tuo progetto.",
  items: [
    {
      label: "Email",
      value: "mail@nicholaspellizer.it",
      href: "mailto:mail@nicholaspellizer.it",
    },
    { label: "Telefono", value: "+39 338 284 8486", href: "tel:+393382848486" },
    { label: "Località", value: "Trieste, Italia" },
  ],
  downloadCv: { href: "/nicholaspellizer.pdf", label: "scarica cv" },
};

export const footerData = {
  name: "Nicholas Pellizer",
  tagline: "mi piace risolvere problemi e aggiustare cose",
};

export const sectionTitles = {
  about: "Chi Sono",
  skills: "Competenze",
  experience: "Esperienza",
  projects: "Progetti",
  contact: "Contatti",
};

export const ui = {
  visitSite: "Visita sito",
};

export const cvPage = {
  title: "Curriculum Vitae",
  printButton: "Stampa CV",
  backToSite: "Torna al sito",
  summary: "Profilo",
  technicalSkills: "Competenze Tecniche",
  softSkills: "Soft Skills",
  languages: "Lingue",
  links: "Link",
};
