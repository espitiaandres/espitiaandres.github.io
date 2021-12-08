import React, { Suspense } from "react";

import CornerIcons from "../CornerIcons/CornerIcons";

import KeyboardSvg from "../../images/svg/keyboard.svg";
import PencilSvg from "../../images/svg/pencil.svg";
import ChemistrySvg from "../../images/svg/chemistry.svg";
import MusicSvg from "../../images/svg/music.svg";

const CornerIconsWrapper = ({}) => {
  return (
    <div>
      <Suspense fallback={<div></div>}>
        <CornerIcons src={KeyboardSvg} className="keyboardSVG" />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <CornerIcons src={PencilSvg} className="pencilSVG" />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <CornerIcons src={ChemistrySvg} className="chemistrySVG" />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <CornerIcons src={MusicSvg} alt="musicSVG" className="musicSVG" />
      </Suspense>
    </div>
  );
};

export default CornerIconsWrapper;
