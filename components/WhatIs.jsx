const PILLARS = [
  ["01", "Psychology",         "Understanding why people — including yourself — do what they do."],
  ["02", "Communication",      "Learning to speak in a way that actually reaches people."],
  ["03", "Philosophy",         "Old questions that still have everything to do with how you live now."],
  ["04", "Human Connection",   "The thing we all want more of, but rarely know how to build."],
];

export default function WhatIs() {
  return (
    <section id="about" style={{ padding: "140px 0", background: "var(--charcoal)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "start" }}>

          {/* Left */}
          <div>
            <div className="section-label reveal">What is Brain Library</div>
            <h2 className="reveal reveal-delay-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(38px,4vw,58px)", fontWeight: 300, lineHeight: 1.14, color: "var(--cream)", letterSpacing: "-0.01em", marginBottom: 40 }}>
              A rare kind of<br /><em style={{ fontStyle: "italic", color: "var(--sage)" }}>intellectual home</em>
            </h2>
            <p className="reveal reveal-delay-2" style={{ fontSize: 16, lineHeight: 1.9, color: "var(--tan)", fontWeight: 300, marginBottom: 24 }}>
              Brain Library is not a course. It is not a productivity tool. It is something harder to name —
              a living space where psychology, philosophy, and honest conversation meet.
            </p>
            <p className="reveal reveal-delay-3" style={{ fontSize: 16, lineHeight: 1.9, color: "var(--tan)", fontWeight: 300 }}>
              We believe that most people are more capable of depth than their daily lives allow.
              This is a space built to prove that belief true, one conversation at a time.
            </p>
          </div>

          {/* Right */}
          <div style={{ paddingTop: 16, borderLeft: "1px solid rgba(90,138,114,0.2)" }}>
            {PILLARS.map(([num, name, desc], i) => (
              <div
                key={name}
                className={`reveal reveal-delay-${i + 1}`}
                data-hover
                style={{ padding: "28px 0 28px 36px", borderBottom: i < PILLARS.length - 1 ? "1px solid rgba(90,138,114,0.1)" : "none", transition: "padding 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.paddingLeft = "44px"}
                onMouseLeave={e => e.currentTarget.style.paddingLeft = "36px"}
              >
                <div style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--sage)", marginBottom: 10, fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>{num}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 400, color: "var(--cream)", marginBottom: 8 }}>{name}</div>
                <div style={{ fontSize: 14, lineHeight: 1.7, color: "var(--muted)", fontWeight: 300 }}>{desc}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
