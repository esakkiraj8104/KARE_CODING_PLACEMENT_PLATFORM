import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Get email from Firestore using regNo
      const docSnap = await getDoc(doc(db, 'students', regNo));
      if (!docSnap.exists()) throw new Error('Student not found');
      
      const { email } = docSnap.data();

      // Sign in with email & password
      const userCred = await signInWithEmailAndPassword(auth, email, password);

      if (!userCred.user.emailVerified) {
        alert('Please verify your email before login.');
        return;
      }

      navigate('/student'); // Redirect to student dashboard
    } catch (error) {
      console.error(error);
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="Register Number" value={regNo} onChange={(e) => setRegNo(e.target.value)} required />
      <input type="password" placeholder="Password (default: Reg No)" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default StudentLogin;
