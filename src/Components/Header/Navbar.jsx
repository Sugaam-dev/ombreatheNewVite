import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/omBreatheLogo.png";
import "./Navbar.css";
import {
  LOCATIONS,
  PROGRAM_LINKS,
  RETREAT_LINKS,
  buildPath,
} from "../../ombYoga/data/locations";
import { OnlineDataMap } from "../../ombYoga/data/OnlineDataMap";

// ─────────────────────────────────────────────────────────────────────────────
// TTC sub-category section definitions (static — no data here)
// ─────────────────────────────────────────────────────────────────────────────
const TTC_SECTIONS = [
  { title: "Multi-Style YTTC", dataKey: "multiStyle", subCatKey: "multiStyle" },
  { title: "Kundalini YTTC", dataKey: "kundalini", subCatKey: "kundalini" },
  {
    title: "Short Courses",
    dataKey: "shortCourses",
    subCatKey: "shortCourses",
  },
  {
    title: "Specialization",
    dataKey: "specialization",
    subCatKey: "specialization",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [activeLocation, setActiveLocation] = useState(null);
  const [activeMobileCategory, setActiveMobileCategory] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  const [ttcView, setTtcView] = useState("main");
  const [selectedTtcSlug, setSelectedTtcSlug] = useState("");

  const [mobileAccordion, setMobileAccordion] = useState({
    programs: false,
    retreats: false,
  });
  const toggleMobileAccordion = (key) =>
    setMobileAccordion((prev) => ({ ...prev, [key]: !prev[key] }));

  const [openSubCat, setOpenSubCat] = useState({});
  const toggleSubCat = (key) =>
    setOpenSubCat((prev) => ({ ...prev, [key]: !prev[key] }));

  const location = useLocation();
  const timeoutRef = useRef(null);

  // Helper variables for routing contextual active checks
  const currentPathLower = location.pathname.toLowerCase();
  const isTtcPath = currentPathLower.startsWith("/programs") || currentPathLower.startsWith("/online");
  const isRetreatPath = currentPathLower.startsWith("/retreats");

  // isSubActive: strict equality against slug-based path — no encoding needed
  const isSubActive = (path) => location.pathname === path;

  // ── resize handler ──────────────────────────────────────────────────────
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 992;
      setIsDesktop(desktop);
      if (desktop) setIsDrawerOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ── active top-level link from URL ──────────────────────────────────────
  useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path === "/" || path === "") setActiveLink("home");
    else if (path.startsWith("/about")) setActiveLink("about");
    else if (path.startsWith("/contact")) setActiveLink("contact");
    else if (path.startsWith("/programs") || path.startsWith("/online"))
      setActiveLink("programs");
    else if (path.startsWith("/retreats")) setActiveLink("retreats");
  }, [location.pathname]);

  // ── sync nested state configuration on mount or change (Prevents refresh loss) ──
  useEffect(() => {
    const path = location.pathname.toLowerCase();
    const pathSegments = path.split("/").filter(Boolean);
    const isProgramsPage = path.startsWith("/programs") || path.startsWith("/online");

    if (isProgramsPage) {
      // Find if any of our known location slugs exist in the active URL parameters
      const matchedLocation = LOCATIONS.find((loc) =>
        pathSegments.includes(loc.slug.toLowerCase())
      );

      if (matchedLocation) {
        setSelectedTtcSlug(matchedLocation.slug);
        setTtcView("detail");
      } else {
        setTtcView("main");
        setSelectedTtcSlug("");
      }
    } else {
      setTtcView("main");
      setSelectedTtcSlug("");
    }
  }, [location.pathname]);

  // ── desktop dropdown helpers ────────────────────────────────────────────
  const openProgramsMenu = () => {
    if (isDesktop) {
      clearTimeout(timeoutRef.current);
      setDropdownOpen({ programs: true, retreats: false });
    }
  };
  const closeProgramsMenu = () => {
    if (isDesktop) {
      timeoutRef.current = setTimeout(
        () => setDropdownOpen((p) => ({ ...p, programs: false })),
        250,
      );
    }
  };
  const openRetreatsMenu = () => {
    if (isDesktop) {
      clearTimeout(timeoutRef.current);
      setDropdownOpen({ programs: false, retreats: true });
    }
  };

  const closeAllMenus = () => {
    if (isDesktop) {
      clearTimeout(timeoutRef.current);
      setDropdownOpen({ programs: false, retreats: false });
    }
  };
  const closeRetreatsMenu = () => {
    if (isDesktop) {
      timeoutRef.current = setTimeout(
        () => setDropdownOpen((p) => ({ ...p, retreats: false })),
        250
      );
    }
  };
  const handleToggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setDropdownOpen({});
    setIsDrawerOpen(false);
  };
  const toggleLocation = (e, loc) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveLocation(activeLocation === loc ? null : loc);
  };
  const toggleMobileCategory = (cat) =>
    setActiveMobileCategory(activeMobileCategory === cat ? null : cat);

  const handleTtcLocationSelection = (slug) => {
    setSelectedTtcSlug(slug);
    setTtcView("detail");
  };

  // ── desktop retreat links renderer ──────────────────────────────────────
  const renderRetreatLinks = (slug) => {
    const links = RETREAT_LINKS[slug] || [];
    if (links.length === 0)
      return (
        <span style={{ color: "#aaa", fontSize: "13px" }}>Coming Soon</span>
      );
    return links.map(({ path, label }) => {
      const fullPath = buildPath(slug, path, "retreats");
      return (
        <Link
          key={path}
          to={fullPath}
          className={isSubActive(fullPath) ? "sub-link-active" : ""}
          onClick={() => handleLinkClick("retreats")}
        >
          {label}
        </Link>
      );
    });
  };

  // ── mobile TTC sub-category renderer ────────────────────────────────────
  const renderMobileTTCSubCats = (slug) =>
    TTC_SECTIONS.map(({ title, dataKey, subCatKey }) => {
      const key = `${slug}-${subCatKey}`;
      const items = PROGRAM_LINKS[slug]?.[dataKey] || [];
      return (
        <div key={key}>
          <div
            className="mobile-sub-category-label"
            onClick={(e) => {
              e.stopPropagation();
              toggleSubCat(key);
            }}
          >
            {title}
            <span className="sub-cat-arrow">{openSubCat[key] ? "−" : "+"}</span>
          </div>

          <div className={`animated-collapse-grid ${openSubCat[key] ? "grid-open" : ""}`}>
            <div className="collapse-inner-content mobile-sub-cat-body">
              {items.length === 0 ? (
                <span
                  style={{
                    color: "#aaa",
                    fontSize: "13px",
                    display: "block",
                    padding: "6px 0",
                  }}
                >
                  Coming Soon
                </span>
              ) : (
                items.map(({ path, label }) => {
                  const fullPath = buildPath(slug, path, "programs");
                  return (
                    <Link
                      key={path}
                      to={fullPath}
                      className={
                        isSubActive(fullPath) ? "m-sub-active-text" : ""
                      }
                      onClick={() => handleLinkClick("programs")}
                    >
                      {label}
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>
      );
    });

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <>
      <nav
        className={`navbar premium-navbar ${isDesktop ? "fixed-top shadow-sm" : "sticky-top shadow-sm"}`}
      >
        <div className="container-fluid px-lg-5 d-flex align-items-center justify-content-between">
          <Link
            className="navbar-brand logo-link"
            to="/"
            onClick={() => handleLinkClick("home")}
          >
            <img src={logo} alt="Logo" className="logo-image" />
          </Link>

          {/* ════════════════════════════════════
              DESKTOP NAV
          ════════════════════════════════════ */}
          {isDesktop && (
            <ul className="navbar-nav mx-auto d-flex flex-row align-items-center nav-spacing">
              <li className="nav-item" onMouseEnter={closeAllMenus}>
                <Link
                  className={`nav-link premium-link ${activeLink === "home" ? "active" : ""}`}
                  to="/"
                  onClick={() => handleLinkClick("home")}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item" onMouseEnter={closeAllMenus}>
                <Link
                  className={`nav-link premium-link ${activeLink === "about" ? "active" : ""}`}
                  to="/about"
                  onClick={() => handleLinkClick("about")}
                >
                  About
                </Link>
              </li>

              {/* PROGRAMS ─────────────────────── */}
              <li
                className="nav-item mega-static"
                onMouseEnter={openProgramsMenu}
                onMouseLeave={closeProgramsMenu}
              >
                <Link
                  className={`nav-link premium-link ${activeLink === "programs" ? "active" : ""}`}
                  to="#"
                >
                  Programs{" "}
                  <span
                    className={`arrow-icon ${dropdownOpen.programs ? "rotated" : ""}`}
                  >
                    ▼
                  </span>
                </Link>

                {dropdownOpen.programs && (
                  <div
                    className="bridge-area"
                    onMouseEnter={openProgramsMenu}
                  />
                )}

                <div
                  className={`mega-panel shadow-lg ${dropdownOpen.programs ? "show" : ""}`}
                  onMouseEnter={openProgramsMenu}
                  onMouseLeave={closeProgramsMenu}
                >
                  <div className="container-fluid px-lg-5 mega-panel-sliding-container">

                    {/* View Wrapper 1: Programs Main Menu Screen */}
                    <div className={`sliding-view-pane ${ttcView === "main" ? "pane-active-left" : "pane-hidden-left"}`}>
                      <div className="row py-4">
                        {/* TTC locations — driven by LOCATIONS array */}
                        <div className="col-lg-4 mega-column no-border">
                          <h6 className="column-title">
                            TTC (TEACHER TRAINING)
                          </h6>
                          {LOCATIONS.map(({ slug, label }) => (
                            <div
                              key={slug}
                              className={`loc-toggle ${isTtcPath && currentPathLower.split("/").includes(slug) ? "active-loc-text" : ""}`}
                              onClick={() => handleTtcLocationSelection(slug)}
                            >
                              <span>{label} TTC</span>
                              {/* <span className="symbol">→</span> */}
                            </div>
                          ))}
                        </div>

                        {/* Membership */}
                        <div className="col-lg-4 mega-column">
                          <h6 className="column-title">MEMBERSHIP PROGRAMS</h6>
                          {[
                            {
                              to: "/programs/shiv-shakti-sadhana",
                              label: "Shiv Shakti Sadhana",
                            },
                            {
                              to: "/programs/shakti-sadhana",
                              label: "Shakti Sadhana",
                            },
                            {
                              to: "/programs/sapta-rishi-sadhana",
                              label: "Sapta Rishi Sadhana",
                            },
                            {
                              to: "/programs/pashu-patayaa-sadhana",
                              label: "Pashu-Patayaa Sadhana",
                            },
                          ].map(({ to, label }) => (
                            <Link
                              key={to}
                              to={to}
                              className={
                                isSubActive(to) ? "sub-link-active" : ""
                              }
                              onClick={() => handleLinkClick("programs")}
                            >
                              {label}
                            </Link>
                          ))}
                        </div>

                        {/* Online */}
                        <div className="col-lg-4 mega-column">
                          <h6 className="column-title">ONLINE COURSES</h6>
                          {/* {[
                            { to: "/online/live", label: "Live Sessions" },
                            {
                              to: "/online/recorded",
                              label: "Recorded Classes",
                            },
                            {
                              to: "/online/workshops",
                              label: "Special Workshops",
                            },
                          ].map(({ to, label }) => (
                            <Link
                              key={to}
                              to={to}
                              className={
                                isSubActive(to) ? "sub-link-active" : ""
                              }
                              onClick={() => handleLinkClick("programs")}
                            >
                              {label}
                            </Link>
                          ))} */}
                          {Object.keys(OnlineDataMap).map((slug) => (
                            <Link
                              key={slug}
                              to={`/online/${slug}`}
                              className={
                                isSubActive(`/online/${slug}`) ? "sub-link-active" : ""
                              }
                              onClick={() => handleLinkClick("programs")}
                            >
                              {OnlineDataMap[slug].title || slug}
                            </Link>
                          ))}
                        </div>
                      </div>
                      </div>

                      {/* View Wrapper 2: TTC Inner Categories Screen */}
                      <div className={`sliding-view-pane ${ttcView === "detail" ? "pane-active-right" : "pane-hidden-right"}`}>
                        <div className="row py-4">
                          <div className="col-12 mb-4 d-flex align-items-center">
                            <button className="back-btn" onClick={() => setTtcView("main")}>
                              <span className="back-arrow-icon">←</span> Back to Programs
                            </button>
                            <h5 className="ms-4 mb-0 ttc-selected-title">
                              {
                                LOCATIONS.find((l) => l.slug === selectedTtcSlug)
                                  ?.label
                              }{" "}
                              Teacher Training
                            </h5>
                          </div>

                          {TTC_SECTIONS.map(({ title, dataKey }, idx) => (
                            <div
                              key={dataKey}
                              className={`col-lg-3 mega-column ${idx === 3 ? "no-border" : ""}`}
                            >
                              <h6 className="column-title">{title}</h6>
                              {(PROGRAM_LINKS[selectedTtcSlug]?.[dataKey] || [])
                                .length === 0 ? (
                                <span className="coming-soon-text">
                                  Coming Soon
                                </span>
                              ) : (
                                PROGRAM_LINKS[selectedTtcSlug][dataKey].map(
                                  ({ path, label }) => {
                                    const fullPath = buildPath(
                                      selectedTtcSlug,
                                      path,
                                      "programs"
                                    );
                                    return (
                                      <Link
                                        key={path}
                                        to={fullPath}
                                        className={
                                          isSubActive(fullPath)
                                            ? "sub-link-active"
                                            : ""
                                        }
                                        onClick={() =>
                                          handleLinkClick("programs")
                                        }
                                      >
                                        {label}
                                      </Link>
                                    );
                                  },
                                )
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
              </li>

              {/* RETREATS ─────────────────────── */}
              <li
                className="nav-item mega-static"
                onMouseEnter={openRetreatsMenu}
                onMouseLeave={closeRetreatsMenu}
              >
                <Link
                  className={`nav-link premium-link ${activeLink === "retreats" ? "active" : ""}`}
                  to="#"
                >
                  Retreats {" "}
                  <span
                    className={`arrow-icon ${dropdownOpen.retreats ? "rotated" : ""}`}
                  >
                    ▼
                  </span>
                </Link>

                {dropdownOpen.retreats && (
                  <div
                    className="bridge-area"
                    onMouseEnter={openRetreatsMenu}
                  />
                )}

                <div
                  className={`mega-panel shadow-lg ${dropdownOpen.retreats ? "show" : ""}`}
                  onMouseEnter={openRetreatsMenu}
                  onMouseLeave={closeRetreatsMenu}
                >
                  <div className="container-fluid px-lg-5">
                    <div className="row py-4">
                      {LOCATIONS.map(({ slug, label }, idx, arr) => (
                        <div
                          key={slug}
                          className={`col-lg mega-column ${idx === arr.length - 1 ? "no-border" : ""}`}
                        >
                          <h6 className={`column-title ${isRetreatPath && currentPathLower.split("/").includes(slug) ? "active-loc-text" : ""}`}>
                            {label.toUpperCase()} RETREAT
                          </h6>
                          {renderRetreatLinks(slug)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item" onMouseEnter={closeAllMenus}>
                <Link
                  className={`nav-link premium-link ${activeLink === "contact" ? "active" : ""}`}
                  to="/contact"
                  onClick={() => handleLinkClick("contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          
          )}

          <div className="d-flex align-items-center">
            {isDesktop && (
              <Link className="btn book-blue-btn" to="/contact">
                Book Appointment
              </Link>
            )}
            {!isDesktop && (
              <div
                className={`mobile-toggle-btn ${isDrawerOpen ? "open" : ""}`}
                onClick={handleToggleDrawer}
              >
                <span />
                <span />
                <span />
              </div>
            )}
          </div>
        </div>

        {/* ════════════════════════════════════
            MOBILE SIDE DRAWER
        ════════════════════════════════════ */}
        <div className={`mobile-side-drawer ${isDrawerOpen ? "open" : ""}`}>
          <div className="drawer-header">
            <img src={logo} alt="Logo" className="drawer-logo" />
          </div>

          <div className="drawer-body">
            <Link
              className={`drawer-link ${activeLink === "home" ? "mobile-active-text" : ""}`}
              to="/"
              onClick={() => handleLinkClick("home")}
            >
              Home
            </Link>
            <Link
              className={`drawer-link ${activeLink === "about" ? "mobile-active-text" : ""}`}
              to="/about"
              onClick={() => handleLinkClick("about")}
            >
              About
            </Link>

            {/* MOBILE PROGRAMS ACCORDION ─────── */}
            <div className="drawer-accordion">
              <div
                className={`drawer-link d-flex justify-content-between align-items-center ${activeLink === "programs" ? "mobile-active-text" : ""}`}
                onClick={() => toggleMobileAccordion("programs")}
              >
                <nav>Programs </nav>
                <span
                  className={`arrow-icon ${mobileAccordion.programs ? "rotated" : ""}`}
                >
                  ▼
                </span>
              </div>

              <div className={`animated-collapse-grid ${mobileAccordion.programs ? "grid-open" : ""}`}>
                <div className="collapse-inner-content drawer-sub-menu">
                  {/* Membership */}
                  <div className="drawer-loc-item">
                    <div
                      className="drawer-loc-header"
                      onClick={() => toggleMobileCategory("MEMBERSHIP")}
                    >
                      MEMBERSHIP PROGRAMS{" "}
                      <span>
                        {activeMobileCategory === "MEMBERSHIP" ? "−" : "+"}
                      </span>
                    </div>

                    <div className={`animated-collapse-grid ${activeMobileCategory === "MEMBERSHIP" ? "grid-open" : ""}`}>
                      <div className="collapse-inner-content drawer-loc-body">
                        {[
                          {
                            to: "/programs/shiv-shakti-sadhana",
                            label: "Shiv Shakti Sadhana",
                          },
                          {
                            to: "/programs/shakti-sadhana",
                            label: "Shakti Sadhana",
                          },
                          {
                            to: "/programs/sapta-rishi-sadhana",
                            label: "Sapta Rishi Sadhana",
                          },
                          {
                            to: "/programs/pashu-patayaa-sadhana",
                            label: "Pashu-Patayaa Sadhana",
                          },
                        ].map(({ to, label }) => (
                          <Link
                            key={to}
                            to={to}
                            className={isSubActive(to) ? "m-sub-active-text" : ""}
                            onClick={() => handleLinkClick("programs")}
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Online */}
                  <div className="drawer-loc-item">
                    <div
                      className="drawer-loc-header"
                      onClick={() => toggleMobileCategory("ONLINE")}
                    >
                      ONLINE COURSES{" "}
                      <span>
                        {activeMobileCategory === "ONLINE" ? "−" : "+"}
                      </span>
                    </div>

                    <div className={`animated-collapse-grid ${activeMobileCategory === "ONLINE" ? "grid-open" : ""}`}>
                      <div className="collapse-inner-content drawer-loc-body">
                        {[
                          { to: "/online/live", label: "Live Sessions" },
                          { to: "/online/recorded", label: "Recorded Classes" },
                          { to: "/online/workshops", label: "Special Workshops" },
                        ].map(({ to, label }) => (
                          <Link
                            key={to}
                            to={to}
                            className={isSubActive(to) ? "m-sub-active-text" : ""}
                            onClick={() => handleLinkClick("programs")}
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* TTC — driven by LOCATIONS array */}
                  <div className="drawer-loc-item">
                    <div
                      className="drawer-loc-header"
                      onClick={() => toggleMobileCategory("TTC")}
                    >
                      TTC TRAINING{" "}
                      <span>
                        {activeMobileCategory === "TTC" ? "−" : "+"}
                      </span>
                    </div>

                    <div className={`animated-collapse-grid ${activeMobileCategory === "TTC" ? "grid-open" : ""}`}>
                      <div className="collapse-inner-content drawer-loc-body">
                        {LOCATIONS.map(({ slug, label }) => (
                          <div key={slug} className="drawer-nested-loc mb-2">
                            <div
                              className={`drawer-loc-header nested ${isTtcPath && currentPathLower.split("/").includes(slug) ? "m-active-path-text" : ""}`}
                              onClick={(e) => toggleLocation(e, `m-ttc-${slug}`)}
                            >
                              {label} TTC{" "}
                              <span>
                                {activeLocation === `m-ttc-${slug}` ? "−" : "+"}
                              </span>
                            </div>

                            <div className={`animated-collapse-grid ${activeLocation === `m-ttc-${slug}` ? "grid-open" : ""}`}>
                              <div className="collapse-inner-content drawer-loc-body-nested">
                                {renderMobileTTCSubCats(slug)}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE RETREATS ACCORDION ──────── */}
            <div className="drawer-accordion">
              <div
                className={`drawer-link d-flex justify-content-between align-items-center ${activeLink === "retreats" ? "mobile-active-text" : ""}`}
                onClick={() => toggleMobileAccordion("retreats")}
              >
                <nav>Destination Retreats </nav>
                <span
                  className={`arrow-icon ${mobileAccordion.retreats ? "rotated" : ""}`}
                >
                  ▼
                </span>
              </div>

              <div className={`animated-collapse-grid ${mobileAccordion.retreats ? "grid-open" : ""}`}>
                <div className="collapse-inner-content drawer-sub-menu">
                  <div
                    className="drawer-loc-item"
                    style={{
                      color: "#007bff",
                      borderBottom: "1px solid #f0f0f0",
                      padding: "12px 0",
                      fontWeight: "700"
                    }}
                  >
                    RETREATS BY LOCATION
                  </div>

                  {LOCATIONS.map(({ slug, label }) => (
                    <div key={slug} className="drawer-nested-loc mb-2">
                      <div
                        className={`drawer-loc-header nested ${isRetreatPath && currentPathLower.split("/").includes(slug)
                            ? "m-active-path-text"
                            : ""
                          }`}
                        onClick={(e) => toggleLocation(e, `m-retreat-${slug}`)}
                      >
                        <span>{label} Retreat</span>
                        <span>
                          {activeLocation === `m-retreat-${slug}` ? "−" : "+"}
                        </span>
                      </div>

                      <div className={`animated-collapse-grid ${activeLocation === `m-retreat-${slug}` ? "grid-open" : ""}`}>
                        <div className="collapse-inner-content mobile-sub-cat-body">
                          {(RETREAT_LINKS[slug] || []).length === 0 ? (
                            <span
                              style={{
                                color: "#aaa",
                                fontSize: "13px",
                                padding: "8px 0",
                                display: "block",
                              }}
                            >
                              Coming Soon
                            </span>
                          ) : (
                            (RETREAT_LINKS[slug] || []).map(({ path, label }) => {
                              const fullPath = buildPath(slug, path, "retreats");
                              return (
                                <Link
                                  key={path}
                                  to={fullPath}
                                  className={
                                    isSubActive(fullPath)
                                      ? "m-sub-active-text"
                                      : ""
                                  }
                                  onClick={() => handleLinkClick("retreats")}
                                >
                                  {label}
                                </Link>
                              );
                            })
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link
              className={`drawer-link ${activeLink === "contact" ? "mobile-active-text" : ""}`}
              to="/contact"
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </Link>

            <div className="mt-5 mb-4">
              <Link
                className="btn book-blue-btn w-100"
                to="/contact"
                onClick={() => handleLinkClick("contact")}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        {isDrawerOpen && (
          <div
            className="drawer-overlay"
            onClick={() => setIsDrawerOpen(false)}
          />
        )}
      </nav>

      <style>{`
        .premium-navbar,
        .premium-link,
        .column-title,
        .book-blue-btn,
        .drawer-link,
        .loc-toggle,
        .drawer-loc-header,
        .back-btn,
        .coming-soon-text {
          color: #aaa;
          font-size: 13px;
          display: block;
          padding-top: 8px;
        }

        .ttc-selected-title {
          color: #111 !important;
          font-size: 18px !important;
          font-weight: 700 !important;
          letter-spacing: 0.5px;
          position: relative;
          padding-bottom: 6px;
          display: inline-block;
          vertical-align: middle;
        }

        .ttc-selected-title::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background-color: #ff9933; 
          border-radius: 2px;
          width: 100px;
        }

        .premium-navbar {
          background: #fff !important;
          padding: 0 !important;
          z-index: 2000;
        }
        .logo-image { height: 85px; }

        .sub-link-active    { color: #007bff !important; font-weight: 700 !important; }
        .active-loc-text    { color: #007bff !important; font-weight: 700 !important; }
        .mobile-active-text { color: #007bff !important; font-weight: 700 !important; }
        .m-sub-active-text  { color: #007bff !important; font-weight: 700 !important; }
        .m-active-path-text { color: #007bff !important; font-weight: 700 !important; }

        @media (min-width: 992px) {
          .nav-spacing { gap: 3.8rem; }
          .premium-link {
            color: #444 !important;
            font-weight: 500;
            font-size: 17.5px;
            position: relative;
            padding: 12px 0;
            transition: 0.3s;
          }
          .premium-link::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2.5px;
            background: #007bff;
            transition: 0.4s ease;
          }
          .premium-link:hover::after,
          .premium-link.active::after { width: 100%; left: 0; }
          .premium-link:hover { color: #007bff !important; }
          .mega-static { position: static !important; }
          
          .mega-panel {
            position: absolute;
            top: calc(100% + 10px); 
            left: 0;
            width: 100%;
            background: #fff;
            border-top: 1px solid #f3f3f3;
            padding: 30px 80px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.06);
            z-index: 3000;
            border-radius: 0 0 12px 12px;
            
            opacity: 0;
            visibility: hidden;
            transform: translateY(12px) scale(0.995);
            transition: opacity 0.35s cubic-bezier(0.25, 1, 0.5, 1), 
                        transform 0.35s cubic-bezier(0.25, 1, 0.5, 1), 
                        visibility 0.35s;
            display: block !important; 
            pointer-events: none;
          }
          
          .mega-panel.show { 
            opacity: 1; 
            visibility: visible; 
            transform: translateY(0) scale(1); 
            pointer-events: auto;
          }

          .mega-panel-sliding-container {
            position: relative;
            overflow: hidden;
            min-height: 290px;
            display: block;
          }

          .sliding-view-pane {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), 
                        opacity 0.45s cubic-bezier(0.25, 1, 0.5, 1), 
                        visibility 0.45s;
          }

          .pane-active-left {
            position: relative;
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
          }
          .pane-hidden-left {
            position: absolute;
            opacity: 0;
            visibility: hidden;
            transform: translateX(-30px);
          }

          .pane-active-right {
            position: relative;
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
          }
          .pane-hidden-right {
            position: absolute;
            opacity: 0;
            visibility: hidden;
            transform: translateX(30px);
          }
          
          .mega-column {
            border-right: 1px solid #f0f0f0;
            padding: 0 15px 0 20px;
            min-height: 230px;
          }
          .mega-column.no-border { border-right: none; }
          .column-title {
            color: #007bff;
            font-weight: 700;
            font-size: 14px;
            margin-bottom: 18px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .mega-column a, .loc-toggle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #555;
            text-decoration: none;
            padding: 8px 0;
            font-size: 15px;
            transition: color 0.25s ease, transform 0.25s ease;
            cursor: pointer;
          }
          .mega-column a:hover, .loc-toggle:hover { 
            color: #007bff; 
            transform: translateX(4px);
          }
          
          .back-btn {
            background: linear-gradient(135deg, #ff9933 0%, #ff6600 100%) !important;
            border: none !important;
            color: #fff !important;
            padding: 8px 22px;
            border-radius: 25px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(255, 102, 0, 0.35);
          }

          .back-btn:hover {
            transform: scale(1.03) !important;
            box-shadow: 0 6px 20px rgba(255, 102, 0, 0.5);
            background: linear-gradient(135deg, #ffaa44 0%, #ff5500 100%) !important;
          }

          .back-arrow-icon {
            transition: transform 0.25s ease;
            display: inline-block;
          }
          .back-btn:hover .back-arrow-icon {
            transform: translateX(-3px);
          }

          .bridge-area {
            position: absolute;
            bottom: -20px;
            left: 0;
            width: 100%;
            height: 30px;
            background: transparent;
            z-index: 10;
          }
        }

        .arrow-icon {
          display: inline-block;
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          font-size: 10px;
          margin-left: 6px;
        }
        .rotated { transform: rotate(180deg) !important; }
        .symbol { font-size: 16px; font-weight: 300; opacity: 0.7; }

        .book-blue-btn {
          background: linear-gradient(145deg, #16a34a, #0e8339 40%, #052e16);
          color: #fff !important;
          padding: 12px 32px !important;
          border-radius: 50px !important;
          font-weight: 600;
          font-size: 15px;
          animation: floatingGlow 3.5s infinite ease-in-out;
          transition: 0.4s;
          display: inline-block;
          text-decoration: none;
        }
        .book-blue-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 25px rgba(11, 78, 53, 0.4);
        }
        @keyframes floatingGlow {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-4px); }
        }

        /* Mobile Side Canvas Configuration */
        .mobile-side-drawer {
          position: fixed;
          top: 0;
          left: -100%;
          width: 85%;
          max-width: 320px;
          height: 100vh;
          background: #fff;
          z-index: 4000;
          transition: left 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }
        .mobile-side-drawer.open {
          left: 0;
          box-shadow: 10px 0 30px rgba(0,0,0,0.1);
        }
        .drawer-header { padding: 25px; border-bottom: 1px solid #eee; text-align: center; }
        .drawer-logo   { height: 60px; }
        .drawer-body   { padding: 20px; }
        .drawer-link {
          display: block;
          padding: 15px 0;
          font-size: 18px;
          color: #333;
          text-decoration: none;
          border-bottom: 1px solid #f9f9f9;
        }
        
        .animated-collapse-grid {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.32s cubic-bezier(0.25, 1, 0.5, 1);
          overflow: hidden;
        }
        .animated-collapse-grid.grid-open {
          grid-template-rows: 1fr;
        }
        .collapse-inner-content {
          min-height: 0;
        }
        
        .drawer-sub-menu {
          padding-left: 10px;
          padding-bottom: 5px;
        }
        .drawer-loc-item {
          overflow: hidden;
        }

        .drawer-loc-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 0;
          border-bottom: 1px solid #f3f3f3;
          cursor: pointer;
          font-size: 13px;
          font-weight: 700;
          color: #007bff;
          text-transform: uppercase;
        }
        .drawer-loc-header.nested {
          color: #555;
          font-weight: 500;
          font-size: 14px;
          text-transform: none;
          border-bottom: 1px dashed #eee;
        }
        
        .drawer-loc-body {
          padding-left: 10px;
          padding-top: 5px;
          padding-bottom: 5px;
        }
        .drawer-loc-body-nested {
          padding-left: 5px;
        }
        
        .drawer-loc-body a {
          display: block;
          padding: 8px 0;
          color: #666;
          font-size: 14.5px;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .mobile-sub-category-label {
          font-size: 12px;
          font-weight: 700;
          color: #007bff;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          padding: 12px 0 8px 0;
          border-bottom: 1px dashed #e8e8e8;
          margin-bottom: 2px;
          font-family: Caudex, serif;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          user-select: none;
        }
        .mobile-sub-category-label:hover { color: #0056cc; }
        .sub-cat-arrow { font-size: 14px; font-weight: 400; opacity: 0.8; }
        
        .mobile-sub-cat-body { 
          padding-left: 12px; 
          padding-top: 4px;
          padding-bottom: 4px; 
        }
        .mobile-sub-cat-body a {
          display: block;
          padding: 7px 0;
          color: #666;
          font-size: 13.5px;
          text-decoration: none;
        }
        
        .drawer-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          background: rgba(0,0,0,0.4);
          z-index: 3500;
          backdrop-filter: blur(3px);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.35s ease, visibility 0.35s;
        }
        .mobile-toggle-btn.open ~ .drawer-overlay,
        nav.navbar:has(.mobile-side-drawer.open) .drawer-overlay,
        .mobile-side-drawer.open ~ .drawer-overlay {
          opacity: 1;
          visibility: visible;
        }
        
        .mobile-toggle-btn {
          width: 30px; height: 20px;
          position: relative;
          cursor: pointer;
          z-index: 5000;
        }
        .mobile-toggle-btn span {
          display: block;
          position: absolute;
          height: 2.5px; width: 100%;
          background: #333;
          border-radius: 2px;
          transition: 0.25s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .mobile-toggle-btn span:nth-child(1) { top: 0; }
        .mobile-toggle-btn span:nth-child(2) { top: 9px; }
        .mobile-toggle-btn span:nth-child(3) { top: 18px; }
        .mobile-toggle-btn.open span:nth-child(1) { transform: rotate(45deg);  top: 9px; }
        .mobile-toggle-btn.open span:nth-child(2) { opacity: 0; }
        .mobile-toggle-btn.open span:nth-child(3) { transform: rotate(-45deg); top: 9px; }
      `}</style>
    </>
  );
};

export default Navbar;