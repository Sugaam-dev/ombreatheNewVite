import { useEffect, useState } from "react";
import {
  Award,
  Bed,
  Utensils,
  Heart,
  Compass,
  Sparkles,
  Feather,
} from "lucide-react";

const OnlinePromoSection = ({ data }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  if (!data || !data.colors || !data.content) return null;
  const { colors, content } = data;

  // ICON MAP
  const iconMap = {
    award: <Award size={18} />,
    bed: <Bed size={18} />,
    utensils: <Utensils size={18} />,
    heart: <Heart size={18} />,
    compass: <Compass size={18} />,
    sparkles: <Sparkles size={18} />,
    feather: <Feather size={18} />,
  };

  return (
    <section
      className="omb-promo-container"
      style={{
        background: "transparent",
        padding: "clamp(40px, 8vw, 90px) 16px", // Reduced excessive global padding for smaller mobile viewports
      }}
    >
      {/* Dynamic inline stylesheet to manage specific structural rules for layout breakpoints cleanly */}
      <style>{`
        .omb-promo-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: clamp(30px, 5vw, 60px);
          align-items: center;
        }
        @media (max-width: 868px) {
          .omb-promo-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .omb-small-images img {
            height: 120px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <div className="omb-promo-grid">
          {/* LEFT */}
          <div style={{ width: "100%" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center", fontSize: "0.95rem", marginBottom: 12 }}>
              <Sparkles size={14} /> {content.eyebrow}
            </div>

            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.25, marginBottom: 24, fontWeight: 500 }}>
              {content.title}{" "}
              <em>{content.highlight}</em> {content.duration} journey in{" "}
              <strong>{content.strongText}</strong>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {content.features.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 14,
                    padding: 14,
                    borderRadius: 16,
                    background: colors.white,
                    boxShadow: colors.shadowSm,
                    opacity: visible ? 1 : 0,
                    transform: visible
                      ? "translateX(0)"
                      : "translateX(-20px)",
                    transition: "all 0.4s ease",
                    transitionDelay: `${i * 0.1}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(6px)";
                    e.currentTarget.style.boxShadow = colors.shadowMd;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = colors.shadowSm;
                  }}
                >
                  {/* ICON */}
                  <div
                    style={{
                      minWidth: 42,
                      height: 42,
                      borderRadius: 12,
                      background: colors.navy,
                      color: colors.white,
                      display: "flex",
                      alignItems: "center",
                    justifyContent:"center"
                    }}
                  >
                    {iconMap[f.icon]}
                  </div>

                  {/* TEXT */}
                  <div>
                    <p style={{ fontWeight: 600, fontSize: "1.05rem", marginBottom: 2 }}>{f.title}</p>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: colors.violet,
                        lineHeight: 1.4,
                      }}
                    >
                      {f.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%" }}>

            {/* MAIN IMAGE */}
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                height: "clamp(220px, 30vw, 360px)",
                position: "relative",
                width: "100%",
              }}
            >
              <img
                src={content.images.main}
                alt="Yoga"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: colors.overlay,
                }}
              />
            </div>

            {/* SMALL IMAGES */}
            <div
              className="omb-small-images"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
                width: "100%",
              }}
            >
              <img
                src={content.images.food}
                alt="Food"
                loading="lazy"
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  borderRadius: 16,
                }}
              />

              <img
                src={content.images.stay}
                alt="Stay"
                loading="lazy"
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  borderRadius: 16,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlinePromoSection;