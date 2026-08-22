import { useState } from "react";
import SectionHeading from '../../../components/shared/SectionHeading/SectionHeading';
import { Send, CheckCircle2, Shield, Heart } from 'lucide-react';

const HostYourRetreats = () => {
  const [formStatus, setFormStatus] = useState({ loading: false, success: null, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: null, message: '' });

    const formData = new FormData(e.target);
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "";
    formData.append("access_key", accessKey);
    formData.append("subject", "New Host Your Retreat Inquiry - Ombreathe");

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
          message: "Thank you! Your message has been sent successfully. Our team will contact you shortly."
        });
        e.target.reset();
      } else {
        setFormStatus({
          loading: false,
          success: false,
          message: data.message || "Something went wrong. Please try again."
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
    <div className="hyrt-page-wrapper">
      <style>{`
        .hyrt-page-wrapper {
          background: linear-gradient(180deg, #fdfbf7 0%, #f7f3ea 100%);
          padding: 60px 24px 100px 24px;
       
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #2c2520;
        }

        .hyrt-content-container {
          max-width: 1200px;
          margin: 40px auto 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: start;
        }

        @media (max-width: 992px) {
          .hyrt-content-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        /* ── LEFT COLUMN: CONTENT ── */
        .hyrt-text-column {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .hyrt-paragraph {
          font-size: 16px;
          line-height: 1.7;
          color: #5c5246;
          margin: 0;
        }

        .hyrt-highlight-box {
          background: rgba(74, 124, 104, 0.04);
          border-left: 4px solid #4a7c68;
          padding: 24px;
          border-radius: 0 16px 16px 0;
          margin: 10px 0;
        }

        .hyrt-highlight-text {
          font-size: 16px;
          line-height: 1.7;
          color: #2b5443;
          margin: 0;
          font-style: italic;
        }

        .hyrt-icon-feature-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 10px;
        }

        .hyrt-icon-feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          font-weight: 600;
          color: #1a1512;
        }

        .hyrt-icon-green {
          color: #4a7c68;
          flex-shrink: 0;
        }

        /* ── RIGHT COLUMN: FORM ── */
        .hyrt-form-card {
          background: #ffffff;
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 20px 50px rgba(44, 37, 32, 0.05);
          border: 1px solid rgba(197, 185, 172, 0.3);
          position: sticky;
          top: 100px;
        }

        @media (max-width: 576px) {
          .hyrt-form-card {
            padding: 24px;
          }
        }

        .hyrt-form-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 30px;
          font-weight: 500;
          margin-bottom: 8px;
          color: #1a1512;
        }

        .hyrt-form-subtitle {
          font-size: 14px;
          color: #8c8073;
          margin-bottom: 30px;
        }

        .hyrt-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .hyrt-form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .hyrt-label {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #5c5246;
        }

        .hyrt-input, .hyrt-textarea {
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

        .hyrt-input:focus, .hyrt-textarea:focus {
          outline: none;
          border-color: #4a7c68;
          background-color: #ffffff;
          box-shadow: 0 0 0 4px rgba(74, 124, 104, 0.08);
        }

        .hyrt-submit-btn {
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

        .hyrt-submit-btn:hover {
          background: #3d6655;
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(74, 124, 104, 0.25);
        }

        .hyrt-submit-btn:disabled {
          background: #8faea1;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .hyrt-status-message {
          padding: 16px;
          border-radius: 12px;
          font-size: 14px;
          line-height: 1.5;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .hyrt-status-message.success {
          background-color: #eef7f4;
          border: 1px solid rgba(74, 124, 104, 0.2);
          color: #2b5443;
        }

        .hyrt-status-message.error {
          background-color: #fdf2f2;
          border: 1px solid rgba(224, 86, 86, 0.2);
          color: #8a2a2a;
        }
      `}</style>

      {/* HEADER SECTION */}
      <SectionHeading
        title="Host Your Retreat at"
        highlight="Ombreathe"
        subtitle="Bring your vision of teacher training, retreats, workshops, or classes to life."
        highlightColor="#4a7c68"
        textColor="#1e1e1c"
      />

      <div className="hyrt-content-container">
        {/* LEFT COLUMN: CONTENT */}
        <div className="hyrt-text-column">
          <p className="hyrt-paragraph">
            <strong>Ombreathe</strong> is open to all seekers, teachers, and facilitators who wish to share their wisdom. 
            Our beautiful campus is the perfect place to host your retreat, host your yoga teacher training (TTC), 
            host your workshop, or conduct daily classes.
          </p>

          <div className="hyrt-highlight-box">
            <p className="hyrt-highlight-text">
              "With a very small fee, you can access all our facilities: a spacious yoga hall, props, mats, cushions, 
              sound system, booking support, and the full use of our serene campus. We also provide teachers and 
              facilitators who can assist you in creating a transformative experience for your students."
            </p>
          </div>

          <p className="hyrt-paragraph">
            Many teachers dream of conducting their trainings in beautiful destinations, but finding the right venue 
            is often challenging. At <strong>Ombreathe</strong>, we make it easy for you to bring your vision to life—whether 
            it is a retreat, a TTC, or workshops and classes.
          </p>

          <p className="hyrt-paragraph">
            <strong>Ombreathe</strong> is more than just a school—it is a mission. A mission to share, conduct, inspire, 
            and uplift others. We invite you to host your program with us and together spread peace, wisdom, and beauty 
            in this world.
          </p>

          <div className="hyrt-icon-feature-list">
            <div className="hyrt-icon-feature-item">
              <CheckCircle2 className="hyrt-icon-green" size={18} />
              <span>Full Access to Yoga Shalas & Quality Props</span>
            </div>
            <div className="hyrt-icon-feature-item">
              <Heart className="hyrt-icon-green" size={18} />
              <span>Experienced Facilitators & Local Support</span>
            </div>
            <div className="hyrt-icon-feature-item">
              <Shield className="hyrt-icon-green" size={18} />
              <span>Seamless Booking & Event Coordination</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: CONTACT FORM */}
        <div className="hyrt-form-card">
          <h2 className="hyrt-form-title">Host Your Program</h2>
          <p className="hyrt-form-subtitle">Fill in the details below to request venue bookings and rates.</p>

          <form className="hyrt-form" onSubmit={handleSubmit}>
            <div className="hyrt-form-group">
              <label className="hyrt-label" htmlFor="name">Full Name</label>
              <input 
                className="hyrt-input" 
                id="name" 
                name="name" 
                type="text" 
                placeholder="Your Name" 
                required 
                minLength={2}
              />
            </div>

            <div className="hyrt-form-group">
              <label className="hyrt-label" htmlFor="email">Email Address</label>
              <input 
                className="hyrt-input" 
                id="email" 
                name="email" 
                type="email" 
                placeholder="your.email@domain.com" 
                required 
              />
            </div>

            <div className="hyrt-form-group">
              <label className="hyrt-label" htmlFor="phone">Phone / WhatsApp Number</label>
              <input 
                className="hyrt-input" 
                id="phone" 
                name="phone" 
                type="tel" 
                placeholder="+1 (555) 000-0000" 
                required
                minLength={8}
              />
            </div>

            <div className="hyrt-form-group">
              <label className="hyrt-label" htmlFor="message">Your Message</label>
              <textarea 
                className="hyrt-textarea" 
                id="message" 
                name="message" 
                rows="5" 
                placeholder="Please share details about your retreat dates, estimated group size, and any special requests..." 
                required
                minLength={10}
              ></textarea>
            </div>

            {formStatus.message && (
              <div className={`hyrt-status-message ${formStatus.success ? 'success' : 'error'}`}>
                {formStatus.message}
              </div>
            )}

            <button className="hyrt-submit-btn" type="submit" disabled={formStatus.loading}>
              <Send size={18} />
              <span>{formStatus.loading ? "Sending Message..." : "Send Request"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HostYourRetreats;