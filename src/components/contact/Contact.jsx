import "./contact.css"
import Mail from "../../img/mail.png"
import LinkedIn from "../../img/linkedin.png"
import Github from "../../img/github.png"
import {useContext, useRef, useState} from "react"
import emailjs from "emailjs-com"

export const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_vvm8zww",
        "template_2892hnl",
        formRef.current,
        "user_Hc8bQ7blxQApZVhO1JNvB"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );

  }

  return (
    <div className="c">
      <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Contact me! :)</h1>
            <div className="c-info-item">
              <img src={Mail} alt="" className="c-icon"/>
              <h3 className="c-contact-text">yeo.nathan@outlook.com</h3>
            </div>
            <div className="c-info-item">
              <img src={LinkedIn} alt="" className="c-icon"/>
              <a href="https://linkedin.com/in/nathan-yeo">
                <h3 className="c-contact-text">linkedin.com/in/nathan-yeo</h3>
              </a>
            </div>
            <div className="c-info-item">
              <img src={Github} alt="" className="c-icon"/>
              <a href="https://github.com/nystera">
                <h3 className="c-contact-text">github.com/nystera</h3>
              </a>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>Alternatively,</b> you can fill in this form to contact me directly.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" name="user_name" />
              <input type="text" placeholder="Subject" name="user_subject" />
              <input type="text" placeholder="Email" name="user_email" />
              <textarea rows="5" placeholder="Message" name="message" />
              <button>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;