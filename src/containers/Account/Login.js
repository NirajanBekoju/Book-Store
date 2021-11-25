import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "../../components/NavBar";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../redux/auth/AuthActions";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    window.scrollTo(0,0);
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="auth">
        <Helmet>
          <title>Siddhartha Book Store</title>
          <meta name="description" content="login page" />
        </Helmet>
        <section id="login-page">
          <div className="container">
            <div className="row">
              <div className="offset-md-2 col-md-8 login-form">
                <div
                  className="row pt-5 login-form-container"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                >
                  <div className="col-md-6">
                    <h4 className="login-title">Login Into Your Account</h4>
                    <form onSubmit={(e) => onSubmit(e)} className="pt-4 pb-4">
                      <input
                        type="email"
                        className="form-control mb-4"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                        required
                      />
                      <input
                        type="password"
                        className="form-control mb-4"
                        placeholder="password"
                        name="password"
                        value={password}
                        onChange={(e) => onChange(e)}
                        minLength="6"
                      />
                      <button type="submit" className="btn btn-success">
                        Login
                      </button>
                    </form>
                  </div>
                  <div className="col-md-6">
                    <h4
                      className="login-title title-second-media text-primary"
                      style={{ fontSize: 20 }}
                    >
                      Dont't have an account? Sign Up!
                    </h4>
                    <div className="media-sign">
                      <button className="facebook form-control mb-4">
                        Sign In with Facebook
                      </button>
                      <button className="gmail form-control mb-4">
                        Sign In with Gmail
                      </button>
                      <button className="twitter form-control mb-4">
                        Sign In with Twitter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
