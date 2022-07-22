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
import { iconsProps, IIConsProp } from "./LandingPageIconsStaticData.ts";

const LandingPageIcons = () => {
  library.add(fab, fas);

  return (
    <div className="text-base md:text-lg mb-2">
      <div className="text-black mb-2">I'm active on these platforms:</div>
      {iconsProps.map((icon: IIConsProp) => (
        <div className="flex flex-row items-center">
          <FontAwesomeIcon
            className="text-secondary mr-2"
            icon={icon.fontAwesome}
          />
          <a
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            title={icon.href}
            className="text-black"
          >
            {icon.label}
          </a>
        </div>
      ))}
    </div>
  );
};

export default LandingPageIcons;
