import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import AutoTyping from "../../../components/shared/AutoTyping/AutoTyping";

import "../styles/Banner.css";

// Desktop Images
import desktop2 from "../../../images/Ombreathe_Banner_2.webp";
import desktop3 from "../../../images/Ombreathe_Banner_3.webp";
import desktop4 from "../../../images/Ombreathe_Banner_4.webp";
import desktop5 from "../../../images/Ombreathe_Banner_5.webp";

// Mobile Images
import mobile2 from "../../../images/mobile/Ombreathe_2.webp";
import mobile3 from "../../../images/mobile/Ombreathe_3.webp";
import mobile4 from "../../../images/mobile/Ombreathe_4.webp";
import mobile5 from "../../../images/mobile/Ombreathe_5.webp";

// Mobile Small Images (450px wide)
import mobile2Small from "../../../images/mobile/Ombreathe_2_small.webp";
import mobile3Small from "../../../images/mobile/Ombreathe_3_small.webp";
import mobile4Small from "../../../images/mobile/Ombreathe_4_small.webp";
import mobile5Small from "../../../images/mobile/Ombreathe_5_small.webp";

const ImageSliderBanner = () => {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [screenSize, setScreenSize] = useState(
    window.innerWidth
  );

  // ==========================================
  // RESPONSIVE SCREEN DETECTION
  // ==========================================
  useEffect(() => {
    let timeout;

    const handleResize = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setScreenSize(window.innerWidth);
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  const isMobile = useMemo(
    () => screenSize <= 768,
    [screenSize]
  );

  // ==========================================
  // IMAGES
  // ==========================================
  const slides = useMemo(() => {
    return [
      { desktop: "/hero-desktop.webp", mobile: "/hero-mobile.webp", mobileSmall: "/hero-mobile.webp" },
      { desktop: desktop2, mobile: mobile2, mobileSmall: mobile2Small },
      { desktop: desktop3, mobile: mobile3, mobileSmall: mobile3Small },
      { desktop: desktop4, mobile: mobile4, mobileSmall: mobile4Small },
      { desktop: desktop5, mobile: mobile5, mobileSmall: mobile5Small },
    ];
  }, []);

  // ==========================================
  // PRELOAD NEXT IMAGES
  // ==========================================
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    const nextSlide = slides[nextIndex];
    if (nextSlide) {
      const img = new Image();
      if (window.innerWidth <= 480) {
        img.src = nextSlide.mobileSmall;
      } else if (window.innerWidth <= 768) {
        img.src = nextSlide.mobile;
      } else {
        img.src = nextSlide.desktop;
      }
    }
  }, [currentIndex, slides]);

  // ==========================================
  // AUTO TYPING TEXT
  // ==========================================
  const texts = useMemo(() => {
    return screenSize <= 480
      ? [
          "Holistic Yoga Training.",
          "Kundalini Yoga Courses.",
          "Retreats & Workshops.",
        ]
      : [
          "Holistic Yoga Training Programs.",
          "Kundalini Yoga Courses.",
          "Peaceful Retreats & Workshops.",
        ];
  }, [screenSize]);

  // ==========================================
  // NAVIGATION
  // ==========================================
  const teacher = useCallback(() => {
    navigate("/programs");
  }, [navigate]);

  const retreats = useCallback(() => {
    navigate("/programs");
  }, [navigate]);

  // ==========================================
  // AUTO PLAY
  // ==========================================
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1
          ? 0
          : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // ==========================================
  // CONTROLS
  // ==========================================
  const restartAutoplay = () => {
    setIsAutoPlaying(false);

    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  const goToPrevious = useCallback(() => {
    restartAutoplay();

    setCurrentIndex((prev) =>
      prev === 0
        ? slides.length - 1
        : prev - 1
    );
  }, [slides.length]);

  const goToNext = useCallback(() => {
    restartAutoplay();

    setCurrentIndex((prev) =>
      prev === slides.length - 1
        ? 0
        : prev + 1
    );
  }, [slides.length]);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slider-image-wrapper ${
            index === currentIndex
              ? "active"
              : ""
          }`}
        >
          <picture>
            <source media="(max-width: 480px)" srcSet={slide.mobileSmall} type="image/webp" />
            <source media="(max-width: 768px)" srcSet={slide.mobile} type="image/webp" />
            <img
              src={slide.desktop}
              alt={`Yoga Slide ${index + 1}`}
              className="slider-image"
              loading={
                index === 0 ? "eager" : "lazy"
              }
              fetchPriority={
                index === 0 ? "high" : "auto"
              }
              decoding="async"
              draggable={false}
            />
          </picture>

          <div className="slider-overlay" />
        </div>
      ))}

      <div className="slider-content">
        <span className="slider-subtitle-welcome">Welcome to</span>
        <h1 className="slider-title">Ombreathe</h1>

        <div className="type">
          <span>
            <AutoTyping
              texts={texts}
              speed={55}
              delay={1800}
            />
          </span>
        </div>

        <div className="slider-buttons-container">
          <button
            className="slider-button teacher-training-btn"
            onClick={teacher}
            type="button"
          >
            Teacher Training Program
          </button>

          <button
            className="slider-button retreat-program-btn"
            onClick={retreats}
            type="button"
          >
            Destination Retreats
          </button>
        </div>
      </div>

      {!isMobile && (
        <>
          <button
            className="nav-button prev"
            onClick={goToPrevious}
            type="button"
            aria-label="Previous slide"
          >
            <IoChevronBack size={28} />
          </button>

          <button
            className="nav-button next"
            onClick={goToNext}
            type="button"
            aria-label="Next slide"
          >
            <IoChevronForward size={28} />
          </button>
        </>
      )}

    </div>
  );
};

export default React.memo(ImageSliderBanner);
