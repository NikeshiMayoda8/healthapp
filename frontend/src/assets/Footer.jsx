import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h1>Medicare</h1>
                    </div>
                    <div className="footer-links">
                        <ul>
                            <li><a href="home.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <p>123 Medical Street, Colombo, Sri Lanka</p>
                        <p>Email: info@medicare.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                    <div className="footer-social">
                        <a href="https://facebook.com" className="social-icon">Facebook</a>
                        <a href="https://twitter.com" className="social-icon">Twitter</a>
                        <a href="https://instagram.com" className="social-icon">Instagram</a>
                        <a href="https://linkedin.com" className="social-icon">LinkedIn</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Medicare. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
