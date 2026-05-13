import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LOCATION_DATA, PROGRAM_CATEGORIES } from "./LocationData";

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = `
 
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .llp {
    font-family: 'DM Sans', sans-serif;
    color: #1c1c1e;
    overflow-x: hidden;
    background: #f5f3ef;
  }

  /* ══════════════════════════════════════
     HERO — text overlaid on full image
  ══════════════════════════════════════ */
  .llp-hero {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .llp-hero__img {
    width: 100%;
    height: 100vh;
    display: block;
  }

  .llp-hero__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0,0,0,0.08)  0%,
      rgba(0,0,0,0.18) 35%,
      rgba(0,0,0,0.60) 68%,
      rgba(0,0,0,0.88) 100%
    );
    pointer-events: none;
  }

  .llp-hero__content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 60px 48px;
    z-index: 2;
  }

  .llp-hero__eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--accent-pale);
    margin-bottom: 14px;
  }

  .llp-hero__dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
    animation: blink 2.5s ease-in-out infinite;
    flex-shrink: 0;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.25; }
  }

  .llp-hero__headline {
    font-family: 'Playfair Display', serif;
    font-size: clamp(38px, 6vw, 80px);
    font-weight: 900;
    color: #fff;
    line-height: 1.04;
    letter-spacing: -1px;
    margin-bottom: 10px;
  }

  .llp-hero__sub {
    font-family: 'Playfair Display', serif;
    font-size: clamp(15px, 1.8vw, 20px);
    font-style: italic;
    font-weight: 400;
    color: rgba(255,255,255,0.65);
    margin-bottom: 28px;
  }

  .llp-hero__ctas {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  /* ── Buttons ── */
  .llp-btn {
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    font-weight: 600;
    padding: 13px 32px;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    transition: all 0.22s ease;
    letter-spacing: 0.2px;
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }

  .llp-btn--primary {
    background: var(--accent);
    color: #fff;
  }
  .llp-btn--primary:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(0,0,0,0.28);
  }

  .llp-btn--ghost {
    background: rgba(255,255,255,0.1);
    color: #fff;
    border: 1.5px solid rgba(255,255,255,0.32);
    backdrop-filter: blur(6px);
  }
  .llp-btn--ghost:hover {
    background: rgba(255,255,255,0.18);
    border-color: rgba(255,255,255,0.6);
  }

  .llp-btn--white {
    background: #fff;
    color: #1c1c1e;
    font-weight: 700;
  }
  .llp-btn--white:hover {
    box-shadow: 0 8px 22px rgba(0,0,0,0.22);
    transform: translateY(-2px);
  }

  .llp-btn--outline-dark {
    background: transparent;
    color: #fff;
    border: 1.5px solid rgba(255,255,255,0.38);
  }
  .llp-btn--outline-dark:hover {
    background: rgba(255,255,255,0.08);
  }

  /* ══════════════════════════════════════
     INTRO
  ══════════════════════════════════════ */
  .llp-intro {
    padding: 80px 60px;
    background: #ffffff;
  }

  .llp-intro__inner {
    max-width: 1160px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 72px;
    align-items: start;
  }

  .llp-eyebrow {
    display: block;
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 12px;
  }

  .llp-section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(26px, 3vw, 42px);
    font-weight: 700;
    line-height: 1.18;
    color: #1c1c1e;
    margin-bottom: 18px;
  }

  .llp-intro__desc {
    font-size: 15.5px;
    line-height: 1.82;
    color: #4e4e56;
    font-weight: 400;
  }

  .llp-intro__highlights {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .llp-highlight {
    background: #f5f3ef;
    border: 1px solid #e8e4dc;
    border-radius: 12px;
    padding: 18px 16px;
    display: flex;
    flex-direction: column;
    gap: 7px;
    transition: box-shadow 0.2s, transform 0.2s;
  }

  .llp-highlight:hover {
    box-shadow: 0 6px 20px rgba(0,0,0,0.07);
    transform: translateY(-2px);
  }

  .llp-highlight__icon { font-size: 24px; line-height: 1; }

  .llp-highlight__label {
    font-size: 13px;
    font-weight: 700;
    color: #1c1c1e;
  }

  .llp-highlight__desc {
    font-size: 12px;
    color: #80808c;
    line-height: 1.5;
  }

  /* ══════════════════════════════════════
     PROGRAMS
  ══════════════════════════════════════ */
  .llp-programs {
    padding: 80px 60px;
    background: #f5f3ef;
  }

  .llp-programs__inner {
    max-width: 1160px;
    margin: 0 auto;
  }

  .llp-programs__header {
    margin-bottom: 40px;
  }

  .llp-programs__lead {
    font-size: 15px;
    color: #5e5e68;
    line-height: 1.7;
    max-width: 520px;
    margin-top: 8px;
  }

  /* Tabs */
  .llp-tabs {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 12px;
  }

  .llp-tab {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    padding: 9px 18px;
    border-radius: 7px;
    border: 1.5px solid #dedad2;
    background: #fff;
    color: #5e5e68;
    cursor: pointer;
    transition: all 0.18s;
  }

  .llp-tab:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: #fff;
  }

  .llp-tab--active {
    background: var(--accent) !important;
    border-color: var(--accent) !important;
    color: #fff !important;
    box-shadow: 0 3px 12px rgba(0,0,0,0.18);
  }

  .llp-tab--active:hover {
    background: var(--accent) !important;
    color: #fff !important;
    filter: brightness(1.08);
  }

  .llp-cat-desc {
    font-size: 13.5px;
    color: #767680;
    font-style: italic;
    margin-bottom: 30px;
    padding-left: 12px;
    border-left: 2.5px solid var(--accent);
    line-height: 1.6;
  }

  /* Cards */
  .llp-programs__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(195px, 1fr));
    gap: 16px;
  }

  .prog-card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #e8e4dc;
    cursor: pointer;
    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s;
    display: flex;
    flex-direction: column;
  }

  .prog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 14px 36px rgba(0,0,0,0.1);
    border-color: var(--accent);
  }

  .prog-card__top {
    background: var(--accent);
    padding: 20px 18px 16px;
    position: relative;
  }

  .prog-card__hours {
    font-family: 'Playfair Display', serif;
    font-size: 50px;
    font-weight: 900;
    color: #fff;
    line-height: 1;
    display: block;
  }

  .prog-card__hours small {
    font-size: 18px;
    font-weight: 400;
    opacity: 0.6;
  }

  .prog-card__badge {
    position: absolute;
    top: 12px;
    right: 12px;
    font-size: 9.5px;
    font-weight: 700;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    background: rgba(255,255,255,0.18);
    color: #fff;
    border-radius: 4px;
    padding: 4px 8px;
  }

  .prog-card__body {
    padding: 16px 18px 12px;
    flex: 1;
  }

  .prog-card__title {
    font-family: 'Playfair Display', serif;
    font-size: 16px;
    font-weight: 700;
    color: #1c1c1e;
    margin-bottom: 8px;
    line-height: 1.3;
  }

  .prog-card__meta {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 11.5px;
    color: #9a9aa4;
    font-weight: 500;
    margin-bottom: 12px;
  }

  .prog-card__features {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .prog-card__features li {
    font-size: 12px;
    color: #5e5e68;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .prog-card__features li::before {
    content: '✓';
    color: var(--accent);
    font-weight: 700;
    font-size: 10.5px;
    flex-shrink: 0;
  }

  .prog-card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 18px;
    border-top: 1px solid #f0ece5;
    background: #fdfcfb;
  }

  .prog-card__price {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-weight: 700;
    color: var(--accent);
  }

  .prog-card__cta {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 700;
    background: var(--accent);
    color: #fff !important;
    border: none;
    border-radius: 5px;
    padding: 7px 14px;
    cursor: pointer;
    transition: filter 0.18s, transform 0.18s;
  }

  .prog-card__cta:hover {
    filter: brightness(1.12);
    transform: translateX(2px);
    color: #fff !important;
  }

  /* ══════════════════════════════════════
     CTA BANNER
  ══════════════════════════════════════ */
  .llp-cta {
    padding: 80px 60px;
  }

  .llp-cta__inner {
    max-width: 1160px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap;
  }

  .llp-cta__title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(24px, 3vw, 38px);
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    margin-bottom: 8px;
  }

  .llp-cta__sub {
    font-size: 14.5px;
    color: rgba(255,255,255,0.6);
    line-height: 1.65;
  }

  .llp-cta__btns {
    display: flex;
    gap: 12px;
    flex-shrink: 0;
    flex-wrap: wrap;
  }

  /* ══════════════════════════════════════
     RESPONSIVE
  ══════════════════════════════════════ */
  @media (max-width: 900px) {
    .llp-hero__content { padding: 0 28px 36px; }
    .llp-intro, .llp-programs, .llp-cta { padding: 60px 28px; }
    .llp-intro__inner { grid-template-columns: 1fr; gap: 40px; }
    .llp-cta__inner { flex-direction: column; align-items: flex-start; }
  }

  @media (max-width: 580px) {
    .llp-intro__highlights { grid-template-columns: 1fr 1fr; gap: 12px; }
    .llp-programs__grid { grid-template-columns: 1fr; }
    .llp-tabs { gap: 6px; }
    .llp-tab { font-size: 12px; padding: 8px 13px; }
  }

  @media (max-width: 380px) {
    .llp-programs__grid { grid-template-columns: 1fr; }
    .llp-intro__highlights { grid-template-columns: 1fr; }
  }
`;

