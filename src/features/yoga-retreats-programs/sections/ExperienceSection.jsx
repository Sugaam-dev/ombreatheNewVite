import React, { useState, useRef, useEffect } from "react";
import { Star, MapPin, Clock, CheckCircle, ChevronRight } from "lucide-react";
import { useParams } from "react-router-dom";
import { getIcon } from "./icons";
import MobileCarousel from "./MobileCarousel";

// Food Images
import breakFastImg from "../../../images/foods/breakFast.jpg";
import lunchImg from "../../../images/foods/lunch.jpg";
import dinnerImg from "../../../images/foods/dinner.jpg";

const getMealImage = (location, title, fallbackImg, index) => {
  if (!location) return fallbackImg;
  const loc = location.toLowerCase().trim();
  
  if (loc === "bali") {
    if (index === 0) return breakFastImg;
    if (index === 1) return lunchImg;
    if (index === 2) return dinnerImg;
    
    if (title) {
      const lower = title.toLowerCase();
      if (lower.includes("breakfast") || lower.includes("fruit") || lower.includes("morning")) {
        return breakFastImg;
      }
      if (lower.includes("lunch")) {
        return lunchImg;
      }
      if (lower.includes("dinner") || lower.includes("evening")) {
        return dinnerImg;
      }
    }
  }
  
  // Extendable: Add future location mappers here!
  /*
  if (loc === "rishikesh") {
     ...
  }
  */
  
  return fallbackImg;
};

