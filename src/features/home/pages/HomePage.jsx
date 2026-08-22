import { lazy, memo } from "react";

// ==========================================
// ABOVE THE FOLD (NORMAL IMPORTS — critical for LCP)
// ==========================================
import ImageSliderBanner from "../sections/ImageSliderBanner";
import WelcomeToOmbreathe from "../sections/WelcomeToOmbreathe";
import Yogaschool from "../sections/Yogaschool";
import WhyChoose from "../sections/WhyChoose";
import TrustBanner from "../sections/TrustBanner";

// ==========================================
// INTERSECTION OBSERVER WRAPPER
// ==========================================
import LazySection from "../../../components/shared/LazySection/LazySection";

// ==========================================
// LAZY COMPONENTS (only load when visible / needed)
// ==========================================
const ProgramsCarousel = lazy(() =>
  import("../../yoga-retreats-programs/components/ProgramsCarousel")
);

const GalleryLazy = lazy(() =>
  import("../sections/Gallery")
);

const UtubeLazy = lazy(() =>
  import("../sections/Utube")
);

const YogaTeachersLazy = lazy(() =>
  import("../../teachers/pages/TeachersPage")
);

// Previously eagerly imported — now lazy to cut initial JS bundle
const TransformationJourneyLazy = lazy(() =>
  import("../sections/TransformationJourney")
);

const AyurvedaLazy = lazy(() =>
  import("../sections/Ayurveda")
);

const OfferingLazy = lazy(() =>
  import("../sections/Offering")
);

const BannerImageLazy = lazy(() =>
  import("../sections/BannerImage")
);

const BlogLazy = lazy(() =>
  import("../../blog/pages/BlogPage")
);

const AccordionLazy = lazy(() =>
  import("../../../components/ui/Accordion/Accordion")
);

const RatingsLazy = lazy(() =>
  import("../../../components/shared/Ratings/Ratings")
);

// ContactForm loads Leaflet from CDN — must be lazy so Leaflet
// does NOT block the homepage initial load
const ContactLazy = lazy(() =>
  import("../../contact/components/ContactForm")
);

// ==========================================
// HOME
// ==========================================
const Home = () => {
  return (
    <>
      {/* ABOVE THE FOLD */}
      <ImageSliderBanner />

      <TrustBanner />

      <WelcomeToOmbreathe />

      <Yogaschool />

      <WhyChoose />

      {/* BELOW THE FOLD — lazy via IntersectionObserver */}
      <LazySection>
        <ProgramsCarousel />
      </LazySection>

      <LazySection>
        <TransformationJourneyLazy />
      </LazySection>

      <LazySection>
        <AyurvedaLazy />
      </LazySection>

      <LazySection>
        <OfferingLazy />
      </LazySection>

      <LazySection>
        <BannerImageLazy />
      </LazySection>

      <LazySection>
        <YogaTeachersLazy />
      </LazySection>

      <LazySection>
        <BlogLazy />
      </LazySection>

      <LazySection>
        <GalleryLazy />
      </LazySection>

      <LazySection>
        <UtubeLazy />
      </LazySection>

      <LazySection>
        <AccordionLazy />
      </LazySection>

      <LazySection>
        <RatingsLazy />
      </LazySection>

      <LazySection>
        <ContactLazy />
      </LazySection>
    </>
  );
};

export default memo(Home);