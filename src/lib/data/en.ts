// English content

export const navLinks = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#services", label: "services" },
  { href: "#contact", label: "contact" },
];

export const heroData = {
  name: "Nicholas Pellizer",
  role: "Full-Stack Architect & Tech Lead",
  stack: "[.NET | Node.js | Angular | React | SQL]",
  location: "Full Remote | Trieste, Italia",
  taglines: [
    "10+ years of experience in development, maintenance and management of applications",
    "available as a freelance",
  ],
  ctaContact: { href: "#contact", label: "contact" },
  ctaDownload: { href: "/nicholaspellizer.pdf", label: "download cv" },
};

export const aboutData = {
  paragraphs: [
    "I solve problems and build solutions. With over a decade of experience in software development, I've worked across the full stack, from complex data warehouses to modern web applications.",
    "My career has allowed me to move successfully between different worlds. I've collaborated with large companies in the financial, insurance, and manufacturing sectors, where precision, security, and scalability are essential. I've supported startups, where speed of execution and adaptability make the difference between an idea and a successful product.",
    "After leading teams and managing critical projects, I don't just offer code—I deliver reliable, high-quality software focused on results.",
    "I started when jQuery was the hot new thing. I used React before Hooks existed, Angular before TypeScript, and led the transition to web for legacy desktop applications. From early monolithic frameworks to today's AI agents, my constant has been evolution: I don't just use technology, I learn it every day.",
  ],
};

export const skills = [
  {
    category: "Backend",
    items: [".NET", "Node.js", "PostgreSQL", "SQL Server", "MongoDB", "Redis"],
    note: "or just tell me what you need and I'll learn it",
  },
  {
    category: "Frontend",
    items: ["React", "Angular", "Vue", "Astro", "NextJs", "Tailwind"],
    note: "I can center a <div> without asking Claude or ChatGPT, in less than five minutes",
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
    note: "not an expert but I get by, and I'll learn whatever's needed",
  },
  {
    category: "Languages",
    items: ["C#", "Italian", "Typescript", "SQL", "English", "Rust", "Bash"],
    note: "in this order",
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
      "Agile Methodologies",
      "Effective Communication",
      "Requirements Analysis",
      "Problem Solving",
    ],
    note: "I'm a nice guy",
  },
];

export const jobs = [
  {
    company: "Etiqa Srl",
    role: "Senior Software Developer",
    period: "09/2022 - 01/2026",
    highlights: [
      "Design & Research (Healthcare): Analyzed and finalized integration with **Algolia** search provider for a healthcare booking product, managing data normalization from **MongoDB** database and **NestJS** backend. Handled various integrations including **MUX** for managing a video lesson library.",
      "Welfare Scope: Developed a corporate welfare portal with **NestJS microservices** backend, **Vue** frontend and **PostgreSQL** data, ensuring system stability under load peaks exceeding thousands of requests per minute. Also managed reporting ensuring reliability and speed on affected views.",
      "Critical Issue Resolution & Scalability: Identified and resolved a horizontal scalability bottleneck caused by TCP connection limits between **NestJS microservices**. Proposed redesigning internal communication using **Kafka** or **NATS** message broker, allowing the system to scale correctly on **Kubernetes** clusters (**GCP**).",
      "Analysis & Teamwork: Working in a team of senior and middle developers, handled task refinement and technical analysis to ensure efficiency and quality in every release.",
    ],
  },
  {
    company: "Gruppo Euris S.P.A.",
    role: "Tech Leader",
    period: "09/2019 - 09/2022",
    highlights: [
      "International Project Lead (450+ person-days): Coordinated a team of 4-6 people for the migration of a critical industrial problem-solving system (5 Why, Ishikawa patterns) from **MS Access** to a modern **.NET Core WebAPI** architecture with **Angular** frontend.",
      "Performance Optimization (Global Scale): Optimized network routes for production plants in China, reducing load times from 3000ms to 200ms.",
      "Management & Financial Accountability: Managed task assignment and constant technical support to the team, maintaining responsibility for project financial targets (margins and person-days) with full achievement of objectives.",
      "Mentoring & Training: Responsible for the professional growth of several junior developers, guiding them from onboarding to full technical autonomy.",
      "Application Modernization: Orchestrated the transition of **SharePoint** applications from On-Premise infrastructure to **SharePoint Online**, managing international stakeholders in Poland and Finland.",
      "Technical Stack: Development on Microsoft ecosystem (**ASP.NET MVC**, **.NET Core**) with extensive use of **Entity Framework** and **MS SQL Server**.",
    ],
  },
  {
    company: "Gruppo Euris S.P.A.",
    role: "Junior & Senior Software Developer",
    period: "05/2014 - 09/2019",
    highlights: [
      "Data Management (Banca Generali): Managed and maintained a complex Risk Management Data Warehouse with global data. Responsible for maintaining over 500 stored procedures (layer architecture) on a database with growth volumes of approximately 2GB/day.",
      "Specialized Development (Fincantieri): Designed and developed a **.NET** plugin for **MicroStation 3D CAD**, dedicated to optimization and management of cable routing within naval contracts.",
      "Integration & Legacy (AcegasApsAmga): Evolutionary maintenance of legacy applications and implementation of asynchronous messaging systems through **RabbitMQ** integration.",
      "Full Stack Development: Development and maintenance of various projects based on **.NET Framework MVC** and **MS SQL Server** database.",
    ],
  },
];

