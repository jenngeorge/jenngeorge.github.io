import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <section className="section-content">
        <section className="about-content">
          <img className="about-image" src="assets/face.jpg" alt="about-image"/>
          <section className="about-info">
            <h1>Hello!</h1>
            <p>
              I'm Jenn Georgevich, a software developer living in NYC.
            </p>
            <p>
              I recently taught full stack web development (Javascript,
              React/Redux, Ruby/Rails, CSS/HTML, SQL)
              at <a href="https://www.appacademy.io/">App Academy</a>, a
              top programming bootcamp in San Francisco.
            </p>
            <div className="social-links">
              <a href="github.com"> github </a>
              <a href="linkedin.com"> linkedin </a>
              <a href="resume-link"> resume </a>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default About;
