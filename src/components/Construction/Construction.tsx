import { useTitle } from "react-use";
import Animator from "../Animator/Animator";
import { achievementsList } from "../Projects/ProjectsHelpers";

const Construction = () => {
  useTitle("Andres Espitia | Under Construction");

  return (
    <div>
      <div className="text-xl mb-4">🚧 Under Construction 🚧</div>
      <div className="grid lg:gap-x-4 gap-y-4 md:grid-cols-2 mb-8">
        {/* {achievementsList.map(
          ({ header, links, description, image }, i: number) => (
            <div>
              <figure>
                <img
                  src={image}
                  className="object-cover h-96 w-full rounded-xl"
                  alt={image}
                />
              </figure>
            </div>
          )
        )} */}
      </div>
    </div>
  );
};

export default Animator(Construction);
