
import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
      </div>
      <div className="project-image">
        <img src={project.imageUrl} alt={project.name} />
      </div>
    </div>
  );
}

export default ProjectCard;
