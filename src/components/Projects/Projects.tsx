//
//  Projects.tsx
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import { useState, useEffect, useRef } from "react";
import "animate.css";
import {
  achievementsList,
  IAchievement,
  onExpandCollapse,
} from "./AchievementsStaticData.ts";
import Achievement from "./Achievement.tsx";

const Achievements = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputsRef = useRef([]);

  useEffect(() => {
    inputsRef.current = inputsRef.current.slice(0, achievementsList.length);
  }, []);

  return (
    <div className="animate__animated animate__fadeIn animate__delay-0.3s">
      <div className="text-black mb-4">
        Here are some projects and achievements I'm proud of:
      </div>
      <div className="flex flex-row justify-start">
        <button
          className="btn btn-outline btn-primary border-2 -mt-2 mb-2 w-40"
          onClick={() =>
            onExpandCollapse({ inputsRef, isExpanded, setIsExpanded })
          }
        >
          {isExpanded ? "Collapse" : "Expand"} All
        </button>
      </div>
      {achievementsList.map(
        ({ text, links, description, image }: IAchievement, i: number) => (
          <Achievement
            text={text}
            links={links}
            description={description}
            image={image}
            inputsRef={inputsRef}
            setIsExpanded={setIsExpanded}
            i={i}
          />
        )
      )}
    </div>
  );
};

export default Achievements;
