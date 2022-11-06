// import "animate.css";
import { useTitle } from "react-use";
import { achievementsList, Achievement } from "./ProjectsHelpers";
import Card from "../Card/Card";

const Achievements = () => {
  useTitle("Andres Espitia | Projects");

  return (
    <div
    // className="animate__animated animate__fadeIn animate__delay-0.3s"
    >
      <div className="text-black mb-8 text-base md:text-lg">
        Here are some achievements and projects I've worked on:
      </div>
      <div className="grid lg:gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3 mb-4">
        {achievementsList.map(
          ({ text, links, description, image }: Achievement, i: number) => (
            <Card
              header={text}
              description={description}
              i={i}
              key={i}
              links={links}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Achievements;
