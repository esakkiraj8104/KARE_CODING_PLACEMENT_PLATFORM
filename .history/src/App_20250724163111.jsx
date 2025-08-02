import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import StudentDashboard from './pages/StudentDashboard/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/Login page/AdminLogin';
import StudentLogin from './pages/Login page/StudentLogin';
import CodingAssessment from './pages/CodingAssessment/CodingAssessment';
import PracticePage from './pages/PracticePage/PracticePage';
import ChangePassword from './pages/StudentDashboard/ChangePassword'; // ✅ You need this component

function App() {
  return (
    <Router>
      <div className="app min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/assessment" element={<CodingAssessment />} />
          <Route path="/login/student" element={<StudentLogin />} />
          <Route path="/login/admin" element={<AdminLogin />} />
          <Route path="/student/practice" element={<PracticePage />} />
          <Route path="/change-password" element={<ChangePassword />} /> {/* ✅ Added route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
