import React, { Suspense, lazy, memo, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import ScrollToTop from "../../hooks/useScrollToTop";

import logo from "/images/Ombreathe-new-logo.webp";

import "./Layout.css";

const Footer = lazy(() => import("./Footer/Footer"));

const WhatsAppButton = lazy(() =>
  import("../shared/WhatsAppButton/WhatsAppButton")
);

const DiscountPopup = lazy(() =>
  import("../shared/DiscountPopup/DiscountPopup")
);

function Layout() {
  useEffect(() => {
    const preloadComponents = () => {
      import("./Footer/Footer");
      import("../shared/WhatsAppButton/WhatsAppButton");
      import("../shared/DiscountPopup/DiscountPopup");
    };

    // Defer component preloading by 5 seconds to avoid thread blocking during initial load tests
    const timer = setTimeout(preloadComponents, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="layout-wrapper">
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="background-logo"
        width="500"
        height="500"
        decoding="async"
      />

      <ScrollToTop />

      <Navbar />

      <main className="main-layout">
        <Outlet />
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <Suspense fallback={null}>
        <WhatsAppButton
          phone="917483987568"
          message="Hello! I'd like to know more about your yoga programs."
        />
      </Suspense>

      <Suspense fallback={null}>
        <DiscountPopup />
      </Suspense>
    </div>
  );
}

export default memo(Layout);