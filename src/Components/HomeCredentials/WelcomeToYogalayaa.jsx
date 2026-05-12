import SectionHeading from "../useFullComponent/SectionHeading";

// import "./Styles/WelcometoOmbreathe.css";
const WelcomeToYogalayaa = () => {
  return (
    <>
      <div className="yogaschool">
        <div className="yogaa">
          {/* <div className="heading">
            <h1>Welcome To Ombreathe</h1>
            <img src="./images/lg.png" alt="logo" />
          </div> */}
<SectionHeading
  title="Welcome To"
  highlight="Ombreathe"
  subtitle="Experience authentic yoga, mindfulness & holistic healing with expert guidance"
  highlightColor="#4a7c68"
  textColor="#1e1e1c"
/>

          <div className="join">
            <p style={{ lineHeight: "30px", fontSize: "18px" }}>
              Welcome to Ombreathe, a premier yoga school dedicated to providing
              high-quality yoga classes and courses for people of all ages and
              skill levels. With a team of experienced and certified yoga
              trainers, we offer a wide range of programs that are designed to
              help you achieve your wellness goals and transform your life.
              Located not only in Rishikesh but also in Bali, Indonesia and
              various parts of India, Ombreathe Yoga Ashram is one of the
              leading yoga schools. Our courses are broadly divided into General
              Classes and Master Classes (Teacher Training Programs), certified
              by Yoga Alliance—so whether you're a beginner or an experienced
              practitioner,
              <br />
              <br />
              we have something for everyone. We also provide trial classes to
              help you get a taste of what we offer before committing to a full
              course. Our programs include 100 Hour Yoga TTC, 200 Hour Yoga TTC,
              and 300 Hour Yoga TTC in Rishikesh and other locations. As part of
              the Ombreathe entity, under Shreeram Yogshala, we also cater to
              diverse areas such as Pilgrimage, Events, Merchandise, Tours, and
              Community Services.
              <br />
              <br />
              Our goal is to create a holistic and inclusive approach to
              wellness that goes beyond just physical fitness. At Ombreathe, we
              believe that yoga is more than just a form of exercise—it's a way
              of life. So come and join us on this journey of self-discovery,
              healing, and transformation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeToYogalayaa;