export default function ExperienceSection({ foodData, excursionData, locationData, massageData, colors }) {
  const { location: locParam } = useParams();
  const isBali = locParam?.toLowerCase() === "bali";
  const [activeTab, setActiveTab] = useState("food");
  const [showArrow, setShowArrow] = useState(false);
  const scrollRef = useRef(null);

  if (!foodData && !excursionData && !locationData && !massageData) return null;

  const food = foodData?.content || {};
  const excursions = excursionData?.content?.excursions || [];
  const location = locationData?.content || {};
  const massage = massageData?.content || {};

  const availableTabs = [
    { id: "food",      label: "🥗 Food & Dining",    show: !!foodData },
    { id: "excursion", label: "🗺️ Excursions",        show: !!excursionData && excursions.length > 0 },
    { id: "location",  label: "📍 Location & Travel", show: !!locationData },
    { id: "massage",   label: "💆 Spa & Massage",     show: !!massageData && !!massage.massages }
  ].filter(t => t.show);

  useEffect(() => {
    if (availableTabs.length > 0 && !availableTabs.some(t => t.id === activeTab)) {
      setActiveTab(availableTabs[0].id);
    }
  }, []);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const canScrollMore = el.scrollLeft + el.clientWidth < el.scrollWidth - 8;
    setShowArrow(canScrollMore);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [availableTabs]);

  const handleTabClick = (id, idx) => {
    setActiveTab(id);
    const el = scrollRef.current;
    if (!el) return;
    const buttons = el.querySelectorAll("button");
    if (buttons[idx]) {
      const btn = buttons[idx];
      const peekOffset = 40;
      const targetScroll = btn.offsetLeft - peekOffset;
      el.scrollTo({ left: Math.max(0, targetScroll), behavior: "smooth" });
    }
    setTimeout(checkScroll, 400);
  };

  const activeBg = colors?.activeBg || "rgba(0,0,0,0.04)";

  return (
    <section className="experience-outer-box">
      <div className="max-w-6xl mx-auto" style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Section Header */}
        <div className="experience-header-block">
          <span style={{ color: colors?.goldLight }}>The Stay Experience</span>
          <h2 style={{ color: colors?.navy }}>
            Life in the <span style={{ color: colors?.goldLight }}>Spiritual Heart</span> of Your Campus
          </h2>
          <p>
            From Ayurvedic cooking to sacred nature walks, explore all local amenities included in your stay.
          </p>
        </div>

        {/* Blinking swipe hint on mobile */}
        {showArrow && (
          <div className="swipe-alert-row">
            <span className="swipe-alert-text" style={{ color: colors?.navy }}>
              swipe for more <ChevronRight size={16} strokeWidth={2.5} />
            </span>
          </div>
        )}

        {/* Scrollable Tabs row */}
        <div className="tabs-scrollable-bar" ref={scrollRef}>
          {availableTabs.map((tab, idx) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab.id, idx)}
                style={{ 
                  backgroundColor: isActive ? (colors?.violet || colors?.navy || "#1a2456") : "#ffffff",
                  color: isActive ? "#ffffff" : "#44403c"
                }}
                className={`exp-tab-button ${isActive ? "active" : ""}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel */}
        <div>
          
          {/* TAB 1: FOOD & DIET */}
          {activeTab === "food" && food.title && (
            <div className="food-dining-panel">
              <div className="dining-panel-header">
                <h3 style={{ color: colors?.navy }}>
                  {food.title} <span style={{ color: colors?.goldLight }}>{food.highlight}</span>
                </h3>
                <p>{food.subtitle}</p>
              </div>

              <MobileCarousel
                items={food.meals || []}
                gridClass="m-carousel-desktop grid-cols-3"
                renderItem={(meal, i) => (
                  <div key={i} className="meal-card-unit">
                    <div>
                      <div className="meal-card-imagebox">
                        <img src={getMealImage(locParam, meal.title, meal.img, i)} alt={meal.title} />
                        <div className="meal-card-shade" />
                        <div className="meal-card-labelbox">
                          <span className="meal-card-time">{meal.time}</span>
                          <h4>{meal.title}</h4>
                        </div>
                      </div>
                      <div className="meal-card-body">
                        <p>{meal.desc}</p>
                        <div className="meal-dishes-box">
                          <span className="meal-dishes-label">Featured Dishes</span>
                          <div className="meal-dishes-grid">
                            {(meal.items || []).map((item, idx) => (
                              <span key={idx} className="dish-bullet-row">
                                <span className="dish-bullet-dot" style={{ backgroundColor: colors?.sage || "#7BAF8A" }} /> {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              />

              {/* Dietary Specifications */}
              <div 
                className="dietary-acc-banner"
                style={{ backgroundColor: activeBg, borderColor: `${colors?.violet || colors?.navy}15` }}
              >
                <span className="dietary-acc-label">Dietary Accreditations:</span>
                {(food.dietary || []).map((diet, i) => (
                  <span key={i} className="dietary-acc-badge">
                    {getIcon(diet.icon, 12)}
                    {diet.label}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: EXCURSIONS */}
          {activeTab === "excursion" && excursions.length > 0 && (
            <div className="excursions-panel">
              <div className="excursions-panel-header">
                <h3 style={{ color: colors?.navy }}>
                  {excursionData?.content?.title || "Weekend"} <span style={{ color: colors?.goldLight }}>{excursionData?.content?.highlight || "Excursions"}</span>
                </h3>
                <p>{excursionData?.content?.subtitle}</p>
              </div>

              <MobileCarousel
                items={excursions}
                gridClass="m-carousel-desktop grid-cols-3"
                renderItem={(ex, i) => (
                  <div key={i} className="excursion-card-unit">
                    <div>
                      <div className="excursion-card-imagebox">
                        <img src={ex.img} alt={ex.title} />
                        <div className="excursion-tags-row">
                          <span className="excursion-tag-badge" style={{ backgroundColor: ex.tagBg || colors?.navy || "#1A2456" }}>
                            {ex.tag}
                          </span>
                          <span className="excursion-duration-badge">
                            <Clock size={10} /> {ex.duration}
                          </span>
                        </div>
                      </div>
                      <div className="excursion-card-body">
                        <div className="excursion-card-meta">
                          <h4 style={{ color: colors?.navy }}>{ex.title}</h4>
                          <p>{ex.desc}</p>
                        </div>
                        <div className="excursion-card-bullets">
                          {(ex.highlights || []).map((high, idx) => (
                            <div key={idx} className="excursion-bullet-row">
                              <CheckCircle size={12} style={{ color: colors?.sage || "#7BAF8A" }} />
                              {high}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          )}

          {/* TAB 3: LOCATION */}
          {activeTab === "location" && location.title && (
            <div className="location-panel">
              <div className="location-panel-grid">
                
                {/* Distance metrics & description */}
                <div className="location-intro">
                  <h3 style={{ color: colors?.navy }}>
                    {location.title} <span style={{ color: colors?.goldLight }}>{location.highlight}</span>
                  </h3>
                  <p>{location.subtitle}</p>
                  <p className="location-address-row">
                    <MapPin size={14} style={{ color: colors?.goldLight }} />
                    {location.address}
                  </p>

                  {/* Proximity card */}
                  <div className="location-proximities-card" style={{ marginTop: "24px" }}>
                    <h4 style={{ color: colors?.navy }}>Nearby Proximities</h4>
                    <div className="location-proximities-list">
                      {(location.spots || []).map((spot, i) => (
                        <div key={i} className="proximity-item-row">
                          <div className="proximity-row-left">
                            <div style={{ color: colors?.goldLight }}>{getIcon(spot.icon || "globe", 12)}</div>
                            <div>
                              <span className="proximity-spot-name">{spot.name}</span>
                              <span className="proximity-spot-desc">{spot.desc}</span>
                            </div>
                          </div>
                          <span className="proximity-distance-badge" style={{ backgroundColor: activeBg, color: colors?.navy }}>
                            {spot.distance}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Location quick stats row */}
                  <div className="location-stats-grid" style={{ marginTop: "24px" }}>
                    {(location.stats || []).map((stat, i) => (
                      <div key={i} className="location-stat-unit" style={{ backgroundColor: colors?.navy, color: "#ffffff" }}>
                        <div style={{ color: colors?.goldLight, display: "flex", justifyContent: "center" }}>{getIcon(stat.icon || "globe", 12)}</div>
                        <div className="location-stat-label">{stat.label}</div>
                        <div className="location-stat-value">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Google Map Iframe */}
                <div className="location-map-card">
                  <iframe
                    title="Google Map Embed"
                    src={location.mapEmbed}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

              </div>
            </div>
          )}

          {/* TAB 4: SPA & MASSAGE */}
          {activeTab === "massage" && massage.massages && (
            <div className="spa-massage-panel">
              <div className="massage-panel-header">
                <h3 style={{ color: colors?.navy }}>
                  {massage.title || "Signature"} <span style={{ color: colors?.goldLight }}>{massage.highlight || "Massage Treatments"}</span>
                </h3>
                <p>{massage.subtitle}</p>
              </div>

              <MobileCarousel
                items={massage.massages}
                gridClass="m-carousel-desktop grid-cols-3"
                renderItem={(mass, i) => (
                  <div key={mass.id || i} className="massage-card-unit">
                    <div>
                      <div className="massage-card-imagebox">
                        <img src={mass.image} alt={mass.title} />
                        {mass.isPopular && (
                          <span className="massage-popular-badge" style={{ backgroundColor: colors?.goldLight }}>
                            Popular
                          </span>
                        )}
                        <span className="massage-duration-badge">
                          <Clock size={10} /> {mass.duration}
                        </span>
                      </div>
                      <div className="massage-card-body">
                        <div className="massage-header-row">
                          <h4 style={{ color: colors?.navy }}>{mass.title}</h4>
                          <span className="massage-rating-box">
                            <Star size={10} className="fill-amber-500 text-amber-500" style={{ color: "#f59e0b" }} /> {mass.rating}
                          </span>
                        </div>
                        <p>{mass.tagline}</p>
                        
                        <div className="massage-card-footer">
                          <span>Pricing Tier</span>
                          <span className={`massage-pricing-tier ${mass.isPaid ? "" : "comp"}`} style={{ color: mass.isPaid ? "#b45309" : "" }}>
                            {mass.isPaid ? "Paid Treatment" : "Complimentary ✨"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
