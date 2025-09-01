import React from "react";
import "./Intro.css";

const About = () => {
  return (
    <section className="info-section">
      <h2>About</h2>
      <p>
        Our Library Management System is designed to simplify the administration of libraries, ensuring smooth operations and an enhanced experience for users.
      </p>
      <ul>
        <li>Manage book collections efficiently with detailed categorization and tracking.</li>
        <li>Facilitate user account creation and access to digital catalogs.</li>
        <li>Streamline lending processes with automated due date tracking.</li>
        <li>Generate insights with comprehensive activity reports.</li>
        <li>Enable quick book searches with robust filters and recommendations.</li>
        <li>Notify users of overdue items with automated alerts.</li>
      </ul>
    </section>
  );
};

export default About;
