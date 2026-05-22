// ProgramsCarousel.jsx

import React, { useRef, memo } from "react";
import { useNavigate } from "react-router-dom";

// ==========================================
// SLIDER FIX
// ==========================================
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import _Slider from "react-slick";
const Slider = _Slider.default || _Slider;

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

const LOCATIONS = Object.entries(LOCATION_DATA).map(
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
  const sliderRef = useRef(null);

  const settings = {
  dots: true,
  infinite: true,
  speed: 450,

  slidesToShow: 3,
  slidesToScroll: 1,

  autoplay: true,
  autoplaySpeed: 3000,

  adaptiveHeight: true,

  pauseOnHover: true,
  waitForAnimate: false,

  cssEase: "ease-out",

  useTransform: true,
  swipeToSlide: true,

  arrows: false,

  variableWidth: false,
  initialSlide: 0,

  dotsClass: "slick-dots pc-dots",

  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

        centerMode: false,
        variableWidth: false,

        infinite: true,
      },
    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

        centerMode: false,
        variableWidth: false,

        infinite: true,
      },
    },
  ],
};

  return (
    <section className="pc-section">
      <SectionHeading
        title="Where Would You Like To"
        highlight="Train?"
        subtitle="Choose from sacred destinations across Asia. Every location offers the full curriculum — from 50-hour foundations to 500-hour master programs."
        highlightColor="#4a7c68"
        textColor="#1e1e1c"
      />

      <div className="pc-outer">
        <div className="pc-wrap">
          <Slider ref={sliderRef} {...settings}>
            {LOCATIONS.map((loc) => (
              <LocationCard
                key={loc.name}
                loc={loc}
                onClick={(path) => navigate(path)}
              />
            ))}
          </Slider>
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
   LAYOUT
========================================== */

.pc-outer {
  width: 100%;
  padding-inline: clamp(10px, 1.8vw, 40px);
  box-sizing: border-box;
  overflow: hidden;
}

.pc-wrap {
  width: min(96%, 1800px);
  margin-inline: auto;
  overflow: hidden;
  min-width: 0;
}

/* ==========================================
   SLICK
========================================== */

.pc-wrap .slick-slider {
  width: 100%;
  overflow: hidden;
  min-width: 0;
}

.pc-wrap .slick-list {
  overflow: hidden;
  width: 100%;

  margin: 0 !important;
  padding: 0 !important;

  min-width: 0;
}

.pc-wrap .slick-track {
  display: flex !important;
  align-items: stretch;

  min-width: 0;
}

.pc-wrap .slick-track::before,
.pc-wrap .slick-track::after {
  display: none !important;
}

.pc-wrap .slick-slide {
  height: auto !important;
}

.pc-wrap .slick-slide > div {
  height: 100%;
  padding: 0;
}

/* ==========================================
   SLIDE
========================================== */

.pc-slide {
  padding: clamp(6px, 0.8vw, 18px);
  box-sizing: border-box;
  height: 100%;
  min-width: 0;
}

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

  min-width: 0;

  box-shadow:
    0 4px 18px rgba(0,0,0,0.06);

  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease;

  will-change: transform;

  transform: translateZ(0);

  backface-visibility: hidden;
}

.pc-card:hover {
  transform: translateY(-6px);

  box-shadow:
    0 18px 40px rgba(0,0,0,0.14);
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

  background:
    linear-gradient(
      to bottom,
      transparent 30%,
      color-mix(in srgb, var(--accent) 55%, #000 45%) 100%
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

  padding:
    clamp(4px, 0.5vw, 10px)
    clamp(8px, 0.8vw, 16px);

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

  padding:
    clamp(8px, 0.8vw, 16px)
    clamp(14px, 1vw, 28px);

  background: var(--accent);

  color: white;

  font-size: clamp(11px, 0.75vw, 17px);

  font-weight: 700;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease;

  white-space: nowrap;
}

.pc-card__cta:hover {
  opacity: 0.92;
  transform: translateX(2px);
}

/* ==========================================
   DOTS
========================================== */

.pc-dots {
  bottom: -40px !important;
}

.pc-dots li button:before {
  font-size: 8px !important;
  color: #ccc !important;
  opacity: 1 !important;
}

.pc-dots li.slick-active button:before {
  color: #4a7c68 !important;
}

/* ==========================================
   1024px–1440px
========================================== */

@media (min-width: 1024px) and (max-width: 1440px) {

  .pc-wrap {
    max-width: 1360px;
  }

  .pc-card {
    min-height: 560px;
  }

  .pc-card__img-wrap {
    height: 220px;
  }

  .pc-card__body {
    padding: 18px;
    gap: 8px;
  }

  .pc-card__name {
    font-size: 26px;
  }

  .pc-card__desc {
    font-size: 16px;
    line-height: 1.65;

    -webkit-line-clamp: 4;
  }

  .pc-card__pill {
    font-size: 10px;
  }

  .pc-card__cta {
    font-size: 12px;
  }
}

/* ==========================================
   TABLET
========================================== */

@media (max-width: 1023px) {

  .pc-wrap {
    max-width: 900px;
  }

  .pc-card__img-wrap {
    height: 220px;
  }

  .pc-card__name {
    font-size: 26px;
  }

  .pc-card__desc {
    font-size: 14px;
  }
}

/* ==========================================
   MOBILE
========================================== */

@media (max-width: 768px) {

  .pc-section {
    padding: 28px 0 70px;
  }

  .pc-outer {
    padding-inline: 10px;
  }

  .pc-slide {
    padding: 6px 2px;
  }

  .pc-card {
    border-radius: 16px;
  }

  .pc-card__img-wrap {
    height: 200px;
  }

  .pc-card__body {
    padding: 16px;
    gap: 8px;
  }

  .pc-card__tagline {
    font-size: 9px;
    letter-spacing: 1.5px;
  }

  .pc-card__name {
    font-size: 24px;
  }

  .pc-card__desc {
    font-size: 13px;
    line-height: 1.65;

    -webkit-line-clamp: unset;
  }

  .pc-card__pill {
    font-size: 9px;
    padding: 5px 9px;
  }

  .pc-card__footer {
    flex-wrap: wrap;
  }

  .pc-card__cta {
    flex: 1;
    text-align: center;
  }
}

/* ==========================================
   SMALL MOBILE
========================================== */

@media (max-width: 480px) {

  .pc-section {
    padding: 22px 0 60px;
  }

  .pc-outer {
    padding-inline: 6px;
  }

  .pc-slide {
    padding: 4px 1px;
  }

  .pc-card {
    border-radius: 14px;
  }

  .pc-card__img-wrap {
    height: 180px;
  }

  .pc-card__body {
    padding: 14px;
  }

  .pc-card__name {
    font-size: 22px;
  }

  .pc-card__desc {
    font-size: 12px;
  }

  .pc-card__pill {
    font-size: 8px;
    padding: 4px 8px;
  }

  .pc-card__footer {
    flex-direction: column;
    align-items: stretch;
  }

  .pc-card__cta {
    width: 100%;
    padding: 11px 14px;
    font-size: 13px;
    text-align: center;
  }
}
  `}</style>
    </section>
  );
};

export default memo(ProgramsCarousel);