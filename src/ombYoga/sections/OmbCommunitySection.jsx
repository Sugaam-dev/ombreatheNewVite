import React, { useEffect, useState } from "react";
import {
  Clock,
  Heart,
  Calendar,
  Award,
  Globe,
  Sparkles,
  Feather,
} from "lucide-react";

const OmbCommunitySection = ({ data }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const { colors, content } = data;

  const iconMap = {
    clock: <Clock size={20} />,
    heart: <Heart size={20} />,
    calendar: <Calendar size={20} />,
    award: <Award size={20} />,
    globe: <Globe size={20} />,
  };

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        color: colors.white,
      }}
    >
      {/* BACKGROUND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${content.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transform: visible ? "scale(1)" : "scale(1.1)",
          transition: "transform 1.2s ease",
        }}
      />

      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: colors.overlay,
          backdropFilter: "blur(2px)",
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(80px,10vw,120px) 20px",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 70,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <div style={{ color: colors.goldLight }}>
            <Sparkles size={14} /> {content.eyebrow}
          </div>

          <h2>
            {content.title}{" "}
            <em style={{ color: colors.goldLight }}>
              {content.highlight}
            </em>{" "}
            yoga community
          </h2>

          <p
            style={{
              maxWidth: 600,
              margin: "0 auto",
              color: colors.textLight,
              lineHeight: 1.7,
            }}
          >
            {content.subtitle}
          </p>
        </div>

        {/* STATS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 24,
            marginBottom: 70,
          }}
        >
          {content.stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: 26,
                borderRadius: 24,
                background: colors.glass,
                backdropFilter: "blur(14px)",
                border: `1px solid ${colors.border}`,
                textAlign: "center",
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "translateY(0)"
                  : "translateY(40px)",
                transition: `all 0.6s ease ${i * 0.15}s`,
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px) scale(1.03)";
                e.currentTarget.style.background =
                  colors.glassHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0) scale(1)";
                e.currentTarget.style.background =
                  colors.glass;
              }}
            >
              <div style={{ marginBottom: 10 }}>
                {iconMap[s.icon]}
              </div>

              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 600,
                  color: colors.goldLight,
                }}
              >
                {s.value}
              </div>

              <div style={{ fontSize: "0.8rem", opacity: 0.75 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div
          style={{
            textAlign: "center",
            maxWidth: 700,
            margin: "0 auto",
            opacity: visible ? 1 : 0,
            transition: "all 0.8s ease 0.6s",
          }}
        >
          <Feather size={14} />

          <p style={{ lineHeight: 1.8, opacity: 0.85 }}>
            {content.bottomText1}
          </p>

          <p style={{ opacity: 0.7 }}>
            {content.bottomText2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OmbCommunitySection;