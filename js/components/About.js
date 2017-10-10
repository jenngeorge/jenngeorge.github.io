import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <section className="section-content">
        <section className="about-content">
          <img
            className="about-image"
            src="assets/face.jpg"
            alt="about-image"
          />
          <section className="about-info">
            <h1>Hello!</h1>
            <p>
              {"I'm"} Jenn Georgevich, a software developer living in NYC and
              currently freelancing {"with "}
              <a target="_blank" href="http://www.codeandtheory.com/">
                Code and Theory
              </a>.
            </p>
            <p>
              Before that, I taught full stack web development (Javascript,
              React/Redux, Ruby/Rails, CSS/HTML, SQL) {"at "}
              <a target="_blank" href="https://www.appacademy.io/">
                App Academy
              </a>, a top programming bootcamp in San Francisco.
            </p>
            <div className="social-links">
              <a target="_blank" href="https://github.com/jenngeorge">
                {" "}
                github{" "}
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/jenngeorgevich/"
              >
                {" "}
                linkedin{" "}
              </a>
              <a href="mailto:jenngeorgevich@gmail.com">email</a>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default About;
