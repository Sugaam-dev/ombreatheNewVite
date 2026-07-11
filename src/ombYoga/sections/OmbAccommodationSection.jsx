import React, { useState, useEffect, useRef } from "react";
import { CheckCircle, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getIcon } from "./icons";

const OmbAccommodationSection = ({ data, colors }) => {
  const [activeRoom, setActiveRoom] = useState(0);
  const [showArrow, setShowArrow] = useState(false);
  const scrollRef = useRef(null);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowArrow(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
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
  }, [data]);

  if (!data || !data.content) return null;
  const { title, highlight, subtitle, rooms = [], amenities = [], buttonText, url } = data.content;
  const room = rooms[activeRoom];
  if (!room) return null;

  const handleRoomClick = (idx) => {
    setActiveRoom(idx);
    const el = scrollRef.current;
    if (!el) return;
    const buttons = el.querySelectorAll("button");
    if (buttons[idx]) {
      el.scrollTo({ left: Math.max(0, buttons[idx].offsetLeft - 40), behavior: "smooth" });
    }
    setTimeout(checkScroll, 400);
  };

  return (
    <section className="accom-outer-box" style={{ backgroundColor: colors?.navy || "#1A2456", color: "#ffffff" }}>
      <div className="accom-container">

        {/* Header */}
        <div className="accom-header-block">
          <h2>
            {title} <em style={{ color: colors?.goldLight }}>{highlight}</em>
          </h2>
          <p>{subtitle}</p>
        </div>

        {/* Blinking swipe row hint on mobile */}
        {showArrow && (
          <div className="swipe-alert-row">
            <span
              className="swipe-alert-text"
              style={{ color: colors?.goldLight }}
            >
              swipe for more <ChevronRight size={15} strokeWidth={2.5} />
            </span>
          </div>
        )}

        {/* Room tabs scroll row */}
        <div className="accom-tabs-container" ref={scrollRef}>
          {rooms.map((r, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleRoomClick(i)}
              style={{ 
                backgroundColor: activeRoom === i ? "#ffffff" : "transparent",
                color: activeRoom === i ? (colors?.navy || "#1A2456") : "#ffffff",
                borderColor: activeRoom === i ? "#ffffff" : "rgba(255,255,255,0.4)"
              }}
              className={`accom-tab-button ${activeRoom === i ? "active" : ""}`}
            >
              {r.type}
            </button>
          ))}
        </div>

        {/* Main Grid: Image & details card */}
        <div className="accom-main-grid">

          {/* Room image side */}
          <div className="accom-image-wrapper">
            <img src={room.img} alt={room.type} loading="lazy" />
          </div>

          {/* Content details side */}
          <div className="accom-card-details" style={{ color: colors?.navy || "#1A2456" }}>
            <div>
              <span
                className="accom-room-tag"
                style={{ backgroundColor: room.tagBg || colors?.goldLight }}
              >
                {room.tag}
              </span>
              <h3>{room.type}</h3>
              <p>{room.desc}</p>
              <div className="accom-room-features">
                {(room.features || []).map((f, i) => (
                  <div key={i} className="accom-feature-row">
                    <CheckCircle size={14} className="flex-shrink-0" style={{ color: colors?.sage || "#7BAF8A" }} /> {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="accom-card-bottom">
              <div className="accom-price-label">{room.price}</div>
              <Link
                to={url || "/contact"}
                className="accom-book-btn"
                style={{ backgroundColor: colors?.navy || "#1A2456" }}
              >
                {buttonText || "Book Now"} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Amenities grid */}
        {amenities.length > 0 && (
          <div className="accom-amenities-section">
            <h3>Amenities</h3>
            <div className="accom-amenities-grid">
              {amenities.map((a, i) => (
                <div key={i} className="accom-amenity-unit">
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: "6px" }}>{getIcon(a.icon, 18)}</div>
                  <div className="accom-amenity-label">{a.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default OmbAccommodationSection;