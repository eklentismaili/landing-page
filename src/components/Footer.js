import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

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
                  <a href="#">Tirana, Albania</a>
                </li>
                <li>
                  <span>Quick Contact:</span>
                  <a href="#">+355 69 00000000</a>
                </li>
                <li>
                  <span>Email Us:</span>
                  <a href="mailto: eklentismaili.dev@gmail.com">
                    eklentismaili.dev@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Site Links</h6>
              <ul className="footer-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
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
                <a
                  href="https://al.linkedin.com/in/eklent-ismaili-b936001b6"
                  target="_blank"
                  className="copyright_owner text-color-yellow"
                >
                  Eklent Ismaili
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
