// File: src/pages/LoginPage/StudentLogin.jsx
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
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user info to localStorage
      localStorage.setItem(
        'studentUser',
        JSON.stringify({ name: regNo.toUpperCase(), email: user.email })
      );

      navigate('/student');
    } catch (err) {
      setError('Invalid Register Number or Password');
      console.error('Login failed:', err.message);
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

// File: src/pages/Student/StudentDashboard.jsx
import React, { useEffect, useState } from 'react';
import './StudentDashboard.css';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('studentUser'));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate('/login/student');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('studentUser');
    navigate('/login/student');
  };

  const handleChangePassword = () => {
    navigate('/change-password');
  };

  return (
    <>
      <Navbar />
      <div className="student-dashboard">
        <h1>Welcome, {user.name}</h1>
        <p>{user.email}</p>

        <div className="profile-section">
          <button className="btn" onClick={handleChangePassword}>
            🔒 Change Password
          </button>
          <button className="btn btn-logout" onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>

        <p>Select an action below to continue</p>
        <div className="dashboard-actions">
          <div className="dashboard-card" onClick={() => navigate('/student/practice')}>
            <h2>💻 Coding Practice</h2>
            <p>Practice coding problems</p>
          </div>

          <div className="dashboard-card" onClick={() => navigate('/assessment')}>
            <h2>📝 CODING & MCQ Assessment</h2>
            <p>Attempt coding and multiple-choice questions</p>
            <button className="btn btn-student">Explore Assessments</button>
          </div>

          <div className="dashboard-card" onClick={() => navigate('/student/results')}>
            <h2>📊 View Results</h2>
            <p>Track your progress and performance</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
