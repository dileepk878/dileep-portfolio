export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface SkillCategory {
  title: string;
  chips: { name: string; highlight?: boolean }[];
}

export interface SkillBar {
  name: string;
  percentage: number;
}

export interface Education {
  school: string;
  degree: string;
  year: string;
  icon: string;
}

export interface ContactItem {
  type: string;
  label: string;
  value: string;
  href?: string;
  icon: string;
  isLink?: boolean;
}

export interface Stat {
  num: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
  company: string;
}

export const heroData = {
  name: "Dileep K",
  roles: [
    "Full-Stack Developer",
    "Backend Engineer",
    "Python Specialist",
    "API Architect",
  ],
  description:
    "Backend specialist with 4+ years crafting scalable, high-performance APIs and web applications using Python, Django, and modern cloud infrastructure. Clean architecture advocate. Based in Palakkad, India.",
  tag: "Available for opportunities",
};

export const stats: Stat[] = [
  { num: "4+", label: "Years Experience" },
  { num: "2", label: "Companies" },
  { num: "16+", label: "Technologies" },
  { num: "4", label: "Languages Spoken" },
];

export const experiences: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Beinex Consulting",
    period: "August 2025 - Present",
    bullets: [
      "Leading backend development using Python, Django, and FastAPI",
      "Architecting scalable REST and async APIs for enterprise clients",
      "Mentoring junior engineers and conducting code reviews",
      "Driving best practices across the team for clean, maintainable code",
      "Collaborating with cross-functional teams on system design decisions",
    ],
  },
  {
    role: "Software Engineer",
    company: "Beinex Consulting",
    period: "August 2024 - August 2025",
    bullets: [
      "Developed and maintained high-performance web apps using Python and Django",
      "Designed and implemented robust API integrations",
      "Wrote clean, reusable, efficient code following best practices",
      "Participated in agile sprints: planning, standups, retrospectives",
      "Optimized applications for speed, efficiency, and scalability",
      "Conducted code reviews and debugging sessions for platform security",
    ],
  },
  {
    role: "Systems Engineer - Python",
    company: "Reizend Private Limited",
    period: "April 2023 - August 2024",
    bullets: [
      "Built Django web apps and REST APIs for retail and shop floor automation",
      "Collaborated with clients to gather and solution requirements",
      "Identified issues, analyzed information, and provided solutions",
      "Delivered projects on schedule using coordination and planning skills",
      "Quickly visualized development processes to capture opportunities",
    ],
  },
  {
    role: "Junior Systems Engineer",
    company: "Reizend Private Limited",
    period: "March 2022 - April 2023",
    bullets: [
      "Assisted in backend development using Python and Django",
      "Supported development of web-based retail applications",
      "Collaborated with senior engineers on system design and debugging",
      "Maintained and updated existing codebases to improve performance",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Backend",
    chips: [
      { name: "Python", highlight: true },
      { name: "Django", highlight: true },
      { name: "Django REST Framework", highlight: true },
      { name: "FastAPI", highlight: true },
      { name: "Celery" },
      { name: "Redis" },
      { name: "Pandas" },
    ],
  },
  {
    title: "Frontend",
    chips: [
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "jQuery" },
    ],
  },
  {
    title: "Databases",
    chips: [{ name: "MySQL" }, { name: "Oracle DB" }],
  },
  {
    title: "Infrastructure and DevOps",
    chips: [
      { name: "AWS EC2" },
      { name: "AWS Lambda" },
      { name: "Nginx" },
      { name: "Gunicorn" },
      { name: "Git" },
    ],
  },
];

export const skillBars: SkillBar[] = [
  { name: "Python / Django", percentage: 95 },
  { name: "FastAPI / REST API Design", percentage: 92 },
  { name: "Database Management", percentage: 85 },
  { name: "AWS / Cloud", percentage: 78 },
  { name: "JavaScript / Frontend", percentage: 72 },
  { name: "DevOps / Deployment", percentage: 80 },
];

export const educations: Education[] = [
  {
    school: "Bharathiyar University",
    degree: "BSc. Computer Science",
    year: "2020 - 2023",
    icon: "🎓",
  },
  {
    school: "IPT and GPTC Shoranur",
    degree: "Diploma in Computer Engineering",
    year: "2017 - 2020",
    icon: "🔧",
  },
];

export const projects: Project[] = [
  {
    title: "Aurex™ - Intelligent GRC & Analytics",
    company: "Beinex Consulting",
    description:
      "A unique plug-and-play digital assurance ecosystem that unifies Governance, Risk, Compliance, and Analytics. Powered by AI and Machine Learning, it provides 360-degree enterprise visibility and real-time risk monitoring.",
    tags: ["Python", "Django", "FastAPI", "AI/ML", "Pandas", "Analytics"],
    link: "https://www.aurex.ai/",
  },
  {
    title: "SFA - Shop Floor Automation",
    company: "Reizend Private Limited",
    description:
      "An advanced Production Analytics and Shop Floor Algorithm platform. Optimizes 24/7 machine utilization and minimizes process losses for large-scale manufacturing units by synchronizing production with real-time market demand.",
    tags: ["Python", "Big Data", "Analytics", "ERP Integration", "Optimization"],
    link: "https://reizend.ai/case-study2",
  },
  {
    title: "Dr. Sales - Sales Channel Automation",
    company: "Reizend Private Limited",
    description:
      "A comprehensive end-to-end sales channel and field-force automation software. Automates the entire sales cycle from factory to retailer, including reconciliation, route optimization, and live monitoring with in-built analytics.",
    tags: ["Python", "Django", "PostgreSQL", "Automation", "Logic", "Mobile API"],
    link: "https://reizend.ai/drsales.html",
  },
];

export const contactItems: ContactItem[] = [
  {
    type: "email",
    label: "Email",
    value: "dileepdeepz50@gmail.com",
    href: "mailto:dileepdeepz50@gmail.com",
    icon: "✉",
    isLink: true,
  },
  {
    type: "phone",
    label: "Phone",
    value: "+91 9526587827",
    href: "tel:+919526587827",
    icon: "✆",
    isLink: true,
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "View Profile →",
    href: "https://www.linkedin.com/in/dileepk878",
    icon: "in",
    isLink: true,
  },
  {
    type: "github",
    label: "GitHub",
    value: "View Profile →",
    href: "https://github.com/dileepk878",
    icon: "github",
    isLink: true,
  },
  {
    type: "location",
    label: "Location",
    value: "Palakkad, Kerala, India",
    icon: "📍",
    isLink: false,
  },
];
