import React from 'react';
import './project.css'

function ProjectCard(props) {
  return (
    <div className="project-card">
      <img src={props.imageUrl} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href={props.projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}

export default ProjectCard;