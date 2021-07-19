import React from 'react';
import { Row, Col, Badge } from 'reactstrap';

const listOne = [
  {
    id: 1,
    img: 'admin-amartha.png',
    title: 'Amartha Admin',
    tag: ['React JS', 'SCSS', 'HTML', 'REST API']
  },
  {
    id: 2,
    img: 'admin-daxium-chat.png',
    title: 'Daxium Admin Chat',
    tag: ['React JS', 'SCSS', 'HTML', 'REST API', 'Firebase']
  }
];

const listTwo = [
  {
    id: 1,
    img: 'admin-riliv.png',
    title: 'Riliv Admin',
    tag: ['React JS', 'SCSS', 'HTML', 'REST API']
  },
  {
    id: 2,
    img: 'admin-redwhite.png',
    title: 'Red White',
    tag: ['React JS', 'SCSS', 'HTML', 'REST API']
  },

];

const PortofolioAdmin = () => (
  <>
    <Col className="ml-auto mr-auto" md="12">
      <Row className="collections">
        <Col md="6">
          {listOne.map(data => (
            <a href="javascript::void();" className="card-parent" key={data.id}>
              <img
                alt="..."
                className="img-raised"
                src={require(`@images/portofolio/header/${data.img}`)}
              />
              <div className="card-absolute">
                <div>
                  <Badge color="neutral">{data.title}</Badge>
                </div>

                <div className="d-flex justify-content-center">
                  {data.tag &&
                    data.tag.length > 0 &&
                    data.tag.map((vl, index) => (
                      <Badge color="default" className="mr-1" key={index}>
                        {vl}
                      </Badge>
                    ))}
                </div>

                {data.url && (
                  <div>
                    <Badge color="info">
                      <a href={data.url} target="_blank">
                        Link
                      </a>
                    </Badge>
                  </div>
                )}
              </div>
            </a>
          ))}
        </Col>

        <Col md="6">
          {listTwo.map(data => (
            <a href="javascript::void();" className="card-parent" key={data.id}>
              <img
                alt="..."
                className="img-raised"
                src={require(`@images/portofolio/header/${data.img}`)}
              />
              <div className="card-absolute">
                <div>
                  <Badge color="neutral">{data.title}</Badge>
                </div>

                <div className="d-flex justify-content-center">
                  {data.tag &&
                    data.tag.length > 0 &&
                    data.tag.map((vl, index) => (
                      <Badge color="default" className="mr-1" key={index}>
                        {vl}
                      </Badge>
                    ))}
                </div>

                {data.url && (
                  <div>
                    <Badge color="info">
                      <a href={data.url} target="_blank">
                        Link
                      </a>
                    </Badge>
                  </div>
                )}
              </div>
            </a>
          ))}
        </Col>
      </Row>
    </Col>
  </>
);

export default PortofolioAdmin;
