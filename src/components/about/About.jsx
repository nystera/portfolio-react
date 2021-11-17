import "./about.css"
import Me from "../../img/me-2.jpg"

export const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img"/>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <h3 className="a-desc">
          Located in Singapore, I am currently a student in National University of Singapore (NUS).
          My passion for programming started out when I was 10, dreaming of developing games for others to enjoy
          and having my first taste in coding while creating custom maps in Warcraft III with World Editor.
          I enjoy playing competitive games, finding good food to eat, and watching football.
        </h3>
      <div className="a-year-job">
        <h3 className="a-year">
          2018
        </h3>
        <p className="a-job">
          Enrolled in National University of Singapore (Computer Science)
        </p> 
      </div>
      <div className="a-year-job">
        <h3 className="a-year">
          2020 - 2020
        </h3>
        <p className="a-job">
          Software Engineer, A*STAR (Intern)
        </p> 
      </div>
        <div className="a-year-job">
          <h3 className="a-year">
            2021 - 2021
          </h3>
          <p className="a-job">
            iOS App Developer, Rakuten Viki (Intern)
          </p> 
        </div>
        <div className="a-year-job">
          <h3 className="a-year">
            2021 - Present
          </h3>
          <p className="a-job">
            QA Engineer, Shopee (Intern)
          </p> 
        </div>
      </div>
    </div>
  )
}

export default About;