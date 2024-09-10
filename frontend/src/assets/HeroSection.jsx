import React from 'react';
import doctorImage from '../assets/doctors.jpg';

function HeroSection() {
    return (
        <section className="hero-section">
        <div className="hero-content">
            <div className="hero-text">
                <h1>Welcome to MediCare</h1>
                <p>Your health, our priority. Get the best care with us.</p>
                <br></br>
                <a href="appointments" className="btn">Book an Appointment</a>
            </div>
            <img src={doctorImage} alt="Doctor" className="hero-image" />
        </div>
    </section>
    );
}

export default HeroSection;
