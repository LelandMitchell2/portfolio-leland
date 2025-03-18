import React from 'react';
import './footer.css';


export default function Footer() {
    return (
    <footer>
        <div className="footer-container">
            <a href="https://github.com/LelandMitchell2" target="_blank" rel="noopener noreferrer">
                <img 
                style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                objectFit: 'cover'
                }} 
                src=".\images\github-image.jpg" alt="GitHub" className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/in/leland-mitchell-046655183/" target="_blank" rel="noopener noreferrer">
            <img 
            style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            objectFit: 'cover'
            }} 
            src=".\images\linkedinicon.png" alt="LinkedIn" className="footer-icon" />
            </a>
        </div>
    </footer>
    );
}