export type Achievement = {
  text: string;
  links: string[];
  description: string;
  image?: string;
};

/*
TODO: 
- Waterloo math contests?
- IB Diploma?
*/

export const achievementsList: Achievement[] = [
  {
    text: "Studyfi",
    links: [
      "https://github.com/espitiaandres/studyfi",
      "https://github.com/espitiaandres/studyfi-backend",
    ],
    description:
      "A place to study, listen to music, and chat with friends. Getting work done while listening to music on Spotify on one page. To build this, I used Node, Express, React, Redux, Web sockets, Material UI, and the Spotify API.",
    // image: AstronautJellyfish,
  },
  {
    text: "Porespy Web App",
    links: [
      "https://porespy.org/",
      "https://github.com/PMEAL/porespy-frontend",
      "https://github.com/PMEAL/porespy-backend",
    ],
    description:
      "PoreSpy is a collection of image analysis functions used to extract information from 3D images of porous materials (typically obtained from X-ray tomography). To make this python library into a full-stack web app, I used React, Redux, and Django.",
    // image: AstronautJellyfish,
  },
  {
    text: "Udemy Courses",
    links: [
      "https://www.udemy.com/certificate/UC-7d6aa75a-4b43-4ce4-ac8d-6be29fd5ca76/",
      "https://www.udemy.com/certificate/UC-fff41949-10a7-46ea-8803-b2a83e27b456/",
      "https://www.udemy.com/certificate/UC-1edea84a-855a-4d1d-9f9b-e5c1d48fda7c/",
      "https://www.udemy.com/certificate/UC-4cf5bf40-8b5b-4917-a0f7-d8a375650fff/",
    ],
    description: "Some interesting courses I've completed that I recommend.",
    // image: AstronautJellyfish,
  },
  {
    text: "Research Papers",
    links: ["https://iopscience.iop.org/article/10.1149/2.0061916jes/meta"],
    description:
      "Electrochemical Formation of Four Al-Li Phases (β-AlLi, Al2Li3, AlLi2−x, Al4Li9) at Intermediate Temperatures. Aluminum electrodes have been considered for use in lithium and lithium ion batteries for nearly four decades. Although the Al-Li equilibrium phase diagram contains multiple Al-Li phases, only β-AlLi forms during room temperature cycling. Al2Li3 can be formed when electrochemically inserting Li at temperatures above 400°C, and Al4Li9 is occasionally detected after extended room temperature cycling. Here, four equilibrium phases of Al-Li (β-AlLi, Al2Li3, AlLi2−x, Al4Li9) were produced by the electrochemical lithiation and delithiation of 1100-series aluminum foil at moderate to intermediate temperatures (30–150°C) using a carbonate-based electrolyte. Phase identification was performed using ex-situ X-ray diffraction and coulometry, after accounting for the consumption of lithium in electrolyte breakdown products. After overcoming an initial nucleation barrier, β-AlLi formed at all temperatures, Al2Li3 and AlLi2−x formed at temperatures above 60°C at moderate rates, and above 35°C at low rates, and Al4Li9 formed at temperatures above 100°C. All expected phases were also encountered during delithiation. The effects of nucleation and diffusion on observed phases and capacities are also discussed.",
    // image: AstronautJellyfish,
  },
  {
    text: "Pokedex",
    links: [
      "https://github.com/espitiaandres/pokedex",
      "https://espitiaandres.com/pokedex/",
    ],
    description:
      "An interactive pokedex that lets the user catch and remove wild pokemon, and displays their statistics such as type, abilities, move, and so on",
    // image: AstronautJellyfish,
  },
  {
    text: "Fantasy Basketball MLR Analyzer",
    links: [
      "https://github.com/espitiaandres/Multiple-Linear-Regression-Analyzer",
    ],
    description:
      "A multiple linear regression in C# and Python that analyzes a given set amount of regressors to one dependent variable. Using gnuplot, it also creates plots of each regressor with the dependent variable, and plots of how the regressors changed chronologically at different data points. I used this throughout the 2018-2019 fantasy basketball season and it helped me get 1st place!",
    // image: AstronautJellyfish,
  },
];
