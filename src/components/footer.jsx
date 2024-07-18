import React, { Component } from 'react';
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
    render() {
        return (
            <footer>
            <div className='icon-container'>
                <a href="https://github.com/dguer042" target="_blank"><FontAwesomeIcon icon={faGithub} className='icons2'></FontAwesomeIcon></a>
                <a href="https://www.linkedin.com/in/dilanguerreroavila/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className='icons2'></FontAwesomeIcon></a>
            </div>
            <p>&copy; 2024 Dilan Guerrero. All rights reserved.</p>
            </footer>
        );
    }
}

export default Footer;