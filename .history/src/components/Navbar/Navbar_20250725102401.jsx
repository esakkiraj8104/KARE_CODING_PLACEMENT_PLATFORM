import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // You can style as needed

const Navbar = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/studentlogin');
  };

  const handleChangePassword = () => {
    alert("Password change coming soon or link to reset page");
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate('/')}>🎓 KARE Coding Platform</div>
      
      {user && (
        <div className="profile-section">
          <button
            className="profile-btn"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            👤 {user.email.split('@')[0]}
          </button>

          {showDropdown && (
            <div className="dropdown">
              <p><strong>Email:</strong> {user.email}</p>
              <button onClick={handleChangePassword}>Change Password</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
