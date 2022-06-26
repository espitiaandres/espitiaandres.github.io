//
//  AchievementsStaticData.ts
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import AstronautJellyfish from "../../images/jpg/astronaut jellyfish.jpg";

export interface IAchievement {
  text: string;
  links: string[];
  description: string;
  image?: string;
}

/*
TODO: 
- Waterloo math contests?
*/

export const achievementsList: IAchievement[] = [
  {
    text: "Studyfi",
    links: [
      "https://github.com/espitiaandres/studyfi",
      "https://github.com/espitiaandres/studyfi-backend",
    ],
    description:
      "A place to study, listen to music, and chat with friends. Getting work done while listening to music on Spotify on one page. To build this, I used Node, Express, React, Redux, Web sockets, Material UI, and the Spotify API.",
    image: AstronautJellyfish,
  },
  {
    text: "Porespy Full-Stack Web App",
    links: [
      "https://porespy.org/",
      "https://github.com/PMEAL/porespy-frontend",
      "https://github.com/PMEAL/porespy-backend",
    ],
    description:
      "PoreSpy is a collection of image analysis functions used to extract information from 3D images of porous materials (typically obtained from X-ray tomography). To make this python library into a full-stack web app, I used React, Redux, and Django.",
    image: AstronautJellyfish,
  },
  {
    text: "Udemy Courses",
    links: [
      "https://www.udemy.com/certificate/UC-7d6aa75a-4b43-4ce4-ac8d-6be29fd5ca76/",
      "https://www.udemy.com/certificate/UC-fff41949-10a7-46ea-8803-b2a83e27b456/",
      "https://www.udemy.com/certificate/UC-1edea84a-855a-4d1d-9f9b-e5c1d48fda7c/",
    ],
    description: "Some interesting courses I've completed that I recommend.",
    image: AstronautJellyfish,
  },
  {
    text: "Research Papers",
    links: ["https://iopscience.iop.org/article/10.1149/2.0061916jes/meta"],
    description:
      "Electrochemical Formation of Four Al-Li Phases (β-AlLi, Al2Li3, AlLi2−x, Al4Li9) at Intermediate Temperatures",
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
];

export const onExpandCollapse = ({ inputsRef, isExpanded, setIsExpanded }) => {
  const openedAccordions = inputsRef?.current?.every((d) => d?.checked);

  if (openedAccordions) {
    inputsRef?.current?.map((d) => {
      d?.click();
    });

    setIsExpanded(!isExpanded);
  } else {
    inputsRef?.current?.map((d) => {
      !d?.checked && d?.click();
    });

    setIsExpanded(true);
  }
};
