import React from 'react';
import './Styles/AboutHeader.css';
import hero_img from '../../images/Background.jpg';

const AboutHeader = () => {
  return (
    <section className="about-header-section">
      <div className="container-fluid about-header-main-content">
        <div className="row justify-content-center">
          <div className="col-12">
            {/* About Us Header */}
            <div className="text-center pt-4 mb-4">
              <h6 className="about-header-subtitle">
                ABOUT US
              </h6>
            </div>

            {/* Main Title */}
            <div className="text-center mb-4">
              <h1 className="about-header-main-title">
                LIFE CHANGING HOLISTIC<br />
                YOGA SCHOOL AND<br />
                COMMUNITY
              </h1>
            </div>

            {/* Subtitle */}
            <div className="text-center mb-5">
              <p className="about-header-description">
                Ombreathe - Yoga Alliance Accredited School
              </p>
            </div>

            {/* Image Section */}
            <div className="row justify-content-center mt-5">
              <div className="col-lg-8 col-md-10 col-12">
                <div className="about-header-image-wrapper">
                  <img 
                    src={hero_img}
                    alt="Yoga graduation ceremony with students and instructors in white clothing, sitting together outdoors with certificate"
                    className="about-header-hero-image"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;