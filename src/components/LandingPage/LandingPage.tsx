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

type LandingPageProps = {
  children: any;
}

const routes = ["projects", "blog", "personal"];

const LandingPage = ({ children }: LandingPageProps) => {

  return (
    <div>
      <div className="p-12 md:px-32 lg:px-64">
        <div className="flex flex-row">
          {routes.map((r) => (
            <div>{r}</div>
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
