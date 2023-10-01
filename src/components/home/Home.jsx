/* eslint-disable react/no-unescaped-entities */
import "./Home.css";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container">
        <div className="home-social">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100011296986206"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/khalidAdell"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/khalid-adel-3a3647228"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="my-info">
          <h1 className="home-title">Khalid Adel</h1>
          <h3 className="home-subtitle">Frontend | React developer</h3>
          <p className="home-describtion">
            I'm creative developer based in Elbehera Egypt, and I'm very
            passionate to my work
          </p>
          <a href="#contact" className="home-btn --btn">
            Say Hello
          </a>
        </div>
        <div className="my-img">
          <img src="./images/myphoto.jpeg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
