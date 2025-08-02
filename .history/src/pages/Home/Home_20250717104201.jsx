import React from 'react';
import KluLogo from '../../assets/klu-logo.jpeg'; // adjust path if needed

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      {/* Logo */}
      <img src={KluLogo} alt="KARE Logo" className="w-28 h-28 mb-4" />

      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-700 mb-2">
        KARE CODING PLATFORM
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-600 mb-6">
        AI-Powered Placement Training & Assessment System
      </p>

<button
  onClick={() => navigate('/student')}
  className="px-6 py-3 bg-blue-600 text-white rounded-lg"
>
  Student Dashboard
</button>
<button
  onClick={() => navigate('/admin')}
  className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg"
>
  Admin Dashboard
</button>

  );
};

export default Home;
