import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About",       href: "#about" },
  { label: "Experience",  href: "#experience" },
  { label: "How It Works",href: "#how-it-works" },
  { label: "Community",   href: "#community" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0,
        zIndex: 500,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: scrolled ? "18px 56px" : "28px 56px",
        background: scrolled ? "rgba(28,28,28,0.90)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(90,138,114,0.12)" : "none",
        transition: "all 0.5s ease",
      }}
    >
      <Link href="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: "var(--cream)", letterSpacing: "0.04em", textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ display: "inline-block", width: 6, height: 6, background: "var(--sage)", borderRadius: "50%" }} />
        Brain Library
      </Link>

      <ul style={{ display: "flex", gap: 44, listStyle: "none" }} className="nav-links-desktop">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a href={href} style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--tan)", textDecoration: "none", fontWeight: 400, transition: "color 0.25s" }}
              onMouseEnter={e => e.target.style.color = "var(--cream)"}
              onMouseLeave={e => e.target.style.color = "var(--tan)"}
            >{label}</a>
          </li>
        ))}
      </ul>

      <a href="#join" style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--charcoal)", background: "var(--cream)", padding: "10px 28px", borderRadius: 1, textDecoration: "none", fontWeight: 500, transition: "background 0.3s" }}
        onMouseEnter={e => e.currentTarget.style.background = "var(--parchment)"}
        onMouseLeave={e => e.currentTarget.style.background = "var(--cream)"}
      >
        Enter the Library
      </a>
    </nav>
  );
}
