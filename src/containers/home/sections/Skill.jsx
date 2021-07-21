import React from 'react';
import Fade from 'react-reveal/Fade';
import { Progress, Container, Row, Col } from 'reactstrap';

// core components

const Skill = () => (
  <>
    <div className="" id="skills">
      <Fade ssrFadeout top>
        <h3 className="title">Skills</h3>
        <Container>
          <Row>
            <Col md="4">
              <div className="progress-container progress-info">
                <span className="progress-badge">HTML</span>
                <Progress max="100" value="85">
                  <span className="progress-value">85%</span>
                </Progress>
              </div>
              <div className="progress-container progress-success">
                <span className="progress-badge">CSS</span>
                <Progress max="100" value="80">
                  <span className="progress-value">80%</span>
                </Progress>
              </div>
              <div className="progress-container progress-success">
                <span className="progress-badge">Javascript</span>
                <Progress max="100" value="80">
                  <span className="progress-value">80%</span>
                </Progress>
              </div>
            </Col>
            <Col sm="4">
              <div className="progress-container progress-info">
                <span className="progress-badge progress-info">React JS</span>
                <Progress max="100" value="90">
                  <span className="progress-value">90%</span>
                </Progress>
              </div>
              <div className="progress-container progress-info">
                <span className="progress-badge">React Native</span>
                <Progress max="100" value="90">
                  <span className="progress-value">90%</span>
                </Progress>
              </div>
              <div className="progress-container progress-success">
                <span className="progress-badge">Next JS</span>
                <Progress max="100" value="70">
                  <span className="progress-value">70%</span>
                </Progress>
              </div>
            </Col>
            <Col sm="4">
            <div className="progress-container progress-warning">
                <span className="progress-badge">Wordpress</span>
                <Progress max="100" value="65">
                  <span className="progress-value">65%</span>
                </Progress>
              </div>
              <div className="progress-container progress-success">
                <span className="progress-badge">jQuery</span>
                <Progress max="100" value="70">
                  <span className="progress-value">70%</span>
                </Progress>
              </div>
              <div className="progress-container progress-warning">
                <span className="progress-badge">PHP</span>
                <Progress max="100" value="60">
                  <span className="progress-value">60%</span>
                </Progress>
              </div>
            </Col>
          </Row>
          <br />
          <div className="space-50" />
        </Container>
      </Fade>
    </div>
  </>
);

export default Skill;
