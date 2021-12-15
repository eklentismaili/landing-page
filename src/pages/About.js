import SingleLine from "../components/SingleLine";

const About = () => {
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
          <div className="col-md-4" data-aos="flip-up">
            po
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
