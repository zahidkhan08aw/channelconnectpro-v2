"use client"

// components/Navbar.js

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleLinkClick = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="#">ChannelConnectPRO</a>
            </div>
            <div className={`nav-links ${isOpen ? 'active' : ''}`} id="navLinks">
                <ul>
                    <Link className='nav-linkmenu' href="/" onClick={handleLinkClick}>Home</Link>
                    <Link className='nav-linkmenu' href="/Service" onClick={handleLinkClick}>Service</Link>
                    <Link className='nav-linkmenu' href="/About" onClick={handleLinkClick}>About</Link>
                    <Link className='nav-linkmenu' href="/Contact" onClick={handleLinkClick}>Contact</Link>
                </ul>
            </div>
            <div className={`hamburger ${isOpen ? 'open' : ''}`} id="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    );
};

export default Navbar;
