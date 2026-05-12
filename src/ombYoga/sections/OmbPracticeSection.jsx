import React, { useEffect, useState } from "react";
import {
  Sun,
  Wind,
  Feather,
  Heart,
  Shield,
  Sparkles,
} from "lucide-react";

const OmbPracticeSection = ({ data }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const { colors, content } = data;

  // ICON MAP
  const iconMap = {
    sun: <Sun size={20} />,
    wind: <Wind size={20} />,
    feather: <Feather size={20} />,
    heart: <Heart size={18} />,
    shield: <Shield size={18} />,
    sparkles: <Sparkles size={18} />,
  };

  return (
    <section
      style={{
        background: "transparent",
        padding: "clamp(30px,9vw,50px) 10px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {content.eyebrow}
          </div>

          <h2>
            {content.title} <em>{content.highlight}</em>
          </h2>

          <p style={{ maxWidth: 650, margin: "0 auto" }}>
            {content.subtitle}
          </p>
        </div>

        {/* PRACTICE CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            marginBottom: 70,
          }}
        >
          {content.practices.map((p, i) => (
            <div
              key={i}
              style={{
                overflow: "hidden",
                borderRadius: 20,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                opacity: visible ? 1 : 0,
                transition: "all 0.4s ease",
                transitionDelay: `${i * 0.15}s`,
                boxShadow: colors.shadowSm,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = colors.shadowLg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = colors.shadowSm;
              }}
            >
              {/* IMAGE */}
              <div style={{ height: 220, position: "relative" }}>
                <img
                  src={p.img}
                  alt={p.label}
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

              {/* CONTENT */}
              <div style={{ padding: 24 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: colors.navy,
                    color: colors.white,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                  }}
                >
                  {iconMap[p.icon]}
                </div>

                <h3 style={{ marginBottom: 8 }}>{p.label}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SPECIAL FEATURES */}
        <div
          style={{
            background: colors.white,
            borderRadius: 20,
            padding: "clamp(30px,5vw,50px)",
            boxShadow: colors.shadowSm,
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: 40 }}>
            {content.specialTitle}{" "}
            <em>{content.specialHighlight}</em>
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {content.specials.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: 20,
                  borderRadius: 16,
                  background: colors.cream,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: colors.navy,
                    color: colors.white,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                  }}
                >
                  {iconMap[s.icon]}
                </div>

                <h4 style={{ marginBottom: 6 }}>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmbPracticeSection;