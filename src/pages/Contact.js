import SingleLine from "../components/SingleLine";

const Contact = () => {
    return (
      <div className="contact pages">
        <div className="container py-5">
          <div className="row">
              <h2 className="text-color-blue text-center">Contact Us</h2>
              <SingleLine/>
              <p className="pb-5 text-center">Contact us for more information about our services.</p>
              <div className="col-md-4">
                <div>
                  <p>Phone</p>
                  <br/>
                    <h6 >
                        <a href="#">+355 69 000 0000</a>
                    </h6>
                  <br/>
                    <h6>
                        <a href="#">+355 69 000 0000</a>
                    </h6>
                  <br/>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <p>Address</p>
                  <br/>
                    <h6 >
                        <a href="#">Tirane 20001, Albania</a>
                    </h6>
                  <br/>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <p>Email</p>
                  <br/>
                    <h6 >
                        <a href="#">info@info.com</a>
                    </h6>
                  <br/>
                    <h6>
                        <a href="#">info@info.com</a>
                    </h6>
                  <br/>
                </div>
              </div>
              <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2996.056446779512!2d19.81263086577839!3d41.32938590755107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRruga%20e%20Durresit%2C%20Pallati%20102%20%2C%20Tirana%2C%20Albania!5e0!3m2!1ssq!2s!4v1639480461099!5m2!1ssq!2s" className="contact-us-iframe" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
              </div>
          </div>
        </div>
      </div>
    );
  };

  export default Contact;