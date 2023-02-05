import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";
import HrefLink from "components/HrefLink";
import LandingPage from "components/LandingPage";
import NotFoundPage from "components/NotFoundPage";
import AboutMe from "components/AboutMe";
import Projects from "components/Projects";
import Construction from "components/Construction";
import Personal from "components/Personal";

/*
Commands to deploy:

pnpm run build
git add dist -f
git commit -m "my commit message here"
git subtree push --prefix dist origin gh-pages
*/

const Portfolio = ({}) => {
  const frontendNames = ["studyfi", "pokedex"];

  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    JSON.parse(localStorage?.getItem("theme") || "false")
  );

  return (
    <div
      className={clsx("", {
        dark: isDarkMode,
      })}
    >
      <AnimatePresence>
        <Router basename="/">
          <Routes>
            <Route
              path="/projects"
              element={
                <LandingPage
                  children={<Projects />}
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                />
              }
            />
            <Route
              path="/personal"
              element={
                <LandingPage
                  children={<Personal />}
                  // children={<Construction />}
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                />
              }
            />
            <Route
              path="/"
              element={
                <LandingPage
                  children={<AboutMe />}
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                />
              }
            />
            {/* HTTP Redirect to other FE projects hosted on espitiaandres.com */}
            {frontendNames.map((fe, i) => (
              <Route
                path={`/${fe}`}
                element={<HrefLink route={fe} />}
                key={i}
              />
            ))}
            <Route
              // exact
              path="/*"
              element={
                <LandingPage
                  children={<NotFoundPage />}
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                />
              }
            />
          </Routes>
        </Router>
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
