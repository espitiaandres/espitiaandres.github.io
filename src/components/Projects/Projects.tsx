import { useTitle } from "react-use";
import { achievementsList } from "./ProjectsHelpers";
import Card from "ui/components/Card/Card";
import Animator from "components/Animator";

const Achievements = () => {
  useTitle("Andres Espitia | Projects");

  return (
    <div>
      <div className="mb-8">
        Here are some achievements and projects I've worked on:
      </div>
      <div className="grid lg:gap-x-8 gap-y-6 md:grid-cols-2 mb-8">
        {achievementsList.map(
          ({ header, links, description, image }, i: number) => (
            <Card
              key={i}
              header={header}
              description={description}
              i={i}
              links={links}
              image={image}
              withModal={true}
              withText={true}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Animator(Achievements);
