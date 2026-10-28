// Single source of truth for personal details used across the site.

export const site = {
  name: "M. Aditya Patra",
  shortName: "Aditya Patra",
  role: "ML Engineer in the making",
  tagline:
    "I build machine-learning systems end to end, from messy public data to models I can explain and services that run. Lately that means satellites, Formula 1 and exoplanets.",
  location: "Pune, India",
  // Optional portrait for the hero and about sections, e.g. "/me.jpg" in public/. Leave null for the monogram.
  photo: null as string | null,
  education: {
    degree: "B.Tech, Computer Science & Engineering",
    school: "DY Patil International University, Pune",
    note: "3rd year",
  },
  now: {
    project: "orbitguard",
    text: "Now building OrbitGuard: collision screening for 14k+ objects in orbit",
  },
  links: {
    github: "https://github.com/aditya-patra1011",
    linkedin: "https://www.linkedin.com/in/m-aditya-patra-1339853b9/",
    email: "adityapatra501@gmail.com",
    resume: "/resume.pdf",
  },
} as const;

// Shown as the career cards. Facts come from the résumé.
type Club = { name: string; role: string; since: string; text: string };
type Experience = { period: string; role: string; org: string; text: string; clubs?: Club[] };

export const experience: Experience[] = [
  {
    period: "Jun 2026 – Aug 2026",
    role: "ML & Data Intern",
    org: "CloudExperts.co",
    text: "Reviewed production code for a RAG web app on React/TypeScript and AWS Lambda; worked on stock market analysis.",
  },
  {
    period: "2024 – 2028",
    role: "B.Tech, CSE",
    org: "DY Patil Intl. University",
    text: "Computer Science & Engineering, currently in third year, based in Pune.",
  },
  {
    period: "2023 – Present",
    role: "Concordia · Tech For Need",
    org: "University Clubs",
    text: "",
    clubs: [
      {
        name: "Concordia Club",
        role: "Logistics & Organizing",
        since: "2023",
        text: "Ran logistics for 3+ university events, including Model UN, with 100+ participants.",
      },
      {
        name: "Tech For Need",
        role: "Technical Team",
        since: "Oct 2026",
        text: "Joined the technical team at the start of October 2026.",
      },
    ],
  },
  {
    period: "2024",
    role: "Certifications",
    org: "Michigan · Rochester",
    text: "Data Mining in Python (University of Michigan) and Technology Commercialization (University of Rochester).",
  },
];

// Headline numbers for the stat rings; every value comes from a project README.
export const stats = [
  { value: "14K+", label: "Objects screened", note: "OrbitGuard" },
  { value: "23", label: "F1 circuits modelled", note: "BoxBox" },
  { value: "9.5K", label: "Kepler objects classified", note: "Kepler" },
  { value: "0.99", label: "ROC-AUC, held-out set", note: "Kepler" },
];

export const services = [
  {
    icon: "ml",
    title: "ML Engineering",
    text: "Models that go past the notebook: validated, explained with SHAP, tested, and packaged so someone else can run them.",
  },
  {
    icon: "stats",
    title: "Data & Statistics",
    text: "Cleaning, feature engineering, hypothesis tests and survival analysis, with splits that don't leak and checks on where accuracy comes from.",
  },
  {
    icon: "dash",
    title: "Dashboards & Apps",
    text: "Interactive Plotly Dash and Streamlit apps that turn a model's output into something people can explore.",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "SQL (MySQL)", "Java", "C"] },
  {
    group: "ML & data",
    items: ["scikit-learn", "XGBoost", "TensorFlow/Keras", "SHAP", "pandas", "NumPy", "SciPy", "lifelines"],
  },
  { group: "Apps & viz", items: ["Plotly Dash", "Streamlit", "Plotly", "Matplotlib", "Seaborn"] },
  { group: "Engineering", items: ["Git & GitHub", "pytest", "Jupyter", "MySQL Workbench"] },
];
