import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = () => {
    const studentUser = JSON.parse(localStorage.getItem('studentUser'));
    if (studentUser) {
      studentUser.password = newPassword;
      localStorage.setItem('studentUser', JSON.stringify(studentUser));
      alert('Password changed successfully!');
      navigate('/student');
    }
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      <input
        type="password"
        placeholder="Enter New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button className="btn" onClick={handlePasswordChange}>Update Password</button>
    </div>
  );
};

export default ChangePassword;
