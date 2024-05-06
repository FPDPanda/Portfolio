import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 100px;
  width: 100vw;
  height: max(10vh, 100px);

  #contact-title {
    text-align: center;
    font-family: Share Tech, sans-serif;
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  #contact-list {
    height: auto;
    color: #fff;
    justify-content: center;
    list-style: none;
  }

  #contact-list,
  #contact-list li {
    width: 100%;
    display: flex;
    align-items: center;
  }

  #contact-list li {
    justify-content: space-around;
  }

  #contact-list img {
    height: 3vh;
    transition: 0.5s;
  }

  #contact-list li img:hover {
    transform: translateY(-50%);
  }

  #contact-list a {
    font-size: min(25px, 7vw);
    color: #000;
  }
`;
