import { ProfileData, SkillCategory, TimelineItem, Project, Award, NavLink } from './types';

export const PROFILE: ProfileData = {
  name: "Shreya Setty V N",
  roles: [
    "Backend Engineer & Spring Boot Developer",
    "AI & Cloud-Native Solutions Builder",
    "Information Science Undergrad @ JSSATE",
    "Full-Stack Developer "
  ],
  headline: "Information Science and Engineering undergraduate building scalable Spring Boot architectures, multimodal AI platforms, and cloud-native systems.",
  bioParagraphs: [
    "I am an Information Science and Engineering undergraduate at JSS Academy of Technical Education, Bengaluru (CGPA: 9.1/ 10). Hands-on experience through backend engineering industry internships and AI-powered systems development.",
    "Experienced in architecting RESTful microservices with Spring Boot, migrating APIs from Node.js, integrating Computer Vision & Groq LLM pipelines, and automating secure AWS cloud deployments with S3 and Secrets Manager."
  ],
  email: "shreyasetty06@gmail.com",
  phone: "+91-8105626249",
  location: "Bengaluru, Karnataka, India",
  availability: "Open to Backend & Software Engineering Roles",
  avatarUrl: "",
  socials: [
    { label: "GitHub", url: "https://github.com/shreyavn06", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/shreya-setty-vn-8299a3369/", icon: "linkedin" },
    { label: "Email", url: "mailto:shreyasetty06@gmail.com", icon: "mail" }
  ],
  formspreeEndpoint: "https://formspree.io/f/mqkvgzqo"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "SQL"]
  },
  {
    title: "Backend Frameworks & Cloud",
    skills: ["Spring Boot", "FastAPI", "JSP / Servlets", "MERN Stack (Basics)", "AWS (S3, EC2, Secrets Manager)", "REST APIs"]
  },
  {
    title: "AI, ML & Data Science",
    skills: ["LangGraph", "Groq LLM APIs", "Scikit-learn", "Pandas", "NumPy", "Computer Vision", "NLP", "Logistic Regression"]
  },
  {
    title: "Databases, Tools & Core CS",
    skills: ["MySQL", "MongoDB", "MySQL Workbench", "Git", "GitHub", "Postman", "Apache Tomcat", "OOP", "Data Structures", "DBMS", "Computer Networks", "Operating Systems"]
  }
];

export const EXPERIENCE_ITEMS: TimelineItem[] = [
  {
    title: "Backend Engineering Intern",
    organization: "Rizzle Technology Pvt Ltd",
    period: "Feb 2026 – Apr 2026",
    location: "Bengaluru, India",
    type: "Internship",
    description: [
      "Developed RESTful APIs using Spring Boot following layered architecture principles for Academic ERP modules.",
      "Led migration of Assessment Module APIs from Node.js to Spring Boot, improving backend consistency, type-safety, and maintainability.",
      "Engineered complex Result APIs handling detailed business logic and high-volume data processing.",
      "Developed and automated integration testing workflows, enhancing system reliability and reducing manual QA effort.",
      "Integrated Amazon S3 for file storage and AWS Secrets Manager for secure credential management."
    ],
    tags: ["Java", "Spring Boot", "REST APIs", "AWS S3", "AWS Secrets Manager", "MySQL", "Git", "Postman"]
  },
  {
    title: "Co-Founder & Vice President",
    organization: "MUNSOC",
    period: "2024 – 2025",
    location: "Bengaluru, India",
    type: "Leadership",
    description: [
      "Co-founded and served as Vice President, leading cross-functional student teams and coordinating major flagship events.",
      "Worked closely with diverse stakeholders to drive organizational initiatives, delegate management, and sponsorships."
    ],
    tags: ["Leadership", "Team Management", "Event Strategy", "Public Speaking"]
  },
  // {
  //   title: "Delegate – DSI MUN 3.0",
  //   organization: "UNHRC",
  //   period: "2024",
  //   location: "Bengaluru, India",
  //   type: "Leadership",
  //   description: [
  //     "Collaborated with international delegates to conduct rigorous policy research and draft resolutions.",
  //     "Participated in structured diplomatic debates representing policy frameworks on global human rights issues."
  //   ],
  //   tags: ["Policy Research", "Diplomacy", "Resolution Drafting"]
  // },
  {
    title: "Placement Coordinator & Volunteer",
    organization: "JSS Academy of Technical Education",
    period: "2024 – Present",
    location: "Bengaluru, India",
    type: "Leadership",
    description: [
      "Collaborated with departmental placement teams and students to support recruitment drives and improve campus coordination efficiency.",
      "Organized and volunteered for multiple community and college technological initiatives."
    ],
    tags: ["Coordination", "Recruitment Operations", "Community Volunteering"]
  }
];

