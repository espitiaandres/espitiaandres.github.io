//
//  Portfolio.tsx
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HrefLink from "../HrefLink/HrefLink";
import LandingPage from "../LandingPage/LandingPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
// import Construction from "../Construction/Construction.tsx";
// import Personal from "../Personal/Personal.tsx";

const Portfolio = ({}) => {
  const frontendNames = ["studyfi", "pokedex"];

  return (
    <Router basename="/">
      <Routes>
        {/* <Route path="/blog" exact element={<LandingPage component={}/>} /> */}
        <Route
          path="/projects"
          exact
          element={<LandingPage children={<Projects />} />}
        />
        {/* <Route
          path="/blog"
          exact
          element={<LandingPage children={<Construction />} />}
        />
        <Route
          path="/personal"
          exact
          // element={<LandingPage children={<Personal />} />}
          element={<LandingPage children={<Construction />} />}
        /> */}
        <Route
          path="/"
          exact
          element={<LandingPage children={<AboutMe />} />}
        />
        {/* HTTP Redirect to other FE projects hosted on espitiaandres.com */}
        {frontendNames.map((fe, i) => (
          <Route
            path={`/${fe}`}
            exact
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
  );
};

export default Portfolio;
