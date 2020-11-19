import React from 'react'

function ContactDetail() {
    return (
        <div className="col-md-4 detail-contact-container" data-aos="zoom-in"  data-aos-duration="1500">
        <h3 className="title-yellowish"> 
           Our Details
        </h3>
        <p className="detail-sub-info">
          Use the contact form or get in touch with us directly via phone or e-mail.
        </p>
        <div className="detail-info">
          <i className="fa fa-phone" aria-hidden="true"></i><span className="title-info-contact pl-2">24 Hours Hotline</span><br/>
          <span className="info-contact pl-4">01-5122035</span>
        </div>
        <div className="detail-info pt-3">
          <i className="fa fa-mobile" aria-hidden="true"></i><span className="title-info-contact pl-2">Mobile</span><br/>
          <span className="info-contact pl-4">+977 9843965781</span>
        </div>
        <div className="detail-info pt-3">
          <i className="fa fa-whatsapp" aria-hidden="true"></i><span className="title-info-contact pl-2">Whatsapp</span><br/>
          <span className="info-contact pl-4">Start Chat With Name</span>
        </div>
        <div className="detail-info pt-3">
          <i className="fa fa-envelope" aria-hidden="true"></i><span className="title-info-contact pl-2">Mail Us</span><br/>
          <span className="info-contact pl-4">nirajan.bekoju@gmail.com</span>
        </div>
        <div className="detail-info pt-3">
          <i className="fa fa-address-card" aria-hidden="true"></i><span className="title-info-contact pl-2">Siddhartha Book Store</span><br/>
          <span className="info-contact pl-4"> Company Reg. No. 123-345-123</span>
        </div>
        <div className="detail-info pt-3">
          <i className="fa fa-map-marker" aria-hidden="true"></i><span className="title-info-contact pl-2">Address</span><br/>
          <span className="info-contact pl-4">Liwali, Bhaktapur-8</span>
        </div>
      </div>
    )
}

export default ContactDetail
