import React from 'react'
import {Link} from 'react-router-dom' 

function TopBar() {
    return (
      <div>
        <section id="top">
          <div className="container">
            <div className="row pt-2 pb-2">
              <div className="col-md-8 left-top">
                <ul className="nostyle">
                  <li>
                    <Link
                      to="telto:01-5122035"
                      id="phone"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Telephone Us"
                    >
                      <i className="fa fa-phone pr-2" aria-hidden="true"></i>
                      01-5122035
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="telto:9843965781"
                      id="mobile"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Quick Contact"
                    >
                      <i className="fa fa-mobile pr-2 pl-2" aria-hidden="true"></i>
                      9843965781
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="mailto:nirajan.bekoju@gmail.com"
                      id="email"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Mail Us"
                    >
                      <i
                        className="fa fa-envelope pr-2 pl-2"
                        aria-hidden="true"
                      ></i>
                      info@siddharthabookstore.com
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 text-right right-top">
                <Link
                  to="#">
                  <i className="fa fa-facebook pr-2" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-twitter pr-2" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-youtube-play pr-2" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-instagram pr-2" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default TopBar
