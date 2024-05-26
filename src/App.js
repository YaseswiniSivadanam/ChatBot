import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import ContactUs from './ContactUs';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import AboutUs from './AboutUs';
import './LoginPage.css';
import './RegistrationPage.css';
import './ContactUs.css';
import './Navbar.css';
import './AboutUs';
// import './AboutUs.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />     
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          {/* <Route path="/forgot-password" component={ForgotPasswordPage} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
