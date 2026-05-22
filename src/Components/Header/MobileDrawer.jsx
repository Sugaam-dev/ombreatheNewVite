import React from "react";
import { Link } from "react-router-dom";

const MobileDrawer = ({
  isDrawerOpen,
  setIsDrawerOpen,
  handleLinkClick,
}) => {
  return (
    <>
      <div className={`mobile-side-drawer ${isDrawerOpen ? "open" : ""}`}>

        <Link to="/" onClick={() => handleLinkClick("home")}>Home</Link>
        <Link to="/about" onClick={() => handleLinkClick("about")}>About</Link>
        <Link to="/contact" onClick={() => handleLinkClick("contact")}>Contact</Link>

      </div>

      {isDrawerOpen && (
        <div className="drawer-overlay" onClick={() => setIsDrawerOpen(false)} />
      )}

      <style>{`
        .mobile-side-drawer {
          position: fixed;
          left: -100%;
          top: 0;
          width: 80%;
          height: 100vh;
          background: #fff;
          transition: 0.3s;
          z-index: 4000;
        }

        .mobile-side-drawer.open {
          left: 0;
        }

        .drawer-overlay {
          position: fixed;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          top: 0;
          left: 0;
        }
      `}</style>
    </>
  );
};

export default MobileDrawer;