/**
 * DashboardsSection — Tableau and Power BI dashboard showcase
 * Design: Refined Modernism — card grid with tool filter tabs
 * Separate section highlighting BI visualization work.
 */
import { useState, useMemo } from "react";
import { Github, BarChart2, LayoutDashboard } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { dashboards } from "@/data/content";

const TOOLS = ["All", "Tableau", "Power BI"] as const;
type Tool = (typeof TOOLS)[number];

export default function DashboardsSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;
  const [activeTool, setActiveTool] = useState<Tool>("All");

  const filtered = useMemo(
    () =>
      activeTool === "All"
        ? dashboards
        : dashboards.filter((d) => d.tool === activeTool),
    [activeTool]
  );

  return (
    <section
      id="dashboards"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 bg-background"
    >
      <div className="container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <p className="section-label mb-3 fade-up">Visualization Work</p>
            <h2
              className="text-4xl font-bold text-foreground heading-accent fade-up"
              style={{ fontFamily: "var(--font-display)", transitionDelay: "80ms" }}
            >
              Tableau &amp; Power BI Dashboards
            </h2>
            <p
              className="text-sm text-muted-foreground mt-3 max-w-xl fade-up"
              style={{ fontFamily: "var(--font-body)", transitionDelay: "120ms" }}
            >
              A curated showcase of interactive dashboards built across 5+ years of analytics work — covering fraud operations, revenue performance, supply chain, and executive KPI reporting.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-1.5 flex-wrap fade-up" style={{ transitionDelay: "160ms" }}>
            {TOOLS.map((tool) => (
              <button
                key={tool}
                onClick={() => setActiveTool(tool)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-sm transition-colors ${
                  activeTool === tool
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard grid */}
        <div key={activeTool} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((dashboard, i) => (
            <div
              key={dashboard.title}
              className="fade-up visible bg-card border border-border rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300 group"
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={dashboard.image}
                  alt={dashboard.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                {/* Tool badge */}
                <span
                  className={`absolute top-3 left-3 text-xs font-semibold px-2 py-0.5 rounded-sm flex items-center gap-1 ${
                    dashboard.tool === "Tableau"
                      ? "bg-blue-600 text-white"
                      : "bg-yellow-500 text-black"
                  }`}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {dashboard.tool === "Tableau" ? (
                    <BarChart2 size={10} />
                  ) : (
                    <LayoutDashboard size={10} />
                  )}
                  {dashboard.tool}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {dashboard.title}
                </h3>
                <p
                  className="text-sm text-muted-foreground line-clamp-3 mb-4 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {dashboard.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-4">
                  {dashboard.highlights.map((h, hi) => (
                    <li
                      key={hi}
                      className="text-xs text-muted-foreground leading-relaxed pl-3 border-l-2 border-primary/30"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {dashboard.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                  {dashboard.tags.length > 3 && (
                    <span className="skill-tag">+{dashboard.tags.length - 3}</span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {dashboard.github ? (
                    <a
                      href={dashboard.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <Github size={13} /> View Code
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground opacity-50"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <Github size={13} /> Code (coming soon)
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
