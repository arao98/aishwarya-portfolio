/**
 * ResumeSection — Resume download and summary
 * Design: Refined Modernism — dark band with teal CTA
 */
import { Download } from "lucide-react";
import { personal } from "@/data/content";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-foreground text-background">
      <div className="container">
        <div className="max-w-3xl">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3 opacity-60"
            style={{ fontFamily: "var(--font-mono)", color: "inherit" }}
          >
            Resume
          </p>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "inherit" }}
          >
            Let's work together.
          </h2>
          <p
            className="text-base opacity-70 leading-relaxed mb-8 max-w-xl"
            style={{ fontFamily: "var(--font-body)", color: "inherit" }}
          >
            Data Analyst and Business Intelligence professional with 5+ years of experience across device protection, insurance, fintech, retail, and operations. Skilled in SQL, Python, R, Tableau, Power BI, ETL pipelines, Snowflake, AWS Glue, Azure Databricks, fraud analytics, inventory reporting, KPI governance, and stakeholder enablement. Open to Data Analyst, BI Analyst, Fraud Analyst, Business Analyst, and Operations Analytics roles.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/90 transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Download size={15} />
              Download Resume
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 border border-background/30 text-sm font-semibold rounded-sm hover:bg-background/10 transition-colors"
              style={{ fontFamily: "var(--font-body)", color: "inherit" }}
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
