import doctorApponitment from '../assets/singleDoctor.jpg';

function AppointmentProcess() {
    return (
        <section className="appointment-process-section">
            <div className="container">
                <h2>How to Book an Appointment</h2>
                <div className="appointment-content">
                <img src={doctorApponitment} alt="Doctor Appointment" className="appointment-image" />
                    <div className="appointment-info">
                        <h3>Booking an Appointment is Easy!</h3>
                        <ol>
                            <li><strong>Choose a Doctor:</strong> Browse through our list of specialists and select the doctor that best fits your needs.</li>
                            <li><strong>Pick a Date and Time:</strong> Use our online scheduling tool to choose a convenient date and time for your visit.</li>
                            <li><strong>Fill Out Your Information:</strong> Complete a brief form with your personal details and any relevant medical history.</li>
                            <li><strong>Confirm Your Appointment:</strong> Review your details and confirm your appointment. You’ll receive a confirmation email with all the information you need.</li>
                            <li><strong>Visit Us:</strong> On the day of your appointment, come to our clinic or join us online if it’s a virtual consultation.</li>
                        </ol><br></br>
                        <a href="appointments.html" className="btn">Book Now</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AppointmentProcess;

