import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "../../components/NavBar";

import { setAlert } from "../../redux/alert/AlertAction";
import { signup } from "../../redux/auth/AuthActions";
import PropTypes from "prop-types";

const SignUp = ({ setAlert, signup, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
    password2: "",
  });

  const { name, email, phone_number, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    window.scrollTo(0,0);
    if (password !== password2) {
      setAlert("Password do not match", "danger");
    } else {
      signup({ name, email, phone_number, password, password2 });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>Siddhartha Book Store - SignUp</title>
        <meta name="description" content="Signup page" />
      </Helmet>
      <NavBar />

      <section id="contact-form" className="text-white">
        <div className="login-page mb-0 pb-4 pt-5">
          <div className="offset-md-2 col-md-8">
            <h1 className="auth__title">Sign Up</h1>
            <p className="mt-4">
              Already have an account?
              <Link className="auth__authtext__link" to="/login">
                Sign In
              </Link>
            </p>
            <form className="auth__form" onSubmit={(e) => onSubmit(e)}>
              <div className="auth__form__group">
                <label htmlFor="name">Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className="auth__form__group">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone_number">Phone Number</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Phone Number"
                  name="phone_number"
                  id="phone_number"
                  value={phone_number}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className="auth__form__group">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  minLength="6"
                />
              </div>
              <div className="auth__form__group">
                <label htmlFor="password2">Confirm Password</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  id="password2"
                  value={password2}
                  onChange={(e) => onChange(e)}
                  minLength="6"
                />
              </div>
              <button className="btn btn-primary mt-3">Sign Up</button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, signup })(SignUp);
