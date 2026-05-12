import React, { useState, useEffect, useCallback } from 'react';
import './Styles/Experience.css';

// Local Bali Images
import baliExperience1 from '../../images/Gallery/8.jpg';
import baliExperience2 from '../../images/Gallery/9.jpg';
import baliExperience3 from '../../images/Gallery/11.jpg';
// import baliExperience4 from '../../images/Gallery/8.jpg';
// import baliExperience5 from '../../images/Gallery/9.jpg';
// import baliExperience6 from '../../images/Gallery/11.jpg';
// import baliExperience7 from '../../images/Gallery/8.jpg';
// import baliExperience8 from '../../images/Gallery/9.jpg';
// import baliExperience9 from '../../images/Gallery/11.jpg';
// import baliExperience10 from '../../images/Gallery/8.jpg';
// import baliExperience11 from '../../images/Gallery/9.jpg';
// import baliExperience12 from '../../images/Gallery/11.jpg';
const locationsData = [
   {
    id: "bali",
    name: "Bali",
    subtitle: "Magic of Transformation in Paradise",
    description: "Sacred spaces carefully selected for their unique energy, natural beauty, and spiritual significance.",
    detailedDesc: "A unique place with preserved traditions and breathtaking landscapes that create the perfect environment for growth.",
    features: ["Sacred temple grounds", "Jungle waterfalls", "Zen garden spaces"],
    highlights: [
      { number: "1000+", label: "Sacred Temples" },
      { number: "365", label: "Days of Ceremony" }
    ],
    images: [
      { src: baliExperience1, title: "Natural Harmony", alt: "Bali nature" },
      { src: baliExperience2, title: "Collective Peace", alt: "Bali group" },
      { src: baliExperience3, title: "Sacred Connection", alt: "Bali spiritual" }
    ]
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    subtitle: "Yoga Capital of the World",
    description: "Nestled at the foothills of the Himalayas, Rishikesh offers a powerful vibration for traditional wisdom and inner silence.",
    detailedDesc: "The holy Ganges flows through this ancient land, where ashrams and mountains create a sanctuary for deep spiritual seekers.",
    features: ["Ganges River ceremonies", "Himalayan cave meditation", "Vedic philosophy"],
    highlights: [
      { number: "500+", label: "Daily Ashrams" },
      { number: "24/7", label: "Pure Energy" }
    ],
    images: [
      { src: baliExperience1, title: "Ganga Aarti", alt: "Rishikesh ceremony" },
      { src: baliExperience2, title: "Ashram Practice", alt: "Yoga in Rishikesh" },
      { src: baliExperience3, title: "Himalayan View", alt: "Mountains" }
    ]
  },
  {
    id: "mysore",
    name: "Mysore",
    subtitle: "The Cradle of Ashtanga Yoga",
    description: "Experience the discipline and heritage of traditional practice in the royal city of Mysore.",
    detailedDesc: "A city known for its majestic palaces and the world-renowned Pattabhi Jois Ashtanga Yoga Institute, fostering deep discipline.",
    features: ["Traditional Shala practice", "Sanskrit studies", "Ayurvedic lifestyle"],
    highlights: [
      { number: "100+", label: "Yoga Schools" },
      { number: "∞", label: "Discipline" }
    ],
    images: [
      { src: baliExperience1, title: "Palace Mornings", alt: "Mysore Palace" },
      { src: baliExperience2, title: "Ashtanga Flow", alt: "Yoga practice" },
      { src: baliExperience3, title: "Focused Mind", alt: "Meditation" }
    ]
  },
 
  {
    id: "dharamshala",
    name: "Dharamshala",
    subtitle: "Echoes of Wisdom in the Peaks",
    description: "The home of the Dalai Lama, where Tibetan culture meets the grandeur of the Dhauladhar mountains.",
    detailedDesc: "High-altitude serenity perfect for Buddhist philosophy studies and mindfulness amidst cedar forests.",
    features: ["Tibetan monasteries", "Mountain trekking", "Vipassana retreats"],
    highlights: [
      { number: "200+", label: "Retreat Centers" },
      { number: "4k m", label: "Peak Elevation" }
    ],
    images: [
      { src: baliExperience1, title: "Tibetan Soul", alt: "Monastery" },
      { src: baliExperience2, title: "Snow-capped Peaks", alt: "Himalayas" },
      { src: baliExperience3, title: "Forest Peace", alt: "Forest meditation" }
    ]
  },
  {
    id: "chiangmai",
    name: "Chiang Mai",
    subtitle: "Thailand's Spiritual Escape",
    description: "A blend of Lanna culture and lush jungle, Chiang Mai is a haven for gentle healing practices.",
    detailedDesc: "Known for golden temples and misty mountains, offering a slow pace of life perfect for restoration.",
    features: ["Golden Lanna temples", "Mindful tea rituals", "Jungle healing"],
    highlights: [
      { number: "300+", label: "Ancient Temples" },
      { number: "100%", label: "Organic Calm" }
    ],
    images: [
      { src: baliExperience1, title: "Temple Grace", alt: "Thai temple" },
      { src: baliExperience2, title: "Jungle Sanctuary", alt: "Thailand nature" },
      { src: baliExperience3, title: "Morning Zen", alt: "Meditation" }
    ]
  }
];

