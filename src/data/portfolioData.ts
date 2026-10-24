import { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem, EditableResumeData } from '../types/portfolio';
import instagramCloneImg from '../assets/images/instagram_clone_ui_1792855304061.jpg';

export const PERSONAL_INFO = {
  name: "Tharun S K",
  shortTitle: "AI/ML Developer | Full Stack Developer",
  tagline: "Engineering intelligent multimodal systems, LLM workflows, and high-performance reactive web applications.",
  email: "tharunsk8307@gmail.com",
  phone: "+91 7200901942",
  whatsappUrl: "https://wa.me/917200901942",
  location: "Old Washermenpet, Chennai - 600021, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/tharun-sivakumar-573026339",
  github: "https://github.com/tharunsk8307-tech",
  instagram: "https://www.instagram.com/ft__.thxrun_.19?vrfl=MWQ0M2NxaXE3MTNjMA==",
  avatarUrl: "/assets/aistudio/WhatsApp_Image_2026-10-24_at_7.39.31_PM_a227f735.jpeg",
  resumePdfUrl: "/assets/aistudio/Tharun_Resume__1__418b8ab9.pdf",
  bio: "I am an engineering undergraduate specializing in Artificial Intelligence and Machine Learning at Annamalai University (Faculty of Engineering and Technology). With a deep enthusiasm for merging neural architectures with modern full-stack web platforms, I build end-to-end applications ranging from multimodal AI voice operating systems (Jarvis OS) and Gemini-powered conversational assistants (Nova AI) to robust responsive social clones and data-driven management systems.",
  careerGoal: "To innovate and lead as an AI/ML and Full-Stack Engineer, architecting scalable generative AI solutions, real-time agentic workflows, and robust software architectures that solve tangible real-world problems.",
  problemSolvingPhilosophy: "First-principles engineering: dissecting complex operational challenges down to their core data flows, choosing the optimal balance of machine intelligence and systems engineering, and shipping reliable, intuitive software."
};

