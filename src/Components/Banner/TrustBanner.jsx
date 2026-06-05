import React, { useState, useEffect, useRef } from 'react';

// Importing local images from your project's images folder
import yogaAllianceLogo from '../../images/cirtificats/yoga.png'; 
import y100 from '../../images/cirtificats/100logo.png';
import rys200 from '../../images/cirtificats/200.png';
import rys300 from '../../images/cirtificats/300yy.png';
import rys500 from '../../images/cirtificats/500.webp';
import yacep from '../../images/cirtificats/YACEP.png';

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
  const [hoveredId, setHoveredId] = useState(null);
  const [brokenImages, setBrokenImages] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  
  // Counter states
  const [studentCount, setStudentCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0.0);

  // 1. Check screen width for mobile optimization dynamically
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Run on initial mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 2. Intersection Observer to trigger animation when scrolled into view
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
      { threshold: 0.05 } 
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 3. High-performance requestAnimationFrame text counting thread
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
      setRatingCount(parseFloat((easedProgress * 4.9).toFixed(1)));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isIntersecting]);

  // 4. Inject global hardware CSS keyframes once
  useEffect(() => {
    const styleId = "trust-banner-final-anims";
    if (!document.getElementById(styleId)) {
      const styleSheet = document.createElement("style");
      styleSheet.id = styleId;
      styleSheet.innerText = `
        @keyframes dynamicFadeInUp {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes dynamicStarPop {
          0% { opacity: 0; transform: scale(0.5); }
          100% { opacity: 1; transform: scale(1); }
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }, []);

  const handleImageError = (id) => {
    setBrokenImages(prev => ({ ...prev, [id]: true }));
  };

  const styles = {
    banner: {
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #fbf9f4 0%, #f6f1e7 50%, #f1eae0 100%)',
      borderTop: '1px solid rgba(197, 185, 172, 0.35)',
      borderBottom: '1px solid rgba(197, 185, 172, 0.35)',
      padding: isMobile ? '28px 20px' : '40px 24px',
      boxSizing: 'border-box',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: isMobile ? '28px' : '48px',
    },
    leftStats: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: isMobile ? 'space-between' : 'flex-start',
      width: isMobile ? '100%' : 'auto',
      gap: isMobile ? '16px' : '56px',
    },
    statBox: {
      display: 'flex',
      flexDirection: 'column',
      opacity: isIntersecting ? 1 : 0,
      animation: isIntersecting ? 'dynamicFadeInUp 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards' : 'none',
    },
    numberWrapper: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '2px',
    },
    number: {
      fontSize: isMobile ? '28px' : '38px',
      fontWeight: '800',
      color: '#2a2421', 
      margin: 0,
      letterSpacing: '-0.03em',
      lineHeight: 1,
    },
    label: {
      fontSize: '11px',
      fontWeight: '600',
      color: '#7e7367', 
      marginTop: '10px',
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
    },
    divider: {
      height: isMobile ? '36px' : '56px',
      width: '1px',
      background: 'linear-gradient(to bottom, transparent, rgba(197, 185, 172, 0.7), transparent)',
      opacity: isIntersecting ? 1 : 0,
      animation: isIntersecting ? 'dynamicFadeInUp 0.5s ease forwards' : 'none',
    },
    ratingRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    starContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      backgroundColor: '#ffffff', 
      padding: '6px 12px',
      borderRadius: '30px',
      boxShadow: '0 2px 10px rgba(141, 127, 110, 0.06)',
      border: '1px solid rgba(197, 185, 172, 0.2)',
    },
    star: (index) => ({
      width: '14px',
      height: '14px',
      color: '#c99a4e', 
      fill: 'currentColor',
      opacity: 0,
      animation: isIntersecting ? 'dynamicStarPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' : 'none',
      animationDelay: isIntersecting ? `${0.25 + index * 0.08}s` : '0s',
    }),
    rightCertificates: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: isMobile ? '20px' : '36px',
      width: isMobile ? '100%' : 'auto',
    },
    certWrapper: (id, index) => ({
      height: isMobile ? '48px' : '68px',
      padding: '0 8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      opacity: 0,
      animation: isIntersecting ? 'dynamicFadeInUp 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards' : 'none',
      animationDelay: isIntersecting ? `${0.35 + index * 0.12}s` : '0s',
      transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)', 
      transform: hoveredId === id ? 'translateY(-6px)' : 'translateY(0)',
    }),
    img: (id) => ({
      height: '100%',
      width: 'auto',
      objectFit: 'contain',
      mixBlendMode: 'multiply',
      transition: 'all 0.4s ease',
      filter: hoveredId === id ? 'sepia(0) contrast(1)' : 'sepia(0.15) contrast(0.9)',
      opacity: hoveredId === id ? 1 : 0.72,
    }),
    glowShadow: (id) => ({
      position: 'absolute',
      bottom: '-8px',
      width: '60%',
      height: '8px',
      background: 'rgba(197, 185, 172, 0.3)',
      borderRadius: '50%',
      filter: 'blur(6px)',
      opacity: hoveredId === id ? 1 : 0,
      transition: 'opacity 0.4s ease',
      pointerEvents: 'none',
    }),
    fallbackBadge: {
      fontSize: '11px',
      fontWeight: '700',
      padding: '10px 20px',
      background: '#ffffff',
      color: '#5c5246',
      borderRadius: '4px',
      border: '1px solid rgba(197, 185, 172, 0.4)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    }
  };

  return (
    <div ref={bannerRef} style={styles.banner}>
      <div style={styles.container}>
        
        {/* Stats Row: Side-by-side push layout on mobile, compact line on desktops */}
        <div style={styles.leftStats}>
          
          {/* Capped at 1,000 */}
          <div style={styles.statBox}>
            <div style={styles.numberWrapper}>
              <h3 style={styles.number}>
                {studentCount.toLocaleString()}
              </h3>
              <span style={{ fontSize: isMobile ? '16px' : '22px', fontWeight: '600', color: '#c99a4e', marginLeft: '2px' }}>+</span>
            </div>
            <p style={styles.label}>Graduated Yogis</p>
          </div>

          <div style={styles.divider} />

          {/* Rating Block */}
          <div style={{ ...styles.statBox, animationDelay: isIntersecting ? '0.12s' : '0s' }}>
            <div style={styles.ratingRow}>
              <span style={styles.number}>
                {ratingCount.toFixed(1)}
              </span>
              <div style={styles.starContainer}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} style={styles.star(i)} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p style={styles.label}>Top Tier Reviews</p>
          </div>

        </div>

        {/* Certificates Section: Sits perfectly horizontal below stats on mobile, expands next to them on desktop */}
        <div style={styles.rightCertificates}>
          {certificates.map((cert, index) => (
            <div 
              key={cert.id} 
              style={styles.certWrapper(cert.id, index)}
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {brokenImages[cert.id] ? (
                <span style={styles.fallbackBadge}>{cert.name}</span>
              ) : (
                <>
                  <img
                    src={cert.src}
                    alt={cert.name}
                    style={styles.img(cert.id)}
                    onError={() => handleImageError(cert.id)}
                  />
                  <div style={styles.glowShadow(cert.id)} />
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TrustBanner;



// import React, { useState, useEffect, useRef } from 'react';

// // Importing local images
// import yogaAllianceLogo from '../../images/cirtificats/yoga.png'; 
// import y100 from '../../images/cirtificats/100logo.png';
// import rys200 from '../../images/cirtificats/200.png';
// import rys300 from '../../images/cirtificats/300yy.png';
// import rys500 from '../../images/cirtificats/500.webp';
// import yacep from '../../images/cirtificats/YACEP.png';

// // Helper component for external BookRetreats scripts
// const BookRetreatsWidget = ({ id, widgetType }) => {
//   const containerRef = useRef(null);
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = `https://bookretreats.com/widgets/${widgetType}/${id}`;
//     script.async = true;
//     script.setAttribute('data-cfasync', 'false');
//     if (containerRef.current) containerRef.current.appendChild(script);
//   }, [id, widgetType]);
//   return <div id={`${id}_${widgetType}`} ref={containerRef} />;
// };

// const TrustBanner = () => {
//   const certificates = [
//     { id: 1, name: 'Yoga Alliance', src: yogaAllianceLogo },
//     { id: 2, name: 'Y100', src: y100 },
//     { id: 3, name: 'RYS 200', src: rys200 },
//     { id: 4, name: 'RYS 300', src: rys300 },
//     { id: 5, name: 'RYS 500', src: rys500 },
//     { id: 6, name: 'YACEP', src: yacep },
//   ];

//   const bannerRef = useRef(null);
//   const [isIntersecting, setIsIntersecting] = useState(false);
//   const [hoveredId, setHoveredId] = useState(null);
//   const [brokenImages, setBrokenImages] = useState({});
//   const [isMobile, setIsMobile] = useState(false);
  
//   const [studentCount, setStudentCount] = useState(0);
//   const [ratingCount, setRatingCount] = useState(0.0);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize(); 
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsIntersecting(true);
//         else {
//           setIsIntersecting(false);
//           setStudentCount(0);
//           setRatingCount(0.0);
//         }
//       },
//       { threshold: 0.05 } 
//     );
//     if (bannerRef.current) observer.observe(bannerRef.current);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!isIntersecting) return;
//     let startTimestamp = null;
//     const duration = 1400; 
//     const step = (timestamp) => {
//       if (!startTimestamp) startTimestamp = timestamp;
//       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//       const easeOutQuad = (x) => 1 - (1 - x) * (1 - x);
//       const easedProgress = easeOutQuad(progress);
//       setStudentCount(Math.floor(easedProgress * 1000)); 
//       setRatingCount(parseFloat((easedProgress * 4.9).toFixed(1)));
//       if (progress < 1) window.requestAnimationFrame(step);
//     };
//     window.requestAnimationFrame(step);
//   }, [isIntersecting]);

//   useEffect(() => {
//     const styleId = "trust-banner-final-anims";
//     if (!document.getElementById(styleId)) {
//       const styleSheet = document.createElement("style");
//       styleSheet.id = styleId;
//       styleSheet.innerText = `
//         @keyframes dynamicFadeInUp {
//           0% { opacity: 0; transform: translateY(16px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes dynamicStarPop {
//           0% { opacity: 0; transform: scale(0.5); }
//           100% { opacity: 1; transform: scale(1); }
//         }
//       `;
//       document.head.appendChild(styleSheet);
//     }
//   }, []);

//   const handleImageError = (id) => setBrokenImages(prev => ({ ...prev, [id]: true }));

//   const styles = {
//     banner: { width: '100%', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #fbf9f4 0%, #f6f1e7 50%, #f1eae0 100%)', borderTop: '1px solid rgba(197, 185, 172, 0.35)', borderBottom: '1px solid rgba(197, 185, 172, 0.35)', padding: isMobile ? '28px 20px' : '40px 24px', boxSizing: 'border-box' },
//     container: { maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'space-between', gap: isMobile ? '28px' : '48px' },
//     leftStats: { display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'space-between' : 'flex-start', width: isMobile ? '100%' : 'auto', gap: isMobile ? '16px' : '56px' },
//     statBox: { display: 'flex', flexDirection: 'column', opacity: isIntersecting ? 1 : 0, animation: isIntersecting ? 'dynamicFadeInUp 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards' : 'none' },
//     numberWrapper: { display: 'flex', alignItems: 'baseline', gap: '2px' },
//     number: { fontSize: isMobile ? '28px' : '38px', fontWeight: '800', color: '#2a2421', margin: 0, letterSpacing: '-0.03em', lineHeight: 1 },
//     label: { fontSize: '11px', fontWeight: '600', color: '#7e7367', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '0.15em' },
//     divider: { height: isMobile ? '36px' : '56px', width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(197, 185, 172, 0.7), transparent)', opacity: isIntersecting ? 1 : 0, animation: isIntersecting ? 'dynamicFadeInUp 0.5s ease forwards' : 'none' },
//     ratingRow: { display: 'flex', alignItems: 'center', gap: '12px' },
//     starContainer: { display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#ffffff', padding: '6px 12px', borderRadius: '30px', boxShadow: '0 2px 10px rgba(141, 127, 110, 0.06)', border: '1px solid rgba(197, 185, 172, 0.2)' },
//     star: (index) => ({ width: '14px', height: '14px', color: '#c99a4e', fill: 'currentColor', opacity: 0, animation: isIntersecting ? 'dynamicStarPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' : 'none', animationDelay: isIntersecting ? `${0.25 + index * 0.08}s` : '0s' }),
//     rightCertificates: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: isMobile ? '20px' : '36px', width: isMobile ? '100%' : 'auto' },
//     certWrapper: (id, index) => ({ height: isMobile ? '48px' : '68px', padding: '0 8px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', opacity: 0, animation: isIntersecting ? 'dynamicFadeInUp 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards' : 'none', animationDelay: isIntersecting ? `${0.35 + index * 0.12}s` : '0s', transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)', transform: hoveredId === id ? 'translateY(-6px)' : 'translateY(0)' }),
//     img: (id) => ({ height: '100%', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply', transition: 'all 0.4s ease', filter: hoveredId === id ? 'sepia(0) contrast(1)' : 'sepia(0.15) contrast(0.9)', opacity: hoveredId === id ? 1 : 0.72 }),
//     glowShadow: (id) => ({ position: 'absolute', bottom: '-8px', width: '60%', height: '8px', background: 'rgba(197, 185, 172, 0.3)', borderRadius: '50%', filter: 'blur(6px)', opacity: hoveredId === id ? 1 : 0, transition: 'opacity 0.4s ease', pointerEvents: 'none' }),
//     fallbackBadge: { fontSize: '11px', fontWeight: '700', padding: '10px 20px', background: '#ffffff', color: '#5c5246', borderRadius: '4px', border: '1px solid rgba(197, 185, 172, 0.4)', letterSpacing: '0.08em', textTransform: 'uppercase' }
//   };

//   return (
//     <div ref={bannerRef} style={styles.banner}>
//       <div style={styles.container}>
//         <div style={styles.leftStats}>
//           <div style={styles.statBox}>
//             <div style={styles.numberWrapper}>
//               <h3 style={styles.number}>{studentCount.toLocaleString()}</h3>
//               <span style={{ fontSize: isMobile ? '16px' : '22px', fontWeight: '600', color: '#c99a4e', marginLeft: '2px' }}>+</span>
//             </div>
//             <p style={styles.label}>Graduated Yogis</p>
//           </div>
//           <div style={styles.divider} />
//           <div style={{ ...styles.statBox, animationDelay: isIntersecting ? '0.12s' : '0s' }}>
//             <div style={styles.ratingRow}>
//               <span style={styles.number}>{ratingCount.toFixed(1)}</span>
//               <div style={styles.starContainer}>
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} style={styles.star(i)} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
//                 ))}
//               </div>
//             </div>
//             <p style={styles.label}>Top Tier Reviews</p>
//           </div>
//         </div>

//         <div style={styles.rightCertificates}>
//           {certificates.map((cert, index) => (
//             <div key={cert.id} style={styles.certWrapper(cert.id, index)} onMouseEnter={() => setHoveredId(cert.id)} onMouseLeave={() => setHoveredId(null)}>
//               {brokenImages[cert.id] ? <span style={styles.fallbackBadge}>{cert.name}</span> : (
//                 <>
//                   <img src={cert.src} alt={cert.name} style={styles.img(cert.id)} onError={() => handleImageError(cert.id)} />
//                   <div style={styles.glowShadow(cert.id)} />
//                 </>
//               )}
//             </div>
//           ))}
//           {/* External BookRetreats Widgets */}
//           <div style={styles.certWrapper('widget-1', 6)}><BookRetreatsWidget id="27436" widgetType="recommend" /></div>
//           <div style={styles.certWrapper('widget-2', 7)}><BookRetreatsWidget id="27436" widgetType="ratings" /></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrustBanner;