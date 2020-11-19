import React, {useState, useEffect} from 'react'
import NavBar from '../../components/NavBar'
import axios from 'axios'

function BookDetail(props) {
    const [book, setBook] = useState({})

    useEffect(() => {
        const id = props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/listings/${id}`)
        .then(res => {
            setBook(res.data)
        })
        .catch(err => {

        })
    }, [props.match.params.id])

    return (
      <React.Fragment>
        <NavBar />
        <section id="subject-choice">
          <div className="container">
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
                <button className="btn btn-success">Buy Now</button>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
}

export default BookDetail
