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
  location: "TX",
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
    "Data Analyst and BI Professional with 4+ years of experience analyzing claims, financial, operational, and transactional data using SQL, Python, Power BI, SAS, and Excel. Skilled at translating complex data into clear, actionable insights that support accurate reporting, efficient operations, and informed business decisions.",
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
    "I'm a Data Analyst and BI Professional with 4+ years of experience analyzing claims, financial, operational, and transactional data using SQL, Python, Power BI, SAS, and Excel.",
    "I'm experienced in gathering reporting requirements, identifying data gaps and anomalies, validating data integrity, defining KPI standards, and documenting reporting logic across SQL Server, Snowflake, Tableau, and Power BI environments.",
    "Most recently at Likewize, I applied Python regression and classification models to 1M+ records, improving anomaly detection accuracy by 30% and reducing manual review volume by approximately 40%, while validating dashboard and model outputs through UAT with end-users and IT teams.",
  ],
  stats: [
    { value: "4+", label: "Years of Experience" },
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
    title: "Fraud Data Analyst",
    company: "Likewize Corp",
    location: "Southlake, TX",
    period: "May 2025 – Mar 2026",
    type: "Fraud, Operations, and Risk",
    bullets: [
      "Developed complex SQL queries against fraud, claims, and device-return databases to support Tableau and Power BI dashboards covering fraud trends, processing volumes, operational KPIs, and risk exposure across multiple business lines.",
      "Built Tableau and Power BI dashboards covering claim outcomes, fraud rates, processing volumes, operational backlogs, and risk exposure for operations managers and senior leadership.",
      "Applied Python (Scikit-learn) regression and classification models to 1M+ records, using feature analysis to identify high-risk drivers, improving anomaly detection accuracy by 30% and reducing manual review volume by ~40%.",
      "Validated dashboard and model outputs through UAT with end-users and IT teams, documented metric and model definitions in Confluence, and upskilled 10+ stakeholders on risk data interpretation and tool usage.",
      "Developed an AWS Lambda function integrated with AWS Connect to trigger real-time alerts on high-risk claims, automating a manual escalation step and leveraging GitHub Copilot in VS Code throughout Lambda and SQL development.",
    ],
  },
  {
    title: "Data Engineer",
    company: "Vsion Technologies",
    location: "Cedar Park, TX",
    period: "Dec 2024 – May 2025",
    type: "Data Engineering",
    bullets: [
      "Converted 5+ manual retail reports into Snowflake SQL views and scheduled Power BI dashboards, validating outputs against historical data across multiple periods before cutover and reducing reporting discrepancies by 90%.",
      "Wrote T-SQL and Snowflake queries using CTEs, window functions, and multi-table joins across 10M+ daily transactions to surface inventory, sales, and fulfillment trends for business partners.",
      "Standardized KPI logic and field definitions across 4+ dashboards in Confluence, aligning marketing, operations, and finance teams on a single reporting layer and reducing reconciliation requests.",
    ],
  },
  {
    title: "Business Systems Analyst",
    company: "Quarterhill",
    location: "Louisville, KY",
    period: "Feb 2024 – Apr 2024",
    type: "Business Analysis",
    bullets: [
      "Partnered with senior stakeholders to gather and translate revenue, budget, and compliance reporting requirements into SQL datasets, Power BI dashboards, and SSRS reports while managing delivery across multiple concurrent Agile sprints.",
      "Analyzed more than 3 million transaction records using SQL, trend analysis, and budget-to-actual variance reporting to identify revenue leakage and operational inefficiencies, improving resource allocation efficiency by 25% through data-driven insights.",
    ],
  },
  {
    title: "Data Analyst",
    company: "University of Louisville",
    location: "Louisville, KY",
    period: "Aug 2023 – Feb 2024",
    type: "Data Analysis",
    bullets: [
      "Built SQL Server data models and Tableau ERP reporting pipelines across 5 departments, reducing order processing time by 35% and cutting ad hoc data requests by 50% through self-service dashboards with standardized KPIs.",
      "Automated recurring Excel reports using VBA macros, eliminating 15+ hours of monthly manual effort across departmental reporting cycles.",
    ],
  },
  {
    title: "Business Data Analyst",
    company: "Accenture",
    location: "Bengaluru, India",
    period: "Jun 2021 – Jul 2023",
    type: "Business Analysis",
    bullets: [
      "Wrote SQL queries, stored procedures, and reusable reporting views across 10+ financial-services and retail engagements spanning financial systems, CRM, sales, and procurement, reducing manual reporting cycles by 40%.",
      "Built Tableau and SAP Business Objects dashboards for client leadership on top of Snowflake datasets sourced through Informatica ETL workflows, documenting source-to-target mappings and field definitions to support ongoing report maintenance and reducing data discrepancies by 20%.",
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
  {
    title: "Marketing Attribution & ROI Dashboard",
    category: "Business",
    tags: ["Power BI", "SQL", "Marketing Analytics", "ROI"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/dashboard-project-QaR45PLys4QsA92uPQBZwm.webp",
    overview:
      "A comprehensive Power BI dashboard for analyzing marketing campaign performance, channel attribution, and return on investment (ROI) across various digital marketing efforts.",
    problem:
      "Marketing teams struggled to accurately attribute conversions to specific campaigns and channels, leading to inefficient budget allocation and an unclear understanding of true marketing ROI.",
    approach:
      "Integrated data from Google Analytics, CRM, and advertising platforms (Google Ads, Facebook Ads) using SQL. Developed a multi-touch attribution model (e.g., U-shaped, W-shaped) and calculated key metrics like Customer Acquisition Cost (CAC) and Lifetime Value (LTV). Designed interactive Power BI visualizations to track campaign performance, channel effectiveness, and ROI.",
    findings:
      "Identified top-performing marketing channels, reallocated budget to optimize ROI by 15%, and provided actionable insights for future campaign planning, leading to a 10% increase in conversion rates.",
    tools: ["Power BI", "SQL Server", "Google Analytics", "CRM", "DAX"],
    github: "https://github.com/arao98/marketing-roi-dashboard",
    demo: "",
  },
  {
    title: "E-commerce Customer Journey & Conversion Dashboard",
    category: "Data",
    tags: ["Python", "SQL", "E-commerce", "Conversion Optimization"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/python-project-3UoqFZL4RArrfvKxgktDHA.webp",
    overview:
      "A Python-driven analysis and Power BI dashboard to visualize and optimize the e-commerce customer journey, focusing on conversion funnels, cart abandonment, and product performance.",
    problem:
      "An e-commerce business faced high cart abandonment rates and struggled to understand customer behavior across different stages of the purchasing funnel, leading to lost revenue opportunities.",
    approach:
      "Extracted customer clickstream and transaction data using SQL. Performed data cleaning and feature engineering in Python (Pandas) to identify key touchpoints and bottlenecks in the customer journey. Built a Power BI dashboard to visualize conversion funnels, identify drop-off points, and analyze product performance.",
    findings:
      "Reduced cart abandonment by 18% through targeted interventions at critical funnel stages. Identified underperforming product categories and optimized website navigation, resulting in a 12% increase in overall conversion rate.",
    tools: ["Python", "SQL Server", "Pandas", "Power BI", "Conversion Analytics"],
    github: "https://github.com/arao98/ecommerce-conversion-dashboard",
    demo: "",
  },
  {
    title: "Real-Time FinTech Transaction Monitoring & Liquidity Dashboard",
    category: "Business",
    tags: ["Python", "SQL", "Kafka", "Spark Streaming", "Power BI", "FinTech", "Real-time Analytics"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/dashboard-project-QaR45PLys4QsA92uPQBZwm.webp",
    overview:
      "A real-time FinTech dashboard for monitoring transaction flows, detecting anomalies, and managing liquidity risk across high-volume financial operations.",
    problem:
      "Financial institutions face critical challenges in real-time transaction monitoring, including fraud detection, liquidity management, and compliance. Delays in identifying anomalies can lead to significant financial losses and regulatory penalties.",
    approach:
      "Developed a data pipeline using Kafka for real-time ingestion of transaction data and Spark Streaming for processing and anomaly detection. Utilized SQL for data warehousing and Power BI for building an interactive, real-time dashboard displaying key metrics such as transaction volume, value, liquidity ratios, and flagged suspicious activities. Implemented Python for advanced anomaly detection algorithms.",
    findings:
      "Enabled real-time detection of fraudulent transactions, reducing potential losses by 25%. Improved liquidity risk management by providing up-to-the-minute cash flow visibility, leading to a 10% reduction in capital reserves held. Enhanced compliance by automating anomaly reporting and audit trails.",
    tools: ["Python", "SQL", "Kafka", "Spark Streaming", "Power BI", "Azure Databricks"],
    github: "https://github.com/arao98/fintech-realtime-dashboard",
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
  {
    title: "Marketing Attribution & ROI Dashboard",
    tool: "Power BI",
    tags: ["Power BI", "SQL", "Marketing Analytics", "ROI"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/dashboard-project-QaR45PLys4QsA92uPQBZwm.webp",
    description:
      "A comprehensive Power BI dashboard for analyzing marketing campaign performance, channel attribution, and return on investment (ROI) across various digital marketing efforts. It integrates data from multiple sources to provide a holistic view of marketing effectiveness.",
    highlights: [
      "Optimized marketing budget allocation by 15% through data-driven insights.",
      "Increased conversion rates by 10% by identifying top-performing channels.",
      "Implemented multi-touch attribution models for accurate ROI measurement.",
    ],
    github: "https://github.com/arao98/marketing-roi-dashboard",
  },
  {
    title: "E-commerce Customer Journey & Conversion Dashboard",
    tool: "Power BI",
    tags: ["Power BI", "SQL", "Python", "E-commerce", "Conversion Optimization"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/python-project-3UoqFZL4RArrfvKxgktDHA.webp",
    description:
      "A Power BI dashboard visualizing the e-commerce customer journey, focusing on conversion funnels, cart abandonment, and product performance. Built on Python-driven analysis of customer clickstream and transaction data.",
    highlights: [
      "Reduced cart abandonment by 18% through targeted interventions.",
      "Increased overall conversion rate by 12% by optimizing website navigation.",
      "Identified key drop-off points and underperforming product categories.",
    ],
    github: "https://github.com/arao98/ecommerce-conversion-dashboard",
  },
  {
    title: "Real-Time FinTech Transaction Monitoring & Liquidity Dashboard",
    tool: "Power BI",
    tags: ["Power BI", "SQL", "Kafka", "Spark Streaming", "FinTech", "Real-time Analytics"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663321700564/dNAdaEDSqbDJ2qxsX2A5xZ/dashboard-project-QaR45PLys4QsA92uPQBZwm.webp",
    description:
      "An interactive Power BI dashboard providing real-time visibility into financial transaction flows, liquidity positions, and anomaly detection for critical FinTech operations. Integrates data from Kafka and Spark Streaming for up-to-the-minute insights.",
    highlights: [
      "Real-time anomaly detection reducing potential fraud losses by 25%.",
      "Improved liquidity management with up-to-the-minute cash flow visibility.",
      "Automated reporting for compliance and audit trails.",
    ],
    github: "https://github.com/arao98/fintech-realtime-dashboard",
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
