import React, { useState } from 'react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectOverlay from './ProjectOverlay';
import useFadeIn from '../hooks/useFadeIn';
import './Projects.css';

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const ref = useFadeIn();

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <p className="section-label">What I've Worked on</p>
        <h2 className="section-title">Some <span>Projects</span></h2>
        <div className="projects-grid fade-in" ref={ref}>
          {projects.map((p) =>
            p.placeholder ? (
              <div className="project-placeholder" key={p.id}>
                <div className="placeholder-icon">⚙️</div>
                <div className="placeholder-title">{p.name}</div>
                <div className="placeholder-desc">{p.desc}</div>
              </div>
            ) : (
              <ProjectCard key={p.id} project={p} onClick={setSelected} />
            )
          )}
        </div>
      </div>

      {selected && (
        <ProjectOverlay project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}