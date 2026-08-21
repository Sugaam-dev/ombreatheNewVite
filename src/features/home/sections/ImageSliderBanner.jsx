// import React, {
//   useState,
//   useEffect,
//   useCallback,
//   useMemo,
// } from "react";
// import { IoChevronBack, IoChevronForward } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";
// import AutoTyping from "../../../components/shared/AutoTyping/AutoTyping";

// import "../styles/Banner.css";

// // Desktop Images
// import desktop1 from "../../../images/Ombreathe_Banner_1.webp";
// import desktop2 from "../../../images/Ombreathe_Banner_2.webp";
// import desktop3 from "../../../images/Ombreathe_Banner_3.webp";
// import desktop4 from "../../../images/Ombreathe_Banner_4.webp";
// import desktop5 from "../../../images/Ombreathe_Banner_5.webp";

// // Mobile Images
// import mobile1 from "../../../images/mobile/shiv_Mobile.jpg";
// import mobile2 from "../../../images/mobile/TTC.jpg";
// import mobile3 from "../../../images/mobile/temple yoga.jpg";
// import mobile4 from "../../../images/mobile/Experience.jpg";
// import mobile5 from "../../../images/mobile/Certification.jpg";

// const ImageSliderBanner = () => {
//   const navigate = useNavigate();

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [screenSize, setScreenSize] = useState(
//     window.innerWidth
//   );

//   // ==========================================
//   // RESPONSIVE SCREEN DETECTION
//   // ==========================================
//   useEffect(() => {
//     let timeout;

//     const handleResize = () => {
//       clearTimeout(timeout);

//       timeout = setTimeout(() => {
//         setScreenSize(window.innerWidth);
//       }, 150);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       clearTimeout(timeout);
//       window.removeEventListener(
//         "resize",
//         handleResize
//       );
//     };
//   }, []);

//   const isMobile = useMemo(
//     () => screenSize <= 768,
//     [screenSize]
//   );

//   // ==========================================
//   // IMAGES
//   // ==========================================
//   const imageSources = useMemo(() => {
//     return isMobile
//       ? [mobile1, mobile2, mobile3, mobile4, mobile5]
//       : [desktop1, desktop2, desktop3, desktop4, desktop5];
//   }, [isMobile]);

//   // ==========================================
//   // PRELOAD NEXT IMAGES
//   // ==========================================
//   useEffect(() => {
//     imageSources.slice(1).forEach((src) => {
//       const img = new Image();
//       img.src = src;
//     });
//   }, [imageSources]);

//   // ==========================================
//   // AUTO TYPING TEXT
//   // ==========================================
//   const texts = useMemo(() => {
//     return screenSize <= 480
//       ? [
//           "Holistic Yoga Training.",
//           "Kundalini Yoga Courses.",
//           "Retreats & Workshops.",
//         ]
//       : [
//           "Holistic Yoga Training Programs.",
//           "Kundalini Yoga Courses.",
//           "Peaceful Retreats & Workshops.",
//         ];
//   }, [screenSize]);

//   // ==========================================
//   // NAVIGATION
//   // ==========================================
//   const teacher = useCallback(() => {
//     navigate("/programs");
//   }, [navigate]);

//   const retreats = useCallback(() => {
//     navigate("/programs");
//   }, [navigate]);

//   // ==========================================
//   // AUTO PLAY
//   // ==========================================
//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) =>
//         prev === imageSources.length - 1
//           ? 0
//           : prev + 1
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, imageSources.length]);

//   // ==========================================
//   // CONTROLS
//   // ==========================================
//   const restartAutoplay = () => {
//     setIsAutoPlaying(false);

//     setTimeout(() => {
//       setIsAutoPlaying(true);
//     }, 5000);
//   };

//   const goToPrevious = useCallback(() => {
//     restartAutoplay();

//     setCurrentIndex((prev) =>
//       prev === 0
//         ? imageSources.length - 1
//         : prev - 1
//     );
//   }, [imageSources.length]);

//   const goToNext = useCallback(() => {
//     restartAutoplay();

//     setCurrentIndex((prev) =>
//       prev === imageSources.length - 1
//         ? 0
//         : prev + 1
//     );
//   }, [imageSources.length]);

//   const goToSlide = useCallback((index) => {
//     restartAutoplay();
//     setCurrentIndex(index);
//   }, []);

