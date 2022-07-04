import { Link } from "react-router-dom";
import { sidebarLinksList, ISidebarLink } from "./SidebarLinksStaticData.ts";

const SidebarLinks = () => {
  return (
    <ul className="menu overflow-y-auto w-100 bg-secondary text-white">
      {sidebarLinksList.map((sb: ISidebarLink) => (
        <li>
          <Link to={sb.redirectLink}>{sb.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarLinks;
