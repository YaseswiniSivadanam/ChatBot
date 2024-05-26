import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="container-1">
      <h1>Log In</h1>
      <form action="" method="post">
        <div className="inputBox">
          <input type="email" id="email" name="email" required />
          <span>Email</span>
        </div>
        <div className="inputBox">
          <input type="password" id="password" name="password" required />
          <span>Password</span>
        </div>
        <input type="submit" value="Log In" />
        <div className="links-container">
          <Link to="/forgot-password">Forget Password?</Link>
          <Link to="/register">Don't have an account?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
