import React from "react";


const OnlineGallerySection = ({ data }) => {
  const { colors, content } = data;

  return (
    <section
      style={{
        background: colors.cream,
        padding: "clamp(50px,9vw,90px) 10px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ color: colors.navy }}>
            {content.title} <em style={{ color: colors.sage }}>{content.highlight}</em>
          </h2>
          <p style={{ maxWidth: 600, margin: "0 auto", color: "#555" }}>
            {content.subtitle}
          </p>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: 14,
            marginBottom: 40,
          }}
        >
          {content.images.map((img, i) => (
            <div
              key={i}
              style={{
                borderRadius: 14,
                overflow: "hidden",
                aspectRatio: "1/1",
                boxShadow: colors.shadowSm,
              }}
            >
              <img
                src={img}
                alt={`Ombreathe student moment ${i + 1}`}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.4s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineGallerySection;