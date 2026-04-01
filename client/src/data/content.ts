/**
 * ============================================================
 * PORTFOLIO CONTENT — SINGLE SOURCE OF TRUTH
 * ============================================================
 * Edit this file to update all website content.
 * No need to touch any component or layout files.
 * ============================================================
 */

// ─── PERSONAL INFO ───────────────────────────────────────────
export const personal = {
  name: "Aishwarya Rao",
  title: "Data Analyst · Fraud Analyst · Business Analyst",
  location: "Irving, TX",
  email: "arao1898@gmail.com",
  phone: "(502) 615-0617",
  linkedin: "https://linkedin.com/in/aishwarya-rao1",
  github: "", // Add GitHub URL if available
  resumeUrl: "", // Add a Google Drive or Dropbox link to your resume PDF
};

// ─── HERO SECTION ────────────────────────────────────────────
export const hero = {
  greeting: "Hi, I'm",
  tagline:
    "I turn complex data into clear decisions — across fraud strategy, business analytics, and risk intelligence.",
  cta: {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "Download Resume", href: personal.resumeUrl || "#resume" },
    tertiary: { label: "Get in Touch", href: "#contact" },
  },
};

// ─── ABOUT SECTION ───────────────────────────────────────────
export const about = {
  headline: "Analytical by nature. Strategic by practice.",
  paragraphs: [
    "I'm a Fraud Strategy Analyst with over 4 years of experience across Insurance, Fintech, and Retail — building the kind of data infrastructure and risk frameworks that protect revenue, reduce fraud losses, and support executive decision-making.",
    "My work sits at the intersection of SQL engineering, machine learning, and business storytelling. I design detection frameworks, build Power BI dashboards that executives actually use, and translate noisy datasets into recommendations that drive real policy changes.",
    "Whether I'm engineering transaction monitoring rules in SQL Server, training anomaly detection models in Python on 1M+ records, or presenting risk appetite trade-offs to senior leadership — I focus on the business outcome, not just the analysis.",
  ],
  stats: [
    { value: "4+", label: "Years of Experience" },
    { value: "~18%", label: "Fraud Rate Reduction" },
    { value: "30%", label: "ML Detection Accuracy Gain" },
    { value: "90%", label: "Reporting Discrepancy Reduction" },
  ],
};

