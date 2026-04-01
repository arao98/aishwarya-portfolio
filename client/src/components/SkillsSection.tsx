/**
 * SkillsSection — Grouped skill categories with pill tags
 * Design: Refined Modernism — card grid with Fira Code skill tags
 */
import {
  Shield, Database, BarChart2, Code2, TrendingUp, Wrench,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { skills } from "@/data/content";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={18} />,
  Database: <Database size={18} />,
  BarChart2: <BarChart2 size={18} />,
  Code2: <Code2 size={18} />,
  TrendingUp: <TrendingUp size={18} />,
  Wrench: <Wrench size={18} />,
};

export default function SkillsSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="skills"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 bg-muted/40"
    >
      <div className="container">
        <div className="mb-12">
          <p className="section-label mb-3 fade-up">Expertise</p>
          <h2
            className="text-4xl font-bold text-foreground heading-accent fade-up"
            style={{ fontFamily: "var(--font-display)", transitionDelay: "80ms" }}
          >
            Skills & Tools
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className="fade-up bg-card border border-border rounded-sm p-6 hover:shadow-md transition-shadow"
              style={{ transitionDelay: `${(i % 3) * 60 + 80}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-primary">{iconMap[group.icon]}</span>
                <h3
                  className="text-sm font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
