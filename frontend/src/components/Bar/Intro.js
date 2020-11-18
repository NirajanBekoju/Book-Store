import React from 'react'
import { Link } from 'react-router-dom'

function Intro() {
    return (
       <div class="title-info pt-4 pb-2" data-aos="zoom-in-up" data-aos-duration="1500">
            <h1 class="title-1">Siddhartha Book Store</h1>
            <span class="title-info">Buy and Share Books And Educate Yourself</span>
            <div class="searchBar">
            <div class="container">
                <div class="row pt-5 pb-3">
                <div class="offset-md-2 col-md-7 col-sm-9 col-xs-9">
                    <input type="text" class="form-control search-bar" placeholder="Search Books and Notes..." />
                </div>
                <div class="col-md-1 col-sm-3 col-xs-3">
                    <Link to="" class="btn btn-success search-bar search-button">Search</Link>
                </div>
                </div>
                <div class="row">
                <div class="offset-md-2 col-md-8">
                    <p class="pt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                </div>
                </div>
            
            </div>
            </div>
        </div>
    )
}

export default Intro
