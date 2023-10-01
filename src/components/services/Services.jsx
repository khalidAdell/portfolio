import { useState } from "react";
import "./Services.css";
import { AiOutlineCloseCircle, AiOutlineLayout } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { PiNotePencilBold } from "react-icons/pi";
const Services = () => {
  let [toggleModal, setToggleModal] = useState(0);

  return (
    <section className="section services container" id="services">
      <div className="--text-center">
        <h1 className="section-title">Services</h1>
        <p className="section-subtitle">What i offer</p>
      </div>
      <div className="services-container">
        <div className="services-card">
          <AiOutlineLayout />
          <h2>
            Web <br />
            Developer
          </h2>
          <p onClick={() => setToggleModal(1)}>
            View More <BsArrowRightShort />
          </p>
          <div
            className={`services-modal ${toggleModal == 1 && "activeModal"}`}
          >
            <div className="overlayer" onClick={() => setToggleModal(0)}></div>
            <div className={`modal-content`}>
              <AiOutlineCloseCircle
                className="closeModal"
                onClick={() => setToggleModal(0)}
              />
              <h2 className="modal-title">Web Developer</h2>
              <p className="modal-describtion">
                Service with more than year of <br />
                expereince providing quality work to clients and companies
              </p>
              <div className="more-services">
                <p>
                  <i className="fa-regular fa-circle-check"></i> I develop user
                  interfaces
                </p>
                <p>
                  <i className="fa-regular fa-circle-check"></i> Web pages
                  development
                </p>
                <p>
                  <i className="fa-regular fa-circle-check"></i> I create ux
                  elemennt interactions
                </p>
                <p>
                  <i className="fa-regular fa-circle-check"></i> Design and
                  mockups of products companies
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="services-card">
          <HiMiniCodeBracket />
          <h2>
            UI/UX <br />
            Designer
          </h2>
          <p onClick={() => setToggleModal(2)}>
            View More <BsArrowRightShort />
          </p>
          <div
            className={`services-modal ${toggleModal == 2 && "activeModal"}`}
          >
            <div className="overlayer" onClick={() => setToggleModal(0)}></div>
            <div className={`modal-content`}>
              <AiOutlineCloseCircle
                className="closeModal"
                onClick={() => setToggleModal(0)}
              />
              <h2 className="modal-title">UI/UX Designer</h2>
              <p className="modal-describtion">
                Service with more than year of <br />
                expereince providing quality work to clients and companies
              </p>
              <div className="more-services">
                <p>
                  <i className="fa-regular fa-circle-check"></i> I develop user
                  interfaces
                </p>
                <p>
                  <i className="fa-regular fa-circle-check"></i> Web pages
                  development
                </p>
                <p>
                  <i className="fa-regular fa-circle-check"></i> I create ux
                  elemennt interactions
                </p>
                <p>
                  <i className="fa-regular fa-circle-check"></i> Design and
                  mockups of products companies
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="services-card">
          <PiNotePencilBold />
          <h2>
            Branding <br />
            Designer
          </h2>
          <p onClick={() => setToggleModal(3)}>
            View More <BsArrowRightShort />
          </p>
          <div
            className={`services-modal ${toggleModal == 3 && "activeModal"}`}
          >
            <div className="overlayer" onClick={() => setToggleModal(0)}></div>
            <div className={`modal-content`}>
              <AiOutlineCloseCircle
                className="closeModal"
                onClick={() => setToggleModal(0)}
              />
              <h2 className="modal-title">Branding Designer</h2>
              <p className="modal-describtion">
                Service with more than year of <br />
                expereince providing quality work to clients and companies
              </p>
              <div className="more-services">
                <p>
                  <i className="fa-regular fa-circle-check"></i> I develop user
                  interfaces
                </p>
                <p>
                  <i className="fa-regular fa-circle-check"></i> Web pages
                  development
                </p>
                <p>
                  <i className="fa-regular fa-circle-check"></i> I create ux
                  elemennt interactions
                </p>
                <p>
                  <i className="fa-regular fa-circle-check"></i> Design and
                  mockups of products companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
