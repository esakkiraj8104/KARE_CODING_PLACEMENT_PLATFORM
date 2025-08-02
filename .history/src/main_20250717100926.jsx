import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import StudentPortal from './pages/StudentDashboard.jsx';
import AdminPortal from './pages/AdminDashboard.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/student-portal" element={<StudentPortal />} />
      <Route path="/admin-portal" element={<AdminPortal />} />
    </Routes>
  </BrowserRouter>
);
