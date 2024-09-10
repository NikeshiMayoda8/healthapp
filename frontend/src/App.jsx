import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import AppointmentProcess from "./assets/AppointmentProcess";
import Doctors from "./assets/Doctors";
import Features from "./assets/Features";
import Footer from "./assets/Footer";
import Header from "./assets/Header";
import HeroSection from "./assets/HeroSection";
import Testimonials from "./assets/Testimonials";
import Login from './Login'; 
import Signup from './SignUp';
import Loading from './Loading'; // Import the Loading component

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

function AppContent() {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust delay as needed

        return () => clearTimeout(timer);
    }, []);

    // Determine if the current route is the login or signup page
    const showHeaderAndFooter = !['/login', '/signup'].includes(location.pathname);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            {showHeaderAndFooter && <Header />}
            <Routes>
                <Route path="/" element={
                    <>
                        <HeroSection />
                        <Features />
                        <AppointmentProcess />
                        <Doctors />
                        <Testimonials />
                    </>
                } />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                {/* Add other routes as needed */}
            </Routes>
            {showHeaderAndFooter && <Footer />}
        </>
    );
}

export default App;
