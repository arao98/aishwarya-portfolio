/**
 * ProjectsSection — Filterable project cards with detail modal
 * Design: Refined Modernism — card grid with category filter tabs
 */
import { useState } from "react";
import { X, Github, ExternalLink, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { projects } from "@/data/content";

type Project = (typeof projects)[number];

const CATEGORIES = ["All", "Fraud", "Data", "Business"] as const;

export default function ProjectsSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 bg-muted/40"
    >
      <div className="container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <p className="section-label mb-3 fade-up">Portfolio</p>
            <h2
              className="text-4xl font-bold text-foreground heading-accent fade-up"
              style={{ fontFamily: "var(--font-display)", transitionDelay: "80ms" }}
            >
              Projects
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-1.5 flex-wrap fade-up" style={{ transitionDelay: "120ms" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-sm transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="fade-up bg-card border border-border rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
              style={{ transitionDelay: `${(i % 3) * 60 + 80}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                <span
                  className="absolute top-3 left-3 text-xs font-semibold px-2 py-0.5 rounded-sm bg-primary text-primary-foreground"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {project.overview}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="skill-tag">+{project.tags.length - 3}</span>
                  )}
                </div>

                <button
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:gap-2 transition-all"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  View Details <ChevronRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-card border border-border rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal image */}
            <div className="relative h-52 overflow-hidden rounded-t-sm">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 p-1.5 bg-background/80 rounded-sm hover:bg-background transition-colors"
              >
                <X size={16} />
              </button>
              <span
                className="absolute top-3 left-3 text-xs font-semibold px-2 py-0.5 rounded-sm bg-primary text-primary-foreground"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {selectedProject.category}
              </span>
            </div>

            <div className="p-7">
              <h3
                className="text-2xl font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {selectedProject.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>

              {/* Details */}
              {[
                { label: "Overview", content: selectedProject.overview },
                { label: "Business Problem", content: selectedProject.problem },
                { label: "Approach", content: selectedProject.approach },
                { label: "Key Findings", content: selectedProject.findings },
              ].map(({ label, content }) => (
                <div key={label} className="mb-5">
                  <h4
                    className="text-xs font-semibold text-primary uppercase tracking-widest mb-1.5"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {label}
                  </h4>
                  <p
                    className="text-sm text-muted-foreground leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {content}
                  </p>
                </div>
              ))}

              {/* Links */}
              <div className="flex gap-3 mt-6 pt-5 border-t border-border">
                {selectedProject.github ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-border text-sm font-semibold text-foreground rounded-sm hover:bg-muted transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2 border border-border text-sm text-muted-foreground rounded-sm opacity-50 cursor-not-allowed">
                    <Github size={14} /> GitHub (coming soon)
                  </span>
                )}
                {selectedProject.demo ? (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
