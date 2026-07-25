import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Check, ArrowRight, ShieldCheck, Mail, MessageSquare, AlertCircle, ChevronDown, ShoppingBag, Trash2, Plus, Minus, CheckCircle2 } from "lucide-react";
import { getCart, removeFromCart, updateQuantity, clearCart } from "../../../utils/cart";
import { OmbDataMap } from "../../yoga-retreats-programs/data/OmbDataMap";

import { ROOM_PRICES_BALI } from "../../../data/bali/programPrices";
import { ROOM_PRICES_RISHIKESH } from "../../../data/rishikesh/programPricesRishikesh";
import { ROOM_PRICES_MYSORE } from "../../../data/mysore/programPricesMysore";
import { ROOM_PRICES_CHIANG } from "../../../data/chiang/programPricesChiang";
import { ROOM_PRICES_DHARAMSHALA } from "../../../data/dharamshala/programPricesDharamshala";

const generateBatches = (durationDays) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  
  const months = [];
  for (let i = 0; i < 8; i++) {
    const d = new Date(currentYear, currentMonth + i, 1);
    const monthIndex = d.getMonth();
    const year = d.getFullYear();
    const name = d.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    const startDay = monthIndex === 0 ? 5 : 1; // Course starts on 5th in January, 1st in others
    months.push({ name, year, monthIndex, startDay });
  }
  
  const getSuffix = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:  return 'st';
      case 2:  return 'nd';
      case 3:  return 'rd';
      default: return 'th';
    }
  };

  return months
    .map(m => {
      const startDate = new Date(m.year, m.monthIndex, m.startDay);
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + durationDays - 1);
      return { startDate, endDate };
    })
    .filter(batch => batch.startDate >= today)
    .slice(0, 6)
    .map(batch => {
      const { startDate, endDate } = batch;
      const startDayStr = `${startDate.getDate()}${getSuffix(startDate.getDate())}`;
      const endDayStr = `${endDate.getDate()}${getSuffix(endDate.getDate())}`;
      
      const startMonthStr = startDate.toLocaleString('en-US', { month: 'short' });
      const endMonthStr = endDate.toLocaleString('en-US', { month: 'short' });
      
      if (startDate.getMonth() === endDate.getMonth()) {
        return `${startDayStr} To ${endDayStr} ${startMonthStr} ${startDate.getFullYear()}`;
      } else {
        return `${startDayStr} ${startMonthStr} To ${endDayStr} ${endMonthStr} ${endDate.getFullYear()}`;
      }
    });
};

const WEB3FORMS_ACCESS_KEY =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_WEB3FORMS_KEY) ||
  (typeof process !== "undefined" && process.env?.REACT_APP_WEB3FORMS_KEY) ||
  "0fdb225d-46a5-43c3-8ed3-c4f76d7a570b";

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isDirectBooking, setIsDirectBooking] = useState(false);
  const [directCourse, setDirectCourse] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const [availableBatches, setAvailableBatches] = useState([]);
  
  const [cart, setCart] = useState([]);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [sendEmail, setSendEmail] = useState(true);
  const [sendWhatsApp, setSendWhatsApp] = useState(true);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const state = location.state || {};
    
    if (state.slug) {
      let programData = null;
      const slugKey = state.slug?.toLowerCase().trim();
      
      if (state.location) {
        const locKey = state.location?.toLowerCase().trim();
        if (OmbDataMap[locKey]?.[slugKey]) {
          programData = OmbDataMap[locKey][slugKey];
        }
      }

      if (!programData) {
        for (const loc of Object.keys(OmbDataMap)) {
          if (OmbDataMap[loc]?.[slugKey]) {
            programData = OmbDataMap[loc][slugKey];
            break;
          }
        }
      }
      
      if (programData) {
        setIsDirectBooking(true);
        const title = programData.heroSection?.hero?.highlight 
          ? `${programData.heroSection.hero.highlight}${programData.heroSection.hero.title}`
          : state.slug.replace(/-/g, " ");

        let rooms = programData.accommodationSection?.content?.rooms || [];

        // Resolve dynamic pricing and batches
        let pricingInfo = null;
        if (state.location) {
          const locKey = state.location.toLowerCase().trim();
          if (locKey === "bali") {
            pricingInfo = ROOM_PRICES_BALI[slugKey];
          } else if (locKey === "rishikesh") {
            pricingInfo = ROOM_PRICES_RISHIKESH[slugKey];
          } else if (locKey === "mysuru" || locKey === "mysore") {
            pricingInfo = ROOM_PRICES_MYSORE[slugKey];
          } else if (locKey === "chiang-mai" || locKey === "chiang") {
            pricingInfo = ROOM_PRICES_CHIANG[slugKey];
          } else if (locKey === "dharamshala") {
            pricingInfo = ROOM_PRICES_DHARAMSHALA[slugKey];
          }
        }

        // Apply dynamic pricing if pricingInfo exists
        if (pricingInfo?.rooms) {
          rooms = rooms.map(originalRoom => {
            const matchedPrice = pricingInfo.rooms.find(
              room => room.type?.toLowerCase().replace(/\s+/g, '') === originalRoom.type?.toLowerCase().replace(/\s+/g, '')
            );
            if (matchedPrice) {
              return {
                ...originalRoom,
                price: `$${matchedPrice.current}`
              };
            }
            return originalRoom;
          });
        }

        setDirectCourse({
          category: state.type || "programs",
          slug: state.slug,
          title,
          rooms,
          price: programData.heroSection?.hero?.price || "$1,299"
        });

        // Pre-select room option
        const initialRoom = state.roomType || (rooms[0]?.type || "6 Shared Room");
        setSelectedRoom(initialRoom);

        const durationDays = pricingInfo?.durationDays || 25;
        const generated = generateBatches(durationDays);
        setAvailableBatches(generated);

        const initialDate = state.selectedDate || (generated[0] || "");
        setSelectedDate(initialDate);
      }
    } else {
      setIsDirectBooking(false);
      setCart(getCart());
    }

    const handleCartUpdate = () => {
      if (!isDirectBooking) {
        setCart(getCart());
      }
    };

    window.addEventListener("cart_updated", handleCartUpdate);
    return () => {
      window.removeEventListener("cart_updated", handleCartUpdate);
    };
  }, [location, isDirectBooking]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Invalid email format";
    }
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getSummaryText = () => {
    let summaryStr = "";
    if (isDirectBooking && directCourse) {
      summaryStr = `Course/Retreat: ${directCourse.title}\n- Accommodation Option: ${selectedRoom}\n- Selected Dates: ${selectedDate || "Not Specified"}\n- Price: ${totalStr}\n`;
    } else {
      cart.forEach((item, idx) => {
        summaryStr += `${idx + 1}. ${item.title}\n`;
        if (item.roomType) {
          summaryStr += `   - Option: ${item.roomType}\n`;
        }
        summaryStr += `   - Qty: ${item.quantity} · Price: ${item.price}\n`;
      });
    }
    return summaryStr;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!isDirectBooking && cart.length === 0) {
      setErrors({ cart: "Your cart is empty. Please add items to checkout." });
      return;
    }
    if (!sendEmail && !sendWhatsApp) {
      setSubmitError("Please select at least one method to send inquiry (Email or WhatsApp).");
      return;
    }
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError("");
      
      const summaryText = getSummaryText();
      
      if (sendEmail) {
        try {
          const formDataObj = new FormData();
          formDataObj.append("access_key", WEB3FORMS_ACCESS_KEY);
          formDataObj.append("name", formData.name);
          formDataObj.append("email", formData.email);
          formDataObj.append("phone", formData.phone);
          formDataObj.append("subject", `New Booking Inquiry - ${formData.name}`);
          formDataObj.append("message", `
New Booking Inquiry received from Ombreathe Checkout Page:

GUEST DETAILS:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

BOOKING DETAILS:
${summaryText}

Grand Total: ${totalStr}
          `);

          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formDataObj,
          });

          const data = await response.json();
          if (data.success) {
            setIsSubmitting(false);
            if (sendWhatsApp) {
              shareToWhatsApp(summaryText, false);
            }
            setSubmitSuccess(true);
            if (!isDirectBooking) {
              clearCart();
            }
          } else {
            setIsSubmitting(false);
            setSubmitError(data.message || "Failed to submit booking inquiry. Please try again.");
          }
        } catch (err) {
          setIsSubmitting(false);
          setSubmitError("A network error occurred. Please check your connection and try again.");
        }
      } else {
        // WhatsApp only
        setTimeout(() => {
          setIsSubmitting(false);
          shareToWhatsApp(summaryText, true);
        }, 800);
      }
    }
  };

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    const clean = priceStr.replace(/[^0-9.]/g, "");
    return parseFloat(clean) || 0;
  };

  const getPricing = () => {
    if (isDirectBooking && directCourse) {
      const activeRoomObj = directCourse.rooms.find(r => r.type === selectedRoom);
      const priceStr = activeRoomObj?.price || directCourse.price;
      return {
        totalStr: priceStr,
        subtotal: parsePrice(priceStr)
      };
    } else {
      const total = cart.reduce((sum, item) => {
        return sum + (parsePrice(item.price) * (item.quantity || 1));
      }, 0);
      return {
        totalStr: `$${total.toLocaleString()}`,
        subtotal: total
      };
    }
  };

  const { totalStr } = getPricing();

  const handleRemoveItem = (id, roomType) => {
    removeFromCart(id, roomType);
  };

  const handleQuantityChange = (id, roomType, currentQty, delta) => {
    updateQuantity(id, roomType, Math.max(1, currentQty + delta));
  };

  const shareToWhatsApp = (summaryStr, shouldRedirect = true) => {
    const phoneNumber = ""; // Ombreathe Booking WhatsApp Number
    const message = `Hello Ombreathe! I would like to inquire about booking details and information for the following program:

*PROGRAM INTERESTED*
${summaryStr.replace(/\n- /g, "\n- *").replace(/: /g, "*: ")}
*MY CONTACT DETAILS*
- *Name*: ${formData.name}
- *Email*: ${formData.email}
- *Phone*: ${formData.phone}

Please share the schedule, payment options, and general availability details. Thank you!`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank");
    
    if (shouldRedirect) {
      if (!isDirectBooking) {
        clearCart();
      }
      navigate("/");
    }
  };

  if (submitSuccess) {
    return (
      <main className="min-h-screen bg-stone-50 text-stone-800 py-12 flex items-center justify-center" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
        <div className="bg-white rounded-3xl p-8 max-w-md w-full border border-stone-200/60 shadow-xl text-center space-y-6" style={{ backgroundColor: "#ffffff", padding: "40px", borderRadius: "24px", border: "1px solid rgba(231, 229, 228, 0.8)", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", maxWidth: "450px", width: "100%", textAlign: "center", display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
            <CheckCircle2 size={36} style={{ color: "#10b981" }} />
          </div>
          <h2 style={{ color: "#1A2456", fontSize: "1.5rem", fontWeight: "700", margin: 0 }}>Inquiry Received!</h2>
          <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: "1.6", margin: 0 }}>
            Thank you, <strong>{formData.name}</strong>. Your booking inquiry details have been successfully emailed to the Ombreathe team. 
          </p>
          <p style={{ color: "#9ca3af", fontSize: "0.75rem", margin: 0 }}>
            We have sent a copy to <strong>{formData.email}</strong>. Our booking managers will review your request and get back to you shortly.
          </p>
          <button
            onClick={() => navigate("/")}
            style={{ width: "100%", padding: "14px", borderRadius: "12px", backgroundColor: "#1A2456", color: "#ffffff", fontSize: "0.875rem", fontWeight: "600", border: 0, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "12px", transition: "background-color 0.2s" }}
          >
            Go Back to Homepage <ArrowRight size={16} />
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 py-12 lg:py-10 md:py-12 animate-fadeIn" style={{ animation: "fadeInUp 0.4s ease-out" }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .checkout-input:focus {
          border-color: #1A2456 !important;
          box-shadow: 0 0 0 2px rgba(26, 36, 86, 0.15) !important;
        }
      `}</style>
      <div className="max-w-4xl mx-auto px-4" style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* Header Title */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2" style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 className="text-3xl font-bold text-[#1A2456]" style={{ color: "#1A2456", fontSize: "2rem", fontWeight: "700" }}>Complete Your Booking Inquiry</h1>
          <p className="text-stone-500 text-sm" style={{ color: "#78716c", fontSize: "0.875rem", marginTop: "8px" }}>
            Provide your details below, and we will connect you directly to our WhatsApp support team to complete your reservation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
          
          {/* Left Column: Form & Product Display */}
          <div className="lg:col-span-7 space-y-6" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            {/* Product/Course Card Display */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200/60 shadow-md" style={{ backgroundColor: "#ffffff", padding: "32px", borderRadius: "24px", border: "1px solid rgba(231, 229, 228, 0.8)", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
              {isDirectBooking && directCourse ? (
                <div className="space-y-5" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div className="border-b border-stone-100 pb-4" style={{ borderBottom: "1px solid #e7e5e4", paddingBottom: "16px" }}>
                    <span className="text-[#C8A96A] text-xs font-bold uppercase tracking-wider" style={{ color: "#C8A96A", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase" }}>Selected Program</span>
                    <h2 className="text-xl font-bold text-[#1A2456] mt-1" style={{ color: "#1A2456", fontSize: "1.25rem", margin: "4px 0 0 0" }}>{directCourse.title}</h2>
                  </div>

                  {/* Room Type Selector */}
                  {directCourse.rooms.length > 0 && (
                    <div className="space-y-2 relative" style={{ display: "flex", flexDirection: "column", gap: "8px", position: "relative" }}>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider" style={{ color: "#78716c", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase" }}>Accommodation Option</label>
                      
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full flex items-center justify-between border border-stone-200 rounded-xl px-4 py-3 bg-stone-50 hover:bg-stone-100/50 transition-all text-sm font-semibold text-gray-800 cursor-pointer focus:outline-none relative z-10"
                        style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", border: "1px solid #e7e5e4", borderRadius: "12px", padding: "12px 16px", backgroundColor: "#f5f5f4", cursor: "pointer" }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ color: "#1A2456", fontWeight: "600" }}>{selectedRoom}</span>
                          <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "#059669", backgroundColor: "#ecfdf5", padding: "2px 8px", borderRadius: "9999px" }}>
                            {directCourse.rooms.find(r => r.type === selectedRoom)?.price || directCourse.price}
                          </span>
                        </div>
                        <ChevronDown size={16} style={{ color: "#78716c", transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
                      </button>

                      {isDropdownOpen && (
                        <div className="fixed inset-0 z-0" onClick={() => setIsDropdownOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 0 }} />
                      )}

                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-stone-200/80 rounded-xl shadow-xl z-20 overflow-hidden py-1.5" style={{ position: "absolute", top: "100%", left: 0, right: 0, marginTop: "8px", backgroundColor: "#ffffff", border: "1px solid rgba(231,229,228,0.8)", borderRadius: "12px", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", zIndex: 20, padding: "6px 0" }}>
                          {directCourse.rooms.map((r, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => {
                                setSelectedRoom(r.type);
                                setIsDropdownOpen(false);
                              }}
                              className="w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors text-left hover:bg-stone-50 cursor-pointer"
                              style={{ display: "flex", width: "100%", justifyContent: "space-between", padding: "10px 16px", fontSize: "0.875rem", border: 0, backgroundColor: selectedRoom === r.type ? "#f5f5f4" : "transparent", cursor: "pointer", textAlign: "left" }}
                            >
                              <span style={{ color: "#44403c", fontWeight: selectedRoom === r.type ? "700" : "500" }}>{r.type}</span>
                              <span style={{ color: "#059669", fontWeight: "700" }}>{r.price}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Batch Date Selector */}
                  {availableBatches.length > 0 && (
                    <div className="space-y-2 relative" style={{ display: "flex", flexDirection: "column", gap: "8px", position: "relative" }}>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider" style={{ color: "#78716c", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase" }}>Select Batch / Start Date</label>
                      
                      <button
                        type="button"
                        onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
                        className="w-full flex items-center justify-between border border-stone-200 rounded-xl px-4 py-3 bg-stone-50 hover:bg-stone-100/50 transition-all text-sm font-semibold text-gray-800 cursor-pointer focus:outline-none relative z-10"
                        style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", border: "1px solid #e7e5e4", borderRadius: "12px", padding: "12px 16px", backgroundColor: "#f5f5f4", cursor: "pointer" }}
                      >
                        <span style={{ color: "#1A2456", fontWeight: "600" }}>{selectedDate}</span>
                        <ChevronDown size={16} style={{ color: "#78716c", transform: isDateDropdownOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
                      </button>

                      {isDateDropdownOpen && (
                        <div className="fixed inset-0 z-0" onClick={() => setIsDateDropdownOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 0 }} />
                      )}

                      {isDateDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-stone-200/80 rounded-xl shadow-xl z-20 overflow-hidden py-1.5" style={{ position: "absolute", top: "100%", left: 0, right: 0, marginTop: "8px", backgroundColor: "#ffffff", border: "1px solid rgba(231,229,228,0.8)", borderRadius: "12px", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", zIndex: 20, padding: "6px 0" }}>
                          {availableBatches.map((batch, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => {
                                setSelectedDate(batch);
                                setIsDateDropdownOpen(false);
                              }}
                              className="w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors text-left hover:bg-stone-50 cursor-pointer"
                              style={{ display: "flex", width: "100%", justifyContent: "space-between", padding: "10px 16px", fontSize: "0.875rem", border: 0, backgroundColor: selectedDate === batch ? "#f5f5f4" : "transparent", cursor: "pointer", textAlign: "left" }}
                            >
                              <span style={{ color: "#44403c", fontWeight: selectedDate === batch ? "700" : "500" }}>{batch}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                // Shopping Cart Mode (Fallback)
                <div>
                  <div className="flex items-center gap-2 mb-6 border-b border-stone-100 pb-4" style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #e7e5e4", paddingBottom: "16px", marginBottom: "24px" }}>
                    <ShoppingBag size={20} style={{ color: "#1A2456" }} />
                    <h2 className="text-xl font-bold text-[#1A2456]" style={{ color: "#1A2456", fontSize: "1.25rem", margin: 0 }}>Selected Program Cart</h2>
                    <span className="bg-[#1A2456]/10 text-[#1A2456] text-xs font-bold px-2 py-0.5 rounded-full ml-auto" style={{ marginLeft: "auto", backgroundColor: "rgba(26,36,86,0.1)", color: "#1A2456", padding: "2px 8px", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: "700" }}>{cart.length} items</span>
                  </div>

                  {cart.length === 0 ? (
                    <div className="text-center py-10 space-y-3" style={{ textAlign: "center", padding: "40px 0" }}>
                      <p className="text-gray-500 text-sm" style={{ color: "#78716c", fontSize: "0.875rem" }}>Your shopping cart is empty.</p>
                      <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="bg-[#1A2456] text-white text-xs font-semibold px-4 py-2.5 rounded-full cursor-pointer hover:bg-[#202c6b]"
                        style={{ backgroundColor: "#1A2456", color: "#ffffff", padding: "10px 16px", borderRadius: "9999px", border: 0, fontSize: "0.75rem", fontWeight: "600", cursor: "pointer" }}
                      >
                        Browse Programs
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                      {cart.map((item, index) => (
                        <div key={`${item.id}-${item.roomType}`} className="flex gap-4" style={{ display: "flex", gap: "16px", borderBottom: index < cart.length - 1 ? "1px solid #e7e5e4" : "none", paddingBottom: index < cart.length - 1 ? "16px" : 0 }}>
                          <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: "0.875rem", fontWeight: "700", color: "#1A2456", margin: 0 }}>{item.title}</h3>
                            {item.roomType && <span style={{ fontSize: "0.75rem", color: "#a8a29e", display: "block", marginTop: "4px" }}>Room: {item.roomType}</span>}
                            <div style={{ color: "#059669", fontWeight: "700", marginTop: "8px", fontSize: "0.875rem" }}>{item.price}</div>
                          </div>

                          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between" }}>
                            <button
                              type="button"
                              onClick={() => handleRemoveItem(item.id, item.roomType)}
                              aria-label="Remove item"
                              style={{ color: "#a8a29e", background: "transparent", border: 0, cursor: "pointer" }}
                            >
                              <Trash2 size={16} />
                            </button>

                            <div style={{ display: "flex", alignItems: "center", gap: "8px", border: "1px solid #e7e5e4", borderRadius: "8px", padding: "2px", backgroundColor: "#f5f5f4", marginTop: "16px" }}>
                              <button
                                type="button"
                                onClick={() => handleQuantityChange(item.id, item.roomType, item.quantity || 1, -1)}
                                aria-label="Decrease quantity"
                                style={{ width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", border: 0, background: "transparent", cursor: "pointer" }}
                              >
                                <Minus size={11} />
                              </button>
                              <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "#292524", width: "16px", textAlign: "center" }}>{item.quantity || 1}</span>
                              <button
                                type="button"
                                onClick={() => handleQuantityChange(item.id, item.roomType, item.quantity || 1, 1)}
                                aria-label="Increase quantity"
                                style={{ width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", border: 0, background: "transparent", cursor: "pointer" }}
                              >
                                <Plus size={11} />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
              {errors.cart && <p style={{ color: "#ef4444", fontSize: "0.75rem", marginTop: "16px", textAlign: "center" }}>{errors.cart}</p>}
            </div>

            {/* Guest Details Form */}
            <form onSubmit={handleFormSubmit} className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200/60 shadow-md space-y-5" style={{ backgroundColor: "#ffffff", padding: "32px", borderRadius: "24px", border: "1px solid rgba(231, 229, 228, 0.8)", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: "20px" }}>
              <h3 style={{ color: "#292524", fontSize: "1.125rem", fontWeight: "700", margin: 0, borderBottom: "1px solid #e7e5e4", paddingBottom: "12px" }}>Guest Details</h3>

              {/* Name */}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ color: "#78716c", fontSize: "0.75rem", fontWeight: "600", textTransform: "uppercase" }}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Jane Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="checkout-input"
                  style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: errors.name ? "1px solid #ef4444" : "1px solid #e7e5e4", backgroundColor: "#f5f5f4", fontSize: "0.875rem", boxSizing: "border-box" }}
                />
                {errors.name && <p style={{ color: "#ef4444", fontSize: "0.75rem", margin: 0 }}>{errors.name}</p>}
              </div>

              {/* Email & Phone */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <label style={{ color: "#78716c", fontSize: "0.75rem", fontWeight: "600", textTransform: "uppercase" }}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="checkout-input"
                    style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: errors.email ? "1px solid #ef4444" : "1px solid #e7e5e4", backgroundColor: "#f5f5f4", fontSize: "0.875rem", boxSizing: "border-box" }}
                  />
                  {errors.email && <p style={{ color: "#ef4444", fontSize: "0.75rem", margin: 0 }}>{errors.email}</p>}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <label style={{ color: "#78716c", fontSize: "0.75rem", fontWeight: "600", textTransform: "uppercase" }}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="checkout-input"
                    style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: errors.phone ? "1px solid #ef4444" : "1px solid #e7e5e4", backgroundColor: "#f5f5f4", fontSize: "0.875rem", boxSizing: "border-box" }}
                  />
                  {errors.phone && <p style={{ color: "#ef4444", fontSize: "0.75rem", margin: 0 }}>{errors.phone}</p>}
                </div>
              </div>

              {/* Choice of Inquiry Method */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ color: "#78716c", fontSize: "0.75rem", fontWeight: "600", textTransform: "uppercase" }}>How would you like to receive your booking itinerary?</label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <button
                    type="button"
                    onClick={() => setSendEmail(!sendEmail)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "12px",
                      borderRadius: "12px",
                      border: sendEmail ? "2px solid #1A2456" : "1px solid #e7e5e4",
                      backgroundColor: sendEmail ? "#f5f3ff" : "#ffffff",
                      color: sendEmail ? "#1A2456" : "#78716c",
                      fontWeight: "700",
                      fontSize: "0.875rem",
                      cursor: "pointer",
                      transition: "all 0.2s"
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={sendEmail}
                      readOnly
                      style={{ marginRight: "4px", accentColor: "#1A2456", cursor: "pointer" }}
                    />
                    <Mail size={16} /> Email Details
                  </button>
                  <button
                    type="button"
                    onClick={() => setSendWhatsApp(!sendWhatsApp)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "12px",
                      borderRadius: "12px",
                      border: sendWhatsApp ? "2px solid #059669" : "1px solid #e7e5e4",
                      backgroundColor: sendWhatsApp ? "#ecfdf5" : "#ffffff",
                      color: sendWhatsApp ? "#059669" : "#78716c",
                      fontWeight: "700",
                      fontSize: "0.875rem",
                      cursor: "pointer",
                      transition: "all 0.2s"
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={sendWhatsApp}
                      readOnly
                      style={{ marginRight: "4px", accentColor: "#059669", cursor: "pointer" }}
                    />
                    <MessageSquare size={16} /> WhatsApp Details
                  </button>
                </div>
              </div>

              {submitError && (
                <p style={{ color: "#ef4444", fontSize: "0.75rem", margin: 0, textAlign: "center" }}>
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting || (!isDirectBooking && cart.length === 0)}
                className="w-full text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow border-0"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  background: (sendEmail && sendWhatsApp) 
                    ? "linear-gradient(135deg, #1A2456 0%, #059669 100%)" 
                    : sendEmail 
                    ? "#1A2456" 
                    : sendWhatsApp 
                    ? "#059669" 
                    : "#a8a29e",
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  border: 0,
                  cursor: (!sendEmail && !sendWhatsApp) ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "background-color 0.2s",
                  marginTop: "12px"
                }}
              >
                {isSubmitting ? (
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "16px", height: "16px", borderRadius: "50%", border: "2px solid #ffffff", borderTopColor: "transparent", animation: "spin 1s linear infinite" }} />
                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                    Submitting...
                  </div>
                ) : (sendEmail && sendWhatsApp) ? (
                  <>
                    <Check size={16} /> Submit Inquiry (Email & WhatsApp)
                  </>
                ) : sendEmail ? (
                  <>
                    <Mail size={16} /> Book & Inquire via Email
                  </>
                ) : sendWhatsApp ? (
                  <>
                    <MessageSquare size={16} /> Book & Inquire via WhatsApp
                  </>
                ) : (
                  "Select Inquiry Channel"
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Sticky Summary */}
          <div className="lg:col-span-5 bg-[#F7F3EF] border border-stone-200/40 rounded-3xl p-6 space-y-5 lg:sticky lg:top-24" style={{ backgroundColor: "#F7F3EF", padding: "32px", borderRadius: "24px", border: "1px solid rgba(231, 229, 228, 0.4)", display: "flex", flexDirection: "column", gap: "20px" }}>
            <h3 style={{ color: "#292524", fontSize: "1.125rem", fontWeight: "700", margin: 0, borderBottom: "1px solid rgba(231, 229, 228, 0.6)", paddingBottom: "12px" }}>Booking Summary</h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {isDirectBooking && directCourse ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div>
                    <span style={{ color: "#a8a29e", fontSize: "0.6875rem", fontWeight: "700", textTransform: "uppercase" }}>Program</span>
                    <span style={{ display: "block", color: "#1A2456", fontWeight: "700", fontSize: "0.875rem", marginTop: "2px", lineHeight: "1.4" }}>{directCourse.title}</span>
                  </div>
                  
                  <div>
                    <span style={{ color: "#a8a29e", fontSize: "0.6875rem", fontWeight: "700", textTransform: "uppercase" }}>Room Type</span>
                    <span style={{ display: "block", color: "#44403c", fontWeight: "600", fontSize: "0.875rem", marginTop: "2px" }}>{selectedRoom}</span>
                  </div>

                  <div>
                    <span style={{ color: "#a8a29e", fontSize: "0.6875rem", fontWeight: "700", textTransform: "uppercase" }}>Date / Batch</span>
                    <span style={{ display: "block", color: "#44403c", fontWeight: "600", fontSize: "0.875rem", marginTop: "2px" }}>{selectedDate || "Not Specified"}</span>
                  </div>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxHeight: "240px", overflowY: "auto" }}>
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.roomType}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", fontSize: "0.875rem" }}>
                      <div>
                        <span style={{ color: "#292524", fontWeight: "600" }}>{item.title}</span>
                        {item.roomType && <span style={{ display: "block", fontSize: "0.75rem", color: "#a8a29e" }}>Room: {item.roomType}</span>}
                        <span style={{ display: "block", fontSize: "0.75rem", color: "#78716c" }}>Qty: {item.quantity}</span>
                      </div>
                      <span style={{ color: "#292524", fontWeight: "700" }}>{item.price}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Grand Total */}
              <div style={{ borderTop: "1px solid rgba(231, 229, 228, 0.6)", paddingTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
                <span style={{ color: "#292524", fontWeight: "700", fontSize: "0.875rem" }}>Grand Total:</span>
                <span style={{ color: "#059669", fontWeight: "800", fontSize: "1.5rem" }}>{totalStr}</span>
              </div>

              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", backgroundColor: "#ecfdf5", padding: "12px", borderRadius: "12px", border: "1px solid rgba(16, 185, 129, 0.15)", marginTop: "8px" }}>
                <CheckCircle2 size={16} style={{ color: "#059669", flexShrink: 0, marginTop: "2px" }} />
                <span style={{ fontSize: "0.75rem", color: "#065f46", lineHeight: "1.4" }}>
                  Includes accommodation, daily vegetarian meals, all course material, excursions, and final certification. No payment will be charged now.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
