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

const Portfolio = ({}) => {
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
        <Route path="/studyfi" exact element={<HrefLink route="studyfi" />} />
        <Route path="/pokedex" exact element={<HrefLink route="pokedex" />} />
        <Route exact path="/*" element={<div>404 page</div>} />
      </Routes>
    </Router>
  );
};

export default Portfolio;
