import React, { Component } from 'react';
import './button.css';

class Button extends Component {
    handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'resume.pdf';
        link.download = 'resume.pdf';
        link.click();
    }

    render() {
        return (
            <button className="button-28" onClick={this.handleDownload}>Resume</button>
        );
    }
}

export default Button;