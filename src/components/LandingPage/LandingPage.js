//
//  LandingPage.js
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { Suspense } from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import "animate.css";

import "../../font/AWConquerorFreCarved-Regular.otf";
import LandingPageIcons from "../LandingPageIcons/LandingPageIcons";
import CornerIcons from "../CornerIcons/CornerIcons";
import "./LandingPage.css";

import KeyboardSvg from "../../images/svg/keyboard.svg";
import PencilSvg from "../../images/svg/pencil.svg";
import ChemistrySvg from "../../images/svg/chemistry.svg";
import MusicSvg from "../../images/svg/music.svg";
import Headshot from "../../images/jpg/RAM-cover-no-writing-cropped.jpg";
import CornerIconsWrapper from "../CornerIconsWrapper/CornerIconsWrapper";

function LandingPage() {
  return (
    <div className="landingPageWrapper">
      <div className="mainContentWrapper animate__animated animate__zoomIn animate__delay-0.8s">
        <div className="helloWorld">
          {
            <Typist
              avgTypingDelay={70}
              startDelay={800}
              cursor={{
                show: true,
                blink: true,
                element: "",
                hideWhenDone: false,
              }}
            >
              Hello, world!
            </Typist>
          }
        </div>
        <div className="headshot">
          <img src={Headshot} alt="headshot picture" />
        </div>
        <div className="title">I'm Andres</div>
        <div className="description">
          I'm a Fourth-year
          <span className="bolded">&nbsp; Engineering</span>
          &nbsp; student at the
          <span className="bolded">&nbsp; University of Waterloo.</span>
          &nbsp; I'm interested in
          <span className="bolded">&nbsp; Full Stack Web Development,</span>
          &nbsp;
          <span className="bolded">&nbsp; Machine Learning,</span>
          &nbsp; and
          <span className="bolded">&nbsp; Optimization.</span>
          &nbsp; In my free time, I love to play piano, basketball, and soccer.
        </div>
        <div>
          <LandingPageIcons />
        </div>
      </div>

      <div>
        <CornerIconsWrapper />
      </div>
      {/*        
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
        */}
    </div>
  );
}

export default LandingPage;
