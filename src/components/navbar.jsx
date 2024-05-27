import React, { Component } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse, faGraduationCap, faHammer, faHeart} from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {

    render() {
        return (
<nav>
    <div class='name'>DILAN</div>
    <ul class="menu">
        <li><a href="#hero"><span class="menu-text">Home</span><span class="menu-icon"><FontAwesomeIcon icon={faHouse} className='icons'></FontAwesomeIcon></span></a></li>
        <li><a href="#skills"><span class="menu-text">Skills and Education</span><span class="menu-icon"><FontAwesomeIcon icon={faGraduationCap} className='icons'></FontAwesomeIcon></span></a></li>
        <li><a href="#projects"><span class="menu-text">Projects</span><span class="menu-icon"><FontAwesomeIcon icon={faHammer} className='icons'></FontAwesomeIcon></span></a></li>
        <li><a href="#interests"><span class="menu-text">Interests</span><span class="menu-icon"><FontAwesomeIcon icon={faHeart} className='icons'></FontAwesomeIcon></span></a></li>
    </ul>
</nav>

        );
    }
}

export default Navbar;