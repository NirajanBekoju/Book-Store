import React from 'react'

function Book({ book, handleShow }) {
    return (
      <div className="row">
        <div className="offset-md-1 col-md-4">
          <img src={book.image} alt="Book" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h3>{book.title}</h3>
          <p>
            <strong>
              Author : {book.author} <br />
              Category : {book.category}
              <br />
              Price : {book.price}
            </strong>
          </p>
          <p style={{ textAlign: "justify" }}>{book.description}</p>
          <button className="btn btn-success" onClick={() => handleShow()}>Buy Now</button>
        </div>
      </div>
    );
}

export default Book
