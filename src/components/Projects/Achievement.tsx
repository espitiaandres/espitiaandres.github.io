//
//  Achievement.tsx
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import { IAchievement } from "./AchievementsStaticData";
// import Link from "./Link.tsx";

interface IAchievementComponent extends IAchievement {
  i: number;
  inputsRef: any;
  setIsExpanded: (openedAccordions: boolean) => {};
}

const Achievement = ({
  text,
  links,
  description,
  image,
  inputsRef,
  setIsExpanded,
  i,
}: IAchievementComponent) => {
  return (
    <div className="card bg-base-100 shadow-xl text-black">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body h-64">
        <div className="text-2xl font-semibold truncate ...">{text}</div>
        <div className="line-clamp-4">{description}</div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">More</button>
        </div>
      </div>
    </div>
    // <div
    //   tabIndex={0}
    //   className="collapse collapse-arrow rounded-box text-black border-2 hover:border-primary ease-in duration-100"
    // >
    //   <input
    //     type="checkbox"
    //     ref={(el) => ((inputsRef as any).current[i] = el)}
    //     onClick={() => {
    //       const openedAccordions = inputsRef?.current?.every((d) => d?.checked);
    //       setIsExpanded(openedAccordions);
    //     }}
    //     name={text}
    //   />
    //   <div className="collapse-title text-lg font-medium text-secondary rounded-full truncate">
    //     {text}
    //   </div>
    //   <div className="collapse-content ease-in duration-100">
    //     <div className="mb-2">{description ?? ""}</div>
    //     {links?.length > 0 && (
    //       <div>
    //         {links?.map((l: string, i: number) => (
    //           <Link l={l} key={i} />
    //         ))}
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default Achievement;
