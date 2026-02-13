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
  taglines: [
    "10+ anni di esperienza nello sviluppo, la manutenzione e la gestione di applicazioni",
    ".NET | Node.js | Angular | React | SQL",
    "Trieste, Italia",
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
    period: "2022 - 2026",
    description:
      "Inserito in un team di sviluppatori senior e middle su stack Node.js. Mi sono occupato dell'analisi e della rifinitura dei task, garantendo efficienza e qualità per l'intero team. Ho gestito anche processi di rilascio e attività DevOps.",
  },
  {
    company: "Gruppo Euris S.P.A.",
    role: "Team Leader & Senior Developer",
    period: "2017 - 2022",
    description:
      "Ho guidato un team di 3 sviluppatori gestendo ~20 applicazioni. Ho progettato architetture e integrazioni su .NET Core, Angular e React. Ho gestito aspetti finanziari di progetto e requisiti cliente. Ho portato a termine il primo progetto da 300+ giornate/uomo.",
  },
  {
    company: "Gruppo Euris S.P.A.",
    role: "Junior Software Developer",
    period: "2014 - 2017",
    description:
      "Ho sviluppato e mantenuto progetti su .NET Framework 3/4.5 MVC e un complesso data warehouse di risk management su SQL Server.",
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
