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

/* ==========================================
   WRAPPER (CENTER + CONTROL WIDTH)
========================================== */

.faq-wrapper {
  width: 100%;
  max-width: 1200px; /* laptop default */
  margin: 0 auto;

  padding:
    clamp(30px, 4vw, 90px)
    clamp(12px, 2vw, 40px)
    clamp(40px, 5vw, 100px);

  // background: linear-gradient(180deg, #fafaf8 0%, #ffffff 100%);
  box-sizing: border-box;
}

.faq-wrapper *,
.faq-wrapper *::before,
.faq-wrapper *::after {
  box-sizing: border-box;
}

/* ==========================================
   CONTAINER
========================================== */

.accordion-container {
  width: 100%;
  margin: 0 auto;
  background: #fff;
  border-radius: clamp(18px, 1.5vw, 32px);
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.06);
}

/* ==========================================
   TABS
========================================== */

.category-tabs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #f8f9fa;
  border-bottom: 1px solid #ececec;
}

.tab-button {
  border: none;
  background: transparent;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: clamp(8px, 0.8vw, 14px);
  padding: clamp(14px, 1.2vw, 24px);

  font-size: clamp(13px, 0.9vw, 18px);
  font-weight: 600;

  color: #666;
  transition: 0.25s ease;
}

.tab-button:hover {
  background: #eceff1;
  color: #333;
}

.tab-button.active {
  background: linear-gradient(135deg, #4a7c68, #6b9c87);
  color: #fff;
}

.tab-icon {
  font-size: clamp(16px, 1vw, 22px);
}

/* ==========================================
   HEADER
========================================== */

.section-header {
  padding: clamp(24px, 2.5vw, 50px);
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
}

.section-header h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(26px, 2.2vw, 52px);
  font-weight: 500;
  line-height: 1.1;
  color: #1e1e1c;
  margin-bottom: clamp(10px, 1vw, 20px);
}

.section-subtitle {
  font-size: clamp(13px, 1vw, 20px);
  line-height: 1.7;
  color: #777;
  margin: 0 auto;
  max-width: 60ch;
}

/* ==========================================
   ACCORDION ITEMS
========================================== */

.accordion-items {
  padding: clamp(16px, 2vw, 36px);
}

.accordion-item {
  margin-bottom: clamp(12px, 1vw, 18px);
  border-radius: clamp(14px, 1vw, 22px);
  overflow: hidden;
  background: #fff;
  border: 1px solid #ececec;
  transition: 0.25s ease;
}

.accordion-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 26px rgba(0,0,0,0.05);
}

/* ==========================================
   TITLE
========================================== */

.title {
  cursor: pointer;
  padding: clamp(16px, 1.3vw, 26px);

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: clamp(10px, 1vw, 18px);
  transition: 0.25s ease;
}

.title:hover {
  background: #fafafa;
}

.title.active {
  background: linear-gradient(135deg, #eef7f2, #dceee6);
}

/* ==========================================
   QUESTION
========================================== */

.question-text {
  flex: 1;
  font-size: clamp(14px, 1.1vw, 20px);
  font-weight: 500;
  line-height: 1.5;
  color: #1e1e1c;
}

/* ==========================================
   ICON
========================================== */

.icon {
  width: clamp(26px, 2vw, 40px);
  height: clamp(26px, 2vw, 40px);

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: #f2f5f3;
  color: #4a7c68;

  font-size: clamp(16px, 1.2vw, 24px);
  transition: 0.25s ease;
}

.title.active .icon {
  transform: rotate(180deg);
  background: #4a7c68;
  color: #fff;
}

/* ==========================================
   CONTENT
========================================== */

.content {
  max-height: 0;
  overflow: hidden;
  opacity: 0;

  transition: 0.35s ease;
  background: #fcfcfc;
}

.content.active {
  max-height: 500px;
  opacity: 1;

  padding:
    0
    clamp(16px, 1.5vw, 28px)
    clamp(20px, 1.8vw, 30px);
}

.content p {
  font-size: clamp(13px, 1vw, 18px);
  line-height: 1.8;
  color: #555;
}

/* ==========================================
   LARGE SCREENS (1920px+)
========================================== */

@media (min-width: 1600px) {
  .faq-wrapper {
    max-width: 1400px;
  }

  .section-header h2 {
    font-size: 56px;
  }

  .question-text {
    font-size: 20px;
  }

  .content p {
    font-size: 18px;
  }
}

/* ==========================================
   ULTRA WIDE (2560px+)
========================================== */

@media (min-width: 2560px) {
  .faq-wrapper {
    max-width: 1900px;
  }

  .section-header h2 {
    font-size: 64px;
  }

  .section-subtitle {
    font-size: 22px;
  }

  .question-text {
    font-size: 22px;
  }

  .content p {
    font-size: 20px;
  }
}

/* ==========================================
   TABLET
========================================== */

@media (max-width: 1023px) {
  .section-header h2 {
    font-size: 34px;
  }
}

/* ==========================================
   MOBILE
========================================== */

@media (max-width: 768px) {

  .faq-wrapper {
    padding: 25px 10px 60px;
  }

  .category-tabs {
    grid-template-columns: 1fr;
  }

  .section-header h2 {
    font-size: 28px;
  }

  .question-text {
    font-size: 14px;
  }

  .content p {
    font-size: 13px;
  }
}

/* ==========================================
   SMALL MOBILE
========================================== */

@media (max-width: 480px) {

  .section-header h2 {
    font-size: 24px;
  }

  .question-text {
    font-size: 13px;
  }

  .content p {
    font-size: 12px;
  }
}

`}</style>
    </div>
  );
};

export default memo(Accordion);
