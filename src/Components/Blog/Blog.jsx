import React, { 
  useState, 
  useRef, 
  useMemo, 
  useCallback, 
  useEffect, 
  
  Suspense,
  startTransition,
  useDeferredValue,
  memo
} from 'react';
import './Blog.css';
import SectionHeading from '../useFullComponent/SectionHeading';

// Lazy load images with dynamic imports for code splitting
const loadImage = (imageName) => {
  const imageModules = {
    rectangle: () => import('../../images/Blog/Most_Challenging_Yoga_Pose.jpg'),
    health: () => import('../../images/Blog/health.webp'),
    living: () => import('../../images/Blog/From_Exercise.jpg'),
    food: () => import('../../images/Blog/Yogic_Food.jpg')
  };
  return imageModules[imageName]?.() || Promise.reject('Image not found');
};

// Optimized Image Component with Intersection Observer
const OptimizedImage = memo(({ imageKey, alt, priority = false, onLoad }) => {
  const [src, setSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(priority);
  const [loadError, setLoadError] = useState(false);
  const imgRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return; // Priority images load immediately

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Load image when visible
  useEffect(() => {
    if (!isVisible) return;

    let isCancelled = false;

    const loadImageAsync = async () => {
      try {
        const module = await loadImage(imageKey);
        if (!isCancelled) {
          setSrc(module.default);
          setIsLoading(false);
          onLoad?.();
        }
      } catch (error) {
        if (!isCancelled) {
          setLoadError(true);
          setIsLoading(false);
        }
      }
    };

    // Add small delay for non-priority images to prevent blocking
    const delay = priority ? 0 : Math.random() * 200;
    const timeoutId = setTimeout(loadImageAsync, delay);

    return () => {
      isCancelled = true;
      clearTimeout(timeoutId);
    };
  }, [isVisible, imageKey, priority, onLoad]);

  if (loadError) {
    return (
      <div 
        ref={imgRef}
        style={{
          width: '100%',
          height: '250px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '14px'
        }}
      >
        Blog Image
      </div>
    );
  }

  if (isLoading || !src) {
    return (
      <div 
        ref={imgRef}
        style={{
          width: '100%',
          height: '250px',
          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#999',
          fontSize: '14px'
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <img 
      ref={imgRef}
      src={src}
      alt={alt}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'opacity 0.3s ease'
      }}
      onLoad={() => onLoad?.()}
    />
  );
});

// Virtualized Blog Card Component
const BlogCard = memo(({ card, index, showAll, onImageLoad }) => {
  const isPriority = index < 3;
  
  return (
    <div className={`card ${showAll && index >= 3 ? 'fade-in' : ''}`}>
      <div className="card-image-blog">
        <OptimizedImage
          imageKey={card.imageKey}
          alt={card.title}
          priority={isPriority}
          onLoad={() => onImageLoad(card.id)}
        />
        <div className="card-overlay"></div>
        <div className="card-content-overlay">
          <h3 className="blog-title">{card.title}</h3>
          <p className="card-description">{card.description}</p>
        </div>
      </div>
    </div>
  );
});

const Blog = () => {
  const [showAll, setShowAll] = useState(false);
  const [imageLoadStats, setImageLoadStats] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);

  // Deferred value for smooth transitions
  const deferredShowAll = useDeferredValue(showAll);

  // Memoized blog card data with advanced structure
  const cardData = useMemo(() => [
    {
      id: 1,
      imageKey: 'rectangle',
      title: 'Most Challenging Yoga Poses',
      description: 'Discover the hardest yoga poses to push your limits. Includes step-by-step guides, benefits, and a quiz to test your knowledge.',
      priority: 1
    },
    {
      id: 2,
      imageKey: 'health',
      title: 'Detox Drinks to Increase Immunity, Recipes',
      description: 'Immunity boosting We are facing the times when fear caused by coronavirus is coming from everywhere around.',
      priority: 2
    },
    {
      id: 3,
      imageKey: 'living',
      title: 'From Exercise to Conscious Living',
      description: 'From Exercise to Conscious Living: One Yogini\'s Journey – by Shannon Towle',
      priority: 3
    },
    {
      id: 4,
      imageKey: 'food',
      title: 'Yogic Food',
      description: "House of Om Yoga School's Approach towards a yogic diet is simple",
      priority: 4
    }
  ], []);

  // Advanced memoized visible cards with deferred value
  const visibleCards = useMemo(() => 
    deferredShowAll ? cardData : cardData.slice(0, 3),
    [deferredShowAll, cardData]
  );

  // Performance monitoring
  const handleImageLoad = useCallback((cardId) => {
    setImageLoadStats(prev => ({
      ...prev,
      [cardId]: {
        loadTime: performance.now(),
        loaded: true
      }
    }));
  }, []);

  // Optimized show more with concurrent features
  const handleShowMore = useCallback(() => {
    setIsTransitioning(true);
    startTransition(() => {
      setShowAll(true);
      setTimeout(() => setIsTransitioning(false), 300);
    });
  }, []);

  // Optimized show less with concurrent features
  const handleShowLess = useCallback(() => {
    setIsTransitioning(true);
    startTransition(() => {
      setShowAll(false);
      setTimeout(() => {
        if (sectionRef.current) {
          sectionRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
        setIsTransitioning(false);
      }, 100);
    });
  }, []);

  // Preload critical images
  useEffect(() => {
    const preloadCriticalImages = async () => {
      try {
        // Preload first 2 images for instant display
        await Promise.all([
          loadImage('rectangle'),
          loadImage('health')
        ]);
      } catch (error) {
        console.warn('Preload failed:', error);
      }
    };

    preloadCriticalImages();
  }, []);

  // Performance monitoring
 useEffect(() => {
  const loadedCount = Object.values(imageLoadStats)
    .filter(stat => stat.loaded).length;

  if (loadedCount === visibleCards.length && loadedCount > 0) {
    // do nothing (or trigger UI state if needed)
  }
}, [imageLoadStats, visibleCards.length]);

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
      
      <div className="main-container" ref={sectionRef}>
        <div className="yogaschool">
          <div className="yogaa">
            {/* <div className="heading">
              <h1>Blog</h1>
              <img 
                src="./images/lg.png" 
                alt="Yogalayaa Logo" 
                loading="eager"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div> */}
         <SectionHeading
  title="Our"
  highlight="Blog"
  subtitle="Explore yoga insights, wellness tips, mindfulness practices and inspiring stories from the Ombreathe community"
  highlightColor="#4a7c68"
  textColor="#1e1e1c"
/>
          </div>
        </div>
        
        <div className="card-container">
          <div className="cards-grid">
            <Suspense fallback={
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {[1, 2, 3].map(i => (
                  <div key={i} style={{
                    width: 'calc(33.333% - 14px)',
                    height: '250px',
                    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 1.5s infinite',
                    borderRadius: '8px'
                  }} />
                ))}
              </div>
            }>
              {visibleCards.map((card, index) => (
                <BlogCard
                  key={card.id}
                  card={card}
                  index={index}
                  showAll={showAll}
                  onImageLoad={handleImageLoad}
                />
              ))}
            </Suspense>
          </div>
          
          <div className="show-more-container">
            {!deferredShowAll ? (
              <button 
                className="show-more-btn"
                onClick={handleShowMore}
                type="button"
                aria-label="Show more blog posts"
                disabled={isTransitioning}
                style={{
                  opacity: isTransitioning ? 0.7 : 1,
                  cursor: isTransitioning ? 'wait' : 'pointer'
                }}
              >
                {isTransitioning ? 'LOADING...' : 'SHOW MORE'}
              </button>
            ) : (
              <button 
                className="show-more-btn"
                onClick={handleShowLess}
                type="button"
                aria-label="Show fewer blog posts"
                disabled={isTransitioning}
                style={{
                  opacity: isTransitioning ? 0.7 : 1,
                  cursor: isTransitioning ? 'wait' : 'pointer'
                }}
              >
                {isTransitioning ? 'LOADING...' : 'SHOW LESS'}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Blog);