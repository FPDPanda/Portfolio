import emailIcon from "../../images/icons/email.png";
import linkedinIcon from "../../images/icons/linkedin.png";
import githubIcon from "../../images/icons/github.png";
import { ContactMeItems } from "../../types/ContactMe";

class ContactMeFeature {
  contactMeItems: ContactMeItems;

  constructor() {
    this.contactMeItems = {
      email: {
        imageUrl: emailIcon,
        alt: "logo(email)",
        href: "mailto:jeanjacques7.jj@gmail.com",
        target: "_top",
      },
      linkedin: {
        imageUrl: linkedinIcon,
        alt: "logo(linkedin)",
        href: "https://www.linkedin.com/in/jean-jacques000/",
        target: "_blank",
      },
      github: {
        imageUrl: githubIcon,
        alt: "logo(github)",
        href: "https://github.com/FPDPanda",
        target: "_blank",
      },
    };
  }

  getContactMeItems(): ContactMeItems {
    return this.contactMeItems;
  }
}

const contactMeFeature = new ContactMeFeature();

export default contactMeFeature;
