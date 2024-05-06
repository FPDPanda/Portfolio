import React, { FC, MutableRefObject } from "react";
import { FooterWrapper } from "./Footer.styled";

interface FooterProps {
  reference: MutableRefObject<any>;
}

const Footer: FC<FooterProps> = ({ reference }) => (
  <FooterWrapper ref={reference}>
    <h4 id="contact-title">Entre em contato!</h4>
    <ul id="contact-list">
      <li>
        <a
          href="mailto:jeanjacques7.jj@gmail.com"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <img
            src="data:image/png;base64,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"
            alt="logo(email)"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/jean-jacques000/"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <img
            src="data:image/png;base64,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AADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC/T/ATy2LnwFUzNHAAAAAElFTkSuQmCC"
            alt="logo(linkedin)"
          />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/FPDPanda"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <img
            src="data:image/png;base64,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"
            alt="logo(github)"
          />
        </a>
      </li>
    </ul>
  </FooterWrapper>
);

export default Footer;