import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [selectedDomain, setSelectedDomain] = useState('');

  const selectDomain = (event) => {
    setSelectedDomain(event.target.innerText);
  };

  const handleLogout = () => {
    // Have to add logout logic here
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src="/avatar1.png" alt="Company logo" />
      </div>
      <div className="nav-container">
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="dropdown">
            <button>Domain Change</button>
            <div className="content">
              <button
                className={selectedDomain === 'AI' ? 'selected' : ''}
                onClick={selectDomain}
              >
                AI
              </button>
              <button
                className={selectedDomain === 'ML' ? 'selected' : ''}
                onClick={selectDomain}
              >
                ML
              </button>
              <button
                className={selectedDomain === 'CSE' ? 'selected' : ''}
                onClick={selectDomain}
              >
                CSE
              </button>
              <button
                className={selectedDomain === 'CyberSecurity' ? 'selected' : ''}
                onClick={selectDomain}
              >
                CyberSecurity
              </button>
              <button
                className={selectedDomain === 'DS' ? 'selected' : ''}
                onClick={selectDomain}
              >
                DS
              </button>
              <button
                className={selectedDomain === 'WEB DEVELOPMENT' ? 'selected' : ''}
                onClick={selectDomain}
              >
                WEB DEVELOPMENT
              </button>
            </div>
          </li>
          <li id="loginSignupButton"><Link to="/login">Login/Signup</Link></li>
          <li id="logoutButton" style={{ display: 'none' }}><a href="#" onClick={handleLogout}>Logout</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
