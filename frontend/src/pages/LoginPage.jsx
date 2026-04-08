import React, { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { username, password, rememberMe });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Sign in</h1>
        <p className="login-subtitle">Enter your credentials to access your account</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label className="input-label">Email</label>
            <input
              type="email"
              placeholder="name@company.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </div>

          <div className="form-options">
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="checkbox"
              />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>

          <button type="submit" className="login-button">
            Sign in
          </button>
        </form>

        <p className="signup-prompt">
          Don't have an account? <a href="#" className="signup-link">Create one</a>
        </p>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f5;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          padding: 20px;
        }

.login-card {
           width: 100%;
           max-width: 320px;
           padding: 20px;
           background: #fff;
           border-radius: 6px;
           box-shadow: 0 2px 8px rgba(0,0,0,0.1);
         }

        .login-title {
          font-size: 24px;
          font-weight: 600;
          color: #111;
          margin-bottom: 8px;
        }

        .login-subtitle {
          font-size: 14px;
          color: #666;
          margin-bottom: 32px;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .input-label {
          font-size: 13px;
          font-weight: 500;
          color: #374151;
        }

        .login-input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
          color: #111;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }

        .login-input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .login-input::placeholder {
          color: #9ca3af;
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .checkbox-wrapper {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #4b5563;
          cursor: pointer;
        }

        .checkbox {
          accent-color: #2563eb;
        }

        .forgot-link {
          font-size: 13px;
          color: #2563eb;
          text-decoration: none;
        }

        .forgot-link:hover {
          text-decoration: underline;
        }

        .login-button {
          width: 100%;
          padding: 10px 16px;
          background: #111;
          border: none;
          border-radius: 6px;
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.15s;
          margin-top: 8px;
        }

        .login-button:hover {
          background: #000;
        }

        .signup-prompt {
          text-align: center;
          font-size: 13px;
          color: #4b5563;
          margin-top: 24px;
        }

        .signup-link {
          color: #2563eb;
          text-decoration: none;
        }

        .signup-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
