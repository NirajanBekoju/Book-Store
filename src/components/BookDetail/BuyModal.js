import React, { useState } from 'react'
import {paymentMethods} from '../Data'
import { Modal } from "react-bootstrap"
import axios from 'axios'

import { setAlert } from '../../redux/alert/AlertAction'
import { connect } from 'react-redux';
import { getCookie } from "../../HelperFunctions";
import PropTypes from "prop-types";

function BuyModal({ show, handleClose, id, title, setAlert }) {
  const csrftoken = getCookie("csrftoken");

  const book_id = id
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        payment_method: "Cash"
    })

    const {name, email, message, payment_method} = formData

    const handleChange = (e) => {
        setFormData((prevFormData) => {
            return {...prevFormData, [e.target.name]:e.target.value}
        })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.defaults.headers = {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      };

      axios.post("http://127.0.0.1:8000/api/inquiry/", {
        name,
        email,
        book_id,
        message,
        payment_method
      }).then(res => {
        setAlert(`${res.data.success}`, "success")
      })
      .catch(err => {
        console.log(err);
      })
      window.scrollTo(0,0);
      handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} style={{ zIndex: "999999999" }}>
          <Modal.Header closeButton>
            <Modal.Title>Buy "{title}"</Modal.Title>
          </Modal.Header>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Modal.Body>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  placeholder="Enter your Message"
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="payment">Payment Method</label>
                <select
                  name="payment_method"
                  id="payment_method"
                  value={payment_method}
                  onChange={(e) => handleChange(e)}
                >
                  {paymentMethods.map((method) => {
                    return <option value={method} key={method}>{method}</option>;
                  })}
                </select>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </Modal.Footer>
          </form>
        </Modal>
    );
}

BuyModal.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, {setAlert})(BuyModal)
