import React from 'react';
import './StudentDashboard.css';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import 

const StudentDashboard = () => {
  const navigate = useNavigate();

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
          <div className="dashboard-card" onClick={() => navigate('/student/assessment')}>
            <h2>📝 CODING & MCQ Assessment</h2>
            <p>Attempt Coding & multiple-choice questions</p>
            <button onClick={() => navigate('/assessment')} className="btn btn-student">
  Explore Assessments
</button>

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
