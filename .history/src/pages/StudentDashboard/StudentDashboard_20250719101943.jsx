import React from 'react';
import './StudentDashboard.css';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="student-dashboard">
        <h1>Welcome to Your Dashboard</h1>
        <p>Select an action below to continue</p>

        <div className="dashboard-actions">
          <div className="dashboard-card" onClick={() => navigate('/student/assessment')}>
            <h2>📝 CMCQ Assessment</h2>
            <p>Attempt multiple-choice questions</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate('/student/practice')}>
            <h2>💻 Coding Practice</h2>
            <p>Practice coding problems</p>
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
