import React, { useEffect, useState } from "react";
import { getIcon } from "./icons";
import MobileCarousel from "./MobileCarousel";

const OmbPracticeSection = ({ data, colors }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  if (!data || !data.content) return null;
  const { eyebrow, title, highlight, subtitle, practices = [], specialTitle, specialHighlight, specials = [] } = data.content;

  const activeBg = colors?.activeBg || "rgba(0,0,0,0.04)";

  return (
    <section className="practice-outer" style={{ backgroundColor: "#ffffff" }}>
      <div className="practice-container">

        {/* Header */}
        <div className="practice-header">
          <p style={{ color: colors?.goldLight }}>{eyebrow}</p>
          <h2 style={{ color: colors?.navy }}>
            {title} <em style={{ color: colors?.goldLight }}>{highlight}</em>
          </h2>
          <p className="practice-header-subtitle">
            {subtitle}
          </p>
        </div>

        {/* Practice cards - Grid on desktop, Carousel on mobile */}
        <div className="practice-cards-wrapper">
          <MobileCarousel
            items={practices}
            gridClass="m-carousel-desktop grid-cols-3"
            renderItem={(p, i) => (
              <div
                key={i}
                className="practice-card-box"
                style={{ 
                  opacity: visible ? 1 : 0, 
                  transform: visible ? "translateY(0)" : "translateY(32px)",
                  transitionDelay: `${i * 0.15}s` 
                }}
              >
                <div>
                  {/* Image */}
                  <div className="practice-card-imgwrap">
                    <img src={p.img} alt={p.label} loading="lazy" />
                    <div className="card-shade" />
                  </div>
                  {/* Content */}
                  <div className="practice-card-body">
                    <div 
                      className="practice-iconbox"
                      style={{ background: colors?.navy || "#1A2456" }}
                    >
                      {getIcon(p.icon, 20)}
                    </div>
                    <h3 style={{ color: colors?.navy }}>{p.label}</h3>
                    <p>{p.desc}</p>
                  </div>
                </div>
              </div>
            )}
          />
        </div>

        {/* Special features - Grid on desktop, Carousel on mobile */}
        <div className="practice-special-box">
          <h3 className="practice-special-title" style={{ color: colors?.navy }}>
            {specialTitle} <em style={{ color: colors?.goldLight }}>{specialHighlight}</em>
          </h3>
          <MobileCarousel
            items={specials}
            gridClass="m-carousel-desktop grid-cols-3"
            renderItem={(s, i) => (
              <div
                key={i}
                className="special-feature-card"
                style={{ backgroundColor: colors?.cream || "#F7F3EF" }}
              >
                <div>
                  <div 
                    className="special-feature-iconbox"
                    style={{ background: colors?.navy || "#1A2456" }}
                  >
                    {getIcon(s.icon, 18)}
                  </div>
                  <h4 style={{ color: colors?.navy }}>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            )}
          />
        </div>

      </div>
    </section>
  );
};

export default OmbPracticeSection;