// src/components/Projects.jsx
import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import fetchProjects from '../services/fetchProjects'; 

function Projects() {
  const [projects, setProjects] = useState([]); 

  // Fetch projects data when the component mounts
  useEffect(() => {
    const getProjects = async () => {
      const fetchedProjectsList = await fetchProjects();
      setProjects(fetchedProjectsList);
    };

    getProjects(); 
  }, []); 

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
