import React, { useState } from "react";
import "./login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
      <div className="logo-container">
          <img
            src="https://i.postimg.cc/gjWkTdf8/image.png"
            alt="Logo"
            className="custom-logo"
          />
        </div>
        <h2>Login</h2>
        <div className="tree-icon"></div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <div className="error-message">The email field is required</div>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="sign-in-btn">
            Sign In
          </button>
        </form>
        <div className="additional-options">
          <a href="#forgot-password" className="forgot-password-link">Forgot Password?</a>
          <a href="#sign-up" className="sign-up-link">
            New User? Sign Up
          </a>
        </div>
        <div className="or-divider">or</div>
        <button className="social-btn google-btn">
          <img
            src="https://i.postimg.cc/Nj1tJqd6/Group-9-2x.png"
            alt="Google Icon"
            className="social-icon"
          />
          CONTINUE WITH GOOGLE
        </button>
        <button className="social-btn facebook-btn">
          <img
            src="https://i.postimg.cc/QtSx6Gx4/Rectangle-17.png"
            alt="Facebook Icon"
            className="social-icon"
          />
          CONTINUE WITH FACEBOOK
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
