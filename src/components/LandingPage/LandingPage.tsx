//
//  LandingPage.tsx
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import "animate.css";
import "../../font/AWConquerorFreCarved-Regular.otf";
import LandingPageIcons from "../LandingPageIcons/LandingPageIcons.tsx";
import SidebarDescription from "../SidebarDescription/SidebarDescription.tsx";

// import Headshot from "../../images/jpg/RAM-cover-no-writing-cropped.jpg";
// import CornerIconsWrapper from "../CornerIconsWrapper/CornerIconsWrapper";

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

          <div className="drawer-content px-12 py-20">
            <div className="text-black text-5xl mb-12">Andres Espitia</div>
            <div className="text-black text-base mb-2">
              I'm a University of Waterloo Engineering '22 graduate interested
              in Full Stack Web Development, Machine Learning, and Optimization.
              Currently, I'm working as a Full-Stack Software Engineer at&nbsp;
              <a
                className="link"
                href="https://federato.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Federato
              </a>
              .
            </div>
            <div className="text-black text-base mb-2">
              I like to spend my free time listening to music, playing and
              watching basketball and soccer. I also like running, cooking,
              cryptography, playing video games, and dabbling in FL Studio.
            </div>
            <div className="text-black">
              Here are some achievements I'm proud of!
            </div>

            <div className="text-black">Studyfi (CWF)</div>
            <div className="text-black">Graduation with honours?</div>
            <div className="text-black">Udemy courses completed/working on</div>
            <div className="text-black">Pokedex</div>
            <div className="text-black">Fantasy Basketball MLR Analyzer</div>
            <div className="text-black">Antoine Equation Calculator</div>
          </div>

          <div className="drawer-side">
            <label for="my-drawer-2" className="drawer-overlay"></label>
            <div className="menu px-5 overflow-y-auto w-80 bg-secondary text-white">
              <SidebarDescription />
              <LandingPageIcons />

              <ul className="menu overflow-y-auto w-100 bg-secondary text-white">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Projects</a>
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
  );
};

export default LandingPage;
