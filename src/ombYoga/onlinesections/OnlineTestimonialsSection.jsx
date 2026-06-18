import React from "react";
import { Star } from "lucide-react";

const OnlineTestimonialsSection = ({ data }) => {
  const { colors, content } = data;

  return (
    <section
      style={{
        background: colors.white,
        padding: "clamp(50px,9vw,90px) 10px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 20,
            marginBottom: 50,
          }}
        >
          <div>
            <h2 style={{ color: colors.navy, margin: 0 }}>
              {content.title} <em style={{ color: colors.sage }}>{content.highlight}</em>
            </h2>
            <p style={{ maxWidth: 560, color: "#555", margin: "8px 0 0" }}>
              {content.subtitle}
            </p>
          </div>

          {content.rating && (
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  color: colors.navy,
                  lineHeight: 1,
                }}
              >
                {content.rating}
              </div>
              <div style={{ display: "flex", gap: 2, justifyContent: "center", margin: "4px 0" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={colors.sage} color={colors.sage} />
                ))}
              </div>
              <div style={{ fontSize: "0.78rem", color: "#777" }}>{content.ratingLabel}</div>
            </div>
          )}
        </div>

        {/* TESTIMONIALS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 22,
          }}
        >
          {content.testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: colors.cream,
                borderRadius: 18,
                padding: 24,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={13} fill={colors.sage} color={colors.sage} />
                ))}
              </div>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#444",
                  lineHeight: 1.7,
                  flexGrow: 1,
                  marginBottom: 16,
                  display: "-webkit-box",
                  WebkitLineClamp: 6,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {t.quote}
              </p>

              <div style={{ fontWeight: 600, color: colors.navy, fontSize: "0.9rem" }}>
                {t.name}
              </div>
              <div style={{ fontSize: "0.78rem", color: "#888" }}>{t.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineTestimonialsSection;