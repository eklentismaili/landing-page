import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-5">
              <h6>Alpine Albania Adventures</h6>
              <ul className="footer-links footer-contact-links">
                <li>
                  <span>Address:</span>
                  <a href="#">
                    Rruga e Durresit, Pallati 102 , Tirana, Albania
                  </a>
                </li>
                <li>
                  <span>Quick Contact:</span>
                  <a href="#">+355 69 20 60 120</a>
                </li>
                <li>
                  <span>Email Us:</span>
                  <a href="#">info@albania-alpine-adventure.com</a>
                </li>
              </ul>
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
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <p className="copyright-text">
                Copyright &copy; {new Date().getFullYear()} All Rights Reserved
                by
                <a href="#" className="copyright_owner text-color-yellow">
                  EI
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
