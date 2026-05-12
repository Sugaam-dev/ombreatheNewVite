import React from 'react';
import "./Styles/whychoose.css";
import { useNavigate } from 'react-router-dom';
import SectionHeading from '../useFullComponent/SectionHeading';

import {
  Award,
  Laptop,
  GraduationCap,
  BadgeCheck,
  Sparkles,
  Leaf,
  ArrowRight
} from "lucide-react";

const WhyChoose = () => {

  const navigate = useNavigate();

  const navi = () => {
    navigate('/contact');
  };

  const credentials = [
    {
      icon: <Award />,
      title: "10+ Years Of Experience",
      description:
        "With over 10 years of teaching experience, Ombreathe offers authentic training in Himalayan Yoga, Ashtanga, Vinyasa, Aerial Yoga, Hasta Yoga, and more.",
    },

    {
      icon: <Laptop />,
      title: "Online Courses",
      description:
        "Learn authentic yoga from anywhere with expertly designed online courses covering meditation, pranayama, Hatha, Vinyasa and more.",
    },

    {
      icon: <GraduationCap />,
      title: "6,000+ Teaching Hours",
      description:
        "Our experienced teachers have guided thousands of hours of yoga trainings, retreats, workshops and transformational programs.",
    },

    {
      icon: <BadgeCheck />,
      title: "Yoga Alliance Certified",
      description:
        "All our teacher training programs are internationally recognized and certified by Yoga Alliance with global credibility.",
    },

    {
      icon: <Sparkles />,
      title: "Special Workshops",
      description:
        "Corporate yoga, mindfulness, pranayama, sound healing and stress relief workshops designed for modern lifestyles.",
    },

    {
      icon: <Leaf />,
      title: "Holistic Approach",
      description:
        "We integrate physical, emotional, spiritual and mental well-being through authentic yogic practices and mindful living.",
    },
  ];

  return (
    <>
      <div className="yogaschool">

        <div className="yogaa">

          <SectionHeading
            title="Why"
            highlight="Choose Us"
            subtitle="Transform your body, mind & soul through authentic yoga teachings"
            highlightColor="#4a7c68"
            textColor="#1e1e1c"
          />

        </div>

      </div>

      {/* CREDENTIAL SECTION */}

      <div className="soulfit-credentials-section">

        <div className="soulfit-credentials-container">

          <div className="soulfit-credentials-grid">

            {credentials.map((credential, index) => (

              <div
                key={index}
                className="soulfit-credential-card"
              >

                {/* TOP */}

                <div className="soulfit-card-top">

                  <div className="soulfit-icon-wrapper">

                    <div className="soulfit-icon-bg"></div>

                    <div className="soulfit-icon-container">

                      {credential.icon}

                    </div>

                  </div>


                </div>

                {/* CONTENT */}

                <div className="soulfit-card-content">

                  <h3>{credential.title}</h3>

                  <p>{credential.description}</p>

                </div>

                {/* BOTTOM LINE */}

                <div className="soulfit-card-line"></div>

              </div>

            ))}

          </div>

          {/* CTA */}

          <div className="soulfit-cta-section">

            <div className="soulfit-cta-card">

              <div className="soulfit-cta-badge">
                Begin Your Yoga Journey
              </div>

              <h2>
                Experience Authentic Yoga Transformation
              </h2>

              <p>
                Join thousands of students worldwide who
                transformed their body, mind and spirit
                through Ombreathe’s immersive yoga programs.
              </p>

              <button
                className="soulfit-cta-button"
                onClick={navi}
              >

                Start Your Practice

                <ArrowRight size={18} />

              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default WhyChoose;