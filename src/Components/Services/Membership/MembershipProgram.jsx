import React, { useState, useEffect, useCallback } from 'react';
import './MembershipProgram.css';
import { useNavigate } from 'react-router-dom';

const MembershipProgram = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState({});
  const [imagesVisible, setImagesVisible] = useState({});

   const navigate =useNavigate()
    const url=()=>{
      navigate(data.hero.url)
    }

  useEffect(() => {
    setIsVisible(true);
    
    // Stagger animations for feature items
    const timeouts = [];
    data.features.forEach((_, index) => {
      timeouts.push(
        setTimeout(() => {
          setAnimatedItems(prev => ({ ...prev, [index]: true }));
        }, 300 + index * 200)
      );
    });

    // Stagger image animations
    [0, 1, 2].forEach((index) => {
      timeouts.push(
        setTimeout(() => {
          setImagesVisible(prev => ({ ...prev, [index]: true }));
        }, 500 + index * 300)
      );
    });


 

    return () => timeouts.forEach(clearTimeout);
  }, [data.features]);

  // Memoized button hover handlers
  const handleMouseEnter = useCallback((e) => {
    e.target.style.transform = 'translateY(-2px)';
    e.target.style.boxShadow = `0 12px 35px ${data.theme.buttonShadow}`;
  }, [data.theme.buttonShadow]);

  const handleMouseLeave = useCallback((e) => {
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = `0 8px 25px ${data.theme.buttonShadow}`;
  }, [data.theme.buttonShadow]);

  return (
    <>
      <div className="mp-container" style={{'--primary-color': data.theme.primary, '--accent-color': data.theme.accent}}>
        {/* Hero Section */}
        <div className="mp-hero-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 col-xl-8">
                <div className="text-center">
                  
                  <div className="mb-4 mb-md-5">
                    <h6 className="mp-header-subtitle">
                      {data.hero.subtitle}
                    </h6>
                  </div>

                  <div className="mb-4 mb-md-5">
                    <h1 className="mp-main-title">
                      {data.hero.title}
                    </h1>
                    
                    <p className="mp-subtitle">
                      {data.hero.description}
                    </p>
                  </div>

                  <div className="mp-pricing-section">
                    <div className="d-flex align-items-center justify-content-center flex-wrap gap-4 mb-3">
                      <div className="mp-price-card">
                        <h6>NRI Pricing</h6>
                        <span className="mp-price">{data.pricing.nri.amount}</span>
                        <p>+ {data.pricing.nri.registration} Registration Fee</p>
                      </div>
                      <div className="mp-price-divider">OR</div>
                      <div className="mp-price-card">
                        <h6>Bharatvaasi Pricing</h6>
                        <span className="mp-price">{data.pricing.indian.amount}</span>
                        <p>+ {data.pricing.indian.registration} Registration Fee</p>
                      </div>
                    </div>
                    
                    <p className="mp-pricing-note">
                      {data.pricing.inclusions}
                    </p>
                  </div>

                  <div className="mb-4">
                    <button 
                      className="mp-cta-button" 
                      style={{backgroundColor: data.theme.primary}}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={url}
                    >
                      {data.hero.ctaText}
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Image Section */}
        <section className="mp-image-section">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-4 d-flex justify-content-center">
                <img 
                  src={data.images.main}
                  alt={data.images.mainAlt} 
                  className="mp-main-image"
                />
              </div>

              <div className="col-12">
                <div className="row align-items-start">
                  <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                    <h2 className="mp-section-heading">
                      {data.completion.title}
                    </h2>
                    
                    <div className="mb-3">
                      <h5 className="mp-benefits-title">What you'll gain:</h5>
                      <ul className="mp-benefits-list">
                        {data.completion.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="mp-certification-section">
                      {/* <div className="mp-cert-badges">
                        {data.certifications.map((cert, index) => (
                          <div key={index} className="mp-cert-circle">
                            <img 
                              src={cert.image}
                              alt={cert.alt} 
                              className="mp-cert-image"
                            />
                          </div>
                        ))}
                      </div> */}

                      <div className="mp-cert-text">
                        {data.completion.certificationText.map((text, index) => (
                          <p key={index} className={index === data.completion.certificationText.length - 1 ? 'mp-tagline' : ''}>
                            {text}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <div className="mp-about-section">
          <div className="container-fluid">
            <div className={`mp-about-content ${isVisible ? 'mp-visible' : ''}`}>
              <div className="row g-5">
                <div className="col-lg-6">
                  <div className="mp-diamond-logo" style={{backgroundColor: data.theme.accent}}></div>
                  
                  <h6 className="mp-section-title">{data.about.sectionTitle}</h6>
                  
                  <h1 className="mp-about-heading">
                    {data.about.heading}
                  </h1>

                  <div className="mp-features-container">
                    {data.features.map((feature, index) => (
                      <div 
                        key={index} 
                        className={`mp-feature-item ${animatedItems[index] ? 'mp-animated' : ''}`}
                      >
                        <div className="mp-feature-icon">
                          {feature.icon}
                        </div>
                        <div className="mp-feature-text">
                          <h5>{feature.title}</h5>
                          <p>{feature.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="mp-images-container">
                    <div className={`mp-main-about-image ${isVisible ? 'mp-visible' : ''}`}>
                      <img 
                        src={data.images.aboutMain}
                        alt={data.images.aboutMainAlt}
                      />
                    </div>
                    
                    <div className="mp-secondary-images">
                      {data.images.gallery.map((img, index) => (
                        <div key={index} className={`mp-secondary-image ${isVisible ? 'mp-visible' : ''}`} style={{ transitionDelay: `${0.4 + index * 0.2}s` }}>
                          <img 
                            src={img.src}
                            alt={img.alt}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transformation Section */}
        <div className="mp-transformation-section" style={{backgroundImage: `url(${data.images.transformationBg})`}}>
          <div className="mp-transformation-overlay">
            <div>
              <p className="mp-transformation-text">
                {data.transformation.mainText}
              </p>
              <p className="mp-transformation-subtitle">
                {data.transformation.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Practices Section */}
        <div className="mp-practices-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className={`mp-practices-heading ${isVisible ? 'mp-visible' : ''}`}>
                  {data.practices.heading}
                </h1>

                <p className={`mp-practices-subtitle ${isVisible ? 'mp-visible' : ''}`}>
                  {data.practices.description}
                </p>
              </div>
            </div>

            <div className="row g-4">
              {data.practices.items.map((practice, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-12">
                  <div 
                    className={`mp-practice-card ${imagesVisible[index] ? 'mp-visible' : ''}`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <img src={practice.image} alt={practice.alt} />
                    <div className="mp-practice-overlay"></div>
                    <div className="mp-practice-content">
                      <h3 className="mp-practice-title">{practice.title}</h3>
                      <p className="mp-practice-description">{practice.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="row mt-5">
              <div className="col-12">
                <div className="text-center">
                  <h3 className="mb-4 mp-unique-title">{data.unique.title}</h3>
                  <div className="row g-4">
                    {data.unique.items.map((item, index) => (
                      <div key={index} className="col-md-4">
                        <div className="mp-unique-card">
                          <h5 className="mp-unique-card-title">{item.title}</h5>
                          <p className="mp-unique-card-text">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum Section */}
        <div className="mp-curriculum-section">
          <div className="container mb-5">
            <div className="text-center">
              <h1 className="mp-curriculum-heading">
                {data.curriculum.title}
              </h1>
              <h2 className="mp-curriculum-subheading">
                {data.curriculum.subtitle}
              </h2>
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  {data.curriculum.description.map((desc, index) => (
                    <p key={index} className="mp-curriculum-description">{desc}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row g-4">
              {data.curriculum.modules.map((module, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                  <div className="mp-curriculum-card">
                    <div className="mp-curriculum-card-body">
                      <div className="text-center mb-3">
                        <div className="mp-curriculum-icon">
                          {module.icon}
                        </div>
                      </div>
                      
                      <h4 className="mp-curriculum-title">
                        {module.title}
                      </h4>
                      
                      <ul className="mp-curriculum-content">
                        {module.content.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <span className="mp-curriculum-bullet">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Options (if applicable) */}
            {data.additionalOptions && (
              <div className="row mt-5">
                <div className="col-12">
                  <h3 className="text-center mb-4 mp-additional-title">{data.additionalOptions.title}</h3>
                  <div className="row g-4">
                    {data.additionalOptions.options.map((option, index) => (
                      <div key={index} className="col-md-6 col-lg-3">
                        <div className="mp-additional-card">
                          <div className="mp-additional-card-body">
                            <h5 className="mp-additional-season">{option.name}</h5>
                            <p className="mp-additional-timing">{option.timing}</p>
                            <p className="mp-additional-description">{option.description}</p>
                            {option.highlights && (
                              <ul className="mp-additional-highlights">
                                {option.highlights.map((highlight, hIndex) => (
                                  <li key={hIndex}>{highlight}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Daily Schedule Section */}
        <div className="mp-schedule-section">
          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h1 className="mp-schedule-heading">
                  {data.schedule.title}
                </h1>
                <p className="mp-schedule-description">
                  {data.schedule.description}
                </p>
                {data.schedule.note && (
                  <div className="mt-4">
                    <p className="mp-schedule-note">
                      {data.schedule.note}
                    </p>
                  </div>
                )}
              </div>
              <div className="col-lg-6">
                <div className="position-relative">
                  <img 
                    src={data.schedule.image}
                    alt={data.schedule.imageAlt}
                    className="mp-schedule-image"
                  />
                </div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-lg-6">
                <hr className="mp-schedule-divider" />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="pe-lg-4">
                  <h3 className="mp-schedule-session-title">
                    {data.schedule.morning.title}
                  </h3>
                  {data.schedule.morning.activities.map((activity, index) => (
                    <div key={index} className="mp-schedule-item">
                      <span className="mp-schedule-time">
                        {activity.time}
                      </span>
                      <span className="mp-schedule-activity">
                        - {activity.activity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="ps-lg-4">
                  <h3 className="mp-schedule-session-title">
                    {data.schedule.afternoon.title}
                  </h3>
                  {data.schedule.afternoon.activities.map((activity, index) => (
                    <div key={index} className="mp-schedule-item">
                      <span className="mp-schedule-time">
                        {activity.time}
                      </span>
                      <span className="mp-schedule-activity">
                        - {activity.activity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12">
                <div className="mp-schedule-info-card">
                  <div className="mp-schedule-info-body">
                    <h4 className="mp-schedule-info-title">{data.schedule.info.title}</h4>
                    {data.schedule.info.content.map((content, index) => (
                      <p key={index} className="mp-schedule-info-text">{content}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sacred Places/Locations Section (if applicable) */}
        {data.locations && (
          <div className="mp-locations-section">
            <div className="container">
              <div className="text-center mb-5">
                <h2 className="mp-locations-heading">
                  {data.locations.title}
                </h2>
                <p className="mp-locations-description">
                  {data.locations.description}
                </p>
              </div>

              <div className="row g-4">
                {data.locations.places.map((place, index) => (
                  <div key={index} className="col-md-6 col-lg-4">
                    <div className="mp-location-card">
                      <div className="mp-location-header">
                        <h5 className="mp-location-name">{place.name}</h5>
                        <span className="mp-location-region">{place.location}</span>
                      </div>
                      <p className="mp-location-description">{place.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {data.locations.note && (
                <div className="text-center mt-4">
                  <p className="mp-locations-note">
                    {data.locations.note}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Final Section */}
        <div className="mp-final-section">
          <div className="container">
            <div className="text-center">
              <h2 className="mp-final-heading">
                {data.final.title}
              </h2>
              <p className="mp-final-description">
                {data.final.description}
              </p>
              
              <div className="row g-4 mt-5">
                {data.final.benefits.map((benefit, index) => (
                  <div key={index} className="col-md-4">
                    <div className="mp-final-benefit">
                      <h5 className="mp-final-benefit-title">{benefit.title}</h5>
                      <p className="mp-final-benefit-text">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <button 
                  className="mp-final-cta-button" 
                  style={{backgroundColor: data.theme.accent}}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {data.final.ctaText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MembershipProgram;