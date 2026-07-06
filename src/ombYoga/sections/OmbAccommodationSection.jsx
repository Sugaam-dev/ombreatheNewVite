import React, { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";

const OmbAccommodationSection = ({ data }) => {
  const [activeRoom, setActiveRoom] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!data || !data.colors || !data.content) return null;
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
        padding: "clamp(50px,8vw,100px) 16px",
        color: colors.white,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* HEADER */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(1.5rem,4vw,2.2rem)" }}>
            {content.title} <em>{content.highlight}</em>
          </h2>
          <p style={{ opacity: 0.7, maxWidth: 600 }}>
            {content.subtitle}
          </p>
        </div>

        {/* TABS */}
        <div
          style={{
            display: "flex",
            gap: 10,
            overflowX: "auto",
            whiteSpace: "nowrap",
            paddingBottom: 6,
            marginBottom: 30,
          }}
        >
          {content.rooms.map((r, i) => (
            <button
              key={i}
              onClick={() => setActiveRoom(i)}
              style={{
                flex: "0 0 auto",
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
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fit,minmax(260px,1fr))",
            gap: 24,
          }}
        >
          {/* IMAGE */}
          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
              minHeight: "250px",
              height: "clamp(250px,40vw,420px)",
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
              borderRadius: 20,
              padding: "clamp(20px,4vw,36px)",
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
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(140px,1fr))",
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
            <div style={{ marginTop: 24 }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                {room.price}
              </div>

              <Link
                to={content.url}
                style={{
                  marginTop: 14,
                  padding: "12px 20px",
                  borderRadius: 30,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: colors.navy,
                  color: colors.white,
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "all 0.25s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform =
                      "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(0,0,0,0.2)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.1)";
                }}
              >
                {content.buttonText} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* AMENITIES */}
        <div style={{ marginTop: 50 }}>
          <h3 style={{ fontSize: "clamp(1.2rem,3vw,1.6rem)" }}>
            Amenities
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(110px,1fr))",
              gap: 14,
              marginTop: 16,
            }}
          >
            {content.amenities.map((a, i) => (
              <div
                key={i}
                style={{
                  background: colors.cardBg,
                  padding: 14,
                  borderRadius: 12,
                  textAlign: "center",
                }}
              >
                {iconMap[a.icon]}
                <div style={{ fontSize: "0.8rem", marginTop: 6 }}>
                  {a.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OmbAccommodationSection;