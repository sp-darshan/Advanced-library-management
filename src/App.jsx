import React, { useState, useRef } from "react";
import Navbar from "./main/pro";
import Hero from "./main/mc";
import Intro from "./intro/Intro";
import About from "./intro/About";
import Login from "./login/login"; // Import Login component
import Register from "./login/reg"; // Import Register component

function App() {
  const [showLogin, setShowLogin] = useState(false); // State to show the login form
  const [showRegister, setShowRegister] = useState(false); // State to show the register form

  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToHome = (event) => {
    event.preventDefault();
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = (event) => {
    event.preventDefault();
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar
        scrollToHome={scrollToHome}
        scrollToAbout={scrollToAbout}
        setShowLogin={setShowLogin}
      />
      <Hero />

      {/* Display login or register form based on state */}
      {showLogin && !showRegister && (
        <Login 
          setShowRegister={setShowRegister} 
          setShowLogin={setShowLogin} 
        />
      )}
      {showRegister && (
        <Register 
          setShowRegister={setShowRegister} 
          setShowLogin={setShowLogin} 
        />
      )}

      <div ref={homeRef}>
        <Intro />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
    </div>
  );
}

export default App;
