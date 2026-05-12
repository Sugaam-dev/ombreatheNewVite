import React, { useState } from "react";
import {
  Sun,
  Coffee,
  Moon,
  Leaf,
  Feather,
  Sparkles,
  Shield,
  Heart,
  Globe,
  CheckCircle,
} from "lucide-react";

const OmbFoodSection = ({ data }) => {
  const [activeTab, setActiveTab] = useState("breakfast");

  const { colors, content } = data;

  const iconMap = {
    sun: <Sun size={16} />,
    coffee: <Coffee size={16} />,
    moon: <Moon size={16} />,
    leaf: <Leaf size={18} />,
    feather: <Feather size={18} />,
    sparkles: <Sparkles size={18} />,
    shield: <Shield size={18} />,
    heart: <Heart size={18} />,
    globe: <Globe size={18} />,
  };

  const activeMeal = content.meals.find(
    (m) => m.key === activeTab
  );

  return (
    <section
      style={{
        background: colors.cream,
        padding: "clamp(40px,10vw,50px) 10px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* HEADER */}
        <div style={{ marginBottom: 60 }}>
          <div>{content.eyebrow}</div>

          <h2>
            {content.title} <em>{content.highlight}</em>
          </h2>

          <p style={{ maxWidth: 600 }}>
            {content.subtitle}
          </p>
        </div>

        {/* TABS */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
          {content.meals.map((m) => (
            <button
              key={m.key}
              onClick={() => setActiveTab(m.key)}
              style={{
                display: "flex",
                gap: 6,
                padding: "10px 18px",
                borderRadius: 30,
                border: "none",
                cursor: "pointer",
                background:
                  activeTab === m.key ? colors.navy : colors.white,
                color:
                  activeTab === m.key ? colors.white : colors.navy,
                boxShadow: colors.shadowSm,
              }}
            >
              {iconMap[m.icon]} {m.title}
            </button>
          ))}
        </div>

        {/* MAIN CARD */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: 30,
            background: colors.white,
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: colors.shadowMd,
            marginBottom: 60,
          }}
        >
          <div style={{ minHeight: 260 }}>
            <img
              src={activeMeal.img}
              alt={activeMeal.title}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <div style={{ padding: "clamp(20px,4vw,40px)" }}>
            <h3>{activeMeal.title}</h3>

            <p style={{ fontSize: "0.8rem", opacity: 0.6 }}>
              🕐 {activeMeal.time}
            </p>

            <p style={{ margin: "12px 0" }}>
              {activeMeal.desc}
            </p>

            {activeMeal.items.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 8 }}>
                <CheckCircle size={14} color={colors.sage} />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* DIETARY */}
        <h3>Dietary Options</h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))",
            gap: 16,
            marginBottom: 60,
          }}
        >
          {content.dietary.map((d, i) => (
            <div
              key={i}
              style={{
                background: colors.white,
                padding: 18,
                borderRadius: 16,
                textAlign: "center",
                boxShadow: colors.shadowSm,
              }}
            >
              {iconMap[d.icon]}
              <div>{d.label}</div>
            </div>
          ))}
        </div>

        {/* PHILOSOPHY */}
        <h3>Food Philosophy</h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: 20,
          }}
        >
          {content.philosophy.map((p, i) => (
            <div
              key={i}
              style={{
                background: colors.white,
                padding: 22,
                borderRadius: 18,
                boxShadow: colors.shadowSm,
              }}
            >
              {iconMap[p.icon]}
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OmbFoodSection;