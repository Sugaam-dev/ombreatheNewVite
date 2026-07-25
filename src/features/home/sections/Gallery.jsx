import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

import img1 from '../../../images/new Gallery/1.jpg';
import img2 from '../../../images/new Gallery/2.jpg';
import img3 from '../../../images/new Gallery/3.jpg';
import img4 from '../../../images/new Gallery/4.jpg';
import img5 from '../../../images/new Gallery/5.jpg';
import img6 from '../../../images/new Gallery/6.jpg';
import img7 from '../../../images/new Gallery/7.jpg';
import img8 from '../../../images/new Gallery/8.jpg';
import img9 from '../../../images/new Gallery/9.jpg';
import img10 from '../../../images/new Gallery/10.jpg';
import img11 from '../../../images/new Gallery/11.jpg';
import img12 from '../../../images/new Gallery/12.jpg';
import img13 from '../../../images/new Gallery/13.jpg';
import img14 from '../../../images/new Gallery/14.jpg';
import img15 from '../../../images/new Gallery/15.jpg';
import img16 from '../../../images/new Gallery/16.jpg';
import img17 from '../../../images/new Gallery/17.jpg';
import img18 from '../../../images/new Gallery/18.jpg';
import img19 from '../../../images/new Gallery/19.jpg';
import img20 from '../../../images/new Gallery/20.jpg';
import img21 from '../../../images/new Gallery/21.jpg';
import img22 from '../../../images/new Gallery/22.jpg';
import img23 from '../../../images/new Gallery/23.jpg';
import img24 from '../../../images/new Gallery/24.jpg';
import img25 from '../../../images/new Gallery/25.jpg';
import img26 from '../../../images/new Gallery/26.jpg';
import img27 from '../../../images/new Gallery/27.jpg';
import img28 from '../../../images/new Gallery/28.jpg';
import img29 from '../../../images/new Gallery/29.jpg';
import img30 from '../../../images/new Gallery/30.jpg';
import img31 from '../../../images/new Gallery/31.jpg';
import img32 from '../../../images/new Gallery/32.jpg';
import img33 from '../../../images/new Gallery/33.jpg';
import img34 from '../../../images/new Gallery/34.jpg';
import img35 from '../../../images/new Gallery/35.jpg';
import img36 from '../../../images/new Gallery/36.jpg';
import img37 from '../../../images/new Gallery/37.jpg';
import img38 from '../../../images/new Gallery/38.jpg';
import img39 from '../../../images/new Gallery/39.jpg';
import img40 from '../../../images/new Gallery/40.jpg';
import img41 from '../../../images/new Gallery/41.jpg';
import img42 from '../../../images/new Gallery/42.jpg';
import img43 from '../../../images/new Gallery/43.jpg';
import img44 from '../../../images/new Gallery/44.jpg';
import img45 from '../../../images/new Gallery/45.jpg';
import img46 from '../../../images/new Gallery/46.jpg';

