


import React, { useState, useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaPhoneAlt,
  FaWhatsapp,
  FaUser,
  FaEnvelope,
  FaPen,
  FaCommentDots,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import SectionHeading from "./useFullComponent/SectionHeading";

const WEB3FORMS_ACCESS_KEY = 
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_WEB3FORMS_KEY) || 
  (typeof process !== "undefined" && process.env?.REACT_APP_WEB3FORMS_KEY) || 
  "0fdb225d-46a5-43c3-8ed3-c4f76d7a570b";
const LOCATIONS = [
  {
    id: 1,
    name: "Mysuru",
    lat: 12.2958,
    lng: 76.6394,
    icon: "🏯",
    desc: "The City of Palaces",
  },
  {
    id: 2,
    name: "Bali",
    lat: -8.3405,
    lng: 115.092,
    icon: "🌺",
    desc: "Island of the Gods",
  },
  {
    id: 3,
    name: "Rishikesh",
    lat: 30.0869,
    lng: 78.2676,
    icon: "🕉️",
    desc: "Yoga Capital of the World",
  },
  {
    id: 4,
    name: "Chiang Mai",
    lat: 18.7883,
    lng: 98.9853,
    icon: "🛕",
    desc: "Rose of the North",
  },
  {
    id: 5,
    name: "Dharamshala",
    lat: 32.219,
    lng: 76.3234,
    icon: "🏔️",
    desc: "Abode of the Clouds",
  },
];

