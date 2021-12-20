//
//  LandingPage.js
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import "animate.css";

import "../../font/AWConquerorFreCarved-Regular.otf";
import LandingPageIcons from "../LandingPageIcons/LandingPageIcons";
import "./LandingPage.css";

import Headshot from "../../images/jpg/RAM-cover-no-writing-cropped.jpg";
import CornerIconsWrapper from "../CornerIconsWrapper/CornerIconsWrapper";

const LandingPage = ({}) => {
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
    </div>
  );
};

export default LandingPage;
