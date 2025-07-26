import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "../../providers/DarkModeProvider/DarkModeProvider";
import clsx from "clsx";

function DarkModeSwitcher() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  return (
    <div className={clsx(isDarkMode ? "dark" : "")}>
      <div className="w-10 h-10 border-b-2 border-black dark:border-white p-2 rounded-sm">
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={(checked: boolean) => {
            setIsDarkMode(checked);
            localStorage.setItem("theme", JSON.stringify(checked));
          }}
          size={24}
        />
      </div>
    </div>
  );
}

export default DarkModeSwitcher;
