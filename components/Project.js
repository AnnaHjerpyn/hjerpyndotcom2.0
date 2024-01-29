import React from 'react';

const Project = ({ title, description, imageUrl }) => {
  return (
    <div className="project-container">
      <div className="image-container">
        <img src={imageUrl} alt={`Image for ${title}`} />
      </div>
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const ProjectList = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description for Project 1",
      imageUrl: "/images/project1.jpg",
    },
    // Add more projects as needed
  ];

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
