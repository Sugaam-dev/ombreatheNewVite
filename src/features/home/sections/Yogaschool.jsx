import React, {
  useEffect,
  useState,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";

import "../../../styles/Yogaschool.css";
import "aos/dist/aos.css";
import Aos from "aos";

// =========================================
// SLIDER FIX — handles both default and
// module object exports across versions
// =========================================
import "../../../styles/slick/slick.css";
import "../../../styles/slick/slick-theme.css";
import _Slider from "react-slick";
const SliderComponent = _Slider.default || _Slider;

import school from "../../../images/logo/1.png";
import Teachings from "../../../images/logo/2.png";
import Wisdom from "../../../images/logo/3.png";
import Methodology from "../../../images/logo/4.png";

import logo from "../../../images/lg.png";
import firstimage from "../../../images/Websitefirstimage.jpg";
import SectionHeading from "../../../components/shared/SectionHeading/SectionHeading";

const Yogaschool = () => {

  const [images, setImages] = useState({
    logo: null,
    yogaSchool: null,
  });

  const navigate = useNavigate();

  // =========================================
  // WINDOW WIDTH (for responsive inline styles)
  // =========================================

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowWidth >= 1024;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const isSmall = windowWidth < 640;
  const isLargeDesktop = windowWidth >= 1440;
  const isUltraWide = windowWidth >= 2560;

  // =========================================
  // AOS
  // =========================================

  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 100,
      easing: "ease-out",
      once: true,
    });
  }, []);

  // =========================================
  // LOAD IMAGES
  // =========================================

  useEffect(() => {
    setImages({
      logo: logo,
      yogaSchool: firstimage,
    });
  }, []);

  // =========================================
  // SLIDER SETTINGS (With Accessibility Fix)
  // =========================================

  const locationSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 3500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      pauseOnHover: true,
      swipeToSlide: true,
      adaptiveHeight: false,
      // 🛠️ ACCESSIBILITY FIX: Clear active focus from slides before they are hidden
      beforeChange: () => {
        if (
          document.activeElement &&
          (document.activeElement.closest(".slick-slide") || document.activeElement.closest(".modern-slide"))
        ) {
          document.activeElement.blur();
        }
      }
    }),
    []
  );

  // =========================================
  // SLIDER CONTENT
  // =========================================

  const slideContent = useMemo(
    () => [
      {
        location: "Bali",
        image:
          "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=2070&auto=format&fit=crop",
        title: "Discover Yoga Paradise In Bali",
        description:
          "Immerse yourself in tropical serenity, sacred temples, waterfalls, and transformative yoga retreats surrounded by Bali's spiritual energy.",
        color: "#ff914d",
        link: "/programs/bali",
      },
      {
        location: "Mysuru",
        image:
          "https://karnatakatourism.org/_next/image/?url=https%3A%2F%2Fweb-cms.karnatakatourism.org%2Fwp-content%2Fuploads%2F2025%2F06%2FMysuru-Palace-banner-1920_1100.jpg&w=3840&q=75",
        title: "Birthplace Of Traditional Ashtanga Yoga",
        description:
          "Train in Mysuru, the yoga capital of South India, where authentic yogic discipline and ancient teachings continue to inspire practitioners worldwide.",
        color: "#2e8b57",
        link: "/programs/mysuru",
      },
      {
        location: "Rishikesh",
        image:
          "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop",
        title: "Experience Yoga In Rishikesh",
        description:
          "Practice yoga by the sacred Ganges River surrounded by Himalayan energy in the spiritual heart of India.",
        color: "#4caf50",
        link: "/programs/rishikesh",
      },
      {
        location: "Chiang Mai",
        image:
          "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2070&auto=format&fit=crop",
        title: "Mindful Retreats In Chiang Mai",
        description:
          "Blend yoga, meditation, mindfulness, and nature in the peaceful mountains and temples of Northern Thailand.",
        color: "#d97706",
        link: "/programs/chiang-mai",
      },
      {
        location: "Dharamshala",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
        title: "Yoga In The Himalayas",
        description:
          "Reconnect with yourself in the serene Himalayan atmosphere inspired by Tibetan spiritual culture and meditation.",
        color: "#6b7280",
        link: "/programs/dharamshala",
      },
    ],
    []
  );

  // =========================================
  // FEATURES
  // =========================================

  const features = useMemo(
    () => [
      {
        icon: school,
        title: "No. 1 Yoga School",
        description: "Best Yoga School in Bali and Rishikesh, India",
        delay: 0,
        color: "#e8f5e9",
        hoverColor: "#c8e6c9",
        accent: "#4caf50",
      },
      {
        icon: Teachings,
        title: "Intense Yoga Teachings",
        description: "Comprehensive & immersive yoga courses",
        delay: 100,
        color: "#e3f2fd",
        hoverColor: "#bbdefb",
        accent: "#2196f3",
      },
      {
        icon: Wisdom,
        title: "Ancient Wisdom",
        description: "Yoga is the journey into the self",
        delay: 200,
        color: "#fce4ec",
        hoverColor: "#f8bbd0",
        accent: "#e91e63",
      },
      {
        icon: Methodology,
        title: "Traditional Methodology",
        description: "Natural Healing for body & mind",
        delay: 300,
        color: "#fff8e1",
        hoverColor: "#ffecb3",
        accent: "#ff9800",
      },
    ],
    []
  );

  return (
    <>
      <div className="yogaschool">

        <div className="yogaa">

          {/* ========================================= */}
          {/* HEADING */}
          {/* ========================================= */}

          <SectionHeading
            title="Leading Yoga Teacher Training School in"
            highlight="India & Bali"
            subtitle="Discover authentic yoga teacher training, retreats & holistic wellness programs with Ombreathe"
            highlightColor="#4a7c68"
            textColor="#1e1e1c"
          />

          {/* ========================================= */}
          {/* MODERN LOCATION SLIDER */}
          {/* ========================================= */}

          <div className="location-slider">

            <SliderComponent {...locationSettings}>

              {slideContent.map((slide, index) => (

                <div key={index} className="modern-slide">

                  <div
                    className="modern-slide-image"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                    }}
                  >

                    <div className="modern-overlay">

                      <div className="modern-location-badge">
                        {slide.location}
                      </div>

                      <div className="modern-slide-content">

                        <h3>{slide.title}</h3>

                        <p>{slide.description}</p>

                        <button
                          style={{ background: slide.color }}
                          onClick={() => navigate(slide.link)}
                        >
                          Explore More
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </SliderComponent>

          </div>

          {/* ========================================= */}
          {/* CONTENT SECTION — image LEFT, text + features RIGHT */}
          {/* ========================================= */}

          {/* <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
              gap: isDesktop ? "40px" : "24px",
              marginTop: "40px",
            }}
          > */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
              gap: isUltraWide ? "50px" : isDesktop ? "40px" : "24px",
              marginTop: "40px",
              alignItems: "stretch",
            }}
>

            {/* Image */}
            <div
              style={{ width: "100%", height: "100%" }}
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-duration="600"
            >

              {images.yogaSchool && (
                <img
                  src={images.yogaSchool}
                  alt="Yoga School"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "16px",
                    display: "block",
                  }}
                />
              )}

            </div>

            {/* Paragraph + Feature cards */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                // justifyContent: "space-between",
                gap: isSmall ? "16px" : "20px",
              }}
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-duration="600"
            >

              {/* Full original paragraph, smaller text to fit */}
              {/* <div
                style={{
                  color: "#1e1e1c",
                  fontSize: isSmall ? "12px" : isTablet ? "13px" : isLargeDesktop ? "18px" : "16px",
                  lineHeight: 1.5,
                  overflow: "auto",
                  
                }}
              > */}

              <div
                style={{
                  color: "#1e1e1c",
                  fontSize: "var(--body-text-size)",
                  lineHeight: isUltraWide ? 1.9 : 1.6,
                  overflow: "hidden",
                }}
              >
                <p style={{ margin: 0 }}>
                  At Ombreathe, all courses are led by skilled and
                  certified yoga teachers dedicated to delivering
                  authentic, immersive, and Yoga
                  Alliance-accredited programs.
                </p>

                <br />

                <p style={{ margin: 0 }}>
                  Whether you're beginning your journey or aiming
                  to become a certified instructor, our
                  comprehensive training helps you build a strong,
                  mindful foundation in yoga.
                </p>

                <br />

                <p style={{ margin: 0 }}>
                  With serene campuses in Bali, Mysuru,
                  Rishikesh, Chiang Mai, and Dharamshala,
                  we offer an inspiring environment that nurtures
                  self-growth, discipline, and spiritual
                  connection.
                </p>

                <br />

                <p style={{ margin: 0 }}>
                  At Ombreathe, we guide you to develop your own
                  teaching style, deepen your practice, and
                  embrace a holistic yogic lifestyle.
                </p>

                <br />

                <p style={{ margin: 0 }}>
                  Our courses are designed to transform habits,
                  enhance awareness, and lead you toward a life
                  of balance, clarity, and inner peace.
                </p>

                <br />

                <p style={{ margin: 0 }}>
                  From in-person teacher training and retreats to
                  online programs, Ombreathe offers a global
                  platform to learn, grow, and share yoga with
                  the world — all rooted in the spiritual essence
                  of traditional Indian yoga.
                </p>

                <br />

                <p style={{ margin: 0 }}>
                  Join us at Ombreathe and step into your fullest
                  potential as a student, seeker, or teacher of
                  yoga.
                </p>
              </div>

              {/* 2x2 feature cards — small, no colored background */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: isSmall ? "8px" : "12px",
                }}
              >

                {features.map((feature, index) => (

                  <div
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={feature.delay}
                    data-aos-offset="30"
                    data-aos-duration="500"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      gap: "4px",
                      borderRadius: "8px",
                      padding: isSmall ? "6px" : "10px",
                      border: "1px solid #e5e5e5",
                    }}
                  >

                    <div
                      style={{
                        width: isSmall ? "22px" : "28px",
                        height: isSmall ? "22px" : "28px",
                      }}
                    >
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    <h3
                      style={{
                        fontSize: "var(--card-tagline-size)",
                        fontWeight: 600,
                        color: "#1e1e1c",
                        margin: 0,
                      }}
                    >
                      {feature.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "var(--card-tagline-size)",
                        color: "#666",
                        lineHeight: 1.2,
                        margin: 0,
                      }}
                    >
                      {feature.description}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default React.memo(Yogaschool);