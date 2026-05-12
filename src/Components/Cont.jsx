import React from "react";
import Contact from "./Contact";
import Ratings from "./Ratings";

import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";


function Cont() {
  return (
    <div style={{fontFamily: "Caudex, serif" }}>
      <h1
        style={{
          fontSize: "48px",
          textAlign: "center",
          marginBottom: "40px",
          marginTop:"40px",
        }}
      >
        Contact
      </h1>

      {/* Contact Info Container */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* WhatsApp - 1 */}
        <a
          href="https://wa.me/917483987568"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            fontSize: "20px",
            backgroundColor: "#f2f2f2",
            padding: "15px 20px",
            borderRadius: "10px",
            color: "#000",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <IoLogoWhatsapp style={{ fontSize: "28px", color: "green", marginRight: "12px" }} />
          +91-7483987568
        </a>

        {/* WhatsApp - 2 */}
        <p
         
          
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            fontSize: "20px",
            backgroundColor: "#f2f2f2",
            padding: "15px 20px",
            borderRadius: "10px",
            color: "#000",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <IoLogoWhatsapp style={{ fontSize: "28px", color: "green", marginRight: "12px" }} />
          +91-78299 97007
        </p>

        {/* Email */}
        <a
          href="mailto:info@ombreathe.in"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            fontSize: "20px",
            backgroundColor: "#f2f2f2",
            padding: "15px 20px",
            borderRadius: "10px",
            color: "#000",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <MdEmail style={{ fontSize: "28px", color: "#d44638", marginRight: "12px" }} />
          info@ombreathe.in
        </a>
        <a
          href="mailto:ombreathein@gmail.com"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            fontSize: "20px",
            backgroundColor: "#f2f2f2",
            padding: "15px 20px",
            borderRadius: "10px",
            color: "#000",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <MdEmail style={{ fontSize: "28px", color: "#d44638", marginRight: "12px" }} />
          ombreathein@gmail.com
        </a>
      </div>

      {/* Subcomponents */}
      <div style={{ marginTop: "60px" }}>
        
        <Ratings />
        <Contact />
      </div>
    </div>
  );
}

export default Cont;
