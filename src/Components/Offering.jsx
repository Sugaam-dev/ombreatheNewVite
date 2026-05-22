import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/offering.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import SectionHeading from './useFullComponent/SectionHeading';

function Offering() {

  const offerings = useMemo(() => [
    {
      image: "./images/images-P7DZJ4W.jpg",
      icon: "./images/050-mortar.png",
      title: "Yoga and meditation",
      description: "Yoga and meditation cultivate inner peace, balance, and mindfulness.",
    },
    {
      image: "./images/images-77XKX4V.jpg",
      icon: "./images/003-lotus.png",
      title: "Abhyanga Massage Therapy",
      description: "Abhyanga is an Ayurvedic therapy using warm herbal oils.",
    },
    {
      image: "./images/images-3DAYAFT.jpg",
      icon: "./images/036-yoga.png",
      title: "Prenatal Yoga TTC",
      description: "Guides expectant mothers safely through yoga.",
    },
    {
      image: "./images/images-U2433N4 (1).jpg",
      icon: "./images/028-nutrition.png",
      title: "Ayurveda",
      description: "Ancient healing system balancing body and mind.",
    }
  ], []);

  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="offering-page">

      <SectionHeading
        title="Discover Our Holistic"
        highlight="Offering"
        subtitle="Explore transformative yoga programs & wellness experiences"
        highlightColor="#4a7c68"
        textColor="#1e1e1c"
      />

     <div className="offering-container">
  {offerings.map((item, index) => (
    <div className="offering-card" key={index}>
      
      <div className="offering-image">
        <img src={item.image} alt="" />
      </div>

      <div className="offering-content">
        <img src={item.icon} alt="" />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <button>Discover more</button>
      </div>

    </div>
  ))}
</div>

    </div>
  );
}

export default React.memo(Offering);