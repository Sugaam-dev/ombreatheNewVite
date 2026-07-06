import React, { lazy } from "react";
import { useParams } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import { OmbDataMap } from "../data/OmbDataMap";

import OmbHeroSection from "../sections/OmbHeroSection";
import OmbCommunitySection from "../sections/OmbCommunitySection";

import Contact from "../../Components/Contact";
import LazySection from "../../Components/LazySection";

// ==========================================
// LAZY LOADED SECTIONS
// ==========================================

const OmbPromoSection = lazy(() =>
  import("../sections/OmbPromoSection")
);

const OmbTransformationSection = lazy(() =>
  import("../sections/OmbTransformationSection")
);

const OmbPracticeSection = lazy(() =>
  import("../sections/OmbPracticeSection")
);

const OmbCurriculumSection = lazy(() =>
  import("../sections/OmbCurriculumSection")
);

const OmbScheduleSection = lazy(() =>
  import("../sections/OmbScheduleSection")
);

const MassageSection = lazy(() =>
  import("../sections/MassageSection")
);

const OmbExcursionSection = lazy(() =>
  import("../sections/OmbExcursionSection")
);

const OmbFoodSection = lazy(() =>
  import("../sections/OmbFoodSection")
);

const OmbAccommodationSection = lazy(() =>
  import("../sections/OmbAccommodationSection")
);

const OmbLocationSection = lazy(() =>
  import("../sections/OmbLocationSection")
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

  return (
    <>
      <GlobalStyles />

      <div className="omb-root">

        {data.heroSection && (
          <OmbHeroSection
            data={data.heroSection}
          />
        )}

        {data.communitySection && (
          <OmbCommunitySection
            data={data.communitySection}
          />
        )}

        {/* ==========================================
            BELOW THE FOLD
        ========================================== */}

        {data.promoSection && (
          <LazySection>
            <OmbPromoSection
              data={data.promoSection}
            />
          </LazySection>
        )}

        {data.transformationSection && (
          <LazySection>
            <OmbTransformationSection
              data={data.transformationSection}
            />
          </LazySection>
        )}

        {data.practiceSection && (
          <LazySection>
            <OmbPracticeSection
              data={data.practiceSection}
            />
          </LazySection>
        )}

        {data.curriculumSection && (
          <LazySection>
            <OmbCurriculumSection
              data={data.curriculumSection}
            />
          </LazySection>
        )}

        {data.scheduleSection && (
          <LazySection>
            <OmbScheduleSection
              data={data.scheduleSection}
            />
          </LazySection>
        )}

        {data.MassageSection && (
          <LazySection>
            <MassageSection
              data={data.MassageSection}
            />
          </LazySection>
        )}

        {data.excursionSection && (
          <LazySection>
            <OmbExcursionSection
              data={data.excursionSection}
            />
          </LazySection>
        )}

        {data.foodSection && (
          <LazySection>
            <OmbFoodSection
              data={data.foodSection}
            />
          </LazySection>
        )}

        {data.accommodationSection && (
          <LazySection>
            <OmbAccommodationSection
              data={data.accommodationSection}
            />
          </LazySection>
        )}

        {data.locationSection && (
          <LazySection>
            <OmbLocationSection
              data={data.locationSection}
            />
          </LazySection>
        )}

        {data.teacherTrainingFaq && (
          <LazySection>
            <Questions
              data={data.teacherTrainingFaq}
            />
          </LazySection>
        )}

        {/* ==========================================
            CONTACT
        ========================================== */}

        <Contact />

      </div>
    </>
  );
};

export default React.memo(OmbYogaPage);