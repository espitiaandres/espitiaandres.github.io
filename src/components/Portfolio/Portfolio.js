//
//  Portfolio.js
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import SkillsPage from '../SkillsPage/SkillsPage';

const Portfolio = () => {
    return (
        <div>
            <LandingPage />            
            {/*
                <Route path="/skills" exact render={() => (
                    <SkillsPage />
                )}/>
            */}
        </div>
    )
}

export default Portfolio;
