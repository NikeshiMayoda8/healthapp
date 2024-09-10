import React, { useState } from 'react';
import doctor1 from '../assets/doctor3.jpg';
import doctor2 from '../assets/doctor2.jpg';
import doctor3 from '../assets/doctor_1.jpg';
import doctor4 from '../assets/doctor4.jpg';
import doctor5 from '../assets/doctor5.jpg';

function Doctors() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const doctors = [
        { name: 'Dr. John Smith', specialty: 'Cardiology', image: doctor1 },
        { name: 'Dr. Jane Doe', specialty: 'Orthopedics', image: doctor2 },
        { name: 'Dr. Emily Davis', specialty: 'Pediatrics', image: doctor3 },
        { name: 'Dr. Michael Brown', specialty: 'Dermatology', image: doctor4 },
        { name: 'Dr. Sarah Wilson', specialty: 'Gynecology', image: doctor5}
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
