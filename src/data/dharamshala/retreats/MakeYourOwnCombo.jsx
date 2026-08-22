import React, { useState } from 'react';
import SectionHeading from '../../../components/shared/SectionHeading/SectionHeading';
import { Send, CheckCircle2, Award, Heart } from 'lucide-react';

const MakeYourOwnCombo = () => {
  const [formStatus, setFormStatus] = useState({ loading: false, success: null, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: null, message: '' });

    const formData = new FormData(e.target);
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "";

    formData.append("access_key", accessKey);
    formData.append("subject", "New Custom Combo Inquiry - Ombreathe");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setFormStatus({
          loading: false,
          success: true,
          message: "Thank you! Your custom combo preferences have been received. We will get back to you shortly."
        });
        e.target.reset();
      } else {
        setFormStatus({
          loading: false,
          success: false,
          message: data.message || "Failed to submit request. Please try again."
        });
      }
    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        message: "A network error occurred. Please check your connection and try again."
      });
    }
  };

  return (
    <div className="myoc-page-wrapper">
      <style>{`
        .myoc-page-wrapper {
          background: linear-gradient(180deg, #fefdf9 0%, #f6f1e8 100%);
          padding: 60px 24px 100px 24px;
        
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #2c2520;
        }

        .myoc-content-container {
          max-width: 1200px;
          margin: 40px auto 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: start;
        }

        @media (max-width: 992px) {
          .myoc-content-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        /* ── LEFT COLUMN: TEXT ── */
        .myoc-text-column {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .myoc-paragraph {
          font-size: 16px;
          line-height: 1.7;
          color: #5c5246;
          margin: 0;
        }

        .myoc-highlight-box {
          background: rgba(199, 154, 78, 0.04);
          border-left: 4px solid #c99a4e;
          padding: 24px;
          border-radius: 0 16px 16px 0;
          margin: 10px 0;
        }

        .myoc-highlight-text {
          font-size: 16px;
          line-height: 1.7;
          color: #8c6221;
          margin: 0;
          font-style: italic;
        }

        .myoc-icon-feature-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 10px;
        }

        .myoc-icon-feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          font-weight: 600;
          color: #1a1512;
        }

        .myoc-icon-gold {
          color: #c99a4e;
          flex-shrink: 0;
        }

        /* ── RIGHT COLUMN: FORM ── */
        .myoc-form-card {
          background: #ffffff;
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 20px 50px rgba(44, 37, 32, 0.05);
          border: 1px solid rgba(197, 185, 172, 0.3);
          position: sticky;
          top: 100px;
        }

        @media (max-width: 576px) {
          .myoc-form-card {
            padding: 24px;
          }
        }

        .myoc-form-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 30px;
          font-weight: 500;
          margin-bottom: 8px;
          color: #1a1512;
        }

        .myoc-form-subtitle {
          font-size: 14px;
          color: #8c8073;
          margin-bottom: 30px;
        }

        .myoc-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .myoc-form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .myoc-label {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #5c5246;
        }

        .myoc-input, .myoc-textarea {
          padding: 14px 16px;
          border: 1px solid rgba(197, 185, 172, 0.4);
          background-color: #faf9f6;
          border-radius: 12px;
          font-size: 15px;
          font-family: inherit;
          color: inherit;
          transition: all 0.3s ease;
          width: 100%;
          box-sizing: border-box;
        }

        .myoc-input:focus, .myoc-textarea:focus {
          outline: none;
          border-color: #4a7c68;
          background-color: #ffffff;
          box-shadow: 0 0 0 4px rgba(74, 124, 104, 0.08);
        }

        .myoc-submit-btn {
          background: #4a7c68;
          color: #ffffff;
          padding: 16px;
          border-radius: 12px;
          border: none;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
          margin-top: 10px;
          box-shadow: 0 8px 20px rgba(74, 124, 104, 0.15);
        }

        .myoc-submit-btn:hover {
          background: #3d6655;
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(74, 124, 104, 0.25);
        }

        .myoc-submit-btn:disabled {
          background: #8faea1;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .myoc-status-message {
          padding: 16px;
          border-radius: 12px;
          font-size: 14px;
          line-height: 1.5;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .myoc-status-message.success {
          background-color: #eef7f4;
          border: 1px solid rgba(74, 124, 104, 0.2);
          color: #2b5443;
        }

        .myoc-status-message.error {
          background-color: #fdf2f2;
          border: 1px solid rgba(224, 86, 86, 0.2);
          color: #8a2a2a;
        }
      `}</style>

      {/* HEADER SECTION */}
      <SectionHeading
        title="Make Your Own"
        highlight="Combo"
        subtitle="Customize your learning path with a unique selection of courses tailored to your personal goals."
        highlightColor="#c99a4e"
        textColor="#1e1e1c"
      />

      <div className="myoc-content-container">
        {/* LEFT COLUMN: CONTENT */}
        <div className="myoc-text-column">
          <p className="myoc-paragraph">
            Dear yogis, <strong>Ombreathe</strong> offers a variety of courses available for the seekers who 
            want to learn more about different styles and practices of yoga, wellness, Ayurveda, Tantra, Kundalini, 
            meditation, and much more. Already we have mentioned on our website how many courses we are providing. 
            We are the world’s largest teacher training school providing all types of courses in authentic way and 
            we are from traditional India.
          </p>

          <p className="myoc-paragraph">
            If you have any special interest to learn any special combinations, and if it does not exist on our website 
            still, there are possibilities to learn. Just you can send your request for your own combo courses, and 
            we will try our best to offer it to you if time, teacher, and space are available.
          </p>

          <div className="myoc-highlight-box">
            <p className="myoc-highlight-text">
              "As a new yoga teacher, you must first have 200 hours of YTTC, then 300 hours of YTTC, and then you can 
              learn yin, prenatal, kids, wellness, ayurveda, yoga therapy, aerial yoga, acro yoga, Tantra yoga, 
              meditation courses, and much more. We provide course certifications for all the courses given on our 
              website. And we also provide a 30% discount if there are more than five combo courses."
            </p>
          </div>

          <div className="myoc-icon-feature-list">
            <div className="myoc-icon-feature-item">
              <CheckCircle2 className="myoc-icon-gold" size={18} />
              <span>Free combinations of custom curriculum paths</span>
            </div>
            <div className="myoc-icon-feature-item">
              <Heart className="myoc-icon-gold" size={18} />
              <span>Full course certifications provided</span>
            </div>
            <div className="myoc-icon-feature-item">
              <Award className="myoc-icon-gold" size={18} />
              <span>30% discount for five or more combo courses</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: CONTACT FORM */}
        <div className="myoc-form-card">
          <h2 className="myoc-form-title">Request Custom Combo</h2>
          <p className="myoc-form-subtitle">Fill in the details below to request your custom combo package.</p>

          <form className="myoc-form" onSubmit={handleSubmit}>
            <div className="myoc-form-group">
              <label className="myoc-label" htmlFor="name">Full Name</label>
              <input 
                className="myoc-input" 
                id="name" 
                name="name" 
                type="text" 
                placeholder="Your Name" 
                required 
                minLength={2}
              />
            </div>

            <div className="myoc-form-group">
              <label className="myoc-label" htmlFor="email">Email Address</label>
              <input 
                className="myoc-input" 
                id="email" 
                name="email" 
                type="email" 
                placeholder="your.email@domain.com" 
                required 
              />
            </div>

            <div className="myoc-form-group">
              <label className="myoc-label" htmlFor="phone">Phone / WhatsApp Number</label>
              <input 
                className="myoc-input" 
                id="phone" 
                name="phone" 
                type="tel" 
                placeholder="+1 (555) 000-0000" 
                required 
                minLength={8}
              />
            </div>

            <div className="myoc-form-group">
              <label className="myoc-label" htmlFor="message">Your Message</label>
              <textarea 
                className="myoc-textarea" 
                id="message" 
                name="message" 
                rows="5" 
                placeholder="Tell us about the courses you want to combine, your background (200/300 hr YTTC), and preferred dates..." 
                required
                minLength={10}
              ></textarea>
            </div>

            {formStatus.message && (
              <div className={`myoc-status-message ${formStatus.success ? 'success' : 'error'}`}>
                {formStatus.message}
              </div>
            )}

            <button className="myoc-submit-btn" type="submit" disabled={formStatus.loading}>
              <Send size={18} />
              <span>{formStatus.loading ? "Sending Message..." : "Send Request"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeYourOwnCombo;