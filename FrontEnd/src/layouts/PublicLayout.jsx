import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../services/AuthContext';
import './PublicLayout.css';

const PublicLayout = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="public-layout">
      {/* Background blobs */}
      <div className="public-layout__blobs">
        <div className="public-layout__blob--blue"></div>
        <div className="public-layout__blob--purple"></div>
      </div>

      {/* Navbar */}
      <nav className="public-nav">
        <Link to="/" className="public-nav__logo">
          <div className="public-nav__logo-icon">
            <span className="public-nav__logo-letter">H</span>
          </div>
          <span className="public-nav__logo-text">
            Hack<span className="public-nav__logo-highlight">Match</span>
          </span>
        </Link>

        <div className="public-nav__actions">
          {isAuthenticated ? (
            <>
              <Link to="/app/teams" className="public-nav__link">
                Go to App →
              </Link>
              <Link to="/app/profile" className="public-nav__avatar">
                JD
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="public-nav__link">
                Login
              </Link>
              <Link to="/signup" className="public-nav__signup-btn">
                Sign Up Free
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main className="public-layout__main">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="public-layout__footer">
        © {new Date().getFullYear()} HackMatch · Built for Hackers
      </footer>
    </div>
  );
};

export default PublicLayout;
