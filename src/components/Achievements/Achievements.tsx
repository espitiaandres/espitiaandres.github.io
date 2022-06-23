import "animate.css";
import { useState } from "react";
import AstronautJellyfish from "../../images/jpg/astronaut jellyfish.jpg";

const Achievements = () => {
  interface IAchievement {
    text: string;
    links: string[];
    description: string;
    image?: string;
  }

  const achievements: IAchievement[] = [
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
      text: "Graduated from Engineering at University of Waterloo with distinction",
      links: [],
      description: "",
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

  return (
    <div className="animate__animated animate__fadeIn animate__delay-0.5s">
      <div className="text-black mb-2">
        Here are some projects and achievements I'm proud of:
      </div>
      {achievements.map(({ text, links, description, image }) => (
        <div>
          <div
            tabindex="0"
            class="collapse collapse-plus rounded-box text-black border-2 hover:border-primary ease-in duration-100"
          >
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium text-secondary rounded-full truncate">
              {text}
            </div>
            <div className="collapse-content ease-in duration-100">
              <div>{description}</div>
              {links.map((l) => (
                <div>
                  -{" "}
                  <a
                    className="link link-hover hover:text-secondary"
                    href={l}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {l}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
