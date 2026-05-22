import React, { useEffect, useState } from "react";
import { 
  Brain, 
  Moon, 
  Utensils, 
  Sparkles, 
  Heart, 
  Compass, 
  Activity, 
  Smile,
  Leaf,
  Calendar,
  MessageCircle,
  HelpCircle
} from "lucide-react";

const TransformationJourney = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Simple handler to handle navigation changes cleanly
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <div
      style={{
        // background: "#FDFBF7",
        // minHeight: "100vh",
        padding: isMobile ? "40px 16px" : "60px 40px 80px",
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
        position: "relative"
      }}
    >
      {/* Dynamic Keyframes injected safely via styled template blocks */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');
        
        .serif-title {
          font-family: 'Playfair Display', Georgia, serif !important;
        }

        /* Hover actions styling for production ready states */
        .animated-btn {
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .animated-btn:hover {
          transform: translateY(-3px) scale(1.02) !important;
          box-shadow: 0 10px 20px rgba(61, 82, 59, 0.15) !important;
        }
        .animated-btn:active {
          transform: translateY(-1px) scale(0.99) !important;
        }
      `}} />

      {/* TOP PILL LABEL */}
      <header style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "48px", maxWidth: "800px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 16px",
            border: "1px solid rgba(44,62,43,0.15)",
            borderRadius: "20px",
            fontSize: "11px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#5A6E58",
            fontWeight: "600",
            marginBottom: "16px",
            background: "rgba(255,255,255,0.5)"
          }}
        >
          <Leaf size={12} /> Transformation Journey
        </div>
        <h1 className="serif-title" style={{ fontSize: "clamp(36px, 4.5vw, 56px)", color: "#2C3E2B", margin: "0 0 16px 0", tracking: "-0.5px" }}>
          From Burnout to Balance
        </h1>
        <p style={{ fontSize: "clamp(14px, 1.1vw, 16px)", color: "#5A6E58", lineHeight: "1.6", margin: 0 }}>
          We help you disconnect from the chaos of everyday life and reconnect with your true self through the wisdom of Yoga & Ayurveda.
        </p>
      </header>

      {/* ================= MAIN MATRIX CONTAINER ================= */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "stretch",
          justifyContent: "center",
          position: "relative",
          boxSizing: "border-box",
          marginBottom: "48px"
        }}
      >
        
        {/* --- SECTION 1: LEFT CARD (BEFORE) --- */}
        <div
          style={{
            flex: isMobile ? "none" : "1",
            width: "100%",
            minHeight: isMobile ? "auto" : "530px",
            background: `linear-gradient(to right, rgba(28,35,28,0.96) 0%, rgba(44,54,44,0.85) 60%, rgba(44,54,44,0.4) 100%), url('https://images.unsplash.com/photo-1541384950293-47a88e57f518?q=80&w=1200&auto=format&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: isMobile ? "24px" : "24px 0 0 24px",
            padding: isMobile ? "32px 24px" : "48px 70px 48px 40px",
            boxSizing: "border-box",
            textAlign: "left",
            marginRight: isMobile ? "0px" : "12px"
          }}
        >
          <span style={{ background: "rgba(255,255,255,0.12)", color: "#E5E7EB", padding: "4px 10px", borderRadius: "4px", fontSize: "10px", fontWeight: "600", letterSpacing: "1.5px" }}>
            BEFORE
          </span>
          <h2 className="serif-title" style={{ color: "white", fontSize: "clamp(24px, 2.2vw, 32px)", margin: "20px 0 24px 0" }}>
            Feeling Disconnected
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { icon: <HelpCircle size={14} />, text: "Constant stress & anxiety" },
              { icon: <Activity size={14} />, text: "Mental fatigue & overthinking" },
              { icon: <Moon size={14} />, text: "Poor sleep & low energy" },
              { icon: <Utensils size={14} />, text: "Unhealthy lifestyle & habits" },
              { icon: <Compass size={14} />, text: "Lack of clarity & motivation" },
              { icon: <Heart size={14} />, text: "Disconnected from yourself" }
            ].map((item, idx) => (
              <li key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", color: "rgba(255,255,255,0.85)", fontSize: "16px" }}>
                <span style={{ width: "26px", height: "26px", background: "rgba(255,255,255,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* --- SECTION 2: CENTRAL BADGE (Safe and centered on all platforms) --- */}
        <div
          style={{
            position: isMobile ? "relative" : "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 99,
            pointerEvents: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: isMobile ? "100%" : "auto",
            marginTop: isMobile ? "20px" : "0px",
            marginBottom: isMobile ? "20px" : "0px"
          }}
        >
          <div
            style={{
              width: "124px",
              height: "124px",
              borderRadius: "50%",
              background: "#FAF6F0",
              border: "1px solid rgba(44,62,43,0.12)",
              boxShadow: "0 10px 28px rgba(44,62,43,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "5px",
              boxSizing: "border-box"
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px dashed rgba(90,110,88,0.3)",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                background: "white"
              }}
            >
              <span style={{ fontSize: "14px", color: "#5A6E58", marginBottom: "1px" }}>🌿</span>
              <h3 className="serif-title" style={{ margin: 0, fontSize: "15px", color: "#2C3E2B", fontWeight: "500" }}>
                Transform
              </h3>
              <p style={{ margin: "2px 0 0 0", fontSize: "8px", color: "#5A6E58", textTransform: "uppercase", letterSpacing: "0.5px", fontWeight: "500", lineHeight: "1.3" }}>
                Mind, Body <br/> & Soul
              </p>
            </div>
          </div>
        </div>

        {/* --- SECTION 3: RIGHT CARD (AFTER - Kept text-start left alignment) --- */}
        <div
          style={{
            flex: isMobile ? "none" : "1",
            width: "100%",
            minHeight: isMobile ? "auto" : "530px",
            background: `linear-gradient(to left, rgba(250,243,232,0.98) 35%, rgba(250,243,232,0.85) 65%, rgba(250,243,232,0.2) 100%), url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "right center",
            borderRadius: isMobile ? "24px" : "0 24px 24px 0",
            padding: isMobile ? "32px 24px" : "48px 40px 48px 70px",
            boxSizing: "border-box",
            textAlign: "left",
            marginLeft: isMobile ? "0px" : "12px"
          }}
        >
          <span style={{ background: "rgba(90,110,88,0.1)", color: "#4A5D48", padding: "4px 10px", borderRadius: "4px", fontSize: "10px", fontWeight: "600", letterSpacing: "1.5px" }}>
            AFTER
          </span>
          <h2 className="serif-title" style={{ color: "#2C3E2B", fontSize: "clamp(24px, 2.2vw, 32px)", margin: "20px 0 24px 0" }}>
            Living in Harmony
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { icon: <Smile size={14} />, text: "Inner peace & emotional balance" },
              { icon: <Brain size={14} />, text: "Mental clarity & mindfulness" },
              { icon: <Moon size={14} />, text: "Deep restful sleep & energy" },
              { icon: <Utensils size={14} />, text: "Nourishing food & Ayurvedic care" },
              { icon: <Sparkles size={14} />, text: "Purpose, positivity & motivation" },
              { icon: <Heart size={14} />, text: "Connected to your true self" }
            ].map((item, idx) => (
              <li key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", color: "#2C3E2B", fontSize: "16px" }}>
                <span style={{ width: "26px", height: "26px", background: "rgba(90,110,88,0.08)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ================= FOUR HORIZONTAL PILLARS MATRIX ================= */}
      <section
        style={{
          width: "100%",
          maxWidth: "1200px",
          background: "#F5EFE4",
          borderRadius: "16px",
          padding: "24px",
          boxSizing: "border-box",
          marginBottom: "48px"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
            gap: "24px",
          }}
        >
          {[
            { title: "Authentic Yoga", desc: "Traditional practices for modern life" },
            { title: "Ayurveda Healing", desc: "Detox, heal & rejuvenate naturally" },
            { title: "Conscious Living", desc: "Mindful habits for a balanced lifestyle" },
            { title: "Nature Connection", desc: "Healing in the lap of nature" }
          ].map((pillar, index) => (
            <div key={index} style={{ display: "flex", alignItems: "start", gap: "12px" }}>
              <div style={{ background: "#5A6E58", color: "white", padding: "8px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Leaf size={14} />
              </div>
              <div>
                <h4 className="serif-title" style={{ margin: "0 0 4px 0", fontSize: "14px", fontWeight: "600", color: "#2C3E2B" }}>{pillar.title}</h4>
                <p style={{ margin: 0, fontSize: "12px", color: "#5A6E58", lineHeight: "1.4" }}>{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CALL TO ACTION FOOTER ================= */}
      <footer style={{ textAlign: "center", width: "100%", maxWidth: "500px" }}>
        <h3 className="serif-title" style={{ fontSize: "clamp(20px, 2.5vw, 26px)", color: "#2C3E2B", fontStyle: "italic", marginBottom: "28px", fontWeight: "400" }}>
          "You don't just visit. You transform."
        </h3>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          
          <button 
            className="animated-btn"
            onClick={() => handleNavigation("/programs")}
            style={{ 
              background: "#3D523B", 
              color: "white", 
              border: "none", 
              padding: "14px 28px", 
              borderRadius: "8px", 
              fontSize: "12px", 
              fontWeight: "600", 
              textTransform: "uppercase", 
              letterSpacing: "1px", 
              cursor: "pointer", 
              display: "flex", 
              alignItems: "center", 
              gap: "8px" 
            }}
          >
            <Calendar size={14} /> Explore Retreats
          </button>
          
          <button 
            className="animated-btn"
            onClick={() => handleNavigation("/contact")}
            style={{ 
              background: "white", 
              color: "#3D523B", 
              border: "1px solid rgba(61,82,59,0.2)", 
              padding: "14px 28px", 
              borderRadius: "8px", 
              fontSize: "12px", 
              fontWeight: "600", 
              textTransform: "uppercase", 
              letterSpacing: "1px", 
              cursor: "pointer", 
              display: "flex", 
              alignItems: "center", 
              gap: "8px" 
            }}
          >
            <MessageCircle size={14} /> Talk to our team
          </button>

        </div>
      </footer>
    </div>
  );
};

export default TransformationJourney;