import React, { lazy } from "react";
import { useParams } from "react-router-dom";

import GlobalStyles from "../../../styles/globalStyles";
import { OnlineDataMap } from "../data/OnlineDataMap";

import OnlineHeroSection from "../sections/OnlineHeroSection";
import OnlineCommunitySection from "../sections/OnlineCommunitySection";

import Contact from "../../contact/components/ContactForm";
import LazySection from "../../../components/shared/LazySection/LazySection";

// ==========================================
// LAZY LOADED SECTIONS
// ==========================================

const OnlineAboutSection = lazy(() =>
  import("../sections/OnlineAboutSection")
);

const OnlinePromoSection = lazy(() =>
  import("../sections/OnlinePromoSection")
);

const OnlineReceiveSection = lazy(() =>
  import("../sections/OnlineReceiveSection")
);

const OnlineTransformationSection = lazy(() =>
  import("../sections/OnlineTransformationSection")
);

const OnlinePracticeSection = lazy(() =>
  import("../sections/OnlinePracticeSection")
);

const OnlineCurriculumSection = lazy(() =>
  import("../sections/OnlineCurriculumSection")
);

const OnlineScheduleSection = lazy(() =>
  import("../sections/OnlineScheduleSection")
);

const OnlineBenefitsSection = lazy(() =>
  import("../sections/OnlineBenefitsSection")
);

const OnlineGallerySection = lazy(() =>
  import("../sections/OnlineGallerySection")
);

const OnlineLineageSection = lazy(() =>
  import("../sections/OnlineLineageSection")
);

const OnlineMassageSection = lazy(() =>
  import("../sections/OnlineMassageSection")
);

const OnlineTestimonialsSection = lazy(() =>
  import("../sections/OnlineTestimonialsSection")
);

const Questions = lazy(() =>
  import("../../../components/shared/questions/Questions")
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

        {data.heroSection && (
          <OnlineHeroSection
            data={data.heroSection}
          />
        )}

        {data.communitySection && (
          <OnlineCommunitySection
            data={data.communitySection}
          />
        )}

        {/* ==========================================
            BELOW THE FOLD — follows the real page order:
            About -> Promo/Course card -> Receive -> Transformation ->
            Practice -> Curriculum -> Schedule -> Benefits & Eligibility ->
            Gallery -> Lineage -> Instructors -> Testimonials -> Location -> FAQ
        ========================================== */}

        {data.aboutSection && (
          <LazySection>
            <OnlineAboutSection
              data={data.aboutSection}
            />
          </LazySection>
        )}

        {data.promoSection && (
          <LazySection>
            <OnlinePromoSection
              data={data.promoSection}
            />
          </LazySection>
        )}

        {data.receiveSection && (
          <LazySection>
            <OnlineReceiveSection
              data={data.receiveSection}
            />
          </LazySection>
        )}

        {data.transformationSection && (
          <LazySection>
            <OnlineTransformationSection
              data={data.transformationSection}
            />
          </LazySection>
        )}

        {data.practiceSection && (
          <LazySection>
            <OnlinePracticeSection
              data={data.practiceSection}
            />
          </LazySection>
        )}

        {data.curriculumSection && (
          <LazySection>
            <OnlineCurriculumSection
              data={data.curriculumSection}
            />
          </LazySection>
        )}

        {data.scheduleSection && (
          <LazySection>
            <OnlineScheduleSection
              data={data.scheduleSection}
            />
          </LazySection>
        )}

        {data.benefitsSection && (
          <LazySection>
            <OnlineBenefitsSection
              data={data.benefitsSection}
            />
          </LazySection>
        )}

        {data.gallerySection && (
          <LazySection>
            <OnlineGallerySection
              data={data.gallerySection}
            />
          </LazySection>
        )}

        {data.lineageSection && (
          <LazySection>
            <OnlineLineageSection
              data={data.lineageSection}
            />
          </LazySection>
        )}

        {data.MassageSection && (
          <LazySection>
            <OnlineMassageSection
              data={data.MassageSection}
            />
          </LazySection>
        )}

        {data.testimonialsSection && (
          <LazySection>
            <OnlineTestimonialsSection
              data={data.testimonialsSection}
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

export default React.memo(OnlineYogaPage);