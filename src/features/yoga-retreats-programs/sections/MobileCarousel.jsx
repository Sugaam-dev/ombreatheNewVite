import React, { useState, useEffect, useRef } from "react";
import "../styles/ProgramSections.css";

/**
 * MobileCarousel - A responsive wrapper component.
 * Renders a swipeable, auto-scrolling carousel on mobile/tablet screens (< md)
 * with a seamless forward-infinite loop, falling back to a grid layout on desktop (>= md).
 */
const MobileCarousel = ({ items, renderItem, className = "", gridClass = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  if (!items || items.length === 0) return null;

  // Append a clone of the first item to the end for a seamless forward loop transition
  const displayItems = items.length > 1 ? [...items, items[0]] : items;

  useEffect(() => {
    if (isPaused || items.length <= 1) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setActiveIndex((prev) => prev + 1);
    }, 4500); // Transition every 4.5s
    return () => clearInterval(interval);
  }, [items.length, isPaused]);

  // Hook to handle reset when reaching the cloned element at the end
  useEffect(() => {
    if (items.length <= 1) return;
    if (activeIndex === displayItems.length - 1) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(0);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, displayItems.length, items.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (items.length <= 1) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 40) {
      setIsTransitioning(true);
      setActiveIndex((prev) => prev + 1);
    } else if (diff < -40) {
      setIsTransitioning(true);
      if (activeIndex === 0) {
        setIsTransitioning(false);
        setActiveIndex(items.length);
        const timer = setTimeout(() => {
          setIsTransitioning(true);
          setActiveIndex(items.length - 1);
        }, 20);
        return () => clearTimeout(timer);
      } else {
        setActiveIndex((prev) => prev - 1);
      }
    }
    const resumeTimer = setTimeout(() => setIsPaused(false), 2000);
    return () => clearTimeout(resumeTimer);
  };

  const goToSlide = (idx) => {
    setIsTransitioning(true);
    setActiveIndex(idx);
  };

  const activeDotIndex = activeIndex % items.length;

  return (
    <div className={`m-carousel-wrapper ${className}`}>
      {/* Mobile/Tablet view: Autoplay Carousel with seamless wrap-around */}
      <div
        className="m-carousel-mobile"
        onTouchStart={handleTouchStart}
        onTouchMove={touchMove => handleTouchMove(touchMove)}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="m-carousel-track"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: isTransitioning ? "transform 500ms ease-out" : "none",
          }}
        >
          {displayItems.map((item, idx) => (
            <div key={idx} className="m-carousel-slide">
              {renderItem(item, idx % items.length)}
            </div>
          ))}
        </div>

        {/* Indicator dots */}
        {items.length > 1 && (
          <div className="m-carousel-dots">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`m-carousel-dot ${activeDotIndex === idx ? "active" : ""}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Desktop view: Standard grid */}
      <div className={`m-carousel-desktop ${gridClass}`}>
        {items.map((item, idx) => renderItem(item, idx))}
      </div>
    </div>
  );
};

export default MobileCarousel;
