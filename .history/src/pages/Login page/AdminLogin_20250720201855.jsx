// File: src/pages/Login Page/AdminLogin.jsx
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AdminLogin.css';
import logo from '../../assets/KARELOGO';

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    // You can add real validation logic here
    navigate('/admin');
  };

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
        <form onSubmit={handleAdminLogin}>
          <label>Email Address</label>
          <input type="email" placeholder="admin@klu.ac.in" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <button type="submit">Sign In</button>
        </form>

        <p className="switch-link">
          Not an admin? <Link to="/login/student">Go to Student Portal</Link>
        </p>
      </div>

      <footer>© 2025 KARE Coding Platform. All rights reserved.</footer>
    </div>
  );
};

export default AdminLogin;