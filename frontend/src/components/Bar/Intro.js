import React from 'react'
import { Link } from 'react-router-dom'

function Intro() {
    return (
      <div
        class="title-info pt-4 pb-2"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
      >
        <h1 class="title-1">Siddhartha Book Store</h1>
        <span class="title-info">Buy and Share Books And Educate Yourself</span>
        <div class="searchBar">
          <div class="container">
            <div class="row">
              <div class="offset-md-2 col-md-8">
                <p class="pt-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum...
                </p>
                <Link to="/about" className="btn btn-success">View Detail</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Intro
