// Single source of truth for personal details used across the site.

export const site = {
  name: "M. Aditya Patra",
  shortName: "Aditya Patra",
  role: "ML Engineer in the making",
  tagline:
    "I build machine-learning systems end to end, from messy public data to models I can explain and services that run. Lately that means satellites, Formula 1 and exoplanets.",
  location: "Pune, India",
  education: {
    degree: "B.Tech, Computer Science & Engineering",
    school: "DY Patil International University, Pune",
    note: "3rd year",
  },
  now: {
    project: "orbitguard",
    text: "Building OrbitGuard: screening 14k+ objects in orbit for close approaches, next up a collision-risk model.",
  },
  links: {
    github: "https://github.com/aditya-patra1011",
    linkedin: "https://www.linkedin.com/in/m-aditya-patra-1339853b9/",
    email: "adityapatra501@gmail.com",
    resume: "/resume.pdf",
  },
} as const;

// TODO: prune to what you can defend in an interview; this is a first pass from the repos.
export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "SQL", "Java", "C"] },
  {
    group: "ML & data",
    items: ["scikit-learn", "XGBoost", "PyTorch", "pandas", "NumPy", "SHAP", "statsmodels"],
  },
  { group: "Apps & serving", items: ["FastAPI", "Plotly Dash", "Streamlit", "Docker"] },
  { group: "Data stores", items: ["MySQL", "PostgreSQL", "Parquet"] },
  { group: "Practice", items: ["Git & GitHub Actions", "pytest", "Reproducible pipelines"] },
];

// Early coursework projects: listed briefly on the About page, not as case studies.
export const earlyWork = [
  { name: "Bank Management System", stack: "Java, Swing", repo: "https://github.com/aditya-patra1011/Bank-System" },
  { name: "Library Management System", stack: "Java", repo: "https://github.com/aditya-patra1011/Library-Management-System" },
  { name: "Scientific Calculator", stack: "Java, Swing", repo: "https://github.com/aditya-patra1011/Scientific-Calculator-" },
];
