export interface ISidebarLink {
  redirectLink: string;
  label: string;
}

export const sidebarLinksList: ISidebarLink[] = [
  {
    redirectLink: "/",
    label: "About Me",
  },
  {
    redirectLink: "/projects",
    label: "Projects",
  },
  {
    redirectLink: "/blog",
    label: "Blog",
  },
  {
    redirectLink: "/personal",
    label: "Personal",
  },
];
