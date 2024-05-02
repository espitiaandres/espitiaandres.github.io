import { useTitle } from "react-use";
import LandingPageIcons from "components/LandingPageIcons/LandingPageIcons";
import Animator from "components/Animator";

function AboutMe() {
  useTitle("Andres Espitia | About Me");

  return (
    <div>
      <div className="text-2xl mb-4 text-primary">About Me</div>
      <div className="mb-4">
        I'm a University of Waterloo Engineering graduate currently working as a
        Full-Stack Software Engineer at&nbsp;
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
      <div className="mb-4">
        I've worked on a wide selection of projects, ranging from a workflow
        automation tool to ETL pipelines. I also like to build open source
        projects on my{" "}
        <a
          className="link link-primary link-hover font-medium"
          href="https://github.com/espitiaandres"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{" "}
        that are used&nbsp;
        <a
          className="link link-primary link-hover font-medium"
          href="https://pypistats.org/packages/penguin-py"
          target="_blank"
          rel="noopener noreferrer"
        >
          daily
        </a>
        .
      </div>
      <div className="mb-4">
        When I'm not coding, I enjoy listening to music and playing badminton. I
        also like playing piano, violin, basketball, and soccer. Recently, I've
        been interested in origami, music production, and running.
      </div>
      <LandingPageIcons />
    </div>
  );
}

export default Animator(AboutMe);
