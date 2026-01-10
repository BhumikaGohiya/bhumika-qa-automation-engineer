import { About, Home, Newsletter, Person, Social, Work } from "@/types";

/* =======================
   PERSON
======================= */
const person: Person = {
  firstName: "Bhumika",
  lastName: "Gohiya",
  name: "Bhumika Gohiya",
  role: "QA Automation Engineer",
  avatar: "/images/bhumika.jpeg",
  email: "bhumikagohiya96@gmail.com",
  location: "America/Toronto",
  languages: ["English"],
};

/* =======================
   NEWSLETTER (DISABLED)
======================= */
const newsletter: Newsletter = {
  display: false,
  title: <>Newsletter</>,
  description: <>Newsletter</>,
};

/* =======================
   SOCIAL LINKS
======================= */
const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/BhumikaGohiya",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/bhumika-gohiya",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:bhumikagohiya96@gmail.com",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/bhumika_gohiya/",
    essential: true,
  },
];

/* =======================
   HOME
======================= */
const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Bhumika Gohiya | QA Automation Engineer",
  description:
    "QA Automation Engineer with enterprise experience in web, API, and CI/CD testing.",
  headline: <>Bhumika Gohiya</>,
  featured: {
    display: false,
    title: <></>,
    href: "",
  },
  subline: (
    <>
      Senior QA Automation professional with 4+ years of experience delivering
      scalable test solutions across enterprise-grade applications. Focused on automation, CI/CD, and continuous quality.
    </>
  ),
};

/* =======================
   ABOUT
======================= */
const about: About = {
  path: "/about",
  label: "About",
  title: "About – Bhumika Gohiya",
  description: "QA Automation Engineer based in Toronto, Canada",
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "A Bit About Me",
    description: (
      <>
        I'm a <strong>QA Automation Engineer</strong> passionate about quality-first engineering.
        With 4+ years of experience testing enterprise apps, APIs, and cloud pipelines,
        I specialize in automation frameworks, continuous testing, and integrating
        QA seamlessly into Agile teams.
        <br /><br />
        I enjoy building test architecture from scratch, reducing manual effort,
        and ensuring clean, stable releases. My work includes testing Salesforce, mobile apps,
        and backend services using tools like Selenium, Rest Assured, Jenkins, and Postman.
        I'm currently open to SDET, QA Lead, or DevOps-focused test roles in Canada.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Accenture",
        timeframe: "Nov 2021 – Feb 2023",
        role: "Senior Analyst – Test Automation Engineering",
        achievements: [
          <>Achieved 85% automation coverage across 500+ test cases.</>,
          <>Led a QA team to optimize release quality, reducing defect leakage by 20%.</>,
          <>Improved backend reliability via API automation and CI integration.</>,
        ],
        images: [],
      },
      {
        company: "Accenture",
        timeframe: "Jul 2020 – Nov 2021",
        role: "Analyst – Test Engineering",
        achievements: [
          <>Reduced manual testing by 40% through Selenium and mobile automation.</>,
          <>Integrated automated test suites into Jenkins CI/CD pipelines.</>,
          <>Collaborated closely with developers to stabilize in-sprint delivery.</>,
        ],
        images: [],
      },
      {
        company: "Accenture",
        timeframe: "Aug 2018 – Jul 2020",
        role: "Analyst – Test Associate",
        achievements: [
          <>Developed and executed 300+ BDD test scripts using Java and Cucumber.</>,
          <>Maintained a 98% defect closure rate.</>,
          <>Supported successful UAT cycles with daily smoke/sanity validations.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Carleton University, Ottawa, Canada",
        description: <>Master of Engineering – Technology Innovation Management</>,
      },
      {
        name: "Madhav Institute of Technology & Science, India",
        description: <>Bachelor of Engineering – Electronics</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Languages & Automation",
        description: <>Java, Python, SQL, Selenium, Playwright, TestNG, Rest Assured</>,
        tags: [],
        images: [],
      },
      {
        title: "API & Backend Testing",
        description: <>REST APIs, Postman, SoapUI, SIT, Regression, Load Testing</>,
        tags: [],
        images: [],
      },
      {
        title: "CI/CD & DevOps",
        description: <>Maven, Jenkins, GitHub Actions, Azure DevOps, Bitbucket</>,
        tags: [],
        images: [],
      },
      {
        title: "Project Tools & Methods",
        description: <>JIRA, Confluence, Agile/Scrum, SDLC, STLC, BDD, Gherkin</>,
        tags: [],
        images: [],
      },
    ],
  },
};

/* =======================
   WORK – Projects
======================= */
const work: Work = {
  path: "/work",
  label: "Projects",
  title: "Projects – Bhumika Gohiya",
  description: "Selected QA and automation projects.",
  projects: [
    {
      name: "Data Validation Framework",
      description:
        "Python-based engine that validates data integrity across ETL pipelines, sending QA alerts to prevent data issues early.",
      stack: ["Python", "Pandas", "Power BI"],
      link: "#",
    },
    {
      name: "API Automation Suite",
      description:
        "Test suite for REST APIs using Rest Assured and Jenkins CI/CD. Supports nightly and on-demand regression runs.",
      stack: ["Java", "Rest Assured", "Jenkins"],
      link: "#",
    },
    {
      name: "Mobile App Testing (Android/iOS)",
      description:
        "Cross-platform automation with Appium. Reduced release cycle by 40% with consistent functional validations.",
      stack: ["Appium", "Java", "TestNG"],
      link: "#",
    },
  ],
};

/* =======================
   CERTIFICATIONS
======================= */
const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    date: "2020",
  },
  {
    title: "Lean Six Sigma White Belt",
    date: "2020",
  },
  {
    title: "Academy Accreditation: Generative AI Fundamentals",
    date: "2023",
  },
];

export { person, social, newsletter, home, about, work, certifications };
