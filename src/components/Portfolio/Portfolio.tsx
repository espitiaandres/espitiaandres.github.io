import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HrefLink from "../HrefLink/HrefLink";
import LandingPage from "../LandingPage/LandingPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import Construction from "../Construction/Construction";

/*
Commands to deploy:

pnpm run build
git add dist -f
git commit -m "my commit message here"
git subtree push --prefix dist origin gh-pages
*/

const Portfolio = ({}) => {
  const frontendNames = ["studyfi", "pokedex"];

  return (
    <AnimatePresence>
      <Router basename="/">
        <Routes>
          <Route
            path="/projects"
            // exact={true}
            element={<LandingPage children={<Projects />} />}
          />
          <Route
            path="/personal"
            // exact
            // element={<LandingPage children={<Personal />} />}
            element={<LandingPage children={<Construction />} />}
          />
          <Route
            path="/"
            // exact
            element={<LandingPage children={<AboutMe />} />}
          />
          {/* HTTP Redirect to other FE projects hosted on espitiaandres.com */}
          {frontendNames.map((fe, i) => (
            <Route
              path={`/${fe}`}
              // exact
              element={<HrefLink route={fe} />}
              key={i}
            />
          ))}
          {/* <Route path="/*" element={<NotFoundPage />} /> */}
          <Route
            // exact
            path="/*"
            element={<LandingPage children={<NotFoundPage />} />}
          />
        </Routes>
      </Router>
    </AnimatePresence>
  );
};

export default Portfolio;
