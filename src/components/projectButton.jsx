import React, { Component } from 'react';
import './projectButton.css';

class ProjectButton extends Component {

    render() {
        const { buttonText } = this.props;
        const { buttonLink } = this.props;
        return (
            <a href={buttonLink} target="_blank" className="project-button" role="button">
                <span className='button-text'>{buttonText}</span>
            </a>
        );
    }
}

export default ProjectButton;