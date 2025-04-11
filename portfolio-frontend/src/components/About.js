import React from 'react';
import './About.css'; 

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src="https://res.cloudinary.com/duccim6pz/image/upload/v1739383404/circle_1_nw4df6.png" alt="Profile" className="profile-pic" />
        <div className="about-text">
          <h3>Hi, I'm Ravivarma Gollapalli</h3>
          <p>
          Aspiring entry-level Full Stack Developer skilled in MERN Technologies. Eager to contribute to user-friendly web applications and 
          enhance expertise in both Front-End and Back-End technologies within a collaborative team.  </p>
          <h4>Academics</h4>
          <ul>
            <li>B.Tech, Sardar Vallabhbhai National Institute of Technology, Surat , 2021-2025 </li>
            <li>Board of Intermediate Education , Elite Junior College, Dubacherla , 2019-2021 </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;