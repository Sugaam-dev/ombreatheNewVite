import React, { lazy } from "react";
import { useParams } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import { OnlineDataMap } from "../data/OnlineDataMap";

import OnlineHeroSection from "../onlinesections/OnlineHeroSection";
import OnlineCommunitySection from "../onlinesections/OnlineCommunitySection";

import Contact from "../../Components/Contact";
import LazySection from "../../Components/LazySection";

// ==========================================
// LAZY LOADED SECTIONS
// ==========================================

const OnlinePromoSection = lazy(() =>
  import("../onlinesections/OnlinePromoSection")
);

const OnlineTransformationSection = lazy(() =>
  import("../onlinesections/OnlineTransformationSection")
);

const OnlinePracticeSection = lazy(() =>
  import("../onlinesections/OnlinePracticeSection")
);

const OnlineCurriculumSection = lazy(() =>
  import("../onlinesections/OnlineCurriculumSection")
);

const OnlineScheduleSection = lazy(() =>
  import("../onlinesections/OnlineScheduleSection")
);

const OnlineMassageSection = lazy(() =>
  import("../onlinesections/OnlineMassageSection")
);

const OnlineExcursionSection = lazy(() =>
  import("../onlinesections/OnlineExcursionSection")
);

const OnlineFoodSection = lazy(() =>
  import("../onlinesections/OnlineFoodSection")
);

const OnlineAccommodationSection = lazy(() =>
  import("../onlinesections/OnlineAccommodationSection")
);

const OnlineLocationSection = lazy(() =>
  import("../onlinesections/OnlineLocationSection")
);

const Questions = lazy(() =>
  import("./questions/Questions")
);

// ==========================================
// PAGE
// ==========================================

const OnlineYogaPage = () => {
  const { course } = useParams();

  const courseKey = course?.toLowerCase().trim();

  const data = OnlineDataMap[courseKey];

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
          We're preparing the <strong>{course}</strong> online program.
          Check back soon!
        </p>
      </div>
    );
  }

  return (
    <>
      <GlobalStyles />

      <div className="omb-root">

        {/* ==========================================
            ABOVE THE FOLD
        ========================================== */}

        <OnlineHeroSection
          data={data.heroSection}
        />

        <OnlineCommunitySection
          data={data.communitySection}
        />

        {/* ==========================================
            BELOW THE FOLD
        ========================================== */}

        <LazySection>
          <OnlinePromoSection
            data={data.promoSection}
          />
        </LazySection>

        <LazySection>
          <OnlineTransformationSection
            data={data.transformationSection}
          />
        </LazySection>

        <LazySection>
          <OnlinePracticeSection
            data={data.practiceSection}
          />
        </LazySection>

        <LazySection>
          <OnlineCurriculumSection
            data={data.curriculumSection}
          />
        </LazySection>

        <LazySection>
          <OnlineScheduleSection
            data={data.scheduleSection}
          />
        </LazySection>

        <LazySection>
          <OnlineMassageSection
            data={data.MassageSection}
          />
        </LazySection>

        <LazySection>
          <OnlineExcursionSection
            data={data.excursionSection}
          />
        </LazySection>

        <LazySection>
          <OnlineFoodSection
            data={data.foodSection}
          />
        </LazySection>

        <LazySection>
          <OnlineAccommodationSection
            data={data.accommodationSection}
          />
        </LazySection>

        <LazySection>
          <OnlineLocationSection
            data={data.locationSection}
          />
        </LazySection>

        <LazySection>
          <Questions
            data={data.teacherTrainingFaq}
          />
        </LazySection>

        {/* ==========================================
            CONTACT
        ========================================== */}

        <Contact />

      </div>
    </>
  );
};

export default React.memo(OnlineYogaPage);