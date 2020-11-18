import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const NavBar = () => {
    return (
    <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light" data-aos="zoom-in" data-aos-duration="1000">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" width="100" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link current" to="/">
                                Home <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/book">Subject</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/share">Share Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </React.Fragment>
    )
}

export default NavBar;