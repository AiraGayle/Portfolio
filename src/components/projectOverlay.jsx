import React, { useEffect } from 'react';
import './ProjectOverlay.css';

export default function ProjectOverlay({ project, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="overlay">
      {/* backdrop as separate element — no event conflicts */}
      <div className="overlay-backdrop" onClick={onClose} />

      <div className="overlay-inner">
        <button className="overlay-back" onClick={onClose}>← Back to Projects</button>

        {/* Video takes priority over image */}
        <div className="overlay-media">
          {project.video ? (
            <video
              className="overlay-video"
              src={project.video}
              controls
              playsInline
              preload="metadata"
            />
          ) : project.image ? (
            <img src={project.image} alt={project.name} className="overlay-img-actual" />
          ) : (
            <div className="overlay-img-placeholder">
              <div className="overlay-img-icon">{project.icon}</div>
              <div className="overlay-img-label">No preview available</div>
            </div>
          )}
        </div>

        <div className="overlay-tag">{project.tag}</div>
        <h2 className="overlay-title">{project.name}</h2>
        <p className="overlay-sub">{project.sub}</p>
        <div className="overlay-divider" />
        <p className="overlay-desc">{project.desc}</p>

        {project.bullets?.length > 0 && (
          <div className="overlay-bullets">
            {project.bullets.map((b, i) => (
              <div className="overlay-bullet" key={i}>
                <div className="overlay-bullet-dot" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        )}

        <div className="overlay-tech">
          <div className="overlay-tech-label">Built With</div>
          <div className="project-tags">
            {project.tags.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="overlay-actions">
        {project.github && (
            <a className="overlay-github" href={project.github} target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#000">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View on GitHub
            </a>
        )}

        {project.url && (
            <a className="overlay-live" href={project.url} target="_blank" rel="noreferrer">
            ↗ Live Demo
            </a>
        )}
        </div>
      </div>
    </div>
  );
}