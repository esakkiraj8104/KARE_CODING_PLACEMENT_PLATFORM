import React, { useEffect, useState } from 'react';
import './StudentDashboard.css';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Fetch user details from localStorage or backend
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('studentUser'));
    if (!loggedUser) {
      navigate('/studentlogin'); // redirect if not logged in
    } else {
      setUser(loggedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('studentUser');
    navigate('/studentlogin');
  };

  const handleChangePassword = () => {
    alert("Password change feature coming soon (or link to password reset UI)");
  };

  return (
    <>
      <Navbar />
      <div className="student-dashboard">
        <h1>Welcome to Your Dashboard</h1>
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

          {/* 👉 Profile Card */}
          <div className="dashboard-card profile-card">
            <h2>👤 Profile</h2>
            {user && (
              <div>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <button onClick={handleChangePassword} className="btn btn-change">Change Password</button>
                <button onClick={handleLogout} className="btn btn-logout">Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;