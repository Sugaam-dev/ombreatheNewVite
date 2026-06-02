import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import AutoTyping from "../AutoTyping";

import "./Banner.css";

// Desktop Images
import desktop1 from "../../images/Gemini_Generated_Image.jpg";
import desktop2 from "../../images/2.jpg";
import desktop3 from "../../images/3.jpg";
import desktop4 from "../../images/4.jpg";
import desktop5 from "../../images/5.jpg";

// Mobile Images
import mobile1 from "../../images/mobile/shiv_Mobile.jpg";
import mobile2 from "../../images/mobile/TTC.jpg";
import mobile3 from "../../images/mobile/temple yoga.jpg";
import mobile4 from "../../images/mobile/Experience.jpg";
import mobile5 from "../../images/mobile/Certification.jpg";

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
  const imageSources = useMemo(() => {
    return isMobile
      ? [mobile1, mobile2, mobile3, mobile4, mobile5]
      : [desktop1, desktop2, desktop3, desktop4, desktop5];
  }, [isMobile]);

  // ==========================================
  // PRELOAD NEXT IMAGES
  // ==========================================
  useEffect(() => {
    imageSources.slice(1).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [imageSources]);

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
        prev === imageSources.length - 1
          ? 0
          : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, imageSources.length]);

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
        ? imageSources.length - 1
        : prev - 1
    );
  }, [imageSources.length]);

  const goToNext = useCallback(() => {
    restartAutoplay();

    setCurrentIndex((prev) =>
      prev === imageSources.length - 1
        ? 0
        : prev + 1
    );
  }, [imageSources.length]);

  const goToSlide = useCallback((index) => {
    restartAutoplay();
    setCurrentIndex(index);
  }, []);

  return (
    <div className="slider-container">
      {imageSources.map((image, index) => (
        <div
          key={index}
          className={`slider-image-wrapper ${
            index === currentIndex
              ? "active"
              : ""
          }`}
        >
          <img
            src={image}
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

          <div className="slider-overlay" />
        </div>
      ))}

      <div className="slider-content">
        <h1 className="slider-title">
          Master Yogic Living Beyond
          Certification with Ombreathe..
        </h1>

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
          >
            <IoChevronBack size={28} />
          </button>

          <button
            className="nav-button next"
            onClick={goToNext}
            type="button"
          >
            <IoChevronForward size={28} />
          </button>
        </>
      )}

      <div className="dots-container">
        {imageSources.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`dot ${
              index === currentIndex
                ? "active"
                : ""
            }`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(ImageSliderBanner);