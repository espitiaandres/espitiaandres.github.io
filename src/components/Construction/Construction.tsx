import { useTitle } from "react-use";
import Animator from "components/Animator";

const Construction = () => {
  useTitle("Andres Espitia | Under Construction");

  return <div className="text-xl mb-4">🚧 Under Construction 🚧</div>;
};

export default Animator(Construction);
