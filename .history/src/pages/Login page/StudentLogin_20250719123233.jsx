import React from 'react';
import './StudentLogin.css';
import { Link } from 'react-router-dom';

import logo from '../assets/klu-logo.jpg'; // adjust if logo is in another location

const StudentLogin = () => {
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
        <form>
          <label>Register Number</label>
          <input type="text" placeholder="e.g: 9922008104" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <button type="submit">Sign In</button>
        </form>

        <p className="switch-link">
  Are you an admin? <Link to="/admin">Go to Admin Portal</Link>
</p>

      </div>

      <footer>© 2025 KARE Coding Platform. All rights reserved.</footer>
    </div>
  );
};

export default StudentLogin;
