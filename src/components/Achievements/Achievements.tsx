import "animate.css";
import { achievementsList, IAchievement } from "./AchievementsStaticData.ts";

const Achievements = () => {
  return (
    <div className="animate__animated animate__fadeIn animate__delay-0.5s">
      <div className="text-black mb-4">
        Here are some projects and achievements I'm proud of:
      </div>
      {achievementsList.map(
        ({ text, links, description, image }: IAchievement) => (
          <div>
            <div
              tabindex="0"
              class="collapse collapse-arrow rounded-box text-black border-2 hover:border-primary ease-in duration-100"
            >
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium text-secondary rounded-full truncate">
                {text}
              </div>
              <div className="collapse-content ease-in duration-100">
                <div className="mb-2">{description}</div>
                {links.length > 0 && (
                  <div>
                    <div>See more:</div>
                    {links.map((l: IAchievement) => (
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
