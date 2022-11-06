import { useEffect } from "react";
import { useEffectOnce } from "react-use";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { LandingPageProps, routes } from "./LandingPageHelpers";

const LandingPage = ({ children }: LandingPageProps) => {
  // useEffect(() => {
  //   console.log("render");
  // }, []);

  useEffectOnce(() => {
    console.log("render");
  });

  return (
    <div className="flex flex-col h-screen justify-between w-full pt-16 md:pt-16 px-12 md:px-32 lg:px-64 absolute top-0">
      <div className="flex flex-row justify-end mb-4">
        {routes.map((route, i) => (
          <div
            className="mr-2 font-medium text-lg link link-primary link-hover md:mr-4"
            key={i}
          >
            <Link to={route.redirectLink}>{route.label}</Link>
          </div>
        ))}
      </div>
      <div className="text-black text-6xl mb-6 font-medium">Andres Espitia</div>
      <div className="text-zinc-500 text-3xl mb-4">
        Full-Stack Software Engineer
      </div>
      <div className="mb-auto pb-4">{children}</div>
      <Footer />
    </div>
  );
};

export default LandingPage;
