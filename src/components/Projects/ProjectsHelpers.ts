import Studyfi from "../../assets/images/studyfi.png";

export type Achievement = {
  header: string;
  links: Link[];
  description: string;
  image?: string;
};

export type Link = {
  url: string;
  name: string;
};

/*
TODO: 
- Waterloo math contests?
- IB Diploma?
*/

export const achievementsList: Achievement[] = [
  {
    header: "Studyfi",
    links: [
      {
        url: "https://github.com/espitiaandres/studyfi",
        name: "Frontend",
      },
      {
        url: "https://github.com/espitiaandres/studyfi-backend",
        name: "Backend",
      },
    ],
    description:
      "A place to study, listen to music, and chat with friends. Getting work done while listening to music on Spotify on one page. To build this, I used Node, Express, React, Redux, Web sockets, Material UI, and the Spotify API.",
    image: Studyfi,
  },
  {
    header: "penguin_py",
    links: [
      {
        url: "https://pypi.org/project/penguin-py/",
        name: "PyPI",
      },
      {
        url: "https://github.com/espitiaandres/penguin",
        name: "Github",
      },
    ],
    description:
      "Penguin is a lightweight, customizable stopwatch ⏱ decorator that helps you determine how long it takes for your functions to run. It supports both synchronous and asynchronous functions.",
    // image: AstronautJellyfish,
  },
  {
    header: "Porespy Web App",
    links: [
      {
        url: "https://porespy.org/",
        name: "Package",
      },
      {
        url: "https://github.com/PMEAL/porespy-frontend",
        name: "Frontend",
      },
      {
        url: "https://github.com/PMEAL/porespy-backend",
        name: "Backend",
      },
    ],
    description:
      "PoreSpy is a collection of image analysis functions used to extract information from 3D images of porous materials (typically obtained from X-ray tomography). To make this python library into a full-stack web app, I used React, Redux, and Django.",
    // image: AstronautJellyfish,
  },
  {
    header: "Udemy Courses",
    links: [
      {
        url: "https://www.udemy.com/certificate/UC-7d6aa75a-4b43-4ce4-ac8d-6be29fd5ca76/",
        name: "The Modern GraphQL Bootcamp (with Node.js and Apollo)",
      },
      {
        url: "https://www.udemy.com/certificate/UC-fff41949-10a7-46ea-8803-b2a83e27b456/",
        name: "The Complete Node.js Developer Course (3rd Edition)",
      },
      {
        url: "https://www.udemy.com/certificate/UC-1edea84a-855a-4d1d-9f9b-e5c1d48fda7c/",
        name: "The Complete React Developer Course (w/ Hooks and Redux)",
      },
      {
        url: "https://www.udemy.com/certificate/UC-4cf5bf40-8b5b-4917-a0f7-d8a375650fff/",
        name: "Complete Machine Learning & Data Science Bootcamp 2023",
      },
    ],
    description: "Some interesting courses I've completed that I recommend.",
    // image: AstronautJellyfish,
  },
  {
    header: "Research Papers",
    links: [
      {
        url: "https://iopscience.iop.org/article/10.1149/2.0061916jes/meta",
        name: "Abstract",
      },
      {
        url: "https://iopscience.iop.org/article/10.1149/2.0061916jes/pdf",
        name: "PDF",
      },
    ],
    description:
      "Electrochemical Formation of Four Al-Li Phases (β-AlLi, Al2Li3, AlLi2−x, Al4Li9) at Intermediate Temperatures. Aluminum electrodes have been considered for use in lithium and lithium ion batteries for nearly four decades. Although the Al-Li equilibrium phase diagram contains multiple Al-Li phases, only β-AlLi forms during room temperature cycling. Al2Li3 can be formed when electrochemically inserting Li at temperatures above 400°C, and Al4Li9 is occasionally detected after extended room temperature cycling. Here, four equilibrium phases of Al-Li (β-AlLi, Al2Li3, AlLi2−x, Al4Li9) were produced by the electrochemical lithiation and delithiation of 1100-series aluminum foil at moderate to intermediate temperatures (30–150°C) using a carbonate-based electrolyte. Phase identification was performed using ex-situ X-ray diffraction and coulometry, after accounting for the consumption of lithium in electrolyte breakdown products. After overcoming an initial nucleation barrier, β-AlLi formed at all temperatures, Al2Li3 and AlLi2−x formed at temperatures above 60°C at moderate rates, and above 35°C at low rates, and Al4Li9 formed at temperatures above 100°C. All expected phases were also encountered during delithiation. The effects of nucleation and diffusion on observed phases and capacities are also discussed.",
    // image: AstronautJellyfish,
  },
  {
    header: "Pokedex",
    links: [
      {
        url: "https://github.com/espitiaandres/pokedex",
        name: "Github",
      },
      {
        url: "https://espitiaandres.com/pokedex/",
        name: "Live",
      },
    ],
    description:
      "An interactive pokedex that lets the user catch and remove wild pokemon, and displays their statistics such as type, abilities, move, and so on",
    // image: AstronautJellyfish,
  },
  {
    header: "Fantasy Basketball MLR Analyzer",
    links: [
      {
        url: "https://github.com/espitiaandres/Multiple-Linear-Regression-Analyzer",
        name: "Github",
      },
    ],
    description:
      "A multiple linear regression in C# and Python that analyzes a given set amount of regressors to one dependent variable. Using gnuplot, it also creates plots of each regressor with the dependent variable, and plots of how the regressors changed chronologically at different data points. I used this throughout the 2018-2019 fantasy basketball season and it helped me get 1st place!",
    // image: AstronautJellyfish,
  },
];
