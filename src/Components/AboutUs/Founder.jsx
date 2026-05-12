import React from 'react';
import './Styles/Founder.css';
import founderImage from '../../images/Teachers/Ranjan_Sir_Image.jpg';

const Founder = () => {
  return (
    <section className="founder-philosopher-section">
      <div className="container">
        {/* Content Row */}
        <div className="row align-items-center">
          {/* Left Column - Text Content */}
          <div className="col-lg-7 col-xl-8 col-md-12">
            <div className="founder-philosopher-content">
              {/* Section Header with Diamond */}
              <div className="founder-philosopher-header">
                <div className="d-flex align-items-start">
                  <div className="founder-philosopher-bullet">
                    <span>◆</span>
                  </div>
                  <h2 className="founder-philosopher-title">
                    Founder and Philosopher
                  </h2>
                </div>
              </div>

              {/* First Paragraph */}
              <div className="founder-philosopher-text-block">
                <p className="founder-philosopher-intro">
                  <span className="founder-philosopher-brand">Ombreathe</span> - Founder 
                  <span className="founder-philosopher-name"> Yogi Ranjan</span>
                </p>
                <p className="founder-philosopher-description">
                 Yogi Ranjan is a highly experienced yoga teacher and practitioner, with over 10 years of deep-rooted experience in the field of yoga, meditation, and spiritual exploration. His journey is marked by dedication, discipline, and a profound connection to the ancient yogic traditions of India.
                </p>
              </div>

              {/* Second Paragraph */}
              <div className="founder-philosopher-text-block">
                <p className="founder-philosopher-description">
            A devoted follower of Lord Shiva, Yogi Ranjan has traveled extensively across the Indian subcontinent, particularly through the Himalayas and sacred spiritual sites, to deepen his understanding of yogic science and spiritual philosophy. These travels have allowed him to study under the direct guidance of renowned gurus and Himalayan masters, enriching his practice with authentic knowledge and experiential wisdom.
                </p>
              </div>

              {/* Third Paragraph */}
              <div className="founder-philosopher-text-block">
                <p className="founder-philosopher-description">
                Yogi Ranjan is also a respected Yog Acharya, known for his grounded yet transformative teaching style that integrates traditional Hatha, Raja, and Kundalini yoga practices. As an alumnus of the Isha Foundation, he brings a unique blend of classical discipline and inner science to his students, empowering them with tools for self-realization and holistic well-being. <br/><br/>Throughout his decade-long journey, Yogi Ranjan has guided countless students from India and abroad, offering teachings that go beyond physical postures—focusing instead on inner stillness, breath mastery, and the cultivation of higher awareness. His life and work reflect a commitment to sharing the timeless essence of yoga as a path to liberation and inner harmony.
                </p>
              </div>

              {/* Quote */}
              <div className="founder-philosopher-quote-container">
                <blockquote className="founder-philosopher-quote">
                  "Creating conscious communities to elevate spirituality and add more love and light to the world."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Right Column - Founder Image */}
          <div className="col-lg-5 col-xl-4 col-md-12">
            <div className="founder-philosopher-image-container">
              <div className="founder-philosopher-image-wrapper">
                <img 
                  src={founderImage}
                  alt="Wissam Barakeh - Founder and Philosopher"
                  className="founder-philosopher-image"
                  loading="lazy"
                />
                <div className="founder-philosopher-image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;