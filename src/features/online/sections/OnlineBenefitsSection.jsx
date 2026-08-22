import { CheckCircle, Sun } from "lucide-react";

const Group = ({ title, items, colors }) => (
  <div
    style={{
      background: colors.white,
      borderRadius: 18,
      padding: "clamp(22px,4vw,32px)",
      boxShadow: colors.cardShadow,
    }}
  >
    <h3 style={{ color: colors.navy, marginBottom: 16, fontSize: "1.15rem" }}>
      {title}
    </h3>
    {items.map((item, i) => (
      <div
        key={i}
        style={{
          display: "flex",
          gap: 10,
          marginBottom: 10,
          fontSize: "0.92rem",
          color: "#444",
          lineHeight: 1.5,
        }}
      >
        <CheckCircle size={16} color={colors.sage} style={{ flexShrink: 0, marginTop: 2 }} />
        {item}
      </div>
    ))}
  </div>
);

const OnlineBenefitsSection = ({ data }) => {
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
        <div style={{ marginBottom: 50, textAlign: "center" }}>
          <div>{content.eyebrow}</div>
          <h2 style={{ color: colors.navy }}>
            {content.title} <em style={{ color: colors.sage }}>{content.highlight}</em>
          </h2>
          <p style={{ maxWidth: 650, margin: "0 auto", color: "#555" }}>
            {content.subtitle}
          </p>
        </div>

        {/* GROUPS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            marginBottom: 30,
          }}
        >
          <Group title={content.whyWpys.title} items={content.whyWpys.items} colors={colors} />
          <Group title={content.benefits.title} items={content.benefits.items} colors={colors} />
          <Group title={content.eligibility.title} items={content.eligibility.items} colors={colors} />
          <Group title={content.community.title} items={content.community.items} colors={colors} />
        </div>

        {/* FREE DAYS NOTE */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            background: colors.navy,
            color: colors.white,
            borderRadius: 16,
            padding: "20px 26px",
          }}
        >
          <Sun size={20} style={{ flexShrink: 0 }} />
          <p style={{ margin: 0, fontSize: "0.92rem", opacity: 0.9 }}>
            {content.freeDays}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OnlineBenefitsSection;