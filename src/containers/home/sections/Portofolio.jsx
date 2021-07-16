import React from 'react';
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from 'reactstrap';
import PortofolioWeb from './portofolio/PortofolioWeb';
import PortofolioAdmin from './portofolio/PortofolioAdmin';
import PortofolioMobile from './portofolio/PortofolioMobile';

const Portofolio = () => {
  const [pills, setPills] = React.useState('1');

  return (
    <>
      <Row>
        <Col className="ml-auto mr-auto" md="6">
          <h4 className="title text-center" id="portofolio">
            My Portfolio
          </h4>
          <div className="nav-align-center">
            <Nav
              className="nav-pills-info nav-pills-just-icons"
              pills
              role="tablist"
            >
              <NavItem>
                <NavLink
                  className={pills === '1' ? 'active mr-5' : ' mr-5'}
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    setPills('1');
                  }}
                >
                  <i className="now-ui-icons location_world" />
                  <span style={{ color: '#444' }}>Website</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={pills === '2' ? 'active mr-5' : 'mr-5'}
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    setPills('2');
                  }}
                >
                  <i className="now-ui-icons business_chart-bar-32" />
                  <span style={{ color: '#444' }}>Admin</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={pills === '3' ? 'active' : ''}
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    setPills('3');
                  }}
                >
                  <i className="now-ui-icons tech_mobile" />
                  <span style={{ color: '#444' }}>Mobile</span>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Col>
        <TabContent className="gallery" activeTab={`pills${pills}`}>
          <TabPane tabId="pills1">
            <PortofolioWeb />
          </TabPane>
          <TabPane tabId="pills2">
            <PortofolioAdmin />
          </TabPane>
          <TabPane tabId="pills3">
            <PortofolioMobile />
          </TabPane>
        </TabContent>
      </Row>
    </>
  );
};

export default Portofolio;
