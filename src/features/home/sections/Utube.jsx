import {
  useState,
  useRef,
  useEffect,
  useCallback,
  memo,
} from "react";
import SectionHeading from "../../../components/shared/SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

// ─── Inline styles ─────────────────────────────────────────────────────────
const styles = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

/* ==========================================
   SECTION (CENTER FIX)
========================================== */

.yt-section {
  --sage: #4a7c68;
  --sage-light: #7aab95;
  --sage-dark: #2d5244;
  --clay: #c4855a;
  --clay-light: #e8c5ac;
  --cream: #faf7f2;
  --warm-white: #f5f0e8;
  --ink: #1e1e1c;
  --ink-muted: #4a4a46;
  --ink-faint: #8a8a84;

  width: 100%;
  max-width: 1200px; /* ✅ laptop perfect */
  margin: 0 auto;

  font-family: 'DM Sans', sans-serif;
  padding: clamp(20px, 2vw, 40px) clamp(6px, 1vw, 10px);
  box-sizing: border-box;
}

/* ==========================================
   BODY
========================================== */

.yt-body {
  display: grid;
  grid-template-columns: minmax(320px, 1fr) minmax(320px, 1fr);

  gap: clamp(24px, 4vw, 60px);
  align-items: center;

  width: 100%;
  margin: 0 auto;
}

/* ==========================================
   TEXT
========================================== */

.yt-desc-label {
  font-size: clamp(10px, 0.8vw, 14px);
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--clay);
  margin-bottom: 12px;
}

.yt-desc-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(26px, 2.4vw, 48px);
  font-weight: 400;
  line-height: 1.15;
  color: var(--ink);
  margin-bottom: 16px;

}

.yt-desc-text {
  font-size: clamp(14px, 1vw, 18px);
  line-height: 1.8;
  color: var(--ink-muted);
  max-width: 65ch;
}

/* ==========================================
   VIDEO
========================================== */

.yt-video-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;

  border-radius: 20px;
  overflow: hidden;

  background: var(--sage-dark);

  box-shadow:
    0 10px 30px rgba(45,82,68,0.12),
    0 28px 70px rgba(45,82,68,0.12);
}

/* corners */
.yt-video-wrap::before,
.yt-video-wrap::after {
  content: '';
  position: absolute;
  width: 50px;
  height: 50px;
  border: 3px solid var(--clay);
}

.yt-video-wrap::before {
  top: -2px;
  right: -2px;
  border-left: none;
  border-bottom: none;
}

.yt-video-wrap::after {
  bottom: -2px;
  left: -2px;
  border-right: none;
  border-top: none;
}

/* ==========================================
   THUMBNAIL
========================================== */

.yt-thumb {
  position: absolute;
  inset: 0;

  background: url(/images/external/heroes/maxresdefault.jpg) center/cover;

  cursor: pointer;
  transition: 0.4s;
}

.yt-thumb:hover {
  transform: scale(1.03);
}

.yt-thumb-overlay {
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: linear-gradient(
    160deg,
    rgba(45,82,68,0.3),
    rgba(20,20,18,0.6)
  );
}

/* ==========================================
   PLAY BUTTON
========================================== */

.yt-play-btn {
  width: clamp(50px, 4vw, 80px);
  height: clamp(50px, 4vw, 80px);

  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  border: 2px solid rgba(255,255,255,0.6);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.25s;
}

.yt-play-btn:hover {
  background: white;
  transform: scale(1.08);
}

.yt-play-label {
  font-size: clamp(11px, 0.8vw, 16px);
  color: rgba(255,255,255,0.85);
  margin-top: 10px;
}

/* ==========================================
   FOOTER
========================================== */

.yt-footer-strip {
  margin-top: clamp(40px, 5vw, 80px);

  width: 100%;
  background: var(--sage-dark);

  padding: clamp(18px, 2vw, 30px);
  border-radius: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  gap: 20px;
}

.yt-footer-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(18px, 1.6vw, 32px);
  font-style: italic;
  color: var(--clay-light);
}

.yt-footer-cta {
  padding: 10px 22px;
  border-radius: 100px;

  border: 1.5px solid var(--clay-light);
  color: var(--clay-light);

  font-size: clamp(12px, 0.9vw, 14px);
  text-decoration: none;

  transition: 0.25s;
}

.yt-footer-cta:hover {
  background: var(--clay);
  color: #fff;
}

