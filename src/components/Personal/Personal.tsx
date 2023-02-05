import { useTitle } from "react-use";
import Card from "ui/components/Card/Card";
import { images } from "./PersonalHelpers";
import Animator from "components/Animator";

const Personal = () => {
  useTitle("Andres Espitia | Personal");

  return (
    <div>
      <div className="mb-8">Here are some cool pictures I've taken:</div>
      <div className="grid lg:gap-x-4 gap-y-6 md:grid-cols-2 mb-8">
        {images.map((img, i) => (
          <Card key={i} i={i} image={img} links={[]} withModal={true} />
        ))}
      </div>
    </div>
  );
};

export default Animator(Personal);
