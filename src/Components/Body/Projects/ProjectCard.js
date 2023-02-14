import React from "react";
import "./projectcard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-link">
          {project.deploylink && (
            <a className="project-link" href={project.deploylink}>
              <div className="linkbtn">
                <i class="fas fa-globe"></i>Deploy
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="linkbtn">
                <i class="fa fa-github"></i>GitHub
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags?.map((tag) => {
            return (
              <label className="tag">
                {tag} </label>
            )
          })}
        </div>
      </div>
      <img src={project.image} alt="img" className="project-photo" />
    </div>
  );
};

export default ProjectCard;
