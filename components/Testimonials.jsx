/* eslint-disable react/no-unescaped-entities */
const TESTIMONIALS = [
  { text: "I didn't expect to walk away understanding myself better. I came for communication skills and found something much quieter, and far more useful.", name: "Aarav M.", role: "Design student, 23", initial: "A" },
  { text: "There's no performance here. Just people trying to think and speak more honestly. That alone is rare.", name: "Sia K.", role: "Writer & educator, 29", initial: "S" },
  { text: "I've read all the self-help books. This felt different. Like someone finally turned the lights on inside the room.", name: "Rehan T.", role: "Engineer, 26", initial: "R" },
];

export default function Testimonials() {
  return (
    <section style={{ padding: "140px 0", background: "var(--charcoal)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 56px" }}>

        <div style={{ marginBottom: 72 }}>
          <div className="section-label reveal">Voices from inside</div>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(34px,3.5vw,48px)", fontWeight: 300, color: "var(--cream)", maxWidth: 480, letterSpacing: "-0.01em" }}>
            What changes when you<br /><em style={{ fontStyle: "italic", color: "var(--sage)" }}>slow down to listen</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${i + 1}`}
              data-hover
              style={{ background: "#1A1A1A", border: "1px solid rgba(90,138,114,0.1)", padding: "48px 40px", borderRadius: 2, transition: "all 0.35s", position: "relative" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(90,138,114,0.25)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(90,138,114,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 64, lineHeight: 1, color: "var(--sage)", opacity: 0.4, marginBottom: 8 }}>"</div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontStyle: "italic", fontWeight: 300, lineHeight: 1.7, color: "var(--parchment)", marginBottom: 36 }}>{t.text}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, var(--sage), var(--forest))", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display', serif", fontSize: 16, color: "var(--cream)" }}>{t.initial}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "var(--cream)" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
