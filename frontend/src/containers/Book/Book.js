import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../../components/Card'
import NavBar from '../../components/NavBar'
import Pagination from '../../components/Pagination'
import SearchBook from '../../components/SearchBook'

function Book() {
    const [listings, setListings] = useState([])
    const [count, setCount] = useState(0)
    const [previous, setPrevious] = useState('')
    const [next, setNext] = useState('')
    const [active, setActive] = useState(1)
    const itemsPerPage = 4

    useEffect(() => {
      window.scrollTo(0, 0);
      const fetchData = async () => {
        try {
          const res = await axios.get(
            "http://127.0.0.1:8000/api/listings/?page=1"
          );
          setListings(res.data.results);
          setCount(res.data.count);
          setPrevious(res.data.previous);
          setNext(res.data.next)
        } catch (err) {
          console.log("Error Fetching Data");
        }
      };

      fetchData();
    }, []);

    const displayListings = () => {
        let display = [];
        let result = [];

        listings.map(listing => {
            return display.push(
                <Card 
                    listing= {listing}
                />
            )
        })

        for (let i = 0; i<listings.length; i+=4){
            result.push(
              <div className="row" key={i}>
                <div className="col-md-3">{display[i]}</div>
                <div className="col-md-3">{display[i +1] ? display[i +1] : null}</div>
                <div className="col-md-3">{display[i +2] ? display[i +2] : null}</div>
                <div className="col-md-3">{display[i +3] ? display[i +3] : null}</div>
              </div>
            );
        }

        return result;
    }

    const visitPage = (page) => {
        axios
          .get(`http://127.0.0.1:8000/api/listings/?page=${page}`)
          .then((res) => {
            setListings(res.data.results);
            setPrevious(res.data.previous);
            setNext(res.data.next);
            setActive(page);
          })
          .catch((err) => {});
    }

    const previous_number = () => {
        if(previous){
            axios
            .get(previous)
            .then((res) => {
                setListings(res.data.results);
                setPrevious(res.data.previous);
                setNext(res.data.previous);
                if (previous) {
                setActive(active - 1);
                }
            })
            .catch((err) => {});
        }
    };

    const next_number = () => {
        if(next){
            axios
              .get(next)
              .then((res) => {
                setListings(res.data.results);
                setPrevious(res.data.previous);
                setNext(res.data.next);
                if (next) {
                  setActive(active + 1);
                }
              })
              .catch((err) => {});
        }
    };

    return (
      <React.Fragment>
        <NavBar />
        <section id="subject-choice">
          <div className="container">
            <SearchBook setListings = {setListings} />
            {displayListings()}
            <Pagination
              itemsPerPage={itemsPerPage}
              count={count}
              visitPage={visitPage}
              previous={previous_number}
              next={next_number}
              active={active}
              setActive={setActive}
            />
          </div>
        </section>
      </React.Fragment>
    );
}

export default Book
