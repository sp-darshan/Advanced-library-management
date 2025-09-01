import React, { useState, useEffect } from "react";
import axios from "axios";
import "./reg.css";

function Register({ setShowRegister, setShowLogin }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
    password: "",
    membershipDate: "",
    memberType: "Student",
    department: "",
    studentId: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log("Form Data Updated:", formData); // Log form data whenever it updates
  }, [formData]); // Log whenever form data changes

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (event) => {
    event.preventDefault();
  
    console.log("Form Data before submission:", formData);
    alert("Submitting registration data: " + JSON.stringify(formData));
  
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        first_name: formData.firstName,
        last_name: formData.lastName,
        address: formData.address,
        phone_number: formData.phoneNumber,
        email: formData.email,
        password: formData.password,
        membership_date: formData.membershipDate,
        member_type: formData.memberType,
        department: formData.department,
        student_id_number: formData.studentId || null,
      });
      console.log("✅ Registration success:", response.data);
      setShowRegister(false);
      setErrorMessage("");
    } catch (error) {
      // Log the full error object for better debugging
      console.error("❌ Registration failed:", error);
  
      // Check if the error has a response and display the detailed message
      const message = error.response?.data?.error || error.message || "Registration failed.";
      setErrorMessage(message);
  
      // Show the detailed message in the alert
      alert("❌ Registration failed: " + message);
    }
  };
  
  return (
    <div className="auth-container">
      <div className="auth-box">
        <button className="close-btn" onClick={() => setShowRegister(false)}>
          ✖
        </button>
        <h2>Register</h2>
        <form className="reg-form" onSubmit={handleRegister}>
          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Membership Date</label>
            <input
              type="date"
              name="membershipDate"
              value={formData.membershipDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Member Type</label>
            <select name="memberType" value={formData.memberType} onChange={handleChange}>
              <option value="Student">Student</option>
              <option value="Faculty">Faculty</option>
            </select>
          </div>
          <div className="input-group">
            <label>Department</label>
            <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
            />
            </div>
          {formData.memberType === "Student" && (
            <div className="input-group">
              <label>Student ID</label>
              <input
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                required
              />
            </div>
          )}
          {formData.memberType === "Faculty" && (
            <div className="input-group">
              <label>Faculty ID</label>
              <input
                type="text"
                name="facultyId"
                value={formData.facultyId}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <button type="submit" className="register-btn">Register</button>
        </form>
        {errorMessage && <p className="error">{errorMessage}</p>}

        <p className="switch-form">
          Already have an account?{" "}
          <a
            href="#"
            onClick={() => {
              setShowRegister(false);
              setShowLogin(true);
            }}
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
