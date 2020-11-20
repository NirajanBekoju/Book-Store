import React from 'react'
import { Link } from "react-router-dom"

function FeatureBook({ listings }) {
    const getFeaturedListings = () => {
        let results = []
        listings.map((listing) => {
            return results.push(
                <div className="image" key={listing.id}>
                    <Link to={`/book/${listing.id}`}>
                        <img src={listing.image} alt="Featured Book" />
                    </Link>    
                </div>
            )
        })
        return results
    }

    return (
        <section id="featured-book" className='mb-4'>
            <div className="container">
                <h3 className="title-3 pt-3 pb-3">
                    Featured Books
                </h3>
                <div className="gallery-container">
                    {getFeaturedListings()}
                </div>
            </div>
        </section>
        
    )
}

export default FeatureBook
