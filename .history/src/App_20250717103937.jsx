import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import StudentPortal from './pages/StudentPortal/StudentPortal';
import AdminPortal from './pages/AdminPortal/AdminPortal';

function App() {
  return (
    <div className="app min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<StudentPortal />} />
        <Route path="/admin" element={<AdminPortal />} />
      </Routes>
    </div>
  );
}

export default App;
