import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./Portfolio.css";
import { useNavigate } from "react-router-dom";
import AddProjectForm from "./AddProjectForm";

const Portfolio = ({ projects }) => {
  const navigate = useNavigate();
  const [addForm, setForm] = useState(false);

  const handleAddProjectClick = () => {
    navigate("/add-form");
    setForm(true);
  };

  const cancelAddProjectClick = () => {
    setForm(false);
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {!addForm && (
        <button className="formBtn" onClick={handleAddProjectClick}>
          Add New Project
        </button>
      )}
      {addForm && (
        <div>
          <AddProjectForm />
          <button className="formBtn" onClick={cancelAddProjectClick}>
            Cancel
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
