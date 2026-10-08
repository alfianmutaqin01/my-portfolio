const devicon = (path) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

const techStack = [
  // Languages
  { name: "HTML & CSS", logo: devicon("html5/html5-original.svg"), category: "languages" },
  { name: "JavaScript", logo: devicon("javascript/javascript-original.svg"), category: "languages" },
  { name: "TypeScript", logo: devicon("typescript/typescript-original.svg"), category: "languages" },
  { name: "PHP", logo: devicon("php/php-original.svg"), category: "languages" },
  { name: "Python", logo: devicon("python/python-original.svg"), category: "languages" },
  { name: "Dart", logo: devicon("dart/dart-original.svg"), category: "languages" },
  { name: "Kotlin", logo: devicon("kotlin/kotlin-original.svg"), category: "languages" },
  { name: "Java", logo: devicon("java/java-original.svg"), category: "languages" },

  // Frameworks & libraries
  { name: "Laravel", logo: devicon("laravel/laravel-original.svg"), category: "frameworks" },
  { name: "React Js", logo: devicon("react/react-original.svg"), category: "frameworks" },
  { name: "Flutter", logo: devicon("flutter/flutter-original.svg"), category: "frameworks" },
  { name: "FastAPI", logo: devicon("fastapi/fastapi-original.svg"), category: "frameworks" },
  { name: "Bootstrap", logo: devicon("bootstrap/bootstrap-original.svg"), category: "frameworks" },
  {
    name: "Tailwind CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    category: "frameworks",
  },
  { name: "Flowbite", logo: "https://flowbite.com/docs/images/logo.svg", category: "frameworks" },

  // Database & data
  { name: "MySQL", logo: devicon("mysql/mysql-original.svg"), category: "database" },
  { name: "PostgreSQL", logo: devicon("postgresql/postgresql-original.svg"), category: "database" },
  { name: "Redis", logo: devicon("redis/redis-original.svg"), category: "database" },
  { name: "Google Sheets API", logo: "https://cdn.simpleicons.org/googlesheets", category: "database" },
  {
    name: "XAMPP",
    logo: "https://www.apachefriends.org/images/xampp-logo-ac950edf.svg",
    category: "database",
  },

  // Dev tools & DevOps
  { name: "Git", logo: devicon("git/git-original.svg"), category: "devtools" },
  {
    name: "GitHub",
    logo: "https://github.blog/wp-content/uploads/2024/07/Icon_95220f.svg",
    category: "devtools",
  },
  { name: "GitHub Actions", logo: devicon("githubactions/githubactions-original.svg"), category: "devtools" },
  { name: "Docker", logo: devicon("docker/docker-original.svg"), category: "devtools" },
  { name: "Composer", logo: devicon("composer/composer-original.svg"), category: "devtools" },
  { name: "Node.js & npm", logo: devicon("nodejs/nodejs-original.svg"), category: "devtools" },
  { name: "Vite", logo: devicon("vitejs/vitejs-original.svg"), category: "devtools" },
  { name: "VS Code", logo: devicon("vscode/vscode-original.svg"), category: "devtools" },
  { name: "Android Studio", logo: devicon("androidstudio/androidstudio-original.svg"), category: "devtools" },

  // Design & productivity
  { name: "Figma", logo: devicon("figma/figma-original.svg"), category: "design" },
  {
    name: "Canva",
    logo: "https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg",
    category: "design",
  },
  {
    name: "Draw.io",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEXwhwXwhgDwhQDvgQDxkCHym0T1sHP////5z6z4zajymD3+9+/vfQD62LzveQDvgAD3xJnwixD3wJH738f98uf0p2H50bD7487znkv3xp+60zMUAAAAlUlEQVR4Ac2RBRKEMBAEszscG9zt/w/FnXNvJFPpeNTnIW6h8w7GqcXAWWdKj4lzUg9Sn5XWIK3Hpb4i2XbEaV+bz0hyHc/3PcelMzIIRRGRhDjTMZK4rUYs0a4rA36S+l3008QHeOWyXGspMnSxEK3zbLGQAdASl9uQAWoZI9PLUgUyECxx2SyXVUfJ67hYdPA6/iUNgBwIDVtfx2oAAAAASUVORK5CYII=",
    category: "design",
  },
  {
    name: "Microsoft 365",
    logo: "https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png",
    category: "design",
  },

  // AI tools & agents
  { name: "Claude Code", logo: "https://cdn.simpleicons.org/claude", category: "ai" },
  {
    name: "ChatGPT",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAUVBMVEVHcEz////////////////////////////////////////////d3d3Dw8PR0dHo6OgiIiIBAQFFRUXz8/O1tbVubm5aWlqgoKA5OTl8fHyLi4s1UCuLAAAADHRSTlMAM4fC7P+GYGEX4D7Ojz1PAAABKElEQVR4AY2TBZLEMBDEQloMtdn7/4depnzMKgjIONC90g/jBNN46rvPnCdemS4f1PXGB27XN3fnC/fPbl7WL/aKwbbLSes2ewzayrfmFICog2Sam7kLBinDXLSAj8I4H3LCCIKqDKuH9ACYjrtj7LtYBT5JmVkYfXcCcJFDFh6qtnZocuhGYBPeZiol23RRk6NtSUhNrrCqzOBq2xSTDpMF7L8qXh7ApL1TFR1AmdGGCwDtJtXB5tqyK/KkgC07YkgBFjtQk9qwAw1NLtpniwLlkMQEcGpBQDNZih5s5r7TgtA2fSTwM2RVUMCYrEAwbBaLygY5YXB5S1nUQQSCPMbtLdm2ql+lon3D4PqlhOZl/lpEX7j/qzSNy/uiPnef6U+tHYa3dngChykXpLJcwZkAAAAASUVORK5CYII=",
    category: "ai",
  },
  {
    name: "Gemini",
    logo: "https://www.gstatic.com/images/branding/productlogos/gemini_round/v1/web-64dp/logo_gemini_round_color_1x_web_64dp.png",
    category: "ai",
  },
];

export default techStack;

export const techCategories = [
  {
    id: "languages",
    icon: "bi-braces",
    title: "Languages",
    description:
      "The languages behind my web, mobile, and backend projects, from PHP and TypeScript to Kotlin.",
  },
  {
    id: "frameworks",
    icon: "bi-layers",
    title: "Frameworks & Libraries",
    description:
      "Laravel and React for most web work, Flutter for mobile, FastAPI for Python services, and CSS frameworks to ship clean UIs fast.",
  },
  {
    id: "database",
    icon: "bi-database",
    title: "Database & Data",
    description:
      "Relational databases, caching, and even Google Sheets when that's where the client's data already lives.",
  },
  {
    id: "devtools",
    icon: "bi-terminal",
    title: "Dev Tools & DevOps",
    description:
      "Version control, CI pipelines, containers, and the package managers that keep a project running the same on every machine.",
  },
  {
    id: "design",
    icon: "bi-vector-pen",
    title: "Design & Productivity",
    description:
      "Wireframes, diagrams, presentations, and documents that keep the team on the same page.",
  },
  {
    id: "ai",
    icon: "bi-stars",
    title: "AI Tools & Agents",
    description:
      "AI coding agents and assistants that speed up research, coding, and documentation, with me still reviewing every change.",
  },
];
