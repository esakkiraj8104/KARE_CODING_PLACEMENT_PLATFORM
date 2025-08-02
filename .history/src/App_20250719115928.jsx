import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Co
import Home from './pages/Home/Home';
import StudentDashboard from './pages/StudentDashboard/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <div className="app min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/assessment" element={<CodingAssessment />} /> {/* ✅ new route */}
      </Routes>
    </div>
  );
}

export default App;
