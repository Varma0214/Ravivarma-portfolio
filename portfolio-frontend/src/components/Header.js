import React from 'react';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">MyPortfolio</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
        <a href='..' download className="download-btn">Download Resume</a>
      </nav>
    </header>
  );
}

export default Header;