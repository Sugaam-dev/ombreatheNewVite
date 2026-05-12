import React, { useState, useEffect, useRef, memo } from "react";
import img1 from "../../images/Gallery/1.jpeg";

const DiscountPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTrigger, setShowTrigger] = useState(false);

  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const particlesRef = useRef([]);

  const WHATSAPP_NUMBER = "917483987568";

  const MESSAGE =
    "Hi! I'd like to claim the 20% discount for the Rishikesh 2026 retreat.";

  // =========================
  // OPEN POPUP
  // =========================
  useEffect(() => {
    const seen = sessionStorage.getItem("popupSeen");

    if (!seen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("popupSeen", "true");
      }, 2500);

      return () => clearTimeout(timer);
    } else {
      setShowTrigger(true);
    }
  }, []);

  // =========================
  // LIGHTWEIGHT CONFETTI
  // =========================
  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    const COLORS = ["#084d46", "#D4AF37", "#ffffff"];

    particlesRef.current = Array.from({ length: 18 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * -100,
      vx: (Math.random() - 0.5) * 1.5,
      vy: Math.random() * 2 + 1,
      size: Math.random() * 4 + 2,
      alpha: 1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.003;

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;

        ctx.beginPath();

        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        ctx.fill();

        if (p.alpha <= 0) {
          p.y = Math.random() * -50;
          p.alpha = 1;
        }
      });

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isOpen]);

  // =========================
  // HANDLERS
  // =========================
  const handleClose = () => {
    setIsOpen(false);
    setShowTrigger(true);
  };

  const handleClaimClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      MESSAGE
    )}`;

    window.open(url, "_blank");
  };

  return (
    <>
      {/* =========================
          STYLES
      ========================= */}
      <style>{`
        @keyframes popupFade {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999999;
          transition: opacity 0.3s ease;
        }

        .luxury-card {
          width: min(92%, 760px);
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          position: relative;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
          animation: popupFade 0.45s ease;
          will-change: transform, opacity;
        }

        .img-box {
          width: 50%;
          position: relative;
          overflow: hidden;
          background: #eee;
        }

        .img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: scale(1.01);
        }

        .content-box {
          width: 50%;
          padding: 34px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .premium-btn {
          background: #084d46;
          color: #fff;
          border: none;
          height: 54px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: transform 0.25s ease, opacity 0.25s ease;
          will-change: transform;
        }

        .premium-btn:hover {
          transform: translateY(-2px);
        }

        .premium-btn:active {
          transform: scale(0.98);
        }

        .close-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.95);
          cursor: pointer;
          font-size: 16px;
          font-weight: 700;
          color: #084d46;
          z-index: 50;
          box-shadow: 0 4px 10px rgba(0,0,0,0.12);
        }

        .trigger-badge {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #084d46;
          color: #D4AF37;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 99999;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(0,0,0,0.22);
          border: 2px solid #D4AF37;
          transition: transform 0.25s ease;
        }

        .trigger-badge:hover {
          transform: scale(1.08);
        }

        .offer-box {
          background: #f5faf9;
          border: 1px solid rgba(8,77,70,0.08);
          border-radius: 14px;
          padding: 14px;
          margin-bottom: 22px;
        }

        @media (max-width: 768px) {
          .luxury-card {
            flex-direction: column;
            width: 90%;
            max-height: 88vh;
          }

          .img-box {
            width: 100%;
            height: 220px;
          }

          .content-box {
            width: 100%;
            padding: 24px;
            text-align: center;
          }

          .title-text {
            font-size: 24px !important;
          }

          .desc-text {
            font-size: 13px !important;
          }
        }
      `}</style>

      {/* =========================
          FLOATING BADGE
      ========================= */}
      {showTrigger && !isOpen && (
        <div
          className="trigger-badge"
          onClick={() => setIsOpen(true)}
        >
          <span style={{ fontSize: "14px", fontWeight: "900" }}>
            20%
          </span>

          <span
            style={{
              fontSize: "7px",
              textTransform: "uppercase",
              fontWeight: "700",
              letterSpacing: "1px",
            }}
          >
            Off
          </span>
        </div>
      )}

      {/* =========================
          POPUP
      ========================= */}
      {isOpen && (
        <div className="popup-overlay" onClick={handleClose}>
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
            }}
          />

          <div
            className="luxury-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button className="close-btn" onClick={handleClose}>
              ✕
            </button>

            {/* IMAGE */}
            <div className="img-box">
              <img
                src={img1}
                alt="Rishikesh Retreat"
                loading="lazy"
                decoding="async"
                width="600"
                height="800"
              />
            </div>

            {/* CONTENT */}
            <div className="content-box">
              <div
                style={{
                  color: "#D4AF37",
                  fontSize: "11px",
                  fontWeight: "800",
                  letterSpacing: "2px",
                  marginBottom: "8px",
                }}
              >
                GIFT VOUCHER
              </div>

              <h2
                className="title-text"
                style={{
                  fontSize: "32px",
                  lineHeight: "1.1",
                  fontWeight: "900",
                  color: "#1a2a28",
                  marginBottom: "14px",
                }}
              >
                Pure <span style={{ color: "#084d46" }}>Serenity</span>
              </h2>

              <p
                className="desc-text"
                style={{
                  color: "#666",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  marginBottom: "22px",
                }}
              >
                Claim your exclusive 20% discount for the 2026
                Rishikesh retreat.
              </p>

              <div className="offer-box">
                <div
                  style={{
                    fontSize: "11px",
                    color: "#084d46",
                    fontWeight: "700",
                    marginBottom: "4px",
                  }}
                >
                  SAVINGS
                </div>

                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "900",
                    color: "#1a2a28",
                  }}
                >
                  20% DISCOUNT
                </div>
              </div>

              <button
                className="premium-btn"
                onClick={handleClaimClick}
              >
                CLAIM VIA WHATSAPP

                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.061 3.966L0 16l4.239-1.113a7.859 7.859 0 0 0 3.758.955h.001c4.367 0 7.926-3.558 7.93-7.93a7.898 7.898 0 0 0-2.322-5.586z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(DiscountPopup);