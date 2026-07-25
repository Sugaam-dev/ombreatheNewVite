import React, { useState, lazy } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import GlobalStyles from "../../../styles/globalStyles";
import { OmbDataMap } from "../data/OmbDataMap";
import "../styles/ProgramSections.css";

import OmbHeroSection from "../sections/OmbHeroSection";
import OmbAccommodationSection from "../sections/OmbAccommodationSection";

import Contact from "../../contact/components/ContactForm";
import LazySection from "../../../components/shared/LazySection/LazySection";

// Centralized price imports
import { ROOM_PRICES_BALI } from "../../../data/bali/programPrices";
import { ROOM_PRICES_RISHIKESH } from "../../../data/rishikesh/programPricesRishikesh";
import { ROOM_PRICES_MYSORE } from "../../../data/mysore/programPricesMysore";
import { ROOM_PRICES_CHIANG } from "../../../data/chiang/programPricesChiang";
import { ROOM_PRICES_DHARAMSHALA } from "../../../data/dharamshala/programPricesDharamshala";

// ==========================================
// LAZY LOADED CONSOLIDATED SECTIONS
// ==========================================

const HighlightsSection = lazy(() =>
  import("../sections/HighlightsSection")
);

const OmbPracticeSection = lazy(() =>
  import("../sections/OmbPracticeSection")
);

const ProgramDetailsSection = lazy(() =>
  import("../sections/ProgramDetailsSection")
);

const ExperienceSection = lazy(() =>
  import("../sections/ExperienceSection")
);

const Questions = lazy(() =>
  import("../../../components/shared/questions/Questions")
);

const YogaTrainingPage = lazy(() =>
  import("../sections/YogaTrainingPage")
);

// ==========================================
// BATCH DATE GENERATOR HELPER
// ==========================================
const generateBatches = (durationDays) => {
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
    .map(m => {
      const startDate = new Date(m.year, m.monthIndex, m.startDay);
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + durationDays - 1);
      return { startDate, endDate };
    })
    .filter(batch => batch.startDate >= today)
    .slice(0, 6)
    .map(batch => {
      const { startDate, endDate } = batch;
      const startDayStr = `${startDate.getDate()}${getSuffix(startDate.getDate())}`;
      const endDayStr = `${endDate.getDate()}${getSuffix(endDate.getDate())}`;
      
      const startMonthStr = startDate.toLocaleString('en-US', { month: 'short' });
      const endMonthStr = endDate.toLocaleString('en-US', { month: 'short' });
      
      if (startDate.getMonth() === endDate.getMonth()) {
        return `${startDayStr} To ${endDayStr} ${startMonthStr} ${startDate.getFullYear()}`;
      } else {
        return `${startDayStr} ${startMonthStr} To ${endDayStr} ${endMonthStr} ${endDate.getFullYear()}`;
      }
    });
};

// ==========================================
// PAGE
// ==========================================

