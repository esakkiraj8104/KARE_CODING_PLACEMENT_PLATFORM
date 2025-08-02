import { useNavigate } from 'react-router-dom';
import KluLogo from '../../assets/klu-logo.jpeg';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img src={KluLogo} alt="KARE Logo" className="logo" />

      <h1 className="title">KARE CODING PLATFORM</h1>

      <p className="subtitle">
        AI-Powered Placement Training & Assessment System to Learn, Practice, and Get Placed.
      </p>

      <div className="button-group">
        <button onClick={() => navigate('/student')} className="btn btn-student">
          Student Dashboard
        </button>
        <button onClick={() => navigate('/admin')} className="btn btn-admin">
          Admin Dashboard
        </button>
      </div>
    </div>
  );
}

export default Home;
