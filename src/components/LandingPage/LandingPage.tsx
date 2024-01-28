import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import clsx from "clsx";
import Footer from "components/Footer";
import { LandingPageProps, routes, useSetMode } from "./LandingPageHelpers";

/*
TODO:
- Voxeldog animation
- add imageAlt prop to CardProps
- Projects: add:
  - Waterloo math contests?
  - IB Diploma?
*/

export default function LandingPage({
  children,
  isDarkMode,
  setIsDarkMode,
}: LandingPageProps) {
  useSetMode(isDarkMode);

  return (
    <div
      className={clsx(
        "flex flex-col min-h-screen justify-between w-full pt-8 md:pt-12 px-12 md:px-32 lg:px-64 xl:px-80 absolute top-0",
        "bg-white dark:bg-zinc-900"
      )}
    >
      <div className="flex flex-row justify-end mb-2">
        <div className="w-10 h-10 border-b-2 border-black dark:border-white p-2 rounded-sm">
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={(checked: boolean) => setIsDarkMode(checked)}
            size={24}
          />
        </div>
      </div>
      <div className="flex flex-row justify-end mb-4">
        {routes.map((route, i) => (
          <div
            className="ml-2 md:ml-4 font-medium text-lg link link-primary link-hover"
            key={i}
          >
            <Link to={route.redirectLink}>{route.label}</Link>
          </div>
        ))}
      </div>
      <div className="text-black text-5xl md:text-6xl mb-4 font-medium dark:text-white">
        Andres Espitia.
      </div>
      <div className="text-zinc-500 text-3xl mb-8 dark:text-zinc-400">
        Full-Stack Software Engineer
      </div>
      <div className="mb-auto pb-4 text-black text-base md:text-lg dark:text-white">
        {children}
      </div>
      <Footer />
    </div>
  );
}
