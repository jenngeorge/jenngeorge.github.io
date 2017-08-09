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
              Don't be shy! Send me an <a href="mailto:jenngeorgevich@gmail.com"> email </a>
              or
              <a target="_blank" href="https://www.linkedin.com/in/jenngeorgevich/"> linkedin </a>
              message.
            </p>
            <p>
              <a href="./assets/jenngeorgevich_resume.pdf" download>
                Click here to download my resume as a pdf
              </a>
            </p>
          </section>
        <embed className="resume" src="./assets/jenngeorgevich_resume.pdf"></embed>
        </section>
      </section>
    </div>
  );
}

export default Contact;
