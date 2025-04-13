import React from 'react';
import './Header.css'; // Assuming you will create a CSS file for header styles

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Block Builders</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;