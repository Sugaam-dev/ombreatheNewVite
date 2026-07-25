import React, { useState } from "react";
import { Sunrise, Moon, CheckCircle, BookOpen, Clock, Info } from "lucide-react";
import { getIcon } from "./icons";
import MobileCarousel from "./MobileCarousel";

const ScheduleRow = ({ item }) => (
  <div className="schedule-row-item">
    <div className="sched-row-iconbox">
      {getIcon(item.icon, 14)}
    </div>
    <span className="sched-row-time">{item.time}</span>
    <span className="sched-row-activity">{item.activity}</span>
  </div>
);

export default function ProgramDetailsSection({ curriculumData, scheduleData, colors }) {
  const [activeTab, setActiveTab] = useState("schedule"); // "curriculum" | "schedule"

  if (!curriculumData && !scheduleData) return null;

  const curriculum = curriculumData?.content || {};
  const schedule = scheduleData?.content || {};
  const activeBg = colors?.activeBg || "rgba(0,0,0,0.04)";

  return (
    <section className="details-outer" style={{ backgroundColor: colors?.cream || "#F7F3EF" }}>
      <div className="details-container">
        
        {/* Header */}
        <div className="details-header">
          <span style={{ color: colors?.goldLight }}>
            {activeTab === "curriculum" ? curriculum.eyebrow || "Curriculum" : schedule.eyebrow || "Daily Flow"}
          </span>
          <h2 style={{ color: colors?.navy }}>
            {activeTab === "curriculum" 
              ? <>{curriculum.title} <em style={{ color: colors?.goldLight }}>{curriculum.highlight}</em></>
              : <>{schedule.title} <em style={{ color: colors?.goldLight }}>{schedule.highlight}</em></>
            }
          </h2>
          <p>
            {activeTab === "schedule" ? curriculum.subtitle : schedule.subtitle}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="tab-switch-row">
          <div className="tab-switch-box">
                  <button
              onClick={() => setActiveTab("schedule")}
              className={`tab-trigger-btn ${activeTab === "schedule" ? "active" : ""}`}
              style={{ 
                backgroundColor: activeTab === "schedule" ? (colors?.violet || colors?.navy || "#1a2456") : "transparent",
                color: activeTab === "schedule" ? "#ffffff" : ""
              }}
            >
              <Clock size={16} /> Daily Schedule
            </button>
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`tab-trigger-btn ${activeTab === "curriculum" ? "active" : ""}`}
              style={{ 
                backgroundColor: activeTab === "curriculum" ? (colors?.violet || colors?.navy || "#1a2456") : "transparent",
                color: activeTab === "curriculum" ? "#ffffff" : ""
              }}
            >
              <BookOpen size={16} /> Course Syllabus
            </button>
      
          </div>
        </div>

        {/* Dynamic Content Panel */}
        <div className="courses-grid-wrap">
          
          {/* TAB 1: CURRICULUM */}
          {activeTab === "curriculum" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
              <MobileCarousel
                items={curriculum.courses || []}
                gridClass="m-carousel-desktop grid-cols-4"
                className="curriculum-carousel"
                renderItem={(c, i) => (
                  <div key={i} className="course-card-unit">
                    <div 
                      className="course-card-iconbox"
                      style={{ background: `linear-gradient(135deg, ${colors?.navy || "#111"}, ${colors?.violet || "#444"})` }}
                    >
                      {getIcon(c.icon, 20)}
                    </div>
                    <h4 style={{ color: colors?.navy }}>{c.title}</h4>
                    <div className="course-items-list">
                      {(c.items || []).map((item, j) => (
                        <div key={j} className="course-bullet-row">
                          <CheckCircle size={12} style={{ color: colors?.sage || "#7BAF8A" }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              />

              {/* Journey Phases */}
              {(curriculum.phases || []).length > 0 && (
                <div className="phases-board">
                  <h3 className="phases-board-title" style={{ color: colors?.navy }}>
                    Your Course <em style={{ color: colors?.goldLight }}>Journey Phases</em>
                  </h3>
                  <MobileCarousel
                    items={curriculum.phases || []}
                    gridClass="m-carousel-desktop grid-cols-3"
                    className="phases-carousel"
                    renderItem={(p, i) => (
                      <div
                        key={i}
                        className="phase-card-unit"
                        style={{ borderTop: `4px solid ${p.color || colors?.goldLight}` }}
                      >
                        <div>
                          <small style={{ color: p.color || colors?.goldLight }}>{p.days}</small>
                          <h4 style={{ color: colors?.navy }}>{p.title}</h4>
                          <p>{p.desc}</p>
                        </div>
                      </div>
                    )}
                  />
                </div>
              )}
            </div>
          )}

          {/* TAB 2: DAILY SCHEDULE */}
          {activeTab === "schedule" && (
            <div className="schedule-block-grid">
              
              {/* Left Column Image */}
              <div className="schedule-image-card">
                <img 
                  src={schedule.image || "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80"} 
                  alt="Daily Schedule" 
                />
                <div className="schedule-img-overlay" />
                <div className="schedule-image-text">
                  <span className="schedule-img-tag" style={{ color: colors?.goldLight }}>
                    Immersive Flow
                  </span>
                  <h4>A structured day balancing yoga theory, practice, and personal introspection.</h4>
                </div>
              </div>

              {/* Right Column List */}
              <div className="schedule-lists-board">
                {/* Morning */}
                <div className="schedule-list-column">
                  <div className="schedule-list-header">
                    <Sunrise size={18} style={{ color: colors?.goldLight }} />
                    <h3 style={{ color: colors?.navy }}>{schedule.sections?.morningTitle || "Morning"}</h3>
                  </div>
                  <div className="schedule-rows-divider">
                    {(schedule.morning || []).map((item, i) => <ScheduleRow key={i} item={item} />)}
                  </div>
                </div>

                {/* Afternoon */}
                <div className="schedule-list-column">
                  <div className="schedule-list-header">
                    <Moon size={16} style={{ color: colors?.violet || colors?.navy }} />
                    <h3 style={{ color: colors?.navy }}>{schedule.sections?.afternoonTitle || "Afternoon"}</h3>
                  </div>
                  <div className="schedule-rows-divider">
                    {(schedule.afternoon || []).map((item, i) => <ScheduleRow key={i} item={item} />)}
                  </div>
                </div>
              </div>

              {/* Note banner */}
              {schedule.sections?.note && (
                <div 
                  className="details-note-banner"
                  style={{ 
                    backgroundColor: activeBg, 
                    borderColor: colors?.violet || colors?.navy,
                    gridColumn: "1/-1" 
                  }}
                >
                  <Info size={14} style={{ color: colors?.violet || colors?.navy }} />
                  <span>{schedule.sections.note}</span>
                </div>
              )}

            </div>
          )}

        </div>
      </div>
    </section>
  );
}
