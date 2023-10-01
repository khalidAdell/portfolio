import {
  BsMessenger,
  BsWhatsapp,
  BsArrowRightShort,
  BsLinkedin,
  BsSend,
} from "react-icons/bs";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useRef } from "react";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_9xg93zj",
      "template_dihc5g4",
      form.current,
      "eEd5ik4rtQpGLTtLj"
    );
    e.target.reset();
  };

  return (
    <section className="section contact" id="contact">
      <div className="--text-center">
        <h1 className="section-title">Contact</h1>
        <p className="section-subtitle">Get in touch</p>
      </div>
      <div className="contact-container container">
        <div className="social-contact">
          <h2 className="contact-title">Talk to me</h2>
          <div className="contact-card">
            <BsWhatsapp className="card-icon" />
            <h3 className="contact-card-title">Whatsapp</h3>
            <p>+20 122-656-4619</p>
            <a href="">
              Text me <BsArrowRightShort size={20} />
            </a>
          </div>
          <div className="contact-card">
            <BsLinkedin className="card-icon" />
            <h3 className="contact-card-title">LinkedIn</h3>
            <p>khalid-adel</p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/khalid-adel-3a3647228"
            >
              Text me <BsArrowRightShort size={20} />
            </a>
          </div>
          <div className="contact-card">
            <BsMessenger className="card-icon" />
            <h3 className="contact-card-title">Massenger</h3>
            <p>khalid adel</p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100011296986206"
            >
              Text me <BsArrowRightShort size={20} />
            </a>
          </div>
        </div>
        <form
          action=""
          className="form-contact"
          ref={form}
          onSubmit={sendEmail}
        >
          <h2 className="contact-title">Write me your project</h2>
          <div className="contact-input">
            <label htmlFor="name">Name</label>
            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="Insert your name"
            />
          </div>
          <div className="contact-input">
            <label htmlFor="email">Mail</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Insert your email"
            />
          </div>
          <div className="contact-message">
            <label htmlFor="project">Project</label>
            <textarea
              name="project"
              id="project"
              rows="6"
              placeholder="Write your project"
            ></textarea>
          </div>
          <button className="contact-submit --btn">
            Send Message <BsSend />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
