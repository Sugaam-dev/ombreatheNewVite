import { useEffect, useState } from "react";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const OmbHeroSection = ({ data, onBookClick }) => {
  const [loaded, setLoaded] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  if (!data || !data.colors || !data.hero) return null;
  const { colors, hero, gains = [], certificates = [], content = {} } = data;

  return (
    <section style={{ backgroundColor: colors.cream }}>
      {/* ── HERO BG IMAGE ── */}
      <div className="hero-bg-container">
        <img
          src={hero.bgImage}
          alt=""
          loading="lazy"
          className="hero-image-bg"
          style={{
            transform: loaded ? "scale(1)" : "scale(1.1)",
            transition: "transform 1.2s ease-in-out"
          }}
        />

        {/* Overlay */}
        <div 
          className="hero-overlay-shade" 
          style={{ background: colors.overlay || "linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.85))" }} 
        />

        {/* Content */}
        <div className="hero-content-wrap">
          {/* Location */}
          <div 
            className="hero-location-tag"
            style={{ color: colors.goldLight }}
          >
            <MapPin size={14} />
            {hero.location}
          </div>

          {/* Title */}
          <h1 className="hero-main-title">
            <em style={{ color: colors.goldLight }}>{hero.highlight}</em>
            <span>{hero.title}</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="hero-subtitle-p"
            style={{ color: colors.textLight || "rgba(255,255,255,0.85)" }}
          >
            {hero.subtitle}
          </p>

          {/* Price */}
          {hero.price && (
            <div className="hero-price-tag" style={{ color: "#ffffff", fontSize: "1.75rem", fontWeight: 600, marginBottom: "28px" }}>
              <span style={{ fontSize: "0.95rem", fontWeight: 400, opacity: 0.85, marginRight: "6px" }}>Starting from</span>
              {hero.price}
            </div>
          )}

          {/* CTA */}
          {onBookClick ? (
            <button
              onClick={onBookClick}
              className="hero-cta-btn"
              style={{ background: "linear-gradient(135deg, #16a34a, #15803d, #14532d)", border: 0, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "6px" }}
            >
              {hero.buttonText || "Book Now"} <ArrowRight size={18} />
            </button>
          ) : (
            <Link
              to={hero.url || "/contact"}
              className="hero-cta-btn"
              style={{ background: "linear-gradient(135deg, #16a34a, #15803d, #14532d)" }}
            >
              {hero.buttonText || "Book Now"} <ArrowRight size={18} />
            </Link>
          )}
        </div>
      </div>

      {/* ── INFO SECTION BELOW HERO ── */}
      <div className="hero-below-grid">
        {/* Gains */}
        <div>
          <h2 className="hero-gains-title" style={{ color: colors.navy }}>
            What You'll <em style={{ color: colors.goldLight }}>Gain</em>
          </h2>
          <div>
            {gains.map((item, i) => (
              <div key={i} className="hero-gains-item">
                <CheckCircle size={18} style={{ color: colors.sage }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <h2 className="hero-certs-title" style={{ color: colors.navy }}>
            Course <em style={{ color: colors.goldLight }}>Certification</em>
          </h2>
          <div className="hero-certs-list">
            {certificates.map((item, i) => (
              <div
                key={i}
                className="hero-cert-badge"
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div className="hero-cert-img-box" style={{ transform: hoverIndex === i ? "scale(1.1)" : "scale(1)" }}>
                  <img
                    src={item.img}
                    alt={item.label}
                    loading="lazy"
                  />
                </div>
                <div className="hero-cert-label" style={{ color: colors.navy }}>{item.label}</div>
              </div>
            ))}
          </div>
          {content.bottomText && (
            <p style={{ color: "#57534e", fontSize: "14px", lineHeight: "1.6", marginTop: "24px" }}>
              {content.bottomText}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default OmbHeroSection;