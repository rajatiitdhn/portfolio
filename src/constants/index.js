import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  cp,
  pearl,
  trophy,
  coding,
  kubernetes,
  sql,
  aws,
  c,
  linux,
  cryptalk,
  graphical,
  terminet,
  accenture,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "internship",
    title: "Internship",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "cp",
    title: "CP",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Competitive Programmer",
    icon: mobile,
  },
  {
    title: "Devops and Cloud ",
    icon: backend,
  },
  {
    title: "Cybersecurity Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "C++",
    icon: c,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  { name: "Kubernetes", icon: kubernetes },
];

const experiences = [
  {
    title: "1200+ Problems Solved",
    company_name: "CP",
    icon: cp,
    iconBg: "#E6DEDD",
    date: "Ongoing",
    points: [
      "Codeforces Pupil (1360+), Leetcode Knight (1800+), Codechef 3 Star (1750). Consistently solving complex DSA problems across multiple platforms.",
    ],
  },
  {
    title: "Organized PearlCTF 2025",
    company_name: "Cyberlabs",
    icon: pearl,
    iconBg: "#000000",
    date: "April 2025",
    points: [
      "Hosted a world-level cybersecurity competition with 2500+ global participants, featuring diverse challenges across Web, Forensics, Crypto, Rev, and OSINT."
    ],
  },
  {
    title: "2nd Rank - ChronosCTF",
    company_name: "IIT Mandi",
    icon: trophy,
    iconBg: "#383E56",
    date: "March 2025",
    points: [
      "Achieved 2nd position in ChronosCTF, a Capture the Flag event conducted by IIT Mandi, among 200+ teams.",
    ],
  },
  {
    title: "Organized Trailblaze 2024",
    company_name: "Cyberlabs",
    icon: coding,
    iconBg: "#383E56",
    date: "Jan 2025",
    points: [
      " Organized intra-college 2-week CTF event during Cyberlabs recuritment 2024  with 600+ participants by Infosec division."
    ],
  },
   {
    title: "Winner - Winter of Code 6.0",
    company_name: "Cyberlabs",
    icon: trophy,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Won the Winter of Code 6.0 hackathon hosted by Cyberlabs, competing among 700+ participants."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Terminet",
    description:
      "A secure web-based shell interface using isolated Kubernetes pods, supporting 100+ concurrent users for real-time Linux command execution and on-demand pod creation per user with enforced resource quotas and automatic teardown.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: terminet,
    source_code_link: "https://github.com/rajatiitdhn/TermiNet",
  },
  {
    name: "Cryptalk",
    description:
      "A real-time chat application supporting 1-on-1 and group conversations with a seamless and responsive user experience across devices, featuring end-to-end encryption for secure messaging.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "AES",
        color: "green-text-gradient",
      },
    ],
    image: cryptalk,
    source_code_link: "https://github.com/rajatiitdhn/CryptTalk",
  },
  {
    name: "Graphical Password Authenticator",
    description:
      "A secure and user-friendly graphical password authentication system to enhance traditional text-based password security.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: graphical,
    source_code_link:
      "https://github.com/rajatiitdhn/Graphical-Password-Authentication",
  },
];

const competitiveProfiles = [
  {
    platform: "Codeforces",
    username: "@rajat31",
    currentRating: 1371,
    maxRating: 1371,
    title: "Pupil",
    solved: "500+",
    color: "from-cyan-400 to-blue-500",
    link: "https://codeforces.com/profile/Rajat31",
    icon: "/icons/codeforces.png",
  },
  {
    platform: "LeetCode",
    username: "@rajat31",
    currentRating: 1810,
    maxRating: 1810,
    title: "Knight",
    solved: "500+",
    color: "from-yellow-400 to-orange-500",
    link: "https://leetcode.com/u/rajat31",
    icon: "/icons/leetcode.png",
  },
  {
    platform: "CodeChef",
    username: "@rajat_66",
    currentRating: 1750,
    maxRating: 1750,
    title: "3 Star",
    solved: "100+",
    color: "from-sky-400 to-indigo-500",
    link: "https://www.codechef.com/users/rajat_66",
    icon: "/icons/codechef.png",
  },
];


const internships = [
  {
    title: "Software Engineer Intern (AEH)",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#000000",
    date: "May 2026 – July 2026",
    location: "Bengaluru, India",
    techStack: ["PySpark", "Databricks", "SQL", "Azure", "Delta Lake"],
    points: [
      "Built scalable ETL pipelines using PySpark, Databricks, SQL, and Azure, processing 10M+ records while optimizing Spark transformations, partitioning, and joins to reduce end-to-end pipeline execution time by 35%.",
      "Designed and implemented the Medallion Architecture (Bronze, Silver, Gold) using Delta Lake, improving data quality by 30% and delivering reliable, analytics-ready datasets for downstream reporting and business intelligence.",
      "Architected optimized SQL queries and reusable PySpark workflows for data cleansing, validation, and aggregation, enabling 10+ business dashboards with 99.9% data accuracy while following production-grade data engineering best practices.",
    ],
  },
];

export { services, technologies, experiences, testimonials, projects, competitiveProfiles, internships };