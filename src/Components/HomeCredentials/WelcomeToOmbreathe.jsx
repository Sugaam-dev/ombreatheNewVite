import SectionHeading from "../useFullComponent/SectionHeading";

const WelcomeToOmbreathe = () => {
  return (
    <>
    
    <div className="welcome-page">

      <div className="welcome-container">

        <SectionHeading
          title="Welcome To Ombreathe"
          highlight="Elevating Wellness Through Yoga & Transformation"
          subtitle="Experience authentic yoga, mindfulness & holistic healing with expert guidance"
          highlightColor="#4a7c68"
          textColor="#1e1e1c"
        />

        <div className="welcome-content">

          <p className="welcome-text">
            Welcome to Ombreathe, a premier yoga school dedicated to providing high-quality yoga classes and courses for people of all ages and skill levels. With a team of experienced and certified yoga trainers, we offer a wide range of programs that are designed to help you achieve your wellness goals and transform your life. Located not only in Rishikesh but also in Bali, Indonesia and various parts of India, Ombreathe Yoga Ashram is one of the leading yoga schools. Our courses are broadly divided into General Classes and Master Classes (Teacher Training Programs), certified by Yoga Alliance—so whether you're a beginner or an experienced practitioner, we have something for everyone. 
            
            <br />
            
            We also provide trial classes to help you get a taste of what we offer before committing to a full course. Our programs include 100 Hour Yoga TTC, 200 Hour Yoga TTC, 300 Hour Yoga TTC and 500 Hour Yoga TTC in Rishikesh and other locations. As part of the Ombreathe entity, under 'Collaborated Yoga Alliance School – Yoga with Shreeram', we also cater to diverse areas such as Pilgrimage, Events, Merchandise, Tours, and Community Services. 
            
            <br />
            
            Our goal is to create a holistic and inclusive approach to wellness that goes beyond just physical fitness. At Ombreathe, we believe that yoga is more than just a form of exercise—it's a way of life. So come and join us on this journey of self-discovery, healing, and transformation.
          </p>

        </div>

      </div>
    </div>
    <style>{`
    /* ================================
   WRAPPER (NO CONFLICT)
================================ */
.welcome-page {
  width: 100%;
 

}

/* ================================
   CONTAINER
================================ */
.welcome-container {
  max-width: 1200px;
  margin: auto;
}

/* ================================
   CONTENT
================================ */
.welcome-content {
  margin-top: 40px;
}

/* ================================
   TEXT (MAIN PART)
================================ */
.welcome-text {
  color: #333;
  line-height: 1.8;
  text-align: justify;

  /* 🔥 RESPONSIVE FONT */
  font-size: var(--body-text-size);
}

/* ================================
   LARGE SCREENS
================================ */
@media (min-width: 1400px) {
  .welcome-container {
    max-width: 1400px;
  }

  .welcome-text {
    font-size: var(--body-text-size);
  }
}

@media (min-width: 2300px) {
  .welcome-container {
    max-width: 1800px;
  }

  .welcome-text {
    font-size: var(--body-text-size);
    line-height: 2;
  }
}

/* ================================
   TABLET
================================ */
@media (max-width: 1024px) {
  .welcome-text {
    font-size: var(--body-text-size);
  }
}

/* ================================
   MOBILE
================================ */
@media (max-width: 768px) {

  .welcome-page {
    padding: 40px 15px;
  }

  .welcome-text {
    font-size: var(--body-text-size-mobile);
    text-align: left;
  }
}

/* ================================
   SMALL MOBILE
================================ */
@media (max-width: 480px) {
  .welcome-text {
    font-size: var(--body-text-size-mobile);
  }
}
    `}</style>
    </>
  );
};

export default WelcomeToOmbreathe;