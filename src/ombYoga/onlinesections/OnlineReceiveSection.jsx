import React from "react";
import {
  Award,
  BarChart3,
  PlayCircle,
  CalendarClock,
  BookOpen,
  Percent,
  Layers,
} from "lucide-react";

const OnlineReceiveSection = ({ data }) => {
  const { colors, content } = data;

  const iconMap = {
    award: <Award size={22} />,
    level: <BarChart3 size={22} />,
    play: <PlayCircle size={22} />,
    calendar: <CalendarClock size={22} />,
    book: <BookOpen size={22} />,
    percent: <Percent size={22} />,
    layers: <Layers size={22} />,
  };

  return (
    <section
      style={{
        background: colors.cream,
        padding: "clamp(50px,9vw,90px) 10px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ color: colors.navy }}>
            {content.title} <em style={{ color: colors.sage }}>{content.highlight}</em>
          </h2>
          <p style={{ maxWidth: 650, margin: "0 auto", color: "#555" }}>
            {content.subtitle}
          </p>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {content.items.map((item, i) => (
            <div
              key={i}
              style={{
                background: colors.white,
                borderRadius: 18,
                padding: 26,
                boxShadow: colors.shadowSm,
                transition: "all 0.3s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = colors.shadowLg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = colors.shadowSm;
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 18,
                  right: 22,
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: colors.sage,
                  opacity: 0.5,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: colors.gradientCard,
                  color: colors.white,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                {iconMap[item.icon]}
              </div>

              <h4 style={{ color: colors.navy, marginBottom: 8 }}>{item.title}</h4>
              <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineReceiveSection;