/**
 * AboutSection — Professional summary with stats
 * Design: Refined Modernism — asymmetric two-column layout on desktop
 */
import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { about } from "@/data/content";

export default function AboutSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 bg-background"
    >
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
          {/* Left column — heading */}
          <div>
            <p className="section-label mb-3 fade-up">About</p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-foreground heading-accent fade-up"
              style={{ fontFamily: "var(--font-display)", transitionDelay: "80ms" }}
            >
              {about.headline}
            </h2>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {about.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="fade-up p-4 bg-card border border-border rounded-sm"
                  style={{ transitionDelay: `${(i + 2) * 80}ms` }}
                >
                  <div
                    className="text-2xl font-bold text-primary mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs text-muted-foreground leading-tight"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — paragraphs */}
          <div className="space-y-5">
            {about.paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-base text-muted-foreground leading-relaxed fade-up"
                style={{
                  fontFamily: "var(--font-body)",
                  transitionDelay: `${(i + 1) * 100}ms`,
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
