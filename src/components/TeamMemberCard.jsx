import React, { useState } from 'react';
import './TeamMemberCard.css';

function TeamMemberCard({ name, imageUrl, linkedInLink, githubLink, info }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`team-member-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3>{name}</h3>
      <img src={imageUrl} alt={`Profile of ${name}`} className="profile-image" />

      <div className="social-links">
        <a href={linkedInLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <br />
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        <p className={`info ${isHovered ? 'visible' : ''}`}>{info}</p>
      </div>

    </div>
  );
}

export default TeamMemberCard;