//   return (
//     <div className="slider-container">
//       {imageSources.map((image, index) => (
//         <div
//           key={index}
//           className={`slider-image-wrapper ${
//             index === currentIndex
//               ? "active"
//               : ""
//           }`}
//         >
//           <img
//             src={image}
//             alt={`Yoga Slide ${index + 1}`}
//             className="slider-image"
//             loading={
//               index === 0 ? "eager" : "lazy"
//             }
//             fetchPriority={
//               index === 0 ? "high" : "auto"
//             }
//             decoding="async"
//             draggable={false}
//           />

//           <div className="slider-overlay" />
//         </div>
//       ))}

//       <div className="slider-content">
//         <h1 className="slider-title">
//           Master Yogic Living Beyond
//           Certification with Ombreathe..
//         </h1>

//         <div className="type">
//           <span>
//             <AutoTyping
//               texts={texts}
//               speed={55}
//               delay={1800}
//             />
//           </span>
//         </div>

//         <div className="slider-buttons-container">
//           <button
//             className="slider-button teacher-training-btn"
//             onClick={teacher}
//             type="button"
//           >
//             Teacher Training Program
//           </button>

//           <button
//             className="slider-button retreat-program-btn"
//             onClick={retreats}
//             type="button"
//           >
//             Destination Retreats
//           </button>
//         </div>
//       </div>

//       {!isMobile && (
//         <>
//           <button
//             className="nav-button prev"
//             onClick={goToPrevious}
//             type="button"
//           >
//             <IoChevronBack size={28} />
//           </button>

//           <button
//             className="nav-button next"
//             onClick={goToNext}
//             type="button"
//           >
//             <IoChevronForward size={28} />
//           </button>
//         </>
//       )}

//       <div className="dots-container">
//         {imageSources.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`dot ${
//               index === currentIndex
//                 ? "active"
//                 : ""
//             }`}
//             type="button"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default React.memo(ImageSliderBanner);


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
import desktop1 from "../../../images/Ombreathe_Banner_1.webp";
import desktop2 from "../../../images/Ombreathe_Banner_2.webp";
import desktop3 from "../../../images/Ombreathe_Banner_3.webp";
import desktop4 from "../../../images/Ombreathe_Banner_4.webp";
import desktop5 from "../../../images/Ombreathe_Banner_5.webp";

// Mobile Images
import mobile1 from "../../../images/mobile/Ombreathe_1.webp";
import mobile2 from "../../../images/mobile/Ombreathe_2.webp";
import mobile3 from "../../../images/mobile/Ombreathe_3.webp";
import mobile4 from "../../../images/mobile/Ombreathe_4.webp";
import mobile5 from "../../../images/mobile/Ombreathe_5.webp";

// Mobile Small Images (450px wide)
import mobile1Small from "../../../images/mobile/Ombreathe_1_small.webp";
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

  const goToSlide = useCallback((index) => {
    restartAutoplay();
    setCurrentIndex(index);
  }, []);

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


// /* Reset and base styles */
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// html, body {
//   width: 100%;
//   overflow-x: hidden;
//   font-family: sans-serif;
// }
// .slider-container{
//           position:relative;
//           width:100%;
//           height:100vh;
//           overflow:hidden;
//           background:#000;
//         }

//         .slider-image-wrapper{
//           position:absolute;
//           inset:0;
//           opacity:0;

//           transition:
//             opacity 1.5s ease,
//             transform 7s ease;

//           transform:scale(1);

//           will-change:transform, opacity;
//         }

//         .slider-image-wrapper.active{
//           opacity:1;
//           z-index:2;
//           transform:scale(1.04);
//         }

//         .slider-image{
//           width:100%;
//           height:100%;

//           object-fit:cover;
//           object-position:center center;

//           display:block;

//           user-select:none;
//           pointer-events:none;
//         }

//         .slider-overlay{
//           position:absolute;
//           inset:0;

//           background:
//             linear-gradient(
//               to bottom,
//               rgba(0,0,0,0.15),
//               rgba(0,0,0,0.35),
//               rgba(0,0,0,0.65)
//             );

//           z-index:3;
//         }

//         .slider-content{
//           position:absolute;
//           top:50%;
//           left:50%;
//           transform:translate(-50%,-50%);

//           width:min(92%,1200px);

//           text-align:center;

//           z-index:10;
//           color:#fff;
//         }

//         .slider-title{
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-size:clamp(2rem,5vw,5rem);
//           font-weight:700;
//           line-height:1.1;

//           margin-bottom:1rem;

//           letter-spacing:1px;

//           text-shadow:0 4px 20px rgba(0,0,0,0.45);
//         }

