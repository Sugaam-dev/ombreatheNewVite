
const TermsAndConditions = () => {
  const styles = {
    container: {
      maxWidth: "1000px",
      margin: "40px auto",
      padding: "30px",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.8",
      color: "#333",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    heading: {
      textAlign: "center",
      color: "#2c7a7b",
      marginBottom: "10px",
    },
    subHeading: {
      color: "#2c7a7b",
      marginTop: "25px",
      marginBottom: "10px",
    },
    paragraph: {
      marginBottom: "15px",
    },
    list: {
      paddingLeft: "20px",
    },
    footer: {
      marginTop: "30px",
      textAlign: "center",
      fontSize: "14px",
      color: "#666",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Terms & Conditions</h1>

      <p style={styles.paragraph}>
        Welcome to Ombreathe Yoga. By accessing and using our website,
        services, courses, retreats, and training programs, you agree to
        comply with and be bound by the following Terms and Conditions.
      </p>

      <h2 style={styles.subHeading}>1. Acceptance of Terms</h2>
      <p style={styles.paragraph}>
        By using this website, you acknowledge that you have read,
        understood, and agreed to these Terms and Conditions. If you do
        not agree, please do not use our website or services.
      </p>

      <h2 style={styles.subHeading}>2. Eligibility</h2>
      <p style={styles.paragraph}>
        Users must be at least 18 years old to register for teacher
        training programs. Minors may participate in certain courses
        with parental or guardian consent.
      </p>

      <h2 style={styles.subHeading}>3. Health Disclaimer</h2>
      <p style={styles.paragraph}>
        Yoga involves physical activity. You are responsible for
        consulting a healthcare professional before participating in
        any classes, workshops, or training programs offered through
        our website.
      </p>

      <h2 style={styles.subHeading}>4. Payments & Refunds</h2>
      <ul style={styles.list}>
        <li>All fees must be paid in full before course commencement.</li>
        <li>Payments are processed through secure third-party gateways.</li>
        <li>
          Refund requests will be handled according to the specific
          refund policy applicable to the course or retreat booked.
        </li>
      </ul>

      <h2 style={styles.subHeading}>5. Intellectual Property</h2>
      <p style={styles.paragraph}>
        All website content including text, videos, logos, images,
        course materials, and designs are the intellectual property
        of Ombreathe Yoga and may not be copied, reproduced, or
        distributed without written permission.
      </p>

      <h2 style={styles.subHeading}>6. User Conduct</h2>
      <ul style={styles.list}>
        <li>Provide accurate registration information.</li>
        <li>Respect instructors, staff, and fellow participants.</li>
        <li>Do not misuse website content or services.</li>
        <li>Do not engage in unlawful or harmful activities.</li>
      </ul>

      <h2 style={styles.subHeading}>7. Limitation of Liability</h2>
      <p style={styles.paragraph}>
        Ombreathe Yoga shall not be liable for any injury, loss, damage,
        or expense arising from participation in our programs or use
        of our website, except where required by applicable law.
      </p>

      <h2 style={styles.subHeading}>8. Privacy</h2>
      <p style={styles.paragraph}>
        Your personal information is handled in accordance with our
        Privacy Policy. By using our website, you consent to the
        collection and use of information as described therein.
      </p>

      <h2 style={styles.subHeading}>9. Changes to Terms</h2>
      <p style={styles.paragraph}>
        We reserve the right to update these Terms and Conditions at
        any time. Continued use of the website after changes are posted
        constitutes acceptance of the revised terms.
      </p>

      {/* <h2 style={styles.subHeading}>10. Contact Information</h2>
      <p style={styles.paragraph}>
        For questions regarding these Terms and Conditions, please
        contact us at:
      </p>

      <p style={styles.paragraph}>
        <strong>Email:</strong> info@Ombreatheyoga.com <br />
        <strong>Phone:</strong> +91 XXXXX XXXXX <br />
        <strong>Address:</strong> Rishikesh, Uttarakhand, India
      </p>

      <div style={styles.footer}>
        Last Updated: June 2026
      </div> */}
    </div>
  );
};

export default TermsAndConditions;