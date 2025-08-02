// File: src/pages/Signup/StudentSignup.jsx
import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '<div className="" />
<StudentSign></StudentSign>.css'; // ✅ Use the same CSS for consistency
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
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCred.user);

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
    <div className="student-container">
      <div className="student-header">
        <img src={logo} alt="KARE Logo" className="student-logo" />
        <div>
          <h1>KARE CODING PLATFORM</h1>
          <p>Student Registration</p>
          <span className="student-badge">Student Access Only</span>
        </div>
      </div>

      <div className="login-card">
        <h2>Create Student Account</h2>
        <form onSubmit={handleSignup}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            onChange={handleChange}
          />

          <label>Register Number</label>
          <input
            type="text"
            name="regNo"
            placeholder="e.g: 9922008104"
            required
            onChange={handleChange}
          />

          <label>College Email ID</label>
          <input
            type="email"
            name="email"
            placeholder="e.g: yourid@klu.ac.in"
            required
            onChange={handleChange}
          />

          <button type="submit">Sign Up</button>
        </form>

        <p className="switch-link">
          Already have an account? <a href="/login/student">Login</a>
        </p>
      </div>

      <footer>© 2025 KARE Coding Platform. All rights reserved.</footer>
    </div>
  );
};

export default StudentSignup;
