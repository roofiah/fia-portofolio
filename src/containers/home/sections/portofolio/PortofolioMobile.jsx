import React from 'react';
import { Row, Col, Badge } from 'reactstrap';

const listOne = [
  {
    id: 1,
    img: 'stellar.jpg',
    title: 'STELLAR PASS',
    tag: ['React Native'],
    url: 'https://play.google.com/store/apps/details?id=com.twiscode.stellar.dev'
  },
  {
    id: 2,
    img: 'dokterapps.jpg',
    title: 'DOKTER APP',
    tag: ['React Native'],
    url: 'https://play.google.com/store/apps/details?id=com.twiscode.fkunair'
  },
  {
    id: 3,
    img: 'wahyoo.png',
    title: 'WAHYOO WARUNG APP',
    tag: ['React Native'],
    // url: 'https://play.google.com/store/apps/details?id=com.twiscode.stellar.dev'
  },
  {
    id: 4,
    img: 'hubblesafety.jpg',
    title: 'HUBBLE SAFETY APP',
    tag: ['React Native'],
    // url: 'https://play.google.com/store/apps/details?id=com.twiscode.fkunair'
  }
];

const listTwo = [
  {
    id: 1,
    img: 'box in.jpg',
    title: 'BOX-IN APP',
    tag: ['React Native'],
    url: 'https://play.google.com/store/apps/details?id=com.twiscode.fkunair'
  },
  {
    id: 2,
    img: 'hubbleleave.jpg',
    title: 'HUBBLE LEAVE APP',
    tag: ['React Native'],
    url: 'https://play.google.com/store/apps/details?id=sg.hubble.leave'
  },
  {
    id: 3,
    img: 'playingviral_1.png',
    title: 'PLAYING VIRAL APP',
    tag: ['React Native'],
    // url: 'https://play.google.com/store/apps/details?id=com.twiscode.fkunair'
  }
];

const PortofolioMobile = () => (
  <>
    <Col className="ml-auto mr-auto" md="12">
      <Row className="collections">
        <Col md="6">
          {listOne.map(data => (
            <a href="javascript::void();" className="card-parent" key={data.id}>
              <img
                alt="..."
                className="img-raised mx-2"
                src={require(`@images/portofolio/header/${data.img}`)}
                height="480px"
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
                className="img-raised mx-2"
                src={require(`@images/portofolio/header/${data.img}`)}
                height="480px"
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

export default PortofolioMobile;
