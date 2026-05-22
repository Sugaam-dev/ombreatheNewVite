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
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);
  const autoPlayRef = useRef(null);

  const resetAutoplay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 4000);
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentIndex]);

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= testimonials.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - testimonials.length);
    } else if (currentIndex < testimonials.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + testimonials.length);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [isTransitioning]);

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
            transition: isTransitioning ? "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)" : "none"
          }}
        >
          {duplicatedTestimonials.map((item, index) => (
            <div key={index} className="testimonial-card-wrapper">
              {/* Single fully unified card item */}
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