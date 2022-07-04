//
//  LandingPage.tsx
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import { useRef } from "react";
import "../../font/AWConquerorFreCarved-Regular.otf";
import SidebarDescription from "../SidebarDescription/SidebarDescription.tsx";
import SidebarLinks from "../SidebarLinks/SidebarLinks.tsx";
// import Headshot from "../../images/jpg/RAM-cover-no-writing-cropped.jpg";

const LandingPage = ({ children }) => {
  const refSidebarController = useRef(null);

  return (
    <div>
      <div
        className="
        sticky top-0 z-30 flex w-full justify-center backdrop-blur transition-all duration-100 
        bg-secondary text-base-content
        "
      >
        <label
          htmlFor="my-drawer-2"
          className="btn btn-secondary drawer-button lg:hidden drawer-overlay"
          ref={refSidebarController}
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
          <div className="drawer-content px-12 py-16">
            <div className="text-black text-6xl mb-6">Andres Espitia</div>
            <div className="text-zinc-500 text-3xl mb-12">
              Full-Stack Software Engineer
            </div>
            <div className="pb-8">{children}</div>
          </div>
          <div className="drawer-side flex flex-col">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <div className="menu px-5 overflow-y-auto w-80 bg-secondary text-white">
              <SidebarDescription />
              <SidebarLinks refSidebarController={refSidebarController} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
