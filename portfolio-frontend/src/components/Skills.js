import React from 'react';
import './Skills.css'; 

function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'Bootstrap',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'MySql',
    'MongoDB',
    'C++',
    'Python',
    'Numpy',
    'Pandas',
    'Matplotlib',
    'Seaborn',
    'AWS',
    'Git',
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;