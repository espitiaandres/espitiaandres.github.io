//
//  Projects.tsx
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import { useState, useEffect, useRef } from "react";
// import "animate.css";
import {
  achievementsList,
  // IAchievement,
  Achievement,
  onExpandCollapse,
} from "./AchievementsStaticData";
// import Achievement from "./Achievement";
import Modal from "../Modal/Modal";

const Achievements = () => {
  const inputsRef = useRef([]);

  useEffect(() => {
    inputsRef.current = inputsRef.current.slice(0, achievementsList.length);
  }, []);

  return (
    <div
    // className="w-5/6"
    // className="animate__animated animate__fadeIn animate__delay-0.3s"
    >
      <div className="text-black mb-8">
        Here are some achievements and projects I've worked on:
      </div>
      <div className="grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
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
