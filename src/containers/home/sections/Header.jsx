import React from 'react';
import { Container } from 'reactstrap';
import Reveal from 'react-reveal/Reveal';

const Header = () => {
  const pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        const windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform = `translate3d(0,${windowScrollTop}px,0)`;
      };
      window.addEventListener('scroll', updateScroll);
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${require('@images/bg_profile.jpg')})`
          }}
          ref={pageHeader}
        />
        <Container>
          <div className="photo-container">
            <img alt="..." src={require('@images/my_photo.JPG')} />
          </div>
          <Reveal effect="fadeInUp" ssrFadeout>
            <h3 className="title">Rofi'atul Adawiyah</h3>
            <p className="category">Mobile and Front-end Web Developer</p>
          </Reveal>
        </Container>
      </div>
    </>
  );
};

export default Header;
