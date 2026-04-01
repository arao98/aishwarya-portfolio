/**
 * ExperienceSection — Timeline-style experience cards
 * Design: Refined Modernism — left timeline rail with content cards
 * No symbol characters used in bullets.
 */
import { MapPin, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { experience, education } from "@/data/content";

export default function ExperienceSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="experience"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 bg-background"
    >
      <div className="container">
        <div className="mb-12">
          <p className="section-label mb-3 fade-up">Career</p>
          <h2
            className="text-4xl font-bold text-foreground heading-accent fade-up"
            style={{ fontFamily: "var(--font-display)", transitionDelay: "80ms" }}
          >
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute top-2 bottom-2 w-px bg-border hidden md:block"
            style={{ left: "11px" }}
          />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <div
                key={`${job.company}-${job.period}`}
                className="fade-up md:pl-10 relative"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute hidden md:block w-5 h-5 rounded-full border-2 border-primary bg-background"
                  style={{ left: "2px", top: "6px" }}
                />

                <div className="bg-card border border-border rounded-sm p-6 hover:shadow-md transition-shadow">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3
                        className="text-lg font-bold text-foreground"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {job.title}
                      </h3>
                      <p
                        className="text-primary font-semibold text-sm mt-0.5"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 shrink-0">
                      <span
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        <Calendar size={11} />
                        {job.period}
                      </span>
                      <span
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <MapPin size={11} />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullets — no symbols, uses a small teal left border on each item */}
                  <ul className="space-y-2.5">
                    {job.bullets.map((bullet, bi) => (
                      <li
                        key={bi}
                        className="text-sm text-muted-foreground leading-relaxed pl-3 border-l-2 border-primary/25"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <p className="section-label mb-3 fade-up">Academic Background</p>
          <h2
            className="text-3xl font-bold text-foreground heading-accent mb-8 fade-up"
            style={{ fontFamily: "var(--font-display)", transitionDelay: "80ms" }}
          >
            Education
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {education.map((edu, i) => (
              <div
                key={edu.degree}
                className="fade-up bg-card border border-border rounded-sm p-6 hover:shadow-md transition-shadow"
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                <h3
                  className="text-base font-bold text-foreground mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {edu.degree}
                </h3>
                <p
                  className="text-primary font-semibold text-sm mb-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {edu.institution}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={10} /> {edu.location}
                  </span>
                  <span
                    className="inline-flex items-center gap-1"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <Calendar size={10} /> {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
