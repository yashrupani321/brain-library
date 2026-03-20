const STEPS = [
  { num: "i",   title: "Live Sessions",       desc: "Small, intimate gatherings. Real voices, real presence. Not webinars. Conversations." },
  { num: "ii",  title: "Real Conversations",  desc: "Practice the kind of dialogue that most people never learn — honest, curious, unhurried." },
  { num: "iii", title: "Guided Frameworks",   desc: "Psychology and philosophy made practical. Tools you'll actually use in your daily life." },
  { num: "iv",  title: "Community Growth",    desc: "Grow alongside others who are serious about depth — in thought, word, and presence." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "140px 0", background: "var(--charcoal)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "center" }}>

          {/* Left */}
          <div>
            <div className="section-label reveal">How it works</div>
            <h2 className="reveal reveal-delay-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px,4vw,54px)", fontWeight: 300, lineHeight: 1.12, color: "var(--cream)", letterSpacing: "-0.01em", marginBottom: 24 }}>
              Slow by design.<br /><em style={{ fontStyle: "italic", color: "var(--sage)" }}>Intentional</em> by nature.
            </h2>
            <p className="reveal reveal-delay-2" style={{ fontSize: 16, lineHeight: 1.8, color: "var(--tan)", fontWeight: 300, marginBottom: 48 }}>
              No algorithms pushing you through content. No completion badges.
              Just real structure built for real growth.
            </p>
            <div>
              {STEPS.map((s, i) => (
                <div
                  key={s.title}
                  className={`reveal reveal-delay-${i + 1}`}
                  style={{ display: "flex", gap: 28, padding: "28px 0", borderBottom: i < STEPS.length - 1 ? "1px solid rgba(90,138,114,0.1)" : "none", transition: "padding 0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.paddingLeft = "8px"}
                  onMouseLeave={e => e.currentTarget.style.paddingLeft = "0"}
                >
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, color: "var(--sage)", fontStyle: "italic", minWidth: 24, paddingTop: 3 }}>{s.num}</div>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: "var(--cream)", marginBottom: 8 }}>{s.title}</div>
                    <div style={{ fontSize: 14, lineHeight: 1.7, color: "var(--muted)", fontWeight: 300 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Visual quote card */}
          <div className="reveal reveal-delay-2" style={{ position: "relative", height: 480, background: "linear-gradient(145deg, #0F3D2E 0%, #1A5C44 40%, #0A2A1E 100%)", borderRadius: 4, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Decorative orbs */}
            <div style={{ position: "absolute", width: 300, height: 300, top: -100, right: -80, borderRadius: "50%", background: "radial-gradient(circle, rgba(90,138,114,0.15) 0%, transparent 70%)" }} />
            <div style={{ position: "absolute", width: 200, height: 200, bottom: -60, left: -40, borderRadius: "50%", background: "radial-gradient(circle, rgba(90,138,114,0.12) 0%, transparent 70%)" }} />
            {/* Big quote mark */}
            <div style={{ position: "absolute", top: -20, left: 32, fontFamily: "'Playfair Display', serif", fontSize: 180, fontWeight: 300, color: "rgba(90,138,114,0.08)", lineHeight: 1, pointerEvents: "none" }}>"</div>
            {/* Quote text */}
            <div style={{ textAlign: "center", padding: 48, position: "relative", zIndex: 1 }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 300, fontStyle: "italic", color: "rgba(245,241,232,0.88)", lineHeight: 1.6, marginBottom: 24 }}>
                "The quality of your inner life determines the quality of everything else."
              </p>
              <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(90,138,114,0.7)" }}>— A principle we return to, often</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
