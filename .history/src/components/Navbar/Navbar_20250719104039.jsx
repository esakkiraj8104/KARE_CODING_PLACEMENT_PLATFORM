import React from 'react';
import './Navbar.css';
import logo from '../../assets/klu-logo.jpeg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <h3 className="navbar-title">KARE ASSESSMENT & CODING  PLATFORM</h3>
    </nav>
  );
};

export default Navbar;
