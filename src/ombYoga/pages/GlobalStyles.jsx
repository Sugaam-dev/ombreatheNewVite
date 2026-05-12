import React from "react";

const GlobalStyles = () => {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@300;400;500;600&display=swap');

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      :root {
        --navy: #1a2456;
        --violet: #5B4FCF;
        --gold: #C8964A;
        --sage: #7BAF8A;
        --cream: #FAF8F4;
        --cream-dark: #F0EDE7;
        --stone: #8A8070;
        --white: #ffffff;

        --radius-sm: 8px;
        --radius-md: 16px;
        --radius-lg: 28px;

        --shadow-sm: 0 2px 12px rgba(0,0,0,0.06);
        --shadow-md: 0 8px 30px rgba(0,0,0,0.12);
        --shadow-lg: 0 20px 60px rgba(0,0,0,0.18);

        --font-display: 'Cormorant Garamond', serif;
        --font-body: 'DM Sans', sans-serif;
      }

      body {
        font-family: var(--font-body);
     
        color: #1c1a16;
      }

      .omb-root {
        overflow-x: hidden;
      }

      /* HEADINGS */
      .display-heading {
        font-family: var(--font-display);
        font-weight: 300;
        color: var(--navy);
        line-height: 1.2;
      }

      .display-heading em {
        color: var(--violet);
        font-style: italic;
      }

      /* TEXT */
      .body-text {
        color: var(--stone);
        line-height: 1.7;
      }

      /* SECTION LABEL */
      .section-eyebrow {
        font-size: 0.7rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: var(--gold);
        margin-bottom: 10px;
      }

      /* BUTTON */
      .btn-primary-omb {
        padding: 14px 30px;
        border-radius: 50px;
        background: var(--navy);
        color: white;
        border: none;
        cursor: pointer;
        transition: 0.3s;
      }

      .btn-primary-omb:hover {
        background: var(--violet);
      }

      /* CARD */
      .card-omb {
        background: white;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        transition: 0.3s;
      }

      .card-omb:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-md);
      }
    `}</style>
  );
};

export default GlobalStyles;