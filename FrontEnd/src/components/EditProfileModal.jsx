import React, { useState, useEffect } from 'react';
import { useAuth } from '../services/AuthContext';
import './EditProfileModal.css';

const SKILLS_OPTIONS = ['React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'AI/ML', 'UI/UX', 'Flutter', 'Blockchain', 'DevOps', 'Java', 'Go', 'Rust', 'iOS', 'Android'];
const EXPERIENCE_LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

const EditProfileModal = ({ onClose }) => {
  const { user, updateProfile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    bio: '',
    skills: [],
    experienceLevel: 'Beginner',
    githubLink: '',
    portfolioLink: ''
  });
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Pre-fill form with current user data
  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || '',
        bio: user.bio || '',
        skills: user.skills || [],
        experienceLevel: user.experienceLevel || 'Beginner',
        githubLink: user.githubLink || '',
        portfolioLink: user.portfolioLink || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleSkill = (skill) => {
    setForm(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    const result = await updateProfile(form);

    if (result.success) {
      setSuccessMsg('Profile updated successfully!');
      setTimeout(() => onClose(), 1200);
    } else {
      setErrorMsg(result.message || 'Update failed. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="edit-modal__overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="edit-modal">
        {/* Header */}
        <div className="edit-modal__header">
          <div>
            <h2 className="edit-modal__title">Edit Profile</h2>
            <p className="edit-modal__subtitle">Update your public profile information</p>
          </div>
          <button className="edit-modal__close" onClick={onClose} aria-label="Close">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="edit-modal__form">
          {/* Name */}
          <div className="edit-modal__field">
            <label className="edit-modal__label">Full Name <span className="edit-modal__required">*</span></label>
            <input
              type="text"
              name="name"
              className="edit-modal__input"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </div>

          {/* Bio */}
          <div className="edit-modal__field">
            <label className="edit-modal__label">Bio</label>
            <textarea
              name="bio"
              className="edit-modal__textarea"
              value={form.bio}
              onChange={handleChange}
              placeholder="Tell teams about yourself, your goals and interests..."
              rows={3}
            />
          </div>

          {/* Links row */}
          <div className="edit-modal__row">
            <div className="edit-modal__field">
              <label className="edit-modal__label">GitHub URL</label>
              <input
                type="url"
                name="githubLink"
                className="edit-modal__input"
                value={form.githubLink}
                onChange={handleChange}
                placeholder="https://github.com/username"
              />
            </div>
            <div className="edit-modal__field">
              <label className="edit-modal__label">Portfolio URL</label>
              <input
                type="url"
                name="portfolioLink"
                className="edit-modal__input"
                value={form.portfolioLink}
                onChange={handleChange}
                placeholder="https://yourportfolio.com"
              />
            </div>
          </div>

          {/* Experience Level */}
          <div className="edit-modal__field">
            <label className="edit-modal__label">Experience Level</label>
            <div className="edit-modal__levels">
              {EXPERIENCE_LEVELS.map(level => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setForm(prev => ({ ...prev, experienceLevel: level }))}
                  className={`edit-modal__level-btn ${form.experienceLevel === level ? 'edit-modal__level-btn--active' : ''}`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="edit-modal__field">
            <label className="edit-modal__label">Skills <span className="edit-modal__hint">({form.skills.length} selected)</span></label>
            <div className="edit-modal__skills-grid">
              {SKILLS_OPTIONS.map(skill => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => toggleSkill(skill)}
                  className={`edit-modal__skill-chip ${form.skills.includes(skill) ? 'edit-modal__skill-chip--active' : ''}`}
                >
                  {form.skills.includes(skill) && <span className="edit-modal__skill-check">✓</span>}
                  {skill}
                </button>
              ))}
            </div>
          </div>

          {/* Status messages */}
          {successMsg && <div className="edit-modal__success">{successMsg}</div>}
          {errorMsg && <div className="edit-modal__error">{errorMsg}</div>}

          {/* Actions */}
          <div className="edit-modal__actions">
            <button type="button" className="edit-modal__cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="edit-modal__save-btn" disabled={loading}>
              {loading ? (
                <>
                  <span className="edit-modal__spinner" />
                  Saving...
                </>
              ) : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
