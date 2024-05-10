import styled from "styled-components";

export const ProjectItemWrapper = styled.li`
  position: relative;
  height: 27rem;
  width: 23rem;
  transition: 0.2s;
  background-color: #fff;
  box-shadow: 0 2px 4px 2px hsla(0, 0%, 89.4%, 0.5);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: Assistant, sans-serif;

  & > * {
    margin-bottom: 1vh;
    text-align: center;
  }
`;

export const ProjectImageContainerWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  border-radius: 15px 15px 0 0;
  background-size: cover;
  overflow: hidden;
`;

export const ProjectImagePaddingWrapper = styled.div`
  width: 100%;
  padding: 0 0 56.5%;
`;

export const ProjectImageWrapper = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 1;
  transition-delay: 500ms;
`;

export const ProjectTitleWrapper = styled.h2`
  margin-top: 220px;
  font-size: 1.5rem;
`;

export const ProjectDescriptionWrapper = styled.p`
  margin: auto;
  width: 90%;
`;

export const ProjectButtonWrapper = styled.a`
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  color: #fff;
  background-color: #2591cf;
  transition: 0.3s;

  &:hover {
    background-color: #2ab1ff;
  }
`;
