//
//  Portfolio.js
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
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
      </Routes>
      {/*
      // TODO: how to reroute a user to a webpage instead of a component when it hits a specified path...?
        <Route path="/studyfi" exact render={() => (
            <SkillsPage />
        )}/>
    */}
      {/*
      // TODO: how to reroute a user to a webpage instead of a component when it hits a specified path...?
        <Route path="/pokedex" exact render={() => (
            <SkillsPage />
        )}/>
      */}
      {/*
          <Route path="/" exact render={() => (
              <LandingPage />
          )}/>
      */}
      {/*</div>*/}
    </Router>
  );
};

// const Portfolio = ({}) => {
//   return (
//     <div>
//       <LandingPage />
//       {/*
//           <Route path="/skills" exact render={() => (
//               <SkillsPage />
//           )}/>
//       */}
//       {/*
//       // TODO: how to reroute a user to a webpage instead of a component when it hits a specified path...?
//         <Route path="/studyfi" exact render={() => (
//             <SkillsPage />
//         )}/>
//     */}
//       {/*
//       // TODO: how to reroute a user to a webpage instead of a component when it hits a specified path...?
//         <Route path="/pokedex" exact render={() => (
//             <SkillsPage />
//         )}/>
//       */}
//       {/*
//           <Route path="/" exact render={() => (
//               <LandingPage />
//           )}/>
//       */}
//     </div>
//   );
// };

export default Portfolio;
