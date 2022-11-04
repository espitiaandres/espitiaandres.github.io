//
//  Projects.tsx
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

// import "animate.css";
import { achievementsList, Achievement } from "./AchievementsStaticData";
import Modal from "../Modal/Modal";

const Achievements = () => {
  return (
    <div
    // className="animate__animated animate__fadeIn animate__delay-0.3s"
    >
      <div className="text-black mb-8 text-base md:text-lg">
        Here are some achievements and projects I've worked on:
      </div>
      <div className="grid lg:gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
        {achievementsList.map(
          ({ text, links, description, image }: Achievement, i: number) => (
            <Modal header={text} description={description} />
          )
        )}
      </div>
    </div>
  );
};

export default Achievements;
