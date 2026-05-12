import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/offering.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import SectionHeading from './useFullComponent/SectionHeading';

function Offering() {
  // Memoized offerings data
  const offerings = useMemo(() => [
    {
      image: "./images/images-P7DZJ4W.jpg",
      icon: "./images/050-mortar.png",
      title: "Yoga and meditation",
      description: "Yoga and meditation cultivate inner peace, balance, and mindfulness. They enhance physical health, reduce stress, and connect body, mind, and spirit for overall well-being.",
      alt: "Yoga and meditation",
      iconAlt: "Yoga icon"
    },
    {
      image: "./images/images-77XKX4V.jpg",
      icon: "./images/003-lotus.png",
      title: "Abhyanga Massage Therapy",
      description: "Abhyanga massage therapy is an ancient Ayurvedic practice using warm herbal oils to nourish the skin, improve circulation, relieve stress, and promote deep healing and relaxation.",
      alt: "Abhyanga Massage Therapy",
      iconAlt: "Lotus icon"
    },
    {
      image: "./images/images-3DAYAFT.jpg",
      icon: "./images/036-yoga.png",
      title: "Prenatal Yoga Teacher Training Course",
      description: "Prenatal Yoga Teacher Training Course equips instructors to safely guide expectant mothers through yoga, promoting strength, flexibility, relaxation, and emotional well-being during pregnancy.",
      alt: "Prenatal Yoga Teacher Training",
      iconAlt: "Yoga pose icon"
    },
    {
      image: "./images/images-U2433N4 (1).jpg",
      icon: "./images/028-nutrition.png",
      title: "Ayurveda",
      description: "Ayurveda is an ancient holistic healing system from India that balances body, mind, and spirit through natural remedies, diet, lifestyle practices, and herbal treatments.",
      alt: "Ayurveda",
      iconAlt: "Nutrition icon"
    }
  ], []);

  // Initialize AOS with cleanup
  useEffect(() => {
    Aos.init({ 
      duration: 2000,
      once: true,
      offset: 50
    });

    return () => {
      Aos.refresh();
    };
  }, []);

  return (
    <>
      <div className="offering">
        {/* <div className="offerheading" style={{paddingTop:'20px'}}>
          <h1>Discover Our Holistic Offering</h1>
          <img 
            src="./images/lg.png" 
            alt="Yogalayaa Logo" 
            loading="eager"
          />
        </div> */}
        <div>
  <SectionHeading
    title="Discover Our Holistic"
    highlight="Offering"
    subtitle="Explore transformative yoga programs, healing practices & wellness experiences designed for mind, body and soul"
    highlightColor="#4a7c68"
    textColor="#1e1e1c"
  />
</div>
      
        <div className="oo">
          <div className="offeringcards">
            {offerings.map((offering, index) => (
              <div key={index} className="card1" data-aos="fade-up">
                <div className="cardimg">
                  <img 
                    src={offering.image} 
                    alt={offering.alt}
                    loading="lazy"
                  />
                </div>
                <div className="cardcontent">
                  <img 
                    src={offering.icon} 
                    alt={offering.iconAlt}
                    loading="lazy"
                  />
                  <h2>{offering.title}</h2>
                  <p>{offering.description}</p>
                  <Link to='/contact'>
                    <button type="button">Discover more</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Offering);