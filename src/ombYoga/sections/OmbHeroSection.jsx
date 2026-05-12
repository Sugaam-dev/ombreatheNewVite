import React, { useEffect, useState } from "react";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";

const OmbHeroSection = ({ data }) => {
  const [loaded, setLoaded] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  const { colors, hero, gains, certificates, content } = data;

  return (
    <section style={{ background: colors.cream }}>

      {/* ── HERO ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "clamp(500px, 90vh, 900px)", // ← gives the bg image a real height to fill
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* BACKGROUND IMAGE — fills entire container, no gap */}
        <img
          src={hero.bgImage}
          alt=""
          loading="lazy"
          decoding="async"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",       // ← must be 100% of parent, not "auto"
            objectFit: "cover",
            objectPosition: "center center",
            transform: loaded ? "scale(1)" : "scale(1.1)",
            transition: "transform 1.2s ease",
            display: "block",     // ← removes inline-block gap
          }}
        />

        {/* OVERLAY */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: colors.overlay,
          }}
        />

        {/* CONTENT — sits above image & overlay, padded so text never bleeds out */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: 900,
            margin: "0 auto",
            padding: "clamp(48px, 8vw, 100px) clamp(20px, 5vw, 60px)",
            textAlign: "center",
            color: colors.white,
            boxSizing: "border-box",
          }}
        >
          {/* LOCATION */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: colors.goldLight,
              fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
              marginBottom: "1rem",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            <MapPin size={14} /> {hero.location}
          </div>

          {/* TITLE */}
          <h1
            style={{
              fontSize: "clamp(2rem, 5.5vw, 4.8rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              margin: "0 0 1.2rem",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease 0.1s",
            }}
          >
            {hero.title}{" "}
            <em style={{ color: colors.goldLight }}>{hero.highlight}</em>
          </h1>

          {/* SUBTITLE */}
          <p
            style={{
              fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)",
              color: colors.textLight,
              margin: "0 0 1.8rem",
              lineHeight: 1.6,
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            {hero.subtitle}
          </p>

          {/* PRICE */}
          <div
            style={{
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              fontWeight: 600,
              lineHeight: 1.1,
              margin: "0 0 0.6rem",
            }}
          >
            {hero.price}
          </div>

          <p
            style={{
              opacity: 0.8,
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              margin: "0 0 2rem",
            }}
          >
            {hero.priceNote}
          </p>

          {/* CTA BUTTON */}
          <button
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.background = colors.goldLight;
              e.currentTarget.style.color = colors.navy;
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = colors.navy;
              e.currentTarget.style.color = colors.white;
              e.currentTarget.style.boxShadow = "none";
            }}
            style={{
              background: colors.navy,
              color: colors.white,
              border: "none",
              padding: "clamp(12px, 2vw, 16px) clamp(22px, 3vw, 32px)",
              borderRadius: 30,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontWeight: 600,
              fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
              transition: "all 0.35s ease",
            }}
          >
            {hero.buttonText} <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* ── SECOND SECTION ── */}
      <div
        style={{
          padding: "clamp(48px, 7vw, 100px) clamp(20px, 5vw, 40px)",
          maxWidth: 1200,
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {/* FEATURE IMAGE */}
        <div
          style={{
            borderRadius: 24,
            overflow: "hidden",
            marginBottom: 50,
            boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
            width: "100%",
            aspectRatio: "16/10",
          }}
        >
          <img
            src={hero.certificateImage}
            alt=""
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 40%",
              display: "block",
            }}
          />
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 40,
          }}
        >
          {/* LEFT — gains */}
          <div>
            <h2 style={{ marginTop: 0 }}>
              What You'll <em style={{ color: colors.goldLight }}>Gain</em>
            </h2>

            {gains.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  marginBottom: 12,
                  fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                  lineHeight: 1.5,
                }}
              >
                <CheckCircle
                  size={18}
                  color={colors.sage}
                  style={{ flexShrink: 0, marginTop: 2 }}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>

         {/* RIGHT — certificates */}
{certificates && certificates.length > 0 && (
  <div>
    <div
      style={{
        display: "flex",
        gap: 20,
        flexWrap: "wrap",
        alignItems: "flex-start",
      }}
    >
      {certificates.map((item, i) => (
        <div
          key={i}
          onMouseEnter={() => setHoverIndex(i)}
          onMouseLeave={() => setHoverIndex(null)}
          style={{ textAlign: "center", cursor: "default" }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              margin: "0 auto 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform:
                hoverIndex === i ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.4s ease",
            }}
          >
            <img
              src={item.img}
              alt={item.label}
              loading="lazy"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>

          <div
            style={{
              color: colors.navy,
              fontSize: "clamp(0.75rem, 1.2vw, 0.9rem)",
            }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>

    {content?.bottomText && (
      <p
        style={{
          marginTop: 20,
          fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
          lineHeight: 1.6,
        }}
      >
        {content.bottomText}
      </p>
    )}
  </div>
)}
        </div>
      </div>
    </section>
  );
};

export default OmbHeroSection;