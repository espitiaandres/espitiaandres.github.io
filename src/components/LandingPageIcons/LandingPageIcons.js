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
    const defaultHoverText = "Here are my links!";
    const [hoverText, setHoverText] = useState(defaultHoverText);
    const iconsProps = [{
            hoverText: "Check out my projects on Github.",
            href: "https://github.com/espitiaandres",
            fontAwesome: ["fab", "github"]
        }, {
            hoverText: "Connect with me on LinkedIn.",
            href: "https://www.linkedin.com/in/espitiaandres",
            fontAwesome: ["fab", "linkedin-in"]
        }, {
            hoverText: "Click here to send me an email.",
            href: "mailto:afespiti@edu.uwaterloo.ca",
            fontAwesome: ["fas", "envelope"]
        }, {
            hoverText: "Let me throw you an alley on Dribbble!",
            href: "https://dribbble.com/espitiaandres",
            fontAwesome: ["fab", "dribbble"]
        }
    ];
    
    return (
        <div>
            <div className="hoverText">
                {hoverText}
            </div>
            <div className="icons">
                {
                    iconsProps.map((icon) => (
                        <div 
                            className="icon" 
                            onMouseOver={() => setHoverText(icon.hoverText)} 
                            onMouseLeave={() => setHoverText(defaultHoverText)}
                        >
                            <a 
                                href={icon.href}
                                target="_blank"
                                className="icon"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={icon.fontAwesome}/>
                            </a>
                        </div>
                    ))
                }
            </div>       
        </div>
    )
}

export default LandingPageIcons;
