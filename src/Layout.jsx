// Layout.jsx

import React, { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Components/Header/Navbar";
import ScrollToTop from "./Components/useFullComponent/ScrollToTop";

// IMPORTANT:
// Convert logo to WebP if possible
import logo from "./images/omBreatheLogo.png";

// ==========================================
// LAZY LOADED COMPONENTS
// ==========================================
const Footer = lazy(() => import("./Components/Footer/Footer"));

const WhatsAppButton = lazy(() =>
  import("./Components/WhatsAppButton")
);

const DiscountPopup = lazy(() =>
  import("./Components/useFullComponent/DiscountPopup")
);

function Layout() {
  return (
    <div className="layout-wrapper">
      {/* ==========================================
          BACKGROUND LOGO
      ========================================== */}

      <img
        src={logo}
        alt="Ombreathe Background Logo"
        className="background-logo"
        loading="lazy"
        decoding="async"
        width="500"
        height="320"
      />

      {/* ==========================================
          SCROLL TOP
      ========================================== */}

      <ScrollToTop />

      {/* ==========================================
          NAVBAR
      ========================================== */}

      <Navbar />

      {/* ==========================================
          MAIN CONTENT
      ========================================== */}

      <main className="main-layout">
        <Outlet />
      </main>

      {/* ==========================================
          LAZY COMPONENTS
      ========================================== */}

      <Suspense fallback={null}>
        <Footer />

        <WhatsAppButton
          phone="917483987568"
          message="Hello! I'd like to know more about your yoga programs."
        />

        <DiscountPopup />
      </Suspense>

      {/* ==========================================
          CSS
      ========================================== */}

      <style jsx="true">{`
        .layout-wrapper {
          position: relative;
          overflow-x: hidden;
          background: #ffffff;
          min-height: 100vh;
        }

        .main-layout {
          position: relative;
          z-index: 2;
          padding-top: 96px;
        }

        .background-logo {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(500px, 60vw);
          height: auto;
          opacity: 0.05;
          z-index: -1;
          pointer-events: none;
          user-select: none;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        /* ==========================================
           DESKTOP LARGE SCREEN
        ========================================== */

        @media (min-width: 1800px) {
          .main-layout {
            padding-top: 110px;
          }

          .background-logo {
            width: 550px;
          }
        }

        /* ==========================================
           TABLET
        ========================================== */

        @media (max-width: 991px) {
          .main-layout {
            padding-top: 0;
          }

          .background-logo {
            width: 70vw;
            opacity: 0.04;
          }
        }

        /* ==========================================
           MOBILE
        ========================================== */

        @media (max-width: 576px) {
          .background-logo {
            width: 82vw;
            opacity: 0.03;
          }
        }
      `}</style>
    </div>
  );
}

export default Layout;