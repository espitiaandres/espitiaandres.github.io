import { useTitle } from "react-use";
import LandingPageIcons from "components/LandingPageIcons/LandingPageIcons";
import Animator from "components/Animator";

function AboutMe() {
  useTitle("Andres Espitia | About Me");

  return (
    <div>
      <div className="mb-2">
        I'm a University of Waterloo Engineering '22 graduate interested in Full
        Stack Web Development, Machine Learning, and Optimization. Currently,
        I'm working as a Full-Stack Software Engineer at&nbsp;
        <a
          className="link link-primary link-hover font-medium"
          href="https://federato.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          Federato
        </a>
        , helping improve the underwriting workflow.
      </div>
      <div className="mb-2">
        When I'm not coding I like to listen to music, play piano and violin,
        and play/watch basketball and soccer. Recently, I've been interested in
        FL Studio and Origami.
      </div>
      <LandingPageIcons />
    </div>
  );
}

export default Animator(AboutMe);
