import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner';
import FeatureBook from '../components/FeatureBook'
import axios from 'axios'

function Home() {
    const [featuredBook, setFeaturedBook] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try{
                const res = await axios.get("http://127.0.0.1:8000/api/listings/featured");
                setFeaturedBook(res.data.results);
            }
            catch(err){
                console.log('Error Fetching Data')
                console.log(err)
            }        
        }

        fetchData();
    }, []);

    return (
      <div>
        <Banner />
        <FeatureBook listings={featuredBook} />
      </div>
    );
}

export default Home
