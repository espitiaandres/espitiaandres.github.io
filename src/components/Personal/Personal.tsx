import { useTitle } from "react-use";
import Card from "ui/components/Card/Card";
import { personalItems } from "./PersonalHelpers";
import Animator from "components/Animator";

function Personal() {
  useTitle("Andres Espitia | Personal");

  return (
    <div>
      <div className="text-2xl mb-4 text-primary">Personal</div>
      <div className="mb-8">{"Here are some cool pictures I've taken :)"}</div>
      <div className="grid lg:gap-x-4 gap-y-6 md:grid-cols-2 mb-8">
        {personalItems.map(({ description, header, image }, i) => (
          <Card
            key={i}
            i={i}
            image={image}
            links={[]}
            withModal={true}
            description={description}
            header={header}
          />
        ))}
      </div>
    </div>
  );
}

export default Animator(Personal);
