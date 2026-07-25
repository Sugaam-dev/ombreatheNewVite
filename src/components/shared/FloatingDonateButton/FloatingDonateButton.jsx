import React, { useState, useEffect } from "react";

const FloatingDonateButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Check if current page is donate page
  const isDonateePage = () => {
    const currentPath = window.location.pathname;
    const donatePaths = ['/donation'];
    return donatePaths.some(path => 
      currentPath.toLowerCase().includes(path.toLowerCase())
    );
  };

  // Show button after a delay, but only if not on donate page
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDonateePage()) {
        setIsVisible(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleDonate = () => {
    // Replace with your actual donate functionality
    console.log("Donate button clicked");
    window.open('/donation', '_blank');
  };

  // Hide button if on donate page or manually hidden
  if (!isVisible || isDonateePage()) return null;

  return (
    <>
      <style>
        {`
          /* Container positioning */
          .donate-container {
            position: fixed;
            top: 70%;
            right: 25px;
            transform: translateY(-50%);
            z-index: 9999;
            opacity: 0;
            animation: fadeInSlide 0.8s ease-out forwards;
          }

          /* Main donate button */
          .donate-button {
            position: relative;
            width: 60px;
            height: 60px;
            border: none;
            border-radius: 50%;
            background: linear-gradient(135deg, #2563eb, #7c3aed, #059669, #dc2626);
            background-size: 400% 400%;
            color: white;
            font-size: 24px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            animation: gradientBlink 3s ease-in-out infinite, gentlePulse 4s ease-in-out infinite;
            overflow: hidden;
            border: 2px solid rgba(255, 255, 255, 0.3);
          }

          .donate-button:hover {
            transform: scale(1.1);
            box-shadow: 0 12px 35px rgba(37, 99, 235, 0.5);
            animation-duration: 1.5s, 2s;
          }

          .donate-button:active {
            transform: scale(0.95);
          }

          /* Heart icon animation */
          .heart-icon {
            position: relative;
            z-index: 2;
            animation: heartBeat 2s ease-in-out infinite;
          }

          /* Animated ring around button */
          .pulse-ring {
            position: absolute;
            top: -3px;
            left: -3px;
            right: -3px;
            bottom: -3px;
            border: 3px solid transparent;
            border-radius: 50%;
            animation: pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite, ringColorBlink 3s ease-in-out infinite;
          }

          /* Tooltip */
          .tooltip {
            position: absolute;
            right: 75px;
            top: 50%;
            transform: translateY(-50%);
            background: linear-gradient(135deg, rgba(30, 58, 138, 0.95), rgba(88, 28, 135, 0.95));
            color: white;
            padding: 10px 15px;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 600;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          }

          .tooltip::after {
            content: '';
            position: absolute;
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
            border: 8px solid transparent;
            border-left-color: rgba(30, 58, 138, 0.95);
          }

          .donate-container:hover .tooltip {
            opacity: 1;
            visibility: visible;
            transform: translateY(-50%) translateX(-5px);
          }

          /* Close button */
          .close-button {
            position: absolute;
            top: -8px;
            right: -8px;
            width: 26px;
            height: 26px;
            border: none;
            border-radius: 50%;
            background: linear-gradient(135deg, #374151, #1f2937);
            color: white;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .close-button:hover {
            background: linear-gradient(135deg, #4b5563, #374151);
            transform: scale(1.1);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
          }

          /* Animations */
          @keyframes fadeInSlide {
            from {
              opacity: 0;
              transform: translateY(-50%) translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateY(-50%) translateX(0);
            }
          }

          @keyframes gentlePulse {
            0%, 100% { 
              box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
              transform: scale(1);
            }
            50% { 
              box-shadow: 0 12px 35px rgba(37, 99, 235, 0.5);
              transform: scale(1.02);
            }
          }

          @keyframes gradientBlink {
            0% {
              background-position: 0% 50%;
              filter: brightness(1);
            }
            25% {
              background-position: 100% 50%;
              filter: brightness(1.2);
            }
            50% {
              background-position: 50% 100%;
              filter: brightness(1.1);
            }
            75% {
              background-position: 0% 0%;
              filter: brightness(1.3);
            }
            100% {
              background-position: 0% 50%;
              filter: brightness(1);
            }
          }

          @keyframes ringColorBlink {
            0%, 100% {
              border-color: rgba(37, 99, 235, 0.6);
            }
            25% {
              border-color: rgba(124, 58, 237, 0.6);
            }
            50% {
              border-color: rgba(5, 150, 105, 0.6);
            }
            75% {
              border-color: rgba(220, 38, 38, 0.6);
            }
          }

          @keyframes heartBeat {
            0%, 100% { 
              transform: scale(1);
            }
            25% { 
              transform: scale(1.1);
            }
            50% { 
              transform: scale(1);
            }
          }

          @keyframes pulseRing {
            0% {
              transform: scale(1);
              opacity: 0.6;
            }
            100% {
              transform: scale(1.4);
              opacity: 0;
            }
          }

          /* Responsive design */
          @media (max-width: 768px) {
            .donate-container {
              right: 15px;
            }
            
            .donate-button {
              width: 50px;
              height: 50px;
              font-size: 20px;
            }
            
            .tooltip {
              right: 60px;
              font-size: 12px;
              padding: 6px 10px;
            }
          }

          @media (max-width: 480px) {
            .donate-container {
              right: 10px;
              top: 80%;
            }
            
            .tooltip {
              display: none; /* Hide tooltip on very small screens */
            }
          }
        `}
      </style>
      
      <div className="donate-container">
        {/* Tooltip */}
        <div className="tooltip">
          Support our mission ❤️
        </div>
        
        {/* Main Donate Button */}
        <button
          className="donate-button"
          onClick={handleDonate}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          title="Make a donation"
        >
          {/* Animated ring */}
          <div className="pulse-ring"></div>
          
          {/* Heart icon */}
          <span className="heart-icon">💝</span>
        </button>
        
        {/* Close Button */}
        <button
          className="close-button"
          onClick={() => setIsVisible(false)}
          title="Close donate button"
        >
          ×
        </button>
      </div>
    </>
  );
};

export default FloatingDonateButton;