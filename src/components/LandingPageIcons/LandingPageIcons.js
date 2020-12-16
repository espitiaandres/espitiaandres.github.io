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
        </div>
    )
}

export default LandingPageIcons;
