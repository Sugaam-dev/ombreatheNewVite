import { useState, useEffect, useRef } from 'react';

// Importing local images
import yogaAllianceLogo from '../../../images/cirtificats/yoga.webp'; 
import y100 from '../../../images/cirtificats/100logo.webp';
import rys200 from '../../../images/cirtificats/200.webp';
import rys300 from '../../../images/cirtificats/300yy.webp';
import rys500 from '../../../images/cirtificats/500.webp';
import yacep from '../../../images/cirtificats/YACEP.webp';

// Helper component for external BookRetreats scripts
const RecommendWidgetMockup = () => (
  <div className="book-widget-container">
    <div className="book-widget-header">
      <div className="book-widget-logo-base">
        <a target="_blank" href="https://bookretreats.com/search?pageNumber=1" rel="noopener noreferrer">
          <div className="book-widget-logo-body">
            <div>
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 0C6.49367 0 0 6.49367 0 14.5C0 22.5064 6.49367 29 14.5 29C22.5064 29 29 22.5064 29 14.5C29 6.49367 22.5147 0 14.5 0ZM14.5 26.7353C7.75563 26.7353 2.26484 21.2444 2.26484 14.5C2.26484 7.75563 7.75563 2.26484 14.5 2.26484C21.2444 2.26484 26.7353 7.75563 26.7353 14.5C26.7353 21.2444 21.2527 26.7353 14.5 26.7353ZM19.9406 8.83372H9.05937C8.14005 8.83372 7.29597 9.33517 6.86138 10.1542C6.42681 10.9648 6.47696 11.9427 6.98674 12.7115L12.4274 20.8683C12.887 21.562 13.6643 21.9798 14.5 21.9798C15.3357 21.9798 16.113 21.562 16.5726 20.8683L22.0133 12.7115C22.5231 11.9427 22.5732 10.9648 22.1386 10.1542C21.704 9.33517 20.86 8.83372 19.9406 8.83372ZM20.1329 11.4496L14.6922 19.6063C14.6086 19.7317 14.3997 19.7317 14.3161 19.6063L8.87551 11.4496C8.83372 11.3827 8.82536 11.2908 8.85879 11.2156C8.90058 11.1403 8.9758 11.0986 9.05937 11.0986H19.9323C20.0158 11.0986 20.0911 11.1403 20.1329 11.2156C20.1746 11.2908 20.1746 11.3827 20.1329 11.4496Z" fill="white"/>
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
              <span className="book-widget-logo-texts" style={{ fontSize: '9px', lineHeight: '10px', opacity: 0.9 }}>Recommended on</span>
              <span style={{ fontSize: '13px', fontWeight: '800', lineHeight: '14px', letterSpacing: '-0.3px' }}>BookRetreats</span>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div className="book-widget-footer">
      <div className="book-center-link">
        <a target="_blank" href="https://bookretreats.com/organizers/o/yogi-ranjan" rel="noopener noreferrer">Yogi Ranjan</a>
      </div>
    </div>
  </div>
);

