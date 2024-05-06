import styled from "styled-components";

export const ProjectsWrapper = styled.div``;

export const ProjectsTitleWrapper = styled.h1`
  font-family: Assistant, sans-serif;
  text-align: center;
  font-size: min(120px, 17vw);
  font-weight: 400;
  margin-top: 200px;

  @media screen and (max-width: 1300px) {
    margin-bottom: 60px;
  }
`;

export const ProjectsContentWrapper = styled.ul`
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  row-gap: 3vh;
  column-gap: 3vw;
  margin: 10vh 0;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
