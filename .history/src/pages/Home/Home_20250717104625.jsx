import { useNavigate } from 'react-router-dom';
import KluLogo from '../../assets/klu-logo.jpeg'; // Replace with your actual logo path

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 px-4 text-center">
      {/* Logo */}
      <img
        src={KluLogo}
        alt="KARE Logo"
        className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg mb-6"
      />

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-3 drop-shadow">
        KARE CODING PLATFORM
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-10">
        An AI-Powered Placement Training & Assessment System for Students to Learn, Code, and Grow.
      </p>

      {/* Portal Buttons */}
      <div className="flex flex-col sm:flex-row gap-5">
        <button
          onClick={() => navigate('/student')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg shadow-md transition duration-300"
        >
          Student Dashboard
        </button>
        <button
          onClick={() => navigate('/admin')}
          className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-8 py-3 rounded-lg text-lg shadow-md transition duration-300"
        >
          Admin Dashboard
        </button>
      </div>
    </div>
  );
};

export default Home;
