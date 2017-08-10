import React from 'react';

const Projects = () => {
  return (
    <div className="projects-container">
      <section className="section-content">
        <section className="projects-content">
          <section className="project-card">
            <img className="project-image" src="assets/braintrain.png"
            alt="screenshot of braintra.in web app"/>
            <p>
              <a target="_blank" href="http://www.braintra.in/">
                BrainTrain
              </a> is a flash card
              creation and discovery app that allows users to score and
              track their learning progress. (React / Ruby on Rails / Postgres)
            </p>
            <div className="project-links">
              <a target="_blank" href="https://github.com/jenngeorge/brain-train">github </a>
              /
              <a target="_blank" href="http://www.braintra.in/"> live link</a>
            </div>
          </section>
          <section className="project-card">
            <img className="project-image" src="assets/meetup-map.png"
            alt="screenshot of meetup map web app"/>
              <p>
                <a target="_blank"
                href="https://meetup-react.herokuapp.com/">Meetup Map </a>
                helps users find local meetup events by
                displaying them on a map. Users can query for events
                via map location or text. (React / Meetup API / Google Maps)
              </p>
              <div className="project-links">
                <a target="_blank" href="https://github.com/jenngeorge/meetup-react">github </a>
                /
                <a target="_blank" href="https://meetup-react.herokuapp.com/"> live link</a>
              </div>
          </section>
          <section className="project-card-secondary">
            <div id="react-img-container">
              <img className="project-image" src="assets/react-demo.png"
              alt="screenshot of a coding demo on youtube"/>
            </div>
              <p>
                Watch my <a target="_blank"
                href="https://youtu.be/kEerYTkwJAo?t=16m40s">
                "Intro to React" live coding demo
                (beginning 16:40) on youtube.
                </a> I represented App Academy
                at a React Meetup in San Francisco.
              </p>
          </section>
          <section className="project-card-secondary">
            <div id="aa-img-container">
              <img className="project-image" src="assets/aa-logo.png"
              alt="app academy logo"/>
            </div>
              <p>
                I designed and developed the <a target="_blank"
                href="https://www.appacademy.io/diversity">
                   Diversity and Inclusion page
                </a> on App Academy's public site
                and improved internal student tracking tools.
              </p>
          </section>
          <section className="project-card-secondary">
            <div id="yo-img-container">
              <img className="project-image" src="assets/yo-logo.png"
              alt="yo logo"/>
            </div>
              <p>
                I contributed UI design and development to the <a target="_blank"
                href="http://polls.justyo.co/">YoPolls </a>
                web dashboard. Check out the app on <a target="_blank" href="https://www.producthunt.com/posts/yo-polls">
                  Product Hunt here.
                </a>
              </p>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Projects;
