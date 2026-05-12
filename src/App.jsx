// App.jsx

import "./App.css";

import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
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

// ==========================================
// PAGE LOADER
// ==========================================
const PageLoader = () => (
  <div className="page-loader">
    <div className="page-loader-spinner"></div>
  </div>
);

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

        {/* PROGRAMS */}
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
              <MembershipProgram
                data={shivShaktiSadhanaData}
              />
            </Suspense>
          }
        />

        <Route
          path="programs/sapta-rishi-sadhana"
          element={
            <Suspense fallback={<PageLoader />}>
              <MembershipProgram
                data={saptaRishiSadhanaData}
              />
            </Suspense>
          }
        />

        <Route
          path="programs/pashu-patayaa-sadhana"
          element={
            <Suspense fallback={<PageLoader />}>
              <MembershipProgram
                data={pashuPatayaaData}
              />
            </Suspense>
          }
        />

        {/* OMB YOGA */}
        <Route
          path="programs/:location/:course"
          element={
            <Suspense fallback={<PageLoader />}>
              <OmbYogaPage />
            </Suspense>
          }
        />

        <Route
          path="programs/:location"
          element={
            <Suspense fallback={<PageLoader />}>
              <LocationLandingPage />
            </Suspense>
          }
        />

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