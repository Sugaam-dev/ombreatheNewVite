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
// PAGE TRACKING
// ==========================================
function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "pageview",
      page: location.pathname,
    });
  }, [location.pathname]);
}

// ==========================================
// LAYOUT
// ==========================================
import Layout from "./Layout";

// ==========================================
// PRELOAD IMPORTANT ROUTES
// ==========================================
import("./Components/Home");
import("./ombYoga/pages/OmbYogaPage");

// ==========================================
// LAZY PAGES
// ==========================================
const Home = lazy(() => import("./Components/Home"));

const Cont = lazy(() =>
  import("./Components/Cont")
);

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

const OnlineYogaPage = lazy(() =>
  import("./ombYoga/pages/OnlineYogaPage")
);

const LocationLandingPage = lazy(() =>
  import("./ombYoga/pages/programsCard/LocationLandingPage")
);

const ProgramsCarousel = lazy(() =>
  import("./ombYoga/pages/programsCard/ProgramsCarousel")
);

// ==========================================
// STATIC DATA
// ==========================================
import shivShaktiSadhanaData from "./Components/Services/Membership/data/shivShaktiSadhanaData";
import saptaRishiSadhanaData from "./Components/Services/Membership/data/saptaRishiSadhanaData";
import pashuPatayaaData from "./Components/Services/Membership/data/pashuPatayaaData";
import shaktiSadhanaData from "./Components/Services/Membership/data/shaktiSadhanaData";

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

  return <OmbYogaPage />;
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

  return <LocationLandingPage />;
}

// ==========================================
// ROUTES
// ==========================================
function AppRoutes() {
  usePageTracking();

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* HOME */}
          <Route index element={<Home />} />

          {/* ABOUT */}
          <Route
            path="about"
            element={<AboutUsPage />}
          />

          {/* CONTACT */}
          <Route
            path="contact"
            element={<Cont />}
            
          />
          

          {/* TEACHERS */}
          <Route
            path="our-teachers-list"
            element={<YogaTeachers />}
          />

          {/* PROGRAMS */}
          <Route
            path="programs"
            element={<ProgramsCarousel />}
          />

          <Route
  path="online/:course"
  element={<OnlineYogaPage />}
/>

          {/* MEMBERSHIP PROGRAMS */}
          <Route
            path="programs/shakti-sadhana"
            element={
              <MembershipProgram
                data={shaktiSadhanaData}
              />
            }
          />

          <Route
            path="programs/shiv-shakti-sadhana"
            element={
              <MembershipProgram
                data={shivShaktiSadhanaData}
              />
            }
          />

          <Route
            path="programs/sapta-rishi-sadhana"
            element={
              <MembershipProgram
                data={saptaRishiSadhanaData}
              />
            }
          />

          <Route
            path="programs/pashu-patayaa-sadhana"
            element={
              <MembershipProgram
                data={pashuPatayaaData}
              />
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
          <Route
            path="*"
            element={<h1>404 - Page Not Found</h1>}
          />
        </Route>
      </Routes>
    </Suspense>
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