import React, { useState, memo } from "react";
import SectionHeading from "../../../Components/useFullComponent/SectionHeading";

const Questions = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { colors, content } = data;

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="faq-section"
      style={{
        background: "#ffffff",
      }}
    >
  <SectionHeading
  title={content?.title}
  highlight={content?.highlight}
  subtitle={content?.subtitle}
  highlightColor={colors?.sage}
  textColor={colors?.navy}
/>

      <div className="faq-container">
        {content?.faqs?.map((item, index) => {
          const active = activeIndex === index;

          return (
            <div
              className={`faq-card ${active ? "active" : ""}`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>

                <div
                  className={`faq-icon ${active ? "rotate" : ""}`}
                  style={{
                    background: active
                      ? colors?.sage
                      : "#f3f4f6",
                    color: active ? "#fff" : "#111827",
                  }}
                >
                  +
                </div>
              </button>

              <div className={`faq-answer ${active ? "show" : ""}`}>
              {Array.isArray(item.answer) ? (
  <ul className="faq-list">
    {item.answer.map((point, i) => (
      <li key={i}>{point}</li>
    ))}
  </ul>
) : (
  <p>{item.answer}</p>
)}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .faq-section {
          width: 100%;
          padding: 100px 20px;
        }

        .faq-header {
          text-align: center;
          max-width: 850px;
          margin: auto;
          margin-bottom: 60px;
        }

        .faq-tag {
          display: inline-block;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .faq-header h2 {
          font-size: clamp(2.2rem, 5vw, 4rem);
          line-height: 1.2;
          font-weight: 700;
          color: #111827;
          margin-bottom: 20px;
        }

        .faq-header p {
          font-size: 1.05rem;
          color: #6b7280;
          line-height: 1.9;
          max-width: 700px;
          margin: auto;
        }

        .faq-container {
          width: 100%;
          max-width: 1200px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .faq-card {
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid #e5e7eb;
          overflow: hidden;
          transition: all 0.35s ease;
        }

        .faq-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.06);
        }

        .faq-card.active {
          border-color: rgba(0,0,0,0.08);
          box-shadow: 0 15px 40px rgba(0,0,0,0.05);
        }

        .faq-question {
          width: 100%;
          border: none;
          background: transparent;
          padding: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          cursor: pointer;
          text-align: left;
        }

        .faq-question span:first-child {
          font-size: 1.08rem;
          font-weight: 600;
          line-height: 1.7;
          color: #111827;
        }

        .faq-icon {
          width: 42px;
          height: 42px;
          min-width: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          transition: all 0.35s ease;
        }

        .faq-icon.rotate {
          transform: rotate(45deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition:
            max-height 0.45s ease,
            padding 0.4s ease;
        }

        .faq-answer.show {
          max-height: 500px;
          padding: 0 30px 30px;
        }

        .faq-answer p {
          font-size: 1rem;
          color: #4b5563;
          line-height: 1.9;
          margin: 0;
        }
          .faq-list {
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.faq-list li {
  color: #4b5563;
  line-height: 1.8;
  font-size: 1rem;
}

.faq-list li::marker {
  color: #7BAF8A;
}

        /* ========================= */
        /* TABLET */
        /* ========================= */

        @media (max-width: 768px) {
          .faq-section {
            padding: 80px 16px;
          }

          .faq-header {
            margin-bottom: 45px;
          }

          .faq-question {
            padding: 24px 20px;
          }

          .faq-answer.show {
            padding: 0 20px 24px;
          }

          .faq-question span:first-child {
            font-size: 1rem;
          }
        }

        /* ========================= */
        /* MOBILE */
        /* ========================= */

        @media (max-width: 480px) {
          .faq-section {
            padding: 65px 12px;
          }

          .faq-header p {
            font-size: 0.95rem;
          }

          .faq-question {
            padding: 20px 16px;
            gap: 14px;
          }

          .faq-question span:first-child {
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .faq-answer.show {
            padding: 0 16px 20px;
          }

          .faq-answer p {
            font-size: 0.92rem;
          }

          .faq-icon {
            width: 36px;
            height: 36px;
            min-width: 36px;
            font-size: 1.2rem;
          }
        }
          @media (max-width: 480px) {
  .faq-list li {
    font-size: 0.92rem;
  }
}
      `}</style>
    </section>
  );
};

export default memo(Questions);