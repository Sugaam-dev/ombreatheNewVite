import React, { useState, useEffect, useRef } from "react";
import { IoStar } from "react-icons/io5";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "../Styles/ratings.css";

function Ratings() {
  const testimonials = [
    {
      stars: 5,
      quote: "The Yoga TTC in Bali changed my life completely. The teachers, the food, the environment — everything was magical!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Jessica M.",
      country: "USA",
    },
    {
      stars: 5,
      quote: "Ayurveda Healing Retreat in Rishikesh gave me a new life. I feel lighter, healthier and mentally so calm.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Arjun P.",
      country: "Australia",
    },
    {
      stars: 5,
      quote: "A life-changing experience! I found my purpose and a beautiful community for life.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Maria K.",
      country: "Germany",
    },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [useTransition, setUseTransition] = useState(true);
  const [isMoving, setIsMoving] = useState(false);

  const timeoutRef = useRef(null);
  const autoPlayRef = useRef(null);
  const isSnappingRef = useRef(false);

  // Safe slide forward
  const slideNext = () => {
    if (isMoving || isSnappingRef.current) return;
    setIsMoving(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Safe slide backward
  const slidePrev = () => {
    if (isMoving || isSnappingRef.current) return;
    setIsMoving(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const resetAutoplay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      slideNext();
    }, 4000);
  };

  // Initialize Autoplay on Mount and handle tab visibility change
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      } else {
        resetAutoplay();
      }
    };

    resetAutoplay();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleNext = () => {
    resetAutoplay(); // Reset the 4s timer so it doesn't scroll immediately after manual interaction
    slideNext();
  };

  const handlePrev = () => {
    resetAutoplay(); // Reset the 4s timer
    slidePrev();
  };

  const handleTransitionEnd = (e) => {
    if (e && e.target !== e.currentTarget) return;
    if (isSnappingRef.current) return;

    if (currentIndex >= testimonials.length * 2) {
      isSnappingRef.current = true;
      setUseTransition(false);
      setCurrentIndex(currentIndex - testimonials.length);
    } else if (currentIndex < testimonials.length) {
      isSnappingRef.current = true;
      setUseTransition(false);
      setCurrentIndex(currentIndex + testimonials.length);
    } else {
      // Release lock for normal transitions
      setIsMoving(false);
    }
  };

  // Recover from snaps (disable transitions briefly)
  useEffect(() => {
    if (!useTransition) {
      timeoutRef.current = setTimeout(() => {
        setUseTransition(true);
        isSnappingRef.current = false;
        setIsMoving(false); // Release lock after snap completes
      }, 50);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [useTransition]);

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <div className="title-group">
          <span className="subtitle-tag">LOVED BY OUR COMMUNITY</span>
          <h2 className="main-title">What Our Students Say</h2>
        </div>
        
        <div className="navigation-buttons">
          <button className="nav-btn" onClick={handlePrev} aria-label="Previous slide">
            <FiChevronLeft />
          </button>
          <button className="nav-btn" onClick={handleNext} aria-label="Next slide">
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div className="testimonials-window">
        <div 
          className="testimonials-track"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(calc(-${currentIndex} * var(--card-width-fallback)))`,
            transition: useTransition ? "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)" : "none"
          }}
        >
          {duplicatedTestimonials.map((item, index) => (
            <div key={index} className="testimonial-card-wrapper">
              <div className="testimonial-card">
                <div className="star-rating">
                  {[...Array(item.stars)].map((_, i) => (
                    <IoStar key={i} className="star-icon" />
                  ))}
                </div>

                <p className="review-text">“{item.quote}”</p>

                <div className="reviewer-profile">
                  <img src={item.avatar} alt={item.name} className="reviewer-avatar" />
                  <div className="reviewer-details">
                    <h4 className="reviewer-name">{item.name}</h4>
                    <p className="reviewer-country">{item.country}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ratings;