import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import { useAuth } from '../services/AuthContext';
import './Signup.css';

const Signup = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login('dummy-token');
      navigate('/');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="signup">
      {/* Background glows */}
      <div className="signup__glow--indigo"></div>
      <div className="signup__glow--cyan"></div>

      <div className="signup__wrapper">
        {/* Logo header */}
        <div className="signup__logo-header">
          <Link to="/" className="signup__logo">
            <div className="signup__logo-icon">
              <span className="signup__logo-letter">H</span>
            </div>
            <span className="signup__logo-text">HackMatch</span>
          </Link>
          <h1 className="signup__heading">Join the community</h1>
          <p className="signup__subheading">Create your account and find your team</p>
        </div>

        {/* Card */}
        <div className="signup__card">
          <form onSubmit={handleSubmit} className="signup__form">
            <Input
              label="Full Name"
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              label="Email Address"
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              label="Password"
              id="password"
              type="password"
              placeholder="Min. 8 characters"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Input
              label="Confirm Password"
              id="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <p className="signup__terms">
              By creating an account, you agree to our{' '}
              <a href="#" className="signup__terms-link">Terms of Service</a> and{' '}
              <a href="#" className="signup__terms-link">Privacy Policy</a>.
            </p>
            <Button type="submit" className="signup__submit" isLoading={loading} size="md">
              Create My Account
            </Button>
          </form>

          <div className="signup__footer">
            <p className="signup__footer-text">
              Already have an account?{' '}
              <Link to="/login" className="signup__footer-link">
                Sign in →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
