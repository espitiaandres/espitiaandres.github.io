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
            hoverText: "Checkout my projects on github.",
            href: "https://github.com/espitiaandres",
            iconFA: ["fab", "github"]
        }, {
            hoverText: "Connect with my on LinkedIn.",
            href: "https://ca.linkedin.com/in/andres-espitia-13912416a",
            iconFA: ["fab", "linkedin-in"]
        }, {
            hoverText: "Click here to send me an email.",
            href: "mailto:afespiti@edu.uwaterloo.ca",
            iconFA: ["fas", "envelope"]
        }, {
            hoverText: "Let me throuw you an alley on Dribbble!.",
            href: "https://dribbble.com/espitiaandres",
            iconFA: ["fab", "dribbble"]
        }
    ]

    
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
                                <FontAwesomeIcon icon={icon.iconFA}/>
                            </a>
                        </div>
                    ))
                }
            </div>            
        </div>
    )
}

export default LandingPageIcons;
