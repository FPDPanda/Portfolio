import React, { FC, MutableRefObject } from "react";
import {
  IntroSubtitleWrapper,
  IntroTextWrapper,
  IntroTitleWrapper,
  IntroWrapper,
} from "./Intro.styled";

interface IntroProps {
  reference: MutableRefObject<any>;
}

const Intro: FC<IntroProps> = ({ reference }) => (
  <IntroWrapper ref={reference}>
    <IntroTextWrapper>
      <IntroTitleWrapper>
        Hi,
        <br />
        i'm Jean.
      </IntroTitleWrapper>
      <br />
      <IntroSubtitleWrapper>Web Developer</IntroSubtitleWrapper>
    </IntroTextWrapper>
  </IntroWrapper>
);

export default Intro;
