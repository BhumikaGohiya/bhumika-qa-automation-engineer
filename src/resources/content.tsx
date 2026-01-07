import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

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
    title: "Professional Summary",
    description: (
      <>
        QA Automation Engineer with over 4 years of experience working on
        large-scale enterprise and BFSI applications. Strong background in UI
        and API automation, CI/CD integration, mobile testing, and end-to-end
        quality assurance.
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
   BLOG
======================= */

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog",
  description: "Thoughts on QA, automation, and quality engineering",
};

/* =======================
   WORK
======================= */

const work: Work = {
  path: "/work",
  label: "Projects",
  title: "Projects – Bhumika Gohiya",
  description: "QA automation and testing projects",
};

/* =======================
   GALLERY (DISABLED)
======================= */

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "",
  description: "",
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
