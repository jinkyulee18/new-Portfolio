import React from 'react';
import ProjectCard from './projectCard'; // Import your ProjectCard component


export const Projects = () => {
  const projects = [
    {
      title: 'NBA Analytics',
      imageUrl: 'logo1.png',
      description: 'Description of Project 1.',
      projectUrl: 'https://example.com/project1',
    },
    {
      title: 'Promise Church Website',
      imageUrl: 'project2.jpg',
      description: 'Description of Project 2.',
      projectUrl: 'https://example.com/project2',
    },
    // Add more projects as needed
  ];

  return (
    <div className="Section2">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}beatb
            description={project.description}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  );
}

