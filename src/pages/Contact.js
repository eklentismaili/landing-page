import SingleLine from "../components/SingleLine";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="contact pages">
      <div className="container py-5">
        <div className="row">
          <h2 className="text-color-blue text-center" data-aos="fade-up">
            Contact Us
          </h2>
          <SingleLine />
          <p className="pb-5 text-center" data-aos="fade-up">
            Contact us for more information about our services.
          </p>
          <div className="col-12 pb-5">
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
          <div className="col-12">
            <iframe
              data-aos="fade-up"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2996.056446779512!2d19.81263086577839!3d41.32938590755107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRruga%20e%20Durresit%2C%20Pallati%20102%20%2C%20Tirana%2C%20Albania!5e0!3m2!1ssq!2s!4v1639480461099!5m2!1ssq!2s"
              className="contact-us-iframe"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