export const projects = [
  {
    name: "GitHub Profile",
    url: "https://github.com/Guybrush21",
    description: "If you want to see some code, this is the right place.",
  },
  {
    name: "nicholaspellizer.it",
    url: "https://nicholaspellizer.it",
    description: "This very site. See: recursion",
  },
  {
    name: "azionecattolica.trieste.it",
    url: "https://azionecattolica.trieste.it",
    description:
      "I ended up managing the website for an association I'm part of. A simple WordPress site.",
  },
  {
    name: "puntomedia.trieste.it",
    url: "https://puntomedia.trieste.it",
    description:
      "Showcase site for a phone shop. Built with Grav to allow the owner quick customizations.",
  },
  {
    name: "oggifabora.it",
    url: "https://oggifabora.it",
    description:
      "When I'm not coding, I host, record and edit a podcast about Trieste. This template fetches episodes from an RSS feed and generates a static site with Astro, deployed via FTP through GitHub Actions.",
  },
  {
    name: "decadi.it",
    url: "https://decadi.it",
    description: "The first podcast I made. Jekyll and Cloudflare Pages.",
  },
];

export const servicesData = [
  {
    name: "Software Architecture & Development",
    description:
      "Design and build scalable, maintainable systems tailored to your business needs. Full-stack development across .NET, Node.js, React, Angular, and modern cloud infrastructure — from MVP to production-grade platforms.",
    highlights: [
      "System design and technical architecture",
      "Full-stack development (backend, frontend, APIs)",
      "Cloud-native and microservices solutions",
      "Code review and quality assurance",
    ],
  },
  {
    name: "Legacy Software Migration",
    description:
      "Modernize aging applications without disrupting your business. Proven experience migrating from MS Access, SharePoint On-Premise, and monolithic .NET frameworks to modern, maintainable architectures.",
    highlights: [
      "Assessment and migration planning",
      "Incremental migration with zero downtime strategies",
      "Re-platforming to web and cloud environments",
      "Documentation and knowledge transfer",
    ],
  },
  {
    name: "Tech Leadership & Mentoring",
    description:
      "Experienced team lead and developer mentor. From roadmap planning to hands-on code guidance, I can lead your technical team or support your existing leads — helping developers grow and projects stay on track.",
    highlights: [
      "Technical team coordination and task management",
      "Junior and mid-level developer mentoring",
      "Agile process facilitation and refinement",
      "Stakeholder communication and reporting",
    ],
  },
  {
    name: "Data Management",
    description:
      "Design, maintain, and optimize complex data systems. From large-scale SQL data warehouses to modern NoSQL solutions, I bring reliability and performance to your data layer.",
    highlights: [
      "Data warehouse design and maintenance",
      "SQL performance optimization and stored procedure architecture",
      "MongoDB, PostgreSQL, Redis, SQL Server",
      "Reporting pipelines and data normalization",
    ],
  },
];

export const contactData = {
  intro: "Interested in working together? Let's talk about your project.",
  items: [
    {
      label: "Email",
      value: "mail@nicholaspellizer.it",
      href: "mailto:mail@nicholaspellizer.it",
    },
    { label: "Phone", value: "+39 338 284 8486", href: "tel:+393382848486" },
    { label: "Location", value: "Trieste, Italy" },
  ],
  downloadCv: { href: "/nicholaspellizer.pdf", label: "download cv" },
};

export const footerData = {
  name: "Nicholas Pellizer",
  tagline: "Available for freelance work.",
};

export const sectionTitles = {
  about: "About Me",
  skills: "Skills",
  experience: "Experience",
  services: "Services",
  projects: "Projects",
  contact: "Get in Touch",
};

export const ui = {
  visitSite: "Visit site",
};

export const cvPage = {
  title: "Curriculum Vitae",
  printButton: "Print CV",
  backToSite: "Back to site",
  summary: "Summary",
  technicalSkills: "Technical Skills",
  softSkills: "Soft Skills",
  languages: "Languages",
  links: "Links",
};
