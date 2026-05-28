import React, { useState, useEffect, useRef, memo } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CAROUSEL_LOCATION_DATA, PROGRAM_CATEGORIES } from "./CarouselData";
import SectionHeading from "../../../Components/useFullComponent/SectionHeading";

const CAROUSEL_STYLES = `
  .pc-section {
    width: 100%;
    padding: clamp(36px, 4vw, 90px) 0;
    overflow: hidden;
    font-family: 'Caudex', serif;
    box-sizing: border-box;
    user-select: none;
  }

  /* ==========================================
      CAROUSEL SLIDER HOUSING
  ========================================== */
  .pc-outer {
    width: 100%;
    position: relative;
    padding: 20px 0;
    display: block;
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .pc-viewport {
    width: 100%;
    overflow: hidden;
    padding: 10px 0;
  }

  .pc-custom-track {
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    width: 100% !important;
    will-change: transform;
  }

  .pc-custom-track.has-transition {
    transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1) !important;
  }

  /* ==========================================
      SLIDE SIZING & BOUNDARIES (Exact 1 Card)
  ========================================== */
  .pc-slide {
    box-sizing: border-box;
    width: 100%;
    flex-shrink: 0;
    padding: 0 16px;
  }

  /* Dynamic columns depending on media range queries */
  @media (min-width: 600px) { .pc-slide { width: 50% !important; } }
  @media (min-width: 992px) { .pc-slide { width: 33.3333% !important; } }

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
  }

  .pc-card:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 18px 40px rgba(0,0,0,0.14);
  }

  .pc-card__img-wrap {
    position: relative;
    width: 100%;
    height: clamp(180px, 16vw, 260px);
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
    padding: clamp(16px, 1.4vw, 24px);
    display: flex;
    flex-direction: column;
    gap: clamp(6px, 0.7vw, 14px);
    flex: 1;
    justify-content: space-between;
  }

  .pc-card__tagline {
    font-size: clamp(9px, 0.55vw, 12px);
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #999;
    margin: 0;
  }

  .pc-card__name {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(22px, 1.9vw, 32px);
    line-height: 1.1;
    margin: 4px 0;
    color: #1a1a1a;
  }

  .pc-card__desc {
    font-size: clamp(13px, 0.85vw, 15px);
    line-height: 1.6;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #444;
  }

  .pc-card__pills { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
  .pc-card__pill { background: #f4f4f1; border-radius: 30px; padding: 4px 10px; font-size: 12px; color: #555; white-space: nowrap; }

  .pc-card__footer {
    margin-top: auto;
    padding-top: 14px;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .pc-card__count { font-size: 13px; letter-spacing: 1px; color: #999; font-weight: 700; text-transform: uppercase; }
  .pc-card__cta { border: none; border-radius: 40px; padding: 8px 20px; background: var(--accent); color: white; font-size: 14px; font-weight: 700; cursor: pointer; transition: opacity 0.2s ease; white-space: nowrap; }
  .pc-card__cta:hover { opacity: 0.92; }

  /* ==========================================
      CONTROLS & DOTS NAVIGATION
  ========================================== */
  .pc-controls {
    display: none; /* ✅ HIDDEN BY DEFAULT ON MOBILE DISPLAY PORTS */
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
  }

  @media (min-width: 600px) {
    .pc-controls {
      display: flex; /* ✅ SEAMLESSLY RESTORED FOR TABLETS AND DESKTOPS */
    }
  }

  .pc-arrow {
    background: #fff;
    border: 1px solid #ddd;
    color: #333;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transition: all 0.2s ease;
  }

  .pc-arrow:hover {
    background: #f4f4f1;
    transform: scale(1.05);
  }

  .pc-dots {
    display: flex;
    gap: 8px;
  }

  .pc-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ccc;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .pc-dot.is-active {
    background: #4a7c68;
    width: 20px;
    border-radius: 4px;
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

const CLONED_LOOP_ENTRIES = [...LOCATION_ENTRIES, ...LOCATION_ENTRIES, ...LOCATION_ENTRIES];

const PILL_LABELS = PROGRAM_CATEGORIES.map((cat) => ({ label: cat.label, icon: cat.icon }));

const LocationCard = memo(({ loc, onClick }) => (
  <div className="pc-slide">
    <div className="pc-card" onClick={(e) => onClick(e, loc.path)}>
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
  const realItemsCount = LOCATION_ENTRIES.length;
  
  const [activeIndex, setActiveIndex] = useState(realItemsCount);
  const [visibleCardsCount, setVisibleCardsCount] = useState(1);
  const [useTransition, setUseTransition] = useState(true);

  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);
  const autoplayTimerRef = useRef(null);
  const isSnappingRef = useRef(false);

  useEffect(() => {
    const handleResizeCalculations = () => {
      const width = window.innerWidth;
      if (width >= 992) setVisibleCardsCount(3);
      else if (width >= 600) setVisibleCardsCount(2);
      else setVisibleCardsCount(1);
    };

    handleResizeCalculations();
    window.addEventListener("resize", handleResizeCalculations);
    return () => window.removeEventListener("resize", handleResizeCalculations);
  }, []);

  const handleTransitionEnd = () => {
    if (isSnappingRef.current) return;

    if (activeIndex >= realItemsCount * 2) {
      isSnappingRef.current = true;
      setUseTransition(false);
      setActiveIndex(activeIndex - realItemsCount);
    }
    else if (activeIndex < realItemsCount) {
      isSnappingRef.current = true;
      setUseTransition(false);
      setActiveIndex(activeIndex + realItemsCount);
    }
  };

  useEffect(() => {
    if (!useTransition) {
      const timeout = setTimeout(() => {
        setUseTransition(true);
        isSnappingRef.current = false;
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [useTransition]);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimerRef.current = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 2000);
  };

  const stopAutoplay = () => {
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [visibleCardsCount]);

  const handlePrevSlide = () => {
    if (isSnappingRef.current) return;
    stopAutoplay();
    setActiveIndex((prev) => prev - 1);
    startAutoplay();
  };

  const handleNextSlide = () => {
    if (isSnappingRef.current) return;
    stopAutoplay();
    setActiveIndex((prev) => prev + 1);
    startAutoplay();
  };

  const handleDotNavigation = (realIdx) => {
    if (isSnappingRef.current) return;
    stopAutoplay();
    setActiveIndex(realItemsCount + realIdx);
    startAutoplay();
  };

  const handleTouchStart = (e) => {
    if (isSnappingRef.current) return;
    stopAutoplay();
    touchStartXRef.current = e.targetTouches[0].clientX;
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const totalSwipeDistance = touchStartXRef.current - touchEndXRef.current;

    if (totalSwipeDistance > swipeThreshold) {
      handleNextSlide();
    } else if (totalSwipeDistance < -swipeThreshold) {
      handlePrevSlide();
    } else {
      startAutoplay();
    }
  };

  const handleCardClick = (e, path) => {
    navigate(path);
  };

  const computedTranslateValue = activeIndex * (100 / visibleCardsCount);
  const activeDotIndex = (activeIndex % realItemsCount);

  return (
    <section className="pc-section">
      <style>{CAROUSEL_STYLES}</style>

      <SectionHeading
        title="Where Would You Like To"
        highlight="Train?"
        subtitle="Choose from sacred destinations across Asia. Every location offers the full curriculum — from 50-hour foundations to 500-hour master programs."
        highlightColor="#4a7c68"
        textColor="#1e1e1c"
      />

      <div className="pc-outer">
        <div 
          className="pc-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div 
            className={`pc-custom-track ${useTransition ? "has-transition" : ""}`}
            style={{ transform: `translate3d(-${computedTranslateValue}%, 0px, 0px)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {CLONED_LOOP_ENTRIES.map((loc, idx) => (
              <LocationCard
                key={`${loc.name}-${idx}`}
                loc={loc}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>

        {/* CONTROLS BUTTONS PANEL (Hidden on mobile via CSS style configurations above) */}
        <div className="pc-controls">
          <button className="pc-arrow" onClick={handlePrevSlide}>
            <ChevronLeft size={20} />
          </button>

          <div className="pc-dots">
            {LOCATION_ENTRIES.map((_, idx) => (
              <span
                key={idx}
                className={`pc-dot ${activeDotIndex === idx ? "is-active" : ""}`}
                onClick={() => handleDotNavigation(idx)}
              />
            ))}
          </div>

          <button className="pc-arrow" onClick={handleNextSlide}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(ProgramsCarousel);