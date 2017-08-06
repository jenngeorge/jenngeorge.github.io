import React from 'react';

const Projects = () => {
  return (
    <div className="projects-container">
      <section className="section-content">
        <section className="projects-content">
          <section className="project-card">
            <img className="project-image" src="assets/braintrain.png"
            alt-text="screenshot of braintra.in web app"/>
            Brain Train
            <p>
              <a href="braintrain-link">BrainTrain</a> is a flash card app that allows users to
              score and track their learning progress.
            </p>
            <p> React / Ruby on Rails </p>
            <a href="github-link">github </a>
            <a href="live-link">live</a>
          </section>
          <section className="project-card">
            <img className="project-image" src="assets/meetup-map.png"
            alt-text="screenshot of meetup map web app"/>
              <p>
                Why doesn't meetup.com have map search? Meetup Map allows
                users to search for local meetup events by map view and text.
              </p>
              <p> React / Meetup API / Google Maps </p>
              <a href="github-link">github </a>
              <a href="live-link">live</a>
          </section>
          <section className="project-card-secondary">
            <img className="project-image" src="assets/react-demo.png"
            alt-text="screenshot of a coding demo on youtube"/>
              <p>
                Watch my live coding demo (beginning 16:40) for an
                "Intro to React" lecture on youtube. I represented App
                Academy at a React Meetup in San Francisco.
              </p>
              <a href="https://youtu.be/kEerYTkwJAo?t=16m40s">Youtube link </a>
          </section>
          <section className="project-card-secondary">
            <img className="project-image" src="assets/aa-logo.png"
            alt-text="app academy logo"/>
              <p>
                I created the Diversity and Inclusion page at App Academy
                and improved internal student tracking tools
              </p>
              <p> React / Ruby on Rails / CSS </p>
              <a href="github-link">live </a>
          </section>
          <section className="project-card-secondary">
            <img className="project-image" src="assets/yo-logo.png"
            alt-text="yo logo"/>
              <p>
                I contributed UI design and development to the
                <a href="YoPolls-link">YoPolls</a>
                web dashboard
              </p>
              <p> flask / HTML / CSS </p>
              <a href="github-link">live </a>
              <a href="product-hunt-link">product hunt</a>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Projects;
