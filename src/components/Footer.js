import React from "react";

function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-5">
              <h6>Alpine Albania Adventures</h6>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                esectetur adipiscing elitsed do eiusmoiusmod tempor incididunt
                utlabore et dolore magna aliqua.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Site Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="http://scanfcode.com/home/">Home</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/about/">About Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contact/">Contact Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-4">
              <h6>Social Links</h6>
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="copyright-text">
                Copyright &copy; {new Date().getFullYear()} All Rights Reserved
                by
                <a href="#">EI</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
