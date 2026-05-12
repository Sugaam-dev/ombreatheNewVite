import React, { useEffect, useState } from "react";
import {
  Award,
  Bed,
  Utensils,
  Heart,
  Compass,
  Sparkles,
} from "lucide-react";

const OmbPromoSection = ({ data }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const { colors, content } = data;

  // ICON MAP
  const iconMap = {
    award: <Award size={18} />,
    bed: <Bed size={18} />,
    utensils: <Utensils size={18} />,
    heart: <Heart size={18} />,
    compass: <Compass size={18} />,
  };

  return (
    <section
      style={{
        background: "transparent",
        padding: "clamp(70px,9vw,110px) 20px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(40px,6vw,80px)",
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div>
            <div style={{ display: "flex", gap: 6 }}>
              <Sparkles size={14} /> {content.eyebrow}
            </div>

            <h2>
              {content.title}{" "}
              <em>{content.highlight}</em> {content.duration} journey in{" "}
              <strong>{content.strongText}</strong>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {content.features.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 14,
                    padding: 14,
                    borderRadius: 16,
                    background: colors.white,
                    boxShadow: colors.shadowSm,
                    opacity: visible ? 1 : 0,
                    transform: visible
                      ? "translateX(0)"
                      : "translateX(-20px)",
                    transition: "all 0.4s ease",
                    transitionDelay: `${i * 0.1}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(6px)";
                    e.currentTarget.style.boxShadow = colors.shadowMd;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = colors.shadowSm;
                  }}
                >
                  {/* ICON */}
                  <div
                    style={{
                      minWidth: 42,
                      height: 42,
                      borderRadius: 12,
                      background: colors.navy,
                      color: colors.white,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {iconMap[f.icon]}
                  </div>

                  {/* TEXT */}
                  <div>
                    <p style={{ fontWeight: 600 }}>{f.title}</p>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: colors.violet,
                      }}
                    >
                      {f.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* MAIN IMAGE */}
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                height: "clamp(220px,30vw,360px)",
                position: "relative",
              }}
            >
              <img
                src={content.images.main}
                alt="Yoga"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: colors.overlay,
                }}
              />
            </div>

            {/* SMALL IMAGES */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
              }}
            >
              <img
                src={content.images.food}
                alt="Food"
                loading="lazy"
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  borderRadius: 16,
                }}
              />

              <img
                src={content.images.stay}
                alt="Stay"
                loading="lazy"
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  borderRadius: 16,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmbPromoSection;