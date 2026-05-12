import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoStar, IoStarHalf } from "react-icons/io5";
import "../Styles/ratings.css";
import SectionHeading from "./useFullComponent/SectionHeading";
// import lg from '../images/lg.png'
// import {SectionHeading} from "./useFullComponent/SectionHeading";
function Ratings() {
  const data = [
    {
      name: "Kristella",
      city: "Bali",
      description: "Experiencing sound healing and inner child healing!",
    },
    {
      name: "Emily",
      city: "Bali",
      description: `I wanted to relax and gain more experience in yoga and meditation. I chose it for the silent meditation and structured program.`,
    },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [data.length]);

  const socialRatings = [
    { icon: FaFacebook, name: "Facebook", color: "#1877F2" },
    { icon: FaInstagram, name: "Instagram", color: "#E4405F" },
    { icon: FaYoutube, name: "YouTube", color: "#FF0000" },
  ];

  return (
    <div className="ratings-container">
      {/* <div className="heading">
        <h1>What our students say about their yoga teacher training by Ombreathe</h1>
        <img src={lg} alt="Ombreathe Logo" />
      </div> */}
<SectionHeading
  title="What Our Students Say About Their"
  highlight="Yoga Teacher Training"
  subtitle="Hear inspiring experiences and transformational journeys shared by students from the Ombreathe community"
  highlightColor="#4a7c68"
  textColor="#1e1e1c"
/>

      <div className="main-content">
        <div className="reviews-section">
          <div className="review-slider">
            <div 
              className="review-track"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {data.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="review-name">{review.name}</div>
                  <div className="review-city">{review.city}</div>
                  <div className="review-description">{review.description}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="slide-indicators">
            {data.map((_, index) => (
              <div
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="ratings-section">
          {socialRatings.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <div key={index} className="rating-box">
                <IconComponent 
                  className="social-icon" 
                  style={{ color: social.color }}
                />
                <div className="rating-info">
                  <h3>{social.name}</h3>
                  <div className="stars">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStarHalf />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Ratings;