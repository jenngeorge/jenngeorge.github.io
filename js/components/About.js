import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <section className="section-content">
        <section className="about-content">
          <img className="about-image" src="assets/pjelly.png" alt="about-image"/>
          <section className="about-info">
            <h1>Hello! I'm Jenn</h1>
            <p>
              I'm a full stack developer based in NYC.
              I like coffee, octopusses, and jello.
              Please hire me.
            </p>
            <div className="social-links">
              <a href="github.com"> github </a>
              <a href="linkedin.com"> linkedin </a>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default About;
