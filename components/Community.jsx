const VALUES = [
  { title: "Depth over Noise",     desc: "We are not trying to be everywhere. We are trying to be somewhere meaningful. Fully." },
  { title: "Emotional Safety",     desc: "You can speak half-formed thoughts here. No one will rush you toward a conclusion." },
  { title: "Genuine Belonging",    desc: "Not the kind that comes from agreement. The kind that comes from being truly witnessed." },
];

export default function Community() {
  return (
    <section id="community" style={{ padding: "140px 0", background: "#0D1F18", position: "relative", overflow: "hidden" }}>
      {/* BG gradient */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(15,61,46,0.6) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 56px", position: "relative", zIndex: 2 }}>

        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 80px" }}>
          <div className="section-label reveal" style={{ justifyContent: "center" }}>The community</div>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px,5vw,64px)", fontWeight: 300, lineHeight: 1.1, color: "var(--cream)", letterSpacing: "-0.01em", marginBottom: 28 }}>
            A place to be<br /><em style={{ fontStyle: "italic", color: "var(--sage)" }}>genuinely known</em>
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontSize: 16, lineHeight: 1.8, color: "var(--tan)", fontWeight: 300 }}>
            We are not building a follower count. We are building something rarer —
            a room full of people willing to be honest with each other.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              className={`reveal reveal-delay-${i + 1}`}
              data-hover
              style={{ background: "rgba(15,61,46,0.3)", border: "1px solid rgba(90,138,114,0.12)", padding: "48px 40px", textAlign: "center", transition: "all 0.4s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(15,61,46,0.5)"; e.currentTarget.style.borderColor = "rgba(90,138,114,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(15,61,46,0.3)"; e.currentTarget.style.borderColor = "rgba(90,138,114,0.12)"; }}
            >
              <div style={{ fontSize: 28, color: "var(--sage)", marginBottom: 20 }}>⬡</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 400, color: "var(--cream)", marginBottom: 12 }}>{v.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--muted)", fontWeight: 300 }}>{v.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
