// English content

export const navLinks = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export const heroData = {
  name: "Nicholas Pellizer",
  role: "Fullstack Software Developer",
  taglines: [
    "10+ years of experience in development, maintenance and management of applications",
    ".NET | Node.js | Angular | React | SQL",
    "Trieste, Italy",
  ],
  ctaContact: { href: "#contact", label: "contact" },
  ctaDownload: { href: "/nicholaspellizer-en.pdf", label: "download cv" },
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
    period: "2022 - 2026",
    description:
      "Worked in a team of senior and middle developers on Node.js stack. Handled task analysis and refinement, ensuring efficiency and quality for the entire team. Also managed release processes and DevOps-related activities.",
  },
  {
    company: "Gruppo Euris S.P.A.",
    role: "Team Leader & Senior Developer",
    period: "2017 - 2022",
    description:
      "Led a team of 3 developers managing ~20 applications. Designed architecture and integrations on .NET Core, Angular, and React. Managed project finances and client requirements. Delivered first 300+ person-day project.",
  },
  {
    company: "Gruppo Euris S.P.A.",
    role: "Junior Software Developer",
    period: "2014 - 2017",
    description:
      "Developed and maintained projects on .NET Framework 3/4.5 MVC and a complex risk management data warehouse on SQL Server.",
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

export const contactData = {
  intro: "Interested in working together? Let's talk about your project.",
  items: [
    {
      label: "Email",
      value: "nicholas.pellizer@gmail.com",
      href: "mailto:nicholas.pellizer@gmail.com",
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
  projects: "Projects",
  contact: "Get in Touch",
};

export const ui = {
  visitSite: "Visit site",
};
