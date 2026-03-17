import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-icon">
                <span className="footer__logo-letter">H</span>
              </div>
              <span className="footer__logo-text">HackMatch</span>
            </Link>
            <p className="footer__tagline">
              Empowering the next generation of innovators to find their perfect co-builders and create the future, one hackathon at a time.
            </p>
          </div>

          <div>
            <h3 className="footer__nav-title">Platform</h3>
            <ul className="footer__nav-list">
              <li><Link to="/app/teams" className="footer__nav-link">Browse Teams</Link></li>
              <li><Link to="/app/create-team" className="footer__nav-link">Create Team</Link></li>
              <li><Link to="/signup" className="footer__nav-link">Join Community</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer__nav-title">Account</h3>
            <ul className="footer__nav-list">
              <li><Link to="/login" className="footer__nav-link">Login</Link></li>
              <li><Link to="/signup" className="footer__nav-link">Sign Up Free</Link></li>
              <li><Link to="/app/profile" className="footer__nav-link">My Profile</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} HackMatch. Designed for developers, by developers.
          </p>
          <p className="footer__made-with">Made with ❤️ for Hackers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
