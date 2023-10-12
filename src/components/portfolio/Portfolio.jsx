import { useEffect, useState } from "react";
import "./Portfolio.css";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import projectsData from "./projectsData";

const Portfolio = () => {
  let [activeBtn, setActiveBtn] = useState("all");
  let [activeModal, setActiveModal] = useState("");
  let [filterProjects, setFilterProjects] = useState(projectsData);

  useEffect(() => {
    activeModal !== ""
      ? (document.body.style = "overflow :hidden;")
      : (document.body.style = "overflow :auto;");
  }, [activeModal]);

  const handleFilterProects = (type) => {
    setActiveBtn(type);
    if (type === "all") {
      setFilterProjects(projectsData);
    } else {
      setFilterProjects(projectsData.filter((project) => project.type == type));
    }
  };
  return (
    <section className={`portfolio section`} id="portfolio">
      <div className="--text-center">
        <h1 className="section-title">Portfolio</h1>
        <p className="section-subtitle">What i offer</p>
      </div>
      <div className="projects-container container">
        <div className="portifolio-btns --flex-center">
          <button
            onClick={() => handleFilterProects("all")}
            className={`${activeBtn === "all" && "activeBtn"}`}
          >
            All
          </button>
          <button
            onClick={() => handleFilterProects("react")}
            className={`${activeBtn === "react" && "activeBtn"}`}
          >
            React
          </button>
          <button
            onClick={() => handleFilterProects("js")}
            className={`${activeBtn === "js" && "activeBtn"}`}
          >
            JS
          </button>
          <button
            onClick={() => handleFilterProects("css")}
            className={`${activeBtn === "css" && "activeBtn"}`}
          >
            Html/Css
          </button>
        </div>
        <div className="projects-cards">
          {filterProjects.map((project) => {
            return (
              <div className="project-card" key={project.name}>
                <a target="_blank" href={project.link} rel="noreferrer">
                  <img
                    src={
                      project.image
                        ? project.image
                        : "https://i.imgur.com/1E09AEA.png"
                    }
                    alt=""
                  />
                </a>
                <h4 className="project-card-title">
                  <a target="_blank" href={project.link} rel="noreferrer">
                    {project.name}
                  </a>
                </h4>
                <p
                  className="show-info"
                  onClick={() => setActiveModal(project.name)}
                >
                  More info <BsArrowRightShort />
                </p>
                <div
                  className={`projects-modal  ${
                    activeModal === project.name && "activeModal"
                  }`}
                >
                  <AiOutlineCloseCircle
                    className="closeModal"
                    onClick={() => setActiveModal("")}
                  />
                  <h2 className="project-modal-title">
                    <a target="_blank" href={project.link} rel="noreferrer">
                      {project.name}
                    </a>
                  </h2>
                  <div className="projects-modal-content">
                    <div className="projects-modal-img">
                      <img src={project.image} alt="" />
                    </div>
                    <div className="side-info">
                      <h2 className="side-info-title">{project.name}</h2>
                      <p className="project-modal-date">
                        <SlCalender /> {project.date}
                      </p>
                      <h2 className="side-info-title">Technology</h2>
                      <div className="project-technologies">
                        {project.technology.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                      <h2 className="side-info-title">Describtion</h2>
                      <p className="project-modal-describtion">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
