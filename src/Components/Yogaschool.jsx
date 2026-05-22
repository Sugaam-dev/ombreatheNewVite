import React, {
  useEffect,
  useState,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";

import "../Styles/Yogaschool.css";
import "aos/dist/aos.css";
import Aos from "aos";

// =========================================
// SLIDER FIX — handles both default and
// module object exports across versions
// =========================================
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import _Slider from "react-slick";
const SliderComponent = _Slider.default || _Slider;

import school from "../images/logo/1.png";
import Teachings from "../images/logo/2.png";
import Wisdom from "../images/logo/3.png";
import Methodology from "../images/logo/4.png";

import logo from "../images/lg.png";
import firstimage from "../images/Websitefirstimage.jpg";
import SectionHeading from "./useFullComponent/SectionHeading";

const Yogaschool = () => {

  const [images, setImages] = useState({
    logo: null,
    yogaSchool: null,
  });

  const navigate = useNavigate();

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
  // SLIDER SETTINGS
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
          "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=2070&auto=format&fit=crop",
        title: "Birthplace Of Traditional Ashtanga Yoga",
        description:
          "Train in Mysuru, the yoga capital of South India, where authentic yogic discipline and ancient teachings continue to inspire practitioners worldwide.",
        color: "#2e8b57",
        link: "/mysuru-yoga-teacher-training",
      },
      {
        location: "Rishikesh",
        image:
          "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop",
        title: "Experience Yoga In Rishikesh",
        description:
          "Practice yoga by the sacred Ganges River surrounded by Himalayan energy in the spiritual heart of India.",
        color: "#4caf50",
        link: "/rishikesh-yoga-retreat",
      },
      {
        location: "Chiang Mai",
        image:
          "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2070&auto=format&fit=crop",
        title: "Mindful Retreats In Chiang Mai",
        description:
          "Blend yoga, meditation, mindfulness, and nature in the peaceful mountains and temples of Northern Thailand.",
        color: "#d97706",
        link: "/chiangmai-retreat",
      },
      {
        location: "Dharamshala",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
        title: "Yoga In The Himalayas",
        description:
          "Reconnect with yourself in the serene Himalayan atmosphere inspired by Tibetan spiritual culture and meditation.",
        color: "#6b7280",
        link: "/dharamshala-yoga-retreat",
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
            title="Best Yoga School In"
            highlight="India and Indonesia"
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
          {/* CONTENT SECTION — image LEFT, text RIGHT */}
          {/* ========================================= */}

          <div className="box">

            <div
              className="box1"
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-duration="600"
            >

              {images.yogaSchool && (
                <img
                  src={images.yogaSchool}
                  alt="Yoga School"
                  loading="lazy"
                />
              )}

            </div>

            <div
              className="box2"
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-duration="600"
            >

              <p>
                At Ombreathe, all courses are led by skilled and
                certified yoga teachers dedicated to delivering
                authentic, immersive, and Yoga
                Alliance-accredited programs.

                <br /><br />

                Whether you're beginning your journey or aiming
                to become a certified instructor, our
                comprehensive training helps you build a strong,
                mindful foundation in yoga.

                <br /><br />

                With serene campuses in Bali, Mysuru,
                Rishikesh, Chiang Mai, and Dharamshala,
                we offer an inspiring environment that nurtures
                self-growth, discipline, and spiritual
                connection.

                <br /><br />

                At Ombreathe, we guide you to develop your own
                teaching style, deepen your practice, and
                embrace a holistic yogic lifestyle.

                <br /><br />

                Our courses are designed to transform habits,
                enhance awareness, and lead you toward a life
                of balance, clarity, and inner peace.

                <br /><br />

                From in-person teacher training and retreats to
                online programs, Ombreathe offers a global
                platform to learn, grow, and share yoga with
                the world — all rooted in the spiritual essence
                of traditional Indian yoga.

                <br /><br />

                Join us at Ombreathe and step into your fullest
                potential as a student, seeker, or teacher of
                yoga.
              </p>

            </div>

          </div>

          {/* ========================================= */}
          {/* FEATURES — full width below both columns */}
          {/* ========================================= */}

          <div className="boxcontent">

            {features.map((feature, index) => (

              <div
                key={index}
                className="item1"
                data-aos="zoom-in"
                data-aos-delay={feature.delay}
                data-aos-offset="30"
                data-aos-duration="500"
                style={{ "--accent": feature.accent }}
              >

                <div
                  className="itemlogo"
                 
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    loading="lazy"
                  />
                </div>

                <div className="item2">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </>
  );
};

export default React.memo(Yogaschool);