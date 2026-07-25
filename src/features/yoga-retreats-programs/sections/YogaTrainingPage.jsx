import React from 'react';
import { useParams } from 'react-router-dom';
import { ROOM_PRICES_BALI } from '../../../data/bali/programPrices';
import { ROOM_PRICES_RISHIKESH } from '../../../data/rishikesh/programPricesRishikesh';
import { ROOM_PRICES_MYSORE } from '../../../data/mysore/programPricesMysore';
import { ROOM_PRICES_CHIANG } from '../../../data/chiang/programPricesChiang';
import { ROOM_PRICES_DHARAMSHALA } from '../../../data/dharamshala/programPricesDharamshala';

const defaultRooms = [
  { type: '6 Sharing Room', current: 999, original: 1399, popular: false },
  { type: '4 Sharing Room', current: 1099, original: 1499, popular: false },
  { type: '2 Sharing Room', current: 1399, original: 1799, popular: true },
  { type: 'Private Room', current: 1699, original: 2099, popular: false }
];

const generateBatches = (durationDays, roomsList) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  
  const months = [];
  for (let i = 0; i < 8; i++) {
    const d = new Date(currentYear, currentMonth + i, 1);
    const monthIndex = d.getMonth();
    const year = d.getFullYear();
    const name = d.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    const startDay = monthIndex === 0 ? 5 : 1; // Course starts on 5th in January, 1st in others
    months.push({ name, year, monthIndex, startDay });
  }
  
  const getSuffix = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:  return 'st';
      case 2:  return 'nd';
      case 3:  return 'rd';
      default: return 'th';
    }
  };

  return months
    .map((m, idx) => {
      const startDate = new Date(m.year, m.monthIndex, m.startDay);
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + durationDays - 1);
      return { m, idx, startDate, endDate };
    })
    .filter(item => item.startDate >= today)
    .slice(0, 6)
    .map((item) => {
      const { m, idx, startDate, endDate } = item;
      const startDayStr = `${startDate.getDate()}${getSuffix(startDate.getDate())}`;
      const endDayStr = `${endDate.getDate()}${getSuffix(endDate.getDate())}`;
      
      const startMonthStr = startDate.toLocaleString('en-US', { month: 'short' });
      const endMonthStr = endDate.toLocaleString('en-US', { month: 'short' });
      
      let datesText = '';
      if (startDate.getMonth() === endDate.getMonth()) {
        datesText = `${startDayStr} To ${endDayStr} ${startMonthStr} ${startDate.getFullYear()}`;
      } else {
        datesText = `${startDayStr} ${startMonthStr} To ${endDayStr} ${endMonthStr} ${endDate.getFullYear()}`;
      }

      return {
        dates: datesText,
        month: m.name,
        seatsLeft: [2, 3, 3, 3, 4, 6, 4, 3][idx] || 3,
        prices: roomsList || [],
      };
    });
};

