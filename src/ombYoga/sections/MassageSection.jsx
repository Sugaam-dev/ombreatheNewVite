import React, { useEffect, useRef, useState } from "react";
import { Clock, Star, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export default function MassageSection({ data }) {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Fallback fallback declarations to protect downstream destructuring parameters safely
  const colors = data?.colors || {};
  const content = data?.content || {};
  const massageList = content?.massages || [];

  // Triplicate the rendering array list to facilitate an unbroken running cycle effect
  const infiniteMassages = [...massageList, ...massageList, ...massageList];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId;

    const runTicker = () => {
      if (!isPaused) {
        container.scrollLeft += 1; // Animation layout translation shift interval

        // Snap loop index reset trigger bound logic
        if (container.scrollLeft >= (container.scrollWidth / 3) * 2) {
          container.scrollLeft = container.scrollWidth / 3;
        }
      }
      animationFrameId = requestAnimationFrame(runTicker);
    };

    animationFrameId = requestAnimationFrame(runTicker);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const handleManualActionScroll = (direction) => {
    if (scrollContainerRef.current) {
      const stepOffsetValue = 364; // Card width + layout margin track column padding gaps
      const finalVector = direction === "left" ? -stepOffsetValue : stepOffsetValue;
      scrollContainerRef.current.scrollBy({ left: finalVector, behavior: "smooth" });
    }
  };

  // 🛠️ RULES OF HOOKS SAFE DISMISS CHECK: Guard checks must reside down here!
  if (!data || !data.content || !data.content.massages) {
    return null;
  }

  return (
    <div className="spa-carousel-wrapper">
      {/* INJECTED ENCAPSULATED SCOPED STYLE CORE */}
      <style>{`
        .spa-carousel-wrapper {
          width: 100%;
          
          background: ${colors.navy || "#1A2456"};
          font-family: system-ui, -apple-system, sans-serif;
          padding: 60px 16px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .spa-carousel-wrapper { padding: 80px 40px; }
        }
        
        .spa-header-block {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto 40px auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }
        @media (min-width: 768px) {
          .spa-header-block { flex-direction: row; align-items: flex-end; text-align: left; }
        }

        .spa-title-text {
          margin: 12px 0 0 0;
          font-size: 32px;
          font-weight: 800;
          color: ${colors.white || "#ffffff"};
          letter-spacing: -0.02em;
        }
        .spa-subtitle-text {
          margin: 8px 0 0 0;
          font-size: 15px;
          color: rgba(255,255,255,0.6);
          max-width: 540px;
          line-height: 1.5;
        }

        /* Directional Control Box Setup */
        .spa-nav-buttons {
          display: flex;
          gap: 12px;
        }
        /* CRITICAL REQUIREMENT: Complete hidden suppression on small screens */
        @media (max-width: 767px) {
          .spa-nav-buttons { display: none !important; }
        }

        .spa-arrow-btn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid ${colors.border || "rgba(255,255,255,0.15)"};
          color: ${colors.white || "#ffffff"};
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .spa-arrow-btn:hover {
          background: ${colors.white || "#ffffff"};
          color: ${colors.navy || "#1A2456"};
        }

        /* Horizontal Overflow Rails */
        .spa-carousel-outer {
          max-width: 1240px;
          width: 100%;
          margin: 0 auto;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .spa-carousel-outer::-webkit-scrollbar {
          display: none;
        }
        .spa-track-flex {
          display: flex;
          gap: 24px;
          padding: 16px 4px;
          width: max-content;
        }

        /* Responsive Layout Adaptive Metric Sizing */
        .spa-treatment-card {
          position: relative;
          width: 82vw;
          background: ${colors.cardBg || "rgba(255,255,255,0.05)"};
          border: 1px solid ${colors.border || "rgba(255,255,255,0.15)"};
          border-radius: 28px;
          overflow: hidden;
          backdrop-filter: blur(16px);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 480px) { .spa-treatment-card { width: 310px; } }
        @media (min-width: 768px) { .spa-treatment-card { width: 340px; } }

        .spa-treatment-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,255,255,0.35);
          box-shadow: ${colors.shadowLg || "0 10px 30px rgba(0,0,0,0.2)"};
        }

        .spa-img-frame {
          height: 190px;
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .spa-img-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .spa-treatment-card:hover .spa-img-frame img {
          transform: scale(1.04);
        }

        .spa-card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .spa-card-title {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
          color: ${colors.white || "#ffffff"};
        }
        .spa-card-desc {
          margin: 8px 0 0 0;
          font-size: 13.5px;
          color: rgba(255,255,255,0.5);
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 40px;
          }

        .spa-status-indicator {
          margin-top: 16px;
          padding-top: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          font-weight: 600;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .spa-status-indicator.premium { color: #A855F7; }
        .spa-status-indicator.included { color: ${colors.sage || "#7BAF8A"}; }
      `}</style>

      {/* Header layout block elements */}
      <div className="spa-header-block">
        <div>
          <span style={{
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: colors.sage || "#7BAF8A",
            background: "rgba(123, 175, 138, 0.1)",
            padding: "6px 14px",
            borderRadius: "9999px",
            display: "inline-block"
          }}>
            Relaxation Menu
          </span>
          <h2 className="spa-title-text">
            {content.title} <span style={{ color: colors.sage || "#7BAF8A" }}>{content.highlight}</span>
          </h2>
          <p className="spa-subtitle-text">{content.subtitle}</p>
         
        </div>
      </div>

      {/* Slider outer framework tracking layer */}
      <div
        className="spa-carousel-outer"
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="spa-track-flex">
          {infiniteMassages.map((massage, index) => (
            <div key={`${massage.id}-${index}`} className="spa-treatment-card">
              
              {/* Conditional Popular Overlays */}
              {massage.isPopular && (
                <div style={{
                  position: "absolute", top: "16px", left: "16px", zIndex: "10",
                  display: "flex", alignItems: "center", gap: "4px",
                  background: "#F59E0B", color: "#ffffff",
                  fontSize: "10px", fontWeight: "700", padding: "5px 12px",
                  borderRadius: "9999px", textTransform: "uppercase", letterSpacing: "0.05em"
                }}>
                  <Sparkles size={11} />
                  <span>Popular</span>
                </div>
              )}

              {/* Card Image Display Wrapper */}
              <div className="spa-img-frame">
                <img src={massage.image} alt={massage.title} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(26,36,86,0.4) 0%, transparent 100%)" }} />
              </div>

              {/* Text Core Parameters */}
              <div className="spa-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", marginBottom: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#fbbf24", background: "rgba(245,158,11,0.08)", padding: "4px 8px", borderRadius: "8px", fontWeight: "500" }}>
                    <Star size={13} style={{ fill: "#fbbf24", stroke: "#fbbf24" }} />
                    <span>{massage.rating}</span>
                    <span style={{ opacity: 0.5, fontWeight: "400" }}>({massage.reviews})</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#94a3b8", background: "rgba(148,163,184,0.08)", padding: "4px 8px", borderRadius: "8px", fontWeight: "500" }}>
                    <Clock size={13} />
                    <span>{massage.duration}</span>
                  </div>
                </div>

                <h3 className="spa-card-title">{massage.title}</h3>
                <p className="spa-card-desc">{massage.tagline}</p>

                {/* Paid or complimentary item mapping indicator layout */}
                {massage.isPaid ? (
                  <div className="spa-status-indicator premium">
                    <Star size={14} style={{ fill: "#A855F7", stroke: "#A855F7" }} />
                    <span>Premium Treatment</span>
                  </div>
                ) : (
                  <div className="spa-status-indicator included">
                    <span style={{ display: "inline-block", width: "6px", height: "6px", backgroundColor: colors.sage || "#7BAF8A", borderRadius: "50%" }}></span>
                    <span>Complimentary Session</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}