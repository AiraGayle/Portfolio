import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <div className="card-arrow">↗</div>

      <div className="project-img">
        {project.image ? (
          <img src={project.image} alt={project.name} />
        ) : (
          <div className="project-img-placeholder">
            <div className="project-img-icon">{project.icon}</div>
          </div>
        )}
      </div>

      <div className="project-body">
        <div className="project-sub">{project.tag}</div>
        <div className="project-name">{project.name}</div>
        <div className="project-desc">{project.sub}</div>
        <div className="project-tags">
          {project.tags.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}