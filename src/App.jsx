import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import heroImage from './prodev.jpeg';
import ucr from './ucr.png';
import cpp from './cpp.png';
import swift from './swift.png';
import python from './python.png';
import js from './js.png';
import react from './react-image.png';
import html from './html.png';
import css from './css.png';
import Button from './components/button';
import photo1 from './photogrid/photo1.jpg';
import photo2 from './photogrid/photo2.jpg';
import photo3 from './photogrid/photo3.jpg';
import photo4 from './photogrid/photo4.jpg';
import photo5 from './photogrid/photo5.jpg';
import photo6 from './photogrid/photo6.jpg';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import ProjectButton from './components/projectButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function App() {
  const [text] = useTypewriter({
      words: ['Full-Stack Developer', 'Software Engineer', 'Web Developer', 'Computer Scientist'],
      loop: {},
  });

  return (
    <div className="App">
      <div id='hero'>
        <div className='header'>
          <Navbar/>
        </div>
        <img src={heroImage} alt="Hero Image" className="hero-image"/>
        <h1 className='text'>Hi im Dilan, an aspiring {' '}
          <span>
            {text}
          </span>
          <Cursor/>
        </h1>
        <Button/>
        <p className='text2'>I am currently a 4th year Computer Science student at the University of California Riverside. 
        I am 21 years old and love to always try new things. I am really into movies, film photography, basketball, and hiking!
        In the future I hope to work as a Full-Stack Web Developer. Although I am still very much a novice, I am always trying hard  
        to learn new things and grow my experience!</p>
      </div>
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
      <div id='interests'>
          <h1 className='title'>INTERESTS</h1>
          <div className='i-container'>
            <div className='interest-section'>
                <h3>Photography 📷</h3>
                <p>I love to take photos of my friends and family. I currently shoot in film, I use a Nikon N90s and shot in 35mm. I love the way film looks and the process of developing the film and seeing the photos for the first time is always so exciting. Below of are some of my pictures!
                </p>
            </div>
            <div className='interest-section'>
                <h3>Film 🎥</h3>
                <p>I love watching and talking about film! I watch any and all genres but some of my favorites are action, horror, and thiller movies. Some of my favorites are The Dark Knight, The Shining, and The Departed.
                </p>
            </div>
            <div className='interest-section'>
                <h3>Music 🎵</h3>
                <p>Music is another huge hobby of mine. Just like the movies I watch, I like to listen to a big variety of genres. Some that particularly stand out are indie, punk rock, rap and hip-hop. Some of my favorite artists are The Strokes, Kanye West, and Tyler The Creator.
                </p>
            </div>
          </div>
          <div className="container">
            <div className="photo-gallery">
              <div className="column">
                <div className="photo">
                  <img src={photo1} alt="Hero Image"/>
                </div>
                <div className="photo">
                  <img src={photo2} alt="Hero Image"/>
                </div>
                <div className="photo">
                  <img src={photo3} alt="Hero Image"/>
                </div>
              </div>
              <div className="column2">
                <div className="photo">
                  <img src={photo4} alt="Hero Image"/>
                </div>
                <div className="photo">
                  <img src={photo5} alt="Hero Image"/>
                </div>
                <div className="photo">
                  <img src={photo6} alt="Hero Image"/>
                </div>
              </div>
            </div>
          </div>
      </div>
      <footer>
        <div className='icon-container'>
          <a href="https://github.com/dguer042" target="_blank"><FontAwesomeIcon icon={faGithub} className='icons2'></FontAwesomeIcon></a>
          <a href="https://www.linkedin.com/in/dilanguerreroavila/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className='icons2'></FontAwesomeIcon></a>
        </div>
        <p>&copy; 2024 Dilan Guerrero. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default App;

