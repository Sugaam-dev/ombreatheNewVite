import "../styles/whychoose.css";
import SectionHeading from '../../../components/shared/SectionHeading/SectionHeading';
import MobileCarousel from '../../yoga-retreats-programs/sections/MobileCarousel';

// Import react-slick
import "../../../styles/slick/slick.css";
import "../../../styles/slick/slick-theme.css";
import _Slider from "react-slick";
const SliderComponent = _Slider.default || _Slider;

import {
  Award,
  Laptop,
  GraduationCap,
  BadgeCheck,
  Sparkles,
  Leaf
} from "lucide-react";

const WhyChoose = () => {

  const credentials = [
    {
      num: "01",
      icon: <Award />,
      title: "10+ Years Of Experience",
      description:
        "With over 10 years of teaching experience, Ombreathe offers authentic training in Himalayan Yoga, Ashtanga, Vinyasa, Aerial Yoga, Hasta Yoga, and more.",
    },
    {
      num: "02",
      icon: <Laptop />,
      title: "Online Courses",
      description:
        "Learn authentic yoga from anywhere with expertly designed online courses covering meditation, pranayama, Hatha, Vinyasa and more.",
    },
    {
      num: "03",
      icon: <GraduationCap />,
      title: "6,000+ Teaching Hours",
      description:
        "Our experienced teachers have guided thousands of hours of yoga trainings, retreats, workshops and transformational programs.",
    },
    {
      num: "04",
      icon: <BadgeCheck />,
      title: "Yoga Alliance Certified",
      description:
        "All our teacher training programs are internationally recognized and certified by Yoga Alliance with global credibility.",
    },
    {
      num: "05",
      icon: <Sparkles />,
      title: "Special Workshops",
      description:
        "Corporate yoga, mindfulness, pranayama, sound healing and stress relief workshops designed for modern lifestyles.",
    },
    {
      num: "06",
      icon: <Leaf />,
      title: "Holistic Approach",
      description:
        "We integrate physical, emotional, spiritual and mental well-being through authentic yogic practices and mindful living.",
    },
  ];

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <div className="whychoose-header-wrap">
        <SectionHeading
          title="Why"
          highlight="Choose Us"
          subtitle="Transform your body, mind & soul through authentic yoga teachings"
          highlightColor="#4a7c68"
          textColor="#1e1e1c"
        />
      </div>

      {/* CREDENTIAL SECTION */}
      <div className="soulfit-credentials-section">
        <div className="soulfit-credentials-container">
          
          {/* Desktop Slider View (using react-slick) */}
          <div className="whychoose-desktop-slider">
            <SliderComponent {...slickSettings}>
              {credentials.map((credential, idx) => (
                <div className="slick-slide-wrapper" key={idx}>
                  <div className="soulfit-credential-card">
                    <span className="soulfit-card-number">{credential.num}</span>
                    
                    <div className="soulfit-icon-container">
                      {credential.icon}
                    </div>

                      <div className="soulfit-card-content">
                        <h3>{credential.title}</h3>
                        <p>{credential.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </SliderComponent>
          </div>

          {/* Mobile Swipeable View */}
          <div className="whychoose-mobile-carousel">
            <MobileCarousel
              items={credentials}
              gridClass="soulfit-credentials-grid"
              renderItem={(credential, index) => (
                <div
                  key={index}
                  className="soulfit-credential-card"
                >
                  <span className="soulfit-card-number">{credential.num}</span>

                  <div className="soulfit-icon-container">
                    {credential.icon}
                  </div>

                  <div className="soulfit-card-content">
                    <h3>{credential.title}</h3>
                    <p>{credential.description}</p>
                  </div>
                </div>
              )}
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default WhyChoose;