const CSS = `

  .gy-root * { box-sizing: border-box; margin: 0; padding: 0; }

  .gy-root {
    font-family: var(--font-sans-display);
    // background: #faf7f2;
    padding: 3.5rem 1.5rem 4rem;
  }

  .gy-heading {
    text-align: center;
    margin-bottom: 2.5rem;
  }
  .gy-heading h2 {
    font-family: var(--font-heading);
    font-size: var(--section-title-size);
    font-weight: 300;
    color: #1e1e1c;
    line-height: 1.1;
    margin-bottom: 0.5rem;
  }
  .gy-heading h2 em {
    font-style: italic;
    color: #4a7c68;
  }
  .gy-heading p {
    font-size: var(--body-text-size-mobile);
    font-weight: 300;
    color: #9a9188;
    letter-spacing: 0.03em;
  }
  .gy-heading-line {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 1.2rem;
  }
  .gy-heading-line span {
    display: block;
    width: 50px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #7aad97);
  }
  .gy-heading-line span:last-child {
    background: linear-gradient(90deg, #7aad97, transparent);
  }
  .gy-heading-line i {
    color: #7aad97;
    font-style: normal;
    font-size: 14px;
  }

  .gy-slide {
    position: relative;
    max-width: 820px;
    margin: 0 auto;
    border-radius: 18px;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    background: #e8f2ee;
    cursor: grab;
    box-shadow: 0 6px 32px rgba(45, 74, 62, 0.13);
  }
  .gy-slide:active { cursor: grabbing; }

  .gy-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: opacity 0.35s ease, transform 0.4s ease;
  }
  .gy-slide img.gy-fade { opacity: 0; transform: scale(1.03); }
  .gy-slide img.gy-show { opacity: 1; transform: scale(1); }

  .gy-slide-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(20,20,18,0.35) 0%, transparent 55%);
    pointer-events: none;
  }

  .gy-counter {
    position: absolute;
    bottom: 16px;
    right: 18px;
    color: rgba(255,255,255,0.85);
    font-size: 12px;
    letter-spacing: 0.08em;
  }

  .gy-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.4);
    background: rgba(255,255,255,0.16);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 22px;
    color: #fff;
    transition: background 0.2s, transform 0.15s;
    user-select: none;
    z-index: 2;
  }
  .gy-nav:hover { background: rgba(255,255,255,0.32); transform: translateY(-50%) scale(1.07); }
  .gy-nav:active { transform: translateY(-50%) scale(0.93); }
  .gy-nav-prev { left: 14px; }
  .gy-nav-next { right: 14px; }

  .gy-progress {
    max-width: 820px;
    margin: 12px auto 0;
    height: 2px;
    background: #e0d8cf;
    border-radius: 999px;
    overflow: hidden;
  }
  .gy-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #4a7c68, #7aad97);
    border-radius: 999px;
    transition: width 0.35s ease;
  }

  .gy-dots {
    display: flex;
    justify-content: center;
    gap: 7px;
    margin-top: 14px;
    flex-wrap: wrap;
  }
  .gy-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #d8cfc6;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: all 0.25s;
  }
  .gy-dot.active { background: #4a7c68; width: 20px; border-radius: 999px; }
  .gy-dot:hover:not(.active) { background: #7aad97; }

  .gy-thumbs {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    gap: 6px;
    max-width: 820px;
    margin: 16px auto 0;
  }
  .gy-thumb {
    aspect-ratio: 1;
    border-radius: 9px;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid transparent;
    opacity: 0.7;
    transition: opacity 0.2s, border-color 0.2s, transform 0.2s;
    background: #e8f2ee;
  }
  .gy-thumb:hover { opacity: 1; transform: scale(1.05); }
  .gy-thumb.active { border-color: #4a7c68; opacity: 1; transform: scale(1.05); }
  .gy-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }

  .gy-loading {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e8f2ee;
  }
  .gy-spinner {
    width: 30px;
    height: 30px;
    border: 2px solid #c9e8dc;
    border-top-color: #4a7c68;
    border-radius: 50%;
    animation: gy-spin 0.75s linear infinite;
  }
  @keyframes gy-spin { to { transform: rotate(360deg); } }

  @media (max-width: 600px) {
    .gy-root { padding: 2.5rem 1rem 3rem; }
    .gy-thumbs { grid-template-columns: repeat(auto-fill, minmax(56px, 1fr)); gap: 5px; }
  }
`;

