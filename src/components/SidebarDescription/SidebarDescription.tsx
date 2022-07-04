//
//  SidebarDescritpion.tsx
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import Headshot from "../../images/jpg/RAM-cover-no-writing-cropped.jpg";

const SidebarDescription = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-center font-bold text-4xl mb-8">
        Andres Espitia
      </div>
      <div className="avatar flex flex-row justify-center mb-8">
        <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 hover:brightness-110">
          <img className="object-fill" src={Headshot} alt="Headshot" />
        </div>
      </div>
      <div className="text-center leading-tight mb-4">
        I'm a University of Waterloo Engineering '22 graduate interested in Full
        Stack Web Development, Machine Learning, and Optimization.
      </div>
    </div>
  );
};

export default SidebarDescription;
