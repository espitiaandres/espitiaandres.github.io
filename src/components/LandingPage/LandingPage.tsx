import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import clsx from "clsx";
import Footer from "../Footer/Footer";
import { LandingPageProps, routes, useSetMode } from "./LandingPageHelpers";

/*
TODO:
- Voxeldog animation
*/

const LandingPage = ({
  children,
  isDarkMode,
  setIsDarkMode,
}: LandingPageProps) => {
  useSetMode(isDarkMode);

  return (
    <div
      className={clsx(
        "flex flex-col min-h-screen justify-between w-full pt-8 md:pt-16 px-12 md:px-32 lg:px-64 xl:px-80 absolute top-0",
        "dark:bg-slate-900"
      )}
    >
      <div className="w-12 flex border-b-2 border-black dark:border-white p-2">
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={(checked: boolean) => setIsDarkMode(checked)}
          size={32}
        />
      </div>
      <div className="flex flex-row justify-end">
        {routes.map((route, i) => (
          <div
            className="mr-2 font-medium text-lg link link-primary link-hover md:mr-4"
            key={i}
          >
            <Link to={route.redirectLink}>{route.label}</Link>
          </div>
        ))}
      </div>
      <div className="text-black text-6xl mb-4 font-medium dark:text-white">
        Andres Espitia
      </div>
      <div className="text-zinc-500 text-3xl mb-8">
        Full-Stack Software Engineer
      </div>
      <div className="mb-auto pb-4 text-black text-base md:text-lg dark:text-white">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
