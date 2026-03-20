/* eslint-disable react/no-unescaped-entities */
export default function FinalCTA() {
  return (
    <section id="join" style={{ padding: "180px 0", background: "linear-gradient(160deg, #0F3D2E 0%, #0A2A1E 40%, #161616 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
      {/* Radial glow */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(90,138,114,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 760, margin: "0 auto", padding: "0 56px" }}>

        <div className="reveal" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--sage)", marginBottom: 40, display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
          <span style={{ width: 32, height: 1, background: "var(--sage)", display: "inline-block" }} />
          Your space is here
          <span style={{ width: 32, height: 1, background: "var(--sage)", display: "inline-block" }} />
        </div>

        <h2 className="reveal reveal-delay-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(38px,5vw,68px)", fontWeight: 300, lineHeight: 1.1, color: "var(--cream)", letterSpacing: "-0.02em", marginBottom: 32 }}>
          If you've been looking<br />for something <em style={{ fontStyle: "italic", color: "var(--sage)" }}>deeper</em> —<br />this is your space.
        </h2>

        <p className="reveal reveal-delay-2" style={{ fontSize: 17, lineHeight: 1.8, color: "var(--tan)", fontWeight: 300, marginBottom: 64 }}>
          No pressure. No algorithm. Just an open door to a quieter, more meaningful way of being.
        </p>

        <div className="reveal reveal-delay-3" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
          <a
            href="#"
            style={{ fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--charcoal)", background: "var(--cream)", padding: "20px 52px", borderRadius: 1, textDecoration: "none", fontWeight: 500, transition: "all 0.35s", display: "inline-block" }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--parchment)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--cream)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Enter the Library
          </a>
          <a
            href="#"
            style={{ fontSize: 13, letterSpacing: "0.06em", color: "var(--tan)", textDecoration: "none", fontWeight: 300, borderBottom: "1px solid rgba(200,188,159,0.3)", paddingBottom: 3, transition: "all 0.25s" }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--cream)"; e.currentTarget.style.borderColor = "rgba(245,241,232,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--tan)"; e.currentTarget.style.borderColor = "rgba(200,188,159,0.3)"; }}
          >
            Read more first
          </a>
        </div>

      </div>
    </section>
  );
}
