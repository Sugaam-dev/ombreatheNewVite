import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import optimized components
import AboutHeader from '../components/AboutHeader.jsx';
import AboutUsSection from '../components/AboutUsSection.jsx';
import Community from '../components/Community.jsx';
import Founder from '../components/Founder.jsx';
import YogaTeachers from '../../teachers/pages/TeachersPage.jsx';
import Gallery from '../../home/sections/Gallery.jsx';


import Experience from '../components/Experiences.jsx';

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