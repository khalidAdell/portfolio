import { useState } from "react";
import "./Header.css";

const Header = () => {
  let [showNav, setShowNav] = useState(false);
  return (
    <header className="header ">
      <nav className="nav container --flex-between">
        <a href="#home" className="nav-logo">
          Khalid
        </a>
        <div className={`nav-menu ${showNav && "showNav"}`}>
          <ul className="nav-list --align-center">
            <li>
              <a href="#home">
                <i className="fa-solid fa-house"></i>Home
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="fa-solid fa-user"></i>About
              </a>
            </li>
            <li>
              <a href="#skills">
                <i className="fa-solid fa-file-lines"></i>Skills
              </a>
            </li>
            <li>
              <a href="#services">
                <i className="fa-solid fa-briefcase"></i>Services
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <i className="fa-solid fa-image"></i>Portfolio
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="fa-solid fa-paper-plane"></i>Contact
              </a>
            </li>
          </ul>
          <i
            className="fa-solid fa-xmark nav-close"
            onClick={() => setShowNav(false)}
          ></i>
        </div>
        <div className="nav-toggle" onClick={() => setShowNav(true)}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
