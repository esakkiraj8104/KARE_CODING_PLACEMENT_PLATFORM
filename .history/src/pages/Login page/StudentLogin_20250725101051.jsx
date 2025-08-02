// pages/StudentLogin/StudentLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import './StudentLogin.css';
import logo from '../../assets/KLU_LOGO_1.png';

const StudentLogin = () => {
  const navigate = useNavigate();
  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleStudentLogin = async (e) => {
    e.preventDefault();
    const email = `${regNo}@klu.ac.in`;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/student'); // successful login -> dashboard
    } catch (error) {
      setError('Invalid Register Number or Password');
    }
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
          <input
            type="text"
            placeholder="e.g: 9922001234"
            required
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Log In</button>
        </form>
      </div>

      <footer>© 2025 KARE Coding Platform. All rights reserved.</footer>
    </div>
  );
};

export default StudentLogin;
