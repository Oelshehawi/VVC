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

  return (
    <Navbar fixed="top" expand="lg" className={`px-2 px-md-4 ${styles.navbar}`}>
      <Navbar.Brand href="/" className={` ${styles.brandText}`}>
        <Image
          alt="VHD Logo"
          src="/9925.png"
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
            <Nav.Link href="#home" className={`me-4 ${styles.navText}`}>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="#services" className={` me-4 ${styles.navText}`}>
              Services
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              href="#exhaust-cleaning"
              className={`me-4 ${styles.navText}`}
            >
              Exhaust System Cleaning
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              href="#certification"
              className={`me-4 ${styles.navText}`}
            >
              Certification
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="#clients" className={`me-4 ${styles.navText}`}>
              Our Clients
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="#contact" className={`me-4 ${styles.navText}`}>
              Contact Us
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
