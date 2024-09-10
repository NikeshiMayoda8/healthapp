import React, { useState } from 'react';

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
                    <li><a href="home">Home</a></li>
                    <li><a href="about">About Us</a></li>
                    <li><a href="services">Services</a></li>
                    <li><a href="contact">Contact</a></li>
                    <li><a href="appointments">Appointments</a></li>
                </ul>
                <div className="cta">
                    <a href="login.html" className="btn">Login</a>
                    <a href="signup.html" className="btn">Sign Up</a>
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
