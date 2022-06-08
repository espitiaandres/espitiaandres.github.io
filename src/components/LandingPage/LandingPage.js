//
//  LandingPage.js
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from "react";
import "animate.css";

import "../../font/AWConquerorFreCarved-Regular.otf";
import LandingPageIcons from "../LandingPageIcons/LandingPageIcons";
import "./LandingPage.css";

// import Headshot from "../../images/jpg/RAM-cover-no-writing-cropped.jpg";
import CornerIconsWrapper from "../CornerIconsWrapper/CornerIconsWrapper";
import Headshot from "../../images/jpg/astronaut jellyfish.jpg";
// import

const LandingPage = ({}) => {
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
            class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
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
            <div className="menu p-4 overflow-y-auto w-80 bg-secondary text-white">
              <div className="flex justify-center font-bold text-4xl">
                Andres Espitia
              </div>

              <div class="avatar flex flex-row justify-center">
                <div class="w-24 rounded-full">
                  <img src={Headshot} />
                </div>
              </div>
              <ul>
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
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
