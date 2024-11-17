'use client';
import { useEffect } from 'react';
import styles from './styles/navigation.module.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NavigationBar = () => {
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.querySelector('.navbar');
      if (window.scrollY > 0) {
        navBar?.classList.add(styles['bg-reveal']);
      } else {
        navBar?.classList.remove(styles['bg-reveal']);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  };

  return (
    <Navbar fixed="top" expand="lg" className={`px-2 px-md-4 ${styles.navbar}`}>
      <Navbar.Brand href="/" className={` ${styles.brandText}`} aria-label="Home">
        <Image
          alt="Vancouver Hood Doctors Logo"
          src="/logo.png"
          width="30"
          height="30"
          className="rounded-3 me-2"
        />
        <span className="d-none d-md-inline-block">Vancouver Hood Doctors</span>
        <span className={`d-inline-block d-sm-none fw-bolder ${styles.font}`}>
          Vancouver Hood Doctors
        </span>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="primary-navigation"
        className={styles.brandText}
      />
      <Navbar.Collapse
        id="primary-navigation"
        className="justify-content-end"
      >
        <Nav className="d-flex justify-content-end" as="ul" role="navigation" aria-label="Main">
          <Nav.Item as="li">
            <Nav.Link
              onClick={() => scrollToSection('home')}
              className={`me-4 ${styles.navText}`}
              aria-current={pathname === '/' ? 'page' : undefined}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              onClick={() => scrollToSection('services')}
              className={` me-4 ${styles.navText}`}
              aria-current={pathname === '#services' ? 'page' : undefined}
            >
              Services
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              onClick={() => scrollToSection('exhaust-cleaning')}
              className={`me-4 ${styles.navText}`}
              aria-current={pathname === '#exhaust-cleaning' ? 'page' : undefined}
            >
              Exhaust System Cleaning
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              onClick={() => scrollToSection('certification')}
              className={`me-4 ${styles.navText}`}
              aria-current={pathname === '#certification' ? 'page' : undefined}
            >
              Certification
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              className={`me-4 ${styles.navText}`}
              onClick={() => scrollToSection('clients')}
              aria-current={pathname === '#clients' ? 'page' : undefined}
            >
              Our Clients
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              onClick={() => scrollToSection('contact')}
              className={`me-4 ${styles.navText}`}
              aria-current={pathname === '#contact' ? 'page' : undefined}
            >
              Contact Us
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
