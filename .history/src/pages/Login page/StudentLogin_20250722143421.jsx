// File: src/pages/Login Page/StudentLogin.jsx
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './StudentLogin.css';
import logo from '../../assets/KLU_LOGO_1.png';
import StudentSignup from './pages/Signup/StudentSign';
const StudentLogin = () => {
  const navigate = useNavigate();

  const handleStudentLogin = (e) => {
    e.preventDefault();
    // You can add real validation logic here
    navigate('/student');
  };

  return (
    <div className="student-container">
      <div className="student-header">
        <img src={logo} alt="KARE Logo" className="student-logo" />
        <div>
          <h1>KARE CODING PLATFORM</h1>
          <p>Student Portal</p>
          <span className="student-badge">Student Access Only</span>
        </div>
      </div>

      <div className="login-card">
        <h2>Sign In to Student Panel</h2>
        <form onSubmit={handleStudentLogin}>
          <label>Register Number</label>
          <input type="text" placeholder="e.g: 9922008104" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <button type="submit">Sign In</button>
        </form>

        <p className="switch-link">
          Don't have an account? <Link to="signup/student">Sign Up</Link>

        </p>
      </div>

      <footer>© 2025 KARE Coding Platform. All rights reserved.</footer>
    </div>
  );
};

export default StudentLogin;
