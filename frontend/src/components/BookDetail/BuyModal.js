import React, { useState } from 'react'
import { Modal } from "react-bootstrap"
import {paymentMethods} from '../Data'

function BuyModal({ show, handleClose }) {
    // const [name, email, book_id, message, payment_method] 
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        book_id: "",
        message: "",
        payment_method: ""
    })

    const {name, email, book_id, message, payment_method} = formData

    const handleChange = (e) => {
        setFormData((prevFormData) => {
            return {...prevFormData, [e.target.name]:e.target.value}
        })
    }

    return (
      <div>
        <Modal show={show} onHide={handleClose} style={{ zIndex: "999999999" }}>
          <Modal.Header closeButton>
            <Modal.Title>Buy Book</Modal.Title>
          </Modal.Header>
          <form>
            <Modal.Body>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
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
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="book">Book Id</label>
                <input
                  className="form-control"
                  name="book_id"
                  id="book"
                  value={book_id}
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
                    return <option value={method}>{method}</option>;
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
      </div>
    );
}

export default BuyModal
