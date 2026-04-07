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
        <h1 className="login-title">LOGIN</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />

          <div className="form-extras">
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="checkbox"
              />
              <span className="checkbox-label">Remember me</span>
            </label>
            <a href="#" className="forgot-link">Forgot?</a>
          </div>

          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>
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
          background: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .login-card {
          width: 100%;
          max-width: 320px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .login-title {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a4e;
          letter-spacing: 1px;
          margin-bottom: 32px;
          text-align: center;
        }

        .login-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .login-input {
          width: 100%;
          padding: 14px 16px;
          background: #e8e8e8;
          border: none;
          border-radius: 4px;
          font-size: 14px;
          color: #333;
          outline: none;
          transition: background 0.2s ease;
        }

        .login-input::placeholder {
          color: #999;
        }

        .login-input:focus {
          background: #dedede;
        }

        .form-extras {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 4px;
          margin-bottom: 8px;
        }

        .checkbox-wrapper {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }

        .checkbox {
          width: 14px;
          height: 14px;
          accent-color: #7c7cf0;
          cursor: pointer;
        }

        .checkbox-label {
          font-size: 12px;
          color: #888;
          cursor: pointer;
        }

        .forgot-link {
          font-size: 12px;
          color: #7c7cf0;
          text-decoration: none;
          cursor: pointer;
        }

        .forgot-link:hover {
          text-decoration: underline;
        }

        .login-button {
          width: 100%;
          padding: 14px;
          background: #7c7cf0;
          border: none;
          border-radius: 4px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          cursor: pointer;
          transition: background 0.2s ease;
          margin-top: 8px;
        }

        .login-button:hover {
          background: #6a6ae0;
        }

        .login-button:active {
          background: #5a5ad0;
        }
      `}</style>
    </div>
  );
}
