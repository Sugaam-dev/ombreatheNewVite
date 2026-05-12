import React, { useState, useMemo, useCallback, memo } from "react";
import SectionHeading from "./useFullComponent/SectionHeading";
// import lg from "../images/lg.png";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("training");

  // Memoized FAQ data - only performance optimization
  const faqData = useMemo(
    () => ({
      training: [
        {
          title: "What is Yogalayaa's teacher training program?",
          content:
            "Yogalayaa's teacher training program is a comprehensive course that aims to provide students with the knowledge and skills needed to become a certified yoga instructor.",
        },
        {
          title: "What is the duration of the program?",
          content:
            "The duration of the program varies depending on the type of training. It can range from 100 hours to 500 hours, depending on the level of certification sought.",
        },
        {
          title: "What are the prerequisites for enrolling in the program?",
          content:
            "Most programs require a consistent personal practice of yoga for at least 6 months to 1 year, good physical and mental health, commitment and availability for intensive training, openness to learning different approaches, and basic English language proficiency.",
        },
        {
          title: "What styles of yoga are taught in the program?",
          content:
            "Yogalayaa's teacher training program covers a variety of yoga styles, including Hatha, Vinyasa, Kundalini, Prenatal, and Ayurveda yoga.",
        },
        {
          title: "What topics are covered in the program?",
          content:
            "The program covers a range of topics, including yoga philosophy, anatomy, asanas (postures), pranayama (breathing techniques), meditation, teaching methodology, and more.",
        },
        {
          title: "What is the class size for the program?",
          content:
            "The class size for the program varies depending on the location and type of training, but typically has a maximum of 20 students per class.",
        },
        {
          title: "What is the certification process like?",
          content:
            "The certification process involves completing all required coursework and passing a final exam. Upon successful completion, students will receive a certificate of completion and can apply for certification as a registered yoga instructor.",
        },
        {
          title: "Is accommodation and food included in the program?",
          content:
            "Accommodation and food arrangements vary depending on the location and type of training. Some programs may include accommodation and meals, while others may require students to make their own arrangements.",
        },
        {
          title:
            "What are the benefits of enrolling in Yogalayaa's teacher training program?",
          content:
            "Benefits include gaining a deeper understanding of yoga and its philosophy, improving your own practice, developing teaching skills and techniques, and becoming certified to teach yoga.",
        },
        {
          title: "Are scholarships available for the program?",
          content:
            "Yes, Yogalayaa offers a scholarship program for eligible students who demonstrate financial need and a commitment to their yoga practice.",
        },
      ],
      retreats: [
        {
          title: "What types of yoga retreats do you offer?",
          content:
            "We offer various types of retreats including weekend wellness retreats, 7-day spiritual retreats, detox retreats, and customized retreats for groups. Each retreat is designed to provide a transformative experience in the serene environment of Rishikesh.",
        },
        {
          title: "What is included in the retreat packages?",
          content:
            "Our retreat packages include accommodation, all vegetarian meals, daily yoga classes, meditation sessions, spiritual activities, excursions to local temples and ashrams, and airport transfers. We also provide yoga mats and other necessary equipment.",
        },
        {
          title: "What kind of accommodation is provided during retreats?",
          content:
            "We offer comfortable accommodation ranging from shared rooms to private suites, all with modern amenities while maintaining the authentic ashram atmosphere. Rooms are clean, peaceful, and designed to enhance your spiritual journey.",
        },
        {
          title: "What kind of food is served during the retreats?",
          content:
            "We serve healthy and nutritious vegetarian meals that are prepared fresh daily. Our menu includes a variety of Indian and international dishes that cater to different dietary requirements including vegan, gluten-free, and other special dietary needs.",
        },
        {
          title: "Can beginners join the yoga retreats?",
          content:
            "Absolutely! Our retreats welcome practitioners of all levels, from complete beginners to advanced yogis. Our experienced instructors provide modifications and personalized guidance to ensure everyone can participate comfortably and safely.",
        },
      ],
    }),
    []
  );

  // Memoized event handlers - only performance optimization
  const onTitleClick = useCallback(
    (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    },
    [activeIndex]
  );

  const onCategoryClick = useCallback((category) => {
    setActiveCategory(category);
    setActiveIndex(null); // Reset active item when switching categories
  }, []);

  // Your original rendering logic - exactly the same
  const renderedItems = faqData[activeCategory].map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <div key={item.title} className={`accordion-item ${active}`}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <span className="question-text">{item.title}</span>
          <span className="icon">{active === "active" ? "−" : "+"}</span>
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="faq-wrapper">
      <div className="yogaschool">
        <div className="yogaa">
          {/* <div className="heading">
            <h1>Frequently Asked Questions</h1>
            <img
              src={lg}
              alt="Yogalayaa Logo"
              className="logo-img"
              loading="eager"
            />
          </div> */}
    <SectionHeading
  title="Frequently Asked"
  highlight="Questions"
  subtitle="Find answers to common questions about our yoga teacher training, retreats, classes and wellness programs"
  highlightColor="#4a7c68"
  textColor="#1e1e1c"
