import React, { useState } from "react";
import axios from "axios";
import "./auth.css";
import { useNavigate } from "react-router-dom";

function Login({ setShowRegister, setShowLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMesage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", { email, password });
      const { token ,user} = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      alert("sucess");
      navigate("/dashboard");
      setErrorMessage("");  // Clear any previous error messages
    } catch (error) {
      setErrorMessage(error.response?.data?.error || "Login failed.");
    }
  };
  

  return (
    <div className="auth-container1">
      <div className="auth-form1">
        <button className="close-btn1" onClick={() => setShowLogin(false)}>&times;</button>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button>
        </form>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <div className="toggle-btn">
          <p>Don't have an account? <a href="#" onClick={() => setShowRegister(true)}>Register here</a></p>
        </div>
      </div>
    </div>
  );
}
export default Login;