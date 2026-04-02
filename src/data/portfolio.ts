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
    period: "March 2022 - August 2024",
    bullets: [
      "Built Django web apps and REST APIs for retail and shop floor automation",
      "Collaborated with clients to gather and solution requirements",
      "Identified issues, analyzed information, and provided solutions",
      "Delivered projects on schedule using coordination and planning skills",
      "Quickly visualized development processes to capture opportunities",
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
