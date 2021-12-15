import SingleLine from "../components/SingleLine";

const Privacy = () => {
  return (
    <div className="privacy pages">
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h2 className="pt-5 text-center text-color-blue" data-aos="fade-up">
              Privacy Policy
            </h2>
            <SingleLine />
            <p className="pt-5" data-aos="fade-up">
              Your privacy is important to us. It is Our policy to respect your
              privacy and comply with any applicable law and regulation
              regarding any personal information we may collect about you,
              including across our website, and other sites we own and operate.{" "}
            </p>
            <p>
              This policy is effective as of January 2022 and was last updated
              on January 2022.{" "}
            </p>
            <h4 className="pt-3 text-center text-color-blue" data-aos="fade-up">
              Information We Collect
            </h4>
            <SingleLine />
            <p data-aos="fade-up" className="pt-3">
              When you visit our website, our servers may automatically log the
              standard data provided by your web browser. It may include your
              device’s Internet Protocol (IP) address, your browser type and
              version, the pages you visit, the time and date of your visit, the
              time spent on each page, other details about your visit, and
              technical details that occur in conjunction with any errors you
              may encounter.{" "}
            </p>
            <p data-aos="fade-up">
              Please be aware that while this information may not be personally
              identifying by itself, it may be possible to combine it with other
              data to personally identify individual persons.{" "}
            </p>
            <p data-aos="fade-up">
              We may ask for personal information which may include one or more
              of the following:{" "}
            </p>
            <ul data-aos="fade-up">
              <li>Name</li>
              <li>Email</li>
              <li>Phone/mobile number</li>
            </ul>
            <p className="pt-3" data-aos="fade-up">
              We keep your personal information only for as long as we need to.
              This time period may depend on what we are using your information
              for, in accordance with this privacy policy. If your personal
              information is no longer required, we will delete it or make it
              anonymous by removing all details that identify you.{" "}
            </p>
            <p data-aos="fade-up">
              However, if necessary, we may retain your personal information for
              our compliance with a legal, accounting, or reporting obligation
              or for archiving purposes in the public interest, scientific, or
              historical research purposes or statistical purposes.{" "}
            </p>
            <h4 className="pt-3 text-center text-color-blue" data-aos="fade-up">
              Use of Cookies
            </h4>
            <SingleLine />
            <p className="pt-3" data-aos="fade-up">
              We use “cookies” to collect information about you and your
              activity across our site. A cookie is a small piece of data that
              our website stores on your computer, and accesses each time you
              visit, so we can understand how you use our site. This helps us
              serve you content based on preferences you have specified.{" "}
            </p>
            <h4 className="pt-3 text-center text-color-blue" data-aos="fade-up">
              Limits of Our Policy
            </h4>
            <SingleLine />
            <p className="pt-3" data-aos="fade-up">
              Our website may link to external sites that are not operated by
              us. Please be aware that we have no control over the content and
              policies of those sites, and cannot accept responsibility or
              liability for their respective privacy practices.{" "}
            </p>
            <h4 className="pt-3 text-center text-color-blue" data-aos="fade-up">
              Contact Us
            </h4>
            <SingleLine />
            <p className="pt-3" data-aos="fade-up">
              For any questions or concerns regarding your privacy, you may
              contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
