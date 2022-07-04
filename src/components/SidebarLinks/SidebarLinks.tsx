import { Link } from "react-router-dom";

const SidebarLinks = () => {
  interface ISidebarLink {
    redirectLink: string;
    label: string;
  }

  const sidebarLinksList: ISidebarLink[] = [
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

  return (
    <ul className="menu overflow-y-auto w-100 bg-secondary text-white">
      {sidebarLinksList.map((sb: ISidebarLink) => (
        <li>
          <Link to={sb.redirectLink}>{sb.label}</Link>
        </li>
      ))}
      {/* <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/personal">Personal</Link>
      </li> */}
    </ul>
  );
};

export default SidebarLinks;
