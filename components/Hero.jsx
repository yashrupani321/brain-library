export default function Hero() {
  const S = {
    section: { minHeight: "100vh", display: "grid", position: "relative", overflow: "hidden", background: "var(--charcoal)" },
    bg: { position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 90% at 65% 40%, rgba(15,61,46,0.85) 0%, rgba(28,28,28,0) 70%), radial-gradient(ellipse 50% 60% at 10% 80%, rgba(15,61,46,0.4) 0%, transparent 60%)" },
    content: { position: "relative", zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "center", padding: "140px 96px 80px 96px", maxWidth: 960 },
    tag: { display: "inline-flex", alignItems: "center", gap: 14, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--sage)", marginBottom: 48 },
    tagLine: { width: 40, height: 1, background: "var(--sage)" },
    h1: { fontFamily: "'Playfair Display', serif", fontSize: "clamp(52px,7vw,96px)", fontWeight: 300, lineHeight: 1.06, letterSpacing: "-0.02em", color: "var(--cream)", marginBottom: 36 },
    em: { fontStyle: "italic", color: "var(--sage)" },
    sub: { fontSize: 17, lineHeight: 1.8, color: "var(--tan)", fontWeight: 300, maxWidth: 500, marginBottom: 64 },
    actions: { display: "flex", alignItems: "center", gap: 36 },
    scrollBar: { position: "absolute", bottom: 48, left: 96, display: "flex", alignItems: "center", gap: 16, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--dim)" },
    stats: { position: "absolute", right: 80, bottom: 80, display: "flex", flexDirection: "column", gap: 28, zIndex: 2 },
    statVal: { fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 300, color: "var(--sage)", lineHeight: 1 },
    statLbl: { fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--dim)", marginTop: 4 },
    divider: { width: 1, height: 40, background: "linear-gradient(to bottom, transparent, var(--dim), transparent)", alignSelf: "flex-end" },
  };

  return (
    <section style={S.section}>
      <div style={S.bg} />
      <div className="hero-lines" />
      <div style={S.content}>
        <div style={S.tag} className="animate-fade-up-1">
          <span style={S.tagLine} />
          A space for the curious mind
        </div>
        <h1 style={S.h1} className="animate-fade-up-2">
          Most people speak.<br />
          Few <em style={S.em}>truly</em> connect.
        </h1>
        <p style={S.sub} className="animate-fade-up-3">
          Brain Library is a quiet movement for those who want more from their inner life —
          deeper conversations, sharper self-awareness, and the words to match what they feel.
        </p>
        <div style={S.actions} className="animate-fade-up-4">
         href="https://wa.me/918085890545"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-fill"
  style={{ fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--charcoal)", background: "var(--cream)", padding: "18px 44px", borderRadius: 1, textDecoration: "none", fontWeight: 500, display: "inline-block" }}
>
  <span style={{ color: "var(--charcoal)" }}>Contact Us</span>
</a>
          </a>
          <a href="#experience" style={{ fontSize: 13, letterSpacing: "0.06em", color: "var(--tan)", textDecoration: "none", fontWeight: 300, borderBottom: "1px solid rgba(200,188,159,0.3)", paddingBottom: 3, transition: "all 0.25s" }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--cream)"; e.currentTarget.style.borderColor = "rgba(245,241,232,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--tan)"; e.currentTarget.style.borderColor = "rgba(200,188,159,0.3)"; }}
          >Explore Conversations</a>
        </div>
      </div>

      <div style={S.scrollBar} className="animate-fade-in">
        <div className="scroll-line" />
        Scroll slowly
      </div>

      <div style={S.stats} className="animate-fade-stat">
        {[["2,400+", "Minds inside"], ["60+", "Live sessions"], ["∞", "Good conversations"]].map(([val, lbl], i) => (
          <div key={lbl}>
            {i > 0 && <div style={S.divider} />}
            <div style={{ ...S.statVal, marginTop: i > 0 ? 8 : 0 }}>{val}</div>
            <div style={S.statLbl}>{lbl}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
