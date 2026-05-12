import React from 'react';
import './Styles/Community.css';
import embraceImage from '../../images/Gallery/5.jpeg';
import communityGroupImage from '../../images/Gallery/13.jpg';
import community_img3 from '../../images/Gallery/14.jpg';

const Community = () => {
  return (
    <section className="community-school-section">
      <div className="container">

        {/* Section Header */}
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="community-school-title">
              School and Community
            </h2>
          </div>
        </div>

        {/* Content Row */}
        <div className="row g-4">

          {/* First Column */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="community-school-card">

              {/* Intro */}
              <div className="community-school-intro">
                <div className="d-flex align-items-start">
                  <div className="community-school-bullet">
                    <span>◆</span>
                  </div>
                  <p className="community-school-description">
                    The school was opened on the 6th of June 2016 and has successfully 
                    certified more than 1,700 students worldwide
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="community-school-image-container">
                <img 
                  src={embraceImage}
                  alt="Yoga community embracing"
                  className="community-school-image"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="community-school-info">
                <p className="community-school-subtitle">
                  A place of strength, growth and expansion.
                </p>
                <p className="community-school-highlight">
                  <strong>We're a community, a family, a school and a charity center.</strong>
                </p>
                <p className="community-school-text">
                  We conduct seminars and events around the world, making yoga teaching 
                  training more accessible and affordable for everyone
                </p>
              </div>

            </div>
          </div>

          {/* Second Column */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="community-school-card">

              {/* Intro */}
              <div className="community-school-intro">
                <div className="d-flex align-items-start">
                  <div className="community-school-bullet">
                    <span>◆</span>
                  </div>
                  <p className="community-school-description">
                    People come to us from all over the world, bringing unique stories 
                    and diverse cultural experiences into one shared journey
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="community-school-image-container">
                <img 
                  src={communityGroupImage}
                  alt="Global yoga community"
                  className="community-school-image"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="community-school-info">
                <p className="community-school-subtitle">
                  Unity in diversity and shared purpose.
                </p>
                <p className="community-school-highlight">
                  <strong>All backgrounds, all levels — everyone is welcome here.</strong>
                </p>
                <p className="community-school-text">
                  Our philosophy is <em>"You already have everything you need to start"</em>. 
                  No matter your age, weight, or nationality, your journey begins exactly where you are
                </p>
              </div>

            </div>
          </div>

          {/* Third Column */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="community-school-card">

              {/* Intro */}
              <div className="community-school-intro">
                <div className="d-flex align-items-start">
                  <div className="community-school-bullet">
                    <span>◆</span>
                  </div>
                  <p className="community-school-description">
                    Join our global community where transformation meets tradition, 
                    and every journey is supported with love and guidance
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="community-school-image-container">
                <img 
                  src={community_img3}
                  alt="Yoga gathering"
                  className="community-school-image"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="community-school-info">
                <p className="community-school-subtitle">
                  Where every soul finds its home.
                </p>
                <p className="community-school-highlight">
                  <strong>Creating lasting bonds that transcend borders and cultures.</strong>
                </p>
                <p className="community-school-text">
                  Experience the power of collective growth and shared wisdom in a 
                  nurturing environment designed for personal transformation
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Community;