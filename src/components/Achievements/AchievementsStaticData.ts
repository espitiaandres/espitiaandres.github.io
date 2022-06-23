import AstronautJellyfish from "../../images/jpg/astronaut jellyfish.jpg";

export interface IAchievement {
  text: string;
  links: string[];
  description: string;
  image?: string;
}

export const achievementsList: IAchievement[] = [
  {
    text: "Studyfi",
    links: [
      "https://github.com/espitiaandres/studyfi",
      "https://github.com/espitiaandres/studyfi-backend",
    ],
    description:
      "A place to study, listen to music, and chat with friends. Getting work done while listening to music on one page.",
    image: AstronautJellyfish,
  },
  {
    text: "Udemy Courses",
    links: [],
    description: "",
    image: AstronautJellyfish,
  },
  {
    text: "Porespy Full-Stack Web App",
    links: [
      "https://github.com/PMEAL/porespy-frontend",
      "https://github.com/PMEAL/porespy-backend",
    ],
    description: "",
    image: AstronautJellyfish,
  },
  {
    text: "Publication: Electrochemical Formation of Four Al-Li Phases (β-AlLi, Al2Li3, AlLi2−x, Al4Li9) at Intermediate Temperatures",
    links: ["https://iopscience.iop.org/article/10.1149/2.0061916jes/meta"],
    description: "",
    image: AstronautJellyfish,
  },
  {
    text: "Pokedex",
    links: ["https://github.com/espitiaandres/pokedex"],
    description: "",
    image: AstronautJellyfish,
  },
  {
    text: "Fantasy Basketball MLR Analyzer",
    links: [
      "https://github.com/espitiaandres/Multiple-Linear-Regression-Analyzer",
    ],
    description: "",
    image: AstronautJellyfish,
  },
  {
    text: "Hypatia Contest Top 25%",
    links: [],
    description: "",
    image: AstronautJellyfish,
  },
];
