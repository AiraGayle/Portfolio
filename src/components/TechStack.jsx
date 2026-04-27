import React, { useState } from 'react';
import useFadeIn from '../hooks/useFadeIn';
import './TechStack.css';

const techData = [
  {
    category: 'Languages',
    items: [
      { name: 'C',          color: '#A8B9CC', icon: 'https://cdn.simpleicons.org/c/A8B9CC' },
      { name: 'C++',        color: '#00599C', icon: 'https://cdn.simpleicons.org/cplusplus/00599C' },
      { name: 'C#',         color: '#239120', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
      { name: 'Java',       color: '#ED8B00', icon: 'https://cdn.simpleicons.org/coffeescript/ED8B00' },
      { name: 'Python',     color: '#3776AB', icon: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'JavaScript', color: '#F7DF1E', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
      { name: 'TypeScript', color: '#3178C6', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'HTML',       color: '#E34F26', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
      { name: 'CSS',        color: '#1572B6', icon: 'https://cdn.simpleicons.org/css' },
      { name: 'Dart',       color: '#0175C2', icon: 'https://cdn.simpleicons.org/dart/0175C2' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'React',        color: '#61DAFB', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'React Native', color: '#61DAFB', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'Flutter',      color: '#02569B', icon: 'https://cdn.simpleicons.org/flutter/02569B' },
      { name: 'Node.js',      color: '#339933', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
      { name: 'Express.js',   color: '#ffffff', icon: 'https://cdn.simpleicons.org/express/ffffff' },
      { name: 'Flask',        color: '#ffffff', icon: 'https://cdn.simpleicons.org/flask/ffffff' },
      { name: '.NET',         color: '#512BD4', icon: 'https://cdn.simpleicons.org/dotnet/512BD4' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL',      color: '#4479A1', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
      { name: 'PostgreSQL', color: '#4169E1', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
      { name: 'Supabase',   color: '#3ECF8E', icon: 'https://cdn.simpleicons.org/supabase/3ECF8E' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git',    color: '#F05032', icon: 'https://cdn.simpleicons.org/git/F05032' },
      { name: 'GitHub', color: '#ffffff', icon: 'https://cdn.simpleicons.org/github/ffffff' },
      { name: 'Figma',  color: '#F24E1E', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
    ],
  },
];

export default function TechStack() {
  const ref = useFadeIn();

  return (
    <section id="tech" className="tech-section-wrapper">
      <div className="container">
        <h2 className="section-title">Tech <span>Stack</span></h2>

        <div className="tech-all fade-in" ref={ref}>
          {techData.map((group) => (
            <div className="tech-group" key={group.category}>
              <div className="tech-category">
                <span>{group.category}</span>
                <div className="tech-category-line" />
              </div>
              <div className="tech-chips">
                {group.items.map((item) => (
                  <div
                    className="tech-chip"
                    key={item.name}
                    style={{ '--chip-color': item.color }}
                  >
                    <div className="chip-icon-wrap">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="chip-icon"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                    <span className="chip-label">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}