export default function Contact() {
  const mapRef = useRef(null);
  const lMap = useRef(null);
  const [active, setActive] = useState(null);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // 1. Ensure Leaflet CSS and JS are loaded
    const loadLeaflet = () => {
      if (window.L && mapRef.current && !lMap.current) {
        const southWest = window.L.latLng(-60, -170);
        const northEast = window.L.latLng(85, 190);
        const bounds = window.L.latLngBounds(southWest, northEast);

        const map = window.L.map(mapRef.current, {
          center: [15, 90],
          zoom: 4,
          minZoom: 2,
          maxBounds: bounds,
          maxBoundsViscosity: 1.0,
          zoomControl: false,
          attributionControl: false,
        });

        window.L.tileLayer(
          "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        ).addTo(map);
        lMap.current = map;

        LOCATIONS.forEach((loc) => {
          const icon = window.L.divIcon({
            html: `<div class="emoji-pin">${loc.icon}</div>`,
            className: "emoji-pin-wrapper",
            iconSize: [32, 32],
            iconAnchor: [16, 16],
          });
          window.L.marker([loc.lat, loc.lng], { icon })
            .addTo(map)
            .on("click", () => setActive(loc));
        });

        // Trigger resize fix
        setTimeout(() => map.invalidateSize(), 500);
      }
    };

    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    if (!window.L) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.async = true;
      script.onload = loadLeaflet;
      document.head.appendChild(script);
    } else {
      loadLeaflet();
    }

    return () => {
      if (lMap.current) {
        lMap.current.remove();
        lMap.current = null;
      }
    };
  }, []);

  const handleLocClick = (loc) => {
    setActive(loc);
    if (lMap.current) {
      lMap.current.flyTo([loc.lat, loc.lng], 8, { duration: 1.5 });
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");
    
    const formData = new FormData(event.target);
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();

    // 1. Email Format Validation
    if (!email) {
      setResult("Email is required.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setResult("Please enter a valid email address.");
      return;
    }

    // 2. Phone Format Validation (Indian & International)
    if (!phone) {
      setResult("Phone number is required.");
      return;
    }
    // Remove space, hyphen, and bracket symbols for clean digit validation
    const cleanedPhone = phone.replace(/[\s\-()]/g, "");
    // Must be 7 to 15 digits, optionally prefixed with '+'
    const phoneRegex = /^\+?[0-9]{7,15}$/;
    if (!phoneRegex.test(cleanedPhone)) {
      setResult("Please enter a valid phone number (Indian or International).");
      return;
    }

    setIsSubmitting(true);
    setResult("Sending...");

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
      } else {
        console.error("Submission Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Fetch Error", error);
      setResult("Submission failed. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-root">
      <style>{`
        .contact-root { font-family: var(--font-sans-body); background: #fdfdfd; padding-bottom: 60px; }
        .cp-hero { background: #0c375a; padding: 50px 20px 90px; text-align: center; }
        .cp-hero h1 { color: #fff; font-size: var(--section-title-size); font-weight: 700; }
        .cp-hero p { color: #899a94; font-size: var(--body-text-size); margin-top: 8px; }

        .cp-main-grid {
          display: grid; grid-template-columns: 360px 1fr;
          max-width: 1400px; width: 95%; margin: -50px auto 40px;
          background: #fff; border-radius: 24px; overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
        }

        .ci-card { background: #2f7a63; color: #fff; padding: 45px; display: flex; flex-direction: column; justify-content: center; }
        .ci-heading { font-size: var(--card-title-size); font-weight: 700; margin-bottom: 12px; }
        .ci-tagline { color: #fff; font-size: var(--body-text-size); line-height: 1.6; margin-bottom: 30px; }
        .ci-item { margin-bottom: 20px; }
        .ci-label { color: #180e01; font-size: var(--card-tagline-size); font-weight: 700; text-transform: uppercase; display: block; margin-bottom: 5px; }
        .ci-val { color: #fff; text-decoration: none; display: flex; align-items: center; gap: 10px; font-size: var(--body-text-size); margin-bottom: 5px; transition: 0.3s; }
        .ci-val:hover { color: #fff; transform: translateX(5px); }
        .ci-socials { display: flex; gap: 12px; margin-top: 20px; }
        .ci-soc-link { width: 40px; height: 40px; border-radius: 10px; background: rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; color: #fff; transition: 0.3s; text-decoration: none; }
        .ci-soc-link:hover { background: #52b788; transform: translateY(-3px); }

        .cf-card { padding: 50px; background: #fff; }
        .cf-title { font-size: var(--section-subtitle-size); font-weight: 700; color: #11241e; margin-bottom: 30px; text-align: center; }
        .cf-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; }
        .cf-group { position: relative; border-bottom: 1px solid #ddd; transition: 0.3s; }
        .cf-group:focus-within { border-color: #11241e; }
        .cf-group svg { position: absolute; left: 0; top: 18px; color: #aaa; font-size: 13px; }
        .cf-input { width: 100%; border: none; padding: 15px 10px 15px 25px; outline: none; font-family: inherit; font-size: var(--contact-form-size); background: transparent; }
        .cf-full { grid-column: span 2; }
        .cf-ta { resize: none; min-height: 80px; }
        .cf-btn-box { margin-top: 40px; text-align: center; }
        .cf-btn { background: linear-gradient(145deg, #16a34a, #0e8339 40%, #052e16); color: #fff; border: none; padding: 14px 60px; border-radius: 100px; font-weight: 700; cursor: pointer; transition: 0.4s; font-size: var(--hero-btn-size); }
        .cf-btn:hover:not(:disabled) { background: linear-gradient(145deg, #16a34a, #0e8339 40%, #16a34a); box-shadow: 0 10px 20px rgba(82, 183, 136, 0.2); transform: translateY(-2px); }
        .cf-btn:disabled { background: #cbd5e1; cursor: not-allowed; }

        .cf-result-msg {
          margin-top: 20px;
          padding: 12px;
          border-radius: 8px;
          font-size: 14.5px;
          font-weight: 600;
          text-align: center;
          transition: all 0.3s ease;
        }
        .cf-result-msg.success {
          background-color: #d1fae5;
          color: #065f46;
          border: 1px solid #a7f3d0;
        }
        .cf-result-msg.error {
          background-color: #fee2e2;
          color: #991b1b;
          border: 1px solid #fca5a5;
        }
        .cf-result-msg.sending {
          background-color: #f1f5f9;
          color: #475569;
          border: 1px solid #e2e8f0;
        }

        .map-section { max-width: 1400px; width: 95%; margin: 0 auto; }
        .map-nav { display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap; justify-content: center; }
        .map-chip { padding: 8px 18px; background: #fff; border: 1px solid #ddd; border-radius: 100px; font-size: 13px; font-weight: 600; cursor: pointer; transition: 0.3s; }
        .map-chip:hover { border-color: #11241e; }
        .map-box { position: relative; height: 450px; border-radius: 24px; overflow: hidden; border: 1px solid #eee; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        .map-element { height: 100%; width: 100%; z-index: 1; }
        .emoji-pin-wrapper {
          background: none !important;
          border: none !important;
        }
        .emoji-pin {
          font-size: 28px;
          line-height: 1;
          display: block;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
          cursor: pointer;
          transition: transform 0.2s;
        }
        .emoji-pin:hover {
          transform: scale(1.3);
        }
        .popup-card { position: absolute; bottom: 15px; left: 15px; right: 15px; max-width: 350px; background: #fff; padding: 15px; border-radius: 16px; display: flex; align-items: center; gap: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); z-index: 1000; }
        .popup-card h4 { font-size: 16px; margin: 0; color: #11241e; }
        .popup-card p { font-size: 12px; color: #666; margin: 2px 0 0; }
        .popup-close { margin-left: auto; background: #f0f0f0; border: none; width: 24px; height: 24px; border-radius: 50%; cursor: pointer; font-size: 10px; }

        @media (max-width: 900px) {
          .cp-main-grid { grid-template-columns: 1fr; }
          .cf-grid { grid-template-columns: 1fr; }
          .cf-full { grid-column: span 1; }
        }
      `}</style>

      <div className="cp-hero">
        <SectionHeading
          title="Connect With Your"
          highlight="Inner Peace"
          subtitle="Contact us to start your mindful journey"
          highlightColor="#4a7c68"
          textColor="#ffffff"
        />
      </div>

      <div className="cp-main-grid">
        <div className="ci-card">
          <h2 className="ci-heading">Let's Connect</h2>
          <p className="ci-tagline">
            We're here to help you find the perfect program for your journey.
          </p>

          <div className="ci-item">
            <span className="ci-label">Direct Lines</span>
            <a href="tel:+917483987568" className="ci-val">
              <FaWhatsapp /> +91 7483987568
            </a>
            <a href="tel:+917829997007" className="ci-val">
              <FaWhatsapp /> +91 7829997007
            </a>
          </div>

          <div className="ci-item">
            <span className="ci-label">Email</span>
            <a href="mailto:info@ombreathe.in" className="ci-val">
              <MdEmail /> info@ombreathe.in
            </a>
          </div>

          <div className="ci-socials">
            <a href="https://www.facebook.com/share/1BSKH3sBkD/" className="ci-soc-link" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="#" className="ci-soc-link" target="_blank" rel="noopener noreferrer">
              <IoLogoYoutube />
            </a>
            <a href="https://www.instagram.com/ombreathein?igsh=MW9kOWVhbDFoeGZnaQ%3D%3D" className="ci-soc-link" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="cf-card">
          <h2 className="cf-title">Send a Message</h2>
          <form className="cf-form" onSubmit={onSubmit}>
            <div className="cf-grid">
              <div className="cf-group">
                <FaUser />
                <input
                  className="cf-input"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="cf-group">
                <FaEnvelope />
                <input
                  className="cf-input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="cf-group">
                <FaPhoneAlt />
                <input
                  className="cf-input"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="cf-group">
                <FaPen />
                <input 
                  className="cf-input" 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                />
              </div>
              <div className="cf-group cf-full">
                <FaCommentDots />
                <textarea
                  className="cf-input cf-ta"
                  name="message"
                  placeholder="Message"
                  rows="3"
                  required
                />
              </div>
            </div>
            <div className="cf-btn-box">
              <button type="submit" className="cf-btn" disabled={isSubmitting}>
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </div>
            
            {result && (
              <div className={`cf-result-msg ${
                result.includes("Successfully") 
                  ? "success" 
                  : result.includes("Sending") 
                  ? "sending" 
                  : "error"
              }`}>
                {result}
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="map-section">
        <div className="map-nav">
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              className="map-chip"
              onClick={() => handleLocClick(loc)}
            >
              {loc.icon} {loc.name}
            </button>
          ))}
        </div>
        <div className="map-box">
          <div ref={mapRef} className="map-element" id="map-container" />

          {active && (
            <div className="popup-card">
              <span style={{ fontSize: "24px" }}>{active.icon}</span>
              <div>
                <h4>{active.name}</h4>
                <p>{active.desc}</p>
              </div>
              <button className="popup-close" onClick={() => setActive(null)}>
                ✕
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}