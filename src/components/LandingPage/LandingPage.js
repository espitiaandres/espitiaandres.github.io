//
//  LandingPage.js
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState } from "react";
import "animate.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "../../font/AWConquerorFreCarved-Regular.otf";
import LandingPageIcons from "../LandingPageIcons/LandingPageIcons";
import "./LandingPage.css";

// import Headshot from "../../images/jpg/RAM-cover-no-writing-cropped.jpg";
import CornerIconsWrapper from "../CornerIconsWrapper/CornerIconsWrapper";
import Headshot from "../../images/jpg/astronaut jellyfish.jpg";
// import

const iconsProps = [
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

const LandingPage = ({}) => {
  library.add(fab, fas);
  const defaultHoverText = "I'm active on these platforms.";
  const [hoverText, setHoverText] = useState(defaultHoverText);

  return (
    <div>
      <div
        className="
        sticky top-0 z-30 flex w-full justify-center backdrop-blur transition-all duration-100 
        bg-secondary text-base-content
        "
      >
        <label
          for="my-drawer-2"
          className="btn btn-secondary drawer-button lg:hidden drawer-overlay"
        >
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <div className="drawer drawer-side drawer-mobile bg-white">
          <input
            id="my-drawer-2"
            type="checkbox"
            className="drawer-toggle accent-secondary"
          />
          <div className="drawer-content flex flex-col items-center justify-center">
            <h1 className="text-black">elephant</h1>
          </div>
          <div className="drawer-side">
            <label for="my-drawer-2" className="drawer-overlay"></label>
            <div className="menu p-4 overflow-y-auto w-96 bg-secondary text-white">
              <div className="flex justify-center font-bold text-4xl mb-6">
                Andres Espitia
              </div>

              <div className="avatar flex flex-row justify-center mb-6">
                <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={Headshot} />
                </div>
              </div>

              <div className="text-center leading-tight mb-6">
                I'm a University of Waterloo Engineering graduate interested in
                Full Stack Web Development, Machine Learning, and Optimization.
                Welcome to my personal website!
              </div>

              <div className="text-white flex justify-center mb-6">
                {hoverText}
              </div>

              <div className="flex flex-row justify-center mb-6 space-x-4">
                {iconsProps.map((icon) => (
                  <div>
                    <a
                      href={icon.href}
                      target="_blank"
                      className="bg-white border-2 border-white text-primary rounded-full text-4xl w-14 h-14 flex justify-center hover:opacity-75"
                      // className="text-white hover:opacity-75 rounded-full border-white border-2 text-4xl"
                      rel="noopener noreferrer"
                      onMouseOver={() => setHoverText(icon.hoverText)}
                      onMouseLeave={() => setHoverText(defaultHoverText)}
                      title={icon.href}
                    >
                      <FontAwesomeIcon
                        className="mt-2"
                        icon={icon.fontAwesome}
                      />
                    </a>
                  </div>
                ))}
              </div>

              <ul className="menu overflow-y-auto w-100 bg-secondary text-white">
                <li>
                  <a>About Me</a>
                </li>
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>Resume</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="landingPageWrapper">
    //   <div
    //     // className="mainContentWrapper animate__animated animate__zoomIn animate__delay-0.8s"
    //     className="py-1 bg-white rounded-xl opacity-90 px-5 z-10"
    //   >
    //     <div className="helloWorld">Hello World!</div>
    //     <div className="headshot">
    //       <img src={Headshot} alt="headshot picture" />
    //     </div>
    //     <div className="title">I'm Andres</div>
    //     <div className="description">
    //       I'm a University of Waterloo
    //       <span className="bolded">&nbsp; Engineering</span>
    //       &nbsp; graduate interested in
    //       <span className="bolded">&nbsp; Full Stack Web Development,</span>
    //       &nbsp;
    //       <span className="bolded">&nbsp; Machine Learning,</span>
    //       &nbsp; and
    //       <span className="bolded">&nbsp; Optimization.</span>
    //       &nbsp; In my free time, I love to play piano, basketball, and soccer.
    //     </div>
    //     <div>
    //       <LandingPageIcons />
    //     </div>
    //   </div>

    //   <div className="text-bermuda">asdsada</div>
    //   <button class="btn btn-primary">Button</button>
    //   {/*
    //   <div>
    //     <CornerIconsWrapper />
    //   </div>
    //     */}
    // </div>
  );
};

export default LandingPage;
