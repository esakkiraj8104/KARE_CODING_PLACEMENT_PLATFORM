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
      // Redirect if no user found
      navigate('/login/student');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('studentUser');
    navigate('/login');
  };

  const handleChangePassword = () => {
    navigate('/change-password'); // or open modal if you prefer
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
