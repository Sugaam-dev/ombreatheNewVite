import React, { useState } from "react";
import {
  Globe,
  Leaf,
  Sparkles,
  Trees,
  Mountain,
  MapPin,
  Sun,
} from "lucide-react";

const OmbLocationSection = ({ data }) => {
  const [activeSpot, setActiveSpot] = useState(0);

  const { colors, content } = data;

  const iconMap = {
    globe: <Globe size={18} />,
    leaf: <Leaf size={18} />,
    sparkles: <Sparkles size={18} />,
    trees: <Trees size={18} />,
    mountain: <Mountain size={18} />,
    map: <MapPin size={14} />,
    sun: <Sun size={14} />,
  };

  return (
    <section
      style={{
        background: colors.cream,
        padding: "clamp(70px,9vw,110px) 20px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 40,
          }}
        >
          {/* LEFT */}
          <div>
            <div>{content.eyebrow}</div>

            <h2>
              {content.title} <em>{content.highlight}</em>
            </h2>

            <p>{content.subtitle}</p>

            {/* SPOTS */}
            <div style={{ marginTop: 20 }}>
              {content.spots.map((s, i) => (
                <div
                  key={i}
                  onClick={() => setActiveSpot(i)}
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: 14,
                    borderRadius: 12,
                    cursor: "pointer",
                    background:
                      activeSpot === i
                        ? colors.activeBg
                        : colors.white,
                    border:
                      activeSpot === i
                        ? `1px solid ${colors.violet}`
                        : `1px solid transparent`,
                    marginBottom: 10,
                  }}
                >
                  <div>{iconMap[s.icon]}</div>

                  <div>
                    <strong>{s.name}</strong>
                    <div style={{ fontSize: "0.75rem", color: colors.violet }}>
                      {s.distance}
                    </div>

                    {activeSpot === i && (
                      <p style={{ fontSize: "0.8rem" }}>
                        {s.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* ADDRESS */}
            <div
              style={{
                marginTop: 20,
                padding: 20,
                background: colors.navy,
                color: colors.white,
                borderRadius: 12,
              }}
            >
              <MapPin size={18} />
              <p style={{ fontSize: "0.85rem", marginTop: 6 }}>
                {content.address}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            {/* MAP */}
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                marginBottom: 20,
              }}
            >
              <iframe
                title="map"
                src={content.mapEmbed}
                style={{
                  width: "100%",
                  height: 300,
                  border: 0,
                }}
              />
            </div>

            {/* STATS */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: 10,
              }}
            >
              {content.stats.map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: 12,
                    textAlign: "center",
                    background: colors.white,
                    borderRadius: 12,
                  }}
                >
                  {iconMap[s.icon]}
                  <div style={{ fontWeight: 600 }}>{s.value}</div>
                  <small>{s.label}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmbLocationSection;