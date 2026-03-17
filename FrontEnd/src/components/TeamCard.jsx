import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Button from './Button';
import './TeamCard.css';

const TeamCard = ({ team }) => {
  if (!team) return null;

  // Map backend schema matching
  const id = team._id || team.id;
  const name = team.teamName || team.name || 'Unnamed Team';
  const hackathonName = team.hackathonName || 'Open Hackathon';
  const projectIdea = team.projectIdea || 'No idea provided';
  const requiredSkills = team.requiredSkills || [];
  const members = team.members || [];
  
  // Backend doesn't support these natively yet, providing defaults
  const membersNeeded = team.membersNeeded || 4;
  const status = team.status || 'Open';

  const unfilledSpots = Math.max(0, membersNeeded - members.length);

  return (
    <Card hover className="team-card">
      <div className="team-card__header">
        <div className={`team-card__status ${
          status === 'Open' ? 'team-card__status--open' : 'team-card__status--closed'
        }`}>
          {status}
        </div>
        <div className="team-card__members">
          <div className="team-card__avatars">
            {members.map((_, i) => (
              <div key={`filled-${i}`} className="team-card__avatar team-card__avatar--filled">
                U
              </div>
            ))}
            {[...Array(unfilledSpots)].map((_, i) => (
              <div key={`empty-${i}`} className="team-card__avatar team-card__avatar--empty">
                +
              </div>
            ))}
          </div>
        </div>
      </div>

      <h3 className="team-card__title">{name}</h3>
      <div className="team-card__hackathon">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {hackathonName}
      </div>
      
      <p className="team-card__idea">"{projectIdea}"</p>

      <div className="team-card__skills">
        <div className="team-card__skill-list">
          {requiredSkills.map((skill, index) => (
            <span key={index} className="team-card__skill">
              {skill}
            </span>
          ))}
        </div>

        <div className="team-card__footer">
          <Link to={`/teams/${id}`} className="team-card__cta-link">
            <Button variant="secondary" className="team-card__cta-btn" size="sm">
              View Deployment Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default TeamCard;
