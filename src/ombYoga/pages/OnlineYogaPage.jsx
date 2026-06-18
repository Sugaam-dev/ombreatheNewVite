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

const OnlineAboutSection = lazy(() =>
  import("../onlinesections/OnlineAboutSection")
);

const OnlinePromoSection = lazy(() =>
  import("../onlinesections/OnlinePromoSection")
);

const OnlineReceiveSection = lazy(() =>
  import("../onlinesections/OnlineReceiveSection")
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

const OnlineBenefitsSection = lazy(() =>
  import("../onlinesections/OnlineBenefitsSection")
);

const OnlineGallerySection = lazy(() =>
  import("../onlinesections/OnlineGallerySection")
);

const OnlineLineageSection = lazy(() =>
  import("../onlinesections/OnlineLineageSection")
);

const OnlineMassageSection = lazy(() =>
  import("../onlinesections/OnlineMassageSection")
);

const OnlineTestimonialsSection = lazy(() =>
  import("../onlinesections/OnlineTestimonialsSection")
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
            BELOW THE FOLD — follows the real page order:
            About -> Promo/Course card -> Receive -> Transformation ->
            Practice -> Curriculum -> Schedule -> Benefits & Eligibility ->
            Gallery -> Lineage -> Instructors -> Testimonials -> Location -> FAQ
        ========================================== */}

        <LazySection>
          <OnlineAboutSection
            data={data.aboutSection}
          />
        </LazySection>

        <LazySection>
          <OnlinePromoSection
            data={data.promoSection}
          />
        </LazySection>

        <LazySection>
          <OnlineReceiveSection
            data={data.receiveSection}
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
          <OnlineBenefitsSection
            data={data.benefitsSection}
          />
        </LazySection>

        <LazySection>
          <OnlineGallerySection
            data={data.gallerySection}
          />
        </LazySection>

        <LazySection>
          <OnlineLineageSection
            data={data.lineageSection}
          />
        </LazySection>

        <LazySection>
          <OnlineMassageSection
            data={data.MassageSection}
          />
        </LazySection>

        <LazySection>
          <OnlineTestimonialsSection
            data={data.testimonialsSection}
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