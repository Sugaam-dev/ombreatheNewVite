// App.jsx

import "./App.css";

import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

// ==========================================
// PRELOAD HOME FOR SMOOTH NAVIGATION
// ==========================================
import("./Components/Home");

// ==========================================
// LAYOUT
// ==========================================
import Layout from "./Layout";

// ==========================================
// LAZY PAGES
// ==========================================
const Home = lazy(() => import("./Components/Home"));
const Cont = lazy(() => import("./Components/Cont"));

const AboutUsPage = lazy(() =>
  import("./Components/AboutUs/AboutUsPage")
);

const YogaTeachers = lazy(() =>
  import("./Components/Teachers/YogaTeachers")
);

const MembershipProgram = lazy(() =>
  import("./Components/Services/Membership/MembershipProgram")
);

const OmbYogaPage = lazy(() =>
  import("./ombYoga/pages/OmbYogaPage")
);

const LocationLandingPage = lazy(() =>
  import("./ombYoga/pages/programsCard/LocationLandingPage")
);

// ==========================================
// STATIC DATA
// ==========================================
import shivShaktiSadhanaData from "./Components/Services/Membership/data/shivShaktiSadhanaData";
import saptaRishiSadhanaData from "./Components/Services/Membership/data/saptaRishiSadhanaData";
import pashuPatayaaData from "./Components/Services/Membership/data/pashuPatayaaData";
import shaktiSadhanaData from "./Components/Services/Membership/data/shaktiSadhanaData";
import ProgramsCarousel from "./ombYoga/pages/programsCard/ProgramsCarousel";

// ==========================================
// PAGE LOADER
// ==========================================
const PageLoader = () => (
  <div className="page-loader">
    <div className="page-loader-spinner"></div>
  </div>
);

// ==========================================
// NORMALIZATION ROUTES
// ==========================================
function NormalisedTTCRoute() {
  const { location: loc, course } = useParams();
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    if (loc && loc !== loc.toLowerCase()) {
      navigate(`/programs/${loc.toLowerCase()}/${course}${search}`, {
        replace: true,
      });
    }
  }, [loc, course, navigate, search]);

  return (
    <Suspense fallback={<PageLoader />}>
      <OmbYogaPage />
    </Suspense>
  );
}




function NormalisedLocationRoute() {
  const { location: loc } = useParams();
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    if (loc && loc !== loc.toLowerCase()) {
      navigate(`/programs/${loc.toLowerCase()}${search}`, {
        replace: true,
      });
    }
  }, [loc, navigate, search]);

  return (
    <Suspense fallback={<PageLoader />}>
      <LocationLandingPage />
    </Suspense>
  );
}

// ==========================================
// ROUTES
// ==========================================
function AppRoutes() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        {/* HOME */}
        <Route
          index
          element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          }
        />

        {/* ABOUT */}
        <Route
          path="about"
          element={
            <Suspense fallback={<PageLoader />}>
              <AboutUsPage />
            </Suspense>
          }
        />

        {/* CONTACT */}
        <Route
          path="contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <Cont />
            </Suspense>
          }
        />

        {/* TEACHERS */}
        <Route
          path="our-teachers-list"
          element={
            <Suspense fallback={<PageLoader />}>
              <YogaTeachers />
            </Suspense>
          }
        />
        <Route path="programs"
        element={
              <Suspense fallback={<PageLoader />}>
              <ProgramsCarousel/>
            </Suspense>
        }
        />

        {/* MEMBERSHIP PROGRAMS */}
        <Route
          path="programs/shakti-sadhana"
          element={
            <Suspense fallback={<PageLoader />}>
              <MembershipProgram data={shaktiSadhanaData} />
            </Suspense>
          }
        />

        <Route
          path="programs/shiv-shakti-sadhana"
          element={
            <Suspense fallback={<PageLoader />}>
              <MembershipProgram data={shivShaktiSadhanaData} />
            </Suspense>
          }
        />

        <Route
          path="programs/sapta-rishi-sadhana"
          element={
            <Suspense fallback={<PageLoader />}>
              <MembershipProgram data={saptaRishiSadhanaData} />
            </Suspense>
          }
        />

        <Route
          path="programs/pashu-patayaa-sadhana"
          element={
            <Suspense fallback={<PageLoader />}>
              <MembershipProgram data={pashuPatayaaData} />
            </Suspense>
          }
        />

        {/* DYNAMIC PROGRAMS */}
        <Route
          path="programs/:location/:course"
          element={<NormalisedTTCRoute />}
        />
        <Route
          path="programs/:location"
          element={<NormalisedLocationRoute />}
        />
        <Route
  path="retreats/:location/:course"
  element={<NormalisedTTCRoute />}
/>

        {/* 404 */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />

      </Route>
    </Routes>
  );
}

// ==========================================
// APP
// ==========================================
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;