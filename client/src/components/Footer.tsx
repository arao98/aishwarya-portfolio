/**
 * Footer — Minimal footer with name and links
 */
import { personal, navLinks } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="text-sm text-muted-foreground"
          style={{ fontFamily: "var(--font-body)" }}
        >
          © {year} {personal.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {navLinks.slice(0, 4).map((link) => (
            <button
              key={link.href}
              onClick={() => {
                const id = link.href.replace("#", "");
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
