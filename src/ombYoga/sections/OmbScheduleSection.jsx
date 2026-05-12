import React from "react";
import {
  Moon,
  Sun,
  Wind,
  Coffee,
  Brain,
  Users,
  Utensils,
  BookOpen,
  Feather,
  Leaf,
  Sunrise,
} from "lucide-react";

const OmbScheduleSection = ({ data }) => {
  const { colors, content } = data;

  const iconMap = {
    moon: <Moon size={15} />,
    sun: <Sun size={15} />,
    wind: <Wind size={15} />,
    coffee: <Coffee size={15} />,
    brain: <Brain size={15} />,
    users: <Users size={15} />,
    utensils: <Utensils size={15} />,
    book: <BookOpen size={15} />,
    feather: <Feather size={15} />,
    leaf: <Leaf size={15} />,
  };

  const Row = ({ item }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "12px 0",
        borderBottom: `1px solid ${colors.creamDark}`,
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: colors.cream,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: colors.navy,
        }}
      >
        {iconMap[item.icon]}
      </div>

      <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>
        {item.time}
      </span>

      <span>{item.activity}</span>
    </div>
  );

  return (
    <section
      style={{
        background: colors.cream,
        padding: "clamp(70px,9vw,110px) 20px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* HEADER */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 40,
            marginBottom: 60,
          }}
        >
          <div>
            <div>{content.eyebrow}</div>

            <h2>
              {content.title} <em>{content.highlight}</em>
            </h2>

            <p>{content.subtitle}</p>
          </div>

          {/* IMAGE */}
          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
              height: 250,
              boxShadow: colors.shadowLg,
            }}
          >
            <img
              src={content.image}
              alt="Schedule"
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* SCHEDULE */}
        <div
          style={{
            background: colors.white,
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: colors.shadowSm,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          }}
        >
          {/* Morning */}
          <div style={{ padding: 24 }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              <Sunrise size={20} />
              <h3>{content.sections.morningTitle}</h3>
            </div>

            {content.morning.map((item, i) => (
              <Row key={i} item={item} />
            ))}
          </div>

          {/* Afternoon */}
          <div style={{ padding: 24 }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              <Moon size={20} />
              <h3>{content.sections.afternoonTitle}</h3>
            </div>

            {content.afternoon.map((item, i) => (
              <Row key={i} item={item} />
            ))}
          </div>
        </div>

        {/* NOTE */}
        <div
          style={{
            marginTop: 24,
            padding: 20,
            background: colors.noteBg,
            borderLeft: `4px solid ${colors.violet}`,
            borderRadius: 12,
          }}
        >
          <p style={{ fontSize: "0.85rem" }}>
            {content.sections.note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OmbScheduleSection;