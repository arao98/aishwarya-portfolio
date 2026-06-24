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
  title: "Data Analyst  BI Analyst  Fraud Analytics  Supply Chain Analytics",
  location: "Irving, TX",
  email: "arao1898@gmail.com",
  phone: "(502) 615-0617",
  linkedin: "https://linkedin.com/in/aishwarya-rao1",
  github: "https://github.com/arao98",
  resumeUrl: "/aishwarya-portfolio/Aishwarya_Rao_Resume.pdf",
};

// ─── NAVIGATION ──────────────────────────────────────────────
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Dashboards", href: "#dashboards" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

// ─── HERO SECTION ────────────────────────────────────────────
export const hero = {
  greeting: "Hi, I'm",
  tagline:
    "Data Analyst and Business Intelligence professional with 5+ years of experience across device protection, insurance, fintech, retail, and operations. I build trusted SQL datasets, Tableau and Power BI dashboards, ETL pipelines, and Python models that turn complex data into measurable business decisions.",
  cta: {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "Download Resume", href: personal.resumeUrl },
    tertiary: { label: "Get in Touch", href: "#contact" },
  },
};

// ─── ABOUT SECTION ───────────────────────────────────────────
export const about = {
  headline: "Turning data complexity into operational clarity.",
  paragraphs: [
    "I'm a Data Analyst and Business Intelligence professional with 5+ years of experience across device protection, insurance, fintech, retail, and higher education operations. My work spans fraud analytics, supply chain reporting, BI dashboards, ETL engineering, and stakeholder-ready business analysis.",
    "I build SQL-based detection frameworks, Tableau and Power BI dashboards, Snowflake-ready ETL pipelines, and governed metric layers that leaders can trust for daily decisions. I also apply Python and R for statistical modeling, predictive analytics, and exploratory data analysis.",
    "Most recently, I connected claims, device, inventory, warehouse, and fulfillment data to reduce high-risk approvals by approximately 18%, cut manual review queues by around 40%, improve anomaly detection accuracy by 30%, and strengthen reporting reliability with field-level lineage documentation.",
  ],
  stats: [
    { value: "5+", label: "Years of Experience" },
    { value: "10M+", label: "Daily Transactions Analyzed" },
    { value: "40%", label: "Manual Review Queue Reduction" },
    { value: "90%", label: "Reporting Discrepancy Reduction" },
  ],
};

// ─── SKILLS SECTION ──────────────────────────────────────────
export const skills = [
  {
    category: "SQL and Databases",
    icon: "Database",
    items: [
      "SQL Server",
      "MySQL",
      "Vertica",
      "T-SQL",
      "PL/SQL",
      "CTEs",
      "Window Functions",
      "Query Optimization",
      "Snowflake",
      "Salesforce Data Models",
      "Relational Data Modeling",
      "RDBMS",
    ],
  },
  {
    category: "Analytics and BI",
    icon: "BarChart2",
    items: [
      "Power BI (DAX, KPI Dashboards, Drill-Through)",
      "Tableau Desktop / Server / Cloud",
      "Tableau Pulse",
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
      "R (ggplot2, dplyr, tidyr)",
      "Machine Learning",
      "Anomaly Detection",
      "Statistical Modeling",
      "ETL Pipelines",
      "Airflow",
      "Informatica",
      "AWS Glue",
      "Azure Databricks",
      "Excel VBA",
      "Predictive Modeling",
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
      "Fulfillment Bottleneck Analysis",
    ],
  },
  {
    category: "Supply Chain and Operations",
    icon: "Truck",
    items: [
      "Supply Chain Analytics",
      "Warehousing and Logistics Reporting",
      "Inventory Management",
      "Order Fulfillment Analytics",
      "Device Intake and Repair Throughput",
      "Return Logistics",
      "SLA Adherence",
      "Operations Automation",
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
      "Metric Definition Standardization",
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
      "Power Apps",
      "Power Automate",
      "SDLC",
    ],
  },
];

