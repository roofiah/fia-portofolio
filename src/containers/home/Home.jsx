import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import Footer from '@components/Footer';
import TopNavbar from '@components/TopNavbar';
import About from './sections/About';
import FollowMe from './sections/FollowMe';
import Portofolio from './sections/Portofolio';
import Skill from './sections/Skill';
import Header from './sections/Header';

const Home = () => {
  const cleanup = () => {
    document.body.classList.add('profile-page');
    document.body.classList.remove('sidebar-collapse');
  };

  useEffect(() => {
    document.body.classList.add('profile-page');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return cleanup;
  });

  return (
    <>
      <TopNavbar />
      <div className="wrapper">
        <Header />
        <div className="section">
          <Container>
            <FollowMe />
            <About />
            <Skill />
            <Portofolio />
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
