import React, { FC, MutableRefObject } from "react";
import {
  ProjectsContentWrapper,
  ProjectsTitleWrapper,
  ProjectsWrapper,
} from "./Projects.styled";
import Project from "../Project/Project";
import projectsFeature from "../../features/ProjectsFeature";

interface ProjectsProps {
  reference: MutableRefObject<any>;
}

const Projects: FC<ProjectsProps> = ({ reference }) => {
  const projects = projectsFeature.getProjects();

  return (
    <ProjectsWrapper ref={reference}>
      <ProjectsTitleWrapper>Projects</ProjectsTitleWrapper>
      <ProjectsContentWrapper>
        {projects.map((project) => (
          <Project
            key={project.title}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
            href={project.href}
          />
        ))}
      </ProjectsContentWrapper>
    </ProjectsWrapper>
  );
};

export default Projects;
