import React from 'react';
import useFadeIn from '../hooks/useFadeIn';
import './About.css';

const stats = [
  { label: 'University', val: 'University of the Philippines Cebu' },
  { label: 'Degree', val: 'BS Computer Science' },
  { label: 'Standing', val: 'University Scholar (AY 2023–2025)' },
  { label: 'Location', val: 'Cebu City, Philippines' },
];

const awards = [
  { bold: '2nd Runner-Up', text: '— CESAFI Computer Quiz Bowl (2026)' },
  { bold: '2nd Place', text: '— UP Interhigh Programming Competition (2023)' },
];

export default function About() {
  const ref = useFadeIn();

  return (
    <section id="about" className="about-section fade-in">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="about-grid fade-in" ref={ref}>
          <div className="about-text">
            <p>Hello! I'm <strong>Aira Gayle Uy</strong>, a 3rd Year Computer Science student at the <strong>University of the Philippines Cebu</strong>. In this journey, I've learned a lot about solving problems, collaborating with teams, and building software.</p>
            <div className="awards">
              <p className="section-label" style={{ marginBottom: '0.75rem' }}>Some Highlights</p>
              {awards.map((a, i) => (
                <div className="award-item" key={i}>
                  <div className="award-dot" />
                  <span><strong>{a.bold}</strong> {a.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-stats">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <div className="stat-label">{s.label}</div>
                <div className="stat-val">{s.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}