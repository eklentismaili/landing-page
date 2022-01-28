import SingleLine from "../components/SingleLine";
import Accordion from "react-bootstrap/Accordion";
import { Carousel } from "3d-react-carousal";

const About = () => {
  let slides = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />,
  ];

  return (
    <div className="about pages">
      <div className="container py-5">
        <div className="row">
          <h2 className="text-color-blue text-center" data-aos="fade-up">
            About
          </h2>
          <SingleLine />
          <p
            className="pb-md-5 pb-3 text-color-blue text-center"
            data-aos="fade-up"
          >
            We live for the nature
          </p>
          <div className="col-md-6">
            <p className="text-start pb-3" data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
              esectetur adipiscing elitsed do eiusmoiusmod tempor incididunt
              utlabore et dolore magna aliqua. Utenim ad minim veniam quis
              nostrud exercitation ullamco laboris scing elitsed do esectetur
              adipiscing elite nature. Lorem ipsum dolor sit amet consectetur
              adipiscing elitsed do esectetur adipiscing.
            </p>
          </div>
          <div className="col-md-6 pt-4 pt-md-0">
            <h4 className="text-color-blue text-center pb-5">
              Frequently askes questions
            </h4>
            <Accordion defaultActiveKey="0" flush data-aos="fade-up">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Our Mountains</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Our Trips</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Our Team</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-md-6">
            <h4>Our Team </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
              esectetur adipiscing elitsed do eiusmoiusmod tempor incididunt
              utlabore et dolore magna aliqua. Utenim ad minim veniam quis
              nostrud exercitation ullamco laboris scing elitsed do esectetur
              adipiscing elite nature. Lorem ipsum dolor sit amet consectetur
              adipiscing elitsed do esectetur adipiscing.
            </p>
          </div>
          <div className="col-md-6">
            <Carousel slides={slides} arrows={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
