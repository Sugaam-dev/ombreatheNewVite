import React, { 
  useState, 
  useCallback, 
  useMemo, 
  memo,
  useRef,
  lazy,
  Suspense,
  startTransition
} from "react";
import "../Styles/Contact.css";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import SectionHeading from "./useFullComponent/SectionHeading";
// import logoimage from "../images/lg.png"
// Lazy load Google Maps for better performance
const LazyGoogleMap = lazy(() => 
  Promise.resolve({
    default: memo(() => (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.251736888909!2d77.6467562!3d12.914163700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b1f01663c1%3A0x174babce4553003a!2sYogalayaa!5e1!3m2!1sen!2sin!4v1749394149166!5m2!1sen!2sin"
        width="100%"
    // style={{ border: 0, height: "100%" }}
        style={{ border: 0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Yogalayaa Location Map"
      />
    ))
  })
);

// Memoized Contact Info Component
const ContactInfo = memo(() => {
  const contactData = useMemo(() => ({
    phone: ['+91 7483987568', '+91 7829997007'],
    email: ['info@ombreathe.in', 'ombreathein@gmail.com'],
    address: '1972, 22nd Main Rd, Vanganahalli, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102',
    socialLinks: [
      { icon: FaFacebookF, href: 'https://www.facebook.com/profile.php?id=100090950655442', label: 'Facebook' },
      { icon: IoLogoYoutube, href: 'https://www.youtube.com/@yogalayaa', label: 'YouTube' },
      { icon: FaInstagram, href: 'https://www.instagram.com/yogalayaa/', label: 'Instagram' }
    ]
  }), []);

  return (
    <div className="contact-in">
      <h1>Contact Info</h1>
      
      <h2>
        <FaPhoneAlt /> Phone
      </h2>
      {contactData.phone.map((number, index) => (
        <p key={index}>{number}</p>
      ))}
      
      <h2>
        <MdEmail /> Email
      </h2>
      {contactData.email.map((mail, index) => (
        <p key={index}>{mail}</p>
      ))}
      
      <h2>
        <CiLocationOn /> Address
      </h2>
      <p>{contactData.address}</p>
      
      <ul>
        {contactData.socialLinks.map(({ icon: Icon, href, label }, index) => (
          <li key={index}>
            <a href={href} aria-label={label}>
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});

// Optimized Form Component
const ContactForm = memo(() => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const formRef = useRef(null);

  // Memoized validation function
  const validateForm = useCallback((formData) => {
    const errors = {};
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');

    // Validate name
    if (!name || name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters long';
    }

   // Validate email
const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
if (!email || !emailRegex.test(email.trim())) {
  errors.email = 'Please enter a valid email address';
}

// Validate phone
// Removed unnecessary escapes from \( and \)
const phoneRegex = /^[0-9+\-\s()]{10,15}$/;
if (!phone || !phoneRegex.test(phone.trim())) {
  errors.phone = 'Please enter a valid phone number (10-15 digits)';
}

    return errors;
  }, []);

  // Optimized form submission
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    startTransition(() => {
      setIsLoading(true);
      setMessage("");
      setFormErrors({});
    });

    const formData = new FormData(e.target);

    // Validate form
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsLoading(false);
      setMessage("Please fix the errors below and try again.");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Message sent successfully! We'll get back to you soon.");
        formRef.current?.reset();
      } else {
        throw new Error(data.message || "Form submission failed");
      }
    } catch (error) {
      setMessage("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [validateForm]);

  // Memoized form fields configuration
  const formFields = useMemo(() => [
    {
      type: 'text',
      name: 'name',
      placeholder: 'Full Name *',
      required: true,
      minLength: 2,
      maxLength: 50,
      error: formErrors.name
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'Email Address *',
      required: true,
      pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$',
      title: 'Please enter a valid email address',
      error: formErrors.email
    },
    {
      type: 'tel',
      name: 'phone',
      placeholder: 'Contact Number',
      pattern: '[0-9+\\-\\s\\(\\)]{10,15}',
      title: 'Please enter a valid phone number (10-15 digits)',
      error: formErrors.phone
    },
    {
      type: 'text',
      name: 'custom_subject',
      placeholder: 'Subject'
    }
  ], [formErrors]);

  return (
    <div className="contact-in">
      <h1>Send a Message</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        {/* Web3Forms required fields */}
        <input type="hidden" name="access_key" value="2a332155-4ec2-4a38-8ee8-f7b4c227c50f" />
        <input type="hidden" name="subject" value="New Enquiry from Yogalayaa Website" />
        <input type="hidden" name="from_name" value="Yogalayaa Website" />
        {/* 2a332155-4ec2-4a38-8ee8-f7b4c227c50f */}
        {formFields.map((field) => (
          <div key={field.name}>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              className={`contact-in-input ${field.error ? 'error' : ''}`}
              required={field.required}
              minLength={field.minLength}
              maxLength={field.maxLength}
              pattern={field.pattern}
              title={field.title}
            />
            {field.error && <span className="error-text">{field.error}</span>}
          </div>
        ))}
        
        <textarea
          name="message"
          placeholder="Message"
          className="contact-in-input"
          rows={5}
        />
        
        <input 
          type="submit" 
          value={isLoading ? "Sending..." : "Send"} 
          className="contact-in-btn"
          disabled={isLoading}
        />
      </form>
      
      {message && (
        <div 
          className={`message ${message.includes('successfully') ? 'success' : 'error'}`}
          role="alert"
          aria-live="polite"
        >
          {message}
        </div>
      )}
    </div>
  );
});

// Map Loading Component
const MapLoader = memo(() => (
  <div 
    style={{
      width: '100%',
      height: '500px',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#666',
      fontSize: '16px',
      borderRadius: '8px'
    }}
  >
    Loading map...
  </div>
));

function Contact() {
  // Memoized header content
  // const headerContent = useMemo(() => ({
  //   title: "Get In Touch With Ombreathe",
  //   logo: logoimage
  // }), []);

  return (
    <>
      <div className="cont">
        {/* <div className="headingc">
          <h1>{headerContent.title}</h1>
          <img 
            src={headerContent.logo} 
            alt="Yogalayaa Logo"
            loading="eager"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div> */}
        <SectionHeading
          title="Get In Touch With Ombreathe"
          highlight="Contact Us"
          subtitle="Have questions or want to learn more? Reach out to us!"
          highlightColor="#4a7c68"
          textColor="#1e1e1c"
        />
        <div className="contact-wrap">
          <ContactInfo />
          <ContactForm />
          
          <div className="contact-in">
            <Suspense fallback={<MapLoader />}>
              <LazyGoogleMap />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Contact);