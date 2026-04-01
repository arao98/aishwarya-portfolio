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
            Business Intelligence and Data Analyst with 4+ years of experience across Insurance, Fintech, and Retail. Skilled in SQL, Power BI, Tableau, Python, and ETL engineering. Open to Data Analyst, BI Analyst, Fraud Analyst, and Business Analyst roles.
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
