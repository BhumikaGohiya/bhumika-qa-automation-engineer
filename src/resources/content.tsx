import { About, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

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
      reliable, scalable test solutions for enterprise applications in Agile environments.
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
  description: "QA Automation Engineer based in Ottawa, Canada",
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
        I'm a <strong>Senior QA Automation Engineer</strong> who transforms complex testing challenges
        into streamlined, scalable automation. With 4+ years of experience across enterprise-grade web,
        API, and mobile platforms, I specialize in building efficient QA pipelines that drive speed,
        reliability, and visibility.
        <br /><br />
        Whether it's integrating Selenium test suites into CI/CD, improving API reliability with Rest Assured,
        or mentoring junior testers — I bring a mindset of quality, ownership, and continuous improvement.
        I'm also passionate about analytics, building dashboards and validation frameworks to surface insights
        that matter.
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
          <>Achieved 85% automation coverage by automating and maintaining 500+ test cases.</>,
          <>Led a QA team of 4–5 members, improving productivity by 30%.</>,
          <>Improved backend reliability through API automation and regression testing.</>,
          <>Reduced defect leakage by 20% through optimized test planning.</>,
        ],
        images: [],
      },
      {
        company: "Accenture",
        timeframe: "Jul 2020 – Nov 2021",
        role: "Analyst – Test Engineering",
        achievements: [
          <>Reduced manual testing effort by 40% via automation.</>,
          <>Integrated automated test suites into CI/CD pipelines.</>,
          <>Collaborated with Agile teams to improve delivery quality.</>,
        ],
        images: [],
      },
      {
        company: "Accenture",
        timeframe: "Aug 2018 – Jul 2020",
        role: "Analyst – Test Associate",
        achievements: [
          <>Designed and executed 300+ BDD test scripts.</>,
          <>Maintained a 98% defect closure rate.</>,
          <>Ensured defect-free releases through smoke and sanity testing.</>,
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
        description: <>Bachelor of Engineering</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Programming & Automation",
        description: <>Java, Python, SQL, Selenium, Playwright, TestNG, Rest Assured</>,
        tags: [],
        images: [],
      },
      {
        title: "API & Performance Testing",
        description: <>REST APIs, Postman, SoapUI, SIT, Load Testing</>,
        tags: [],
        images: [],
      },
      {
        title: "CI/CD & DevOps",
        description: <>Maven, Jenkins, GitHub Actions, Azure DevOps</>,
        tags: [],
        images: [],
      },
      {
        title: "Tools & Methodologies",
        description: <>Git, GitHub, Bitbucket, JIRA, Confluence, Agile/Scrum, SDLC, STLC</>,
        tags: [],
        images: [],
      },
    ],
  },
};

/* =======================
   WORK
======================= */
const work: Work = {
  path: "/work",
  label: "Projects",
  title: "Projects – Bhumika Gohiya",
  description: "QA automation and testing projects",
  projects: [
    {
      name: "Data Validation Framework",
      description: "Python-based engine that validates data integrity across ETL pipelines with QA alerts.",
      stack: ["Python", "Pandas", "Power BI"],
      link: "#",
    },
    {
      name: "API Test Automation",
      description: "Rest Assured-based automation suite integrated with Jenkins CI/CD for nightly runs.",
      stack: ["Java", "Rest Assured", "Jenkins"],
      link: "#",
    },
    {
      name: "Mobile App QA Automation",
      description: "Cross-platform automation with Appium for Android/iOS, reducing regression time by 40%.",
      stack: ["Appium", "TestNG", "Java"],
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

/* =======================
   GALLERY (NEUTRALIZED)
======================= */
const gallery: Gallery = {
  path: "/gallery",
  label: "",
  title: "",
  description: "",
  images: [],
};

export { person, social, newsletter, home, about, work, gallery, certifications };
