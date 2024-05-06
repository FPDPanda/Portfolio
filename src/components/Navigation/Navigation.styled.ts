import styled from "styled-components";

export const NavigationWrapper = styled.div`
  position: fixed;
  height: max(8vh, 90px);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: hsla(0, 0%, 100%, 0.95);
  box-shadow: 0 0 3px #c7c7c7;
  z-index: 999;
  padding: 1rem;

  #logo {
    width: 4rem;
    margin: 1rem;
    cursor: pointer;
  }

  #menu {
    position: relative;
    width: 600px;
    margin-left: auto;
    list-style: none;
    font-family: Assistant, sans-serif;
    font-weight: 700;
  }

  #menu,
  .menu__item {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .menu__item {
    transition: 0.2s;
  }

  #menu div,
  .menu__item {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
  }

  #menu div {
    position: relative;
    height: 50px;
    overflow: hidden;
    text-decoration: none;
    text-align: center;
    color: #424242;
  }

  #menu div img,
  #menu div p {
    height: 50px;
    transition: 0.5s;
  }

  .menu__link {
    font-size: min(25px, 7vw);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .menu__item:hover {
    cursor: pointer;
  }

  #menu div:hover img,
  #menu div:hover p {
    transform: translateY(-50px);
  }

  @media screen and (max-width: 700px) {
    #logo {
      display: none;
    }
    #menu {
      width: 100%;
    }
    .menu__link {
      font-size: 20px;
    }
  }
`;
