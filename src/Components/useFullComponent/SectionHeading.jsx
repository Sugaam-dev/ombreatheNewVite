import React from "react";

const SectionHeading = ({
  title,
  highlight,
  subtitle,
  highlightColor = "#4a7c68",
  textColor = "#1e1e1c",
}) => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=DM+Sans:wght@300;400&display=swap');

          .section-heading {
            text-align: center;
            margin-bottom: .5rem;
            margin-top: 1rem;
            padding: 0 10px;
          }

          .section-heading h2 {
            font-family: 'Cormorant Garamond', Georgia, serif;
            font-size: clamp(38px, 6vw, 64px);
            font-weight: 300;
            line-height: 1.1;
            margin-bottom: 0.5rem;
          }

          .section-heading h2 em {
            font-style: italic;
            font-weight: 400;
          }

          .section-heading p {
            font-family: 'DM Sans', sans-serif;
            font-size: 15px;
            font-weight: 300;
            color: #8f877f;
            letter-spacing: 0.03em;
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.7;
          }

          .section-heading-line {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-top: .7rem;
          }

          .section-heading-line span {
            width: 60px;
            height: 1px;
            background: linear-gradient(90deg, transparent, #7aad97);
          }

          .section-heading-line span:last-child {
            background: linear-gradient(90deg, #7aad97, transparent);
          }

          .section-heading-line i {
            color: #7aad97;
            font-size: 14px;
            font-style: normal;
          }

          @media (max-width: 768px) {
            .section-heading h2 {
              font-size: 42px;
            }

            .section-heading p {
              font-size: 14px;
            }

            .section-heading-line span {
              width: 40px;
            }
          }
        `}
      </style>

      <div className="section-heading">
        <h2 style={{ color: textColor }}>
          {title}{" "}
          <em style={{ color: highlightColor }}>
            {highlight}
          </em>
        </h2>

        {subtitle && <p>{subtitle}</p>}

        <div className="section-heading-line">
          <span />
          <i>&#10022;</i>
          <span />
        </div>
      </div>
    </>
  );
};

export default SectionHeading;