import { ReactNode, useEffect } from "react";

export interface LandingPageProps {
  children: ReactNode;
  isDarkMode: boolean;
  setIsDarkMode: (T: boolean) => void;
};

interface RouteLink {
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
