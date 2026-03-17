import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../services/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const getInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Browse Teams', path: '/app/teams' },
    { name: 'Create Team', path: '/app/create-team' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : 'navbar--transparent'}`}>
      <div className="navbar__container">
        <div className="navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-icon">
              <span className="navbar__logo-letter">H</span>
            </div>
            <span className="navbar__logo-text">
              Hack<span className="navbar__logo-highlight">Match</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="navbar__links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar__link ${
                  location.pathname === link.path
                    ? 'navbar__link--active'
                    : 'navbar__link--inactive'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* User Actions */}
          <div className="navbar__actions">
            <Link to="/app/profile" className="navbar__profile-link">
              <div className="navbar__avatar">
                <span className="navbar__avatar-initials">{user ? getInitials(user.name) : 'U'}</span>
              </div>
              <div className="navbar__profile-details">
                <p className="navbar__profile-name">{user ? user.name : 'User'}</p>
                <p className="navbar__profile-subtitle">View Profile</p>
              </div>
            </Link>
            <button
              onClick={logout}
              className="navbar__logout-btn"
              title="Logout"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="navbar__hamburger"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar__mobile-menu">
          <div className="navbar__mobile-menu-inner">
            <div className="navbar__mobile-links">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="navbar__mobile-link"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="navbar__mobile-divider">
              <Link
                to="/app/profile"
                onClick={() => setIsOpen(false)}
                className="navbar__mobile-profile"
              >
                <div className="navbar__mobile-avatar">
                  <span>{user ? getInitials(user.name) : 'U'}</span>
                </div>
                <div>
                  <p className="navbar__mobile-profile-name">{user ? user.name : 'User'}</p>
                  <p className="navbar__mobile-profile-sub">Manage Profile</p>
                </div>
              </Link>
              <button
                onClick={() => { logout(); setIsOpen(false); }}
                className="navbar__mobile-logout"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
