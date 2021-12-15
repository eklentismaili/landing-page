import { Link } from "react-router-dom";
import SingleLine from "../components/SingleLine";
import homeBannerImg1 from "../assets/images/home-carousel/image-1.jpeg";
import homeBannerImg2 from "../assets/images/home-carousel/image-2.jpeg";
import homeBannerImg3 from "../assets/images/home-carousel/image-3.jpeg";
import homeBannerImg4 from "../assets/images/home-carousel/image-4.jpeg";

const Packages = () => {
  return (
    <div className="packages pages">
      <div className="container py-5">
        <div className="row">
          <h2 className="text-color-blue text-center" data-aos="fade-up">
            Our Packages
          </h2>
          <SingleLine />
          <p className="pb-5 text-center" data-aos="fade-up">
            Contact us for more information about our packages.
          </p>
          <div className="col-md-4" data-aos="flip-up">
            <Link to="/packages/1">
              <div className="package-wrapper">
                <img src={homeBannerImg1} />
                <h6>The Tour of Berat</h6>
              </div>
            </Link>
          </div>
          <div className="col-md-4" data-aos="flip-up">
            <Link to="/packages/2">
              <div className="package-wrapper">
                <img src={homeBannerImg2} />
                <h6>The Tour of Valbone</h6>
              </div>
            </Link>
          </div>
          <div className="col-md-4" data-aos="flip-up">
            <Link to="/packages/3">
              <div className="package-wrapper">
                <img src={homeBannerImg3} />
                <h6>The Tour of Vermosh</h6>
              </div>
            </Link>
          </div>
          <div className="col-md-4" data-aos="flip-up">
            <Link to="/packages/4">
              <div className="package-wrapper">
                <img src={homeBannerImg4} />
                <h6>The Tour of Grama</h6>
              </div>
            </Link>
          </div>
          <div className="col-md-4" data-aos="flip-up">
            <Link to="/packages/5">
              <div className="package-wrapper">
                <img src={homeBannerImg3} />
                <h6>The Tour of Korab</h6>
              </div>
            </Link>
          </div>
          <div className="col-md-4" data-aos="flip-up">
            <Link to="/packages/6">
              <div className="package-wrapper">
                <img src={homeBannerImg4} />
                <h6>The Tour of Lepushe</h6>
              </div>
            </Link>
          </div>
          <div className="col-md-4" data-aos="flip-up">
            <Link to="/packages/7">
              <div className="package-wrapper">
                <img src={homeBannerImg1} />
                <h6>The Tour of Sotira</h6>
              </div>
            </Link>
          </div>
          <div className="col-md-4" data-aos="flip-up">
            <Link to="/packages/8">
              <div className="package-wrapper">
                <img src={homeBannerImg2} />
                <h6>The Tour of Theth</h6>
              </div>
            </Link>
          </div>
          <div className="col-md-4" data-aos="flip-up">
            <Link to="/packages/9">
              <div className="package-wrapper">
                <img src={homeBannerImg3} />
                <h6>The Tour of Kallaknit</h6>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
