//
//  LandingPage.tsx
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

// import "../../font/AWConquerorFreCarved-Regular.otf";
// import SidebarDescription from "../SidebarDescription/SidebarDescription.tsx";
// import SidebarLinks from "../SidebarLinks/SidebarLinks.tsx";
// import Headshot from "../../images/jpg/RAM-cover-no-writing-cropped.jpg";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type LandingPageProps = {
  children: ReactNode;
};

export type RouteLink = {
  redirectLink: string;
  label: string;
};

export const routes: RouteLink[] = [
  {
    redirectLink: "/",
    label: "About Me",
  },
  {
    redirectLink: "/projects",
    label: "Projects",
  },
  {
    redirectLink: "/blog",
    label: "Blog",
  },
  {
    redirectLink: "/personal",
    label: "Personal",
  },
];

const LandingPage = ({ children }: LandingPageProps) => {
  return (
    <div>
      <div className="w-full p-12 md:px-32 lg:px-64 absolute top-4 md:top-12 lg:top-16">
        <div className="flex flex-row justify-end mb-4">
          {routes.map((r) => (
            <div className="mr-2 font-medium link link-primary link-hover md:mr-4">
              <Link to={r.redirectLink}>{r.label}</Link>
            </div>
          ))}
        </div>
        <div className="text-black text-6xl mb-6 font-medium">
          Andres Espitia
        </div>
        <div className="text-zinc-500 text-3xl mb-8">
          Full-Stack Software Engineer
        </div>
        <div className="pb-8">{children}</div>
      </div>
    </div>
  );
};

export default LandingPage;
