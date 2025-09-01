import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <section className="info-section">
      <h2>Home</h2>
      <p>Efficiently manage your library's collection and provide seamless access to resources.</p>
      <ul>
        <li>Track and manage book inventory with ease.</li>
        <li>Streamline borrowing and returning processes.</li>
        <li>Generate detailed reports on library activities.</li>
        <li>Enable user registration and account management.</li>
        <li>Monitor overdue books and send automated reminders.</li>
        <li>Search and categorize books for faster access.</li>
        <li>Enhance user experience with a digital catalog.</li>
      </ul>
    </section>
  );
};

export default Intro;
