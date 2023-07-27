'use client';
import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/navigation.module.css';

const NavigationBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setShowNav(currentPosition < scrollPosition);
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <Navbar
        className={`"bg-body-tertiary ${showNav ? '' : 'd-none'} fixed-top" ${
          styles.navbar
        }`}
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <Image
              alt=""
              src="/9925.png"
              width="30"
              height="30"
              className={styles.logo}
            />
            Vancouver Vent Cleaning
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} href="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} href="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} href="/clients">
                Our Clients
              </Nav.Link>
              <Nav.Link as={Link} href="/free-estimate">
                Free Estimate
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
