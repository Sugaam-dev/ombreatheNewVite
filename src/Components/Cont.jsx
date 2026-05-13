import React from "react";
import Contact from "./Contact";
import Ratings from "./Ratings";

import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import SectionHeading from "./useFullComponent/SectionHeading";

function Cont() {
  const itemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 14px",
    borderBottom: "1px solid #e6e6e6",
    transition: "0.25s ease",
    flexWrap: "wrap", // important for small screens
    gap: "8px",
  };

  const leftStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "15px",
    color: "#333",
    wordBreak: "break-word", // prevents overflow
  };

  const iconBox = (bg) => ({
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: bg,
    flexShrink: 0,
  });

  const hover = (e) => {
    e.currentTarget.style.background = "#fafafa";
  };

  const leave = (e) => {
    e.currentTarget.style.background = "transparent";
  };

  return (
    <div style={{ fontFamily: "Caudex, serif", padding: "20px" }}>
      {/* <h1
        style={{
          textAlign: "center",
          fontSize: "clamp(26px, 5vw, 36px)", // responsive font
          marginBottom: "25px",
          color: "#2f3e2f",
        }}
      >
        Contact Us
      </h1> */}
      <SectionHeading
  title="Connect With Your"
  highlight="Inner Peace"
  subtitle="Contact us to start your mindful journey"
  highlightColor="#4a7c68"
  textColor="#1e1e1c"
/>

      {/* Container */}
      <div
        style={{
          maxWidth: "550px",
          width: "100%",
          margin: "0 auto",
          borderRadius: "12px",
          background: "#fffdf8",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          overflow: "hidden",
        }}
      >
        {/* WhatsApp 1 */}
        <a
          href="https://wa.me/917483987568"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...itemStyle, textDecoration: "none" }}
          onMouseEnter={hover}
          onMouseLeave={leave}
        >
          <div style={leftStyle}>
            <div style={iconBox("#e8f7ee")}>
              <IoLogoWhatsapp color="#25D366" />
            </div>
            +91 74839 87568
          </div>
          <span style={{ fontSize: "12px", color: "#888" }}>WhatsApp</span>
        </a>

        {/* WhatsApp 2 */}
        <a
          href="https://wa.me/917829997007"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...itemStyle, textDecoration: "none" }}
          onMouseEnter={hover}
          onMouseLeave={leave}
        >
          <div style={leftStyle}>
            <div style={iconBox("#e8f7ee")}>
              <IoLogoWhatsapp color="#25D366" />
            </div>
            +91 78299 97007
          </div>
          <span style={{ fontSize: "12px", color: "#888" }}>WhatsApp</span>
        </a>

        {/* Email 1 */}
        <a
          href="mailto:info@ombreathe.in"
          style={{ ...itemStyle, textDecoration: "none" }}
          onMouseEnter={hover}
          onMouseLeave={leave}
        >
          <div style={leftStyle}>
            <div style={iconBox("#fdecea")}>
              <MdEmail color="#EA4335" />
            </div>
            info@ombreathe.in
          </div>
          <span style={{ fontSize: "12px", color: "#888" }}>Email</span>
        </a>

        {/* Email 2 */}
        <a
          href="mailto:ombreathein@gmail.com"
          style={{ ...itemStyle, textDecoration: "none" }}
          onMouseEnter={hover}
          onMouseLeave={leave}
        >
          <div style={leftStyle}>
            <div style={iconBox("#fdecea")}>
              <MdEmail color="#EA4335" />
            </div>
            ombreathein@gmail.com
          </div>
          <span style={{ fontSize: "12px", color: "#888" }}>Email</span>
        </a>
      </div>

      <div style={{ marginTop: "50px" }}>
        <Ratings />
        <Contact />
      </div>
    </div>
  );
}

export default Cont;