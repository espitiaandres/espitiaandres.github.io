import { Link } from "react-router-dom";
import { sidebarLinksList, ISidebarLink } from "./SidebarLinksStaticData.ts";

const SidebarLinks = ({ refSidebarController }) => {
  const onLinkClick = () => {
    setTimeout(() => {
      refSidebarController?.current?.click();
    }, 100);
  };

  return (
    <ul className="menu overflow-y-auto w-100 bg-secondary text-white">
      {sidebarLinksList.map((sb: ISidebarLink) => (
        <li>
          <Link to={sb.redirectLink} onClick={() => onLinkClick()}>
            {sb.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarLinks;
