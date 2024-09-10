import { FaTooth, FaUserMd, FaChild, FaBone, FaHeartbeat, FaRegHospital, FaFemale, FaAmbulance } from 'react-icons/fa';

function Features() {
    return (
        <section className="services-section">
            <div className="container">
                <h2>Our Medical Services</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <FaTooth size={40} />
                        <h3>Dental Care</h3>
                        <p>Comprehensive dental services including cleanings, fillings, root canals, and cosmetic dentistry.</p>
                        <a href="dental-care.html" className="btn">Learn More</a>
                    </div>
                    <div className="service-card">
                        <FaUserMd size={40} />
                        <h3>Primary Care</h3>
                        <p>Routine check-ups, preventive care, and management of chronic conditions by family physicians.</p>
                        <a href="primary-care.html" className="btn">Learn More</a>
                    </div>
                    <div className="service-card">
                        <FaChild size={40} />
                        <h3>Pediatric Care</h3>
                        <p>Medical care for children including vaccinations, growth monitoring, and treatment of illnesses.</p>
                        <a href="pediatric-care.html" className="btn">Learn More</a>
                    </div>
                    <div className="service-card">
                        <FaBone size={40} />
                        <h3>Orthopedic Services</h3>
                        <p>Treatment for musculoskeletal issues including fractures, joint pain, and sports injuries.</p>
                        <a href="orthopedic-services.html" className="btn">Learn More</a>
                    </div>
                    <div className="service-card">
                        <FaHeartbeat size={40} />
                        <h3>Cardiology</h3>
                        <p>Specialized care for heart-related conditions including hypertension, heart disease, and arrhythmias.</p>
                        <a href="cardiology.html" className="btn">Learn More</a>
                    </div>
                    <div className="service-card">
                        <FaRegHospital size={40} />
                        <h3>Dermatology</h3>
                        <p>Diagnosis and treatment of skin conditions such as acne, eczema, and skin cancer.</p>
                        <a href="dermatology.html" className="btn">Learn More</a>
                    </div>
                    <div className="service-card">
                        <FaFemale size={40} />
                        <h3>Women's Health</h3>
                        <p>Services including gynecological exams, prenatal and postnatal care, and menopause management.</p>
                        <a href="womens-health.html" className="btn">Learn More</a>
                    </div>
                    <div className="service-card">
                        <FaAmbulance size={40} />
                        <h3>Urgent Care</h3>
                        <p>Immediate care for non-life-threatening emergencies and illnesses outside regular office hours.</p>
                        <a href="urgent-care.html" className="btn">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
