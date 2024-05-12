import React, { FC, MutableRefObject } from "react";
import {
  FooterIconWrapper,
  FooterItemListWrapper,
  FooterItemWrapper,
  FooterLinkWrapper,
  FooterTitleWrapper,
  FooterWrapper,
} from "./Footer.styled";
import contactMeFeature from "../../features/ContactMeFeature";

interface FooterProps {
  reference: MutableRefObject<any>;
}

const Footer: FC<FooterProps> = ({ reference }) => {
  const contactmeItems = contactMeFeature.getContactMeItems();

  return (
    <FooterWrapper ref={reference}>
      <FooterTitleWrapper>Get in touch!</FooterTitleWrapper>
      <FooterItemListWrapper>
        {Object.keys(contactmeItems).map(
          (key: "email" | "linkedin" | "github") => (
            <FooterItemWrapper>
              <FooterLinkWrapper
                href={contactmeItems[key].href}
                target={contactmeItems[key].target}
                rel="noreferrer nofollow"
              >
                <FooterIconWrapper
                  src={contactmeItems[key].imageUrl}
                  alt={contactmeItems[key].alt}
                />
              </FooterLinkWrapper>
            </FooterItemWrapper>
          )
        )}
      </FooterItemListWrapper>
    </FooterWrapper>
  );
};

export default Footer;
