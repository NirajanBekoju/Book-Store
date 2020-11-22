import React from 'react'
import { Link } from 'react-router-dom'

function Card({ listing }) {
    const priceStyle = {
        color: "#b12704"
    }
    return (
       <div className="card" style={{width: "100%"}}>
          <img src={listing.image} className="card-img-top" alt="..." height="300" />
          <div className="card-body">
            <h5 className="card-title">{listing.title}</h5>
            <p className="card-text">Writer: {listing.author}<br/>
            Category: {listing.category}<br/>
            <span className="price" style={priceStyle}>NRs. {listing.price}</span></p>
            <Link to={`/book/${listing.id}`} className="btn btn-primary">View Detail</Link>
          </div>
        </div>
    )
}

export default Card
