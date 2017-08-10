import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="section-content">
        <section className="contact-content">
          <section className="contact-info">
            <h1> Contact me </h1>
            <p>I'm always interested in learning about new ideas and
            opportunities.</p>
            <p>
              Don't be shy! Send me an <a href="mailto:jenngeorgevich@gmail.com"> email, </a> add me on
              <a target="_blank" href="https://www.linkedin.com/in/jenngeorgevich/"> linkedin, </a>
               or follow me on <a target="_blank" href="https://twitter.com/jenngeorge_">twitter.</a>
            </p>
            <p>
              <a href="./assets/jenngeorgevich_resume.pdf" download>
                Click here to download my resume as a pdf
              </a>
            </p>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Contact;
