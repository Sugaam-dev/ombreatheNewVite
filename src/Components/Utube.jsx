import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  memo,
} from "react";
import SectionHeading from "./useFullComponent/SectionHeading";
import { Link } from "react-router-dom";

// ─── Inline styles ─────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  .yt-section {
    --sage:       #4a7c68;
    --sage-light: #7aab95;
    --sage-dark:  #2d5244;
    --clay:       #c4855a;
    --clay-light: #e8c5ac;
    --cream:      #faf7f2;
    --warm-white: #f5f0e8;
    --ink:        #1e1e1c;
    --ink-muted:  #4a4a46;
    --ink-faint:  #8a8a84;

    font-family: 'DM Sans', sans-serif;
    // background: var(--cream);
  }

  /* ── Divider ── */
  .yt-divider {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0 clamp(20px, 5vw, 80px);
    max-width: 1280px;
    margin: 0 auto;
  }
  .yt-divider-line { flex: 1; height: 1px; background: var(--clay-light); opacity: 0.5; }
  .yt-divider-icon { color: var(--clay); font-size: 16px; opacity: 0.7; }

  /* ── Body: description + video ── */
  .yt-body {
    display: grid;
    grid-template-columns: 5fr 7fr;
    gap: clamp(32px, 5vw, 72px);
    align-items: center;
    padding: clamp(36px, 5vw, 64px) clamp(20px, 5vw, 80px) 0;
    max-width: 1280px;
    margin: 0 auto;
  }
  @media (max-width: 860px) {
    .yt-body { grid-template-columns: 1fr; }
  }

  /* ── Description panel ── */
  .yt-desc-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--clay);
    margin-bottom: 14px;
  }
  .yt-desc-heading {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(22px, 2.6vw, 30px);
    font-weight: 400;
    line-height: 1.35;
    color: var(--ink);
    margin: 0 0 18px;
  }
  .yt-desc-text {
    font-size: 15px;
    line-height: 1.8;
    color: var(--ink-muted);
    white-space: pre-line;
  }

  /* ── Video panel ── */
  .yt-video-wrap {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    aspect-ratio: 16/9;
    background: var(--sage-dark);
    box-shadow:
      0 4px 20px rgba(45,82,68,0.15),
      0 24px 56px rgba(45,82,68,0.1);
  }
  .yt-video-wrap::before {
    content: '';
    position: absolute;
    top: -2px; right: -2px;
    width: 52px; height: 52px;
    border-top: 3px solid var(--clay);
    border-right: 3px solid var(--clay);
    border-radius: 0 18px 0 0;
    z-index: 10;
    pointer-events: none;
  }
  .yt-video-wrap::after {
    content: '';
    position: absolute;
    bottom: -2px; left: -2px;
    width: 52px; height: 52px;
    border-bottom: 3px solid var(--clay);
    border-left: 3px solid var(--clay);
    border-radius: 0 0 0 18px;
    z-index: 10;
    pointer-events: none;
  }

  .yt-thumb {
    position: absolute; inset: 0;
    background-image: url(https://img.youtube.com/vi/_xLrirWP-S0/maxresdefault.jpg);
    background-size: cover;
    background-position: center;
    cursor: pointer;
    transition: transform 0.4s ease;
  }
  .yt-thumb:hover { transform: scale(1.025); }

  .yt-thumb-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(160deg, rgba(45,82,68,0.32) 0%, rgba(30,30,28,0.55) 100%);
    display: flex; align-items: center; justify-content: center;
    flex-direction: column;
    gap: 14px;
  }

  .yt-play-btn {
    width: 40px; height: 40px;
    border-radius: 50%;
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(6px);
    border: 2px solid rgba(255,255,255,0.6);
    display: flex; align-items: center; justify-content: center;
    transition: all 0.25s ease;
    cursor: pointer;
  }
  .yt-play-btn:hover { background: rgba(255,255,255,0.9); transform: scale(1.1); }
  .yt-play-btn:hover .yt-play-icon { color: var(--sage-dark); }
  .yt-play-icon { color: #fff; transition: color 0.2s ease; }

  .yt-play-label {
    font-size: 12px;
    color: rgba(255,255,255,0.8);
    letter-spacing: 0.08em;
  }

  .yt-iframe {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    border: none;
  }

  .yt-shimmer {
    position: absolute; inset: 0;
    background: linear-gradient(90deg, var(--sage-dark) 0%, #3f7260 50%, var(--sage-dark) 100%);
    background-size: 200% 100%;
    animation: ytShimmer 1.8s ease-in-out infinite;
    display: flex; align-items: center; justify-content: center;
    color: rgba(255,255,255,0.4);
    font-size: 14px;
  }
  @keyframes ytShimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  .yt-hd-badge {
    position: absolute;
    top: 12px; right: 12px;
    background: rgba(0,0,0,0.65);
    color: #fff;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.1em;
    padding: 3px 8px;
    border-radius: 4px;
    z-index: 5;
  }

  /* ── Footer strip ── */
  .yt-footer-strip {
    margin-top: clamp(36px, 5vw, 64px);
    background: var(--sage-dark);
    padding: clamp(18px, 3vw, 30px) clamp(20px, 5vw, 80px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }
  .yt-footer-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(16px, 2vw, 24px);
    font-weight: 300;
    font-style: italic;
    color: var(--clay-light);
  }
  .yt-footer-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 26px;
    background: transparent;
    border: 1.5px solid var(--clay-light);
    border-radius: 100px;
    color: var(--clay-light);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-decoration: none;
    transition: all 0.25s ease;
    cursor: pointer;
    white-space: nowrap;
    font-family: 'DM Sans', sans-serif;
  }
  .yt-footer-cta:hover {
    background: var(--clay);
    border-color: var(--clay);
    color: #fff;
  }

  /* Entry animations */
  @keyframes ytFadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .yt-animate { animation: ytFadeUp 0.65s ease both; }
  .yt-animate--d1 { animation-delay: 0.05s; }
  .yt-animate--d2 { animation-delay: 0.18s; }
  .yt-animate--d3 { animation-delay: 0.30s; }
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