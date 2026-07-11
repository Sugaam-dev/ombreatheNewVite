import React, { lazy } from "react";
import { useParams } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import { OmbDataMap } from "../data/OmbDataMap";
import "../styles/ProgramSections.css";

import OmbHeroSection from "../sections/OmbHeroSection";
import OmbAccommodationSection from "../sections/OmbAccommodationSection";

import Contact from "../../Components/Contact";
import LazySection from "../../Components/LazySection";

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
  import("./questions/Questions")
);

// ==========================================
// PAGE
// ==========================================

const OmbYogaPage = () => {
  const { location, course } = useParams();

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

  const colors = data.heroSection?.colors;

  return (
    <>
      <GlobalStyles />

      <div className="omb-root">

        {/* 1. Hero Section */}
        {data.heroSection && (
          <OmbHeroSection
            data={data.heroSection}
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
        {data.accommodationSection && (
          <OmbAccommodationSection
            data={data.accommodationSection}
            colors={data.accommodationSection.colors || colors}
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