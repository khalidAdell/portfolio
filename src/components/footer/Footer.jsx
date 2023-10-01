import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer ">
      <div className="--text-center">
        <h1 className="section-title">Khalid</h1>
      </div>
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#portfolio">Projects</a>
        <a href="#services">Services</a>
      </div>
      <div className="footer-social">
        <a
          target="_blant"
          href="https://www.facebook.com/people/Khaled-Adel/pfbid02f348dPU639McEyGHwa1pwgbefGWFPN2NxDiaXq8NqbzjoDw34JRQ6sZcTNGeCijHl/"
        >
          <FaFacebookF />
        </a>
        <a
          target="_blant"
          href="https://www.linkedin.com/in/khalid-adel-3a3647228"
        >
          <FaLinkedinIn />
        </a>
        <a target="_blant" href="">
          <FaInstagram />
        </a>
      </div>
      <p className="footer-copyright">&copy;KhalidAdel, All rights reseved</p>
    </footer>
  );
};

export default Footer;