/>
        </div>
      </div>

      <div className="accordion-container">
        <div className="category-tabs">
          <button
            className={`tab-button ${
              activeCategory === "training" ? "active" : ""
            }`}
            onClick={() => onCategoryClick("training")}
            type="button"
          >
            <span className="tab-icon">🧘‍♀️</span>
            Teacher Training
          </button>
          <button
            className={`tab-button ${
              activeCategory === "retreats" ? "active" : ""
            }`}
            onClick={() => onCategoryClick("retreats")}
            type="button"
          >
            <span className="tab-icon">🏔️</span>
            Retreats
          </button>
        </div>

        <div className="section-header">
          <h2>
            {activeCategory === "training"
              ? "Teacher Training Program Questions"
              : "Retreat Program Questions"}
          </h2>
          <p className="section-subtitle">
            {activeCategory === "training"
              ? "Everything you need to know about Yogalayaa's certification program"
              : "Discover our transformative retreat experiences"}
          </p>
        </div>

        <div className="accordion-items">{renderedItems}</div>
      </div>

      <style>{`
        .faq-wrapper {
          min-height: 100vh;
        }

        .heading h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          font-family: "Caudex", serif;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .logo-img {
          width: 200px;
          height: auto;
          opacity: 0.9;
        }

        .accordion-container {
          width: 90%;
          max-width: 800px;
          margin: -20px auto 50px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .category-tabs {
          display: flex;
          background: #f8f9fa;
          border-bottom: 1px solid #e9ecef;
        }

        .tab-button {
          flex: 1;
          padding: 20px;
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          color: #6c757d;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .tab-button:hover {
          background: #e9ecef;
          color: #495057;
        }

        .tab-button.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .tab-icon {
          font-size: 1.2rem;
        }

        .section-header {
          padding: 30px;
          text-align: center;
          border-bottom: 1px solid #e9ecef;
        }

        .section-header h2 {
          color: #333;
          margin-bottom: 10px;
          font-size: 1.8rem;
        }

        .section-subtitle {
          color: #6c757d;
          font-size: 1rem;
          margin: 0;
        }

        .accordion-items {
          padding: 20px;
        }

        .accordion-item {
          margin-bottom: 15px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .title {
          cursor: pointer;
          padding: 20px;
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .title:hover {
          background-color: #f8f9fa;
        }

        .title.active {
          background: linear-gradient(135deg, #e3f2fd, #bbdefb);
          border-color: #2196f3;
        }

        .question-text {
          font-weight: 600;
          color: #333;
          flex: 1;
          text-align: left;
        }

        .icon {
          font-size: 24px;
          color: #2196f3;
          font-weight: bold;
          transition: transform 0.3s ease;
          width: 30px;
          text-align: center;
        }

        .title.active .icon {
          transform: rotate(180deg);
        }

        .content {
          max-height: 0;
          overflow: hidden;
          background-color: #ffffff;
          opacity: 0;
          transform: scaleY(0);
          transform-origin: top;
          transition: max-height 0.4s ease, opacity 0.4s ease,
            transform 0.4s ease, padding 0.4s ease;
          border-left: 3px solid transparent;
        }

        .content.active {
          max-height: 300px;
          opacity: 1;
          transform: scaleY(1);
          padding: 25px;
          border-left: 3px solid #2196f3;
          background: #fafafa;
        }

        .content p {
          margin: 0;
          font-size: 16px;
          color: #555;
          line-height: 1.6;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .heading h1 {
            font-size: 2rem;
          }

          .logo-img {
            width: 150px;
          }

          .accordion-container {
            width: 95%;
            margin: -10px auto 30px;
          }

          .tab-button {
            padding: 15px 10px;
            font-size: 0.9rem;
            flex-direction: column;
            gap: 5px;
          }

          .tab-icon {
            font-size: 1rem;
          }

          .section-header {
            padding: 20px 15px;
          }

          .section-header h2 {
            font-size: 1.5rem;
          }

          .accordion-items {
            padding: 15px;
          }

          .title {
            padding: 15px;
          }

          .question-text {
            font-size: 0.95rem;
          }

          .content.active {
            max-height: 250px;
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .yogaschool {
            padding: 20px 10px;
          }

          .heading h1 {
            font-size: 1.5rem;
          }

          .logo-img {
            width: 120px;
          }

          .accordion-container {
            width: 100%;
            margin: 0 auto 20px;
            border-radius: 0;
          }

          .tab-button {
            padding: 12px 8px;
            font-size: 0.8rem;
          }

          .section-header {
            padding: 15px 10px;
          }

          .section-header h2 {
            font-size: 1.3rem;
          }

          .section-subtitle {
            font-size: 0.9rem;
          }

          .accordion-items {
            padding: 10px;
          }

          .title {
            padding: 12px;
          }

          .question-text {
            font-size: 0.9rem;
          }

          .icon {
            font-size: 20px;
          }

          .content.active {
            max-height: 200px;
            padding: 15px;
          }

          .content p {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default memo(Accordion);
