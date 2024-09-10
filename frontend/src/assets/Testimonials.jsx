import React from 'react';

const testimonials = [
    { name: 'John Doe', feedback: 'This medical facility is fantastic! The staff are incredibly helpful, and the care is top-notch.' },
    { name: 'Jane Smith', feedback: 'I had a wonderful experience with my pediatrician here. Highly recommended for families.' },
    { name: 'Emily Johnson', feedback: 'Excellent service and very professional staff. The process was smooth from start to finish.' },
    { name: 'Michael Brown', feedback: 'The cardiology department is outstanding. The doctors are knowledgeable and compassionate.' }
];

function Testimonials() {
    return (
        <section className="testimonials-section">
            <div className="container">
                {/* <h2>What Our Patients Say</h2> */}
                <div className="testimonials-wrapper">
                    {/* <div className="testimonials-list">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card">
                                <p className="feedback">"{testimonial.feedback}"</p>
                                <h4 className="name">- {testimonial.name}</h4>
                            </div>
                        ))}
                        {testimonials.map((testimonial, index) => (
                            <div key={`repeat-${index}`} className="testimonial-card">
                                <p className="feedback">"{testimonial.feedback}"</p>
                                <h4 className="name">- {testimonial.name}</h4>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
