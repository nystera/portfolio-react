import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is:</h2>
          <h1 className="i-name">Nathan Yeo</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Aspiring Back-end Engineer</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Content Creator</div>
              <div className="i-title-item">Gaming Enthusiast</div>
            </div>
          </div>
          <h2 className="i-desc">
            I like to design and develop microservices for applications,
            focusing on efficiency, code cleanliness and potential scalability.
            I also have some experience in web development.
          </h2>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg">
          <img src={Me} alt="" className="i-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
