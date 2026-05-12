import React, { memo, useCallback } from "react";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppButton = ({ phone = "917483987568", message }) => {
  const handleClick = useCallback(() => {
    const defaultMsg =
      "Hello! I'm interested in learning more about your yoga programs.";
    const text = encodeURIComponent(message || defaultMsg);
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, "_blank");
  }, [phone, message]);

  return (
    <>
      <button
        type="button"
        className="wa-wave-btn"
        onClick={handleClick}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="wa-wave-circle wa-wave-circle-1" />
        <span className="wa-wave-circle wa-wave-circle-2" />
        <span className="wa-wave-circle wa-wave-circle-3" />
        <span className="wa-wave-core">
          <FaWhatsapp />
        </span>
      </button>

      <style>{`
        .wa-wave-btn {
          position: fixed;
          bottom: 20px;
          left: 20px;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          padding: 0;
          border: none;
          background: transparent;
          cursor: pointer;
          z-index: 1100;
          display: flex;
          align-items: center;
          justify-content: center;
          outline: none;
          animation: wa-float 3s ease-in-out infinite;
        }

        .wa-wave-core {
          position: relative;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25d366;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 28px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .wa-wave-btn:hover .wa-wave-core {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 14px 30px rgba(37, 211, 102, 0.6);
          background: #128c7e;
        }

        .wa-wave-circle {
          position: absolute;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 2px solid rgba(37, 211, 102, 0.6);
          box-sizing: border-box;
          opacity: 0;
          animation: wa-wave-pulse 2.4s infinite ease-out;
        }

        .wa-wave-circle-1 {
          animation-delay: 0s;
        }

        .wa-wave-circle-2 {
          animation-delay: 0.6s;
        }

        .wa-wave-circle-3 {
          animation-delay: 1.2s;
        }

        @keyframes wa-wave-pulse {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          70% {
            transform: scale(1.9);
            opacity: 0;
          }
          100% {
            transform: scale(2.1);
            opacity: 0;
          }
        }

        @keyframes wa-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @media (max-width: 768px) {
          .wa-wave-btn {
            bottom: 15px;
            left: 15px;
            width: 56px;
            height: 56px;
          }

          .wa-wave-core {
            width: 42px;
            height: 42px;
            font-size: 20px;
          }

          .wa-wave-circle {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </>
  );
};

export default memo(WhatsAppButton);
