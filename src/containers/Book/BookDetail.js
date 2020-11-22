import React, {useState, useEffect} from 'react'
import NavBar from '../../components/NavBar'
import axios from 'axios'
import Book from '../../components/BookDetail/Book'
import BuyModal from '../../components/BookDetail/BuyModal'

function BookDetail(props) {
    const [book, setBook] = useState({})

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
      window.scrollTo(0,0)
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
            <Book book={book} handleShow={handleShow} />
          </div>
        </section>
        <BuyModal
          show={show}
          handleClose={handleClose}
          id={book.id}
          title={book.title}
        />
      </React.Fragment>
    );
}

export default BookDetail
