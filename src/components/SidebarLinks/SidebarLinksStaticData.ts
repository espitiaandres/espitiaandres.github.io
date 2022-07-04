export interface ISidebarLink {
  redirectLink: string;
  label: string;
}

export const sidebarLinksList: ISidebarLink[] = [
  {
    redirectLink: "/",
    label: "Home",
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
