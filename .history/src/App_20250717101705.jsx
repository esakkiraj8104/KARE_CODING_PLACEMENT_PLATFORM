import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-white p-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-2">KARE CODING PLATFORM</h1>
      <p className="text-lg text-gray-600 mb-6">
        AI-Powered Placement Training & Assessment System
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => navigate('/student')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Student Portal
        </button>
        <button
          onClick={() => navigate('/admin')}
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg"
        >
          Admin Portal
        </button>
      </div>
    </div>
  );
}

export default App;
