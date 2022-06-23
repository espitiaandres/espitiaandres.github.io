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
import SkillsPage from "../SkillsPage/SkillsPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

import Achievements from "../Achievements/Achievements.tsx";

const Portfolio = ({}) => {
  const frontendNames = ["studyfi", "pokedex"];

  return (
    <Router basename="/">
      <Routes>
        <Route path="/blog" exact element={<LandingPage component="blog" />} />
        <Route
          path="/projects"
          exact
          element={<LandingPage component="projects" />}
        />
        <Route path="/" exact element={<LandingPage component="" />} />
        {/* HTTP Redirect to other FE projects hosted on andres-espitia.com */}
        {frontendNames.map((fe) => (
          <Route path={`/${fe}`} exact element={<HrefLink route={fe} />} />
        ))}
        <Route exact path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default Portfolio;