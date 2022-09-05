//
//  Portfolio.tsx
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HrefLink from "../HrefLink/HrefLink";
import LandingPage from "../LandingPage/LandingPage.tsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.tsx";
import AboutMe from "../AboutMe/AboutMe.tsx";
import Projects from "../Projects/Projects.tsx";
import Construction from "../Construction/Construction.tsx";

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
        <Route
          path="/blog"
          exact
          element={<LandingPage children={<Construction />} />}
        />
        <Route
          path="/personal"
          exact
          element={<LandingPage children={<Construction />} />}
        />
        <Route
          path="/"
          exact
          element={<LandingPage children={<AboutMe />} />}
        />
        {/* HTTP Redirect to other FE projects hosted on espitiaandres.com */}
        {frontendNames.map((fe) => (
          <Route path={`/${fe}`} exact element={<HrefLink route={fe} />} />
        ))}
        {/* <Route exact path="/*" element={<NotFoundPage />} /> */}
        <Route
          exact
          path="/*"
          element={<LandingPage children={<NotFoundPage />} />}
        />
      </Routes>
    </Router>
  );
};

export default Portfolio;