// ─── SKILLS SECTION ──────────────────────────────────────────
export const skills = [
  {
    category: "Fraud & Risk Analytics",
    icon: "Shield",
    items: [
      "Portfolio-Level Fraud Strategy",
      "Fraud Strategy Roadmap Ownership",
      "Fraud Trend Analysis",
      "Card-Not-Present (CNP) Fraud",
      "ATO Detection",
      "Chargeback Analysis",
      "Transaction Monitoring",
      "LexisNexis",
      "Reg E",
      "Risk Appetite Trade-offs",
    ],
  },
  {
    category: "SQL & Databases",
    icon: "Database",
    items: [
      "SQL Server",
      "T-SQL",
      "CTEs",
      "Window Functions",
      "Snowflake",
      "SSIS (ETL Pipelines)",
      "Azure Data Factory",
      "Data Modeling",
    ],
  },
  {
    category: "Visualization & BI",
    icon: "BarChart2",
    items: [
      "Power BI (DAX, KPI Dashboards)",
      "Tableau",
      "SSRS",
      "Advanced Excel (VBA, Pivot Tables)",
      "Drill-through Reports",
      "Executive Dashboards",
    ],
  },
  {
    category: "Programming & ML",
    icon: "Code2",
    items: [
      "Python (Pandas, NumPy, Scikit-learn)",
      "Machine Learning",
      "Predictive Modeling",
      "Anomaly Detection",
      "GitHub Copilot",
    ],
  },
  {
    category: "Business Analysis",
    icon: "TrendingUp",
    items: [
      "Requirements Documentation",
      "Stakeholder Reporting",
      "KPI Reporting",
      "Root Cause Analysis",
      "Revenue Leakage Analysis",
      "Compliance KPIs",
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "Wrench",
    items: [
      "Jira",
      "Agile / Scrum",
      "Power Designer",
      "Git",
      "GitHub",
    ],
  },
];

// ─── EXPERIENCE SECTION ──────────────────────────────────────
export const experience = [
  {
    title: "Fraud Analyst",
    company: "Likewize Corp",
    location: "Southlake, TX",
    period: "May 2025 – Present",
    type: "Fraud & Risk",
    bullets: [
      "Shaped portfolio-level fraud strategy for insurance operations across the US and Canada by designing rule-based detection frameworks in SQL Server and surfacing risk patterns that directly influenced underwriting policy decisions.",
      "Owned the fraud strategy roadmap for insurance claim portfolios — defining detection priorities, setting risk thresholds, and balancing fraud loss reduction against false positive rates and customer experience.",
      "Engineered transaction monitoring rules in SQL targeting ATO, CNP-equivalent fraud, and rapid-succession abuse patterns, leveraging LexisNexis for identity verification, reducing fraudulent approval rates by ~18%.",
      "Built and maintained AI/ML models in Python (Pandas, NumPy, Scikit-learn) on 1M+ records to detect chargeback fraud and emerging risk signals, improving detection accuracy by 30% and reducing manual queues by ~40%.",
      "Developed Power BI executive dashboards (DAX, KPI tiles, drill-through) reporting on fraud savings, loss trends, and risk KPIs for senior leadership, supporting strategic decision-making and risk appetite reviews.",
      "Presented fraud loss trends, false positive rates, and risk appetite recommendations to senior leadership across Product, Risk, and Operations, driving data-backed decisions on fraud control thresholds.",
    ],
  },
  {
    title: "Data Engineer",
    company: "Vsion Technologies",
    location: "Cedar Park, TX",
    period: "Dec 2024 – May 2025",
    type: "Data Engineering",
    bullets: [
      "Analyzed 10M+ daily transactions using advanced T-SQL to identify fraud patterns, financial anomalies, and cost leakage across enterprise retail pipelines, producing strategic insights for cross-functional risk reporting.",
      "Built automated Power BI reconciliation dashboards that reduced reporting discrepancies by 90% and designed ETL pipelines using SSIS and Azure Data Factory, ensuring data integrity across source systems and improving model precision by 15%.",
    ],
  },
  {
    title: "Business Systems Analyst",
    company: "Quarterhill",
    location: "Louisville, KY",
    period: "Feb 2024 – Apr 2024",
    type: "Business Analysis",
    bullets: [
      "Gathered requirements from senior stakeholders and built Power BI and SSRS dashboards for transaction risk signals and compliance KPIs.",
      "Performed SQL-based trend analysis to uncover revenue leakage patterns, driving a 25% efficiency improvement across reporting workflows.",
    ],
  },
  {
    title: "Data Analyst",
    company: "University of Louisville",
    location: "Louisville, KY",
    period: "Aug 2023 – Feb 2024",
    type: "Data Analysis",
    bullets: [
      "Architected SQL Server relational data models and built Tableau ERP reporting pipelines across 5+ departments, reducing order processing time by 35%.",
      "Automated reporting workflows via Excel VBA macros, saving 15+ hours per month in manual data preparation.",
    ],
  },
  {
    title: "Business Data Analyst",
    company: "Accenture",
    location: "Bengaluru, India",
    period: "Jun 2021 – Jul 2023",
    type: "Business Analysis",
    bullets: [
      "Built scalable SQL Server data solutions and Tableau KPI dashboards across 10+ SaaS and financial services engagements, delivering fraud trend analysis and risk reporting that reduced discrepancy rates by 20%.",
      "Built reusable SQL reporting layers over Financials, Sales/CRM, and procurement datasets; used Snowflake for cloud querying and Git for source control, cutting reporting cycles by 40%.",
    ],
  },
];

// ─── PROJECTS SECTION ────────────────────────────────────────
export const projects = [
  {
    title: "Fraud Detection & Claims Risk Dashboard",
    category: "Fraud",
    tags: ["SQL", "Python", "Power BI", "Scikit-learn"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/fraud-project-V5XK2yJ6h7GbN4EkvYQgfm.webp",
    overview:
      "An end-to-end fraud analytics solution that surfaces suspicious claim behavior, risk flags, and approval trends across an insurance portfolio.",
    problem:
      "Claims teams lacked visibility into emerging fraud patterns, leading to delayed intervention and growing financial exposure.",
    approach:
      "Designed SQL-based detection rules targeting ATO, rapid-succession abuse, and CNP-equivalent patterns. Built a Python anomaly detection model on 50K+ claim records. Visualized risk KPIs and trend lines in a Power BI executive dashboard.",
    findings:
      "Identified a 12% concentration of flagged claims in a single product line. Model flagged 94% of known fraud cases in back-testing. Dashboard reduced time-to-escalation by 3 business days.",
    tools: ["SQL Server", "Python", "Scikit-learn", "Power BI", "DAX"],
    github: "",
    demo: "",
  },
  {
    title: "Sales & Revenue Performance Dashboard",
    category: "Business",
    tags: ["SQL", "Power BI", "DAX"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/dashboard-project-QaR45PLys4QsA92uPQBZwm.webp",
    overview:
      "A multi-page Power BI dashboard tracking revenue trends, product performance, monthly KPIs, and regional insights for a retail business.",
    problem:
      "Sales leadership relied on static spreadsheets and monthly email reports, making it difficult to identify underperforming regions or product lines in real time.",
    approach:
      "Extracted and modeled transactional data using SQL Server. Built a star schema data model and developed DAX measures for YoY growth, rolling averages, and regional breakdowns. Published an interactive Power BI report with drill-through capability.",
    findings:
      "Revealed a 22% revenue gap between the top and bottom regional performers. Identified two product categories consistently missing monthly targets. Enabled weekly KPI reviews that previously required 4+ hours of manual prep.",
    tools: ["SQL Server", "Power BI", "DAX", "Excel"],
    github: "",
    demo: "",
  },
  {
    title: "Customer Segmentation Analysis",
    category: "Data",
    tags: ["Python", "Pandas", "Scikit-learn", "Clustering"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/python-project-3UoqFZL4RArrfvKxgktDHA.webp",
    overview:
      "A Python-based clustering analysis that segments customers by behavioral patterns and surfaces actionable business recommendations for marketing and retention teams.",
    problem:
      "A retail client was applying uniform marketing spend across all customers, resulting in high churn among high-value segments and wasted budget on low-engagement users.",
    approach:
      "Cleaned and normalized 80K+ customer records using Pandas. Applied K-Means clustering with elbow-method optimization to identify 4 distinct behavioral segments. Profiled each cluster by spend, frequency, and recency.",
    findings:
      "Identified a high-value, low-frequency segment (18% of customers, 41% of revenue) at churn risk. Recommended targeted retention offers for this group. Low-engagement segment (34% of customers) showed near-zero ROI on current spend.",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    github: "",
    demo: "",
  },
  {
    title: "Inventory & Supply Chain Analytics",
    category: "Business",
    tags: ["SQL", "Power BI", "Operations"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/supply-chain-project-CpnweJfXtGCQKHKAVBTK9H.webp",
    overview:
      "A SQL and Power BI solution that tracks stock movement, identifies backorder patterns, and surfaces operational bottlenecks across a multi-warehouse supply chain.",
    problem:
      "Operations teams had no unified view of inventory health, leading to frequent stockouts, excess safety stock, and delayed fulfillment.",
    approach:
      "Built SQL queries to join inventory, order, and supplier tables across 3 warehouse systems. Created a Power BI dashboard with stock aging, backorder rate, and supplier lead time KPIs. Added drill-through to SKU-level detail.",
    findings:
      "Found that 15% of SKUs accounted for 60% of backorder events. Identified two suppliers with lead times 40% above average. Dashboard enabled weekly ops reviews that reduced stockout incidents by an estimated 28%.",
    tools: ["SQL Server", "Power BI", "DAX", "Excel"],
    github: "",
    demo: "",
  },
  {
    title: "ETL & Reporting Automation",
    category: "Data",
    tags: ["Python", "SQL", "SSIS", "Automation"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/etl-project-6jk6AdcgCjc74g2QGY5ESX.webp",
    overview:
      "An automated data pipeline that cleans, transforms, and loads raw transactional data into reporting-ready tables, replacing a manual 4-hour weekly process.",
    problem:
      "Analysts spent 4+ hours every week manually cleaning and formatting raw exports before any analysis could begin, introducing inconsistencies and delaying reporting cycles.",
    approach:
      "Built a Python ETL script using Pandas to standardize column formats, handle nulls, and flag anomalies. Loaded clean data into SQL Server staging tables via SSIS. Scheduled automated runs and added a validation log to catch pipeline failures.",
    findings:
      "Reduced weekly data prep time from 4 hours to under 20 minutes. Eliminated a class of recurring formatting errors that had caused 3 reporting restatements in the prior quarter. Validation log caught 2 upstream data quality issues within the first month.",
    tools: ["Python", "Pandas", "SQL Server", "SSIS", "Excel"],
    github: "",
    demo: "",
  },
  {
    title: "Business KPI Insights Dashboard",
    category: "Business",
    tags: ["Power BI", "SQL", "Excel", "KPIs"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/kpi-project-2FAySUA8BzEg39pTahPSTR.webp",
    overview:
      "An executive-level KPI dashboard consolidating operational metrics across finance, sales, and operations into a single source of truth for leadership reviews.",
    problem:
      "Leadership teams were pulling KPIs from 5 different systems before each monthly review, with no consistent definitions or a single version of the truth.",
    approach:
      "Standardized KPI definitions with business stakeholders. Built SQL views to consolidate data from Finance, CRM, and Operations systems. Developed a Power BI report with executive summary tiles, trend lines, and period-over-period comparisons.",
    findings:
      "Consolidated 5 data sources into a single dashboard used by 3 executive teams. Identified a consistent 8% gap between forecasted and actual operational costs. Reduced monthly reporting prep from 6 hours to 45 minutes.",
    tools: ["Power BI", "SQL Server", "DAX", "Excel", "Snowflake"],
    github: "",
    demo: "",
  },
];

// ─── EDUCATION SECTION ───────────────────────────────────────
export const education = [
  {
    degree: "M.S. in Business Analytics",
    institution: "University of Louisville",
    location: "Louisville, KY",
    period: "Aug 2023 – Aug 2024",
  },
  {
    degree: "B.Tech in Electronics & Communications",
    institution: "Dayananda Sagar University",
    location: "Bengaluru, India",
    period: "Aug 2017 – May 2021",
  },
];

// ─── CERTIFICATIONS (placeholder — add when earned) ──────────
export const certifications: {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}[] = [
  // Example:
  // { name: "Microsoft Certified: Power BI Data Analyst Associate", issuer: "Microsoft", date: "2024", url: "" },
];

// ─── NAVIGATION ──────────────────────────────────────────────
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
