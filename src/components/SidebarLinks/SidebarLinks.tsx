import { Link } from "react-router-dom";

const SidebarLinks = () => {
  return (
    <ul className="menu overflow-y-auto w-100 bg-secondary text-white">
      <li>
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
      </li>
    </ul>
  );
};

export default SidebarLinks;
