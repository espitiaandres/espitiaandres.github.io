import { ReactNode, useEffect } from "react";

export type LandingPageProps = {
  children: ReactNode;
  isDarkMode: boolean;
  setIsDarkMode: (T: boolean) => void;
};

type RouteLink = {
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
    redirectLink: "/personal",
    label: "Personal",
  },
];

export const useSetMode = (isDarkMode: Boolean) => {
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode.toString());
  }, [isDarkMode]);
};
