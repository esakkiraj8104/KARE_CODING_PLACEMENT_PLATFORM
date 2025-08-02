import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'; // ✅ Import Navbar
import '../Home/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ✅ Navbar */}
      <Navbar />

      {/* Main Body */}
      <div className="home-container">
        {/* Header Section */}
        <header className="home-header">
          <h1 className="home-title">KARE CODING PLATFORM</h1>
        </header>

        {/* Subtitle */}
        <p className="home-subtitle">
          AI-Powered Placement Training & Assessment System
        </p>
        <p className="home-subtitle-lines">
          Prepare for your dream placement with our comprehensive assessment platform featuring MCQ tests, coding challenges, and personalized AI feedback.
        </p>

        {/* Buttons */}
        <div className="home-buttons">
          <button onClick={() => navigate('/student')} className="btn btn-student">
            Student Dashboard
          </button>
          <button onClick={() => navigate('/admin')} className="btn btn-admin">
            Admin Dashboard
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
