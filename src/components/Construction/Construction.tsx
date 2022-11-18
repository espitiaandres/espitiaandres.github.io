import { useTitle } from "react-use";
import Animator from "../Animator/Animator";

const Construction = () => {
  useTitle("Andres Espitia | Under Construction");

  return (
    <div className="text-black">
      <div className="text-xl mb-4">🚧 Under Construction 🚧</div>
      <div>This section is still being built out. Come back soon!</div>
    </div>
  );
};

export default Animator(Construction);
