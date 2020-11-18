import React from 'react'
import { Link } from 'react-router-dom'
import Payment from '../../assets/images/payment.png'

function Footer() {
    return (
        <footer>
            <div class="container">
                <div class="row pt-5 pb-2">
                <div class="col-md-3">
                    <h4 class="title-4 text-white">About Siddhartha</h4>
                    <p class="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <Link to="#">Read More</Link>
                </div>
                <div class="col-md-3 contact">
                    <h4 class="title-4 text-white">Contact Us</h4>
                    <p>
                    Siddhartha Book Store<br/>
                    Liwali, Bhaktapur-8<br/>
                    Phone: 9843965781<br/>
                    Email: nirajan.bekoju@gmail.com
                    </p>
                </div>
                <div class="col-md-3 terms">
                    <h4 class="title-4 text-white">Terms and Conditions</h4>
                    <p>
                        <Link to="#">Privacy Policy</Link><br/>
                        <Link to="#">Terms of Use</Link><br/>
                        <Link to="#">Payment Policy</Link><br/>
                        <Link to="#">Return Policy</Link>
                    </p>
                </div>
                <div class="col-md-3">
                    <h4 class="title-4 text-white">Payment Options</h4>
                    <img src={Payment} alt="Payment Option" />
                    <h4 class="title-4 text-white">Social Media</h4>
                    <Link to="#"><i class="fa fa-facebook pr-2" aria-hidden="true"></i></Link>
                    <Link to="#"><i class="fa fa-twitter pr-2" aria-hidden="true"></i></Link>
                    <Link to="#"><i class="fa fa-youtube-play pr-2" aria-hidden="true"></i></Link>
                    <Link to="#"><i class="fa fa-instagram pr-2" aria-hidden="true"></i></Link>
                    <Link to="#"><i class="fa fa-linkedin" aria-hidden="true"></i></Link>
                </div>
                </div>
                <hr/>
                <div class="row">
                <div class="col-md-6">
                    Copyright &copy; 2019 Siddhartha. All rights reserved.
                </div>
                <div class="col-md-6 text-right powered">
                    Powered By: Siddhartha
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
