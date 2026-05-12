import React, { 
  useMemo, 

  memo, 
  useState, 
  useEffect,
  
} from 'react';
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

// Lazy load images for better performance
const lazyLoadImage = (imageName) => {
  const imageModules = {
    logo: () => import('../../images/omBreatheLogo.png'),
    yoga: () => import('../../images/cirtificats/yoga.png'),
    two: () => import('../../images/cirtificats/200.png'),
    l500: () => import('../../images/cirtificats/500.webp'),
    l300: () => import('../../images/cirtificats/300yy.png'),
    yacep: () => import('../../images/cirtificats/YACEP.png')
  };
  return imageModules[imageName]?.() || Promise.reject('Image not found');
};

// Optimized Image Component with Lazy Loading
const OptimizedImage = memo(({ imageKey, alt, style, title, className }) => {
  const [src, setSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const loadImageAsync = async () => {
      try {
        const module = await lazyLoadImage(imageKey);
        if (!isCancelled) {
          setSrc(module.default);
          setIsLoading(false);
        }
      } catch (error) {
        if (!isCancelled) {
          setLoadError(true);
          setIsLoading(false);
        }
      }
    };

    loadImageAsync();

    return () => {
      isCancelled = true;
    };
  }, [imageKey]);

  if (loadError) {
    return (
      <div 
        style={{
          ...style,
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
          fontSize: '12px',
          borderRadius: '8px'
        }}
      >
        {alt}
      </div>
    );
  }

  if (isLoading || !src) {
    return (
      <div 
        style={{
          ...style,
          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite',
          borderRadius: '8px'
        }}
      />
    );
  }

  return (
    <img 
      src={src}
      alt={alt}
      style={style}
      title={title}
      className={className}
      loading="lazy"
    />
  );
});

