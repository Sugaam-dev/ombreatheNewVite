// ProgramsCarousel.jsx

import React, { useRef, memo } from "react";
import SliderImport from "react-slick";
import { useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  LOCATION_DATA,
  PROGRAM_CATEGORIES,
} from "./LocationData";

import SectionHeading from "../../../Components/useFullComponent/SectionHeading";

const Slider = SliderImport.default || SliderImport;

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
            <span
              key={p.label}
              className="pc-card__pill"
            >
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

  // ==========================================
  // OPTIMIZED SETTINGS
  // ==========================================

  const settings = {
    dots: true,

    infinite: true,

    speed: 450,

    slidesToShow: 3,

    slidesToScroll: 1,

    autoplay: false,

    adaptiveHeight: false,

    pauseOnHover: true,

    waitForAnimate: false,

    cssEase: "ease-out",

    useTransform: true,

    swipeToSlide: true,

    arrows: false,

    dotsClass: "slick-dots pc-dots",

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,

          centerMode: false,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,

          centerMode: false,
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

      {/* CAROUSEL */}
      <div className="pc-outer">
        <div className="pc-wrap">
          <Slider ref={sliderRef} {...settings}>
            {LOCATIONS.map((loc) => (
              <LocationCard
                key={loc.name}
                loc={loc}
                onClick={(path) =>
                  navigate(path)
                }
              />
            ))}
          </Slider>
        </div>
      </div>

      {/* ==========================================
          STYLES
      ========================================== */}

      <style>{`
        /* ==========================================
           SECTION
        ========================================== */

        .pc-section {
          width: 100%;
          padding: 40px 0 90px;
          background: #fafaf8;
          overflow: hidden;

          font-family: 'Caudex', serif;
        }

        /* ==========================================
           LAYOUT
        ========================================== */

        .pc-outer {
          width: 100%;
          padding: 0 20px;
          box-sizing: border-box;
        }

        .pc-wrap {
          max-width: 1320px;
          margin: 0 auto;
        }

        /* ==========================================
           SLIDE
        ========================================== */

        .pc-slide {
          padding: 10px;
          box-sizing: border-box;
        }

        /* ==========================================
           CARD
        ========================================== */

        .pc-card {
          background: #fff;

          border-radius: 18px;

          overflow: hidden;

          cursor: pointer;

          display: flex;

          flex-direction: column;

          box-shadow:
            0 3px 14px rgba(0,0,0,0.06);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;

          will-change: transform;

          transform: translateZ(0);

          backface-visibility: hidden;
        }

        .pc-card:hover {
          transform: translateY(-4px);

          box-shadow:
            0 12px 28px rgba(0,0,0,0.12);
        }

        /* ==========================================
           IMAGE
        ========================================== */

        .pc-card__img-wrap {
          position: relative;

          width: 100%;

          height: 220px;

          overflow: hidden;

          flex-shrink: 0;
        }

        .pc-card__img {
          width: 100%;

          height: 100%;

          object-fit: cover;

          display: block;

          transition: transform 0.25s ease;

          will-change: transform;

          transform: translateZ(0);

          backface-visibility: hidden;
        }

        .pc-card:hover .pc-card__img {
          transform: scale(1.03);
        }

        .pc-card__img-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to bottom,
              transparent 30%,
              color-mix(
                in srgb,
                var(--accent) 55%,
                #000 45%
              ) 100%
            );
        }

        /* ==========================================
           BODY
        ========================================== */

        .pc-card__body {
          padding: 18px;

          display: flex;

          flex-direction: column;

          gap: 10px;

          flex: 1;
        }

        .pc-card__tagline {
          font-size: 10px;

          font-weight: 700;

          letter-spacing: 2px;

          text-transform: uppercase;

          color: #999;
        }

        .pc-card__name {
          font-family:
            'Cormorant Garamond',
            serif;

          font-size: 28px;

          line-height: 1.1;

          margin: 0;

          color: #1a1a1a;
        }

        .pc-card__desc {
          font-size: 13px;

          line-height: 1.7;

          color: #666;

          margin: 0;
        }

        /* ==========================================
           PILLS
        ========================================== */

        .pc-card__pills {
          display: flex;

          flex-wrap: wrap;

          gap: 6px;
        }

        .pc-card__pill {
          background: #f4f4f1;

          border-radius: 30px;

          padding: 5px 10px;

          font-size: 10px;

          color: #555;
        }

        /* ==========================================
           FOOTER
        ========================================== */

        .pc-card__footer {
          margin-top: auto;

          padding-top: 14px;

          border-top: 1px solid #eee;

          display: flex;

          justify-content: space-between;

          align-items: center;
        }

        .pc-card__count {
          font-size: 11px;

          letter-spacing: 1px;

          color: #999;

          font-weight: 700;

          text-transform: uppercase;
        }

        .pc-card__cta {
          border: none;

          border-radius: 40px;

          padding: 9px 18px;

          background: var(--accent);

          color: white;

          font-size: 12px;

          font-weight: 700;

          cursor: pointer;

          transition:
            transform 0.2s ease,
            opacity 0.2s ease;
        }

        .pc-card__cta:hover {
          opacity: 0.92;

          transform: translateX(2px);
        }

        /* ==========================================
           DOTS
        ========================================== */

        .pc-dots {
          bottom: -42px !important;
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
           PERFORMANCE FIX
        ========================================== */

        .slick-track,
        .slick-slide {
          will-change: transform;

          transform: translateZ(0);

          backface-visibility: hidden;
        }
/* ==========================================
   TABLET + MOBILE
========================================== */

@media (max-width: 768px) {

  .pc-section {
    padding: 40px 0 70px;
  }

  .pc-outer {
    padding: 0 8px;
    overflow: hidden;
  }

  .pc-wrap {
    width: 100%;
    overflow: hidden;
  }

  .pc-slide {
    width: 100%;
    padding: 6px;
    box-sizing: border-box;
  }

  .pc-card {
    width: 100%;
    min-width: 0;
    border-radius: 16px;
  }

  .pc-card__img-wrap {
    height: 210px;
  }

  .pc-card__body {
    padding: 14px;
    gap: 8px;
  }

  .pc-card__tagline {
    font-size: 9px;
    letter-spacing: 1.5px;
  }

  .pc-card__name {
    font-size: 24px;
    line-height: 1.1;
  }

  .pc-card__desc {
    font-size: 12.5px;
    line-height: 1.6;
  }

  .pc-card__pills {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .pc-card__pill {
    font-size: 8.5px;
    padding: 5px 8px;
    line-height: 1.4;
  }

  .pc-card__footer {
    gap: 10px;
    flex-wrap: wrap;
  }

  .pc-card__count {
    font-size: 10px;
  }

  .pc-card__cta {
    width: 100%;
    text-align: center;
    justify-content: center;
    padding: 10px 14px;
    font-size: 11px;
  }

  .slick-list {
    overflow: hidden;
  }

  .slick-track {
    display: flex;
  }

  .slick-slide > div {
    height: 100%;
  }
}

/* ==========================================
   SMALL MOBILE
========================================== */

@media (max-width: 480px) {

  .pc-section {
    padding: 35px 0 65px;
  }

  .pc-outer {
    padding: 0 6px;
  }

  .pc-slide {
    padding: 4px;
  }

  .pc-card {
    border-radius: 14px;
  }

  .pc-card__img-wrap {
    height: 180px;
  }

  .pc-card__body {
    padding: 12px;
  }

  .pc-card__name {
    font-size: 21px;
  }

  .pc-card__desc {
    font-size: 11.5px;
    line-height: 1.6;
  }

  .pc-card__pill {
    font-size: 8px;
    padding: 4px 7px;
  }

  .pc-card__footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .pc-card__cta {
    width: 100%;
  }

  .pc-dots {
    bottom: -35px !important;
  }
}
      `}</style>
    </section>
  );
};

export default memo(ProgramsCarousel);