import "./Skills.css";
import { BiBadgeCheck } from "react-icons/bi";
const Skills = () => {
  return (
    <section className="section skills container" id="skills">
      <div className="--text-center">
        <h1 className="section-title">Skills</h1>
        <p className="section-subtitle">My technical level</p>
      </div>
      <div className="skills-card">
        <h2 className="card-title">Frontend developer</h2>
        <div className="skills-box">
          <div className="my-skills">
            <div className="skill">
              <BiBadgeCheck />
              <div className="skill-text">
                <h3>Html</h3>
                <p>Basic</p>
              </div>
            </div>
            <div className="skill">
              <BiBadgeCheck />
              <div className="skill-text">
                <h3>Css</h3>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="skill">
              <BiBadgeCheck />
              <div className="skill-text">
                <h3>JavaScript</h3>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="skill">
              <BiBadgeCheck />
              <div className="skill-text">
                <h3>Bootstrap</h3>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="skill">
              <BiBadgeCheck />
              <div className="skill-text">
                <h3>React</h3>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="skill">
              <BiBadgeCheck />
              <div className="skill-text">
                <h3>Tailwind</h3>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="skill">
              <BiBadgeCheck />
              <div className="skill-text">
                <h3>Git</h3>
                <p>Basic</p>
              </div>
            </div>
            <div className="skill">
              <BiBadgeCheck />
              <div className="skill-text">
                <h3>Responsive</h3>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="skill">
              <BiBadgeCheck />
              <div className="skill-text">
                <h3>UI/UX </h3>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="skill">
              <BiBadgeCheck />
              <div className="skill-text">
                <h3>TypeScript </h3>
                <p>Basic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
