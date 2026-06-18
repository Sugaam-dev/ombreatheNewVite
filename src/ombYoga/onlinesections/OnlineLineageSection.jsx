import React from "react";
import { Flame } from "lucide-react";

const OnlineLineageSection = ({ data }) => {
  const { colors, content } = data;

  return (
    <section
      style={{
        background: colors.navy,
        color: colors.white,
        padding: "clamp(50px,9vw,90px) 10px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: colors.goldLight,
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            <Flame size={14} /> {content.eyebrow}
          </div>

          <h2 style={{ color: colors.white }}>
            {content.title} <em style={{ color: colors.goldLight }}>{content.highlight}</em>
          </h2>

          <p style={{ maxWidth: 650, margin: "0 auto", opacity: 0.75 }}>
            {content.subtitle}
          </p>
        </div>

        {/* TIMELINE */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 22,
          }}
        >
          {content.masters.map((m, i) => (
            <div
              key={i}
              style={{
                background: colors.cardBg,
                border: `1px solid ${colors.border}`,
                borderRadius: 18,
                padding: 24,
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  color: colors.goldLight,
                  fontWeight: 600,
                  marginBottom: 8,
                  letterSpacing: "0.5px",
                }}
              >
                {m.era}
              </div>
              <h4 style={{ color: colors.white, marginBottom: 8, fontSize: "1.05rem" }}>
                {m.name}
              </h4>
              <p style={{ opacity: 0.7, fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineLineageSection;