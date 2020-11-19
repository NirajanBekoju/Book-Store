import React, { useState } from 'react'
import axios from 'axios'
import { categoryOptions, priceOptions } from './Data'
import SearchList from './SearchList'

function SearchBook() {
    const listingsPerRow = 3
    const [searchListings, setSearchListings] = useState([]);

    const style={
        backgroundColor:"white",
        padding: 10,
        marginBottom: 20  
    }

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        category: "Other",
        price: "Any",
        keywords: ""
    })

    

    const { title, author, category, price, keywords } = formData

    const handleChange = e => {
        setFormData(prevFormData => {
            return {...prevFormData, [e.target.name]:e.target.value}
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.defaults.headers = {
            "Content-Type": "application/json"
        };

        axios.post("http://127.0.0.1:8000/api/listings/search", {
            title,
            author,
            category,
            price,
            keywords
        }).then(
        res => {
            setSearchListings(res.data);
            window.scrollTo(0, 0);
        })
        .catch(err => {
            window.scrollTo(0, 0);
        })
    }

    return (
      <div style={style}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row p-4">
            <div className="col-md-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  name="author"
                  placeholder="Author"
                  value={author}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  id="category"
                  value={category}
                  onChange={(e) => handleChange(e)}
                >
                  {categoryOptions.map((cat) => {
                    return (
                      <option value={cat} key={cat}>
                        {cat}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <select
                  name="price"
                  id="price"
                  value={price}
                  onChange={(e) => handleChange(e)}
                >
                  {priceOptions.map((p) => {
                    return (
                      <option value={p} key={p}>
                        {p}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <input
                  name="keywords"
                  id="keywords"
                  className="form-control"
                  type="text"
                  placeholder="Keyword"
                  value={keywords}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
        <SearchList
          searchListings={searchListings}
          listingsPerRow={listingsPerRow}
        />
      </div>
    );
}

export default SearchBook
