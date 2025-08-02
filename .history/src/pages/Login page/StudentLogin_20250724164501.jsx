// pages/Login page/StudentLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; // Adjust the path if needed

const StudentLogin = () => {
  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleStudentLogin = async (e) => {
    e.preventDefault();
    const email = `${regNo}@klu.ac.in`;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save to localStorage so StudentDashboard can check login status
      localStorage.setItem('studentUser', JSON.stringify({
        email: user.email,
        name: regNo,
      }));

      navigate('/student');
    } catch (err) {
      setError('Invalid Register Number or Password');
      console.error('Login failed:', err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleStudentLogin} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Student Login</h2>

        <input
          type="text"
          placeholder="Register Number"
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded mb-4"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded mb-4"
          required
        />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default StudentLogin;
