import React from 'react';
import './hero.css';
import Navbar from './navbar';
import heroImage from './images/prodev.jpeg';
import { useTypewriter } from 'react-simple-typewriter';
import Button from './button';
import { Cursor } from 'react-simple-typewriter';

const Hero = () => {
    const [text] = useTypewriter({
        words: ['Full-Stack Developer', 'Software Engineer', 'Web Developer', 'Computer Scientist'],
        loop: {},
    });

    return (
        <div id='hero'>
            <div className='header'>
                <Navbar/>
            </div>
            <img src={heroImage} alt="Hero Image" className="hero-image"/>
            <h1 className='text'>Hi, I'm Dilan, an aspiring{' '}
                <span>
                    {text}
                </span>
                <Cursor/>
            </h1>
            <Button/>
            <p className='text2'>I am currently a 4th year Computer Science student at the University of California Riverside. 
            I am 21 years old and love to always try new things. I am really into movies, film photography, basketball, and hiking!
            In the future, I hope to work as a Full-Stack Web Developer. Although I am still very much a novice, I am always trying hard  
            to learn new things and grow my experience!</p>
        </div>
    );
}

export default Hero;
