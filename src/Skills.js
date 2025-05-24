import React from "react";
import './style.css';
const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
            <div className="column left right">
                <div className="bars">
                    <div className="info">
                        <span>C++</span>
                    </div>
                    <div className="line c"></div>
                </div>

                <div className="bars">
                    <div className="info">
                        <span>JavaScript</span>
                    </div>
                    <div className="line js"></div>
                </div>

                <div className="bars">
                    <div className="info">
                        <span>Python</span>
                    </div>
                    <div className="line python"></div>
                </div>

                <div className="bars">
                    <div className="info">
                        <span>PostgreSQL</span>
                    </div>
                    <div className="line sql"></div>
                </div>

                
        </div>
            <div className="column right">
                <div className="bars">
                    <div className="info">
                        <span>MongoDB</span>
                    </div>
                    <div className="line mongo"></div>
                </div>


                <div className="bars">
                    <div className="info">
                        <span>Django</span>
                    </div>
                    <div className="line django"></div>
                </div>

                <div className="bars">
                    <div className="info">
                        <span>Flask</span>
                    </div>
                    <div className="line flask"></div>
                </div>

                <div className="bars">
                    <div className="info">
                        <span>NextJS</span>
                    </div>
                    <div className="line nextjs"></div>
                </div>

            </div>
        </div>
    </div>
    </section>
  );
}

export default Skills;
