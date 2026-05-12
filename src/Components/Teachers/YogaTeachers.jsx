import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import './YogaTeachers.css';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import nitin from '../../images/Teachers/Nitin_Dobriyal.jpg'
import pulkit from '../../images/Teachers/pulkit.webp'
import abhishekh from '../../images/Teachers/abhishekh.webp'
import savitri from '../../images/Teachers/savitri.webp'
import ranjan from '../../images/Teachers/yogiji.jpeg'
import ishani from '../../images/Teachers/Ishani_Ghate.jpg'
// import lg from '../../images/lg.png'
import SectionHeading from '../useFullComponent/SectionHeading';

const YogaTeachers = () => {
  const [showAll, setShowAll] = useState(false);
  const [imageLoadStates, setImageLoadStates] = useState({});
  const sectionRef = useRef(null);

  // Image mapping for easier management
  const imageMap = useMemo(() => ({
    nitin,
    pulkit,
    abhishekh,
    savitri,
    ranjan,
    ishani
  }), []);

  // Memoized teachers data
  const teachers = useMemo(() => [
    {
      id: 10,
      name: "YOGI RANJAN",
      imageKey: 'ranjan',
      title: "Yoga Guru",
      description: "Practicing yogi for over 10 years, specializing in Vedic Meditation and Kundalini Yoga. Brings ancient wisdom to modern practice.",
      experience: "10+ Years",
      priority: 1,
      socials: {
        instagram: "https://www.instagram.com/rockymohakud?igsh=Mm1lYnN6amcwdnQx",
        facebook: "https://www.facebook.com/share/1AmTEw7K2b/",
        twitter: "https://x.com/Yogalayaa_",
        youtube: "https://www.youtube.com/@yogalayaa"
      }
    },
    {
      id: 11,
      name: "Ishani Ghate",
      imageKey: 'ishani',
      title: "Yoga Therapist & Trainer",
      description: "Practicing yogi for over 8 years, specializing in Vedic Meditation and Kundalini Yoga. Brings ancient wisdom to modern practice.",
      experience: "8+ Years",
      priority: 2,
      socials: {
        instagram: "https://instagram.com/ishani",
        facebook: "https://facebook.com/ishani",
        twitter: "https://twitter.com/ishani",
        youtube: "https://youtube.com/ishani"
      }
    },
    {
      id: 1,
      name: "NITIN DOBRIYAL",
      imageKey: 'nitin',
      title: "Yoga Instructor",
      description: "Practicing yogi for over 6 years, specializing in Vedic Meditation and Kundalini Yoga. Brings ancient wisdom to modern practice.",
      experience: "6+ Years",
      priority: 3,
      socials: {
        instagram: "https://instagram.com/nitin",
        facebook: "https://facebook.com/nitin",
        twitter: "https://twitter.com/nitin",
        youtube: "https://youtube.com/nitin"
      }
    },
    {
      id: 2,
      name: "PULKIT ARORA",
      imageKey: 'pulkit',
      title: "Yoga Instructor",
      description: "Registered Yoga Teacher, Sound Healing and Hypnotherapist master. Combines traditional practices with modern healing techniques.",
      experience: "5+ Years",
      priority: 4,
      socials: {
        instagram: "https://instagram.com/pulkit",
        linkedin: "https://linkedin.com/in/pulkit",
        facebook: "https://facebook.com/pulkit",
        youtube: "https://youtube.com/pulkit"
      }
    },
    {
      id: 3,
      name: "ABHISHEKH THALWAL",
      imageKey: 'abhishekh',
      title: "Astanga Yoga, Hatha Yoga",
      description: "Has 7 years of teaching experience, certified in 500 hours in 2020, and in hatha and 500 hours in Ayurveda in 2021.",
      experience: "7+ Years",
      priority: 5,
      socials: {
        instagram: "https://instagram.com/abhishekh",
        twitter: "https://twitter.com/abhishekh",
        facebook: "https://facebook.com/abhishekh",
        linkedin: "https://linkedin.com/in/abhishekh"
      }
    },
    {
      id: 4,
      name: "SAVITRI DEVI-GURUMAA",
      imageKey: 'savitri',
      title: "KRI Professional Teachers",
      description: "Certified meditation teacher with 20 years of experience in various contemplative practices and mindfulness techniques.",
      experience: "20+ Years",
      priority: 6,
      socials: {
        instagram: "https://instagram.com/savitri",
        youtube: "https://youtube.com/savitri",
        twitter: "https://twitter.com/savitri",
        facebook: "https://facebook.com/savitri"
      }
    }
  ], []);

  // Progressive image loading simulation for performance
  useEffect(() => {
    const loadImagesProgressively = () => {
      // Load priority images first (first 3 teachers)
      const priorityTeachers = teachers
        .filter(t => t.priority <= 3)
        .sort((a, b) => a.priority - b.priority);

      priorityTeachers.forEach((teacher, index) => {
        setTimeout(() => {
          setImageLoadStates(prev => ({
            ...prev,
            [teacher.id]: 'loaded'
          }));
        }, index * 120); // 120ms delay between priority images
      });

      // Load remaining images with longer delays
      const remainingTeachers = teachers
        .filter(t => t.priority > 3)
        .sort((a, b) => a.priority - b.priority);

      remainingTeachers.forEach((teacher, index) => {
        setTimeout(() => {
          setImageLoadStates(prev => ({
            ...prev,
            [teacher.id]: 'loaded'
          }));
        }, 360 + (index * 180)); // Start after priority images, longer delays
      });
    };

    loadImagesProgressively();
  }, [teachers]);

  // Memoized displayed teachers
  const displayedTeachers = useMemo(() => 
    showAll ? teachers : teachers.slice(0, 3),
    [showAll, teachers]
  );

  // Memoized social icon component
  const getSocialIcon = useCallback((platform) => {
    switch(platform) {
      case 'instagram': return <FaInstagram />;
      case 'facebook': return <FaFacebook />;
      case 'twitter': return <FaTwitter />; 
      case 'youtube': return <FaYoutube />;
      case 'linkedin': return <FaLinkedin />;
      default: return null;
    }
  }, []);

  // Memoized image error handler
  const handleImageError = useCallback((e) => {
    e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center&auto=format';
    e.target.onerror = null;
  }, []);

  // Handle actual image load
  const handleImageLoad = useCallback((teacherId) => {
    setImageLoadStates(prev => ({
      ...prev,
      [teacherId]: 'displayed'
    }));
  }, []);

  // Memoized contact handler
  const handleContactTeacher = useCallback((teacherName) => {
    console.log(`Contact: ${teacherName}`);
  }, []);

  // Memoized show more handler
  const handleShowMore = useCallback(() => {
    setShowAll(true);
  }, []);

  // Memoized show less handler with scroll
  const handleShowLess = useCallback(() => {
    setShowAll(false);
    setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  }, []);

  // Memoized social links component
  const SocialLinks = useCallback(({ socials }) => (
    <div className="social-icons">
      {Object.entries(socials).map(([platform, url]) => (
        <a
          key={platform}
          href={url}
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
          title={`Follow on ${platform}`}
        >
          {getSocialIcon(platform)}
        </a>
      ))}
    </div>
  ), [getSocialIcon]);

  return (
    <div className="yoga-teachers-wrapper">
      <div className="yoga-teachers-container" ref={sectionRef}>
        <div className="yogaschool">
          <div className="yogaa">
            {/* <div className="heading">
              <h1>Our Yoga Teachers</h1>
              <img 
                src={lg} 
                alt="Ombreathe Logo" 
                loading="eager"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div> */}
           <SectionHeading
  title="Our Yoga"
  highlight="Teachers"
  subtitle="Learn from experienced yoga masters dedicated to guiding your journey with wisdom, authenticity and compassion"
  highlightColor="#4a7c68"
  textColor="#1e1e1c"
/>
          </div>
        </div>

        <div className="teachers-grid">
          {displayedTeachers.map((teacher, index) => {
            const imageLoadState = imageLoadStates[teacher.id] || 'loading';
            const imageSrc = imageMap[teacher.imageKey];
            const isFirstCard = index === 0; // Check if this is the first card
            
            return (
              <div key={teacher.id} className={`teacher-card ${showAll && index >= 3 ? 'fade-in' : ''}`}>
                <div className="teacher-image-container">
                  {imageLoadState === 'loading' ? (
                    <div 
                      className="teacher-image"
                      style={{
                        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#666',
                        fontSize: '14px',
                        height: '300px'
                      }}
                    >
                      Loading...
                    </div>
                  ) : (
                    <img 
                      src={imageSrc} 
                      alt={teacher.name}
                      className="teacher-image"
                      onError={handleImageError}
                      onLoad={() => handleImageLoad(teacher.id)}
                      loading="lazy"
                      style={{
                        opacity: imageLoadState === 'displayed' ? 1 : 0.8,
                        transition: 'opacity 0.3s ease'
                      }}
                    />
                  )}
                  <div className="image-overlay"></div>
                  <div className="experience-badge">{teacher.experience}</div>
                </div>
                
                <div className="teacher-content">
                  <h3 className="teacher-name">{teacher.name}</h3>
                  <p className="teacher-title">{teacher.title}</p>
                  <p className="teacher-description">{teacher.description}</p>
                  
                  {/* Only show social links on the first card */}
                  {isFirstCard && <SocialLinks socials={teacher.socials} />}
                  
                  <button 
                    className="contact-btn"
                    onClick={() => handleContactTeacher(teacher.name)}
                    type="button"
                    aria-label={`Contact ${teacher.name}`}
                  >
                    Contact Teacher
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="see-more-container">
          {!showAll ? (
            <button 
              onClick={handleShowMore}
              className="see-more-btn"
              type="button"
              aria-label="Show more yoga teachers"
            >
              See More Teachers
            </button>
          ) : (
            <button 
              onClick={handleShowLess}
              className="show-less-btn"
              type="button"
              aria-label="Show fewer yoga teachers"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(YogaTeachers);