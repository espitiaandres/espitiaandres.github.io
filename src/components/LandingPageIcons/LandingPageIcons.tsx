import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { socialIcons, toolIcons } from "./LandingPageIconsHelpers";

export default function LandingPageIcons() {
  library.add(fab, fas);

  return (
    <div className="mb-2">
      <div className="mb-2">You can find me on these platforms:</div>
      <div className="grid grid-cols-2 md:grid-cols-3 space-y-1 mb-4">
        {socialIcons.map((icon, i) => (
          <div className="flex flex-row items-center justify-center" key={i}>
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
      <div className="mb-2">
        I like using these languages/tools, but I'm always open to learning more
        :)
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 space-y-2">
        {toolIcons.map((icon, i) => (
          <div className="flex flex-row items-center justify-center" key={i}>
            <a href={icon.href} target="_blank" rel="noopener noreferrer">
              <img src={icon.src} className="w-16 h-16" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
