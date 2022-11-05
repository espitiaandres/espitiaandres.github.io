import { ReactNode } from "react";

export type LandingPageProps = {
  children: ReactNode;
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
