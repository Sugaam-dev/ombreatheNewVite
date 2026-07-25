import React, { lazy } from "react";

// ==========================================
// ABOVE THE FOLD (NORMAL IMPORTS)
// ==========================================
import ImageSliderBanner from "../sections/ImageSliderBanner";
import WelcomeToOmbreathe from "../sections/WelcomeToOmbreathe";
import Yogaschool from "../sections/Yogaschool";
import WhyChoose from "../sections/WhyChoose";

import Ayurveda from "../sections/Ayurveda";
import Offering from "../sections/Offering";
import BannerImage from "../sections/BannerImage";
import Blog from "../../blog/pages/BlogPage";
import Accordion from "../../../components/ui/Accordion/Accordion";
import Ratings from "../../../components/shared/Ratings/Ratings";
import Contact from "../../contact/components/ContactForm";
import TrustBanner from "../sections/TrustBanner";
import TransformationJourney from "../sections/TransformationJourney";

// ==========================================
// LAZY COMPONENTS
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

// ==========================================
// INTERSECTION OBSERVER WRAPPER
// ==========================================
import LazySection from "../../../components/shared/LazySection/LazySection";

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

      <ProgramsCarousel />

      <TransformationJourney/>

      {/* BELOW THE FOLD */}

      <LazySection>
      
      </LazySection>

      <Ayurveda />

      <Offering />

      <BannerImage />

      <LazySection>
        <YogaTeachersLazy />
      </LazySection>

      <Blog />

      <LazySection>
        <GalleryLazy />
      </LazySection>

      <LazySection>
        <UtubeLazy />
      </LazySection>

      <Accordion />

      <Ratings />

      <Contact />
    </>
  );
};

export default React.memo(Home);