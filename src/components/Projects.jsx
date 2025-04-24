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
    <section className="projects py-12 px-6" id="projects">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="projects-container grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
