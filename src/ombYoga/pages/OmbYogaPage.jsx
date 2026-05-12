import React, { Suspense, lazy } from "react";
import GlobalStyles from "./GlobalStyles";

// ✅ Above the fold
import OmbHeroSection from "../sections/OmbHeroSection";
import OmbCommunitySection from "../sections/OmbCommunitySection";

// ✅ SINGLE DATA FILE
// import { OmbServiceData } from "../data/OmbServiceData";
import { OmbDataMap } from "../data/OmbDataMap";
import { useParams } from "react-router-dom";
import Gallery from "../../Components/HomeCredentials/Gallery";
import YogaTeachers from "../../Components/Teachers/YogaTeachers";
// import Accordion from "../../Components/Accordion";
import Ratings from "../../Components/Ratings";
import Contact from "../../Components/Contact";
import Questions from "./questions/Questions";

// ✅ Lazy sections
const OmbPromoSection = lazy(() => import("../sections/OmbPromoSection"));
const OmbTransformationSection = lazy(() => import("../sections/OmbTransformationSection"));
const OmbPracticeSection = lazy(() => import("../sections/OmbPracticeSection"));
const OmbCurriculumSection = lazy(() => import("../sections/OmbCurriculumSection"));
const OmbScheduleSection = lazy(() => import("../sections/OmbScheduleSection"));
const OmbExcursionSection = lazy(() => import("../sections/OmbExcursionSection"));
const OmbFoodSection = lazy(() => import("../sections/OmbFoodSection"));
const OmbAccommodationSection = lazy(() => import("../sections/OmbAccommodationSection"));
const OmbLocationSection = lazy(() => import("../sections/OmbLocationSection"));

// ✅ Loader
const Loading = () => (
  
  <div style={{ textAlign: "center", padding: "30px", fontSize: "0.8rem" }}>
    Loading...
  </div>
);

const OmbYogaPage = () => {
  const { course } = useParams();

 const normalizedCourse = course?.toLowerCase().trim();
const data = OmbDataMap[normalizedCourse];

  if (!data) {
    return <div>Page Not Found</div>;
  }

  return (
    <>
      <GlobalStyles />

      <div className="omb-root">

        <OmbHeroSection data={data.heroSection} />
        <OmbCommunitySection data={data.communitySection} />

        <Suspense fallback={<Loading />}>
          <OmbPromoSection data={data.promoSection} />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <OmbTransformationSection data={data.transformationSection} />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <OmbPracticeSection data={data.practiceSection} />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <OmbCurriculumSection data={data.curriculumSection} />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <OmbScheduleSection data={data.scheduleSection} />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <OmbExcursionSection data={data.excursionSection} />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <OmbFoodSection data={data.foodSection} />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <OmbAccommodationSection data={data.accommodationSection} />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <OmbLocationSection data={data.locationSection} />
        </Suspense>

           <Suspense fallback={<Loading />}>
          <Gallery/>
        </Suspense>
           <Suspense fallback={<Loading />}>
          <YogaTeachers/>
        </Suspense>

          <Suspense fallback={<Loading />}>
          {/* <Accordion/> */}
        <Questions data={data.teacherTrainingFaq} />
        </Suspense>


  <Suspense fallback={<Loading />}>
        <Ratings/>
        </Suspense>

 <Suspense fallback={<Loading />}>
        <Contact/>
        </Suspense>

      </div>
    </>
  );
};

export default OmbYogaPage;