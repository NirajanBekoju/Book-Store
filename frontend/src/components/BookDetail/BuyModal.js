import React, { useState } from 'react'
import { Modal } from "react-bootstrap"
import {paymentMethods} from '../Data'
import axios from 'axios'

function BuyModal({ show, handleClose, id, title }) {
    // const [name, email, book_id, message, payment_method] 
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
      console.log("Submitted")
      e.preventDefault();
      axios.defaults.headers = {
        "Content-Type": "application/json"
      }

      axios.post("http://127.0.0.1:8000/api/inquiry/", {
        name,
        email,
        book_id,
        message,
        payment_method
      }).then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
      handleClose();
      window.scrollTo(0,0);
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
              {/* <div className="form-group">
                <input
                  type="hidden"
                  className="form-control"
                  name="book_id"
                  id="book"
                  value={book_id}
                />
              </div> */}
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
              <button className="btn btn-danger" onClick={handleClose}>
                Close
              </button>
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </Modal.Footer>
          </form>
        </Modal>
    );
}

export default BuyModal