const Experience = () => {
  const [activeLocIndex, setActiveLocIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const activeLoc = locationsData[activeLocIndex];

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === activeLoc.images.length - 1 ? 0 : prev + 1));
  }, [activeLoc.images.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === 0 ? activeLoc.images.length - 1 : prev - 1));
  }, [activeLoc.images.length]);

  const handleLocationChange = (index) => {
    setActiveLocIndex(index);
    setCurrentSlide(0);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  return (
    <section className="bali-experience-section">
      <div className="container">
        
        {/* Navigation Tabs */}
        <div className="location-tabs-container mb-5">
          {locationsData.map((loc, index) => (
            <button 
              key={loc.id}
              className={`location-tab-btn ${activeLocIndex === index ? 'active' : ''}`}
              onClick={() => handleLocationChange(index)}
            >
              {loc.name}
            </button>
          ))}
        </div>

        <div className="text-center mb-5">
          <h2 className="bali-experience-title">{activeLoc.name} Experience</h2>
          <p className="bali-experience-subtitle">{activeLoc.subtitle}</p>
        </div>

        <div className="row align-items-center g-4">
          {/* Left Column */}
          <div className="col-lg-4 col-md-12">
            <div className="bali-experience-content">
              <div className="bali-experience-intro">
                <div className="d-flex align-items-start">
                  <div className="bali-experience-bullet"><span>◆</span></div>
                  <div>
                    <h3 className="bali-experience-content-title">Purposeful Sacred Spaces</h3>
                    <p className="bali-experience-description">{activeLoc.description}</p>
                  </div>
                </div>
              </div>
              <div className="bali-experience-features">
                {activeLoc.features.map((feature, idx) => (
                  <div className="bali-experience-feature" key={idx}>
                    <span className="bali-experience-feature-icon">✨</span>
                    <span className="bali-experience-feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div className="col-lg-5 col-md-12">
            <div 
              className="bali-experience-carousel-container"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="bali-experience-carousel">
                <button className="bali-carousel-arrow bali-carousel-arrow-prev" onClick={prevSlide}>‹</button>
                <div className="bali-carousel-image-wrapper">
                  <img 
                    src={activeLoc.images[currentSlide].src} 
                    alt={activeLoc.images[currentSlide].alt}
                    className="bali-experience-image"
                  />
                  <div className="bali-carousel-image-overlay">
                    <h4 className="bali-carousel-image-title">{activeLoc.images[currentSlide].title}</h4>
                  </div>
                </div>
                <button className="bali-carousel-arrow bali-carousel-arrow-next" onClick={nextSlide}>›</button>
              </div>
              <div className="bali-carousel-indicators">
                {activeLoc.images.map((_, i) => (
                  <button 
                    key={i} 
                    className={`bali-carousel-indicator ${i === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(i)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Updated with Stars & Spiritual Haven label) */}
          <div className="col-lg-3 col-md-12">
            <div className="bali-location-card">
              <div className="bali-location-header">
                <h4 className="bali-location-highlight">{activeLoc.name}</h4>
                <div className="bali-location-rating">
                  <span className="bali-rating-stars">★★★★★</span>
                  <span className="bali-rating-text">Spiritual Haven</span>
                </div>
              </div>
              <p className="bali-location-description">{activeLoc.detailedDesc}</p>
              <div className="bali-location-highlights">
                {activeLoc.highlights.map((item, i) => (
                  <div className="bali-highlight-item" key={i}>
                    <span className="bali-highlight-number">{item.number}</span>
                    <span className="bali-highlight-label">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="bali-experience-bg-element-1" aria-hidden="true"></div>
      <div className="bali-experience-bg-element-2" aria-hidden="true"></div>
    </section>
  );
};

export default Experience;