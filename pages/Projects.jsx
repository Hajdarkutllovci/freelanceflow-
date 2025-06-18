import React from 'react';
import { projects } from '../data/projects';

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((proj, idx) => (
          <li key={idx}>{proj.name} - {proj.client}</li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;