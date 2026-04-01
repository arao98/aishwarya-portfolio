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
  title: "Data Analyst  Business Intelligence  Fraud Analytics  Business Analysis",
  location: "Irving, TX",
  email: "arao1898@gmail.com",
  phone: "(502) 615-0617",
  linkedin: "https://linkedin.com/in/aishwarya-rao1",
  github: "",
  resumeUrl:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/Aishwarya_Rao_Resume_805b237e.pdf",
};

// ─── NAVIGATION ──────────────────────────────────────────────
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

// ─── HERO SECTION ────────────────────────────────────────────
export const hero = {
  greeting: "Hi, I'm",
  tagline:
    "Business Intelligence and Data Analyst with 4+ years of experience building scalable reporting tools, data products, and operational metrics across Insurance, Fintech, and Retail. I turn complex datasets into clear decisions that drive strategy.",
  cta: {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "Download Resume", href: personal.resumeUrl },
    tertiary: { label: "Get in Touch", href: "#contact" },
  },
};

// ─── ABOUT SECTION ───────────────────────────────────────────
export const about = {
  headline: "Analytical by nature. Strategic by practice.",
  paragraphs: [
    "I'm a Business Intelligence and Data Analyst with over 4 years of experience across Insurance, Fintech, and Retail. My work spans fraud analytics, BI reporting, ETL engineering, and business systems analysis — wherever data needs to become a decision.",
    "I design SQL-based detection frameworks, build Power BI and Tableau dashboards that executives actually rely on, and translate large, noisy datasets into recommendations that drive real policy and process changes.",
    "Whether I'm engineering transaction monitoring logic in SQL Server, training anomaly detection models in Python on 1M+ records, building ETL pipelines with AWS Glue and Azure Databricks, or presenting risk trade-offs to senior leadership — I stay focused on the business outcome, not just the analysis.",
  ],
  stats: [
    { value: "4+", label: "Years of Experience" },
    { value: "10M+", label: "Daily Transactions Analyzed" },
    { value: "40%", label: "Manual Review Queue Reduction" },
    { value: "35%", label: "Order Processing Time Reduction" },
  ],
};

