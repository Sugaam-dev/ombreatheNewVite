// ProgramsCarousel.jsx

import React, { useRef, useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";

import {
  LOCATION_DATA,
  PROGRAM_CATEGORIES,
} from "./LocationData";

import SectionHeading from "../../../Components/useFullComponent/SectionHeading";

// ==========================================
// DERIVED DATA
// ==========================================

const TOTAL_PROGRAMS = PROGRAM_CATEGORIES.reduce(
  (sum, cat) => sum + cat.programs.length,
  0
);

const LOCATION_ENTRIES = Object.entries(LOCATION_DATA).map(
  ([name, data]) => ({
    name,
    tagline: data.tagline,
    description: data.description,
    programs: TOTAL_PROGRAMS,
    image: data.heroImage,
    accent: data.accentColor,
    path: `/programs/${name}`,
  })
);

// Triplicate list elements for smooth, infinite looping boundary checks
const INFINITE_LOCATIONS = [...LOCATION_ENTRIES, ...LOCATION_ENTRIES, ...LOCATION_ENTRIES];

const PROGRAMS = PROGRAM_CATEGORIES.map((cat) => ({
  label: cat.label,
  icon: cat.icon,
}));

// ==========================================
// CARD
// ==========================================

const LocationCard = memo(({ loc, onClick }) => (
  <div className="pc-slide">
    <div
      className="pc-card"
      onClick={() => onClick(loc.path)}
    >
      {/* IMAGE */}
      <div className="pc-card__img-wrap">
        <img
          src={loc.image}
          alt={loc.name}
          className="pc-card__img"
          loading="lazy"
          decoding="async"
          width="500"
          height="300"
        />
        <div
          className="pc-card__img-overlay"
          style={{ "--accent": loc.accent }}
        />
      </div>

      {/* BODY */}
      <div className="pc-card__body">
        <span className="pc-card__tagline">
          {loc.tagline}
        </span>

        <h3 className="pc-card__name">
          {loc.name}
        </h3>

        <p className="pc-card__desc">
          {loc.description}
        </p>

        {/* PILLS */}
        <div className="pc-card__pills">
          {PROGRAMS.map((p) => (
            <span key={p.label} className="pc-card__pill">
              {p.icon} {p.label}
            </span>
          ))}
        </div>

        {/* FOOTER */}
        <div className="pc-card__footer">
          <span className="pc-card__count">
            {loc.programs} Programs
          </span>
          <button
            className="pc-card__cta"
            style={{ "--accent": loc.accent }}
          >
            Explore →
          </button>
        </div>
      </div>
    </div>
  </div>
));

// ==========================================
// MAIN COMPONENT
// ==========================================

const ProgramsCarousel = () => {
  const navigate = useNavigate();
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Pure React native auto-scroller ticker hook
  useEffect(() => {
    const scrollContainer = trackRef.current;
    if (!scrollContainer) return;

    let tickerFrameId;
    
    const tickMover = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += 1; // Slide step interval translation speed

        // Infinite snap-reset mechanism at the 2/3 data boundary
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 3) * 2) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
        }
      }
      tickerFrameId = requestAnimationFrame(tickMover);
    };

    tickerFrameId = requestAnimationFrame(tickMover);
    return () => cancelAnimationFrame(tickerFrameId);
  }, [isPaused]);

  return (
    <section className="pc-section">
      <SectionHeading
        title="Where Would You Like To"
        highlight="Train?"
        subtitle="Choose from sacred destinations across Asia. Every location offers the full curriculum — from 50-hour foundations to 500-hour master programs."
        highlightColor="#4a7c68"
        textColor="#1e1e1c"
      />

      <div 
        className="pc-outer"
        ref={trackRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="pc-custom-track">
          {INFINITE_LOCATIONS.map((loc, idx) => (
            <LocationCard
              key={`${loc.name}-${idx}`}
              loc={loc}
              onClick={(path) => navigate(path)}
            />
          ))}
        </div>
      </div>

      <style>{`
/* ==========================================
   SECTION
========================================== */

.pc-section {
  width: 100%;
  padding: clamp(36px, 4vw, 90px) 0;
  overflow: hidden;
  font-family: 'Caudex', serif;
  box-sizing: border-box;
}

/* ==========================================
   LAYOUT RAILS (Custom Scroll Fixes)
========================================== */

.pc-outer {
  width: 100%;
  padding-inline: clamp(10px, 1.8vw, 40px);
  box-sizing: border-box;
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}

.pc-outer::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

.pc-custom-track {
  display: flex;
  width: max-content;
  padding: 16px 4px;
}

/* ==========================================
   SLIDE (Consistent width boundaries)
========================================== */

.pc-slide {
  padding: clamp(6px, 0.8vw, 18px);
  box-sizing: border-box;
  width: 82vw; /* Mobile baseline responsive sizing */
  flex-shrink: 0;
}

@media (min-width: 480px) { .pc-slide { width: 320px; } }
@media (min-width: 768px) { .pc-slide { width: 360px; } }
@media (min-width: 1024px) { .pc-slide { width: 400px; } }
@media (min-width: 1900px) { .pc-slide { width: 460px; } }

/* ==========================================
   CARD
========================================== */

.pc-card {
  background: #fff;
  border-radius: clamp(16px, 1.4vw, 30px);
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 4px 18px rgba(0,0,0,0.06);
  transition: transform 0.28s ease, box-shadow 0.28s ease;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.pc-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(0,0,0,0.14);
}

/* ==========================================
   IMAGE
========================================== */

.pc-card__img-wrap {
  position: relative;
  width: 100%;
  height: clamp(180px, 16vw, 420px);
  overflow: hidden;
  flex-shrink: 0;
}

.pc-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: #f2f2f2;
  transition: transform 0.3s ease;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.pc-card:hover .pc-card__img {
  transform: scale(1.04);
}

.pc-card__img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 30%,
    color-mix(in srgb, var(--accent) 55%, #000 45%) 100
  );
}

/* ==========================================
   BODY
========================================== */

.pc-card__body {
  padding: clamp(16px, 1.4vw, 34px);
  display: flex;
  flex-direction: column;
  gap: clamp(6px, 0.7vw, 16px);
  flex: 1;
  justify-content: space-between;
}

/* ==========================================
   TAGLINE
========================================== */

.pc-card__tagline {
  font-size: clamp(9px, 0.55vw, 14px);
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #999;
  margin: 0;
}

/* ==========================================
   NAME
========================================== */

.pc-card__name {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(22px, 1.9vw, 52px);
  line-height: 1.05;
  margin: 0;
  color: #1a1a1a;
}

/* ==========================================
   DESCRIPTION
========================================== */

.pc-card__desc {
  font-size: clamp(12.5px, 0.75vw, 24px);
  line-height: 1.72;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ==========================================
   PILLS
========================================== */

.pc-card__pills {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(5px, 0.6vw, 12px);
  margin-top: 2px;
}

.pc-card__pill {
  background: #f4f4f1;
  border-radius: 30px;
  padding: clamp(4px, 0.5vw, 10px) clamp(8px, 0.8vw, 16px);
  font-size: clamp(8.5px, 0.65vw, 14px);
  color: #555;
  white-space: nowrap;
}

/* ==========================================
   FOOTER
========================================== */

.pc-card__footer {
  margin-top: auto;
  padding-top: clamp(10px, 0.9vw, 22px);
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.pc-card__count {
  font-size: clamp(10px, 0.7vw, 16px);
  letter-spacing: 1px;
  color: #999;
  font-weight: 700;
  text-transform: uppercase;
}

.pc-card__cta {
  border: none;
  border-radius: 40px;
  padding: clamp(8px, 0.8vw, 16px) clamp(14px, 1vw, 28px);
  background: var(--accent);
  color: white;
  font-size: clamp(11px, 0.75vw, 17px);
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
  white-space: nowrap;
}

.pc-card__cta:hover {
  opacity: 0.92;
  transform: translateX(2px);
}

/* ==========================================
   RESPONSIVE OVERRIDES
========================================== */

@media (min-width: 1024px) and (max-width: 1440px) {
  .pc-card { min-height: 560px; }
  .pc-card__img-wrap { height: 220px; }
  .pc-card__body { padding: 18px; gap: 8px; }
  .pc-card__name { font-size: 26px; }
  .pc-card__desc { font-size: 16px; line-height: 1.65; -webkit-line-clamp: 4; }
  .pc-card__pill { font-size: 10px; }
  .pc-card__cta { font-size: 12px; }
}

@media (min-width: 1450px) and (max-width: 1899px) {
  .pc-card__img-wrap { height: 280px; }
  .pc-card__name { font-size: 34px; }
  .pc-card__desc { font-size: 18px; }
}

@media (min-width: 1900px) {
  .pc-card { border-radius: 24px; }
  .pc-card__img-wrap { height: 320px; }
  .pc-card__body { padding: 26px; gap: 12px; }
  .pc-card__name { font-size: 40px; }
  .pc-card__desc { font-size: 18px; line-height: 1.82; }
  .pc-card__pill { font-size: 12px; }
  .pc-card__count { font-size: 13px; }
  .pc-card__cta { font-size: 14px; }
}

@media (min-width: 2560px) {
  .pc-card { min-height: 820px; }
  .pc-card__img-wrap { height: 420px; }
  .pc-card__body { padding: 34px; gap: 16px; }
  .pc-card__name { font-size: 48px; }
  .pc-card__desc { font-size: 24px; line-height: 1.95; }
  .pc-card__pill { font-size: 14px; }
  .pc-card__count { font-size: 15px; }
  .pc-card__cta { font-size: 16px; }
}

@media (max-width: 1023px) {
  .pc-card__img-wrap { height: 220px; }
  .pc-card__name { font-size: 26px; }
  .pc-card__desc { font-size: 14px; }
}

@media (max-width: 768px) {
  .pc-section { padding: 28px 0 70px; }
  .pc-outer { padding-inline: 10px; }
  .pc-card { border-radius: 16px; }
  .pc-card__img-wrap { height: 200px; }
  .pc-card__body { padding: 16px; gap: 8px; }
  .pc-card__tagline { font-size: 9px; letter-spacing: 1.5px; }
  .pc-card__name { font-size: 24px; }
  .pc-card__desc { font-size: 13px; line-height: 1.65; -webkit-line-clamp: unset; }
  .pc-card__pill { font-size: 9px; padding: 5px 9px; }
  .pc-card__footer { flex-wrap: wrap; }
  .pc-card__cta { flex: 1; text-align: center; }
}

@media (max-width: 480px) {
  .pc-section { padding: 22px 0 60px; }
  .pc-outer { padding-inline: 6px; }
  .pc-card { border-radius: 14px; }
  .pc-card__img-wrap { height: 180px; }
  .pc-card__body { padding: 14px; }
  .pc-card__name { font-size: 22px; }
  .pc-card__desc { font-size: 12px; }
  .pc-card__pill { font-size: 8px; padding: 4px 8px; }
  .pc-card__footer { flex-direction: column; align-items: stretch; }
  .pc-card__cta { width: 100%; padding: 11px 14px; font-size: 13px; text-align: center; }
}
      `}</style>
    </section>
  );
};

export default memo(ProgramsCarousel);