export const PROJECTS: Project[] = [
  {
    id: "jarvis-os",
    title: "AI Voice Assistant (THARUN OS - J.A.R.V.I.S.)",
    subtitle: "Multimodal Voice Assistant & Executive OS with Computer Vision HUD",
    category: "AI/ML",
    description: "An advanced voice-controlled operational assistant with customizable AI personas (Jarvis, Friday, Charon), real-time speech synthesis, live camera vision feed analysis, and system workflow automation.",
    longDescription: "Engineered a comprehensive executive OS cockpit combining voice processing with Gemini multimodal capabilities. Users can execute verbal directives, trigger Gmail and WhatsApp integrations, launch live vision scans via camera stream, and toggle multiple voice synthesis accents in real-time.",
    image: "/assets/aistudio/Screenshot_2026-10-24_182607_4210d9a5.png",
    githubUrl: "https://github.com/tharunsk8307-tech/Javris",
    technologies: ["Python", "Gemini API", "Speech Recognition", "Voice Synthesis", "OpenCV Vision", "Automation Scripting"],
    features: [
      "Real-time voice synthesis with British Executive, Tactical & Custom accents",
      "Live computer vision camera feed scanning & object understanding",
      "Direct communication shortcuts for Gmail and WhatsApp automation",
      "Multiple AI persona modes (J.A.R.V.I.S., F.R.I.D.A.Y., C.H.A.R.O.N., V.A.N.G.U.A.R.D.)",
      "HUD telemetry for CPU performance, chronometers, and directive logs"
    ],
    architecture: [
      "Audio Capture & Transcription Engine (SpeechRecognition/PyAudio)",
      "Gemini Multimodal LLM Reasoning Core for context & intent routing",
      "Action Dispatcher for system controls, notifications, and web triggers",
      "High-speed Text-to-Speech (TTS) response playback"
    ],
    highlight: "Featured AI Flagship Project"
  },
  {
    id: "nova-ai",
    title: "Nova AI Chatbot",
    subtitle: "Conversational Intelligence Powered by Google Gemini",
    category: "AI/ML",
    description: "A fast, distraction-free conversational AI web application featuring dynamic session management, instant exploration prompts, custom API authentication, and contextual conversation memory.",
    longDescription: "Nova delivers an ultra-clean, human-centered chat interface backed by Google's Gemini models. Built with modern React and Tailwind CSS, it enables instant code debugging, creative generation, conceptual breakdowns, and markdown formatting with local persistence.",
    image: "/assets/aistudio/Screenshot_2026-10-24_190359_63bc27d1.png",
    githubUrl: "https://github.com/tharunsk8307-tech/nova-ai",
    technologies: ["React.js", "Google Gemini API", "Tailwind CSS", "TypeScript", "Local Storage", "Lucide Icons"],
    features: [
      "Dynamic prompt discovery cards (Quantum computing, email drafts, coding debug)",
      "Persistent session sidebar with instant new chat creation",
      "Secure client-side API key configuration and local state caching",
      "Markdown code blocks with syntax highlighting and copy-to-clipboard",
      "Responsive layout optimized for both desktop widescreen and mobile devices"
    ],
    architecture: [
      "React functional components with custom chat hook state",
      "Streaming responses integration with Gemini Flash endpoints",
      "Browser LocalStorage adapter for thread history preservation",
      "Optimized theme tokens and smooth scroll-anchor rendering"
    ],
    highlight: "Modern Gemini Integration"
  },
  {
    id: "instagram-clone",
    title: "Instagram Clone Web App",
    subtitle: "Full-Featured Social Media Feed & Interaction Platform",
    category: "Full Stack",
    description: "A pixel-perfect, responsive social media platform replicating Instagram's web application with interactive stories trays, dynamic feed posts, like/comment state management, and user suggestions.",
    longDescription: "Developed using modern React and semantic CSS/Tailwind, this clone recreates the complete social engagement experience. Users can browse stories with gradient avatar rings, like posts with instant counter feedback, submit comments, and explore trending creators.",
    image: instagramCloneImg,
    githubUrl: "https://github.com/tharunsk8307-tech/Instagram-Clone",
    technologies: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3 / Tailwind", "State Management", "Responsive UI"],
    features: [
      "Dynamic stories tray with active user avatars and viewing indicators",
      "Interactive photo feed with double-tap like animations and bookmarking",
      "Live comment thread submission and optimistic counter updates",
      "Clean left-sidebar navigation (Home, Search, Explore, Messages, Profile)",
      "Right-rail creator suggestions with dynamic follow/unfollow states"
    ],
    architecture: [
      "Modular component hierarchy (Feed, PostCard, StoriesBar, SideRail)",
      "Centralized state handling for user interactions and engagement metrics",
      "High-fidelity responsive CSS grid and flexbox structure",
      "Zero-latency client interactions with fluid UI feedback"
    ],
    highlight: "Interactive UI & Social UX"
  },
  {
    id: "student-management",
    title: "Student Management System",
    subtitle: "Institutional Portal for Student Records & Academic Grading",
    category: "Database / System",
    description: "A secure institutional portal designed for educational faculties to intake student admissions, record subject marks, track academic performance, and generate comprehensive grade reports.",
    longDescription: "Created to streamline school and collegiate data operations, this system pairs a clean portal dashboard with a relational database backend. Teachers and administrators can securely register candidates, input test scores, calculate GPA/percentages, and audit student data rosters.",
    image: "/assets/aistudio/Screenshot_2026-06-16_104935_c9023f11.png",
    githubUrl: "https://github.com/tharunsk8307-tech/student_management",
    technologies: ["Python", "MySQL / Relational DB", "Web Frontend", "SQL Queries", "Data Validation"],
    features: [
      "Student Form module for structured data entry (personal details, courses, enrollments)",
      "Student Details module for searching and reviewing grade reports and performance",
      "Secure authentication session flow with fast administrative log-off",
      "Automated marks calculation, aggregate rankings, and report exports",
      "Relational table schemas ensuring academic data integrity and indexing"
    ],
    architecture: [
      "Relational database schema with primary and foreign key constraints",
      "Backend query handlers for transactional grade submissions",
      "Interactive web UI with card navigation and feedback alerts",
      "Audit logs for student record updates and data consistency"
    ],
    highlight: "Academic Systems Engineering"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Basics",
    skills: [
      { name: "C", level: "Proficient", description: "Memory management, pointers, low-level data structures" },
      { name: "C++", level: "Proficient", description: "OOP principles, STL algorithms, performance optimization" },
      { name: "Java", level: "Proficient", description: "Object-oriented design, collections, JVM concurrency" },
      { name: "Python", level: "Advanced", description: "AI/ML scripting, automation, backend APIs, data handling" }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: "Advanced", description: "Hooks, component lifecycles, virtual DOM, modern SPA" },
      { name: "Vue.js", level: "Proficient", description: "Reactivity system, single-file components, composition API" },
      { name: "JavaScript (ES6+)", level: "Advanced", description: "Async/await, closures, promises, functional methods" },
      { name: "HTML5 & CSS3", level: "Advanced", description: "Semantic markup, modern flexbox, CSS grid, accessible UI" },
      { name: "Tailwind CSS", level: "Advanced", description: "Utility-first design, fluid layouts, responsive breakpoints" }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Python / FastAPI", level: "Advanced", description: "High-performance async REST APIs, Pydantic schemas" },
      { name: "Node.js", level: "Proficient", description: "Server-side JavaScript runtimes, event loop, NPM ecosystem" },
      { name: "Express.js", level: "Proficient", description: "Middleware routing, REST architecture, token validation" },
      { name: "RESTful APIs", level: "Advanced", description: "Contract design, JSON serialization, status code standard" }
    ]
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Google Gemini API", level: "Advanced", description: "Multimodal prompts, structured JSON schema outputs, streaming" },
      { name: "Large Language Models", level: "Proficient", description: "Prompt engineering, token optimization, system personas" },
      { name: "RAG Systems", level: "Proficient", description: "Retrieval-augmented generation, embeddings, semantic lookup" },
      { name: "Machine Learning Core", level: "Proficient", description: "Supervised/unsupervised models, regression, classification" },
      { name: "Voice & Speech AI", level: "Proficient", description: "Speech recognition, text-to-speech modulation, audio transforms" }
    ]
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: "MySQL", level: "Advanced", description: "Relational modeling, indexing, ACID transactions, complex joins" },
      { name: "PostgreSQL", level: "Proficient", description: "Advanced relational queries, JSONB columns, performance indexing" },
      { name: "MongoDB", level: "Proficient", description: "Document-oriented NoSQL storage, schema aggregation pipelines" }
    ]
  },
  {
    title: "Developer Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: "Advanced", description: "Branching workflows, version control, CI/CD collaboration" },
      { name: "Docker", level: "Proficient", description: "Containerization of apps, lightweight microservice environments" },
      { name: "VS Code", level: "Advanced", description: "Developer productivity, debugger setups, multi-language tooling" },
      { name: "Jupyter Notebook", level: "Proficient", description: "Exploratory data analysis, ML model prototyping, visualizations" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "sybergate",
    role: "AI & Software Engineering Intern",
    company: "SyberGate Technologies Private Limited",
    location: "Prince Info Park, Ambattur Industrial Estate, Chennai",
    period: "May 27, 2026 – June 30, 2026",
    duration: "Industrial Internship",
    description: [
      "Engaged in industry-grade Artificial Intelligence operations and practical system design frameworks.",
      "Explored operations overview involving AI system architecture, model testing, and application deployment.",
      "Gained hands-on exposure to production software development concepts and best engineering practices.",
      "Commended on official record for conduct and technical integrity of the highest standard."
    ],
    technologies: ["Artificial Intelligence", "AI System Operations", "Software Design", "Python", "Data Workflows"],
    certificateUrl: "/assets/aistudio/WhatsApp_Image_2026-10-23_at_8.27.37_PM_a0cb1c5d.jpeg",
    certificateType: "image"
  },
  {
    id: "nanomatics",
    role: "XR & AI Voice Modulation Intern",
    company: "Nanomatics Technologies India Pvt Ltd",
    location: "Dr. VSI Estate, Thiruvanmiyur, Chennai",
    period: "May 28, 2025 – June 27, 2025",
    duration: "Industrial Internship",
    description: [
      "Acquired comprehensive overview of Augmented Reality (AR) and Virtual Reality (VR) applications in the XR domain.",
      "Explored the practical implementation of Artificial Intelligence in voice modulation and vocal transformation pipelines.",
      "Developed an understanding of immersive spatial interfaces and multi-sensory interactive applications.",
      "Recognized by Director Madhanagopal Arunachalam for strong learning agility and commitment."
    ],
    technologies: ["Augmented Reality (AR)", "Virtual Reality (VR)", "XR Domain", "Voice Modulation AI", "Audio Transformation"],
    certificateUrl: "/assets/aistudio/Internship_Certificate_Tharun_SK__1__d75a4a09.pdf",
    certificateType: "pdf"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
    institution: "Annamalai University (Faculty of Engineering and Technology)",
    location: "Chidambaram, Tamil Nadu",
    period: "2024 – 2028 (Expected 2030 Batch)",
    score: "Cumulative GPA: 8.13 / 10.00",
    description: "Specializing in Artificial Intelligence and Machine Learning (AI & ML) paired with modern full-stack web engineering.",
    coursework: [
      "Principle of Artificial Intelligence",
      "Fundamental of Machine Learning",
      "Database Management System (DBMS)",
      "Data Structures & Algorithms",
      "Object Oriented Programming (OOP)",
      "Operating Systems & Architecture"
    ]
  },
  {
    degree: "Secondary & Higher Secondary Education (6th to 12th Standard)",
    institution: "K. C. Sankaralingam Nadar Higher Secondary School",
    location: "Chennai, Tamil Nadu",
    period: "Completed",
    description: "Built strong foundations in mathematics, physical sciences, computer science basics, and analytical problem solving."
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  // NPTEL Certifications
  {
    id: "nptel-nlp",
    title: "Deep Learning with Natural Language Processing",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
    category: "NPTEL",
    date: "April 2026",
    verification: "Official NPTEL Examination Completed",
    description: "Comprehensive mastery of neural language modeling, recurrent networks, sequence-to-sequence transformers, and self-attention mechanisms.",
    skillsGained: ["Deep Neural Networks", "Transformers & Self-Attention", "NLP Pipelines", "Word2Vec & Embeddings", "Sequence Modeling"]
  },
  {
    id: "nptel-rl",
    title: "Reinforcement Learning",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
    category: "NPTEL",
    date: "October 2026",
    verification: "Official NPTEL Examination Completed",
    description: "Rigorous theoretical and algorithmic grounding in Markov Decision Processes (MDPs), dynamic programming, policy evaluation, and value iteration.",
    skillsGained: ["Markov Decision Processes", "Q-Learning & SARSA", "Policy Gradient Methods", "Deep Q-Networks (DQN)", "Actor-Critic Architectures"]
  },

  // Professional & Technical Certifications
  {
    id: "dataprep-governance",
    title: "Dataprep and Strategy (Python for Data Governance)",
    issuer: "Professional Data Governance Certification",
    category: "Professional",
    date: "January 2026",
    verification: "Verified Practical Coursework",
    description: "Hands-on data cleaning, pipeline engineering, validation rules, and governance policies using Python and Pandas.",
    skillsGained: ["Python Data Wrangling", "Data Governance & Compliance", "Data Cleansing Pipelines", "Quality Assurance & ETL"]
  },
  {
    id: "postman-api",
    title: "API Development, Testing and Automation with Postman",
    issuer: "Postman / API Academy",
    category: "Professional",
    date: "September 2026",
    verification: "Verified API Specialization",
    description: "Design-first API workflows, automated test suites, Newman CLI integration in CI/CD, mock servers, and contract assertions.",
    skillsGained: ["Postman Test Automation", "RESTful API Validation", "Newman CLI & CI/CD", "Mock Servers & Environments", "Contract Assertions"]
  },

  // Industrial Internship Certificates
  {
    id: "sybergate-cert",
    title: "Certificate of Artificial Intelligence Familiarization & Operations",
    issuer: "SyberGate Technologies Private Limited",
    category: "Industrial",
    date: "June 2026",
    certificateUrl: "/assets/aistudio/WhatsApp_Image_2026-10-23_at_8.27.37_PM_a0cb1c5d.jpeg",
    certificateType: "image",
    description: "Industrial training program covering AI system architecture, enterprise model operations, testing protocols, and software deployment concepts.",
    skillsGained: ["AI Production Workflows", "System Design Patterns", "Deployment Operations", "Model Testing"]
  },
  {
    id: "nanomatics-cert",
    title: "Certificate of Internship in XR & Voice AI Transformation",
    issuer: "Nanomatics Technologies India Pvt Ltd",
    category: "Industrial",
    date: "July 2025",
    certificateUrl: "/assets/aistudio/Internship_Certificate_Tharun_SK__1__d75a4a09.pdf",
    certificateType: "pdf",
    description: "Hands-on exploration of Augmented Reality (AR) and Virtual Reality (VR) applications in the XR domain, alongside AI voice modulation and transformation.",
    skillsGained: ["AR / VR Architecture", "Spatial XR Concepts", "AI Voice Transformation", "Vocal Modulation"]
  }
];

export const INITIAL_RESUME_DATA: EditableResumeData = {
  fullName: "S. K. Tharun",
  targetRole: "AI/ML Developer | Full Stack Developer",
  email: "tharunsk8307@gmail.com",
  phone: "+91 7200901942",
  location: "No. 68, Perambalu Street, Old Washermenpet, Chennai - 600021",
  linkedin: "linkedin.com/in/tharun-sivakumar-573026339",
  github: "github.com/tharunsk8307-tech",
  summary: "Passionate 2nd-year Engineering student specializing in AI & ML with 2 years of practical internship experience in XR voice transformation and AI operations. Skilled in Python, Google Gemini API, C++, React.js, FastAPI, Postman API automation, and MySQL. Adept at building end-to-end intelligent systems, reinforcement learning models, and modern responsive web applications.",
  skillsText: "• Programming: Python, C, C++, Java, JavaScript (ES6+)\n• AI & ML: Google Gemini API, Deep Learning, Reinforcement Learning, NLP, RAG, Voice AI\n• Frontend: React.js, Vue.js, HTML5, CSS3, Tailwind CSS\n• Backend & APIs: FastAPI, Node.js, Express.js, Postman Automation, REST APIs\n• Databases: MySQL, PostgreSQL, MongoDB\n• Tools & DevOps: Git, GitHub, Docker, VS Code, Jupyter Notebook, Postman",
  educationText: "Annamalai University — B.E. Computer Science & Engineering (AI & ML) | GPA: 8.13/10.00 (2024–2028)\nK. C. Sankaralingam Nadar Higher Secondary School — 6th to 12th Standard Education",
  experienceText: "SyberGate Technologies Pvt Ltd — AI & Software Intern (May–June 2026, Chennai)\n• Studied AI operations overview, design & development concepts, model integration.\n\nNanomatics Technologies India Pvt Ltd — XR & Voice AI Intern (May–June 2025, Chennai)\n• Explored AR/VR applications in XR domain and AI voice modulation & transformation.",
  projectsText: "1. AI Voice Assistant (THARUN OS - J.A.R.V.I.S.): Voice-controlled executive OS with computer vision HUD, custom accents, Gemini multimodal reasoning.\n2. Nova AI Chatbot: Responsive conversational application built on Gemini API with dynamic prompt discovery and thread persistence.\n3. Instagram Clone: Social media web application in React.js featuring interactive stories, dynamic feeds, and engagement workflows.\n4. Student Management System: Institutional records portal in Python & MySQL for student intake, mark compilation, and grading analytics."
};