// ─── SKILLS SECTION ──────────────────────────────────────────
export const skills = [
  {
    category: "SQL and Databases",
    icon: "Database",
    items: [
      "SQL Server",
      "T-SQL",
      "PL/SQL",
      "CTEs",
      "Window Functions",
      "Query Optimization",
      "Snowflake",
      "Relational Data Modeling",
      "RDBMS",
    ],
  },
  {
    category: "Analytics and BI",
    icon: "BarChart2",
    items: [
      "Power BI (DAX, KPI Dashboards, Drill-Through)",
      "Tableau",
      "SSRS",
      "Google Analytics (GA4)",
      "Advanced Excel (VBA, Macros)",
      "Variance Analysis",
      "Trend Analysis",
      "KPI Reporting",
    ],
  },
  {
    category: "Programming and ETL",
    icon: "Code2",
    items: [
      "Python (Pandas, NumPy, Scikit-learn)",
      "Machine Learning",
      "Anomaly Detection",
      "ETL Pipelines",
      "Informatica",
      "AWS Glue",
      "Azure Databricks",
      "Excel VBA",
    ],
  },
  {
    category: "Fraud and Risk Analytics",
    icon: "Shield",
    items: [
      "Fraud Detection Frameworks",
      "Rule-Based Detection Logic",
      "Transaction Monitoring",
      "ATO Detection",
      "Chargeback Analysis",
      "LexisNexis",
      "Risk Threshold Analysis",
      "Claims Risk Analytics",
    ],
  },
  {
    category: "Business Analysis",
    icon: "TrendingUp",
    items: [
      "Requirements Documentation",
      "Stakeholder Reporting",
      "Revenue Leakage Analysis",
      "Root Cause Analysis",
      "Compliance KPIs",
      "UAT Testing",
      "Process Improvement",
      "Data Governance",
    ],
  },
  {
    category: "Tools and Workflow",
    icon: "Wrench",
    items: [
      "Agile / Scrum",
      "Jira",
      "Confluence",
      "Azure DevOps",
      "Git",
      "GitHub Copilot",
      "SDLC",
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
    type: "Fraud and Risk",
    bullets: [
      "Built and maintained SQL Server reporting datasets and relational data models over insurance operations data, validating source structures and tracing field-level lineage to ensure accuracy and reliability across all downstream reporting.",
      "Designed and implemented scalable ETL workflows in partnership with data engineering teams, leveraging AWS Glue and Azure Databricks to process large-scale datasets and accelerate downstream analytics.",
      "Engineered rule-based detection logic in SQL that reduced high-risk claim approval rates by approximately 18%, protecting millions in financial exposure through iterative threshold testing and data-driven analysis.",
      "Developed Power BI executive dashboards using DAX, KPI tiles, and drill-through reporting, and integrated Google Analytics data to track operational trends and surface behavioral patterns across customer touchpoints.",
      "Built predictive ML models in Python on 1M+ records for anomaly detection and data quality improvement, increasing detection accuracy by 30% and reducing manual review queues by approximately 40% using GitHub Copilot to accelerate development.",
      "Conducted UAT with end-users and IT teams, documented test cases, validated data outputs, and resolved discrepancies across Agile/Jira sprints while supporting API-based integrations between claims systems and third-party vendors.",
    ],
  },
  {
    title: "Data Engineer",
    company: "Vsion Technologies",
    location: "Cedar Park, TX",
    period: "Dec 2024 – May 2025",
    type: "Data Engineering",
    bullets: [
      "Analyzed 10M+ daily transactions using T-SQL to detect anomalies, validate data integrity, and surface financial risk patterns across enterprise-scale retail pipelines, documenting transformation logic and KPI definitions in Confluence.",
      "Built ETL pipelines loading retail data into Snowflake and developed automated Power BI dashboards that reduced financial reporting discrepancies by 90%, maintaining version control using Azure DevOps.",
    ],
  },
  {
    title: "Business Systems Analyst",
    company: "Quarterhill",
    location: "Louisville, KY",
    period: "Feb 2024 – Apr 2024",
    type: "Business Analysis",
    bullets: [
      "Gathered and documented business and technical requirements from senior stakeholders, translated needs into user stories and feature specs, and built Power BI and SSRS dashboards providing real-time visibility into revenue KPIs and compliance metrics.",
      "Performed SQL-based trend analysis on transaction data to uncover revenue leakage patterns, driving a 25% efficiency improvement while maintaining data governance standards and audit documentation across all reporting environments.",
    ],
  },
  {
    title: "Data Analyst",
    company: "University of Louisville",
    location: "Louisville, KY",
    period: "Aug 2023 – Feb 2024",
    type: "Data Analysis",
    bullets: [
      "Architected SQL Server relational data models and Tableau ERP pipelines across 5+ departments, cutting order processing time by 35%, and handled ad-hoc data requests from department leads to support planning and operational decisions.",
      "Automated monthly reporting through Excel VBA macros, saving 15+ hours per month in manual data preparation.",
    ],
  },
  {
    title: "Business Data Analyst",
    company: "Accenture",
    location: "Bengaluru, India",
    period: "Jun 2021 – Jul 2023",
    type: "Business Analysis",
    bullets: [
      "Analyzed multi-million-row financial datasets in SQL Server across 10+ client engagements, used Informatica for ETL and data integration, and documented source-to-target mappings across Financials, Sales/CRM, and procurement, reducing discrepancy rates by 20%.",
      "Delivered Tableau KPI dashboards and executive reports for 10+ stakeholders, cutting manual reporting cycles by 40%, and worked across the full SDLC covering requirements, design, testing, and documentation within Agile teams.",
    ],
  },
];

// ─── PROJECTS SECTION ────────────────────────────────────────
export const projects = [
  {
    title: "Fraud Detection and Claims Risk Dashboard",
    category: "Fraud",
    tags: ["SQL", "Python", "Power BI", "Scikit-learn"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/fraud-project-V5XK2yJ6h7GbN4EkvYQgfm.webp",
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
    title: "Sales and Revenue Performance Dashboard",
    category: "Business",
    tags: ["SQL", "Power BI", "DAX"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/dashboard-project-QaR45PLys4QsA92uPQBZwm.webp",
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
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/python-project-3UoqFZL4RArrfvKxgktDHA.webp",
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
    title: "Inventory and Supply Chain Analytics",
    category: "Business",
    tags: ["SQL", "Power BI", "Operations"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/supply-chain-project-CpnweJfXtGCQKHKAVBTK9H.webp",
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
    title: "ETL and Reporting Automation",
    category: "Data",
    tags: ["Python", "SQL", "SSIS", "Automation"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/etl-project-6jk6AdcgCjc74g2QGY5ESX.webp",
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
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/kpi-project-2FAySUA8BzEg39pTahPSTR.webp",
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
    degree: "B.Tech in Electronics and Communications",
    institution: "Dayananda Sagar University",
    location: "Bengaluru, India",
    period: "Aug 2017 – May 2021",
  },
];

// ─── CERTIFICATIONS ──────────────────────────────────────────
export const certifications: {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}[] = [
  // Add certifications here when earned:
  // { name: "Microsoft Certified: Power BI Data Analyst Associate", issuer: "Microsoft", date: "2024", url: "" },
];
