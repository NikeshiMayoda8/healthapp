import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header>
            <nav>
                <div className="logo">
                    <a href="home">MediCare</a>
                </div>
                <ul className={isMobileMenuOpen ? "nav-links mobile" : "nav-links"}>
                    <li><a href="/">Home</a></li>
                    <li><a href="about">About Us</a></li>
                    <li><a href="services">Services</a></li>
                    <li><a href="contact">Contact</a></li>
                    <li><a href="appointments">Appointments</a></li>
                </ul>
                <div className="cta">
                <Link to="/login" className="btn">Login</Link>
                <Link to="/signup" className="btn">Sign Up</Link>
                </div>
                <div className="hamburger" onClick={toggleMobileMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    );
}

export default Header;