const Gallery = ({ showThumbnails = true, autoPlay = false, interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const galleryRef = useRef(null);
  const imageCache = useRef(new Map());

  const images = useMemo(() => [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
    img41, img42, img43, img44, img45, img46,
  ].map((src, i) => ({ src, id: `img-${i}` })), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (galleryRef.current) observer.observe(galleryRef.current);
    return () => observer.disconnect();
  }, []);

  const preloadImage = useCallback((src, index, priority = 'low') => {
    if (imageCache.current.has(src)) {
      setImagesLoaded(prev => new Set([...prev, index]));
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.loading = priority === 'high' ? 'eager' : 'lazy';
      img.onload = () => {
        imageCache.current.set(src, img);
        setImagesLoaded(prev => new Set([...prev, index]));
        resolve();
      };
      img.onerror = reject;
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const next = (currentIndex + 1) % images.length;
    const prev = (currentIndex - 1 + images.length) % images.length;
    preloadImage(images[currentIndex].src, currentIndex, 'high');
    preloadImage(images[next].src, next, 'high');
    preloadImage(images[prev].src, prev, 'high');
  }, [currentIndex, images, isVisible, preloadImage]);

  useEffect(() => {
    if (autoPlay && isVisible) {
      const t = setInterval(() => setCurrentIndex(p => (p + 1) % images.length), interval);
      return () => clearInterval(t);
    }
  }, [autoPlay, interval, images.length, isVisible]);

  const goTo = useCallback((idx) => {
    setFading(true);
    setTimeout(() => { setCurrentIndex(idx); setFading(false); }, 220);
  }, []);

  const goToPrev = useCallback(() => goTo((currentIndex - 1 + images.length) % images.length), [currentIndex, images.length, goTo]);
  const goToNext = useCallback(() => goTo((currentIndex + 1) % images.length), [currentIndex, images.length, goTo]);

  const handleTouchStart = useCallback(e => { touchStartX.current = e.touches[0].clientX; setIsDragging(true); }, []);
  const handleTouchMove  = useCallback(e => { if (isDragging) touchEndX.current = e.touches[0].clientX; }, [isDragging]);
  const handleTouchEnd   = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    const d = touchStartX.current - touchEndX.current;
    if (Math.abs(d) > 50) d > 0 ? goToNext() : goToPrev();
  }, [isDragging, goToNext, goToPrev]);

  const handleMouseDown = useCallback(e => { e.preventDefault(); touchStartX.current = e.clientX; setIsDragging(true); }, []);
  const handleMouseMove = useCallback(e => { if (isDragging) touchEndX.current = e.clientX; }, [isDragging]);
  const handleMouseUp   = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    const d = touchStartX.current - touchEndX.current;
    if (Math.abs(d) > 50) d > 0 ? goToNext() : goToPrev();
  }, [isDragging, goToNext, goToPrev]);

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goToPrev, goToNext]);

  const visibleThumbs = useMemo(() => {
    if (!showThumbnails) return [];
    const count = 12;
    const half = Math.floor(count / 2);
    let start = Math.max(0, currentIndex - half);
    const end = Math.min(images.length - 1, start + count - 1);
    start = Math.max(0, end - count + 1);
    return images.slice(start, end + 1).map((img, i) => ({ ...img, originalIndex: start + i }));
  }, [images, currentIndex, showThumbnails]);

  const DOT_COUNT = Math.min(images.length, 16);
  const dots = useMemo(() =>
    Array.from({ length: DOT_COUNT }, (_, i) =>
      Math.round(i * (images.length - 1) / (DOT_COUNT - 1))
    ),
  [images.length, DOT_COUNT]);

  return (
    <>
      <style>{CSS}</style>
      <div className="gy-root" ref={galleryRef}>

        {/* Heading */}
        <div className="gy-heading">
          <h2>Yoga <em>Gallery</em></h2>
          <p>A glimpse into our journey of practice, peace &amp; community</p>
          <div className="gy-heading-line">
            <span /><i>&#10022;</i><span />
          </div>
        </div>

        {/* Main Slide */}
        <div
          className="gy-slide"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {!imagesLoaded.has(currentIndex) ? (
            <div className="gy-loading"><div className="gy-spinner" /></div>
          ) : (
            <img
              src={images[currentIndex].src}
              alt={`Yoga gallery ${currentIndex + 1}`}
              className={fading ? 'gy-fade' : 'gy-show'}
              draggable={false}
              loading="eager"
            />
          )}
          <div className="gy-slide-overlay" />
          <div className="gy-counter">{currentIndex + 1} / {images.length}</div>
          <button className="gy-nav gy-nav-prev" onClick={goToPrev} aria-label="Previous">&#8249;</button>
          <button className="gy-nav gy-nav-next" onClick={goToNext} aria-label="Next">&#8250;</button>
        </div>

        {/* Progress bar */}
        <div className="gy-progress">
          <div
            className="gy-progress-fill"
            style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
          />
        </div>

        {/* Dots */}
        <div className="gy-dots">
          {dots.map(idx => (
            <button
              key={idx}
              className={`gy-dot${idx === currentIndex ? ' active' : ''}`}
              onClick={() => goTo(idx)}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>

        {/* Thumbnails */}
        {showThumbnails && (
          <div className="gy-thumbs">
            {visibleThumbs.map(({ src, id, originalIndex }) => (
              <div
                key={id}
                className={`gy-thumb${originalIndex === currentIndex ? ' active' : ''}`}
                onClick={() => goTo(originalIndex)}
                role="button"
                tabIndex={0}
                aria-label={`View image ${originalIndex + 1}`}
                onKeyDown={e => e.key === 'Enter' && goTo(originalIndex)}
              >
                <img src={src} alt={`Thumbnail ${originalIndex + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        )}

      </div>
    </>
  );
};

export default React.memo(Gallery);






// import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

// import img1 from '../../../images/new Gallery/1.jpg';
// import img2 from '../../../images/new Gallery/2.jpg';
// import img3 from '../../../images/new Gallery/3.jpg';
// import img4 from '../../../images/new Gallery/4.jpg';
// import img5 from '../../../images/new Gallery/5.jpg';
// import img6 from '../../../images/new Gallery/6.jpg';
// import img7 from '../../../images/new Gallery/7.jpg';
// import img8 from '../../../images/new Gallery/8.jpg';
// import img9 from '../../../images/new Gallery/9.jpg';
// import img10 from '../../../images/new Gallery/10.jpg';
// import img11 from '../../../images/new Gallery/11.jpg';
// import img12 from '../../../images/new Gallery/12.jpg';
// import img13 from '../../../images/new Gallery/13.jpg';
// import img14 from '../../../images/new Gallery/14.jpg';
// import img15 from '../../../images/new Gallery/15.jpg';
// import img16 from '../../../images/new Gallery/16.jpg';
// import img17 from '../../../images/new Gallery/17.jpg';
// import img18 from '../../../images/new Gallery/18.jpg';
// import img19 from '../../../images/new Gallery/19.jpg';
// import img20 from '../../../images/new Gallery/20.jpg';
// import img21 from '../../../images/new Gallery/21.jpg';
// import img22 from '../../../images/new Gallery/22.jpg';
// import img23 from '../../../images/new Gallery/23.jpg';
// import img24 from '../../../images/new Gallery/24.jpg';
// import img25 from '../../../images/new Gallery/25.jpg';
// import img26 from '../../../images/new Gallery/26.jpg';
// import img27 from '../../../images/new Gallery/27.jpg';
// import img28 from '../../../images/new Gallery/28.jpg';
// import img29 from '../../../images/new Gallery/29.jpg';
// import img30 from '../../../images/new Gallery/30.jpg';
// import img31 from '../../../images/new Gallery/31.jpg';
// import img32 from '../../../images/new Gallery/32.jpg';
// import img33 from '../../../images/new Gallery/33.jpg';
// import img34 from '../../../images/new Gallery/34.jpg';
// import img35 from '../../../images/new Gallery/35.jpg';
// import img36 from '../../../images/new Gallery/36.jpg';
// import img37 from '../../../images/new Gallery/37.jpg';
// import img38 from '../../../images/new Gallery/38.jpg';
// import img39 from '../../../images/new Gallery/39.jpg';
// import img40 from '../../../images/new Gallery/40.jpg';
// import img41 from '../../../images/new Gallery/41.jpg';
// import img42 from '../../../images/new Gallery/42.jpg';
// import img43 from '../../../images/new Gallery/43.jpg';
// import img44 from '../../../images/new Gallery/44.jpg';
// import img45 from '../../../images/new Gallery/45.jpg';
// import img46 from '../../../images/new Gallery/46.jpg';

// const CSS = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

// .gy-root *,
// .gy-root *::before,
// .gy-root *::after {
//   box-sizing: border-box;
// }

// .gy-root {
//   width: 100%;

//   font-family: 'DM Sans', sans-serif;

//   padding:
//     clamp(32px, 4vw, 90px)
//     clamp(10px, 2vw, 40px)
//     clamp(40px, 5vw, 100px);

//   overflow: hidden;
// }

// /* ==========================================
//    HEADING
// ========================================== */

// .gy-heading {
//   text-align: center;

//   margin-bottom:
//     clamp(24px, 3vw, 60px);
// }

// .gy-heading h2 {
//   font-family:
//     'Cormorant Garamond',
//     Georgia,
//     serif;

//   font-size:
//     clamp(34px, 4vw, 82px);

//   font-weight: 400;

//   line-height: 1.05;

//   color: #1e1e1c;

//   margin-bottom: 10px;
// }

// .gy-heading h2 em {
//   font-style: italic;

//   color: #4a7c68;
// }

// .gy-heading p {
//   font-size:
//     clamp(12px, 0.9vw, 22px);

//   font-weight: 400;

//   color: #8e867d;

//   letter-spacing: 0.03em;

//   line-height: 1.7;

//   max-width: 700px;

//   margin-inline: auto;
// }

// /* ==========================================
//    DECORATIVE LINE
// ========================================== */

// .gy-heading-line {
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   gap:
//     clamp(8px, 1vw, 16px);

//   margin-top:
//     clamp(14px, 1.4vw, 28px);
// }

// .gy-heading-line span {
//   width:
//     clamp(40px, 4vw, 90px);

//   height: 1px;

//   background:
//     linear-gradient(
//       90deg,
//       transparent,
//       #7aad97
//     );
// }

// .gy-heading-line span:last-child {
//   background:
//     linear-gradient(
//       90deg,
//       #7aad97,
//       transparent
//     );
// }

// .gy-heading-line i {
//   color: #7aad97;

//   font-size:
//     clamp(12px, 0.9vw, 18px);

//   font-style: normal;
// }

// /* ==========================================
//    MAIN SLIDER
// ========================================== */

// .gy-slide {
//   position: relative;

//   width: min(100%, 1200px);

//   margin-inline: auto;

//   border-radius:
//     clamp(16px, 1.5vw, 34px);

//   overflow: hidden;

//   aspect-ratio: 16 / 9;

//   background: #e8f2ee;

//   cursor: grab;

//   box-shadow:
//     0 8px 40px rgba(45, 74, 62, 0.12);

//   isolation: isolate;
// }

// .gy-slide:active {
//   cursor: grabbing;
// }

// /* ==========================================
//    IMAGE
// ========================================== */

// .gy-slide img {
//   width: 100%;
//   height: 100%;

//   object-fit: cover;

//   display: block;

//   transition:
//     opacity 0.35s ease,
//     transform 0.45s ease;

//   will-change: transform;
// }

// .gy-slide img.gy-fade {
//   opacity: 0;

//   transform: scale(1.03);
// }

// .gy-slide img.gy-show {
//   opacity: 1;

//   transform: scale(1);
// }

// /* ==========================================
//    OVERLAY
// ========================================== */

// .gy-slide-overlay {
//   position: absolute;

//   inset: 0;

//   background:
//     linear-gradient(
//       to top,
//       rgba(15,15,15,0.45),
//       transparent 55%
//     );

//   pointer-events: none;
// }

// /* ==========================================
//    COUNTER
// ========================================== */

// .gy-counter {
//   position: absolute;

//   bottom:
//     clamp(12px, 1vw, 26px);

//   right:
//     clamp(14px, 1vw, 26px);

//   color:
//     rgba(255,255,255,0.88);

//   font-size:
//     clamp(10px, 0.8vw, 18px);

//   letter-spacing: 0.08em;

//   z-index: 3;
// }

// /* ==========================================
//    NAVIGATION
// ========================================== */

// .gy-nav {
//   position: absolute;

//   top: 50%;

//   transform: translateY(-50%);

//   width:
//     clamp(40px, 3vw, 74px);

//   height:
//     clamp(40px, 3vw, 74px);

//   border-radius: 50%;

//   border:
//     1px solid rgba(255,255,255,0.35);

//   background:
//     rgba(255,255,255,0.12);

//   backdrop-filter: blur(10px);

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   cursor: pointer;

//   font-size:
//     clamp(20px, 1.5vw, 36px);

//   color: #fff;

//   transition:
//     transform 0.2s ease,
//     background 0.2s ease;

//   z-index: 5;

//   user-select: none;
// }

// .gy-nav:hover {
//   background:
//     rgba(255,255,255,0.24);

//   transform:
//     translateY(-50%)
//     scale(1.06);
// }

// .gy-nav:active {
//   transform:
//     translateY(-50%)
//     scale(0.94);
// }

// .gy-nav-prev {
//   left:
//     clamp(10px, 1vw, 24px);
// }

// .gy-nav-next {
//   right:
//     clamp(10px, 1vw, 24px);
// }

// /* ==========================================
//    PROGRESS
// ========================================== */

// .gy-progress {
//   width: min(100%, 1200px);

//   margin:
//     clamp(12px, 1vw, 20px)
//     auto
//     0;

//   height:
//     clamp(2px, 0.2vw, 4px);

//   background: #e0d8cf;

//   border-radius: 999px;

//   overflow: hidden;
// }

// .gy-progress-fill {
//   height: 100%;

//   background:
//     linear-gradient(
//       90deg,
//       #4a7c68,
//       #7aad97
//     );

//   border-radius: 999px;

//   transition: width 0.35s ease;
// }

// /* ==========================================
//    DOTS
// ========================================== */

// .gy-dots {
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;

//   gap:
//     clamp(5px, 0.5vw, 10px);

//   margin-top:
//     clamp(14px, 1vw, 24px);
// }

// .gy-dot {
//   width:
//     clamp(6px, 0.5vw, 10px);

//   height:
//     clamp(6px, 0.5vw, 10px);

//   border-radius: 50%;

//   background: #d8cfc6;

//   border: none;

//   cursor: pointer;

//   padding: 0;

//   transition: all 0.25s;
// }

// .gy-dot.active {
//   width:
//     clamp(18px, 1.5vw, 34px);

//   border-radius: 999px;

//   background: #4a7c68;
// }

// .gy-dot:hover:not(.active) {
//   background: #7aad97;
// }

// /* ==========================================
//    THUMBNAILS
// ========================================== */

// .gy-thumbs {
//   width: min(100%, 1800px);

//   margin:
//     clamp(14px, 1.2vw, 26px)
//     auto
//     0;

//   display: grid;

//   grid-template-columns:
//     repeat(auto-fit, minmax(clamp(54px, 5vw, 120px), 1fr));

//   gap:
//     clamp(5px, 0.6vw, 12px);
// }

// .gy-thumb {
//   aspect-ratio: 1;

//   border-radius:
//     clamp(8px, 0.8vw, 18px);

//   overflow: hidden;

//   cursor: pointer;

//   border:
//     2px solid transparent;

//   opacity: 0.72;

//   transition:
//     transform 0.2s ease,
//     opacity 0.2s ease,
//     border-color 0.2s ease;

//   background: #e8f2ee;
// }

// .gy-thumb:hover {
//   opacity: 1;

//   transform: scale(1.04);
// }

// .gy-thumb.active {
//   border-color: #4a7c68;

//   opacity: 1;

//   transform: scale(1.04);
// }

// .gy-thumb img {
//   width: 100%;
//   height: 100%;

//   object-fit: cover;

//   display: block;
// }

// /* ==========================================
//    LOADER
// ========================================== */

// .gy-loading {
//   width: 100%;
//   height: 100%;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   background: #e8f2ee;
// }

// .gy-spinner {
//   width:
//     clamp(26px, 2vw, 40px);

//   height:
//     clamp(26px, 2vw, 40px);

//   border:
//     2px solid #c9e8dc;

//   border-top-color: #4a7c68;

//   border-radius: 50%;

//   animation: gy-spin 0.75s linear infinite;
// }

// @keyframes gy-spin {
//   to {
//     transform: rotate(360deg);
//   }
// }

// /* ==========================================
//    1900px+
// ========================================== */

// @media (min-width: 1900px) {

//   .gy-slide,
//   .gy-progress,
//   .gy-thumbs {
//     max-width: 2200px;
//   }

//   .gy-slide {
//     border-radius: 30px;
//   }
// }

// /* ==========================================
//    2560px+
// ========================================== */

// @media (min-width: 2560px) {

//   .gy-root {
//     padding-top: 90px;
//   }

//   .gy-slide,
//   .gy-progress,
//   .gy-thumbs {
//     max-width: 2450px;
//   }

//   .gy-heading h2 {
//     font-size: 88px;
//   }

//   .gy-heading p {
//     font-size: 22px;
//   }

//   .gy-nav {
//     width: 76px;
//     height: 76px;

//     font-size: 38px;
//   }

//   .gy-counter {
//     font-size: 18px;
//   }
// }

// /* ==========================================
//    TABLET
// ========================================== */

// @media (max-width: 1024px) {

//   .gy-slide {
//     width: 100%;
//   }

//   .gy-thumbs {
//     grid-template-columns:
//       repeat(auto-fit, minmax(64px, 1fr));
//   }
// }

// /* ==========================================
//    MOBILE
// ========================================== */

// @media (max-width: 768px) {

//   .gy-root {
//     padding:
//       28px
//       10px
//       60px;
//   }

//   .gy-heading {
//     margin-bottom: 24px;
//   }

//   .gy-heading h2 {
//     font-size: 38px;
//   }

//   .gy-heading p {
//     font-size: 13px;
//     line-height: 1.7;
//   }

//   .gy-slide {
//     border-radius: 14px;
//   }

//   .gy-nav {
//     width: 40px;
//     height: 40px;

//     font-size: 22px;
//   }

//   .gy-thumbs {
//     grid-template-columns:
//       repeat(auto-fit, minmax(54px, 1fr));

//     gap: 5px;
//   }
// }

// /* ==========================================
//    SMALL MOBILE
// ========================================== */

// @media (max-width: 480px) {

//   .gy-root {
//     padding-inline: 6px;
//   }

//   .gy-heading h2 {
//     font-size: 32px;
//   }

//   .gy-heading p {
//     font-size: 12px;
//   }

//   .gy-slide {
//     border-radius: 12px;
//   }

//   .gy-nav {
//     width: 34px;
//     height: 34px;

//     font-size: 18px;
//   }

//   .gy-counter {
//     font-size: 10px;
//   }

//   .gy-thumbs {
//     grid-template-columns:
//       repeat(auto-fit, minmax(46px, 1fr));
//   }
// }
// `;

// const Gallery = ({ showThumbnails = true, autoPlay = false, interval = 4000 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [imagesLoaded, setImagesLoaded] = useState(new Set());
//   const [isVisible, setIsVisible] = useState(false);
//   const [fading, setFading] = useState(false);
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const galleryRef = useRef(null);
//   const imageCache = useRef(new Map());

//   const images = useMemo(() => [
//     img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
//     img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
//     img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
//     img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
//     img41, img42, img43, img44, img45, img46,
//   ].map((src, i) => ({ src, id: `img-${i}` })), []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
//       { threshold: 0.1 }
//     );
//     if (galleryRef.current) observer.observe(galleryRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const preloadImage = useCallback((src, index, priority = 'low') => {
//     if (imageCache.current.has(src)) {
//       setImagesLoaded(prev => new Set([...prev, index]));
//       return Promise.resolve();
//     }
//     return new Promise((resolve, reject) => {
//       const img = new Image();
//       img.loading = priority === 'high' ? 'eager' : 'lazy';
//       img.onload = () => {
//         imageCache.current.set(src, img);
//         setImagesLoaded(prev => new Set([...prev, index]));
//         resolve();
//       };
//       img.onerror = reject;
//       img.src = src;
//     });
//   }, []);

//   useEffect(() => {
//     if (!isVisible) return;
//     const next = (currentIndex + 1) % images.length;
//     const prev = (currentIndex - 1 + images.length) % images.length;
//     preloadImage(images[currentIndex].src, currentIndex, 'high');
//     preloadImage(images[next].src, next, 'high');
//     preloadImage(images[prev].src, prev, 'high');
//   }, [currentIndex, images, isVisible, preloadImage]);

//   useEffect(() => {
//     if (autoPlay && isVisible) {
//       const t = setInterval(() => setCurrentIndex(p => (p + 1) % images.length), interval);
//       return () => clearInterval(t);
//     }
//   }, [autoPlay, interval, images.length, isVisible]);

//   const goTo = useCallback((idx) => {
//     setFading(true);
//     setTimeout(() => { setCurrentIndex(idx); setFading(false); }, 220);
//   }, []);

//   const goToPrev = useCallback(() => goTo((currentIndex - 1 + images.length) % images.length), [currentIndex, images.length, goTo]);
//   const goToNext = useCallback(() => goTo((currentIndex + 1) % images.length), [currentIndex, images.length, goTo]);

//   const handleTouchStart = useCallback(e => { touchStartX.current = e.touches[0].clientX; setIsDragging(true); }, []);
//   const handleTouchMove  = useCallback(e => { if (isDragging) touchEndX.current = e.touches[0].clientX; }, [isDragging]);
//   const handleTouchEnd   = useCallback(() => {
//     if (!isDragging) return;
//     setIsDragging(false);
//     const d = touchStartX.current - touchEndX.current;
//     if (Math.abs(d) > 50) d > 0 ? goToNext() : goToPrev();
//   }, [isDragging, goToNext, goToPrev]);

//   const handleMouseDown = useCallback(e => { e.preventDefault(); touchStartX.current = e.clientX; setIsDragging(true); }, []);
//   const handleMouseMove = useCallback(e => { if (isDragging) touchEndX.current = e.clientX; }, [isDragging]);
//   const handleMouseUp   = useCallback(() => {
//     if (!isDragging) return;
//     setIsDragging(false);
//     const d = touchStartX.current - touchEndX.current;
//     if (Math.abs(d) > 50) d > 0 ? goToNext() : goToPrev();
//   }, [isDragging, goToNext, goToPrev]);

//   useEffect(() => {
//     const onKey = e => {
//       if (e.key === 'ArrowLeft') goToPrev();
//       if (e.key === 'ArrowRight') goToNext();
//     };
//     window.addEventListener('keydown', onKey);
//     return () => window.removeEventListener('keydown', onKey);
//   }, [goToPrev, goToNext]);

//   const visibleThumbs = useMemo(() => {
//     if (!showThumbnails) return [];
//     const count = 12;
//     const half = Math.floor(count / 2);
//     let start = Math.max(0, currentIndex - half);
//     const end = Math.min(images.length - 1, start + count - 1);
//     start = Math.max(0, end - count + 1);
//     return images.slice(start, end + 1).map((img, i) => ({ ...img, originalIndex: start + i }));
//   }, [images, currentIndex, showThumbnails]);

//   const DOT_COUNT = Math.min(images.length, 16);
//   const dots = useMemo(() =>
//     Array.from({ length: DOT_COUNT }, (_, i) =>
//       Math.round(i * (images.length - 1) / (DOT_COUNT - 1))
//     ),
//   [images.length, DOT_COUNT]);

//   return (
//     <>
//       <style>{CSS}</style>
//       <div className="gy-root" ref={galleryRef}>

//         {/* Heading */}
//         <div className="gy-heading">
//           <h2>Yoga <em>Gallery</em></h2>
//           <p>A glimpse into our journey of practice, peace &amp; community</p>
//           <div className="gy-heading-line">
//             <span /><i>&#10022;</i><span />
//           </div>
//         </div>

//         {/* Main Slide */}
//         <div
//           className="gy-slide"
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//           onMouseDown={handleMouseDown}
//           onMouseMove={handleMouseMove}
//           onMouseUp={handleMouseUp}
//           onMouseLeave={handleMouseUp}
//         >
//           {!imagesLoaded.has(currentIndex) ? (
//             <div className="gy-loading"><div className="gy-spinner" /></div>
//           ) : (
//             <img
//               src={images[currentIndex].src}
//               alt={`Yoga gallery ${currentIndex + 1}`}
//               className={fading ? 'gy-fade' : 'gy-show'}
//               draggable={false}
//               loading="eager"
//             />
//           )}
//           <div className="gy-slide-overlay" />
//           <div className="gy-counter">{currentIndex + 1} / {images.length}</div>
//           <button className="gy-nav gy-nav-prev" onClick={goToPrev} aria-label="Previous">&#8249;</button>
//           <button className="gy-nav gy-nav-next" onClick={goToNext} aria-label="Next">&#8250;</button>
//         </div>

//         {/* Progress bar */}
//         <div className="gy-progress">
//           <div
//             className="gy-progress-fill"
//             style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
//           />
//         </div>

//         {/* Dots */}
//         <div className="gy-dots">
//           {dots.map(idx => (
//             <button
//               key={idx}
//               className={`gy-dot${idx === currentIndex ? ' active' : ''}`}
//               onClick={() => goTo(idx)}
//               aria-label={`Go to image ${idx + 1}`}
//             />
//           ))}
//         </div>

//         {/* Thumbnails */}
//         {showThumbnails && (
//           <div className="gy-thumbs">
//             {visibleThumbs.map(({ src, id, originalIndex }) => (
//               <div
//                 key={id}
//                 className={`gy-thumb${originalIndex === currentIndex ? ' active' : ''}`}
//                 onClick={() => goTo(originalIndex)}
//                 role="button"
//                 tabIndex={0}
//                 aria-label={`View image ${originalIndex + 1}`}
//                 onKeyDown={e => e.key === 'Enter' && goTo(originalIndex)}
//               >
//                 <img src={src} alt={`Thumbnail ${originalIndex + 1}`} loading="lazy" />
//               </div>
//             ))}
//           </div>
//         )}

//       </div>
//     </>
//   );
// };

// export default React.memo(Gallery);