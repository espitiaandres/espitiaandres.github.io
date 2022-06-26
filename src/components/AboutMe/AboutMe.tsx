import "animate.css";

const AboutMe = () => {
  return (
    <div className="animate__animated animate__fadeIn animate__delay-0.3s">
      <div className="text-black text-base mb-2">
        I'm a University of Waterloo Engineering '22 graduate interested in Full
        Stack Web Development, Machine Learning, and Optimization. Currently,
        I'm working as a Full-Stack Software Engineer at&nbsp;
        <a
          className="link text-secondary"
          href="https://federato.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          Federato
        </a>
        , helping improve the underwriting workflow.
      </div>
      <div className="text-black text-base mb-2">
        When I'm not coding, I like to listen to music, play piano and violin,
        and play/watch basketball and soccer. Recently, I've been interested in
        FL Studio and Origami.
      </div>
    </div>
  );
};

export default AboutMe;
