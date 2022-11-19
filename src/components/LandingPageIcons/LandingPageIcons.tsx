import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { icons, Icon } from "./LandingPageIconsHelpers";

const LandingPageIcons = () => {
  library.add(fab, fas);

  return (
    <div className="mb-2">
      <div className="mb-2">You can find me on these platforms:</div>
      <div className="grid grid-cols-2 md:grid-cols-3 space-y-1">
        {icons.map((icon: Icon, i) => (
          <div className="flex flex-row items-center" key={i}>
            <FontAwesomeIcon
              className="text-primary mr-2"
              icon={icon.fontAwesome}
            />
            <a
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              title={icon.href}
              className="text-primary truncate ... hover:underline hover:underline-offset-4 hover:decoration-primary"
            >
              {icon.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPageIcons;
