import React from 'react';
import './RegistrationPage.css';

const RegistrationPage = () => {
  return (
    <div className="container-1">
      <h1>Register here</h1>
      <form action="" method="post">
        <div className="inputBox">
          <input type="email" id="email" name="email" required />
          <span>Email</span>
        </div>
        <div className="inputBox">
          <input type="password" id="password" name="password" required />
          <span>Password</span>
        </div>
        <div className="inputBox">
          <input type="password" id="confirm_pw" name="confirm_pw" required />
          <span>Confirm Password</span>
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default RegistrationPage;
