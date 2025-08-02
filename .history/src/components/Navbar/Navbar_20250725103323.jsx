import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import './Navbar.css';

const Navbar = () => {
  const auth = getAuth();
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = '/studentlogin'; // Redirect after logout
  };

  const handleChangePassword = () => {
    alert("Password change feature coming soon");
  };

  return (
    <div className="navbar">
      <img src="/KLU_LOGO_1.png" alt="Logo" className="navbar-logo" />
      <h1 className="navbar-title">KARE CODING PLATFORM</h1>

      {user && (
        <div className="profile-section">
          <button className="profile-button" onClick={() => setShowProfile(!showProfile)}>
            👤 Profile
          </button>

          {showProfile && (
            <div className="profile-dropdown">
              <p><strong>{user.email}</strong></p>
              <button onClick={handleChangePassword}>Change Password</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
