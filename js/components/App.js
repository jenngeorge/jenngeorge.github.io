import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Scrollspy from 'react-scrollspy';

import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Element = Scroll.Element;
const Link = Scroll.Link;

class App extends Component {
  constructor(){
    super();

    this.state = {
      section: 'about'
    }
    this.updateSection = this.updateSection.bind(this);
  }

  updateSection(newSection){
    this.setState({section: newSection});
  }

  render() {
    return (
      <div className="app-container">
        <div className="nav">
          <Link className="logo"
            onClick={this.updateSection.bind(this, 'about')} to='about' offset={0} duration={500} smooth={true} delay={50} spy={true}>
            <h1 className="logo"> JG </h1>
          </Link>
            <Scrollspy items={['about', 'projects', 'contact']} currentClassName='selected' offset={0}>
              <Link className='nav-item'
                onClick={this.updateSection.bind(this, 'about')} to='about' offset={0} duration={500} smooth={true} delay={50} spy={true}>
                About
              </Link>
              <Link className='nav-item'
                onClick={this.updateSection.bind(this, 'projects')} to='projects' offset={0} duration={500} smooth={true} delay={50} spy={true}>
                Projects
              </Link>
              <Link className='nav-item'
                onClick={this.updateSection.bind(this, 'contact')} to='contact' offset={0} duration={500} smooth={true} delay={50} spy={true}>
                Contact
              </Link>
            </Scrollspy>
        </div>

        <div className='content-wrapper'>
          <Element id='about' name='about'>
            <About />
          </Element>
          <Element id='projects' name='projects'>
            <Projects />
          </Element>
          <Element id='contact' name='contact'>
            <Contact />
          </Element>
        </div>
      </div>
    );
  }
}

export default App;
