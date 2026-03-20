const LINKS = ["About", "Community", "Sessions", "Writing", "Contact"];

export default function Footer() {
  return (
    <footer style={{ background: "#0A0A0A", padding: "64px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 32, borderTop: "1px solid rgba(90,138,114,0.1)" }}>

      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 400, color: "var(--cream)", letterSpacing: "0.04em", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 5, height: 5, background: "var(--sage)", borderRadius: "50%", display: "inline-block" }} />
        Brain Library
      </div>

      <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
        {LINKS.map(l => (
          <a key={l} href="#" style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--dim)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--tan)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--dim)"}
          >{l}</a>
        ))}
      </div>

      <div style={{ fontSize: 12, color: "var(--dim)", fontWeight: 300 }}>
        © 2025 Brain Library. A space for depth.
      </div>

    </footer>
  );
}
