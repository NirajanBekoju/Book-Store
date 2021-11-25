import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import Alert from "../Alert";

import { logout } from "../../redux/auth/AuthActions";
// import { propTypes } from "react-bootstrap/esm/Image";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Fragment } from "react";

const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Fragment>
      <Link className="btn btn-primary mx-2" to="/dashboard">Dashboard</Link>
      <a className="btn btn-danger" onClick={logout}>
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
        className="navbar navbar-expand-lg navbar-light"
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
                <Link className="nav-link current" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/book">
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            {!loading && (
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
          </div>
        </div>
      </nav>
      <Alert />
    </React.Fragment>
  );
};

NavBar.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavBar);
