'use client';
import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/navigation.module.css';

const NavigationBar = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const showDropdown = () => {
    setShow(true);
  };

  const hideDropdown = () => {
    setShow(false);
  };

  const handleClick = () => {
    router.push('/services')
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className={`${styles.navbar}`}>
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
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-start">
            <Nav>
              <Nav.Link as={Link} href="/">
                Home
              </Nav.Link>
              <NavDropdown
                title="Services"
                id="collasible-nav-dropdown"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                onToggle={handleClick}
              >
                <NavDropdown.Item as={Link} href="/services/exhaust-cleaning">
                  Exhaust System Cleaning
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/services/certification">
                  Certification
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} href="/contact">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
