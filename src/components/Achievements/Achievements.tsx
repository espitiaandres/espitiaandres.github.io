import { useState, useEffect, useRef } from "react";
import "animate.css";
import { achievementsList, IAchievement } from "./AchievementsStaticData.ts";

const Achievements = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputsRef = useRef([]);

  useEffect(() => {
    inputsRef.current = inputsRef.current.slice(0, achievementsList.length);
  }, []);

  return (
    <div className="animate__animated animate__fadeIn animate__delay-0.3s">
      <div className="flex flex-row justify-between">
        <div className="text-black mb-4">
          Here are some projects and achievements I'm proud of:
        </div>
        <button
          className="btn btn-outline btn-primary -mt-2 mb-2 w-40"
          onClick={() => {
            setIsExpanded(!isExpanded);
            inputsRef?.current?.map((d) => d.click());
          }}
        >
          {isExpanded ? "Collapse" : "Expand"} All
        </button>
      </div>
      {achievementsList.map(
        ({ text, links, description, image }: IAchievement, i: number) => (
          <div>
            <div
              tabindex="0"
              className="collapse collapse-arrow rounded-box text-black border-2 hover:border-primary ease-in duration-100"
            >
              <input
                type="checkbox"
                ref={(el) => ((inputsRef as any).current[i] = el)}
              />
              <div className="collapse-title text-lg font-medium text-secondary rounded-full truncate">
                {text}
              </div>
              <div className="collapse-content ease-in duration-100">
                <div className="mb-2">{description ?? ""}</div>
                {links?.length > 0 && (
                  <div>
                    <div>See more:</div>
                    {links?.map((l: IAchievement) => (
                      <div className="flex flex-row space-x-2">
                        <div>-</div>
                        <a
                          className="link link-hover hover:text-secondary break-words"
                          href={l}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {l}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Achievements;
