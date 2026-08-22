import { getIcon } from "./icons";

/**
 * HighlightsSection - Consolidates CommunitySection, PromoSection, and TransformationSection.
 * Reduces three large scrolling sections into a single, high-impact block using custom CSS.
 */
export default function HighlightsSection({ communityData, promoData, colors }) {
  if (!communityData && !promoData) return null;

  const stats = communityData?.content?.stats || [];
  const promoFeatures = promoData?.content?.features || [];
  const activeBg = colors?.activeBg || "rgba(0,0,0,0.04)";

  return (
    <section className="highlights-outer" style={{ backgroundColor: colors?.cream || "#F7F3EF" }}>
      <div className="highlights-container">
        
        {/* Dynamic Grid: Trust Stats & Package Inclusions */}
        <div className="highlights-main-grid">
          
          {/* Left Column: Trust Stats & Experience */}
          <div>
            <span className="eyebrow-span" style={{ color: colors?.goldLight }}>
              {communityData?.content?.eyebrow || "The Campus Experience"}
            </span>
            <h2 className="section-headline" style={{ color: colors?.navy }}>
              {communityData?.content?.title || "Join our"} <span style={{ color: colors?.goldLight }}>{communityData?.content?.highlight || "transformative"}</span> yoga journey
            </h2>
            <p className="section-desc-p">
              {communityData?.content?.subtitle}
            </p>

            {/* Statistics Badges */}
            <div className="stats-badges-grid">
              {stats.map((stat, i) => (
                <div key={i} className="stat-badge-card">
                  <div className="stat-badge-icon" style={{ backgroundColor: activeBg, color: colors?.violet || colors?.navy }}>
                    {getIcon(stat.icon || "clock", 16)}
                  </div>
                  <span className="stat-badge-val" style={{ color: colors?.navy }}>{stat.value}</span>
                  <span className="stat-badge-lbl">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Bottom context lines */}
            {(communityData?.content?.bottomText1 || communityData?.content?.bottomText2) && (
              <div 
                className="highlights-left-note"
                style={{ backgroundColor: activeBg, borderColor: colors?.goldLight }}
              >
                {communityData?.content?.bottomText1 && <p>{communityData?.content?.bottomText1}</p>}
                {communityData?.content?.bottomText2 && <p>{communityData?.content?.bottomText2}</p>}
              </div>
            )}
          </div>

          {/* Right Column: Inclusions & Features */}
          <div className="promo-inclusion-card">
            <span className="promo-card-eyebrow">Course Inclusions</span>
            <h3 className="promo-card-title" style={{ color: colors?.navy }}>What's included in your package:</h3>

            <div className="promo-features-list">
              {promoFeatures.map((feat, i) => (
                <div key={i} className="promo-feature-row">
                  <div 
                    className="promo-feature-iconbox"
                    style={{ backgroundColor: activeBg, color: colors?.sage || colors?.navy }}
                  >
                    {getIcon(feat.icon || "award", 18)}
                  </div>
                  <div className="promo-feature-text">
                    <h4 style={{ color: colors?.navy }}>{feat.title}</h4>
                    <p>{feat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
