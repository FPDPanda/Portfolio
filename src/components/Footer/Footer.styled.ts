import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 100px;
  width: 100vw;
  height: max(10vh, 100px);
`;

export const FooterTitleWrapper = styled.h4`
  text-align: center;
  font-family: Share Tech, sans-serif;
  font-weight: 400;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const FooterItemListWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const FooterItemWrapper = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const FooterLinkWrapper = styled.a`
  font-size: min(25px, 7vw);
  color: #000;
`;

export const FooterIconWrapper = styled.img`
  height: 3vh;
  transition: 0.5s;

  &:hover {
    transform: translateY(-50%);
  }
`;
