import React from 'react'
import NavBar from '../components/NavBar'
import ContactForm from '../components/Contact/ContactForm'
import ContactDetail from '../components/Contact/ContactDetail'
// import Map from '../components/Contact/Map'

function Contact() {
    return (
        <React.Fragment>
            <NavBar />
            <section id="contact-form">
                <div className="container">
                    <div className="row pt-5 pb-3">
                        <ContactForm />
                        <ContactDetail />
                    </div>
                </div>
            </section>
            {/* <Map /> */}
        </React.Fragment>
    )
}

export default Contact
