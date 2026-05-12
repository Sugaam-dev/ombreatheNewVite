import React, { useState } from "react";
import {
  Waves,
  Heart,
  Leaf,
  Wifi,
  Utensils,
  Feather,
  Trees,
  Music,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const OmbAccommodationSection = ({ data }) => {
  const [activeRoom, setActiveRoom] = useState(0);

  const { colors, content } = data;

  const iconMap = {
    waves: <Waves size={18} />,
    heart: <Heart size={18} />,
    leaf: <Leaf size={18} />,
    wifi: <Wifi size={18} />,
    utensils: <Utensils size={18} />,
    feather: <Feather size={18} />,
    trees: <Trees size={18} />,
    music: <Music size={18} />,
  };

  const room = content.rooms[activeRoom];

  return (
    <section
      style={{
        background: colors.navy,
        padding: "clamp(80px,10vw,130px) 20px",
        color: colors.white,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* HEADER */}
        <div style={{ marginBottom: 50 }}>
          <h2>
            {content.title} <em>{content.highlight}</em>
          </h2>
          <p style={{ opacity: 0.7, maxWidth: 600 }}>
            {content.subtitle}
          </p>
        </div>

        {/* TABS */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
          {content.rooms.map((r, i) => (
            <button
              key={i}
              onClick={() => setActiveRoom(i)}
              style={{
                padding: "10px 18px",
                borderRadius: 30,
                border: `1px solid ${colors.border}`,
                background:
                  activeRoom === i ? colors.white : "transparent",
                color:
                  activeRoom === i ? colors.navy : colors.white,
                cursor: "pointer",
              }}
            >
              {r.type}
            </button>
          ))}
        </div>

        {/* MAIN GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: 30,
          }}
        >
          {/* IMAGE */}
          <div
            style={{
              borderRadius: 24,
              overflow: "hidden",
              minHeight: "420px",
              boxShadow: colors.shadowLg,
            }}
          >
            <img
              src={room.img}
              alt={room.type}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* CONTENT */}
          <div
            style={{
              background: colors.white,
              borderRadius: 24,
              padding: "clamp(24px,4vw,40px)",
              color: colors.navy,
              boxShadow: colors.shadowMd,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span
                style={{
                  background: room.tagBg,
                  color: colors.white,
                  padding: "4px 14px",
                  borderRadius: 20,
                  fontSize: "0.75rem",
                }}
              >
                {room.tag}
              </span>

              <h2 style={{ margin: "12px 0" }}>{room.type}</h2>

              <p style={{ opacity: 0.7 }}>{room.desc}</p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                  marginTop: 20,
                }}
              >
                {room.features.map((f, i) => (
                  <div key={i} style={{ display: "flex", gap: 6 }}>
                    <CheckCircle size={14} color={colors.sage} />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ marginTop: 30 }}>
              <div style={{ fontSize: "1.2rem", fontWeight: 600 }}>
                {room.price}
              </div>

             <button
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
  }}
  onMouseDown={(e) => {
    e.currentTarget.style.transform = "scale(0.96)";
  }}
  onMouseUp={(e) => {
    e.currentTarget.style.transform = "translateY(-2px)";
  }}
  style={{
    marginTop: 16,
    padding: "12px 22px",
    borderRadius: 30,
    border: "none",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,

    // 🎨 COLORS (FROM DATA)
    background: colors.navy,
    color: colors.white,

    fontWeight: 500,
    fontSize: "0.9rem",

    // ✨ EFFECTS
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "all 0.25s ease",
  }}
>
  {content.buttonText} <ArrowRight size={16} />
</button>
            </div>
          </div>
        </div>

        {/* AMENITIES */}
        <div style={{ marginTop: 60 }}>
          <h3>Amenities</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))",
              gap: 16,
              marginTop: 20,
            }}
          >
            {content.amenities.map((a, i) => (
              <div
                key={i}
                style={{
                  background: colors.cardBg,
                  padding: 16,
                  borderRadius: 12,
                  textAlign: "center",
                }}
              >
                {iconMap[a.icon]}
                <div style={{ fontSize: "0.8rem" }}>{a.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OmbAccommodationSection;