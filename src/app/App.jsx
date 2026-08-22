// App.jsx

import "./App.css";

import { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { fetchAndApplyDynamicPrices } from "../utils/dynamicPrices";

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
import Layout from "../components/layout/Layout";
import Home from "../features/home/pages/HomePage";

// ==========================================
// LAZY PAGES (Secondary routes)
// ==========================================

const Cont = lazy(() =>
  import("../features/contact/pages/ContactPage")
);

const AboutUsPage = lazy(() =>
  import("../features/about/pages/AboutUsPage")
);

const YogaTeachers = lazy(() =>
  import("../features/teachers/pages/TeachersPage")
);

const MembershipProgram = lazy(() =>
  import("../features/membership/pages/MembershipPage")
);

const OmbYogaPage = lazy(() =>
  import("../features/yoga-retreats-programs/pages/YogaProgramPage")
);

const OnlineYogaPage = lazy(() =>
  import("../features/online/pages/OnlineYogaPage")
);

const LocationLandingPage = lazy(() =>
  import("../features/yoga-retreats-programs/pages/LocationLandingPage")
);

const ProgramsCarousel = lazy(() =>
  import("../features/yoga-retreats-programs/components/ProgramsCarousel")
);

const CheckoutPage = lazy(() =>
  import("../features/checkout/pages/CheckoutPage")
);

// ==========================================
// STATIC DATA
// ==========================================
import shivShaktiSadhanaData from "../features/membership/data/shivShaktiSadhanaData";
import saptaRishiSadhanaData from "../features/membership/data/saptaRishiSadhanaData";
import pashuPatayaaData from "../features/membership/data/pashuPatayaaData";
import shaktiSadhanaData from "../features/membership/data/shaktiSadhanaData";
import TermsAndConditions from "../features/terms/pages/TermsPage";
import HostYourRetreats from "../data/dharamshala/retreats/HostYourRetreats";
import MakeYourOwnCombo from "../data/dharamshala/retreats/MakeYourOwnCombo";

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
  const { search, pathname } = useLocation();

  useEffect(() => {
    if (loc && loc !== loc.toLowerCase()) {
      navigate(`/programs/${loc.toLowerCase()}/${course}${search}`, {
        replace: true,
      });
    }
  }, [loc, course, navigate, search]);

  return <OmbYogaPage key={pathname.toLowerCase()} />;
}

function NormalisedLocationRoute() {
  const { location: loc } = useParams();
  const navigate = useNavigate();
  const { search, pathname } = useLocation();

  useEffect(() => {
    if (loc && loc !== loc.toLowerCase()) {
      navigate(`/programs/${loc.toLowerCase()}${search}`, {
        replace: true,
      });
    }
  }, [loc, navigate, search]);

  return <LocationLandingPage key={pathname.toLowerCase()} />;
}

function OnlineYogaRoute() {
  const { pathname } = useLocation();
  return <OnlineYogaPage key={pathname.toLowerCase()} />;
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
<Route
  path="retreats/personalize-your-retreat/host-your-retreat"
  element={<HostYourRetreats />}
/>
<Route
  path="retreats/personalize-your-retreat/make-your-own-combo"
  element={<MakeYourOwnCombo/>}
/>
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
            <Route
        path="/terms-and-conditions"
        element={<TermsAndConditions />}
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
  element={<OnlineYogaRoute />}
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
            path="retreats/personalize-your-retreat/host-your-retreat"
            element={<HostYourRetreats />}
          />
          <Route
            path="retreats/personalize-your-retreat/make-your-own-combo"
            element={<MakeYourOwnCombo />}
          />

          <Route
            path="retreats/:location/:course"
            element={<NormalisedTTCRoute />}
          />

          <Route
            path="checkout"
            element={<CheckoutPage />}
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
  useEffect(() => {
    fetchAndApplyDynamicPrices();
  }, []);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;