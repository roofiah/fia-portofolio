import React from 'react';
import Router from 'next/router';
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from 'reactstrap';

const TopNavbar = () => {
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor('');
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor('navbar-transparent');
      }
    };
    window.addEventListener('scroll', updateNavbarColor);
    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle('nav-open');
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={`fixed-top ${navbarColor}`} expand="lg" color="dark">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="javascript::void();"
              onClick={() => {
                Router.push('/#');
              }}
            >
              My Portofolio
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle('nav-open');
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar" />
              <span className="navbar-toggler-bar middle-bar" />
              <span className="navbar-toggler-bar bottom-bar" />
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="javascript::void();"
                  onClick={() => {
                    Router.push('/#about');
                  }}
                >
                  <i className="now-ui-icons business_badge" />
                  <p>About</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="javascript::void();"
                  onClick={() => {
                    Router.push('/#skills');
                  }}
                >
                  <i className="now-ui-icons ui-2_settings-90" />
                  <p>Skill</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="javascript::void();"
                  onClick={() => {
                    Router.push('/#portofolio');
                  }}
                >
                  <i className="now-ui-icons files_paper" />
                  <p>Portofolio</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
