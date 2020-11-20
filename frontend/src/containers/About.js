import React from 'react'
import NavBar from '../components/NavBar'
import AboutDetail from '../components/AboutDetail'

function About() {
    return (
        <React.Fragment>
            <NavBar />
            <section id="subject-choice">
                <div className="container">
                    <AboutDetail />
                </div>
            </section>
        </React.Fragment>
    )
}

export default About
