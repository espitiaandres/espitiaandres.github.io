//
//  LandingPageIcons.js
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './LandingPageIcons.css';

const LandingPageIcons = () => {
    library.add(fab, fas);

    return (
        <div className="icons">
            <div className="icon">
                <a href="https://github.com/espitiaandres" target="_blank" className="icon">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
            </div>
            <div className="icon">
                <a href="https://ca.linkedin.com/in/andres-espitia-13912416a" target="_blank" className="icon">
                    <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                </a>
            </div>
            <div className="icon">
                <a href="mailto:afespiti@edu.uwaterloo.ca" target="_blank" className="icon">
                    <FontAwesomeIcon icon={["fas", "envelope"]} />
                </a>
            </div>
            <div className="icon">
                <a href="https://dribbble.com/espitiaandres" target="_blank" className="icon">
                    <FontAwesomeIcon icon={["fab", "dribbble"]} />
                </a>
            </div>
        </div>
    )
}

export default LandingPageIcons;
