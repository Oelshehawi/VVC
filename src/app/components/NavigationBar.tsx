'use client';
import React, { useState, useEffect } from 'react';
import styles from './styles/navigation.module.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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

    // Clean up the event listener when the component unmounts
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
      <Navbar.Brand href="/" className={` ${styles.brandText}`}>
        <Image
          alt="VHD Logo"
          src="/logo.png"
          width="30"
          height="30"
          className="rounded-3 me-2"
        />
        <span className="d-none d-md-inline-block">
          Vancouver Vent Cleaning
        </span>
        <span className={`d-inline-block d-sm-none fw-bolder ${styles.font}`}>
          Vancouver Vent Cleaning
        </span>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className={styles.brandText}
      />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="d-flex justify-content-end" as="ul">
          <Nav.Item as="li">
            <Nav.Link
              onClick={() => scrollToSection('home')}
              className={`me-4 ${styles.navText}`}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              onClick={() => scrollToSection('services')}
              className={` me-4 ${styles.navText}`}
            >
              Services
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              onClick={() => scrollToSection('exhaust-cleaning')}
              className={`me-4 ${styles.navText}`}
            >
              Exhaust System Cleaning
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              onClick={() => scrollToSection('certification')}
              className={`me-4 ${styles.navText}`}
            >
              Certification
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              className={`me-4 ${styles.navText}`}
              onClick={() => scrollToSection('clients')}
            >
              Our Clients
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              onClick={() => scrollToSection('contact')}
              className={`me-4 ${styles.navText}`}
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
