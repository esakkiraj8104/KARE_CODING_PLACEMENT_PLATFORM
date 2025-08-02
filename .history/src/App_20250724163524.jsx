import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CodingAssessment from './pages/CodingAssessment/CodingAssessment';
import Home from './pages/Home/Home';
import StudentDashboard from './pages/StudentDashboard/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/Login page/AdminLogin';
import StudentLogin from './pages/Login page/StudentLogin';
import PracticePage from "./pages/PracticePage/PracticePage";
import ChangePassword 
function App() {
  return (
    <div className="app min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/assessment" element={<CodingAssessment />} /> {/* ✅ new route */}
        <Route path="/login/student" element={<StudentLogin />} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/student/practice" element={<PracticePage />} />
        
      </Routes>
    </div>
  );
}

export default App;
