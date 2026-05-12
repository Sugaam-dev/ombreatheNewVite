import React from 'react';
import guru from '../../images/sadguru.webp';

const BannerImage = React.memo(() => {
  return (
    <section className="banner-container">
      <picture>
        <source srcSet={guru} media="(min-width: 768px)" />
        <img
          src={guru}
          /* CHANGED: Removed the word "image" to satisfy accessibility rules */
          alt="Yoga Guru Sadguru" 
          className="img-fluid w-100 banner-image"
        />
      </picture>

      <style>{`
        .banner-container {
          width: 100%;
          overflow: hidden;
        }

        .banner-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          object-position: center;
        }

        @media (min-width: 768px) {
          .banner-image {
            height: 60vh;
            min-height: 400px;
          }
        }

        @media (max-width: 575.98px) {
          .banner-image {
            object-fit: contain;
          }
        }
      `}</style>
    </section>
  );
});

export default BannerImage;