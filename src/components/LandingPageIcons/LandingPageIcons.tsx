//
//  LandingPageIcons.tsx
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

interface IIConsProp {
  href: string;
  fontAwesome: string[] | any;
  label: string;
}

// TODO: add twitter, medium...?
// TODO: move this out into the AboutMe.tsx component

const iconsProps: IIConsProp[] = [
  {
    href: "https://github.com/espitiaandres",
    fontAwesome: ["fab", "github-alt"],
    label: "Github",
  },
  {
    href: "https://www.linkedin.com/in/espitiaandres",
    fontAwesome: ["fab", "linkedin-in"],
    label: "LinkedIn",
  },
  {
    href: "mailto:afespiti@edu.uwaterloo.ca",
    fontAwesome: ["fas", "envelope"],
    label: "Email",
  },
  {
    href: "https://dribbble.com/espitiaandres",
    fontAwesome: ["fab", "dribbble"],
    label: "Dribbble",
  },
  {
    href: "https://medium.com/@espitiaandres123",
    fontAwesome: ["fab", "medium"],
    label: "Medium",
  },
  {
    href: "https://stackoverflow.com/users/13973201/espitiaandres",
    fontAwesome: ["fab", "stack-overflow"],
    label: "Stack Overflow",
  },
];

const LandingPageIcons = () => {
  library.add(fab, fas);

  return (
    <div className="text-base md:text-lg mb-2">
      <div className="text-black mb-2">I'm active on these platforms:</div>
      {iconsProps.map((icon: IIConsProp) => (
        <a
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          title={icon.href}
        >
          <div className="flex flex-row items-center">
            <FontAwesomeIcon
              className="text-secondary mr-2"
              icon={icon.fontAwesome}
            />
            <div className="text-black">{icon.label}</div>
          </div>
        </a>
      ))}
      {/* <div className="text-black flex justify-center mb-6">{hoverText}</div>
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
      </div> */}
    </div>
  );
};

export default LandingPageIcons;
