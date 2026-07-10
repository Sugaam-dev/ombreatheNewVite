import React, { lazy } from "react";

// ==========================================
// ABOVE THE FOLD (NORMAL IMPORTS)
// ==========================================
import ImageSliderBanner from "./Banner/ImageSliderBanner ";
import WelcomeToOmbreathe from "./HomeCredentials/WelcomeToOmbreathe";
import Yogaschool from "./Yogaschool";
import WhyChoose from "./HomeCredentials/WhyChoose";

import Ayurveda from "./Ayurveda";
import Offering from "./Offering";
import BannerImage from "./HomeCredentials/BannerImage";
import Blog from "./Blog/Blog";
import Accordion from "./Accordion";
import Ratings from "./Ratings";
import Contact from "./Contact";
import TrustBanner from "./Banner/TrustBanner";
import TransformationJourney from "./HomeCredentials/TransformationJourney";

// ==========================================
// LAZY COMPONENTS
// ==========================================
const ProgramsCarousel = lazy(() =>
  import("../ombYoga/pages/programsCard/ProgramsCarousel")
);

const GalleryLazy = lazy(() =>
  import("./HomeCredentials/Gallery")
);

const UtubeLazy = lazy(() =>
  import("./Utube")
);

const YogaTeachersLazy = lazy(() =>
  import("./Teachers/YogaTeachers")
);

// ==========================================
// INTERSECTION OBSERVER WRAPPER
// ==========================================
import LazySection from "./LazySection";

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