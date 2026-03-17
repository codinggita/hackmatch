import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../services/AuthContext';
import './Home.css';

const Home = () => {
  const { isAuthenticated } = useAuth();
  const teamsRoute = isAuthenticated ? '/app/teams' : '/signup';
  const createRoute = isAuthenticated ? '/app/create-team' : '/signup';

  return (
    <div>

      {/* ─── Hero ─── */}
      <section className="hero">
        {/* Glow blobs */}
        <div className="hero__blobs">
          <div className="hero__blob--blue"></div>
          <div className="hero__blob--purple"></div>
        </div>

        <div className="hero__content">
          <div className="hero__badge">
            🏆 Hackathon Team Finder — 2k+ Members
          </div>
          <h1 className="hero__title">
            Build Your{' '}
            <span className="text-gradient">Dream Team</span>
            <br />for the Next Hackathon
          </h1>
          <p className="hero__subtitle">
            HackMatch connects developers, designers, and innovators. Stop missing opportunities—find the perfect teammates with the right skills in minutes.
          </p>
          <div className="hero__actions">
            <Link to={teamsRoute}>
              <button className="hero__btn-primary">
                Browse Available Teams →
              </button>
            </Link>
            <Link to={createRoute}>
              <button className="hero__btn-secondary">
                Create a Team
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="stats">
        <div className="stats__grid">
          {[
            { label: 'Teams Formed', value: '500+', icon: '🤝' },
            { label: 'Active Users', value: '2k+', icon: '👥' },
            { label: 'Hackathons', value: '150+', icon: '🏆' },
            { label: 'Tech Stacks', value: '50+', icon: '⚡' }
          ].map((stat, idx) => (
            <div key={idx} className="stats__card">
              <div className="stats__icon">{stat.icon}</div>
              <h3 className="stats__value">{stat.value}</h3>
              <p className="stats__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="how-it-works">
        <div className="how-it-works__container">
          <div className="how-it-works__header">
            <p className="how-it-works__label">Simple Process</p>
            <h2 className="how-it-works__title">How It Works</h2>
            <p className="how-it-works__desc">Three simple steps to find your perfect hackathon squad.</p>
          </div>

          <div className="how-it-works__grid">
            {[
              {
                step: '01',
                title: 'Create Your Profile',
                desc: 'List your skills, experience, and GitHub projects to showcase what you bring to the table.',
                icon: '👤'
              },
              {
                step: '02',
                title: 'Find or Create Team',
                desc: 'Browse teams looking for your skills or create your own project idea and recruit members.',
                icon: '🤝'
              },
              {
                step: '03',
                title: 'Start Building',
                desc: 'Connect with your new teammates and start collaborating on your next big innovation.',
                icon: '🚀'
              }
            ].map((item, idx) => (
              <div key={idx} className="how-it-works__step">
                <div className="how-it-works__step-number">{item.step}</div>
                <div className="how-it-works__step-icon">{item.icon}</div>
                <h3 className="how-it-works__step-title">{item.title}</h3>
                <p className="how-it-works__step-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Feature Highlights ─── */}
      <section className="features">
        <div className="features__container">
          <div className="features__header">
            <p className="features__label">Why HackMatch</p>
            <h2 className="features__title">Everything You Need to Win</h2>
          </div>
          <div className="features__grid">
            {[
              { icon: '🔍', title: 'Smart Team Discovery', desc: 'Filter teams by tech stack, hackathon, or role to find exactly the right fit.' },
              { icon: '🎯', title: 'Skill-Based Matching', desc: 'Post the skills you need and let the right candidates come to you.' },
              { icon: '⚡', title: 'Quick Application', desc: 'Apply or recruit in seconds — no lengthy forms or waiting periods.' },
              { icon: '🏅', title: 'Community-Driven', desc: 'Backed by thousands of students who already found success on HackMatch.' },
            ].map((f, idx) => (
              <div key={idx} className="features__card">
                <div className="features__card-icon">{f.icon}</div>
                <div>
                  <h3 className="features__card-title">{f.title}</h3>
                  <p className="features__card-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta">
        <div className="cta__container">
          <div className="cta__card">
            <div className="cta__blob--blue"></div>
            <div className="cta__blob--purple"></div>
            <div className="cta__content">
              <h2 className="cta__title">
                Ready to Join Your Next Hackathon?
              </h2>
              <p className="cta__desc">
                Join thousands of students who have already found their teammates on HackMatch.
              </p>
              <div className="cta__actions">
                <Link to="/signup">
                  <button className="cta__btn-primary">
                    Get Started — It's Free
                  </button>
                </Link>
                <Link to="/login">
                  <button className="cta__btn-secondary">
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
