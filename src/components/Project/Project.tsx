import React, { FC } from "react";
import {
  ProjectButtonWrapper,
  ProjectDescriptionWrapper,
  ProjectImageContainerWrapper,
  ProjectImagePaddingWrapper,
  ProjectImageWrapper,
  ProjectItemWrapper,
  ProjectTitleWrapper,
} from "./Project.styled";

interface ProjectProps {
  imageUrl: string;
  title: string;
  description: string;
  href: string;
}

const Project: FC<ProjectProps> = ({ imageUrl, title, description, href }) => (
  <ProjectItemWrapper>
    <ProjectImageContainerWrapper>
      <ProjectImagePaddingWrapper aria-hidden="true"></ProjectImagePaddingWrapper>
      <ProjectImageWrapper
        aria-hidden="true"
        src={imageUrl}
        alt="Screenshot of the project"
      />
    </ProjectImageContainerWrapper>
    <ProjectTitleWrapper>{title}</ProjectTitleWrapper>
    <ProjectDescriptionWrapper>{description}</ProjectDescriptionWrapper>
    <ProjectButtonWrapper href={href} target="_blank" rel="noreferrer nofollow">
      Ir para a página
    </ProjectButtonWrapper>
  </ProjectItemWrapper>
);

export default Project;
