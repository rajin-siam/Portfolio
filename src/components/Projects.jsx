// src/components/Projects.jsx
import React from 'react';
import projectsData from '../data/projectsData';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
