import React, { useRef } from "react";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Navigation from "./components/Navigation/Navigation";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";

function App() {
  const introSection = useRef(null);
  const projectsSection = useRef(null);
  const aboutmeSection = useRef(null);
  const footerSection = useRef(null);

  return (
    <div>
      <Navigation
        introSectionReference={introSection}
        projectsSectionReference={projectsSection}
        aboutmeSectionReference={aboutmeSection}
        footerSectionReference={footerSection}
      />
      <Intro reference={introSection} />
      <Projects reference={projectsSection} />
      <AboutMe reference={aboutmeSection} />
      <Footer reference={footerSection} />
    </div>
  );
}

export default App;
