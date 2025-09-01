import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./nav.css";

function Navbar2() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = () => {
      const userData = localStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData)); 
      } else {
        navigate("/login");  
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user"); 
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">
          <h2>A L M</h2>
        </div>
        <div className="profile">
          {user ? (
            <>
              <img src={user.profilePicture || "/default-avatar.png"} alt="Profile" className="profile-img" />
              <span className="profile-name">{user.firstName} {user.lastName}</span>
              <span className="profile-email">{user.email}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <span>Loading...</span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
