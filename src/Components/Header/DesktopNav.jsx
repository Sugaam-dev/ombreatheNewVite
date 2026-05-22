import React from "react";
import { Link } from "react-router-dom";

const DesktopNav = ({
  activeLink,
  dropdownOpen,
  setDropdownOpen,
  handleLinkClick,
  timeoutRef,
  LOCATIONS,
  RETREAT_LINKS,
  buildPath,
}) => {

  const openProgramsMenu = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen({ programs: true });
  };

  const closeProgramsMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen({});
    }, 300);
  };

  return (
    <>
      <ul className="navbar-nav d-flex flex-row nav-spacing">

        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        <li onMouseEnter={openProgramsMenu} onMouseLeave={closeProgramsMenu}>
          <span>Programs ▼</span>

          <div className={`mega-panel ${dropdownOpen.programs ? "show" : ""}`}>
            <div className="row">
              <div className="col">
                <h6>Programs</h6>
                <Link to="/programs/shiv-shakti-sadhana">Shiv Shakti</Link>
              </div>
            </div>
          </div>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

      <style>{`
        .nav-spacing { gap: 40px; }

        .mega-panel {
          position: absolute;
          background: #fff;
          display: none;
          padding: 30px;
          width: 100%;
        }

        .mega-panel.show {
          display: block;
        }
      `}</style>
    </>
  );
};

export default DesktopNav;