const RatingsWidgetMockup = () => (
  <div className="book-widget-container">
    <div className="book-widget-header">
      <div className="book-widget-logo-base">
        <a target="_blank" href="https://bookretreats.com/organizers/o/yogi-ranjan#reviews" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '12px' }}>
          <div className="book-widget-logo-body">
            <div>
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 0C6.49367 0 0 6.49367 0 14.5C0 22.5064 6.49367 29 14.5 29C22.5064 29 29 22.5064 29 14.5C29 6.49367 22.5147 0 14.5 0ZM14.5 26.7353C7.75563 26.7353 2.26484 21.2444 2.26484 14.5C2.26484 7.75563 7.75563 2.26484 14.5 2.26484C21.2444 2.26484 26.7353 7.75563 26.7353 14.5C26.7353 21.2444 21.2527 26.7353 14.5 26.7353ZM19.9406 8.83372H9.05937C8.14005 8.83372 7.29597 9.33517 6.86138 10.1542C6.42681 10.9648 6.47696 11.9427 6.98674 12.7115L12.4274 20.8683C12.887 21.562 13.6643 21.9798 14.5 21.9798C15.3357 21.9798 16.113 21.562 16.5726 20.8683L22.0133 12.7115C22.5231 11.9427 22.5732 10.9648 22.1386 10.1542C21.704 9.33517 20.86 8.83372 19.9406 8.83372ZM20.1329 11.4496L14.6922 19.6063C14.6086 19.7317 14.3997 19.7317 14.3161 19.6063L8.87551 11.4496C8.83372 11.3827 8.82536 11.2908 8.85879 11.2156C8.90058 11.1403 8.9758 11.0986 9.05937 11.0986H19.9323C20.0158 11.0986 20.0911 11.1403 20.1329 11.2156C20.1746 11.2908 20.1746 11.3827 20.1329 11.4496Z" fill="white"/>
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
              <span className="book-widget-logo-texts" style={{ fontSize: '9px', lineHeight: '10px', opacity: 0.9 }}>Read reviews</span>
              <span style={{ fontSize: '13px', fontWeight: '800', lineHeight: '14px', letterSpacing: '-0.3px' }}>BookRetreats</span>
            </div>
          </div>
          <div className="book-widget-star" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px' }}>
            <svg width="12" height="11" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.88307 0.767617L5.85809 2.72902C5.90692 2.82795 6.00122 2.897 6.11068 2.91299L8.29353 3.22832C8.38193 3.24011 8.4615 3.28642 8.51581 3.35714C8.61769 3.48975 8.60211 3.6775 8.48003 3.79159L6.89794 5.32148C6.81753 5.39726 6.78174 5.5084 6.80279 5.6166L7.18169 7.77544C7.20821 7.95437 7.08612 8.12192 6.9072 8.15097C6.8331 8.16234 6.75733 8.15055 6.68997 8.11729L4.74582 7.09807C4.64815 7.04502 4.53112 7.04502 4.43345 7.09807L2.475 8.12276C2.31124 8.20612 2.11084 8.14423 2.02159 7.98384C1.98749 7.919 1.97571 7.84533 1.98749 7.77334L2.36639 5.61449C2.38533 5.50672 2.34955 5.396 2.27124 5.3198L0.680732 3.79033C0.551067 3.66151 0.550225 3.45187 0.679469 3.3222L0.680732 3.32052C0.734198 3.2721 0.799873 3.23969 0.871021 3.22706L3.05429 2.91173C3.16332 2.89447 3.25721 2.82627 3.30688 2.72734L4.28105 0.767617C4.3202 0.68805 4.38966 0.627006 4.47386 0.59922C4.55848 0.571014 4.6511 0.57775 4.73067 0.617744C4.79592 0.650161 4.84939 0.702785 4.88307 0.767617Z" fill="#FFC621"/>
            </svg>
            <span style={{ fontSize: '9px', color: '#FFF', fontWeight: '700', lineHeight: '9px', marginTop: '1px' }}>4.5</span>
          </div>
        </a>
      </div>
    </div>
    <div className="book-widget-footer">
      <div className="book-center-link">
        <a target="_blank" href="https://bookretreats.com/organizers/o/yogi-ranjan" rel="noopener noreferrer">Yogi Ranjan</a>
      </div>
    </div>
  </div>
);

