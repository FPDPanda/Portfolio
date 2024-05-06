import { Project } from "../../types/Project";
import img1 from "../../images/icons/project1.png";
import img2 from "../../images/icons/project2.png";
import img3 from "../../images/icons/project3.png";

class ProjectsFeature {
  projects: Project[];

  constructor() {
    this.projects = [
      {
        imageUrl: img1,
        title: "Key Quest",
        description:
          "Projeto pessoal criado para testar meus conhecimentos em manipulação do DOM.",
        href: "https://fpdpanda.github.io/Key-Quest/index.html",
      },
      {
        imageUrl: img2,
        title: "Ligue-4",
        description:
          "Projeto criado com um time de desenvolvedores utilizando a metodologia ágil/SCRUM",
        href: "https://fpdpanda.github.io/Dev-se/projects/project01_ligue-4/ligue4.html",
      },
      {
        imageUrl: img3,
        title: "Pet Store",
        description:
          "Meu primeiro projeto que visa criar um modelo para lojas de produtos para animais de estimação",
        href: "https://fpdpanda.github.io/templatePetStore",
      },
    ];
  }

  getProjects(): Project[] {
    return this.projects;
  }
}

const projectsFeature = new ProjectsFeature();

export default projectsFeature;
