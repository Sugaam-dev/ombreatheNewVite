import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import optimized components
import AboutHeader from './AboutHeader.jsx';
import AboutUsSection from './AboutUsSection.jsx';
import Community from './Community.jsx';
import Founder from './Founder.jsx';
import YogaTeachers from '../Teachers/YogaTeachers.jsx';
import Gallery from '../HomeCredentials/Gallery.jsx';


import Experience from './Experiences.jsx';

const AboutUsPage = () => {
  return (
    <main className="aboutus-main-page">
      {/* Hero Section - About Us Header */}
      <AboutHeader />
      
      {/* Reach Potential Section */}
      <AboutUsSection />

      {/* School and Community Section */}
      <Community />

      {/* Founder and Philosopher Section */}
      <Founder />
<Experience/>
      {/* Yoga Teachers Section */}
      <YogaTeachers />

      {/* Gallery Section */}
      <Gallery />
    </main>
  );
};

export default AboutUsPage;