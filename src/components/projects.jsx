import React, { Component } from 'react';
import ProjectButton from './projectButton';
import './projects.css';

class Projects extends Component {
    render() {
        return(
        <div id='projects'>
            <h1 className='title'>PROJECTS</h1>
            <div className='project-section'>
                <h3>R'Schedule</h3>
                <h5>Developer</h5>
                <p>R'Schedule is a app for UCR students built but UCR students. It is a easy and intuitive way to keep track
                of all your clases to help you better organize your schedule. It uses UCR's API to allow users to easily add thier
                classes to the app by loggin in with their netID. It then provides a clean and easy to read schedule and 
                even has Google and Apple Map supprt to help you get to your classes on time.
                </p>
            <ProjectButton buttonText="View Project" buttonLink="https://github.com/cs100/final-project-dguer042-mkazi001-aseth032-jsamr005.git"/>
            </div>

            <div className='project-section'>
                <h3>Reddit Crawler</h3>
                <h5>Developer</h5>
                <p>Developed a crawler for sub-reddits using the PRAW library. The crawler allows users to search for sub-reddits, and sort them by a variety
                of filters like comments, upvotes, and time posted, and more. The crawler also has a feature to download images from sub-reddits and save them to your computer. It also
                takes advantage of multithreading to speed up the process of downloading the large amount of data it crawls.
                </p>
                <ProjectButton buttonText="View Project" buttonLink="https://github.com/dguer042/group29.git"/>
            </div>
        </div>
        )
    };
}

export default Projects;