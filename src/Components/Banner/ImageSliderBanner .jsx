import React, { useState, useEffect, useCallback, useMemo } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import AutoTyping from "../AutoTyping";

const ImageSliderBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = useMemo(() => screenSize <= 768, [screenSize]);

  const images = useMemo(() => {
    if (isMobile) {
      return [
        import("../../images/mobile/shiv_Mobile.jpg"),
        import("../../images/mobile/TTC.jpg"),
        import("../../images/mobile/temple yoga.jpg"),
        import("../../images/mobile/Experience.jpg"),
        import("../../images/mobile/Certification.jpg"),
      ];
    }

    return [
      import("../../images/Gemini_Generated_Image.jpg"),
      import("../../images/2.jpg"),
      import("../../images/3.jpg"),
      import("../../images/4.jpg"),
      import("../../images/5.jpg"),
    ];
  }, [isMobile]);

  useEffect(() => {
    let cancelled = false;

    const loadImages = async () => {
      try {
        setIsLoading(true);

        const loadedImageSources = await Promise.all(images);

        if (cancelled) return;

        const imageMap = {};

        loadedImageSources.forEach((img, index) => {
          imageMap[index] = img.default;
        });

        setImagesLoaded(imageMap);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        setIsLoading(false);
      }
    };

    loadImages();

    return () => {
      cancelled = true;
    };
  }, [images]);

  const imageSources = useMemo(
    () => Object.values(imagesLoaded),
    [imagesLoaded]
  );

  const texts = useMemo(() => {
    if (screenSize <= 480) {
      return [
        "Holistic Yoga Training.",
        "Kundalini Yoga Courses.",
        "Retreats & Workshops.",
      ];
    }

    return [
      "Holistic Yoga Training Programs.",
      "Kundalini Yoga Courses.",
      "Peaceful Retreats & Workshops.",
    ];
  }, [screenSize]);

  const teacher = useCallback(() => {
    navigate("/programs");
  }, [navigate]);

  const retreats = useCallback(() => {
    navigate("/programs/retreat-7-adventure");
  }, [navigate]);

  useEffect(() => {
    if (!isAutoPlaying || imageSources.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === imageSources.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, imageSources.length]);

  const goToPrevious = useCallback(() => {
    setIsAutoPlaying(false);

    setCurrentIndex((prev) =>
      prev === 0 ? imageSources.length - 1 : prev - 1
    );

    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, [imageSources.length]);

  const goToNext = useCallback(() => {
    setIsAutoPlaying(false);

    setCurrentIndex((prev) =>
      prev === imageSources.length - 1 ? 0 : prev + 1
    );

    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, [imageSources.length]);

  const goToSlide = useCallback((index) => {
    setIsAutoPlaying(false);

    setCurrentIndex(index);

    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, []);

  if (isLoading) {
    return (
      <>
        <style>{`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>

        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(135deg,#0f172a 0%,#111827 50%,#000000 100%)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                border: "4px solid rgba(255,255,255,0.2)",
                borderTop: "4px solid #f59e0b",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
                margin: "0 auto 20px",
              }}
            />

            <p
              style={{
                color: "#fff",
                fontSize: "1.2rem",
                fontWeight: "500",
                letterSpacing: "1px",
              }}
            >
              Connecting Jeevatmaa To Shivatmaa
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        html,body{
          width:100%;
          overflow-x:hidden;
          font-family:'Poppins',sans-serif;
      
        }

        .slider-container{
          position:relative;
          width:100%;
          height:100vh;
          overflow:hidden;
          background:#000;
        }

        .slider-image-wrapper{
          position:absolute;
          inset:0;
          opacity:0;

          transition:
            opacity 1.5s ease,
            transform 7s ease;

          transform:scale(1);

          will-change:transform, opacity;
        }

        .slider-image-wrapper.active{
          opacity:1;
          z-index:2;
          transform:scale(1.04);
        }

        .slider-image{
          width:100%;
          height:100%;

          object-fit:cover;
          object-position:center center;

          display:block;

          user-select:none;
          pointer-events:none;
        }

        .slider-overlay{
          position:absolute;
          inset:0;

          background:
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.15),
              rgba(0,0,0,0.35),
              rgba(0,0,0,0.65)
            );

          z-index:3;
        }

        .slider-content{
          position:absolute;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);

          width:min(92%,1200px);

          text-align:center;

          z-index:10;
          color:#fff;
        }

        .slider-title{
          font-size:clamp(2rem,5vw,5rem);
          font-weight:700;
          line-height:1.1;

          margin-bottom:1rem;

          letter-spacing:1px;

          text-shadow:0 4px 20px rgba(0,0,0,0.45);
        }

        .type{
          display:flex;
          align-items:center;
          justify-content:center;

          min-height:90px;

          margin-bottom:2rem;
        }

        .type span{
          display:flex;
          align-items:center;
          justify-content:center;

          width:100%;
          min-height:90px;

          font-size:clamp(1.1rem,2.5vw,2.2rem);
          font-weight:500;

          color:#f6c177;

          text-shadow:0 2px 12px rgba(0,0,0,0.5);
        }

        .slider-buttons-container{
          display:flex;
          justify-content:center;
          align-items:center;

          gap:18px;

          flex-wrap:wrap;
        }

        .slider-button{
          border:none;
          cursor:pointer;

          padding:14px 30px;

          border-radius:999px;

          font-size:0.95rem;
          font-weight:600;
          letter-spacing:0.5px;

          color:#fff;

          transition:all .35s ease;

          backdrop-filter:blur(12px);

          box-shadow:
            0 8px 30px rgba(0,0,0,0.25);

          min-width:220px;
        }

        .teacher-training-btn{
          background:
            linear-gradient(
              135deg,
              rgba(255,140,66,.95),
              rgba(255,102,0,.95)
            );
        }

        .retreat-program-btn{
          background:
            linear-gradient(
              135deg,
              rgba(39,174,96,.95),
              rgba(0,128,128,.95)
            );
        }

        .slider-button:hover{
          transform:translateY(-4px) scale(1.03);

          box-shadow:
            0 14px 40px rgba(0,0,0,.35);
        }

        .nav-button{
          position:absolute;
          top:50%;
          transform:translateY(-50%);

          width:56px;
          height:56px;

          border:none;
          border-radius:50%;

          background:rgba(255,255,255,0.16);

          backdrop-filter:blur(12px);

          color:#fff;

          display:flex;
          align-items:center;
          justify-content:center;

          cursor:pointer;

          z-index:20;

          transition:all .3s ease;
        }

        .nav-button:hover{
          background:rgba(255,255,255,0.28);
          transform:translateY(-50%) scale(1.08);
        }

        .nav-button.prev{
          left:30px;
        }

        .nav-button.next{
          right:30px;
        }

        .dots-container{
          position:absolute;
          bottom:35px;
          left:50%;
          transform:translateX(-50%);

          display:flex;
          align-items:center;

          gap:10px;

          z-index:20;
        }

        .dot{
          width:10px;
          height:10px;

          border:none;
          border-radius:50%;

          background:rgba(255,255,255,.45);

          cursor:pointer;

          transition:all .35s ease;
        }

        .dot.active{
          width:30px;
          border-radius:999px;
          background:#fff;
        }

        .dot:hover{
          background:#fff;
        }

        /* =========================
           TABLET
        ========================= */

        @media(max-width:1024px){

          .slider-title{
            font-size:clamp(2rem,6vw,4rem);
          }

          .type span{
            font-size:clamp(1.1rem,3vw,2rem);
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media(max-width:768px){

          .slider-container{
            height:100svh;
          }

          .slider-content{
            width:94%;
          }

          .slider-title{
            font-size:clamp(1.8rem,7vw,3rem);
            line-height:1.2;

            margin-bottom:.8rem;
          }

          .type{
            min-height:70px;
            margin-bottom:1.5rem;
          }

          .type span{
            min-height:70px;

            font-size:clamp(1rem,4vw,1.4rem);

            line-height:1.4;

            padding:0 10px;
          }

          .slider-buttons-container{
            gap:12px;
          }

          .slider-button{
            min-width:auto;
            width:auto;

            padding:11px 20px;

            font-size:.8rem;

            border-radius:40px;
          }

          .nav-button{
            display:none;
          }

          .dots-container{
            bottom:24px;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media(max-width:480px){

          .slider-title{
            font-size:1.9rem;
          }

          .slider-button{
            font-size:.75rem;
            padding:10px 18px;
          }

          .type span{
            font-size:1rem;
          }
        }
      `}</style>

      <div className="slider-container">
        {imageSources.map((image, index) => (
          <div
            key={index}
            className={`slider-image-wrapper ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img
              src={image}
              alt={`Yoga Slide ${index + 1}`}
              className="slider-image"
              loading={index === 0 ? "eager" : "lazy"}
              draggable={false}
            />

            <div className="slider-overlay" />
          </div>
        ))}

        <div className="slider-content">
          <h1 className="slider-title">
            Welcome To The Ombreathe For
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
              Retreat Program
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
                index === currentIndex ? "active" : ""
              }`}
              type="button"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default React.memo(ImageSliderBanner);