import React from "react";
import Contact from "./Contact";
import Ratings from "./Ratings";

import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
// import SectionHeading from "./useFullComponent/SectionHeading";

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
    <div style={{ fontFamily: "Caudex, serif"}}>
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



      <div>
         <Contact />
        <Ratings />
       
      </div>
    </div>
  );
}

export default Cont;