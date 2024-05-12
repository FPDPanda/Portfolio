export interface ContactMeItems {
  email: ContactMe;
  linkedin: ContactMe;
  github: ContactMe;
}

interface ContactMe {
  imageUrl: string;
  alt: string;
  href: string;
  target: string;
}
