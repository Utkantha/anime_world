import React, { useState } from 'react';
import './AuthSection.css';

const AuthSection = () => {
  const [mode, setMode] = useState('login'); // 'login' or 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');

    if (!email || !password || (mode === 'signup' && !confirmPassword)) {
      setMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    if (mode === 'signup' && password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      setMessage('Password should be at least 6 characters.');
      return;
    }

    if (mode === 'login') {
      setMessage('Logged in successfully! (demo only, no real account created)');
    } else {
      setMessage('Signed up successfully! (demo only, no real account created)');
    }
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setMessage('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <section id="auth" className="auth-section">
      <div className="container auth-container">
        <div className="auth-info">
          <h2 className="section-title">🔐 Join the Anime Universe</h2>
          <p className="auth-text">
            Create your free account to save your favorite anime, track episodes,
            and share reviews with other fans. Already with us? Log in and continue
            your anime journey.
          </p>
          <ul className="auth-benefits">
            <li>⭐ Create personal watchlists</li>
            <li>💬 Leave reviews and ratings</li>
            <li>🎨 Upload and bookmark fan art</li>
            <li>📰 Get personalized recommendations</li>
          </ul>
        </div>

        <div className="auth-form-wrapper">
          <div className="auth-toggle">
            <button
              className={`auth-toggle-btn ${mode === 'login' ? 'active' : ''}`}
              onClick={() => switchMode('login')}
            >
              Log In
            </button>
            <button
              className={`auth-toggle-btn ${mode === 'signup' ? 'active' : ''}`}
              onClick={() => switchMode('signup')}
            >
              Sign Up
            </button>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label className="auth-label">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="auth-input"
                required
              />
            </label>

            <label className="auth-label">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="auth-input"
                required
              />
            </label>

            {mode === 'signup' && (
              <label className="auth-label">
                Confirm Password
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter password"
                  className="auth-input"
                  required
                />
              </label>
            )}

            {message && <div className="auth-message">{message}</div>}

            <button type="submit" className="auth-submit-btn">
              {mode === 'login' ? 'Log In' : 'Create Account'}
            </button>

            {mode === 'login' && (
              <p className="auth-switch-text">
                New here?{' '}
                <button
                  type="button"
                  className="switch-inline"
                  onClick={() => switchMode('signup')}
                >
                  Sign up now
                </button>
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;


