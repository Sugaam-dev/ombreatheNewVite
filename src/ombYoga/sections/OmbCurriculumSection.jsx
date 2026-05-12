import React from "react";
import {
  Dumbbell,
  Wind,
  BookOpen,
  Users,
  Heart,
  Brain,
  Sparkles,
  Leaf,
  Award,
  ChevronRight,
  CheckCircle,
  Sun,
  AlignEndHorizontal,
  BrainCircuit,
  BellRing,
} from "lucide-react";

const OmbCurriculumSection = ({ data }) => {
  const { colors, content } = data;

  const iconMap = {
    dumbbell: <Dumbbell size={22} />,
    wind: <Wind size={22} />,
    book: <BookOpen size={22} />,
    users: <Users size={22} />,
    heart: <Heart size={22} />,
    brain: <Brain size={22} />,
    sparkles: <Sparkles size={22} />,
    leaf: <Leaf size={22} />,
    sun: <Sun size={22} />,
    align:<AlignEndHorizontal size={22}/>,
    brainCircuit: <BrainCircuit size={22} />,
    bellRing: <BellRing size={22} />,

  };

  return (
    <section
      style={{
        background: "transparent",
        padding: "clamp(50px,12vw,50px) 10px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 90 }}>
          <div>{content.eyebrow}</div>

          <h2>
            {content.title} <em>{content.highlight}</em>
          </h2>

          <p style={{ maxWidth: 700, margin: "0 auto" }}>
            {content.subtitle}
          </p>
        </div>

        {/* COURSES */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 26,
            marginBottom: 100,
          }}
        >
          {content.courses.map((c, i) => (
            <div
              key={i}
              style={{
                padding: 26,
                borderRadius: 20,
                boxShadow: colors.shadowSm,
                transition: "all 0.3s ease",
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
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: colors.gradientCard,
                  color: colors.white,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                {iconMap[c.icon]}
              </div>

              <h4 style={{ marginBottom: 12 }}>{c.title}</h4>

              {c.items.map((item, j) => (
                <div
                  key={j}
                  style={{
                    display: "flex",
                    gap: 8,
                    fontSize: "0.85rem",
                    marginBottom: 6,
                  }}
                >
                  <CheckCircle size={14} color={colors.sage} />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* JOURNEY */}
        <div style={{ marginBottom: 100 }}>
          <h3 style={{ textAlign: "center", marginBottom: 40 }}>
            Training <em>Journey</em>
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 30,
            }}
          >
            {content.phases.map((p, i) => (
              <div
                key={i}
                style={{
                  padding: 28,
                  borderRadius: 20,
                  background: colors.cream,
                  borderTop: `4px solid ${p.color}`,
                  textAlign: "center",
                }}
              >
                <small style={{ color: p.color }}>{p.days}</small>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            background: colors.gradientCTA,
            borderRadius: 24,
            padding: "60px 30px",
            textAlign: "center",
            color: colors.white,
          }}
        >
          <Award size={36} style={{ marginBottom: 16 }} />

          <h3>{content.cta.title}</h3>

          <p style={{ opacity: 0.8 }}>{content.cta.desc}</p>

          <button
            style={{
              marginTop: 20,
              padding: "10px 20px",
              borderRadius: 20,
              border: "none",
              cursor: "pointer",
            }}
          >
            {content.cta.buttonText} <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OmbCurriculumSection;