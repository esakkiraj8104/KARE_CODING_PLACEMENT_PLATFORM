import { useNavigate } from 'react-router-dom';
import KluLogo from '../../assets/klu-logo.jpeg';
import '../Home/Home.cssHome';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <img src={KluLogo} alt="KARE Logo" className="home-logo" />
        <h1 className="home-title">KARE CODING PLATFORM</h1>
      </header>

      {/* Subtitle */}
      <p className="home-subtitle">
        AI-Powered Placement Training & Assessment System
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
  );
};

export default Home;