// ─── ProgramCard ──────────────────────────────────────────────────────────────

const ProgramCard = ({ prog, location, accentColor, onNavigate }) => (
  <div
    className="prog-card"
    style={{ "--accent": accentColor }}
    onClick={() => onNavigate(`/programs/${location}/${prog.path}`)}
  >
    <div className="prog-card__top">
      <span className="prog-card__hours">
        {prog.hours === "N/A" ? "🌿" : prog.hours}
        {prog.hours !== "N/A" && <small>hr</small>}
      </span>
      <span className="prog-card__badge">{prog.badge}</span>
    </div>

    <div className="prog-card__body">
      <h4 className="prog-card__title">
        {prog.hours === "N/A" ? prog.title : `${prog.title}`}
      </h4>
      <div className="prog-card__meta">
        <span>⏱ {prog.duration}</span>
        <span>📍 {location}</span>
      </div>
      <ul className="prog-card__features">
        <li>{prog.certification} Certified</li>
        <li>Meals &amp; accommodation</li>
        <li>All materials included</li>
      </ul>
    </div>

    <div className="prog-card__footer">
      <span className="prog-card__price">{prog.price}</span>
      <button className="prog-card__cta">View →</button>
    </div>
  </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────

const LocationLandingPage = () => {
  const { location = "Bali" } = useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("multi-style");
  const programsRef = useRef(null);

  const data = LOCATION_DATA[location] || LOCATION_DATA["Bali"];
  const activePrograms = PROGRAM_CATEGORIES.find((c) => c.id === activeCategory);

  const scrollToPrograms = () =>
    programsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  useEffect(() => { window.scrollTo(0, 0); }, [location]);

  const accentPale = data.accentColor + "cc";

  return (
    <>
      <style>{styles}</style>

      <div className="llp" style={{ "--accent": data.accentColor, "--accent-pale": accentPale }}>

        {/* ══ HERO ══ */}
        <section className="llp-hero">
          <img
            src={data.heroImage}
            alt={`${location} yoga teacher training`}
            className="llp-hero__img"
          />
          <div className="llp-hero__overlay" />
          <div className="llp-hero__content">
            <p className="llp-hero__eyebrow">
              <span className="llp-hero__dot" />
              {data.tagline}
            </p>
            <h1 className="llp-hero__headline">{data.headline}</h1>
            <p className="llp-hero__sub">{data.subheadline}</p>
            <div className="llp-hero__ctas">
              <button className="llp-btn llp-btn--primary" onClick={scrollToPrograms}>
                Browse Programs
              </button>
              <button className="llp-btn llp-btn--ghost" onClick={() => navigate("/contact")}>
                Apply Now
              </button>
            </div>
          </div>
        </section>

        {/* ══ WHY THIS LOCATION ══ */}
        <section className="llp-intro">
          <div className="llp-intro__inner">
            <div>
              <span className="llp-eyebrow">Why {location}?</span>
              <h2 className="llp-section-title">{data.headline}</h2>
              <p className="llp-intro__desc">{data.description}</p>
            </div>
            <div className="llp-intro__highlights">
              {data.highlights.map((h) => (
                <div key={h.label} className="llp-highlight">
                  <span className="llp-highlight__icon">{h.icon}</span>
                  <span className="llp-highlight__label">{h.label}</span>
                  <span className="llp-highlight__desc">{h.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PROGRAMS ══ */}
        <section className="llp-programs" ref={programsRef}>
          <div className="llp-programs__inner">
            <div className="llp-programs__header">
              <span className="llp-eyebrow">What We Offer</span>
              <h2 className="llp-section-title">{location} Programs</h2>
              <p className="llp-programs__lead">
                Yoga Alliance certified · Meals &amp; stay included · Max 12 students per batch
              </p>
            </div>

            <div className="llp-tabs">
              {PROGRAM_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`llp-tab ${activeCategory === cat.id ? "llp-tab--active" : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>

            {activePrograms && (
              <p className="llp-cat-desc">{activePrograms.desc}</p>
            )}

            <div className="llp-programs__grid">
              {activePrograms?.programs.map((prog) => (
                <ProgramCard
                  key={prog.path}
                  prog={prog}
                  location={location}
                  accentColor={data.accentColor}
                  onNavigate={navigate}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section
          className="llp-cta"
          style={{
            background: `linear-gradient(125deg, ${data.accentColor} 0%, #111118 60%)`,
          }}
        >
          <div className="llp-cta__inner">
            <div>
              <h2 className="llp-cta__title">
                Ready to train in {location}?
              </h2>
              <p className="llp-cta__sub">
                Cohorts are capped at 12 — secure your spot today.
              </p>
            </div>
            <div className="llp-cta__btns">
              <button className="llp-btn llp-btn--white" onClick={() => navigate("/contact")}>
                Book Appointment
              </button>
              <button className="llp-btn llp-btn--outline-dark" onClick={scrollToPrograms}>
                View Programs
              </button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default LocationLandingPage;