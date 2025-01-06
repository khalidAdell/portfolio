import "./Skills.css";
import { BiBadgeCheck } from "react-icons/bi";

const Skills = () => {
  return (
    <section className="section skills container" id="skills">
      <div className="--text-center">
        <h1 className="section-title">Skills</h1>
        <p className="section-subtitle">My technical expertise</p>
      </div>

      <div className="skills-card">
        <h2 className="card-title">Frontend Development</h2>
        <div className="skills-box">
          <div className="my-skills">
            {/* Markup & Styling */}

            <div className="skill">
              <BiBadgeCheck />
              <h3>Material UI</h3>
            </div>
            <div className="skill">
              <BiBadgeCheck />
              <h3>Tailwind CSS</h3>
            </div>
            <div className="skill">
              <BiBadgeCheck />
              <h3>Bootstrap</h3>
            </div>
            <div className="skill">
              <BiBadgeCheck />
              <h3>Responsive Design</h3>
            </div>

            {/* Programming Languages */}

            <div className="skill">
              <BiBadgeCheck />
              <h3>TypeScript</h3>
            </div>

            {/* Frameworks & Libraries */}
            <div className="skill">
              <BiBadgeCheck />
              <h3>React</h3>
            </div>
            <div className="skill">
              <BiBadgeCheck />
              <h3>Next Js</h3>
            </div>

            {/* Tools & Version Control */}
            <div className="skill">
              <BiBadgeCheck />
              <h3>Github</h3>
            </div>

            {/* Optimization */}
            <div className="skill">
              <BiBadgeCheck />
              <h3>SEO Optimization</h3>
            </div>
            <div className="skill">
              <BiBadgeCheck />
              <h3>Performance Tuning</h3>
            </div>
            <div className="skill">
              <BiBadgeCheck />
              <h3>GraphQL</h3>
            </div>
            <div className="skill">
              <BiBadgeCheck />
              <h3>RESTful API</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
