//
//  SidebarDescritpion.tsx
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import Headshot from "../../images/jpg/astronaut jellyfish.jpg";

const SidebarDescription = () => {
  return (
    <div>
      <div className="flex justify-center font-bold text-4xl mb-8">
        Andres Espitia
      </div>
      <div className="avatar flex flex-row justify-center mb-8">
        <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 hover:brightness-125">
          <img src={Headshot} />
        </div>
      </div>
      <div className="text-center leading-tight mb-6">
        I'm an Engineering '22 graduate from the University of Waterloo
        interested in Full Stack Web Development, Machine Learning, and
        Optimization.
      </div>
    </div>
  );
};

export default SidebarDescription;
