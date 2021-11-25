import React, { useState, useEffect } from "react";
import { Link, NavLink  } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Alert from './Alert'

import {logout} from '../redux/auth/AuthActions';
// import { propTypes } from "react-bootstrap/esm/Image";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Fragment } from "react";

const NavBar = ({auth: {isAuthenticated, loading}, logout}) => {

  const authLinks = (
    <Fragment>
      <Link className="btn btn-primary mx-2" to="/dashboard">Dashboard</Link>
      <a className="btn btn-danger" onClick={logout} href="#!">
        Logout
      </a>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link className="btn btn-primary mx-2" to="/login">
        Login
      </Link>
      <Link className="btn btn-primary" to="/signup">
        Sign Up
      </Link>
    </Fragment>
  );
  
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-nav-contact"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" width="100" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="current"
                  to="/book"
                >
                  Books
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="current"
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="current"
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            {
              !loading && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
              )
            }
          </div>
        </div>
      </nav>
      <Alert />
    </React.Fragment>
  );
};


NavBar.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logout})(NavBar);
