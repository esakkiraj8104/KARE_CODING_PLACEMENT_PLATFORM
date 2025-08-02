import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import logo from '../../assets/KLU_LOGO_1.png';
import './Navbar.css';


const Navbar = () => {
  const auth = getAuth();
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState('');

  // Fetch user name from Firestore
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const userRef = doc(db, 'users', currentUser.email); // Document ID is email
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            setUserName(userSnap.data().name || 'User');
          } else {
            setUserName('User');
          }
        }
      } catch (error) {
        console.error('Error fetching user name:', error);
        setUserName('User');
      }
    };

    fetchUserName();
  }, []); 

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