const TrustBanner = () => {
  const certificates = [
    { id: 1, name: 'Yoga Alliance', src: yogaAllianceLogo },
    { id: 2, name: 'Y100', src: y100 },
    { id: 3, name: 'RYS 200', src: rys200 },
    { id: 4, name: 'RYS 300', src: rys300 },
    { id: 5, name: 'RYS 500', src: rys500 },
    { id: 6, name: 'YACEP', src: yacep },
  ];

  const bannerRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [brokenImages, setBrokenImages] = useState({});
  const [studentCount, setStudentCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0.0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
          setStudentCount(0);
          setRatingCount(0.0);
        }
      },
      { threshold: 0.1 } 
    );
    if (bannerRef.current) observer.observe(bannerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;
    let startTimestamp = null;
    const duration = 1400; 
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutQuad = (x) => 1 - (1 - x) * (1 - x);
      const easedProgress = easeOutQuad(progress);
      setStudentCount(Math.floor(easedProgress * 1000)); 
      setRatingCount(parseFloat((easedProgress * 4.5).toFixed(1))); // Cap rating animation at 4.5
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [isIntersecting]);

  const handleImageError = (id) => setBrokenImages(prev => ({ ...prev, [id]: true }));

  // Helper to determine the color/gradient of each star during count-up
  const getStarFill = (index, rating) => {
    if (rating >= index + 1) return '#c99a4e'; // Full gold star
    if (rating > index && rating < index + 1) return 'url(#halfStarGrad)'; // 4.5 rating half-filled star
    return '#dcd4c9'; // Empty star neutral grey-beige
  };

  const stylesCSS = `
    .trust-banner-wrapper {
      background: linear-gradient(135deg, #fbf9f4 0%, #f6f1e7 50%, #f1eae0 100%);
      border-top: 1px solid rgba(197, 185, 172, 0.35);
      border-bottom: 1px solid rgba(197, 185, 172, 0.35);
      padding: 24px 0;
      position: relative;
      overflow: hidden;
      width: 100%;
      font-family: var(--font-trust);
    }

    .trust-banner-wrapper::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -10%;
      width: 50%;
      height: 200%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
      pointer-events: none;
      transform: rotate(-15deg);
    }

    .trust-banner-container {
      width: 100%;
      max-width: 100%;
      padding: 0 40px;
      box-sizing: border-box;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 0.9fr 1fr 1.2fr 1.6fr; /* 4 columns: Graduated Yogis, Top Tier Reviews, Booking Trust, Yoga Accreditations */
      align-items: stretch;
      gap: 32px;
      position: relative;
      z-index: 1;
    }

    @media (max-width: 1200px) {
      .trust-banner-container {
        grid-template-columns: 1fr 1fr;
        gap: 36px 24px;
        padding: 0 24px;
        align-items: start;
      }
    }

    @media (max-width: 768px) {
      .trust-banner-container {
        grid-template-columns: 1fr;
        gap: 32px;
        padding: 0 20px;
      }
    }

    /* Common Column Structure */
    .banner-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      width: 100%;
      text-align: center;
      height: 100%;
    }

    @media (max-width: 1200px) {
      .banner-col {
        height: auto;
      }
    }

    .section-title {
      font-size: var(--trust-label-size);
      font-weight: 700;
      color: #61564b;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin-top: 0;
      margin-bottom: 2px;
      text-align: center;
      width: 100%;
    }

    /* Vertical centering wrapper for column contents */
    .col-content {
      flex-grow: 1;
      display: flex;
      align-items: center; /* Centers counter / rating / widgets / certs vertically */
      justify-content: center; /* Centers content horizontally */
      width: 100%;
    }

    /* Stats Content styles */
    .stat-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      opacity: 0;
      transform: translateY(12px);
      transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
      width: 100%;
    }

    .stat-item.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .stat-number-wrapper {
      display: flex;
      align-items: baseline;
      width: auto; /* Changed to auto to prevent wrapping/shifting */
      justify-content: center;
      margin: 0;
    }

    .stat-number {
      font-size: var(--trust-number-size);
      font-weight: 800;
      color: #2a2421;
      margin: 0;
      letter-spacing: -0.02em;
      line-height: 1;
      font-variant-numeric: tabular-nums;
      font-feature-settings: "tnum";
    }

    .stat-plus {
      font-size: var(--trust-plus-size);
      font-weight: 700;
      color: #c99a4e;
      margin-left: 3px;
    }

    .rating-wrapper {
      display: flex;
      align-items: center;
      gap: 8px; /* Reduced gap to keep rating & stars connected */
      justify-content: center;
      width: auto;
    }

    .stars-badge {
      display: flex;
      align-items: center;
      gap: 3px;
      background: #ffffff;
      padding: 6px 12px;
      border-radius: 30px;
      box-shadow: 0 3px 10px rgba(141, 127, 110, 0.04);
      border: 1px solid rgba(197, 185, 172, 0.2);
    }

    .star-icon {
      width: 14px;
      height: 14px;
      opacity: 0;
      transform: scale(0.5);
      transition: opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .star-icon.pop {
      opacity: 1;
      transform: scale(1);
    }

    /* Trust Shields Grid */
    .shields-grid {
      display: flex;
      gap: 16px;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    @media (max-width: 480px) {
      .shields-grid {
        flex-direction: column;
        align-items: stretch;
      }
    }

    .shield-wrapper {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
      opacity: 0;
      transform: translateY(12px);
    }

    .shield-wrapper.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .shield-wrapper:hover {
      transform: translateY(-5px);
    }

    /* Certificates Grid */
    .certs-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 16px;
      align-items: center;
      justify-items: center;
      width: 100%;
    }

    @media (max-width: 640px) {
      .certs-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px 16px;
      }
    }

    .cert-item {
      height: 84px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      opacity: 0;
      transform: translateY(12px);
      transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
    }

    .cert-item.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .cert-img {
      height: 100%;
      width: auto;
      max-width: 100%;
      object-fit: contain;
      mix-blend-mode: multiply;
      opacity: 0.72;
      filter: sepia(0.12) contrast(0.9);
      transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    }

    .cert-item:hover .cert-img {
      opacity: 1;
      filter: sepia(0) contrast(1.05);
      transform: translateY(-6px);
    }

    .cert-glow {
      position: absolute;
      bottom: -8px;
      width: 60%;
      height: 6px;
      background: rgba(197, 185, 172, 0.25);
      border-radius: 50%;
      filter: blur(4px);
      opacity: 0;
      transition: opacity 0.4s ease, transform 0.4s ease;
      pointer-events: none;
    }

    .cert-item:hover .cert-glow {
      opacity: 1;
      transform: scale(1.15);
    }

    .fallback-badge {
      font-size: 10px;
      font-weight: 700;
      padding: 8px 12px;
      background: #ffffff;
      color: #5c5246;
      border-radius: 6px;
      border: 1px solid rgba(197, 185, 172, 0.3);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      white-space: nowrap;
      box-shadow: 0 2px 6px rgba(141, 127, 110, 0.02);
    }

    /* Mockup Widget Styles */
    .book-widget-container {
      text-align: left;
      width: 165px;
      font-family: 'Plus Jakarta Sans', sans-serif;
      margin: 10px auto;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid rgba(226, 232, 240, 0.8);
      background-color: #fff;
    }
    .book-widget-header {
      height: 52px;
    }
    .book-widget-logo-base {
      line-height: 18px !important;
      background-color: #00a6ff;
      height: 52px;
      padding-top: 12px;
    }
    .book-widget-logo-base a {
      color: #fff;
      text-decoration: none;
    }
    .book-widget-logo-body {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 8px;
      padding-right: 8px;
      gap: 6px;
    }
    .book-widget-logo-texts {
      font-size: 9px;
      font-weight: 500;
    }
    .book-widget-footer {
      font-weight: 500;
      text-align: center;
      background-color: #f1f5f9;
      padding: 5px;
    }
    .book-widget-footer a {
      color: #475569;
      font-size: 10px;
      text-decoration: underline;
      font-weight: 600;
    }
  `;

  return (
    <div ref={bannerRef} className="trust-banner-wrapper">
      <style>{stylesCSS}</style>

      {/* Star gradient definitions used to render a clean 4.5 star rating layout */}
      <svg style={{ width: 0, height: 0, position: 'absolute' }}>
        <defs>
          <linearGradient id="halfStarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" stopColor="#c99a4e" />
            <stop offset="50%" stopColor="#dcd4c9" />
          </linearGradient>
        </defs>
      </svg>

      <div className="trust-banner-container">
        
        {/* COLUMN 1: GRADUATED YOGIS */}
        <div className="banner-col">
          <h2 className="section-title">Graduated Yogis</h2>
          <div className="col-content">
            <div className={`stat-item ${isIntersecting ? 'is-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <div className="stat-number-wrapper">
                <p className="stat-number" style={{ margin: 0 }}>{studentCount.toLocaleString()}</p>
                <span className="stat-plus">+</span>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 2: TOP TIER REVIEWS */}
        <div className="banner-col">
          <h2 className="section-title">Top Tier Reviews</h2>
          <div className="col-content">
            <div className={`stat-item ${isIntersecting ? 'is-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="rating-wrapper">
                <div className="stat-number-wrapper rating-num">
                  <p className="stat-number" style={{ margin: 0 }}>{ratingCount.toFixed(1)}</p>
                </div>
                <div className="stars-badge">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`star-icon ${isIntersecting ? 'pop' : ''}`}
                      style={{
                        transitionDelay: `${0.35 + i * 0.08}s`,
                        fill: getStarFill(i, ratingCount),
                        color: getStarFill(i, ratingCount)
                      }}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 3: BOOKING TRUST */}
        <div className="banner-col">
          <h2 className="section-title">Booking Trust</h2>
          <div className="col-content">
            <div className="shields-grid">
              <div
                className={`shield-wrapper ${isIntersecting ? 'is-visible' : ''}`}
                style={{ transitionDelay: '0.4s' }}
              >
                <RecommendWidgetMockup />
              </div>
              <div
                className={`shield-wrapper ${isIntersecting ? 'is-visible' : ''}`}
                style={{ transitionDelay: '0.5s' }}
              >
                <RatingsWidgetMockup />
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 4: YOGA ACCREDITATIONS (RIGHT) */}
        <div className="banner-col">
          <h2 className="section-title">Yoga Accreditations</h2>
          <div className="col-content">
            <div className="certs-grid">
              {certificates.map((cert, index) => (
                <div
                  key={cert.id}
                  className={`cert-item ${isIntersecting ? 'is-visible' : ''}`}
                  style={{ transitionDelay: `${0.4 + index * 0.06}s` }}
                >
                  {brokenImages[cert.id] ? (
                    <span className="fallback-badge">{cert.name}</span>
                  ) : (
                    <>
                      <img
                        src={cert.src}
                        alt={cert.name}
                        className="cert-img"
                        width="150"
                        height="150"
                        onError={() => handleImageError(cert.id)}
                      />
                      <div className="cert-glow" />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrustBanner;