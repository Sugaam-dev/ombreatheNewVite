import React, { 
  useState, 
  useRef, 
  useEffect, 
  useCallback, 
  memo,
  lazy,
  Suspense 
} from "react";
import "../Styles/utube.css";
import SectionHeading from "./useFullComponent/SectionHeading";

// Lazy load YouTube iframe for better performance
const LazyYouTubeEmbed = lazy(() => 
  Promise.resolve({
    default: ({ videoId, title, onLoad }) => (
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?si=agNMvNIB3f5wyI41`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
        onLoad={onLoad}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '12px'
        }}
      />
    )
  })
);

// Optimized YouTube Player Component with Intersection Observer
const OptimizedYouTubePlayer = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const playerRef = useRef(null);
  const observerRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay iframe loading for better performance
          setTimeout(() => setShowPlayer(true), 200);
          observerRef.current?.disconnect();
        }
      },
      { 
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    if (playerRef.current) {
      observerRef.current.observe(playerRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  const handlePlayerLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Video thumbnail for preview (lightweight)
  const VideoThumbnail = useCallback(() => (
    <div 
      style={{
        width: '100%',
        height: '315px',
        backgroundImage: 'url(https://img.youtube.com/vi/_xLrirWP-S0/maxresdefault.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        position: 'relative',
        transition: 'transform 0.3s ease'
      }}
      onClick={() => setShowPlayer(true)}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <svg 
          width="80" 
          height="80" 
          viewBox="0 0 24 24" 
          fill="white"
          style={{ 
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
            transition: 'transform 0.3s ease'
          }}
        >
          <path d="M8 5v14l11-7z"/>
        </svg>
      </div>
      <div style={{
        position: 'absolute',
        bottom: '16px',
        left: '16px',
        color: 'white',
        fontSize: '14px',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)'
      }}>
        Click to play video
      </div>
    </div>
  ), []);

  return (
    <div 
      ref={playerRef} 
      className="utube"
      style={{ 
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}
    >
      {!isVisible ? (
        // Loading placeholder
        <div 
          style={{
            width: '100%',
            height: '315px',
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666'
          }}
        >
          Loading video...
        </div>
      ) : !showPlayer ? (
        <VideoThumbnail />
      ) : (
        <Suspense fallback={
          <div style={{
            width: '100%',
            height: '315px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}>
            Loading YouTube Player...
          </div>
        }>
          <LazyYouTubeEmbed
            videoId="_xLrirWP-S0"
            title="Yoga School By Ombreathe"
            onLoad={handlePlayerLoad}
          />
        </Suspense>
      )}
      
      {isLoaded && (
        <div style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          background: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '12px'
        }}>
          HD
        </div>
      )}
    </div>
  );
});

function Utube() {
  // Memoized content data
  const content = {
    title: "Yoga School By Ombreathe",
    subtitle: "Awaken Your Inner Yogi and Embrace the Magic of Rishikesh, Bali, and McLeod Ganj with Ombreathe Yoga Ashram",
    description: `Welcome to Ombreathe Yoga Ashram, a leading yoga school with centers in Rishikesh, Bali, and McLeod Ganj. Our Yoga Teacher Training courses are Yoga Alliance accredited and offer a comprehensive, immersive learning experience for practitioners of all levels.

Guided by experienced and certified teachers, we provide personalized attention to help you build a strong foundation in yoga practice. Nestled in serene and spiritual locations, our schools create the perfect environment for growth, healing, and transformation.

Whether you want to deepen your practice or become a certified yoga teacher, Ombreathe's TTC programs in Rishikesh, Bali, and McLeod Ganj will empower you to reach your goals.`
  };

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        
        .utube:hover .video-thumbnail {
          transform: scale(1.02);
        }
        
        .play-button:hover {
          transform: scale(1.1);
        }
      `}</style>
      
      {/* <div className="headingu">
        <h1>{content.title}</h1>
        <img 
          src="./images/lg.png" 
          alt="Ombreathe Logo" 
          loading="eager"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div> */}
  <SectionHeading
  title="Yoga School By"
  highlight="Ombreathe"
  subtitle="Experience authentic yoga education, mindful living and transformational wellness guided by experienced teachers"
  highlightColor="#4a7c68"
  textColor="#1e1e1c"
/>
      
      <div className="contt">
        <h3>{content.subtitle}</h3>
        <p>{content.description}</p>
      </div>
      
      <OptimizedYouTubePlayer />
    </>
  );
}

export default memo(Utube);