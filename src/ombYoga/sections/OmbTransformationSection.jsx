import React from "react";
import { Sparkles } from "lucide-react";

const OmbTransformationSection = ({ data }) => {
  const { colors, content } = data;

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        color: colors.white,
      }}
    >
      {/* Background */}
      <img
        src={content.bgImage}
        alt="Yoga Meditation"
        loading="lazy"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: colors.overlay,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          maxWidth: 900,
          margin: "0 auto",
          padding: "clamp(80px,10vw,130px) 20px",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            background: colors.glass,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            backdropFilter: "blur(10px)",
          }}
        >
          <Sparkles size={30} color={colors.gold} />
        </div>

        {/* Quote */}
        <blockquote
          style={{
            fontSize: "clamp(1.8rem,4vw,3.2rem)",
            fontWeight: 300,
            lineHeight: 1.35,
            marginBottom: "2rem",
          }}
        >
          {content.quoteStart}{" "}
          <em style={{ color: colors.goldLight }}>
            {content.highlight}
          </em>{" "}
          {content.quoteEnd}
        </blockquote>

        {/* Description */}
        <p
          style={{
            fontSize: "clamp(0.95rem,1.8vw,1.1rem)",
            opacity: 0.85,
            lineHeight: 1.8,
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          {content.description}
        </p>
      </div>
    </section>
  );
};

export default OmbTransformationSection;