// ─── EXPERIENCE SECTION ──────────────────────────────────────
export const experience = [
  {
    title: "Fraud & Data Analyst",
    company: "Likewize Corp",
    location: "Southlake, TX",
    period: "May 2025 – Mar 2026",
    type: "Fraud, Operations, and Risk",
    bullets: [
      "Built rule-based SQL fraud detection logic across device protection claims data to catch duplicate submissions, staged losses, abnormal swap frequency, and other high-risk patterns, reducing high-risk claim approvals by approximately 18%.",
      "Ran predictive models in Python using Pandas, NumPy, and Scikit-learn on 1M+ claims and device records to forecast repair demand, score fraud risk, and identify fulfillment bottlenecks, cutting manual review queues by around 40% and improving anomaly detection accuracy by 30%.",
      "Wrote SQL operations views connecting claims, device, inventory, warehouse, and fulfillment data to monitor device availability, flag supply chain exceptions, and track SLA adherence for order fulfillment.",
      "Built Tableau dashboards for device intake, repair throughput, outbound shipment volume, return logistics, KPI performance, fraud trends, and operational metrics used by warehouse managers and leadership for daily decisions.",
      "Maintained scalable SQL Server reporting datasets with full field-level lineage documentation, reducing data discrepancy rates by 25% and strengthening trust across all fraud, warehouse, and executive dashboards.",
      "Partnered with data engineering to build ETL workflows in AWS Glue and Azure Databricks, improving the quality, availability, and reporting latency of claims, logistics, inventory, and fulfillment datasets.",
    ],
  },
  {
    title: "Data Engineer",
    company: "Vsion Technologies",
    location: "Cedar Park, TX",
    period: "Dec 2024 – May 2025",
    type: "Data Engineering",
    bullets: [
      "Analyzed 10M+ daily retail transactions using T-SQL to identify financial risk patterns, inventory discrepancies, fulfillment anomalies, and reporting quality issues, reducing reporting errors by 30% while documenting KPI logic in Confluence.",
      "Built ETL pipelines loading retail and inventory data into Snowflake and automated financial and operational dashboards, cutting reporting discrepancies by 90% with version control maintained through Azure DevOps.",
      "Developed warehousing reports tracking inventory movement, stock levels, and order fulfillment trends used by logistics and planning teams for reconciliation and downstream decision-making.",
    ],
  },
  {
    title: "Business Systems Analyst",
    company: "Quarterhill",
    location: "Louisville, KY",
    period: "Feb 2024 – Apr 2024",
    type: "Business Analysis",
    bullets: [
      "Gathered requirements from client stakeholders, translated them into feature specifications, and delivered Power BI and SSRS dashboards giving leadership live visibility into revenue KPIs, compliance metrics, and program performance.",
      "Ran SQL trend analysis on 3M+ transaction records to identify revenue leakage patterns, driving a 25% efficiency improvement while maintaining data governance standards across reporting environments.",
      "Standardized metric definitions and audit documentation across 5 business units, supporting compliance reviews and giving cross-functional teams a single source of truth for reporting.",
    ],
  },
  {
    title: "Data Analyst",
    company: "University of Louisville",
    location: "Louisville, KY",
    period: "Aug 2023 – Feb 2024",
    type: "Data Analysis",
    bullets: [
      "Designed SQL Server data models and Tableau ERP reporting pipelines for 5 departments, cutting order processing time by 35% and giving department leads reliable data for planning and resource allocation decisions.",
      "Automated monthly reporting using Excel VBA macros, saving 15+ hours per month while flagging inventory availability gaps and fulfillment delays before they affected operations.",
      "Partnered with stakeholders to define KPIs and launch self-service Tableau dashboards, reducing manual data requests by 50% and improving reporting accessibility across the organization.",
    ],
  },
  {
    title: "Business Data Analyst",
    company: "Accenture",
    location: "Bengaluru, India",
    period: "Jun 2021 – Jul 2023",
    type: "Business Analysis",
    bullets: [
      "Built Tableau KPI dashboards for 10+ client engagements, reducing manual reporting cycles by 40% by connecting data from financial systems, CRM platforms, and procurement sources into unified reporting views.",
      "Managed ETL workflows using Informatica across Salesforce and ERP systems, documented source-to-target mappings, and reduced data discrepancy rates by 20% while maintaining governance standards throughout the SDLC.",
      "Partnered with procurement and operations teams to define supply chain reporting needs and build data models and Tableau dashboards for vendor performance, inventory position, fulfillment timelines, and logistics cost tracking.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "AI Variant",
    location: "Bengaluru, India",
    period: "Jun 2020 – May 2021",
    type: "Data Analysis & Internship",
    bullets: [
      "Supported the development of interactive dashboards in Tableau and Power BI, providing key insights that improved sales performance tracking and enabled data-driven decisions for business stakeholders.",
      "Automated data processing tasks using SQL and Python (Pandas, NumPy), reducing manual workload by approximately 30% and enhancing data accuracy and accessibility across reporting pipelines.",
      "Performed exploratory data analysis and statistical modeling in R (ggplot2, dplyr, tidyr) to identify sales trends, customer behavior patterns, and seasonal demand signals that informed marketing strategy.",
      "Utilized advanced Excel skills including Macros, Pivot Tables, and VLOOKUP to analyze datasets, aiding in better decision-making and streamlining monthly reporting cycles.",
      "Applied foundational knowledge of Office 365 and Power Platform (Power Apps, Power Automate, Dataverse) to optimize business processes and automate repetitive workflows across departments.",
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
      "A fraud and operations analytics solution that unifies claims, device, inventory, warehouse, and fulfillment data to surface risky claims, abnormal swap behavior, repair demand, and SLA bottlenecks.",
    problem:
      "Fraud and operations teams needed a trusted daily signal across multiple claims and fulfillment systems to spot duplicate submissions, staged losses, abnormal replacement frequency, and repair or shipment bottlenecks before they affected cost and customer outcomes.",
    approach:
      "Built SQL Server feature views with field-level lineage, layered rule-based detection logic for high-risk claims, and trained Python models with Pandas, NumPy, and Scikit-learn on 1M+ records. Designed Tableau dashboards for fraud trends, device intake, repair throughput, outbound shipments, and return logistics.",
    findings:
      "Reduced high-risk claim approvals by approximately 18%, improved anomaly detection accuracy by 30%, cut manual review queues by around 40%, and strengthened trust in dashboard outputs by reducing data discrepancies by 25%.",
    tools: ["SQL Server", "Python", "Pandas", "Scikit-learn", "Tableau", "AWS Glue", "Azure Databricks"],
    github: "https://github.com/arao98/fraud-detection-claims-risk-dashboard",
    demo: "",
  },
  {
    title: "Sales and Revenue Performance Dashboard",
    category: "Business",
    tags: ["SQL", "Power BI", "DAX"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/dashboard-project-QaR45PLys4QsA92uPQBZwm.webp",
    overview:
      "A Power BI and SQL dashboard framework for revenue trends, product performance, regional variance, monthly KPI reviews, and executive reporting.",
    problem:
      "Leadership teams relied on disconnected spreadsheets and static reports, which made it difficult to compare regions, track product performance, and explain period-over-period revenue movement quickly.",
    approach:
      "Modeled transactional data in SQL Server, built a star-schema reporting layer, developed DAX measures for YoY growth and rolling trends, and designed drill-through report pages for product, region, and monthly KPI review.",
    findings:
      "Reduced manual reporting effort by 40%, exposed regional revenue gaps and underperforming product categories, and enabled weekly KPI conversations with a consistent governed data model.",
    tools: ["SQL Server", "Power BI", "DAX", "Excel", "Data Modeling"],
    github: "https://github.com/arao98/sales-revenue-performance-dashboard",
    demo: "",
  },
  {
    title: "Customer Segmentation Analysis",
    category: "Data",
    tags: ["Python", "Pandas", "Scikit-learn", "Clustering"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/python-project-3UoqFZL4RArrfvKxgktDHA.webp",
    overview:
      "A Python clustering analysis that segments customers using recency, frequency, monetary value, and engagement behavior to guide retention and marketing prioritization.",
    problem:
      "Marketing and business teams needed a more targeted way to prioritize retention and campaign spend instead of applying uniform offers across all customers.",
    approach:
      "Cleaned customer-level data with Pandas, engineered behavioral features, standardized variables, applied K-Means clustering with elbow and silhouette evaluation, and profiled each segment by value, frequency, and churn-risk signals.",
    findings:
      "Identified high-value customers with low recent engagement, separated low-ROI segments from profitable retention targets, and translated the segmentation into actionable campaign tiers for the marketing team.",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/arao98/customer-segmentation-analysis",
    demo: "",
  },
  {
    title: "Inventory and Supply Chain Analytics",
    category: "Business",
    tags: ["SQL", "Power BI", "Operations"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/supply-chain-project-CpnweJfXtGCQKHKAVBTK9H.webp",
    overview:
      "A SQL and Power BI operations analytics solution for warehouse inventory, fulfillment health, stock-level exceptions, backorders, and supplier or warehouse bottlenecks.",
    problem:
      "Operations teams lacked one governed view of device availability, inventory movement, fulfillment SLA adherence, and exception patterns across warehouse systems.",
    approach:
      "Joined inventory, order, supplier, warehouse, and fulfillment tables in SQL; created KPI logic for stockouts, backorders, reorder flags, lead-time variance, and SLA exceptions; and designed Power BI pages for warehouse managers and planning teams.",
    findings:
      "Surfaced SKUs and suppliers driving disproportionate backorder volume, improved visibility into inventory availability for claims fulfillment, and enabled faster reconciliation and exception management for logistics teams.",
    tools: ["SQL Server", "Power BI", "DAX", "Excel", "Operations Analytics"],
    github: "https://github.com/arao98/inventory-supply-chain-analytics",
    demo: "",
  },
  {
    title: "ETL and Reporting Automation",
    category: "Data",
    tags: ["Python", "SQL", "SSIS", "Automation"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/etl-project-6jk6AdcgCjc74g2QGY5ESX.webp",
    overview:
      "A reusable ETL automation pattern that cleans raw transactional extracts, validates data quality rules, and loads reporting-ready datasets for governed analytics.",
    problem:
      "Analysts spent hours cleaning inconsistent exports before recurring reports could be produced, creating delays, manual errors, and weak auditability.",
    approach:
      "Built Python transformation scripts using Pandas, added validation checks for required fields and duplicates, staged clean data for SQL reporting tables, and documented transformation rules for repeatable governance.",
    findings:
      "Reduced recurring preparation work from 4+ hours to under 20 minutes, improved consistency across reporting outputs, and created validation logs to catch upstream quality issues earlier.",
    tools: ["Python", "Pandas", "SQL Server", "ETL Pipelines", "Excel", "Data Quality"],
    github: "https://github.com/arao98/etl-reporting-automation",
    demo: "",
  },
  {
    title: "Business KPI Insights Dashboard",
    category: "Business",
    tags: ["Power BI", "SQL", "Excel", "KPIs"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/kpi-project-2FAySUA8BzEg39pTahPSTR.webp",
    overview:
      "An executive KPI dashboard and semantic-layer concept that consolidates finance, sales, operations, compliance, and program metrics into one governed reporting view.",
    problem:
      "Leadership and compliance teams pulled KPIs from multiple systems with inconsistent definitions, making monthly reviews slow and creating unnecessary reconciliation work.",
    approach:
      "Standardized KPI definitions with stakeholders, created SQL views to consolidate finance, CRM, operations, and compliance data, and designed Power BI summary pages with trend lines, variance indicators, and period-over-period comparisons.",
    findings:
      "Consolidated multiple reporting sources into a single source of truth, reduced monthly preparation from 6 hours to 45 minutes, and strengthened compliance reviews through consistent metric documentation.",
    tools: ["Power BI", "SQL Server", "DAX", "Excel", "Snowflake", "Metric Governance"],
    github: "https://github.com/arao98/business-kpi-insights-dashboard",
    demo: "",
  },
  {
    title: "Retail Sales & Churn Prediction Model",
    category: "Data",
    tags: ["Python", "SQL", "Machine Learning", "Predictive Analytics"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/python-project-3UoqFZL4RArrfvKxgktDHA.webp",
    overview:
      "A machine learning pipeline built to predict customer churn and forecast retail sales using historical transaction data and customer engagement metrics.",
    problem:
      "The business needed a proactive way to identify at-risk customers and forecast demand to optimize inventory and marketing spend.",
    approach:
      "Extracted 5M+ transaction records using SQL, engineered predictive features (RFM, engagement scores) in Python, and trained Random Forest and XGBoost models using Scikit-learn to classify churn probability and predict future sales volume.",
    findings:
      "Achieved 85% accuracy in churn prediction, enabling targeted retention campaigns that reduced churn by 12%. Sales forecasting models improved inventory planning accuracy by 20%.",
    tools: ["Python", "SQL", "Pandas", "Scikit-learn", "XGBoost", "Matplotlib"],
    github: "https://github.com/arao98/retail-sales-churn-prediction",
    demo: "",
  },
  {
    title: "Financial Risk & Compliance Dashboard",
    category: "Business",
    tags: ["Power BI", "SQL", "Data Governance", "Risk Analytics"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/dashboard-project-QaR45PLys4QsA92uPQBZwm.webp",
    overview:
      "An interactive Power BI dashboard designed for financial risk monitoring, compliance auditing, and anomaly detection across enterprise transactions.",
    problem:
      "Compliance teams were manually auditing thousands of transactions weekly, leading to delayed risk identification and high operational overhead.",
    approach:
      "Developed complex SQL stored procedures and CTEs to aggregate and flag anomalous transactions based on predefined risk thresholds. Connected the data model to Power BI to visualize risk exposure, compliance breaches, and audit trails.",
    findings:
      "Automated the compliance reporting workflow, reducing audit preparation time by 60% and surfacing high-risk transactions 3x faster for the compliance team.",
    tools: ["Power BI", "SQL Server", "DAX", "Compliance Analytics", "Data Modeling"],
    github: "https://github.com/arao98/financial-risk-compliance-dashboard",
    demo: "",
  },
];

// ─── DASHBOARDS SECTION ──────────────────────────────────────
export const dashboards = [
  {
    title: "Fraud & Claims Risk — Tableau Operations Dashboard",
    tool: "Tableau",
    tags: ["Tableau", "SQL", "Fraud Analytics", "Operations"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/fraud-project-V5XK2yJ6h7GbN4EkvYQgfm.webp",
    description:
      "An end-to-end Tableau dashboard suite covering fraud trends, device intake, repair throughput, outbound shipment volume, return logistics, and SLA adherence. Built on SQL Server views with field-level lineage documentation, giving operations managers and senior leadership a consolidated daily signal across claims and fulfillment systems.",
    highlights: [
      "Drill-down views by claim type, fraud pattern, and device category",
      "Real-time SLA exception flags and fulfillment bottleneck tracking",
      "Reduced data discrepancy rates by 25% through governed lineage documentation",
    ],
    github: "https://github.com/arao98/fraud-detection-claims-risk-dashboard",
  },
  {
    title: "Sales & Revenue Performance — Power BI Executive Dashboard",
    tool: "Power BI",
    tags: ["Power BI", "DAX", "SQL", "Revenue Analytics"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/dashboard-project-QaR45PLys4QsA92uPQBZwm.webp",
    description:
      "A Power BI executive reporting framework built on a star-schema SQL data model with DAX measures for YoY growth, rolling averages, and regional variance. Drill-through pages enable product, region, and monthly KPI deep-dives, replacing disconnected spreadsheets with a single governed reporting layer.",
    highlights: [
      "DAX-powered YoY, MoM, and rolling-period KPI tiles",
      "Drill-through pages for product category, region, and channel performance",
      "Reduced manual reporting effort by 40% across finance and sales teams",
    ],
    github: "https://github.com/arao98/sales-revenue-performance-dashboard",
  },
  {
    title: "Inventory & Supply Chain — Power BI Operations Dashboard",
    tool: "Power BI",
    tags: ["Power BI", "SQL", "Supply Chain", "Operations"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/supply-chain-project-CpnweJfXtGCQKHKAVBTK9H.webp",
    description:
      "A Power BI operations dashboard tracking warehouse inventory movement, stock-level exceptions, backorder rates, supplier lead-time variance, and fulfillment SLA adherence. Built on multi-table SQL joins across inventory, order, and supplier systems, giving logistics and planning teams one governed view for daily reconciliation.",
    highlights: [
      "Automated stock exception alerts and reorder flag indicators",
      "Supplier and warehouse performance scorecards with trend lines",
      "Enabled faster reconciliation and exception management for logistics teams",
    ],
    github: "https://github.com/arao98/inventory-supply-chain-analytics",
  },
  {
    title: "Business KPI Insights — Power BI Semantic Layer Dashboard",
    tool: "Power BI",
    tags: ["Power BI", "DAX", "Snowflake", "KPI Governance"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/kpi-project-2FAySUA8BzEg39pTahPSTR.webp",
    description:
      "An executive KPI dashboard built on a standardized semantic layer consolidating finance, sales, operations, and compliance metrics from Snowflake into a single Power BI model. Trend lines, variance indicators, and period-over-period comparisons give leadership a consistent, audit-ready reporting view.",
    highlights: [
      "Standardized KPI definitions across finance, sales, operations, and compliance",
      "Reduced monthly reporting preparation from 6 hours to 45 minutes",
      "Snowflake-backed semantic layer with full metric governance documentation",
    ],
    github: "https://github.com/arao98/business-kpi-insights-dashboard",
  },
  {
    title: "ERP Reporting Pipelines — Tableau Self-Service Dashboards",
    tool: "Tableau",
    tags: ["Tableau", "SQL Server", "ERP", "Self-Service BI"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/etl-project-6jk6AdcgCjc74g2QGY5ESX.webp",
    description:
      "Tableau ERP reporting pipelines built for 5 university departments, replacing ad hoc data requests with self-service dashboards backed by SQL Server data models. Standardized KPIs and automated data refresh reduced order processing time by 35% and cut manual data requests by 50%.",
    highlights: [
      "Self-service Tableau dashboards with standardized KPI definitions",
      "SQL Server data models covering procurement, HR, and operations",
      "Reduced order processing time by 35% and manual data requests by 50%",
    ],
    github: "https://github.com/arao98/etl-reporting-automation",
  },
  {
    title: "Sales Performance Insights — Tableau & Power BI Intern Dashboard",
    tool: "Tableau",
    tags: ["Tableau", "Power BI", "SQL", "Python", "R"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/python-project-3UoqFZL4RArrfvKxgktDHA.webp",
    description:
      "Interactive sales performance dashboards built during the AI Variant internship using Tableau and Power BI, backed by SQL-automated data pipelines and R-based statistical analysis. Delivered insights on sales trends, customer behavior, and seasonal demand patterns that improved sales performance tracking for business stakeholders.",
    highlights: [
      "R (ggplot2, dplyr) statistical analysis surfacing seasonal demand and trend signals",
      "SQL and Python-automated data pipelines reducing manual workload by 30%",
      "Power BI and Tableau dashboards delivering actionable sales insights to leadership",
    ],
    github: "",
  },
  {
    title: "Financial Risk & Compliance Dashboard",
    tool: "Power BI",
    tags: ["Power BI", "SQL", "Risk Analytics", "Compliance"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/dashboard-project-QaR45PLys4QsA92uPQBZwm.webp",
    description:
      "An interactive Power BI dashboard designed for financial risk monitoring, compliance auditing, and anomaly detection across enterprise transactions. Built on top of a robust SQL data model that flags anomalous transactions based on predefined risk thresholds.",
    highlights: [
      "Automated compliance reporting workflow, reducing audit preparation time by 60%",
      "Surfaced high-risk transactions 3x faster for the compliance team",
      "Complex SQL stored procedures and CTEs for anomaly detection",
    ],
    github: "https://github.com/arao98/financial-risk-compliance-dashboard",
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
