import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

interface IIConsProp {
  hoverText: string;
  href: string;
  fontAwesome: string[] | any;
}

const iconsProps: IIConsProp[] = [
  {
    hoverText: "Check out my projects on Github.",
    href: "https://github.com/espitiaandres",
    fontAwesome: ["fab", "github"],
  },
  {
    hoverText: "Connect with me on LinkedIn.",
    href: "https://www.linkedin.com/in/espitiaandres",
    fontAwesome: ["fab", "linkedin-in"],
  },
  {
    hoverText: "Click here to send me an email.",
    href: "mailto:afespiti@edu.uwaterloo.ca",
    fontAwesome: ["fas", "envelope"],
  },
  {
    hoverText: "Let me throw you an alley on Dribbble!",
    href: "https://dribbble.com/espitiaandres",
    fontAwesome: ["fab", "dribbble"],
  },
];

const LandingPageIcons = () => {
  library.add(fab, fas);
  const defaultHoverText = "I'm active on these platforms.";
  const [hoverText, setHoverText] = useState(defaultHoverText);

  return (
    <div>
      <div className="text-white flex justify-center mb-6">{hoverText}</div>
      <div className="flex flex-row justify-center mb-6 space-x-4">
        {iconsProps.map((icon) => (
          <div>
            <a
              href={icon.href}
              target="_blank"
              className="bg-white border-2 border-white text-primary rounded-full text-4xl w-14 h-14 flex justify-center hover:opacity-75"
              rel="noopener noreferrer"
              onMouseOver={() => setHoverText(icon.hoverText)}
              onMouseLeave={() => setHoverText(defaultHoverText)}
              title={icon.href}
            >
              <FontAwesomeIcon className="mt-2" icon={icon.fontAwesome} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPageIcons;
