import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import { setAlert } from '../../redux/alert/AlertAction'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCookie } from '../../HelperFunctions'

function ContactForm({ setAlert }) {
  const csrftoken = getCookie("csrftoken");

    const style = {
        cursor: "pointer"
    }

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    const [aggrement, setAggrement] = useState("")

    const {name, email, message} = formData

    const handleChange = (e) => {
        setFormData((prevFormData) => {
            return {...prevFormData, [e.target.name]: e.target.value}
        })
    }

    const handleAggrement = (e) => {
        if(e.target.checked){
            setAggrement("on")
        }
        else{
            setAggrement("")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(aggrement === "on"){
           axios.defaults.headers = {
             "Content-Type": "application/json",
             "X-CSRFToken": csrftoken,
           };

          axios
            .post("http://127.0.0.1:8000/api/contact/", {
              name,
              email,
              message,
              aggrement,
            })
            .then((res) => {
              window.scrollTo(0, 0);
              console.log("From Response")
              console.log(res);
              if(res.data[1] === "success"){
                setAlert("Message has been sent", "success")
              }
              else if(res.data[1] === "aggrement"){
                setAlert("Please agree the policy", "danger")
              }
              else if(res.data[1] === "error"){
                setAlert("Message Failed to sent", "danger")
              }
            })
            .catch((err) => {
              window.scrollTo(0, 0);
            });
        }
        else{
          window.scrollTo(0,0)
          setAlert("Please agree the policy", "danger")

        }
    }

  return (
    
    <div className="col-md-8 contact-form-container">
      <h1 className="title-1-big">
        Contact Us<span> Now</span>
      </h1>
      <p className="help-info">
        How can we help you? Do you have any questions or requests? Let us know!
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          name="name"
          value={name}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          className="form-control"
          placeholder="something@gmail.com"
          name="email"
          value={email}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="message">Enter Your Message*</label>
        <textarea
          name="message"
          id="message"
          className="form-control mb-3"
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => handleChange(e)}
        ></textarea>
        <input type="checkbox" style={style} name="aggrement" value={aggrement} onChange={(e) => handleAggrement(e)}/>
        <span className="agreement-text">
          I agree with the storage and handling of my personal data according to
          the Privacy Policy
        </span>
        <p className="pt-3">
          You can find the <Link to="#">Privacy Policy</Link> here
        </p>
        <button type="submit" className="form-control btn btn-success">
          Send
        </button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  setAlert: PropTypes.func.isRequired
}


export default connect(null, {setAlert})(ContactForm);
