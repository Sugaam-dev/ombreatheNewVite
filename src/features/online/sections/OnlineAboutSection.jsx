import { Sparkles, CheckCircle } from "lucide-react";

const OnlineAboutSection = ({ data }) => {
  const { colors, content } = data;

  return (
    <section
      style={{
        background: colors.white,
        padding: "clamp(50px,9vw,90px) 10px",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* BLOCK 1 — Why Choose */}
        <div style={{ marginBottom: 56 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: colors.sage,
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            <Sparkles size={14} /> {content.block1.eyebrow}
          </div>

          <h2
            style={{
              color: colors.navy,
              fontSize: "clamp(1.6rem,3.5vw,2.3rem)",
              lineHeight: 1.25,
              marginBottom: 22,
            }}
          >
            {content.block1.title}
          </h2>

          {content.block1.paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                color: "#444",
                fontSize: "1rem",
                lineHeight: 1.85,
                marginBottom: 18,
              }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* BLOCK 2 — Course & Certification */}
        <div
          style={{
            marginBottom: 56,
            padding: "clamp(24px,4vw,40px)",
            borderRadius: 20,
            background: colors.cream,
          }}
        >
          <h3
            style={{
              color: colors.navy,
              fontSize: "clamp(1.3rem,3vw,1.7rem)",
              marginBottom: 18,
            }}
          >
            {content.block2.title}
          </h3>

          {content.block2.paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                color: "#444",
                fontSize: "0.98rem",
                lineHeight: 1.8,
                marginBottom: 16,
              }}
            >
              {p}
            </p>
          ))}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 30,
              marginTop: 26,
            }}
          >
            <div>
              <h4 style={{ color: colors.navy, marginBottom: 10, fontSize: "1rem" }}>
                {content.block2.includesTitle}
              </h4>
              {content.block2.includes.map((item, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: 8, marginBottom: 8, fontSize: "0.9rem", color: "#444" }}
                >
                  <CheckCircle size={15} color={colors.sage} style={{ flexShrink: 0, marginTop: 2 }} />
                  {item}
                </div>
              ))}
            </div>

            <div>
              <h4 style={{ color: colors.navy, marginBottom: 10, fontSize: "1rem" }}>
                {content.block2.stylesTitle}
              </h4>
              {content.block2.styles.map((item, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: 8, marginBottom: 8, fontSize: "0.9rem", color: "#444" }}
                >
                  <CheckCircle size={15} color={colors.sage} style={{ flexShrink: 0, marginTop: 2 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BLOCK 3 — Subjects & Yoga Alliance */}
        <div style={{ marginBottom: content.block4 ? 56 : 0 }}>
          <h3
            style={{
              color: colors.navy,
              fontSize: "clamp(1.3rem,3vw,1.7rem)",
              marginBottom: 18,
            }}
          >
            {content.block3.title}
          </h3>

          {content.block3.paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                color: "#444",
                fontSize: "0.98rem",
                lineHeight: 1.8,
                marginBottom: 16,
              }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* BLOCK 4 — Advancing your career + Yoga Alliance advantages */}
        {content.block4 && (
          <div>
            <h3
              style={{
                color: colors.navy,
                fontSize: "clamp(1.3rem,3vw,1.7rem)",
                marginBottom: 18,
              }}
            >
              {content.block4.title}
            </h3>

            {content.block4.paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  color: "#444",
                  fontSize: "0.98rem",
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}
              >
                {p}
              </p>
            ))}

            {content.block4.advantagesTitle && (
              <>
                <h4 style={{ color: colors.navy, margin: "30px 0 18px", fontSize: "1.05rem" }}>
                  {content.block4.advantagesTitle}
                </h4>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                    gap: 16,
                  }}
                >
                  {content.block4.advantages.map((a, i) => (
                    <div
                      key={i}
                      style={{
                        background: colors.cream,
                        borderRadius: 14,
                        padding: 18,
                        textAlign: "center",
                      }}
                    >
                      <div style={{ fontWeight: 600, color: colors.navy, fontSize: "0.9rem", marginBottom: 6 }}>
                        {a.title}
                      </div>
                      <p style={{ fontSize: "0.82rem", color: "#666", margin: 0, lineHeight: 1.5 }}>
                        {a.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default OnlineAboutSection;