// Memoized Social Links Component
const SocialLinks = memo(() => {
  const socialData = useMemo(() => [
    {
      href: "https://www.facebook.com/profile.php?id=100090950655442",
      icon: FaFacebookF,
      label: "Facebook"
    },
    {
      href: "https://instagram.com/yogalayaa",
      icon: FaInstagram,
      label: "Instagram"
    },
    {
      href: "https://youtube.com/@yogalayaa",
      icon: FaYoutube,
      label: "YouTube"
    }
  ], []);

  return (
    <div className="social-links">
      <h6 className="text-uppercase fw-bold mb-3">Follow Us</h6>
      <div className="d-flex gap-2">
        {socialData.map(({ href, icon: Icon, label }) => (
          <a 
            key={label}
            href={href}
            className="btn btn-outline-light btn-sm rounded-circle p-2"
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
});

// Memoized Quick Links Component
const QuickLinks = memo(() => {
  const links = useMemo(() => [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/programs", label: "Programs" },
    { to: "/contact", label: "Contact" }
  ], []);

  return (
    <div className="px-lg-3" style={{borderRight: '1px solid rgba(255,255,255,0.2)', minHeight: '300px'}}>
      <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
      <ul className="list-unstyled">
        {links.map(({ to, label }) => (
          <li key={to} className="mb-2">
            <Link to={to} className="footer-link">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

// Memoized Contact Info Component
const ContactInfo = memo(() => {
  const contactData = useMemo(() => ({
    phones: [
      { number: "+917483987568", display: "+91-7483987568" },
      { number: "+917829997007", display: "+91-7829997007" }
    ],
    email: [
      { address: "info@ombreathe.in", display: "info@ombreathe.in" },
      { address: "ombreathein@gmail.com", display: "ombreathein@gmail.com" }
    ],
    address: "1972, 22nd Main Rd, Vanganahalli, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102",
    hours: "Mon - Sat, 6:00 AM - 8:00 PM"
  }), []);

  return (
    <div className="ps-lg-4">
      <h6 className="text-uppercase fw-bold mb-3">Contact Info</h6>
      <ul className="list-unstyled ">
        <li className="mb-3 d-flex align-items-start">
        <Phone
  size={18}
  className="me-3 mt-1 flex-shrink-0"
  style={{ color: '#42A5F6' }}
/>
          <div>
            {contactData.phones.map(({ number, display }) => (
              <p key={number} className="mb-1">
                <a href={`tel:${number}`} className="footer-link">
                  {display}
                </a>
              </p>
            ))}
            <small className="contact-hours">{contactData.hours}</small>
          </div>
        </li>
        <li className="mb-3 d-flex align-items-start">
         <Mail
  size={18}
  className="me-3 mt-1 flex-shrink-0"
  style={{ color: '#42A5F6' }}
/>
          <div>
            {contactData.email.map(({ address, display }) => (
              <p key={address} className="mb-1">
                <a href={`mailto:${address}`} className="footer-link">
                  {display}
                </a>
              </p>
            ))}
            <small className="contact-hours">{contactData.hours}</small>
          </div>
        </li>
        <li className="mb-3 d-flex align-items-start">
         <MapPin
  size={18}
  className="me-3 mt-1 flex-shrink-0"
  style={{ color: '#42A5F6' }}
/>
          <div>
            <address className="mb-0 footer-address">
              {contactData.address}
            </address>
          </div>
        </li>
      </ul>
    </div>
  );
});

// Memoized Certifications Component
const Certifications = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    const element = document.querySelector('.certifications');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = useMemo(() => [
    { imageKey: 'yoga', alt: 'Yoga Alliance Certified', title: 'Yoga Alliance Certified School' },
    { imageKey: 'two', alt: 'RYT 200 Certified', title: 'Registered Yoga Teacher 200 Hours' },
    { imageKey: 'l300', alt: 'RYT 300 Certified', title: 'Registered Yoga Teacher 300 Hours' },
    { imageKey: 'l500', alt: 'RYT 500 Certified', title: 'Registered Yoga Teacher 500 Hours' },
    { imageKey: 'yacep', alt: 'YACEP Certified', title: 'Yoga Alliance Continuing Education Provider' }
  ], []);

  return (
    <div className="certifications mt-4">
      <h6 className="text-uppercase fw-bold mb-3">Certified By</h6>
      <div className="d-flex flex-wrap gap-3 align-items-center">
        {isVisible && certifications.map((cert, index) => (
          <div key={cert.imageKey} className="cert-logo">
            <OptimizedImage
              imageKey={cert.imageKey}
              alt={cert.alt}
              title={cert.title}
              style={{ maxHeight: '100px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

// Scroll to Top Button Only (WhatsApp removed)
// const ScrollToTopButton = memo(() => {
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     let timeoutId;
//     const handleScroll = () => {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => {
//         setShowScrollTop(window.pageYOffset > 300);
//       }, 100);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       clearTimeout(timeoutId);
//     };
//   }, []);

//   const scrollToTop = useCallback(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   }, []);

//   return showScrollTop ? (
//     <button
//       onClick={scrollToTop}
//       className="btn position-fixed scroll-top-btn rounded-circle shadow-lg"
//       style={{ 
//         width: '50px', 
//         height: '50px',
//         bottom: '20px',
//         right: '20px',
//         zIndex: 1000,
//         transition: 'all 0.3s ease',
//         backgroundColor: '#42A5F6',
//         borderColor: '#42A5F6',
//         color: 'white'
//       }}
//       aria-label="Scroll to top"
//     >
//       <FontAwesomeIcon icon={faChevronUp} />
//     </button>
//   ) : null;
// });

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      {/* Main Footer */}
      <footer className="text-light py-5" style={{ backgroundColor: '#16769E' }}>
        <div className="container">
          <div className="row g-4">
            {/* Brand Section */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-brand pe-lg-4" style={{borderRight: '1px solid rgba(255,255,255,0.2)', minHeight: '300px'}}>
                <OptimizedImage
                  imageKey="logo"
                  alt="Yogalayaa Logo"
                  className="mb-3"
                  style={{ maxHeight: '90px', width: 'auto' }}
                />
                <p className="footer-description mb-4">
                  Transform your life through authentic yoga practices. We offer comprehensive 
                  programs designed to help you achieve wellness goals and inner peace.
                </p>
                <SocialLinks />
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <QuickLinks />
            </div>

            {/* Contact Info */}
            <div className="col-lg-6 col-md-12">
              <ContactInfo />
              <Certifications />
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="py-3" style={{ backgroundColor: '#1a252f' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0 copyright-text-white">
                © {currentYear} Ombreathe. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="mb-0 copyright-text-white">
                Designed by <a href="https://www.pmrgsolution.com/" className="footer-link-copyright-white">PMRG Solution</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <ScrollToTopButton /> */}

      {/* Custom Styles (WhatsApp styles completely removed) */}
      <style>{`
        .social-links h6,
        .px-lg-3 h6,
        .ps-lg-4 h6,
        .certifications h6 {
          color: #FF9933 !important;
        }

        .contact-info svg {
          color: #FF9933 !important;
        }

        .footer-description {
          color: #000 !important;
          font-weight: 500;
          line-height: 1.6;
        }
        
        .footer-address {
          color: #000 !important;
          font-weight: 500;
          line-height: 1.5;
        }
        
        .contact-hours {
          color: #000 !important;
          font-weight: 500;
          opacity: 0.8;
        }
        
        .footer-link {
          color: #000 !important;
          text-decoration: none !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 500;
          position: relative;
          display: inline-block;
        }
        
        .footer-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: linear-gradient(rgb(255, 153, 51));
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .footer-link:hover {
          color: #ffffff !important;
          transform: translateX(5px);
        }
        
        .footer-link:hover::after {
          width: 100%;
        }
        
        .copyright-text-white {
          color: #ffffff !important;
          font-weight: 400;
          opacity: 0.9;
        }
        
        .footer-link-copyright-white {
          color: #42A5F6 !important;
          text-decoration: none !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          display: inline-block;
        }
        
        .footer-link-copyright-white::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: linear-gradient(90deg, #ffffff, #f0f0f0);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .footer-link-copyright-white:hover {
          color: #ffffff !important;
          transform: translateX(3px);
        }
        
        .footer-link-copyright-white:hover::after {
          width: 100%;
        }
        
        .social-links .btn {
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .social-links .btn:hover {
          background-color: #42A5F6;
          border-color: #42A5F6;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(66, 165, 246, 0.3);
        }
        
        .scroll-top-btn:hover {
          transform: translateY(-5px) rotate(5deg);
          background-color: #2E8AD4 !important;
          border-color: #2E8AD4 !important;
          box-shadow: 0 10px 30px rgba(66, 165, 246, 0.4) !important;
        }
        
        .cert-logo {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .cert-logo:hover {
          transform: translateY(-5px) scale(1.1);
        }
        
        .cert-logo img {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          border-radius: 8px;
        }
        
        .cert-logo:hover img {
          border-color: #42A5F6;
          box-shadow: 0 5px 15px rgba(66, 165, 246, 0.2);
        }
        
        @media (max-width: 991px) {
          .footer-brand, .px-lg-3 {
            border-right: none !important;
            margin-right: 0 !important;
            margin-bottom: 30px;
          }
        }
        
        @media (max-width: 768px) {
          .certifications .d-flex {
            justify-content: center;
          }
          
          .social-links .d-flex {
            justify-content: center;
          }
          
          .scroll-top-btn {
            bottom: 15px !important;
            right: 15px !important;
          }
        }
      `}</style>
    </>
  );
};

export default memo(Footer);
