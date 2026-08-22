

import { useState } from "react";

import SliderImport from "react-slick";

import { Link } from "react-router-dom";
import "../../../styles/ayurveda.css"; // Import the separate CSS file
import ayurveda from '../../../images/ayurveda.webp'
const EnhancedAyurveda = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  
  // Your original service data with navigation paths
  const services = [
    {
      image: "/images/general-medicine.png",
      title: "General Medicine",
      alt: "General Medicine Ayurveda Service",
      link: "/contact"
    },
    {
      image: "/images/physiotherapy-1.png",
      title: "Physiotherapy",
      alt: "Physiotherapy Ayurveda Service",
      link: "/contact"
    },
    {
      image: "/images/panchakarma.png",
      title: "Panchakarma",
      alt: "Panchakarma Ayurveda Treatment",
      link: "/contact"
    },
    {
      image: "/images/eye-unit.png",
      title: "Eye Unit",
      alt: "Eye Unit Ayurveda Treatment",
      link: "/contact"
    },
    {
      image: "/images/yoga.png",
      title: "Yoga",
      alt: "Yoga Ayurveda Practice",
      link: "/contact"
    },
    {
      image: "/images/ENT-Dental-Unit.png",
      title: "ENT & Dentistry",
      alt: "ENT and Dental Ayurveda Treatment",
      link: "/contact"
    }
  ];
const Slider = SliderImport.default || SliderImport;
  // Animation effects - only for desktop
  useEffect(() => {
    const handleAnimations = () => {
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile) {
        // On mobile, show everything immediately
        setImageLoaded(true);
        setContentVisible(true);
      } else {
        // On desktop, use animations
        const timer1 = setTimeout(() => setImageLoaded(true), 300);
        const timer2 = setTimeout(() => setContentVisible(true), 800);
        
        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
        };
      }
    };

    handleAnimations();
    
    // Handle resize
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageLoaded(true);
        setContentVisible(true);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // React Slick settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          variableWidth: false,
          adaptiveHeight: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          variableWidth: false,
          adaptiveHeight: true,
          dots: false
        }
      }
    ]
  };

  // Custom arrow components
  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="wellness-slider-btn wellness-prev-btn"
      onClick={onClick}
      type="button"
      aria-label="Previous slide"
      style={{ display: 'flex' }}
    >
      &#8249;
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      className="wellness-slider-btn wellness-next-btn"
      onClick={onClick}
      type="button"
      aria-label="Next slide"
      style={{ display: 'flex' }}
    >
      &#8250;
    </button>
  );

  return (
    <div className="wellness-main-container">
      {/* Left Image Section */}
      <div className={`wellness-left-image-section ${imageLoaded ? 'wellness-slide-in-left' : ''}`}>
        <img 
          src={ayurveda} 
          alt="Ayurveda healing and wellness" 
          className="wellness-left-image"
          width="800"
          height="533"
          onLoad={() => setImageLoaded(true)}
          style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
        />
      </div>
      
      {/* Right Content Section */}
      <div className={`wellness-right-content-section ${contentVisible ? 'wellness-slide-in-bottom' : ''}`}>
        <h2 className="wellness-sub-heading">Welcome to Ombreathe</h2>
        <h1 className="wellness-main-heading">Discover the Power of Ayurveda with Our Trusted Experts</h1>
        <p className="wellness-content-text">
          In our fast-paced world, finding balance and wellness can be challenging. 
          Ayurveda offers a timeless solution, focusing on harmony between body, mind, 
          and spirit. It's not just a way to treat illness; it's a way to live well, every day.
        </p>
        <p className="wellness-content-text">
          Ombreathe is dedicated to giving Ayurveda the platform it deserves. We connect 
          you with authentic Ayurvedic wisdom, practices, and remedies designed to nourish 
          your life.
        </p>
        <Link to="/contact" className="wellness-cta-button">
          Book Appointment
        </Link>
      </div>

      {/* Bottom Slider Section */}
      <div className="wellness-slider-section">
        <div className="wellness-slider-container">
          <h2 className="wellness-slider-heading">Our Ayurvedic Services</h2>
          
          <div className="slider-wrapper">
            <Slider 
              {...sliderSettings}
              prevArrow={<CustomPrevArrow />}
              nextArrow={<CustomNextArrow />}
            >
              {services.map((service, index) => (
                <div key={`service-${index}`} className="wellness-slide-item">
                  <Link 
                    to={service.link}
                    className="wellness-service-card"
                    role="button"
                    tabIndex={0}
                  >
                    <img 
                      src={service.image} 
                      alt={service.alt}
                      className="wellness-service-image"
                      loading="lazy"
                      style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        console.error(`Failed to load image: ${service.image}`);
                      }}
                    />
                    <h3 className="wellness-service-title">{service.title}</h3>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(EnhancedAyurveda);