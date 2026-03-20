const CARDS = [
  { icon: "◎", title: "Express Clearly",         desc: "Find the words that actually match what you feel. Stop losing yourself in translation." },
  { icon: "◉", title: "Understand People",        desc: "Read beneath the surface. Sense what others mean before they finish speaking." },
  { icon: "◌", title: "Build Quiet Confidence",   desc: "Not the loud kind. The kind that doesn't need to announce itself." },
  { icon: "◍", title: "Have Real Conversations",  desc: "The kind that leave you feeling known, not just heard." },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "120px 0", background: "#161616" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 56px" }}>

        <div style={{ marginBottom: 72 }}>
          <div className="section-label reveal">What you experience here</div>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px,4vw,52px)", fontWeight: 300, color: "var(--cream)", letterSpacing: "-0.01em", marginBottom: 20, maxWidth: 560 }}>
            Skills that live in the<br /><em style={{ fontStyle: "italic", color: "var(--sage)" }}>body, not just the mind</em>
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontSize: 15, color: "var(--tan)", fontWeight: 300, maxWidth: 440, lineHeight: 1.8 }}>
            Everything here is meant to be felt, not just understood. These are not lessons. They are quiet shifts.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2 }}>
          {CARDS.map((c, i) => (
            <div
              key={c.title}
              className={`reveal reveal-delay-${i + 1}`}
              data-hover
              style={{ background: "#1A1A1A", padding: "48px 36px", border: "1px solid rgba(90,138,114,0.08)", transition: "all 0.4s ease", position: "relative", overflow: "hidden" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#1E2A23"; e.currentTarget.style.borderColor = "rgba(90,138,114,0.25)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#1A1A1A"; e.currentTarget.style.borderColor = "rgba(90,138,114,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ width: 48, height: 48, borderRadius: "50%", border: "1px solid rgba(90,138,114,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 32, fontSize: 20, color: "var(--sage)" }}>{c.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: "var(--cream)", marginBottom: 16 }}>{c.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--muted)", fontWeight: 300 }}>{c.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
