import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { LandingPageProps, routes } from "./LandingPageHelpers";

const LandingPage = ({ children }: LandingPageProps) => {
  return (
    <div className="flex flex-col h-screen justify-between w-full pt-8 md:pt-16 px-12 md:px-32 lg:px-64 xl:px-80 absolute top-0">
      <div className="flex flex-row justify-end mb-4 md:mb-8">
        {routes.map((route, i) => (
          <div
            className="mr-2 font-medium text-lg link link-primary link-hover md:mr-4"
            key={i}
          >
            <Link to={route.redirectLink}>{route.label}</Link>
          </div>
        ))}
      </div>
      <div className="text-black text-6xl mb-4 font-medium">Andres Espitia</div>
      <div className="text-zinc-500 text-3xl mb-8">
        Full-Stack Software Engineer
      </div>
      <div className="mb-auto pb-4">{children}</div>
      <Footer />
    </div>
  );
};

export default LandingPage;
