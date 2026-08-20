import React, { useState, useEffect, useRef } from 'react';

// Importing local images
import yogaAllianceLogo from '../../../images/cirtificats/yoga.webp'; 
import y100 from '../../../images/cirtificats/100logo.webp';
import rys200 from '../../../images/cirtificats/200.webp';
import rys300 from '../../../images/cirtificats/300yy.webp';
import rys500 from '../../../images/cirtificats/500.webp';
import yacep from '../../../images/cirtificats/YACEP.webp';

// Helper component for external BookRetreats scripts
const BookRetreatsWidget = ({ id, widgetType, load }) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!load || !containerRef.current) return;
    containerRef.current.innerHTML = ''; // Clear container to avoid duplicate widgets
    
    const script = document.createElement('script');  
    script.src = `https://bookretreats.com/widgets/${widgetType}/${id}`;
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    containerRef.current.appendChild(script);
  }, [id, widgetType, load]);

  return <div id={`${id}_${widgetType}`} ref={containerRef} style={{ width: '100%', display: 'flex', justifyContent: 'center' }} />;
};

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
  const [hasIntersected, setHasIntersected] = useState(false);
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
    const timer = setTimeout(() => {
      setHasIntersected(true);
    }, 3000);
    return () => clearTimeout(timer);
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
      grid-template-columns: 0.9fr 1fr 1fr 1.6fr; /* Rebalanced desktop grid layout */
      align-items: stretch; /* Stretches columns to same height so vertical centering aligns perfectly */
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
                <BookRetreatsWidget id="27436" widgetType="recommend" load={hasIntersected} />
              </div>
              <div
                className={`shield-wrapper ${isIntersecting ? 'is-visible' : ''}`}
                style={{ transitionDelay: '0.5s' }}
              >
                <BookRetreatsWidget id="27436" widgetType="ratings" load={hasIntersected} />
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 4: YOGA ACCREDITATIONS */}
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