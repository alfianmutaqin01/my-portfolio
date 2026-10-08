// Screenshots go in src/assets/projects/ and are referenced by file name in `image`.
// Projects without an image get an illustrated placeholder using `icon`.
//
// Template for a new project:
// {
//   title: "",
//   category: "web",            // web | mobile | design | docs
//   year: "2026",
//   context: "",                // company, client, or "Personal project"
//   summary: "",
//   highlights: [],             // featured projects only
//   tags: [],
//   image: "",                  // optional
//   icon: "bi-window",          // used when there is no image
//   status: "",                 // optional, e.g. "In progress"
//   featured: false,            // true = shown in "Latest Work"
//   links: { code: "", live: "", design: "", docs: "" },
// },

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "design", label: "UI/UX Design" },
  { id: "docs", label: "Documentation" },
];

export const projects = [
  {
    title: "Berger WMS & Sales Order",
    category: "web",
    year: "2026",
    context: "PT Berger Paints Indonesia",
    summary:
      "An integrated Warehouse Management and Sales Order system with two separate portals. Every stock movement, from production to the rack, picking, the delivery note, and proof of delivery, gets its own line in the stock ledger.",
    highlights: [
      "WMS portal: goods receipt, put-away, stock take, material requests, picking, delivery notes, returns, and reports",
      "Sales portal: order creation, status tracking, delivery proof upload, and customer rejections",
      "Email and WhatsApp notifications, with the full test suite running in CI on every pull request",
    ],
    tags: ["Laravel 13", "PHP 8.3", "PostgreSQL", "Redis", "Docker", "CI"],
    icon: "bi-boxes",
    status: "In progress",
    featured: true,
    links: {},
    note: "Internal company system, so code and screenshots aren't public.",
  },
  {
    title: "MONITA: Budget Monitoring",
    category: "web",
    year: "2025",
    context: "Telkom University Purwokerto",
    summary:
      "Replaces spreadsheet-based budget tracking with a central dashboard, role-based access, and real-time reports for 33 work units across campus.",
    highlights: [
      "Interactive dashboard for balances, budget vs. realization, and absorption per unit",
      "Imports from Excel, CSV, and Google Sheets, with PDF reports you can preview before printing",
      "Role-based access for finance admins and unit users, plus CAPTCHA-protected login",
    ],
    tags: ["Laravel 12", "Google Sheets API", "Tailwind CSS", "Bootstrap", "DomPDF"],
    icon: "bi-graph-up-arrow",
    featured: true,
    links: {
      code: "https://github.com/alfianmutaqin01/MONITA-Monitering-Anggaran-TUP",
    },
  },
  {
    title: "Web Petani Wonosobo",
    category: "web",
    year: "2025",
    context: "Wonosobo",
    summary:
      "A web platform for farmers in Wonosobo with crop price prediction, weather prediction, and land slope analysis, plus a separate admin dashboard.",
    highlights: [
      "Price and weather prediction pages with interactive charts",
      "Land slope analysis to support planting decisions",
      "Role-based login with separate farmer and admin views",
    ],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts"],
    icon: "bi-flower2",
    featured: true,
    links: {
      code: "https://github.com/alfianmutaqin01/Web-Petani-Wonosobo",
    },
  },
  {
    title: "Komdaham Kab. Wonosobo",
    category: "web",
    year: "2025",
    context: "Wonosobo Regency",
    summary: "A management website for Komdaham of Wonosobo Regency, built with Laravel.",
    tags: ["Laravel", "PHP", "Blade"],
    image: "komdaham.png",
    links: { code: "https://github.com/alfianmutaqin01/KOMNASHAM" },
  },
  {
    title: "Nukertrash",
    category: "mobile",
    year: "2024",
    context: "Registered as intellectual property (HKI)",
    summary:
      "A waste management mobile app, designed in Figma and built natively for Android with Kotlin.",
    tags: ["Kotlin", "Android", "Figma"],
    image: "nukertrash2.png",
    links: {
      code: "https://github.com/alfianmutaqin01/Nukertrash",
      design:
        "https://www.figma.com/design/he2Cc27uk5fx502hrlwrGz/NUKERTRASH?node-id=0-1&p=f&t=rLujUbf2aE2rZCV5-0",
    },
  },
  {
    title: "Al-Fathoniyyah",
    category: "web",
    context: "School website",
    summary: "A profile website for Al-Fathoniyyah school, live and in use.",
    tags: ["Website", "School Profile"],
    image: "alfathoniyyah.png",
    links: { live: "https://alfathoniyyah.rumah-al.com/" },
  },
  {
    title: "E-Sheep",
    category: "design",
    context: "UI/UX case study",
    summary: "Mobile app design for sheep farm management.",
    tags: ["Figma", "Mobile UI"],
    image: "esheep.png",
    links: {
      design:
        "https://www.figma.com/design/pQSEfOB9qwshsTJwIFuSQD/E-Sheep?node-id=525-326&p=f&t=qFynBF8azUequ4hP-0",
    },
  },
  {
    title: "RM. Pringgading",
    category: "design",
    context: "UI/UX case study",
    summary: "Website design for a local restaurant.",
    tags: ["Figma", "Web UI"],
    image: "pringgading.png",
    links: {
      design:
        "https://www.figma.com/design/SDencdlxvX7mxuej4E69i6/Untitled?node-id=426-353&t=pbFUR6CDHcreJmi0-0",
    },
  },
  {
    title: "Echo Weather",
    category: "design",
    context: "UI/UX case study",
    summary: "Mobile app design for local weather forecasts.",
    tags: ["Figma", "Mobile UI"],
    image: "eco.jpg",
    links: {
      design:
        "https://www.figma.com/design/lIOnl6g7q3TdZFeByTx32K/eco-weather?t=8gIIyC421jWu9doS-0",
    },
  },
  {
    title: "SRS & SDD Documents",
    category: "docs",
    context: "Software documentation",
    summary:
      "Software Requirements Specification and Software Design Description documents for a software project.",
    tags: ["SRS", "SDD", "Requirements"],
    image: "srs.png",
    links: {
      docs: "https://drive.google.com/drive/folders/1-Z2V_vqO7Tl-dCpOvBXLBFJyFhr2Vcx_?usp=sharing",
    },
  },
  {
    title: "Previous Portfolio",
    category: "web",
    year: "2024",
    context: "Personal project",
    summary: "My first portfolio website, built with plain HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "portofolio.png",
    links: {
      live: "https://alfianmutaqin01.github.io/Protofolio.github.io/",
      code: "https://github.com/alfianmutaqin01/Protofolio.github.io",
    },
  },
];
