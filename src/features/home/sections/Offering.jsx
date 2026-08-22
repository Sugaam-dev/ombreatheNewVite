import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/offering.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import SectionHeading from '../../../components/shared/SectionHeading/SectionHeading';
import MobileCarousel from '../../yoga-retreats-programs/sections/MobileCarousel';

function Offering() {
const navigate=useNavigate();

  const offerings = useMemo(() => [
    {
      image: "/images/images-P7DZJ4W.jpg",
      icon: "/images/050-mortar.png",
      title: "Yoga and meditation",
      description: "Yoga and meditation cultivate inner peace, balance, and mindfulness.",
    },
    {
      image: "/images/images-77XKX4V.jpg",
      icon: "/images/003-lotus.png",
      title: "Abhyanga Massage Therapy",
      description: "Abhyanga is an Ayurvedic therapy using warm herbal oils.",
    },
    {
      image: "/images/images-3DAYAFT.jpg",
      icon: "/images/036-yoga.png",
      title: "Prenatal Yoga TTC",
      description: "Guides expectant mothers safely through yoga.",
    },
    {
      image: "/images/images-U2433N4 (1).jpg",
      icon: "/images/028-nutrition.png",
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

      <MobileCarousel
        items={offerings}
        gridClass="offering-container"
        renderItem={(item, index) => (
          <div className="offering-card" key={index}>
            <div className="offering-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="offering-content">
              <img src={item.icon} alt="" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button onClick={() => navigate('/contact')}>Discover more</button>
            </div>
          </div>
        )}
      />

    </div>
  );
}

export default React.memo(Offering);