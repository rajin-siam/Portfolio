import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="project-card flex flex-col md:flex-row bg-white border border-gray-300 rounded-lg p-4 shadow-lg justify-between min-h-[350px] mb-6">
      <div className="project-info w-full md:w-3/5 border-r-4 border-blue-500 p-4">
        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
        <p className="text-lg mb-2">{project.description}</p>
        <div className="tech-stack mb-2 flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech bg-gray-200 py-1 px-2 rounded-md text-sm mr-2 inline-block">{tech}</span>
          ))}
        </div>
        <div className="project-links mt-2">
          {/*
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 mr-4"
          >
            Live Demo
          </a>
          */}
          <a
            href={project.sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Source Code
          </a>
        </div>
      </div>
      <div className="project-image flex items-center mt-4 md:mt-0">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="w-full md:w-[350px] md:h-[250px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default ProjectCard;
