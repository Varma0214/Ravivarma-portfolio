import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Yumcart App ',
      date: 'Jan 2025 - Feb 2025',
      description: "• Developed a full-stack food ordering web application (YumCart) using the MERN stack, enabling seamless user interaction and efficient order management."+
      "• Designed and built a responsive frontend using React.js, ensuring an optimal user experience across all devices."+
      "• Implemented user authentication (Sign In/Sign Up) with JWT, enhancing security and access control."+
      "• Designed a backend with Node.js, Express, and MongoDB Atlas to handle API requests, database management, and authentication."+
      "• Fetched food item data dynamically from MongoDB and displayed it on the frontend using RESTful APIs."+
      "• Implemented CRUD operations for food items in the admin panel, allowing easy product management.",
      skills: ['React.Js', 'Node.js', 'MongoDB', 'Stripe', 'Express.js'],
      link: 'https://yumcart-frontend.onrender.com/',
    },
    {
      title: 'AI-Powered Customer Support Chatbot',
      date: 'Mar 2022 - Apr 2022',
      description: 'developed an interactive AI-powered chatbot using ReactJS integrated with Gemini AI, designed to handle customer queries related to company information efficiently and conversationally.Seamless integration with Gemini AI to deliver natural language responses.Handles a wide range of customer questions regarding company services, products, contact details, and policies.Built using ReactJS with a clean, responsive UI for smooth user experience.Real-time message handling with instant feedback.Easy to customize and scale for broader business needs.',
      skills: ['React.js' ,'Application Programming Interfaces (API) ',' Google Gemini ',' Chatbot Development','CSS'],
      link: 'https://chatbot-kmgv.onrender.com/',
    },
    {
      title: 'Real-Time Chat Application using Node.js & Socket.IO',
      date: 'Mar 2025 - Apr 2025',
      description: "A real-time chat web application built using Node.js and Socket.IO that enables users to communicate instantly in a chat room after authentication.User Authentication: Signup and login forms with input validation.Secure Access: Only authenticated users can enter the chat room.Live Messaging: Real-time communication using WebSockets (Socket.IO).Multi-user Chatroom: Multiple users can join and exchange messages live.Responsive UI: Clean and user-friendly interface built with HTML, CSS, and JavaScript.",
      skills: ['HTML5 ',' Node.js ',' Socket.io'],
      link: 'https://chatapp-with-sockit-io.onrender.com/',
    },{
    
    title: 'Staffing System App',
    date: 'Nov 2024 - Dec 2024',
    description: "• Designed and developed a dummy staffing system, allowing vendors and resources to be registered and displayed on a dashboard, streamlining resource management. • Created dynamic vendor and resource forms with real-time validation, file upload, multi-select technologies, and auto-populating vendor dropdown, streamlining data entry. • Implemented back-end with Node.js and Express for handling form submissions and data storage, ensuring robust data management with MongoDB. • Used React for frontend development, integrating Axios for API calls to retrieve data from the backend, optimizing data handling with asynchronous methods.",
    skills: ['React', 'Firebase', 'CSS'],
    link: 'https://github.com/Varma0214/MERNSTACK-PROJECT',
  },
    {
      title: 'Todos Application',
      date: 'Aug 2023 - Sep 2023',
      description: "A robust task tracking system with CRUD capabilities, crafted to simplify task management.● Designed with HTML, CSS and Bootstrap to ensure a user-friendly interface for managing tasks.● Dynamic UI updates through JavaScript event listeners and DOM operations for seamless CRUD operations.● Secure task persistence through local storage methods, ensuring that tasks are never lost",
      skills: ['HTML', 'Cascading Style Sheets (CSS)' , 'Bootstrap (Framework)' ,'JavaScript'],
      link: 'https://todosappvarma.ccbp.tech/',
    },
    {
      title: 'Wikipedia Search Application',
      date: 'Jun 2023 - Jul 2023',
      description: "Developed custom wikipedia search application where user can search and view curated results and can seedetailed explanation in wikipedia by clicking on the specific result● Displayed list of search results with HTML list elements with hyperlink as url, styled list using CSS, Bootstrap and implemented responsiveness using Flex properties and CSS Box model.● Fetched search results from server asynchronously using fetch GET HTTP API call. When a user clickson a particular result, opens the website in a new tab by using the target attribute of the anchor tag inHTML.",
      skills: ['HTML' , 'Cascading Style Sheets (CSS)' , 'REST API Calls' , 'Bootstrap' ,' JavaScript'],
      link: 'https://wikipediavarma.ccbp.tech/',
    },
    {
      title: 'Countries Search',
      date: 'Aug 2023 - Sep 2023',
      description: "A comprehensive country search tool, providing instant access to the world's countries and their populations.● Responsive design through the integration of Bootstrap and CSS with asynchronous data retrievalthrough REST API calls.● Effortless search functionality through JavaScript event listeners, input elements and Array filtermethods.",
      skills: ['HTML','Cascading Style Sheets (CSS)',' REST API Calls', 'Bootstrap',' JavaScript'],
      link: 'https://countriesvarma.ccbp.tech/',
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="date">{project.date}</p>
            <p className="description">{project.description}</p>
            <div className="skills-used">
              {project.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 View Live Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
