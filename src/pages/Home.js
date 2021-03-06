import { Link } from "react-router-dom";
import SingleLine from "../components/SingleLine";
import { Carousel } from "react-responsive-carousel";
import Accordion from "react-bootstrap/Accordion";
import { Form, Button } from "react-bootstrap";
import homeBannerImg1 from "../assets/images/home-carousel/image-1.jpeg";
import homeBannerImg2 from "../assets/images/home-carousel/image-2.jpeg";
import homeBannerImg3 from "../assets/images/home-carousel/image-3.jpeg";
import homeBannerImg4 from "../assets/images/home-carousel/image-4.jpeg";
import homeServicesImg1 from "../assets/images/services/hiking.jpeg";
import homeServicesImg2 from "../assets/images/services/rafting.jpeg";
import homeServicesImg3 from "../assets/images/services/parachute.jpeg";
import homeServicesImg4 from "../assets/images/services/skiing.jpeg";
import homeServicesImg5 from "../assets/images/services/off-road.jpeg";
import homeServicesImg6 from "../assets/images/services/trekking.jpeg";
import homeServicesImg7 from "../assets/images/services/explore.jpeg";
import homeServicesImg8 from "../assets/images/services/diving.jpeg";

const Home = () => {
  return (
    <div className="home pages">
      <section className="home-banner text-center py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col d-flex flex-column align-items-center">
              <h1 data-aos="fade-up">Alpine Albania Adventures</h1>
              <SingleLine />
              <p className="py-5" data-aos="fade-up">
                Do not follow where the path may lead. Go instead where there is
                no path and leave a trail
              </p>
              <Carousel
                className="carousel-wrapper"
                showThumbs={false}
                autoPlay={true}
                emulateTouch={true}
                showIndicators={false}
                infiniteLoop={true}
                showArrows={false}
                showStatus={false}
                data-aos="fade-up"
              >
                <div>
                  <img src={homeBannerImg1} />
                </div>
                <div>
                  <img src={homeBannerImg2} />
                </div>
                <div>
                  <img src={homeBannerImg3} />
                </div>
                <div>
                  <img src={homeBannerImg4} />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="home-about py-5 text-center">
        <div className="container">
          <div className="row">
            <h1 className="text-color-blue" data-aos="fade-up">
              About Us
            </h1>
            <SingleLine />
            <p className="pb-md-5 pb-3 text-color-blue" data-aos="fade-up">
              We live for the nature
            </p>
            <div className="col-md-6">
              <p className="text-start pb-3" data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                esectetur adipiscing elitsed do eiusmoiusmod tempor incididunt
                utlabore et dolore magna aliqua. Utenim ad minim veniam quis
                nostrud exercitation ullamco laboris scing elitsed do esectetur
                adipiscing elite nature.
              </p>
              <Link to="/about" data-aos="fade-up">
                Read More
              </Link>
            </div>
            <div className="col-md-6 pt-4 pt-md-0">
              <Accordion defaultActiveKey="0" flush data-aos="fade-up">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Our Mountains</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Our Trips</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Our Team</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <section className="home-latest-trips py-5 text-center">
        <div className="container">
          <div className="row">
            <h2 className="text-color-blue text-center" data-aos="fade-up">
              Latest Trips
            </h2>
            <SingleLine />
            <p className="pb-3 text-color-blue text-center" data-aos="fade-up">
              Explore the unexplored world
            </p>
            <div
              className="col-md-6 text-start pt-4 pt-md-0"
              data-aos="fade-up"
            >
              <Carousel
                className="carousel-trips-items"
                showThumbs={false}
                autoPlay={true}
                emulateTouch={true}
                showIndicators={false}
                infiniteLoop={true}
                showArrows={false}
                showStatus={false}
              >
                <div className="carousel-trips-item">
                  <img src={homeBannerImg1} />
                  <div className="carousel-trips-info">
                    <div>
                      <span>5</span>
                      <span>Days</span>
                    </div>
                    <div>
                      <span>5</span>
                      <span>Group Size</span>
                    </div>
                    <div>
                      <span>Moderate</span>
                      <span>Difficulty</span>
                    </div>
                  </div>
                  <h5 className="text-start text-color-blue">Theth</h5>
                  <p className="text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </p>
                </div>
                <div className="carousel-trips-item">
                  <img src={homeBannerImg2} />
                  <div className="carousel-trips-info">
                    <div>
                      <span>5</span>
                      <span>Days</span>
                    </div>
                    <div>
                      <span>5</span>
                      <span>Group Size</span>
                    </div>
                    <div>
                      <span>Moderate</span>
                      <span>Difficulty</span>
                    </div>
                  </div>
                  <h5 className="text-start text-color-blue">Jezerce</h5>
                  <p className="text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </p>
                </div>
                <div className="carousel-trips-item">
                  <img src={homeBannerImg3} />
                  <div className="carousel-trips-info">
                    <div>
                      <span>5</span>
                      <span>Days</span>
                    </div>
                    <div>
                      <span>5</span>
                      <span>Group Size</span>
                    </div>
                    <div>
                      <span>Moderate</span>
                      <span>Difficulty</span>
                    </div>
                  </div>
                  <h5 className="text-start text-color-blue">Korab</h5>
                  <p className="text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </p>
                </div>
                <div className="carousel-trips-item">
                  <img src={homeBannerImg4} />
                  <div className="carousel-trips-info">
                    <div>
                      <span>5</span>
                      <span>Days</span>
                    </div>
                    <div>
                      <span>5</span>
                      <span>Group Size</span>
                    </div>
                    <div>
                      <span>Moderate</span>
                      <span>Difficulty</span>
                    </div>
                  </div>
                  <h5 className="text-start text-color-blue">Lepushe</h5>
                  <p className="text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </p>
                </div>
              </Carousel>
            </div>
            <div className="col-md-6">
              <p className="text-start pb-3" data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                esectetur adipiscing elitsed do eiusmoiusmod tempor incididunt
                utlabore et dolore magna aliqua. Utenim ad minim veniam quis
                nostrud exercitation ullamco laboris scing elitsed do esectetur
                adipiscing elite nature.
              </p>
              <Link to="/about" className="text-center" data-aos="fade-up">
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="home-services py-5 text-center">
        <div className="container">
          <h1 className="text-color-blue">Services</h1>
          <SingleLine />
          <p className="pb-5 text-color-blue">We provide the best experience</p>
          <div className="row home-services-info">
            <div className="col-6 col-md-3" data-aos="fade-up">
              <img src={homeServicesImg1} />
              <h5 className="text-color-blue">Hike</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="col-6 col-md-3" data-aos="fade-up">
              <img src={homeServicesImg2} />
              <h5 className="text-color-blue">Raft</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="col-6 col-md-3" data-aos="fade-up">
              <img src={homeServicesImg3} />
              <h5 className="text-color-blue">Fly</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="col-6 col-md-3" data-aos="fade-up">
              <img src={homeServicesImg4} />
              <h5 className="text-color-blue">Ski</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="col-6 col-md-3" data-aos="fade-up">
              <img src={homeServicesImg5} />
              <h5 className="text-color-blue">Off Road</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="col-6 col-md-3" data-aos="fade-up">
              <img src={homeServicesImg6} />
              <h5 className="text-color-blue">Traks</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="col-6 col-md-3" data-aos="fade-up">
              <img src={homeServicesImg7} />
              <h5 className="text-color-blue">Explore</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="col-6 col-md-3" data-aos="fade-up">
              <img src={homeServicesImg8} />
              <h5 className="text-color-blue">Scuba Dive</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-contact py-5">
        <div className="container">
          <div className="row">
            <h1 className="text-color-blue text-center" data-aos="fade-up">
              Contact Us
            </h1>
            <SingleLine />
            <p className="pb-5 text-color-blue text-center" data-aos="fade-up">
              Get in touch with the best
            </p>
            <div className="col-12" data-aos="fade-up">
              <Form className="contact-us-form">
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="phone" placeholder="Phone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="text-center contact-us-button"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
