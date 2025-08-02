import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import logo from '../../assets/KLU_LOGO_1.png';
import './Navbar.css';
import { getFirestore, doc, getDoc } from 'firebase/firestore';



const Navbar = () => {
  const auth = getAuth();
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState('');

 
 
  
  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    if (currentUser) {
      setUser(currentUser);

      const db = getFirestore();
      const userDocRef = doc(db, 'users', currentUser.uid);
      const userSnap = await getDoc(userDocRef);
      if (userSnap.exists()) {
        setUserName(userSnap.data().name || '');
      }
    } else {
      setUser(null);
      setUserName('');
    }
  });
  return () => unsubscribe();
}, [auth]);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = '/'; // Redirect after logout
  };

  const handleChangePassword = () => {
    alert("Password change feature coming soon");
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <h1 className="navbar-title">KARE ASSESSMENT & CODING PLATFORM</h1>

      {user && (
        <div className="profile-section">
          <button className="profile-button" onClick={() => setShowProfile(!showProfile)}>
            👤 Profile
          </button>

          {showProfile && (
            <div className="profile-dropdown">
              <p><strong>{userName || user.email}</strong></p>
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
