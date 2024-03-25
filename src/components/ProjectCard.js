import React from "react";


const ProjectCard = ({ project }) => {
  const handleShowDemo = () => {
    window.open(project.videoUrl, "_blank"); 
  };

  const handleShowCode=()=>{
    window.open(project.codeLink,"_blank")
  }

  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <img src={project.imageUrl} alt={project.title} />
      <p>{project.description}</p>
      <div className="CardBtn">
        <button onClick={handleShowDemo} className="demoBtn">Show Demo</button>
        <button onClick={handleShowCode} className="CodeBtn">Show Code</button>
      </div>
    </div>
  );
};

export default ProjectCard;
