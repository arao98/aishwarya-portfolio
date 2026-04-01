/**
 * ContactSection — Contact form + social links
 * Design: Refined Modernism — clean two-column layout
 */
import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { personal } from "@/data/content";

export default function ContactSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens the user's email client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 bg-background"
    >
      <div className="container">
        <div className="mb-12">
          <p className="section-label mb-3 fade-up">Get in Touch</p>
          <h2
            className="text-4xl font-bold text-foreground heading-accent fade-up"
            style={{ fontFamily: "var(--font-display)", transitionDelay: "80ms" }}
          >
            Contact
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          {/* Left — contact info */}
          <div className="space-y-6 fade-up" style={{ transitionDelay: "100ms" }}>
            <p
              className="text-base text-muted-foreground leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              I'm open to new opportunities in data analytics, fraud strategy, and business intelligence. Feel free to reach out — I typically respond within 24 hours.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span className="w-8 h-8 rounded-sm bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail size={14} className="text-primary" />
                </span>
                {personal.email}
              </a>

              {personal.linkedin && (
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <span className="w-8 h-8 rounded-sm bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Linkedin size={14} className="text-primary" />
                  </span>
                  LinkedIn Profile
                </a>
              )}

              {personal.github && (
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <span className="w-8 h-8 rounded-sm bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Github size={14} className="text-primary" />
                  </span>
                  GitHub Profile
                </a>
              )}

              <div
                className="flex items-center gap-3 text-sm text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span className="w-8 h-8 rounded-sm bg-muted flex items-center justify-center">
                  <MapPin size={14} className="text-primary" />
                </span>
                {personal.location}
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="fade-up" style={{ transitionDelay: "160ms" }}>
            {submitted ? (
              <div className="bg-primary/8 border border-primary/20 rounded-sm p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={20} className="text-primary" />
                </div>
                <h3
                  className="text-lg font-bold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Message Sent!
                </h3>
                <p
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Your email client should have opened. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs text-primary hover:underline"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 text-sm bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 text-sm bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the opportunity..."
                    className="w-full px-4 py-2.5 text-sm bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/90 transition-colors w-full justify-center"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Send size={14} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
