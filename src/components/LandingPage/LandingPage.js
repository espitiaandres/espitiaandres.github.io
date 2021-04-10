//
//  LandingPage.js
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css'
import 'animate.css';
import '../../font/AWConquerorFreCarved-Regular.otf';
import LandingPageIcons from '../LandingPageIcons/LandingPageIcons';
import KeyboardSvg from '../../images/svg/keyboard.svg';
import PencilSvg from '../../images/svg/pencil.svg';
import ChemistrySvg from '../../images/svg/chemistry.svg';
import MusicSvg from '../../images/svg/music.svg';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="landingPageWrapper">
            <div>
                <div className="helloWorld">
                    <Typist
                        avgTypingDelay={70}
                        startDelay={400}
                        cursor={{
                            show: true,
                            blink: true,
                            element: '_',
                            hideWhenDone: false,
                            hideWhenDoneDelay: 0,
                        }}
                    >
                        Hello, world!
                    </Typist>
                </div>

                <div className="animate__animated animate__zoomIn animate__delay-2s">
                    <div className="title">
                        I'm Andres
                    </div>
                    <div className="description">
                        I'm a third year 
                        <span className="bolded">
                            &nbsp; Chemical Engineering
                        </span>
                        &nbsp; student at the
                        <span className="bolded">
                            &nbsp; University of Waterloo.
                        </span>
                        &nbsp; I'm interested in 
                        <span className="bolded">
                            &nbsp; Full Stack Web Development,
                        </span>
                        <span className="bolded">
                            &nbsp; Process Modelling,
                        </span>
                        &nbsp; and
                        <span className="bolded">
                            &nbsp; Optimization.
                        </span>
                        &nbsp; In my free time, I love to play piano, basketball, and soccer.
                    </div>
                    <LandingPageIcons />
                </div>

                <div className="animate__animated animate__fadeIn animate__delay-2s">
                    <img src={KeyboardSvg} alt="keyboardSVG" className="keyboardSVG" />
                    <img src={PencilSvg} alt="pencilSVG" className="pencilSVG" />
                    <img src={ChemistrySvg} alt="chemistrySVG" className="chemistrySVG" />
                    <img src={MusicSvg} alt="musicSVG" className="musicSVG" />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
