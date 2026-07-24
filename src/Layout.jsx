import React, { Suspense, lazy, memo, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Components/Header/Navbar";
import ScrollToTop from "./Components/useFullComponent/ScrollToTop";

import logo from "./images/ombreath-new-logo.jpeg";

import "./Layout.css";

const Footer = lazy(() => import("./Components/Footer/Footer"));

const WhatsAppButton = lazy(() =>
  import("./Components/WhatsAppButton")
);

const DiscountPopup = lazy(() =>
  import("./Components/useFullComponent/DiscountPopup")
);

function Layout() {
  useEffect(() => {
    const preloadComponents = () => {
      import("./Components/Footer/Footer");
      import("./Components/WhatsAppButton");
      import("./Components/useFullComponent/DiscountPopup");
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(preloadComponents);
    } else {
      setTimeout(preloadComponents, 1000);
    }
  }, []);

  return (
    <div className="layout-wrapper">
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="background-logo"
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