export const EDUCATION_ITEMS: TimelineItem[] = [
  {
    title: "Bachelor of Engineering in Information Science and Engineering",
    organization: "JSS Academy of Technical Education",
    period: "08/2023 – Present",
    location: "Bengaluru, India",
    description: [
      "Academic Performance: CGPA 9.04 / 10 (Pursuing).",
      "Specialized in backend architectures, cloud computing, and AI-driven systems engineering.",
      "Core Coursework: Object-Oriented Programming (OOP), Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks."
    ],
    tags: ["Information Science", "CGPA 9.1", "Data Structures", "OOP", "DBMS", "Computer Networks"],
    score: "9.1"
  },
  {
    title: "Karnataka Pre-University Board (PCMB)",
    organization: "GR Pre University",
    period: "06/2021 – 05/2023",
    location: "Bengaluru, India",
    description: [
      "Completed pre-university education with distinction in PCMB (Physics, Chemistry, Mathematics, Biology) stream.",
      "Strong foundation in core sciences and mathematics, achieving academic excellence."
    ],
    score: "92.67%"
  },
  {
    title: "ICSE",
    organization: "Sudarshan Vidya Mandir",
    period: "05/2009 – 05/2021",
    location: "Bengaluru, India",
    description: [
      "Completed secondary education with proficiency in English, Mathematics, Science, and other core subjects.",
    ],
    score: "95%"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "AI-Enabled Smart Governance Platform",
    description: "Developed a smart governance platform using React.js, FastAPI, and MongoDB for reporting civic issues. Integrated Computer Vision and NLP to automatically identify issues and classify complaints. Designed a multimodal decision engine for intelligent complaint routing and automated notification workflows for real-time tracking.",
    tags: ["React.js", "FastAPI", "MongoDB", "Computer Vision", "NLP", "Multimodal AI", "REST APIs"],
    githubUrl: "https://github.com/shreyasetty",
    featured: true,
    metrics: "Computer Vision + NLP Multimodal Complaint Routing",
    period: "2026"
  },
  {
    title: "StudyForge AI",
    description: "Built an AI-powered study assistant for generating personalized study plans, flashcards, and quizzes. Integrated Groq LLM APIs to provide low-latency learning assistance and interactive chatbot support. Developed secure REST APIs and JWT-based authentication for user management, with study tracking and learning analytics dashboards.",
    tags: ["Groq LLM", "Python", "FastAPI", "LangGraph", "JWT Auth", "Learning Analytics"],
    githubUrl: "https://github.com/shreyasetty",
    featured: true,
    metrics: "Groq LLM APIs • Automated Flashcards & Study Plans",
    period: "2025"
  },
  {
    title: "Placement Prediction Model",
    description: "Developed a machine learning model using Logistic Regression to predict student placement outcomes based on historical academic and skill indicators. Performed extensive data preprocessing and feature engineering. Evaluated using accuracy, precision, recall, and confusion matrix diagnostics.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Logistic Regression", "Feature Engineering"],
    githubUrl: "https://github.com/shreyasetty",
    featured: true,
    metrics: "End-to-end ML Workflow • Confusion Matrix Evaluation",
    period: "2025"
  }
];

export const AWARDS: Award[] = [
  {
    title: "Cognizant Technoverse 2026 Finalist",
    issuer: "Cognizant Technology Solutions",
    year: "2026",
    detail: "Selected as part of the Top 24 national teams in Cognizant's AI-focused innovation hackathon.",
    type: "Award"
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training & Certification",
    year: "2026",
    detail: "Comprehensive certification covering AWS cloud fundamentals, core compute, storage, security, and architectures.",
    type: "Certification"
  },
  {
    title: "Mastering Cloud Security with AWS",
    issuer: "AWS Cloud Practitioner Workshop",
    year: "2026",
    detail: "Focused workshop credentials covering AWS IAM, Secrets Manager, VPC boundaries, and cloud encryption best practices.",
    type: "Certification"
  },
  {
    title: "Machine Learning with Real World Projects",
    issuer: "L&T EduTech",
    year: "2026",
    detail: "Hands-on industry credential in real-world ML model deployment, pipelines, and evaluation.",
    type: "Certification"
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Professional AI Program",
    year: "2025",
    detail: "Foundational credential covering LLMs, transformer architectures, prompt engineering, and GenAI applications.",
    type: "Certification"
  },
 
];

export const NAV_LINKS: NavLink[] = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "EDUCATION", href: "#education" },
  { label: "AWARDS & CERTS", href: "#awards" },
  { label: "CONTACT", href: "#contact" }
];
