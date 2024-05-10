import styled from "styled-components";

export const AboutMeWrapper = styled.div`
  width: 100vw;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Assistant;

  #aboutme_text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #aboutme_text {
    margin-top: 10vh;
  }

  #aboutme_text h1 {
    margin-bottom: 20px;
    text-align: center;
    font-family: Assistant, sans-serif;
    font-size: min(120px, 17vw);
    font-weight: 400;
  }

  #aboutme_text h2,
  #aboutme_text p {
    width: 70%;
    font-size: min(30px, 7vw);
  }

  #aboutme_text h2 {
    text-align: left;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  #aboutme_text #trivia {
    width: 70%;
    text-align: left;
    list-style: none;
  }

  #aboutme_text .triviabits {
    font-size: min(25px, 7vw);
  }

  @media screen and (max-width: 900px) {
    #aboutme_text #trivia,
    #aboutme_text h2,
    #aboutme_text p {
      width: 95%;
    }
  }

  .technologies-bar {
    width: 80%;
    display: grid;
    grid-template-areas: "html5 css3 javascript react";
    align-items: center;
    justify-items: center;
    gap: 2rem;
  }
  #html5 {
    grid-area: html5;
  }
  #css3 {
    grid-area: css3;
  }
  #javascript {
    grid-area: javascript;
  }
  #react {
    grid-area: react;
  }
  @media screen and (max-width: 700px) {
    .technologies-bar {
      grid-template-areas: "html5       css3" "javascript  react";
    }
  }
`;
