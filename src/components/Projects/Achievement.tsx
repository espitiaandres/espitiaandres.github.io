//
//  Achievement.tsx
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import { IAchievement } from "./AchievementsStaticData.ts";
import Link from "./Link.tsx";

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
    <div
      tabIndex={0}
      className="collapse collapse-arrow rounded-box text-black border-2 hover:border-primary ease-in duration-100"
    >
      <input
        type="checkbox"
        ref={(el) => ((inputsRef as any).current[i] = el)}
        onClick={() => {
          const openedAccordions = inputsRef?.current?.every((d) => d?.checked);
          setIsExpanded(openedAccordions);
        }}
      />
      <div className="collapse-title text-lg font-medium text-secondary rounded-full truncate">
        {text}
      </div>
      <div className="collapse-content ease-in duration-100">
        <div className="mb-2">{description ?? ""}</div>
        {links?.length > 0 && (
          <div>
            <div>See more:</div>
            {links?.map((l: string, i: number) => (
              <Link l={l} key={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Achievement;
