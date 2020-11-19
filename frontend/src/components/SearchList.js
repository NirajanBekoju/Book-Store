import React from 'react'
import Card from './Card'

function SearchList({ searchListings, listingsPerRow }) {
  const displaySearchListings = () => {
    let display = [];
    let result = [];

    searchListings.map((searchListing) => {
      return display.push(<Card listing={searchListing} />);
    });

    for (let i = 0; i < display.length; i += listingsPerRow) {
      result.push(
        <div className="row">
          <div className="col-md-4">{display[i]}</div>
          <div className="col-md-4">
            {display[i + 1] ? display[i + 1] : null}
          </div>
          <div className="col-md-4">
            {display[i + 2] ? display[i + 2] : null}
          </div>
        </div>
      );
    }

    return result;
  };

  return <React.Fragment>{displaySearchListings()}</React.Fragment>;
}

export default SearchList
