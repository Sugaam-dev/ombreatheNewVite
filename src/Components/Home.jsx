// Home.jsx

import React, { Suspense, lazy } from "react";

// ==========================================
// ABOVE THE FOLD (NORMAL IMPORTS)
// ==========================================
import ImageSliderBanner from "./Banner/ImageSliderBanner ";
import WelcomeToYogalayaa from "./HomeCredentials/WelcomeToYogalayaa";
import Yogaschool from "./Yogaschool";
import WhyChoose from "./HomeCredentials/WhyChoose";

// ==========================================
// KEEP ONLY HEAVY COMPONENTS LAZY
// ==========================================
const ProgramsCarousel = lazy(() =>
  import("../ombYoga/pages/programsCard/ProgramsCarousel")
);

const GalleryLazy = lazy(() =>
  import("./HomeCredentials/Gallery")
);

const UtubeLazy = lazy(() => import("./Utube"));

const YogaTeachersLazy = lazy(() =>
  import("./Teachers/YogaTeachers")
);

// ==========================================
// NORMAL IMPORTS
// ==========================================
import Ayurveda from "./Ayurveda";
import Offering from "./Offering";
import BannerImage from "./HomeCredentials/BannerImage";
import GuruLineage from "./HomeCredentials/GuruLineage";
import Schedule from "./Teachers/Schedule";
import Blog from "./Blog/Blog";
import Accordion from "./Accordion";
import Ratings from "./Ratings";
import Contact from "./Contact";

// ==========================================
// SECTION LOADER
// ==========================================
const SectionLoader = () => (
  <div className="section-loader">
    <div className="loader-spinner"></div>
  </div>
);

// ==========================================
// HOME
// ==========================================
const Home = () => {
  return (
    <>
      {/* ABOVE THE FOLD */}

      <ImageSliderBanner />

      <WelcomeToYogalayaa />

      <Yogaschool />

      <WhyChoose />

      {/* BELOW THE FOLD */}

      <Suspense fallback={<SectionLoader />}>
        <ProgramsCarousel />
      </Suspense>

      <Ayurveda />

      <Offering />

      <BannerImage />

      <Suspense fallback={<SectionLoader />}>
        <YogaTeachersLazy />
      </Suspense>

      <GuruLineage />

      <Schedule />

      <Blog />

      <Suspense fallback={<SectionLoader />}>
        <GalleryLazy />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <UtubeLazy />
      </Suspense>

      <Accordion />

      <Ratings />

      <Contact />
    </>
  );
};

export default Home;