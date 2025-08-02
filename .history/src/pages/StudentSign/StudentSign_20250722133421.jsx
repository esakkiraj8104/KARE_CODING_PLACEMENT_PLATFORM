import React, { useState } from 'react';
import { auth, db } from '../../firebase'; // Your firebase config
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const StudentSignup = () => {
  const [form, setForm] = useState({
    name: '',
    regNo: '',
    email: ''
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
      // Create user with email and regNo as password
      const userCred = await createUserWithEmailAndPassword(auth, email, password);

      // Send email verification
      await sendEmailVerification(userCred.user);

      // Save student data in Firestore
      await setDoc(doc(db, 'students', regNo), {
        name,
        regNo,
        email,
        isVerified: false,
        createdAt: new Date(),
      });

      alert('✅ Verification link sent to your email. Please verify and then login.');
      navigate('/login/student');
    } catch (error) {
      console.error(error);
      alert('❌ Registration failed: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input type="text" name="name" placeholder="Your Full Name" required onChange={handleChange} />
      <input type="text" name="regNo" placeholder="Register Number" required onChange={handleChange} />
      <input type="email" name="email" placeholder="College Email ID" required onChange={handleChange} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default StudentSignup;
