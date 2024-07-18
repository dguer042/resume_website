import React, { Component } from 'react';
import './skills.css';
import ucr from './images/ucr.png';
import cpp from './images/cpp.png';
import swift from './images/swift.png';
import python from './images/python.png';
import js from './images/js.png';
import react from './images/react-image.png';
import html from './images/html.png';
import css from './images/css.png'

class Skills extends Component {
    render() {
        return (
            <div id='skills'>
            <h1>SKILLS AND EDUCATION</h1>
            <div className='skill-section'>
                <img src={ucr} alt="UCR Logo" className='ucr-image'/>
            <div className='text-container'>
                <h3>University Of California, Riverside</h3>
                <p>Bachelors of Science, Computer Science - Expected 2024</p>
                <p>Relevant Coursework: Data Structures and Algorithms, Introduction To Web Development</p>
            </div>
            </div>
            <div className='skill-container'>
                <img src={cpp} alt="cpp Logo" className='cpp-image'/>
                <img src={swift} alt="swift Logo" className='swift-image'/>
                <img src={python} alt="python Logo" className='python-image'/>
                <img src={js} alt="js Logo" className='js-image'/>
            </div>
            <div className='skill-container'>
                <img src={react} alt="react Logo" className='react-image'/>
                <img src={html} alt="html Logo" className='html-image'/>
                <img src={css} alt="css Logo" className='css-image'/>
            </div>
        </div>
        );
    }
}


export default Skills;