import React, { useState, memo, useRef, useEffect } from "react";
import {Link} from "react-router-dom"
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
const PIN_COLORS = ["#2E6F40", "#D97724", "#7C3AED", "#2563EB", "#DC2626"];

export default function Contact() {
  const mapRef = useRef(null);
  const lMap = useRef(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    // 1. Ensure Leaflet CSS and JS are loaded
    const loadLeaflet = () => {
      if (window.L && mapRef.current && !lMap.current) {
        const southWest = window.L.latLng(-60, -170);
        const northEast = window.L.latLng(85, 190);
        const bounds = window.L.latLngBounds(southWest, northEast);

        const map = window.L.map(mapRef.current, {
          center: [20, 80],
          zoom: 3,
          minZoom: 2,
          maxBounds: bounds,
          maxBoundsViscosity: 1.0,
          zoomControl: false,
          attributionControl: false, // Disables the leaflet link attribution panel
        });

        window.L.tileLayer(
          "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        ).addTo(map);
        lMap.current = map;

        LOCATIONS.forEach((loc, i) => {
          const icon = window.L.divIcon({
            html: `<div class="custom-pin" style="background:${PIN_COLORS[i]}"></div>`,
            className: "",
            iconSize: [20, 20],
            iconAnchor: [10, 10],
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

  return (
    <div className="contact-root">
      <style>{`
        .contact-root { font-family: 'Plus Jakarta Sans', sans-serif; background: #fdfdfd; padding-bottom: 60px; }
        .cp-hero { background: #0c375a; padding: 50px 20px 90px; text-align: center; }
        .cp-hero h1 { color: #fff; font-size: clamp(32px, 5vw, 42px); font-weight: 700; }
        .cp-hero p { color: #899a94; font-size: 17px; margin-top: 8px; }

        .cp-main-grid {
          display: grid; grid-template-columns: 360px 1fr;
          max-width: 1400px; width: 95%; margin: -50px auto 40px;
          background: #fff; border-radius: 24px; overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
        }

        .ci-card { background: #2f7a63; color: #fff; padding: 45px; display: flex; flex-direction: column; justify-content: center; }
        .ci-heading { font-size: 32px; font-weight: 700; margin-bottom: 12px; }
        .ci-tagline { color: #fff; font-size: 18px; line-height: 1.6; margin-bottom: 30px; }
        .ci-item { margin-bottom: 20px; }
        .ci-label { color: #180e01; font-size: 14px; font-weight: 700; text-transform: uppercase; display: block; margin-bottom: 5px; }
        .ci-val { color: #fff; text-decoration: none; display: flex; align-items: center; gap: 10px; font-size: 18px; margin-bottom: 5px; transition: 0.3s; }
        .ci-val:hover { color: #fff; transform: translateX(5px); }
        .ci-socials { display: flex; gap: 12px; margin-top: 20px; }
        .ci-soc-link { width: 40px; height: 40px; border-radius: 10px; background: rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; color: #fff; transition: 0.3s; text-decoration: none; }
        .ci-soc-link:hover { background: #52b788; transform: translateY(-3px); }

        .cf-card { padding: 50px; background: #fff; }
        .cf-title { font-size: 28px; font-weight: 700; color: #11241e; margin-bottom: 30px; text-align: center; }
        .cf-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; }
        .cf-group { position: relative; border-bottom: 1px solid #ddd; transition: 0.3s; }
        .cf-group:focus-within { border-color: #11241e; }
        .cf-group svg { position: absolute; left: 0; top: 18px; color: #aaa; font-size: 13px; }
        .cf-input { width: 100%; border: none; padding: 15px 10px 15px 25px; outline: none; font-family: inherit; font-size: 14px; background: transparent; }
        .cf-full { grid-column: span 2; }
        .cf-ta { resize: none; min-height: 80px; }
        .cf-btn-box { margin-top: 40px; text-align: center; }
        .cf-btn {   background: linear-gradient(145deg, #16a34a, #0e8339 40%, #052e16); color: #fff; border: none; padding: 14px 60px; border-radius: 100px; font-weight: 700; cursor: pointer; transition: 0.4s; font-size: 14px; }
        .cf-btn:hover {  background: linear-gradient(145deg, #16a34a, #0e8339 40%, #16a34a); box-shadow: 0 10px 20px rgba(82, 183, 136, 0.2); transform: translateY(-2px); }

        .map-section { max-width: 1400px; width: 95%; margin: 0 auto; }
        .map-nav { display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap; justify-content: center; }
        .map-chip { padding: 8px 18px; background: #fff; border: 1px solid #ddd; border-radius: 100px; font-size: 13px; font-weight: 600; cursor: pointer; transition: 0.3s; }
        .map-chip:hover { border-color: #11241e; }
        .map-box { position: relative; height: 450px; border-radius: 24px; overflow: hidden; border: 1px solid #eee; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        .map-element { height: 100%; width: 100%; z-index: 1; }
        .custom-pin { width: 14px; height: 14px; border: 2px solid #fff; border-radius: 50%; box-shadow: 0 0 8px rgba(0,0,0,0.3); }

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
            <Link href="tel:+917483987568" className="ci-val">
              <FaWhatsapp /> +91 7483987568
            </Link>
            <Link href="tel:+917829997007" className="ci-val">
              <FaWhatsapp /> +91 7829997007
            </Link>
          </div>

          <div className="ci-item">
            <span className="ci-label">Email</span>
            <Link href="mailto:info@ombreathe.in" className="ci-val">
              <MdEmail /> info@ombreathe.in
            </Link>
          </div>

          <div className="ci-socials">
            <Link href="#" className="ci-soc-link">
              <FaFacebookF />
            </Link>
            <Link href="#" className="ci-soc-link">
              <IoLogoYoutube />
            </Link>
            <Link href="#" className="ci-soc-link">
              <FaInstagram />
            </Link>
          </div>
        </div>

        <div className="cf-card">
          <h2 className="cf-title">Send a Message</h2>
          <form className="cf-form">
            <div className="cf-grid">
              <div className="cf-group">
                <FaUser />
                <input
                  className="cf-input"
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="cf-group">
                <FaEnvelope />
                <input
                  className="cf-input"
                  type="text"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="cf-group">
                <FaPhoneAlt />
                <input
                  className="cf-input"
                  type="tel"
                  placeholder="Phone Number"
                />
              </div>
              <div className="cf-group">
                <FaPen />
                <input className="cf-input" type="text" placeholder="Subject" />
              </div>
              <div className="cf-group cf-full">
                <FaCommentDots />
                <textarea
                  className="cf-input cf-ta"
                  placeholder="Message"
                  rows="3"
                  required
                />
              </div>
            </div>
            <div className="cf-btn-box">
              <button type="submit" className="cf-btn">
                SEND MESSAGE
              </button>
            </div>
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
          {/* MAP ELEMENT */}
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