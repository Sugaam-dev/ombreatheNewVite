import React, { useState } from "react";
import {
  Globe,
  Leaf,
  Trees,
  Mountain,
  Waves,
  Camera,
  CheckCircle,
} from "lucide-react";

const OmbExcursionSection = ({ data }) => {
  const [hovered, setHovered] = useState(null);

  if (!data || !data.colors || !data.content) return null;
  const { colors, content } = data;

  // 🔥 ICON MAP (used dynamically)
  const iconMap = {
    globe: <Globe size={16} />,
    leaf: <Leaf size={16} />,
    trees: <Trees size={16} />,
    mountain: <Mountain size={16} />,
    waves: <Waves size={16} />,
    camera: <Camera size={16} />,
  };

  return (
    <section
      style={{
        background: colors.white,
        padding: "clamp(30px,9vw,50px) 10px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* HEADER */}
        <div style={{ marginBottom: 50 }}>
          <div>{content.eyebrow}</div>

          <h2>
            {content.title} <em>{content.highlight}</em>
          </h2>

          <p style={{ maxWidth: 600 }}>
            {content.subtitle}
          </p>
        </div>

        {/* CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {content.excursions.map((exc, i) => (
            <div
              key={i}
              style={{
                borderRadius: 16,
                overflow: "hidden",
                background: colors.white,
                /* Enhanced depth: base shadow vs a richer, deeper shadow on hover */
                boxShadow: hovered === i 
                  ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                  : colors.cardShadow || "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                
                /* Smoother animation curves */
                transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                transform: hovered === i ? "translateY(-8px)" : "translateY(0)",
                cursor: "pointer"
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* IMAGE container */}
              <div style={{ height: 200, position: "relative", overflow: "hidden" }}>
                <img
                  src={exc?.img}
                  alt={exc?.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: hovered === i ? "scale(1.05)" : "scale(1)",
                    /* Matched transition speed for parity with the card lift */
                    transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: colors.overlay,
                    /* Subtle overlay dimming/lightening on hover if desired */
                    opacity: hovered === i ? 0.85 : 1,
                    transition: "opacity 0.4s ease",
                  }}
                />

                {exc?.duration && (
                  <div
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      background: colors.white,
                      padding: "4px 10px",
                      borderRadius: 20,
                      fontSize: "0.7rem",
                      fontWeight: 500,
                    }}
                  >
                    {exc?.duration}
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div style={{ padding: 20 }}>
                
                {/* TAG */}
                {exc?.tag && (
                  <span
                    style={{
                      background: exc?.tagBg || colors.sage,
                      color: colors.white,
                      padding: "4px 10px",
                      borderRadius: 20,
                      fontSize: "0.7rem",
                    }}
                  >
                    {exc?.tag}
                  </span>
                )}

                {/* TITLE + ICON */}
                <h3
                  style={{
                    margin: "10px 0",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  {iconMap[exc?.icon] || <CheckCircle size={16} />}
                  {exc?.title}
                </h3>

                {/* DESC */}
                <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "0.9rem", lineMedium: "1.4" }}>{exc?.desc}</p>

                {/* HIGHLIGHTS */}
                {exc?.highlights && exc.highlights.length > 0 && (
                  <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 6 }}>
                    {exc.highlights.map((h, j) => (
                      <div
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          fontSize: "0.8rem",
                        }}
                      >
                        {iconMap[exc?.icon] || (
                          <CheckCircle size={14} color={colors.sage} />
                        )}
                        {h}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        {content.bottom && (
          <div
            style={{
              marginTop: 50,
              background: colors.navy,
              borderRadius: 20,
              padding: 30,
              color: colors.white,
              textAlign: "center",
            }}
          >
            <h3>{content.bottom.title}</h3>
            <p style={{ opacity: 0.7 }}>
              {content.bottom.desc}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default OmbExcursionSection;