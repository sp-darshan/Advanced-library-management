import React from "react";
import "./pro.css";

const Navbar = ({ scrollToHome, scrollToAbout, setShowLogin, user }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setShowLogin(false);  // Close login form
    window.location.reload();  // Reload to reset state and remove user info
  };

  return (
    <header>
      <nav>
        <div className="logo">A L M</div>
        <ul className="nav-links">
          <li><a href="#" onClick={scrollToHome}>Home</a></li>
          <li><a href="#" onClick={scrollToAbout}>About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        {!user ? (
          <button onClick={() => setShowLogin(true)} className="login-btn">Login</button>
        ) : (
          <div className="profile-section">
            <img src={user.profilePicture || "/default-avatar.png"} alt="Profile" />
            <span>{user.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
