import { useNavigate } from 'react-router-dom';
import KluLogo from '../../assets/Logo.png';
import '../Home/Home.css';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home-container">
        <header className="home-header">
          <img src={KluLogo} alt="KARE Logo" className="home-logo" />
          <p></p>
          <h1 className="home-title">KARE ASSESSMENT & CODING PLATFORM</h1>
        </header>

        <p className="home-subtitle">
          AI-Powered Placement Training & Assessment System
        </p>
        <p className="home-subtitle-lines">
          Prepare for your dream placement with our comprehensive assessment platform featuring MCQ tests, coding challenges, and personalized AI feedback.
        </p>

        <div className="home-buttons">
          <button onClick={() => navigate('/login/student')} className="btn btn-student">
            Student Dashboard
          </button>
          <button onClick={() => navigate('/login/admin')} className="btn btn-admin">
            Admin Dashboard
          </button>
        </div>

        <section className="placement-section">
          <h2 className="placement-title">Complete Placement Preparation Solution</h2>
          <p className="placement-subtitle">
            Our platform provides everything you need to ace your placement interviews
          </p>

          <div className="placement-grid">
            <div className="placement-card">
              <div className="icon blue">📘</div>
              <h3>MCQ Assessment</h3>
              <ul>
                <li>Aptitude & Logical Reasoning</li>
                <li>Technical Knowledge Tests</li>
                <li>Timed Assessment Environment</li>
                <li>Instant Score & Analysis</li>
              </ul>
            </div>

            <div className="placement-card">
              <div className="icon green">💻</div>
              <h3>Coding Challenges</h3>
              <ul>
                <li>Multi-language Support</li>
                <li>Real-time Code Compilation</li>
                <li>Algorithm & Data Structure Problems</li>
                <li>Performance Analysis</li>
              </ul>
            </div>

            <div className="placement-card">
              <div className="icon yellow">🧠</div>
              <h3>AI-Powered Insights</h3>
              <ul>
                <li>Personalized Recommendations</li>
                <li>Performance Analytics</li>
                <li>Strength & Weakness Analysis</li>
                <li>Learning Path Suggestions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h3 className="features-title">Why Use KARE Coding Platform?</h3>
          <div className="features-grid">
            <div className="feature-box">🧠 Smart MCQ Assessments</div>
            <div className="feature-box">💻 Live Coding Practice</div>
            <div className="feature-box">📊 Batch-wise Tests</div>
            <div className="feature-box">🤖 AI-Powered Evaluation</div>
            <div className="feature-box">🛠️ Admin Question Control</div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
