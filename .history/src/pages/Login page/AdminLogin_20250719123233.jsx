import React from 'react';
import './AdminLogin.css';
import { Link } from 'react-router-dom';
import logo from '../assets/klu-logo.jpg'; // update path to your logo

const AdminLogin = () => {
  return (
    <div className="admin-container">
      <div className="admin-header">
        <img src={logo} alt="KARE Logo" className="admin-logo" />
        <div>
          <h1>KARE CODING PLATFORM</h1>
          <p>Administrator Portal</p>
          <span className="admin-badge">Admin Access Only</span>
        </div>
      </div>

      <div className="login-card">
        <h2>Sign In to Admin Panel</h2>
        <form>
          <label>Email Address</label>
          <input type="email" placeholder="admin@Klu.ac.in" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <button type="submit">Sign In</button>
        </form>

        <p className="switch-link">
  Not an admin? <Link to="/student">Go to Student Portal</Link>
  </p>
      </div>

      <footer>© 2025 KARE Coding Platform. All rights reserved.</footer>
    </div>
  );
};

export default AdminLogin;
