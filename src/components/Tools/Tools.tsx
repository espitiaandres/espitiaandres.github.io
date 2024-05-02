import clsx from "clsx";
import { toolIcons } from "./ToolsHelpers";
import Animator from "components/Animator";
import { useTitle } from "react-use";

function Tools() {
  useTitle("Andres Espitia | Tools");

  return (
    <div>
      <div className="text-2xl mb-4 text-primary">Tools</div>
      <div className="mb-8">
        Here are some of the languages/tools I love to use.
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {toolIcons.map((icon, i) => (
          <div
            className="flex flex-row items-center justify-center dark:bg-white dark:border-2 dark:rounded-lg"
            key={i}
          >
            <a href={icon.href} target="_blank" rel="noopener noreferrer">
              <img src={icon.class} className="w-16 h-16 md:w-28 md:h-28 p-2" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Animator(Tools);
