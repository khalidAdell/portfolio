import "./About.css";
import {
  AiOutlineProject,
  AiOutlineBulb,
  AiOutlineCloudDownload,
} from "react-icons/ai";
import { LiaHeadsetSolid } from "react-icons/lia";
const About = () => {
  return (
    <section className="container about section" id="about">
      <div className="--text-center">
        <h1 className="section-title">About Me</h1>
        <p className="section-subtitle">My introducton</p>
      </div>
      <div className="about-container">
        <img src="./images/myphoto.jpeg" alt="" className="about-img" />
        <div className="about-content">
          <div className="about-cards">
            <div className="about-card">
              <AiOutlineBulb />
              <h3>Experience</h3>
              <p>+3 year</p>
            </div>
            <div className="about-card">
              <AiOutlineProject />
              <h3>Completed</h3>
              <p>5+ Projects</p>
            </div>
            <div className="about-card">
              <LiaHeadsetSolid />
              <h3>Support</h3>
              <p>Online 24/7</p>
            </div>
          </div>
          <div className="about-describtion">
            Front-End Developer with expertise in React, Next.js, and
            TypeScript. Passionate about building responsive and user-friendly
            web applications, optimizing performance, and enhancing user
            experience. Looking to contribute to dynamic projects and grow
            within a collaborative environment.
          </div>
          <a
            download=""
            href="./KhalidAdelLotfySaadResume.pdf"
            className="--btn about-btn"
          >
            Download CV <AiOutlineCloudDownload size={23} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
