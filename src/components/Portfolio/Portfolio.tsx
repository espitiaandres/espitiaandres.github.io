import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HrefLink from "components/HrefLink";
import LandingPage from "components/LandingPage";
import NotFoundPage from "components/NotFoundPage";
import AboutMe from "components/AboutMe";
import Projects from "components/Projects";
import Construction from "components/Construction";
import Personal from "components/Personal";
import Tools from "components/Tools";

import DarkModeProvider from "~/providers/DarkModeProvider/DarkModeProvider";

export default function Portfolio() {
  const frontendNames = ["studyfi", "pokedex"] as const;

  return (
    <div>
      <DarkModeProvider>
        <AnimatePresence>
          <Router basename="/">
            <Routes>
              <Route
                path="/tools"
                element={<LandingPage children={<Tools />} />}
              />
              <Route
                path="/projects"
                element={<LandingPage children={<Projects />} />}
              />
              <Route
                path="/personal"
                element={<LandingPage children={<Personal />} />}
              />
              <Route
                path="/"
                element={<LandingPage children={<AboutMe />} />}
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
                element={<LandingPage children={<NotFoundPage />} />}
              />
            </Routes>
          </Router>
        </AnimatePresence>
      </DarkModeProvider>
    </div>
  );
}
