import React, { useEffect, useState } from 'react';
import './StudentDashboard.css';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const auth = getAuth();
 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/studentlogin'); // redirect if not logged in
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

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
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
