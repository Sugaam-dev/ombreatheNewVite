import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { CAROUSEL_LOCATION_DATA, PROGRAM_CATEGORIES } from "./CarouselData";
import SectionHeading from "../../../Components/useFullComponent/SectionHeading";

const CAROUSEL_STYLES = `
  .pc-section {
    width: 100%;
    padding: clamp(36px, 4vw, 90px) 0;
    overflow: hidden;
    font-family: 'Caudex', serif;
    box-sizing: border-box;
  }

  /* ==========================================
      INFINITE MARQUEE RAIL RAIL HOUSING
  ========================================== */
  .pc-outer {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 20px 0;
    display: block;
  }

  .pc-custom-track {
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    width: max-content !important;
    will-change: transform;
    transform: translateZ(0);
  }

  /* Pause ticker instantly on hover patterns */
  .pc-outer:hover .pc-custom-track {
    animation-play-state: paused !important;
  }

  /* ==========================================
      SLIDE SIZING & BOUNDARIES
  ========================================== */
  .pc-slide {
    padding: clamp(6px, 0.8vw, 18px);
    box-sizing: border-box;
    width: 82vw;
    flex-shrink: 0;
  }

  @media (min-width: 480px) { .pc-slide { width: 320px !important; } }
  @media (min-width: 768px) { .pc-slide { width: 360px !important; } }
  @media (min-width: 1024px) { .pc-slide { width: 400px !important; } }
  @media (min-width: 1900px) { .pc-slide { width: 460px !important; } }

  /* ==========================================
      CARD STYLING
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
    transition: transform 0.28s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.28s ease;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  .pc-card:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 18px 40px rgba(0,0,0,0.14);
  }

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
    transition: transform 0.4s ease;
  }

  .pc-card:hover .pc-card__img { transform: scale(1.05); }

  .pc-card__img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 30%,
      color-mix(in srgb, var(--accent) 55%, #000 45%) 100%
    );
  }

  .pc-card__body {
    padding: clamp(16px, 1.4vw, 34px);
    display: flex;
    flex-direction: column;
    gap: clamp(6px, 0.7vw, 16px);
    flex: 1;
    justify-content: space-between;
  }

  .pc-card__tagline {
    font-size: clamp(9px, 0.55vw, 14px);
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #999;
    margin: 0;
  }

  .pc-card__name {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(22px, 1.9vw, 52px);
    line-height: 1.05;
    margin: 0;
    color: #1a1a1a;
  }

  .pc-card__desc {
    font-size: clamp(12.5px, 0.75vw, 24px);
    line-height: 1.72;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #444;
  }

  .pc-card__pills { display: flex; flex-wrap: wrap; gap: clamp(5px, 0.6vw, 12px); margin-top: 2px; }
  .pc-card__pill { background: #f4f4f1; border-radius: 30px; padding: clamp(4px, 0.5vw, 10px) clamp(8px, 0.8vw, 16px); font-size: clamp(8.5px, 0.65vw, 14px); color: #555; white-space: nowrap; }

  .pc-card__footer {
    margin-top: auto;
    padding-top: clamp(10px, 0.9vw, 22px);
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .pc-card__count { font-size: clamp(10px, 0.7vw, 16px); letter-spacing: 1px; color: #999; font-weight: 700; text-transform: uppercase; }
  .pc-card__cta { border: none; border-radius: 40px; padding: clamp(8px, 0.8vw, 16px) clamp(14px, 1vw, 28px); background: var(--accent); color: white; font-size: clamp(11px, 0.75vw, 17px); font-weight: 700; cursor: pointer; transition: transform 0.2s ease, opacity 0.2s ease; white-space: nowrap; }
  .pc-card__cta:hover { opacity: 0.92; transform: translateX(2px); }

  @media (min-width: 1024px) and (max-width: 1440px) {
    .pc-card { min-height: 560px; }
    .pc-card__img-wrap { height: 220px; }
    .pc-card__body { padding: 18px; gap: 8px; }
    .pc-card__name { font-size: 26px; }
    .pc-card__desc { font-size: 16px; line-height: 1.65; -webkit-line-clamp: 4; }
  }
`;

const LOCATION_ENTRIES = Object.entries(CAROUSEL_LOCATION_DATA).map(([name, data]) => ({
  name,
  tagline: data.tagline,
  description: data.description,
  programs: data.totalProgramsCount,
  image: data.heroImage,
  accent: data.accentColor,
  path: `/programs/${name.toLowerCase()}`,
}));

const LOOP_LOCATIONS = [...LOCATION_ENTRIES, ...LOCATION_ENTRIES];
const PILL_LABELS = PROGRAM_CATEGORIES.map((cat) => ({ label: cat.label, icon: cat.icon }));

const LocationCard = memo(({ loc, onClick }) => (
  <div className="pc-slide">
    <div className="pc-card" onClick={() => onClick(loc.path)}>
      <div className="pc-card__img-wrap">
        <img
          src={loc.image}
          alt={loc.name}
          className="pc-card__img"
          loading="lazy"
          width="500"
          height="300"
        />
        <div className="pc-card__img-overlay" style={{ "--accent": loc.accent }} />
      </div>

      <div className="pc-card__body">
        <div>
          <span className="pc-card__tagline">{loc.tagline}</span>
          <h3 className="pc-card__name">{loc.name}</h3>
          <p className="pc-card__desc">{loc.description}</p>
        </div>

        <div>
          <div className="pc-card__pills">
            {PILL_LABELS.map((p) => (
              <span key={p.label} className="pc-card__pill">
                {p.icon} {p.label}
              </span>
            ))}
          </div>

          <div className="pc-card__footer">
            <span className="pc-card__count">{loc.programs} Programs</span>
            <button className="pc-card__cta" style={{ "--accent": loc.accent }}>
              Explore →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
));

const ProgramsCarousel = () => {
  const navigate = useNavigate();

  // Controls velocity loop timeline calculation
  const rotationDuration = `${LOCATION_ENTRIES.length * 7}s`;

  return (
    <section className="pc-section">
      <style>{CAROUSEL_STYLES}</style>
      
      {/* 🛠️ SPECIFIC FIX: Separated keyframes with root injection to prevent silent parsing freezes */}
      <style>{`
        @keyframes customMarqueeLoop {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .pc-custom-track {
          animation: customMarqueeLoop ${rotationDuration} linear infinite !important;
        }
      `}</style>

      <SectionHeading
        title="Where Would You Like To"
        highlight="Train?"
        subtitle="Choose from sacred destinations across Asia. Every location offers the full curriculum — from 50-hour foundations to 500-hour master programs."
        highlightColor="#4a7c68"
        textColor="#1e1e1c"
      />

      <div className="pc-outer">
        <div className="pc-custom-track">
          {LOOP_LOCATIONS.map((loc, idx) => (
            <LocationCard
              key={`${loc.name}-${idx}`}
              loc={loc}
              onClick={(path) => navigate(path)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ProgramsCarousel);