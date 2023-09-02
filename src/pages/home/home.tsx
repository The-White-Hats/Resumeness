import { Link } from "react-router-dom";
import easy from "../../assets/easy.png";
import free from "../../assets/free.png";
import Footer from "../../components/Footer/Footer";
import "./home.css";

const Home = () => {
  const secure = (
    <svg
      width="480"
      height="510"
      viewBox="0 0 480 510"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M240 0C244.6 0 249.2 1 253.4 2.9L441.7 82.8C463.7 92.1 480.1 113.8 480 140C479.5 239.2 438.7 420.7 266.4 503.2C249.7 511.2 230.3 511.2 213.6 503.2C41.3005 420.7 0.500455 239.2 0.000454849 140C-0.0995452 113.8 16.3005 92.1 38.3005 82.8L226.7 2.9C230.8 1 235.4 0 240 0Z"
        fill="black"
      />
    </svg>
  );

  return (
    <>
      <section className="hero">
        <div className="info-container">
          <h1 className="header">Resumeness</h1>
          <div className="intro">
            Get ready to make an impression with our webapp for designing
            professional resumes and cover letters!
          </div>
          <div className="start-container">
            <div className="start">Let's Start!</div>
            <div className="start-button">
              <Link to="/resume">
                <button className="resume">Resume</button>
              </Link>
              <Link to="/cover-letter">
                <button className="cover-letter">Cover Letter</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="reasons">
        <div className="head">Why build my resume with Resumeness?</div>
        <div className="reasons-grid">
          <div className="grid-item">
            <div className="title-container">
              <div className="icon-container">
                <img src={free} alt="free" />
              </div>
              <div className="reason-title">It's Free</div>
            </div>
            <div className="reason">
              Great news! The product you’re interested in is completely free.
              You don’t have to pay anything to use it. It’s a great opportunity
              to try out the product and see if it’s right for you. Don’t miss
              out on this amazing offer!
            </div>
          </div>
          <div className="grid-item">
            <div className="title-container">
              <div className="icon-container">{secure}</div>
              <div className="reason-title">Secure</div>
            </div>
            <div className="reason">
              Your safety is our top priority. We understand that security is of
              utmost importance when it comes to products, and we want to assure
              you that the product you’re interested in is completely secure. We
              have taken all necessary measures to ensure that your data and
              privacy are protected.
            </div>
          </div>
          <div className="grid-item">
            <div className="title-container">
              <div className="icon-container">
                <img src={easy} alt="easy" />
              </div>
              <div className="reason-title">Easy to Use</div>
            </div>
            <div className="reason">
              We understand that ease of use is a top priority when it comes to
              products, and we’re happy to say that the product you’re
              interested in is incredibly easy to use. Our team has worked hard
              to ensure that the product is intuitive and user-friendly, so you
              can start using it right away without any hassle.
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;