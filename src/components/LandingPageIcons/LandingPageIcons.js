//
//  LandingPageIcons.js
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './LandingPageIcons.css';

const LandingPageIcons = () => {
    library.add(fab, fas);
    
    const defaultHoverText = "Currently, I'm looking for my next job opportunity.";
    const [hoverText, setHoverText] = useState(defaultHoverText);
    
    return (
        <div>
            <div className="hoverText">
                {hoverText}
            </div>
            <div className="icons">
                <div className="icon" onMouseOver={() => setHoverText("Check out my projects on github.")} onMouseLeave={() => setHoverText(defaultHoverText)}>
                    <a href="https://github.com/espitiaandres" target="_blank" className="icon">
                        <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                </div>
                <div className="icon" onMouseOver={() => setHoverText("Connect with me on Linkedin.")} onMouseLeave={() => setHoverText(defaultHoverText)}>
                    <a href="https://ca.linkedin.com/in/andres-espitia-13912416a" target="_blank" className="icon">
                        <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                    </a>
                </div>
                <div className="icon" onMouseOver={() => setHoverText("Click here to send me an email.")} onMouseLeave={() => setHoverText(defaultHoverText)}>
                    <a href="mailto:afespiti@edu.uwaterloo.ca" target="_blank" className="icon">
                        <FontAwesomeIcon icon={["fas", "envelope"]} />
                    </a>
                </div>
                <div className="icon" onMouseOver={() => setHoverText("Let me throw you an alley on Dribbble!")} onMouseLeave={() => setHoverText(defaultHoverText)}>
                    <a href="https://dribbble.com/espitiaandres" target="_blank" className="icon">
                        <FontAwesomeIcon icon={["fab", "dribbble"]} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LandingPageIcons;
