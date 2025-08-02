import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '';

import logo from '../../assets/KLU_LOGO_1.png';

const StudentSignup = () => {
  const [form, setForm] = useState({
    name: '',
    regNo: '',
    email: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, regNo, email } = form;
    const password = regNo;

    try {
      // Create user in Firebase Auth
      const userCred = await createUserWithEmailAndPassword(auth, email, password);

      // Send verification email
      await sendEmailVerification(userCred.user);

      // Save student details in Firestore
      await setDoc(doc(db, 'students', regNo), {
        name,
        regNo,
        email,
        isVerified: false,
        createdAt: new Date(),
      });

      alert('✅ Verification link sent to your email. Please verify before logging in.');
      navigate('/login/student');
    } catch (error) {
      console.error(error);
      alert('❌ Registration failed: ' + error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <img src={logo} alt="KARE Logo" className="signup-logo" />
        <div>
          <h1>KARE CODING PLATFORM</h1>
          <p>Student Registration</p>
          <span className="signup-badge">Signup Required</span>
        </div>
      </div>

      <div className="signup-card">
        <h2>Create Student Account</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="regNo"
            placeholder="Register Number"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="College Email ID"
            required
            onChange={handleChange}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div className="signup-footer">
        © 2025 KARE Coding Platform. All rights reserved.
      </div>
    </div>
  );
};

export default StudentSignup;
