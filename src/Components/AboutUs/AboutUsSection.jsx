import React from 'react';
import './Styles/AboutUsSection.css';
import heroAboutImage from '../../images/Gallery/10.jpg';

const AboutUsSection = () => {
  return (
    <section className="aboutus-reach-potential-section">
      {/* Hero Section with Parallax Background */}
      <div 
        className="aboutus-hero-background"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroAboutImage})`
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-12">
              <h2 className="aboutus-hero-text">
                Reach your highest<br />
                potential
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="aboutus-description-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-11 col-12">
              <div className="aboutus-description-content">
                <p className="aboutus-description-text">
                  <span className="aboutus-highlight-text">Ombreathe</span> - We offer more than just the physical aspect of 
                  Yoga. Our community members develop the connection 
                  between the mind and body, build discipline and inner 
                  strength, get inspired and inspire others
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;