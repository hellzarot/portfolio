import React from 'react';
import Navigation from '../components/Navigation';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';



const Contact = () => {

    return (
        <div className="contact">
            <Navigation/>
            <ContactForm/>
            <Footer/>
        </div>
    );
};

export default Contact;