/* ==========================================
   LARGE SCREENS (1920px)
========================================== */

@media (min-width: 1600px) {
  .yt-section {
    max-width: 1400px;
  }

  .yt-desc-heading {
    font-size: 54px;
  }

  .yt-desc-text {
    font-size: 18px;
  }
}

/* ==========================================
   ULTRA WIDE (2560px)
========================================== */

@media (min-width: 2560px) {
  .yt-section {
    max-width: 1900px;
  }

  .yt-desc-heading {
    font-size: 62px;
  }

  .yt-desc-text {
    font-size: 20px;
  }

  .yt-footer-text {
    font-size: 36px;
  }
}

/* ==========================================
   TABLET
========================================== */

@media (max-width: 1023px) {
  .yt-body {
    grid-template-columns: 1fr;
  }
}

/* ==========================================
   MOBILE
========================================== */

@media (max-width: 768px) {
  .yt-section {
    padding: 30px 12px;
  }

  .yt-desc-heading {
    font-size: 28px;
  }

  .yt-desc-text {
    font-size: 14px;
  }

  .yt-footer-text {
    font-size: 22px;
  }

  .yt-footer-cta {
    width: 100%;
    text-align: center;
  }
}
`;

// ─── OptimizedYouTubePlayer ────────────────────────────────────────────────
const OptimizedYouTubePlayer = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "120px", threshold: 0.1 }
    );
    if (playerRef.current) obs.observe(playerRef.current);
    return () => obs.disconnect();
  }, []);

  const handleLoad = useCallback(() => setIsLoaded(true), []);

  return (
    <div ref={playerRef} className="yt-video-wrap">
      {!isVisible ? (
        <div className="yt-shimmer">Loading video…</div>
      ) : !showPlayer ? (
        <div className="yt-thumb" onClick={() => setShowPlayer(true)}>
          <div className="yt-thumb-overlay">
            <button
              className="yt-play-btn"
              aria-label="Play video"
              onClick={(e) => { e.stopPropagation(); setShowPlayer(true); }}
            >
              <svg className="yt-play-icon" viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <span className="yt-play-label">Watch our story</span>
          </div>
        </div>
      ) : (
        <iframe
          className="yt-iframe"
          src="https://www.youtube.com/embed/_xLrirWP-S0?si=agNMvNIB3f5wyI41&autoplay=1"
          title="Yoga School By Ombreathe"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
          onLoad={handleLoad}
        />
      )}
      {isLoaded && <div className="yt-hd-badge">HD</div>}
    </div>
  );
});

// ─── Main Component ────────────────────────────────────────────────────────
function Utube() {
  const description = `Welcome to Ombreathe Yoga Ashram — a leading yoga school with centers in Rishikesh, Bali, and McLeod Ganj. Our Yoga Teacher Training courses are Yoga Alliance accredited and offer a comprehensive, immersive experience for practitioners of all levels.

Guided by experienced certified teachers, we provide personalised attention to build a strong foundation in your practice. Nestled in serene, spiritual locations, our ashrams create the perfect environment for growth, healing, and transformation.`;

  return (
    <section className="yt-section">
      <style>{styles}</style>

      {/* ── Your SectionHeading ── */}
      <SectionHeading
        title="Yoga School By"
        highlight="Ombreathe"
        subtitle="Experience authentic yoga education, mindful living and transformational wellness guided by experienced teachers"
        highlightColor="#4a7c68"
        textColor="#1e1e1c"
      />

      {/* ── Divider ── */}
      {/* <div className="yt-divider" aria-hidden="true">
        <div className="yt-divider-line" />
        <div className="yt-divider-icon">✦</div>
        <div className="yt-divider-line" />
      </div> */}

      {/* ── Body: description + video ── */}
      <div className="yt-body">
        <div className="yt-animate yt-animate--d1">
          <p className="yt-desc-label">Our Story</p>
          <h2 className="yt-desc-heading">
            An immersive journey into authentic yoga education
          </h2>
          <p className="yt-desc-text">{description}</p>
        </div>

        <div className="yt-animate yt-animate--d2">
          <OptimizedYouTubePlayer />
        </div>
      </div>

      {/* ── Footer strip ── */}
      <div className="yt-footer-strip yt-animate yt-animate--d3">
        <p className="yt-footer-text">
          "Where breath meets movement, and stillness becomes home."
        </p>
        <Link to={"/contact"} className="yt-footer-cta">
          Explore Programs
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default memo(Utube);