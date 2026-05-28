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
      className="omb-location-section"
      style={{
        background: colors.cream,
        padding: "clamp(50px, 7vw, 110px) 20px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="omb-main-grid">
          
          {/* LEFT COLUMN */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div className="omb-eyebrow" style={{ color: colors.violet, fontWeight: 600, letterSpacing: "0.5px" }}>
              {content.eyebrow}
            </div>

            <h2 className="omb-title" style={{ margin: 0, color: colors.navy }}>
              {content.title} <em style={{ color: colors.violet, fontStyle: "normal" }}>{content.highlight}</em>
            </h2>

            <p className="omb-subtitle" style={{ margin: 0, color: "#555", lineHeight: 1.5 }}>
              {content.subtitle}
            </p>

            {/* SPOTS */}
            <div style={{ marginTop: 10 }}>
              {content.spots.map((s, i) => (
                <div
                  key={i}
                  onClick={() => setActiveSpot(i)}
                  className="omb-spot-card"
                  style={{
                    display: "flex",
                    gap: 14,
                    padding: 16,
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
                    marginBottom: 12,
                    transition: "all 0.2s ease",
                  }}
                >
                  <div style={{ color: activeSpot === i ? colors.violet : "#666", marginTop: "2px" }}>
                    {iconMap[s.icon]}
                  </div>

                  <div style={{ flex: 1 }}>
                    <strong style={{ color: colors.navy, display: "block" }}>{s.name}</strong>
                    <div style={{ fontSize: "0.8rem", color: colors.violet, fontWeight: 500, margin: "2px 0 4px 0" }}>
                      {s.distance}
                    </div>

                    {activeSpot === i && (
                      <p className="omb-spot-desc" style={{ fontSize: "0.85rem", margin: "6px 0 0 0", color: "#444", lineHeight: 1.4 }}>
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
                marginTop: 8,
                padding: 20,
                background: colors.navy,
                color: colors.white,
                borderRadius: 12,
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
              }}
            >
              <MapPin size={20} style={{ flexShrink: 0, marginTop: "2px" }} />
              <p style={{ fontSize: "0.9rem", margin: 0, lineHeight: 1.4, color: colors.white }}>
                {content.address}
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* MAP wrapper */}
            <div
              className="omb-map-container"
              style={{
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.04)",
                background: "#eee"
              }}
            >
              <iframe
                title="map"
                src={content.mapEmbed}
                style={{
                  width: "100%",
                  border: 0,
                  display: "block",
                }}
              />
            </div>

            {/* STATS */}
            <div className="omb-stats-grid">
              {content.stats.map((s, i) => (
                <div
                  key={i}
                  className="omb-stat-card"
                  style={{
                    padding: "16px 10px",
                    textAlign: "center",
                    background: colors.white,
                    borderRadius: 12,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
                  }}
                >
                  <div style={{ color: colors.violet, marginBottom: "2px" }}>
                    {iconMap[s.icon]}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: "1.1rem", color: colors.navy }}>
                    {s.value}
                  </div>
                  <small style={{ fontSize: "0.75rem", color: "#666", display: "block", lineHeight: 1.2 }}>
                    {s.label}
                  </small>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Global CSS Injector to deal with structural changes seamlessly across viewport ranges */}
      <style>{`
        /* Base Structural Main Breakpoint Shifts */
        .omb-main-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }

        @media (min-width: 992px) {
          .omb-main-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 50px;
          }
        }

        /* Typography Fluid Responsiveness Layout rules */
        .omb-title {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 700;
          line-height: 1.2;
        }
        .omb-subtitle {
          font-size: clamp(0.95rem, 1.5vw, 1.05rem);
        }
        .omb-eyebrow {
          font-size: clamp(0.8rem, 1.2vw, 0.9rem);
          text-transform: uppercase;
        }

        /* Map Iframe Dynamic Heights scaling */
        .omb-map-container iframe {
          height: 280px;
        }
        @media (min-width: 576px) {
          .omb-map-container iframe { height: 350px; }
        }
        @media (min-width: 992px) {
          .omb-map-container iframe { height: 400px; }
        }

        /* Stats Responsive Reflow Optimization rules (Prevents text smash on mobiles) */
        .omb-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        @media (min-width: 400px) {
          .omb-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
        @media (min-width: 576px) {
          .omb-stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        @media (min-width: 992px) and (max-width: 1200px) {
          /* Fallback drop back into a cleaner structural 2x2 grid when space gets limited on small laptops */
          .omb-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Hover animation feedback loop states */
        .omb-spot-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }
      `}</style>
    </section>
  );
};

export default OmbLocationSection;