//         .type{
//           display:flex;
//           align-items:center;
//           justify-content:center;

//           min-height:90px;

//           margin-bottom:2rem;
//         }

//         .type span{
//           display:flex;
//           align-items:center;
//           justify-content:center;

//           width:100%;
//           min-height:90px;

//           font-size:clamp(1.1rem,2.5vw,2.2rem);
//           font-weight:500;

//           color:#f6c177;

//           text-shadow:0 2px 12px rgba(0,0,0,0.5);
//         }

//         .slider-buttons-container{
//           display:flex;
//           justify-content:center;
//           align-items:center;

//           gap:18px;

//           flex-wrap:wrap;
//         }

//         .slider-button{
//           border:none;
//           cursor:pointer;

//           padding:14px 30px;

//           border-radius:999px;

//           font-size:0.95rem;
//           font-weight:600;
//           letter-spacing:0.5px;

//           color:#fff;

//           transition:all .35s ease;

//           backdrop-filter:blur(12px);

//           box-shadow:
//             0 8px 30px rgba(0,0,0,0.25);

//           min-width:220px;
//         }

//         .teacher-training-btn{
//           background:
//             linear-gradient(
//               135deg,
//               rgba(255,140,66,.95),
//               rgba(255,102,0,.95)
//             );
//         }

//         .retreat-program-btn{
        
           
//   background: linear-gradient(145deg, #16a34a, #0e8339 40%, #052e16);
//   color: #fff;

//         }

//         .slider-button:hover{
//           transform:translateY(-4px) scale(1.03);

//           box-shadow:
//             0 14px 40px rgba(0,0,0,.35);
//         }

//         .nav-button{
//           position:absolute;
//           top:50%;
//           transform:translateY(-50%);

//           width:56px;
//           height:56px;

//           border:none;
//           border-radius:50%;

//           background:rgba(255,255,255,0.16);

//           backdrop-filter:blur(12px);

//           color:#fff;

//           display:flex;
//           align-items:center;
//           justify-content:center;

//           cursor:pointer;

//           z-index:20;

//           transition:all .3s ease;
//         }

//         .nav-button:hover{
//           background:rgba(255,255,255,0.28);
//           transform:translateY(-50%) scale(1.08);
//         }

//         .nav-button.prev{
//           left:30px;
//         }

//         .nav-button.next{
//           right:30px;
//         }

//         .dots-container{
//           position:absolute;
//           bottom:35px;
//           left:50%;
//           transform:translateX(-50%);

//           display:flex;
//           align-items:center;

//           gap:10px;

//           z-index:20;
//         }

//         .dot{
//           width:10px;
//           height:10px;

//           border:none;
//           border-radius:50%;

//           background:rgba(255,255,255,.45);

//           cursor:pointer;

//           transition:all .35s ease;
//         }

//         .dot.active{
//           width:30px;
//           border-radius:999px;
//           background:#fff;
//         }

//         .dot:hover{
//           background:#fff;
//         }

//         /* =========================
//            TABLET
//         ========================= */

//         @media(max-width:1024px){

//           .slider-title{
//             font-size:clamp(2rem,6vw,4rem);
//           }

//           .type span{
//             font-size:clamp(1.1rem,3vw,2rem);
//           }
//         }

//         /* =========================
//            MOBILE
//         ========================= */

//         @media(max-width:768px){

//           .slider-container{
//             height:100svh;
//           }

//           .slider-content{
//             width:94%;
//           }

//           .slider-title{
//             font-size:clamp(1.8rem,7vw,3rem);
//             line-height:1.2;

//             margin-bottom:.8rem;
//           }

//           .type{
//             min-height:70px;
//             margin-bottom:1.5rem;
//           }

//           .type span{
//             min-height:70px;

//             font-size:clamp(1rem,4vw,1.4rem);

//             line-height:1.4;

//             padding:0 10px;
//           }

//           .slider-buttons-container{
//             gap:12px;
//           }

//           .slider-button{
//             min-width:auto;
//             width:auto;

//             padding:11px 20px;

//             font-size:.8rem;

//             border-radius:40px;
//           }

//           .nav-button{
//             display:none;
//           }

//           .dots-container{
//             bottom:24px;
//           }
//         }

//         /* =========================
//            SMALL MOBILE
//         ========================= */

//         @media(max-width:480px){

//           .slider-title{
//             font-size:1.9rem;
//           }

//           .slider-button{
//             font-size:.75rem;
//             padding:10px 18px;
//           }

//           .type span{
//             font-size:1rem;
//           }
//         }