export default function YogaTrainingPage({ selectedBatch, setSelectedBatch, onBookClick }) {
  const { location, course: courseSlug } = useParams();

  const locKey = location?.toLowerCase().trim();
  const slugKey = courseSlug?.toLowerCase().trim();
  let pricingInfo = null;

  if (locKey === 'bali') {
    pricingInfo = ROOM_PRICES_BALI[slugKey];
  } else if (locKey === 'rishikesh') {
    pricingInfo = ROOM_PRICES_RISHIKESH[slugKey];
  } else if (locKey === 'mysuru' || locKey === 'mysore') {
    pricingInfo = ROOM_PRICES_MYSORE[slugKey];
  } else if (locKey === 'chiang-mai' || locKey === 'chiang') {
    pricingInfo = ROOM_PRICES_CHIANG[slugKey];
  } else if (locKey === 'dharamshala') {
    pricingInfo = ROOM_PRICES_DHARAMSHALA[slugKey];
  }

  const durationDays = pricingInfo?.durationDays || 25;
  const roomsList = pricingInfo?.rooms || defaultRooms;

  const courses = generateBatches(durationDays, roomsList);

  if (courses.length === 0) return null;

  const activeBatchIndex = selectedBatch < courses.length ? selectedBatch : 0;

  return (
    <div className="w-full bg-[#FAF8F5] text-stone-850 py-8 md:py-10 px-4 sm:px-6 lg:px-8 font-sans" style={{ backgroundColor: "#FAF8F5", padding: "40px 16px" }}>
      <style>{`
        .yt-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (min-width: 1024px) {
          .yt-grid {
            grid-template-columns: 4.2fr 7.8fr;
          }
        }
        
        /* Compact Batch Buttons styling overriding any global styles */
        .yt-batch-list {
          display: flex;
          flex-direction: column;
          gap: 12px !important;
        }
        .yt-batch-btn {
          display: flex !important;
          width: 100% !important;
          justify-content: space-between !important;
          align-items: center !important;
          text-align: left !important;
          padding: 8px 14px !important; /* Thinner height-wise */
          border-radius: 16px !important; /* Matches exactly Baliyoga rounded-2xl Tailwind value (16px) */
          border: 1px solid !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
          box-sizing: border-box !important;
          line-height: 1.25 !important;
          margin: 0 !important;
        }
        .yt-batch-btn.selected {
          background-color: #1A2456 !important;
          border-color: #1A2456 !important;
          color: #ffffff !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.08) !important;
        }
        .yt-batch-btn.unselected {
          background-color: rgba(247, 243, 239, 0.6) !important;
          border-color: rgba(231, 229, 228, 0.4) !important;
          color: #292524 !important;
        }
        .yt-batch-btn.unselected:hover {
          background-color: #F7F3EF !important;
          border-color: #d6d3d1 !important;
          transform: scale(1.01);
        }
        .yt-batch-dates {
          font-weight: 600 !important;
          font-size: 14px !important;
          margin: 0 !important;
          line-height: 1.25 !important;
        }
        @media (min-width: 640px) {
          .yt-batch-dates {
            font-size: 16px !important; /* Matches sm:text-base (16px) */
          }
        }
        .yt-batch-month {
          font-size: 12px !important; /* Matches text-xs (12px) */
          color: inherit !important;
          opacity: 0.8 !important;
          margin: 2px 0 0 0 !important;
          line-height: 1.2 !important;
        }
        .yt-batch-badge {
          font-size: 11px !important; /* Matches text-[11px] */
          font-weight: 600 !important;
          padding: 4px 10px !important; /* Matches px-2.5 py-1 */
          border-radius: 9999px !important;
          white-space: nowrap !important;
        }
      `}</style>

      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12" style={{ textAlign: "center", marginBottom: "40px", maxWidth: "800px", margin: "0 auto 40px auto" }}>
        <span className="text-[#C8A96A] font-semibold tracking-wider uppercase text-xs bg-[#C8A96A]/10 border border-[#C8A96A]/20 px-4 py-1.5 rounded-full" style={{ color: "#C8A96A", backgroundColor: "rgba(200, 169, 106, 0.1)", border: "1px solid rgba(200, 169, 106, 0.2)", padding: "6px 16px", borderRadius: "9999px", fontSize: "0.75rem", textTransform: "uppercase", fontWeight: "600" }}>
          Stay & Enrollment
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-serif leading-[1.15] tracking-tight text-[#1A2456]" style={{ color: "#1A2456", fontSize: "2rem", marginTop: "16px" }}>
          Select Date & Accommodation
        </h2>
        <p className="mt-3 text-base text-stone-500" style={{ color: "#78716c", marginTop: "12px" }}>
          Select your preferred batch dates and choose your room stay option below to enroll.
        </p>
      </div>

      {/* Main Interactive Grid Layout */}
      <div className="yt-grid items-start">
        {/* Batch Selector (Left Sidebar) */}
        <div className="bg-white p-6 rounded-3xl border border-stone-200/60 shadow-[0_4px_12px_rgba(0,0,0,0.05)]" style={{ backgroundColor: "#ffffff", padding: "24px", borderRadius: "24px", border: "1px solid rgba(231,229,228,0.6)" }}>
          <h3 className="text-lg font-bold mb-4 text-[#1A2456] flex items-center justify-between" style={{ display: "flex", justifyContent: "space-between", fontSize: "1.125rem", color: "#1A2456", margin: "0 0 16px 0" }}>
            <span>Select Dates</span>
            <span className="text-xs font-normal text-stone-400" style={{ fontSize: "0.75rem", color: "#a8a29e", fontWeight: "normal" }}>Upcoming Batches</span>
          </h3>

          <div className="yt-batch-list">
            {courses.map((course, idx) => {
              const isSelected = activeBatchIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedBatch(idx)}
                  className={`yt-batch-btn ${isSelected ? 'selected' : 'unselected'}`}
                >
                  <div>
                    <p className="yt-batch-dates" style={{ color: isSelected ? "#ffffff" : "#1A2456" }}>
                      {course.dates}
                    </p>
                    <p className="yt-batch-month">{course.month}</p>
                  </div>
                  <span
                    className="yt-batch-badge"
                    style={{
                      backgroundColor: isSelected 
                        ? (course.seatsLeft <= 3 ? "rgba(239, 68, 68, 0.25)" : "rgba(123, 175, 138, 0.25)")
                        : (course.seatsLeft <= 3 ? "rgba(239, 68, 68, 0.1)" : "rgba(123, 175, 138, 0.1)"),
                      color: isSelected 
                        ? (course.seatsLeft <= 3 ? "#fee2e2" : "#dcfce7")
                        : (course.seatsLeft <= 3 ? "#b91c1c" : "#15803d"),
                      border: isSelected
                        ? (course.seatsLeft <= 3 ? "1px solid rgba(239, 68, 68, 0.35)" : "1px solid rgba(123, 175, 138, 0.35)")
                        : (course.seatsLeft <= 3 ? "1px solid rgba(239, 68, 68, 0.2)" : "1px solid rgba(123, 175, 138, 0.2)")
                    }}
                  >
                    {course.seatsLeft} left
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Room & Pricing Cards (Right Detail Section) */}
        <div className="space-y-6" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#F7F3EF] p-6 rounded-3xl border border-stone-200/60 gap-4" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#F7F3EF", padding: "24px", borderRadius: "24px", border: "1px solid rgba(231,229,228,0.6)" }}>
            <div>
              <span style={{ fontSize: "0.75rem", color: "#C8A96A", textTransform: "uppercase", tracking: "0.1em", fontWeight: "700" }}>Selected Batch</span>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#1A2456", margin: "4px 0 0 0" }}>{courses[activeBatchIndex]?.dates}</h3>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#7BAF8A" }}></span>
              <span style={{ fontSize: "0.875rem", fontWeight: "600", color: "#44403c" }}>
                {courses[activeBatchIndex]?.seatsLeft} Spots Remaining
              </span>
            </div>
          </div>

          {/* Room Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {courses[activeBatchIndex]?.prices?.map((room, idx) => (
              <div
                key={idx}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "24px",
                  borderRadius: "24px",
                  backgroundColor: "#ffffff",
                  border: room.popular ? "2px solid #C8A96A" : "1px solid rgba(231,229,228,0.6)",
                  boxShadow: room.popular ? "0 10px 15px -3px rgba(200, 169, 106, 0.1)" : "0 4px 6px -1px rgba(0,0,0,0.05)"
                }}
              >
                {/* Highlight Badge */}
                {room.popular && (
                  <span style={{ position: "absolute", top: "-12px", right: "24px", backgroundColor: "#C8A96A", color: "#ffffff", fontWeight: "700", fontSize: "0.625rem", textTransform: "uppercase", tracking: "0.05em", padding: "4px 12px", borderRadius: "9999px" }}>
                    Most Popular
                  </span>
                )}

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <h4 style={{ fontSize: "1.125rem", fontWeight: "700", color: "#1A2456", margin: 0 }}>{room.type}</h4>
                    {room.note && (
                      <span style={{ fontSize: "0.5625rem", fontWeight: "700", textTransform: "uppercase", padding: "2px 8px", borderRadius: "4px", backgroundColor: "rgba(236, 72, 153, 0.1)", color: "#db2777", border: "1px solid rgba(236, 72, 153, 0.2)" }}>
                        {room.note}
                      </span>
                    )}
                  </div>

                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginTop: "16px" }}>
                    <span style={{ fontSize: "1.875rem", fontWeight: "800", color: "#1A2456" }}>${room.current}</span>
                    <span style={{ fontSize: "0.875rem", color: "#a8a29e", textDecoration: "line-through" }}>${room.original}</span>
                    <span style={{ fontSize: "0.75rem", fontWeight: "600", color: "#059669", marginLeft: "auto" }}>
                      Save ${room.original - room.current}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onBookClick && onBookClick(room.type)}
                  style={{
                    marginTop: "24px",
                    width: "100%",
                    padding: "12px",
                    borderRadius: "12px",
                    fontWeight: "600",
                    border: 0,
                    cursor: "pointer",
                    backgroundColor: room.popular ? "#C8A96A" : "#1A2456",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px"
                  }}
                >
                  <span>Enroll Now</span>
                  <svg
                    style={{ width: "16px", height: "16px" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
