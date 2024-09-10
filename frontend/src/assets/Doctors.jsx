import React, { useState } from 'react';

function Doctors() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const doctors = [
        { name: 'Dr. John Smith', specialty: 'Cardiology', image: 'path/to/doctor1.jpg' },
        { name: 'Dr. Jane Doe', specialty: 'Orthopedics', image: 'path/to/doctor2.jpg' },
        { name: 'Dr. Emily Davis', specialty: 'Pediatrics', image: 'path/to/doctor3.jpg' },
        { name: 'Dr. Michael Brown', specialty: 'Dermatology', image: 'path/to/doctor4.jpg' },
        { name: 'Dr. Sarah Wilson', specialty: 'Gynecology', image: 'path/to/doctor5.jpg' }
    ];

    const maxIndex = Math.ceil(doctors.length / 3) - 1;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    return (
        <section className="doctors-section">
            <div className="container">
                <h2>Our Doctors</h2>
                <div className="doctors-carousel">
                    <button className="arrow prev" onClick={handlePrev} disabled={currentIndex === 0}>
                        &lt;
                    </button>
                    <div className="doctors-container">
                        {doctors.slice(currentIndex * 3, currentIndex * 3 + 3).map((doctor, index) => (
                            <div key={index} className="doctor-card">
                                <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                                <h3>{doctor.name}</h3>
                                <p>{doctor.specialty}</p>
                            </div>
                        ))}
                    </div>
                    <button className="arrow next" onClick={handleNext} disabled={currentIndex === maxIndex}>
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Doctors;
