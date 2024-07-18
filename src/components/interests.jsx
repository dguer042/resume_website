import React, { Component } from 'react';
import './interests.css';
import photo1 from './images/photogrid/photo1.jpg';
import photo2 from './images/photogrid/photo2.jpg';
import photo3 from './images/photogrid/photo3.jpg';
import photo4 from './images/photogrid/photo4.jpg';
import photo5 from './images/photogrid/photo5.jpg';
import photo6 from './images/photogrid/photo6.jpg';

class Interests extends Component {
    render() {
        return(
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
        );
    }
}

export default Interests;