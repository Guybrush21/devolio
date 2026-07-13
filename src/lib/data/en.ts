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
    company: "Freelance",
    role: "Senior Full Stack Developer & Solution Architect",
    period: "01/2026 - Present",
    summary:
      "Custom web and desktop application development with maintainable architectures. Teaching SQL and relational databases at EnaipFVG.",
    stack: [".NET", "SQL", "PostgreSQL", "SQLite"],
    highlights: [
      "Custom web and desktop applications in .NET ecosystem",
      "Teaching SQL and relational databases at EnaipFVG",
    ],
  },

  {
    company: "Etiqa Srl",
    role: "Senior Software Developer",
    period: "09/2022 - 01/2026",
    summary:
      "Development of Healthcare and Welfare platforms based on microservices architecture.",
    stack: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "Vue",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Github Actions",
      "Kubernetes",
      "GCP",
      "Cypress",
      "Jest",
      "Artillery",
      "K6s",
      "SonarQube",
      "Kafka",
      "NATS",
    ],
    highlights: [
      "Designed **Algolia** integration for healthcare service search",
      "Implemented video library through **MUX** integration",
      "Built CI/CD pipeline with **Github Actions** and **Docker**",
      "Introduced end-to-end, unit, and stress testing",
      "Eliminated microservices communication bottleneck by redesigning with **Kafka/NATS**",
    ],
    achievements: [
      "Stable system under thousands of requests per minute",
      "Horizontal scalability achieved on **Kubernetes GCP** cluster",
    ],
  },
  {
    company: "Gruppo Euris S.P.A.",
    role: "Tech Leader",
    period: "09/2019 - 09/2022",
    summary:
      "Team leader for international project migrating critical industrial problem-solving systems.",
    stack: [
      ".NET Core",
      "Angular",
      "Entity Framework",
      "MS SQL Server",
      "SharePoint",
      "SharePoint Online",
    ],
    highlights: [
      "Coordinated 4-6 person team for migration from **MS Access** to **.NET Core + Angular**",
      "Optimized network routes for China plants: from 3000ms to 200ms",
      "Managed international stakeholders (Poland, Finland) for **SharePoint Online** migration",
      "Mentored junior developers from onboarding to full autonomy",
    ],
    achievements: [
      "450+ person-days project completed with full financial targets achieved",
      "Multiple junior developers grown to full autonomy",
    ],
  },
  {
    company: "Gruppo Euris S.P.A.",
    role: "Junior & Senior Software Developer",
    period: "05/2014 - 09/2019",
    summary:
      "Development and maintenance of enterprise applications on Microsoft ecosystem.",
    stack: [
      ".NET Framework",
      "MVC",
      "MS SQL Server",
      "Entity Framework",
      "MicroStation",
      "RabbitMQ",
    ],
    highlights: [
      "**Banca Generali**: Managed Risk Management Data Warehouse with 500+ stored procedures, 2GB/day growth",
      "**Fincantieri**: Developed **.NET** plugin for **MicroStation** 3D CAD for naval cable management",
      "**AcegasApsAmga**: Integrated asynchronous messaging with **RabbitMQ**",
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

export const personalInfo = {
  name: "Nicholas Pellizer",
  role: "Full-Stack Architect & Tech Lead",
  email: "mail@nicholaspellizer.it",
  phone: "+39 338 284 8486",
  dateOfBirth: "21/04/1992",
  location: "Trieste, Italy",
  nationality: "🇮🇹 Italian",
  bio: "Full-stack developer with over 10 years of experience in designing, developing and maintaining complex software architectures on Microsoft .NET and Node.js stacks. Experienced in team management, requirements analysis and mentoring junior developers. Passionate about DevOps and development process optimization.",
  languages: [
    { name: "Italian", level: "Native" },
    { name: "English", level: "B1 - Intermediate" },
  ],
};

export const otherActivities = [
  {
    title: "Oggi fa bora",
    role: "Co-founder, Podcaster & Audio Engineer",
    period: "03/2025 - Present",
    summary:
      "Satisfied with our first experience as podcast authors, my collaborator and I created Oggi fa bora: a podcast to tell the stories of various realities revolving around the city of Trieste. Besides lending our voices, I handle the recording, editing, and publishing of episodes.",
    link: {
      url: "https://oggifabora.it",
      label: "oggifabora.it",
    },
  },
  {
    title: "Youth Sector - Diocese of Trieste",
    role: "Vice President",
    period: "02/2017 - 02/2024",
    summary:
      "I held the position of vice president of the Youth Sector for two consecutive three-year terms. I sat on the respective Council and Presidency bodies. I took charge of organizing social aggregation and cultural interest activities for young people. Together with the team, we devised new solutions to network the diocese's educators. The second term was obviously influenced by the Covid-19 pandemic, a difficult period that forced us to rethink and reinvent methods and timing of participation in associative life.",
  },
];

export const cvPage = {
  title: "Curriculum Vitae",
  printButton: "Print CV",
  backToSite: "Back to site",
  summary: "Summary",
  technicalSkills: "Technical Skills",
  softSkills: "Soft Skills",
  languages: "Languages",
  links: "Links",
  otherActivities: "Other Activities",
  achievements: "Achievements",
  highlight: "Activities",
};

export const techLabels = {
  languages: "Languages",
  backend: "Backend",
  frontend: "Frontend",
  data: "Database & ORM",
  devopsAndCloud: "DevOps & Cloud",
  testingAndQuality: "Testing & Quality",
  others: "Others",
  techStack: "Tech Stack",
  tools: "Tools",
};
