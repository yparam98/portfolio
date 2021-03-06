import React, { Suspense, useEffect, useState } from 'react';
import Canvas from './Canvas';

import Education from './Education/Education'
import { default as Skills } from './Skills/Skills';
import { default as Projects } from './Projects/Projects';

import '../../assets/css/Portfolio.css'
import Panel from './HeaderPanels/Panel';
import Overview from './Overview';
import Contact from './Contact/Contact';

export default function Main() {

    const [state_height, setHeight] = useState(document.body.clientHeight);
    const [state_width, setWidth] = useState(document.body.clientWidth);

    return (
        <div id="portfolio_container">
            <Canvas />
            <Overview />
            <Panel name={"EDUCATION"} />
            <Education />
            <Panel name={"SKILLS"} />
            <Skills />
            <Panel name={"PROJECTS"} />
            <Projects />
            <Panel name={"CONTACT ME"} />
            <Contact />
        </div>
    );
}