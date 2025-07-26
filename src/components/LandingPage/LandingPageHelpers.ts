import { ReactNode, useEffect } from "react";

export interface LandingPageProps {
  children: ReactNode;
}

interface RouteLink {
  redirectLink: string;
  label: string;
}

export const routes: readonly RouteLink[] = [
  {
    redirectLink: "/",
    label: "About Me",
  },
  {
    redirectLink: "/tools",
    label: "Tools",
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
