import React from 'react';
import { Button } from 'reactstrap';
import Fade from 'react-reveal/Fade';

const About = () => (
  <div id="about">
    <Fade ssrFadeout top>
      <h3 className="title">About me</h3>
    </Fade>
    <Fade ssrFadeout top>
      <h5 className="description text-primary">
        A mobile and front-end developer with 2+ years of experience developing,
        managing, and maintaining simple to complex mobile applications and website.
        Specialize in React Native and React JS
      </h5>
    </Fade>
    <div className="text-center w-100">
      <Button
        className="btn-round"
        color="default"
        size="lg"
        onClick={() => {
          if (process.browser) {
            window.open('/images/yayah_resume.pdf');
          }
        }}
      >
        Download My Resume
      </Button>
    </div>
  </div>
);

export default About;
