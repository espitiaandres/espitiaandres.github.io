//
//  Portfolio.js
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HrefLink from "../HrefLink/HrefLink";
import LandingPage from "../LandingPage/LandingPage";
import SkillsPage from "../SkillsPage/SkillsPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const Portfolio = ({}) => {
  const frontendNames = ["studyfi", "pokedex"];

  return (
    <Router basename="/">
      {/*
      <Routes>
        <Route path="/skills" exact element={<SkillsPage />} />
      </Routes>
         */}
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
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
