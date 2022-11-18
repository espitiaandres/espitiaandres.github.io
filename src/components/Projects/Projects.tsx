import { useTitle } from "react-use";
import { achievementsList } from "./ProjectsHelpers";
import Card from "../Card/Card";
import Animator from "../Animator/Animator";

const Achievements = () => {
  useTitle("Andres Espitia | Projects");

  return (
    <div>
      <div className="text-black mb-8 text-base md:text-lg">
        Here are some achievements and projects I've worked on:
      </div>
      <div className="grid lg:gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {achievementsList.map(
          ({ header, links, description, image }, i: number) => (
            <Card
              key={i}
              header={header}
              description={description}
              i={i}
              links={links}
              image={image}
              shadow="heavy"
            />
          )
        )}
      </div>
    </div>
  );
};

export default Animator(Achievements);
