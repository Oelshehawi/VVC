'use client';
import React, { useEffect } from 'react';
import styles from './styles/navigation.module.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import Image from 'next/image';

const NavigationBar = () => {
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
    return () => window.removeEventListener('scroll', handleScroll);
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
    <Navbar fixed='top' expand='lg' className={`px-2 px-md-4 ${styles.navbar}`}>
      <Container>
        <Navbar.Brand href='/' className={styles.brand}>
          <Image
            alt='Vancouver Hood Doctors Logo'
            src='/logo.png'
            width='40'
            height='40'
            className='rounded-3 me-2'
          />
          <span className='d-none d-md-inline-block'>
            Vancouver Hood Doctors
          </span>
          <span className='d-inline-block d-md-none'>VHD</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link
              onClick={() => scrollToSection('services')}
              className={styles.navLink}
            >
              Services
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection('exhaust-cleaning')}
              className={styles.navLink}
            >
              Exhaust Cleaning
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection('certification')}
              className={styles.navLink}
            >
              Certification
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection('clients')}
              className={styles.navLink}
            >
              Our Clients
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection('contact')}
              className={`${styles.navLink} ${styles.contactLink}`}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