const OmbYogaPage = () => {
  const { location, course } = useParams();
  const navigate = useNavigate();
  const locationPath = useLocation().pathname;
  const [selectedBatch, setSelectedBatch] = useState(0);

  const locationKey = location?.toLowerCase().trim();
  const courseKey = course?.toLowerCase().trim();

  const data = OmbDataMap[locationKey]?.[courseKey];

  if (!data) {
    return (
      <div
        style={{
          padding: "80px 40px",
          textAlign: "center",
        }}
      >
        <h2>Coming Soon</h2>

        <p>
          We're preparing the <strong>{course}</strong> program for{" "}
          <strong>{location}</strong>. Check back soon!
        </p>
      </div>
    );
  }

  // Resolve dynamic pricing rooms info
  let pricingInfo = null;
  if (locationKey === "bali") {
    pricingInfo = ROOM_PRICES_BALI[courseKey];
  } else if (locationKey === "rishikesh") {
    pricingInfo = ROOM_PRICES_RISHIKESH[courseKey];
  } else if (locationKey === "mysuru" || locationKey === "mysore") {
    pricingInfo = ROOM_PRICES_MYSORE[courseKey];
  } else if (locationKey === "chiang-mai" || locationKey === "chiang") {
    pricingInfo = ROOM_PRICES_CHIANG[courseKey];
  } else if (locationKey === "dharamshala") {
    pricingInfo = ROOM_PRICES_DHARAMSHALA[courseKey];
  }

  const durationDays = pricingInfo?.durationDays || 25;
  const batches = generateBatches(durationDays);

  const handleOpenCheckout = (roomType) => {
    const isRetreat = locationPath.toLowerCase().startsWith("/retreats/");
    navigate("/checkout", { 
      state: { 
        location: locationKey, 
        slug: courseKey, 
        type: isRetreat ? "retreats" : "programs", 
        roomType,
        selectedDate: batches[selectedBatch] || "Select on arrival"
      } 
    });
  };

  // Construct dynamic accommodation content
  let accommodationData = data.accommodationSection;
  if (accommodationData?.content?.rooms && pricingInfo?.rooms) {
    accommodationData = {
      ...accommodationData,
      content: {
        ...accommodationData.content,
        rooms: accommodationData.content.rooms.map(originalRoom => {
          const matchedPrice = pricingInfo.rooms.find(
            room => room.type?.toLowerCase().replace(/\s+/g, '') === originalRoom.type?.toLowerCase().replace(/\s+/g, '')
          );
          if (matchedPrice) {
            return {
              ...originalRoom,
              price: `$${matchedPrice.current}`
            };
          }
          return originalRoom;
        })
      }
    };
  }

  const defaultRoomType = pricingInfo?.rooms?.[0]?.type || "6 Shared Room";
  const colors = data.heroSection?.colors;

  return (
    <>
      <GlobalStyles />

      <div className="omb-root">

        {/* 1. Hero Section */}
        {data.heroSection && (
          <OmbHeroSection
            data={data.heroSection}
            onBookClick={() => handleOpenCheckout(defaultRoomType)}
          />
        )}

        {/* 2. Highlights (Consolidates Community, Promo & Transformation) */}
        {data.highlightsSection && (
          <LazySection>
            <HighlightsSection
              communityData={data.highlightsSection.community}
              promoData={data.highlightsSection.promo}
              transformationData={data.highlightsSection.transformation}
              colors={colors}
            />
          </LazySection>
        )}

        {/* 3. Core Practices */}
        {data.practiceSection && (
          <LazySection>
            <OmbPracticeSection
              data={data.practiceSection}
              colors={colors}
            />
          </LazySection>
        )}

        {/* 3.5 Select Dates & Accommodation */}
        <LazySection>
          <YogaTrainingPage
            selectedBatch={selectedBatch}
            setSelectedBatch={setSelectedBatch}
            onBookClick={handleOpenCheckout}
          />
        </LazySection>

        {/* 4. Program Details (Consolidates Curriculum & Schedule) */}
        {data.programDetailsSection && (
          <LazySection>
            <ProgramDetailsSection
              curriculumData={data.programDetailsSection.curriculum}
              scheduleData={data.programDetailsSection.schedule}
              colors={colors}
            />
          </LazySection>
        )}

        {/* 5. Stay Experience (Consolidates Food, Excursions, Location & Massage) */}
        {data.experienceSection && (
          <LazySection>
            <ExperienceSection
              foodData={data.experienceSection.food}
              excursionData={data.experienceSection.excursion}
              locationData={data.experienceSection.location}
              massageData={data.experienceSection.massage}
              colors={colors}
            />
          </LazySection>
        )}

        {/* 6. Lodging / Rooms */}
        {accommodationData && (
          <OmbAccommodationSection
            data={accommodationData}
            colors={accommodationData.colors || colors}
            onBookClick={handleOpenCheckout}
          />
        )}

        {/* 7. FAQs */}
        {data.faqSection && (
          <LazySection>
            <Questions
              data={data.faqSection}
            />
          </LazySection>
        )}

        {/* 8. Contact Form */}
        <Contact />

      </div>
    </>
  );
};

export default React.memo(OmbYogaPage);