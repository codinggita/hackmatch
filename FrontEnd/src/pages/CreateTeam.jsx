import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import './CreateTeam.css';

const CreateTeam = () => {
  const [formData, setFormData] = useState({
    name: '',
    hackathonName: '',
    projectIdea: '',
    membersNeeded: 2,
    requiredSkills: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Create Team:', formData);
  };

  return (
    <div className="create-team">
      <div className="create-team__header">
        <p className="create-team__label">Recruit</p>
        <h1 className="create-team__title">Create a New Team</h1>
        <p className="create-team__desc">Share your vision and attract the perfect collaborators for your hackathon project.</p>
      </div>

      <div className="create-team__card">
        <form onSubmit={handleSubmit} className="create-team__form">
          <Input
            label="Team / Project Name"
            id="name"
            placeholder="e.g. AI Visionaries"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <Input
            label="Target Hackathon"
            id="hackathonName"
            placeholder="e.g. MHacks 2024"
            value={formData.hackathonName}
            onChange={handleChange}
            required
          />

          <div className="create-team__textarea-group">
            <label htmlFor="projectIdea" className="create-team__textarea-label">
              Project Idea <span className="create-team__textarea-required">*</span>
            </label>
            <textarea
              id="projectIdea"
              rows="4"
              placeholder="Describe your project goal and what you're planning to build..."
              className="create-team__textarea"
              value={formData.projectIdea}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="create-team__row">
            <Input
              label="Team Size (Members Needed)"
              id="membersNeeded"
              type="number"
              min="2"
              max="10"
              value={formData.membersNeeded}
              onChange={handleChange}
              required
            />
            <Input
              label="Required Skills (comma separated)"
              id="requiredSkills"
              placeholder="React, Node.js, AI/ML"
              value={formData.requiredSkills}
              onChange={handleChange}
              required
            />
          </div>

          <div className="create-team__actions">
            <Button type="submit" className="create-team__submit" size="md">
              🚀 Post Team Listing
            </Button>
            <Button variant="secondary" className="create-team__cancel" size="md" onClick={() => window.history.back()}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTeam;
