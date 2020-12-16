import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ParticlesBg from "particles-bg";
import LandingPage from '../LandingPage/LandingPage';
import SkillsPage from '../SkillsPage/SkillsPage';

const Portfolio = () => {
    return (
        <Router basename="/">
            <Route path="/" exact render={() => (
                <div>
                    <LandingPage />
                </div>
            )}/>

            {/*
                <Route path="/skills" exact render={() => (
                    <SkillsPage />
                )}/>
            */}

        </Router>
    )
}

export default Portfolio;
