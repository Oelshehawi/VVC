'use client';
import React from 'react';
import { Col } from 'react-bootstrap';

import NextImage from 'next/image';
import Nav from 'react-bootstrap/Nav';
import styles from './page.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="d-flex justify-content-between align-items-center p-4 border-top">
      <Col
        md={4}
        className="d-flex align-items-center text-body-secondary text-end"
      >
        <p className="my-0"> © 2023 Vancouver Hood Doctors</p>
      </Col>
      <Col
        md={4}
        className="d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <NextImage
          alt="VHD Logo"
          src="/9925.png"
          width="30"
          height="30"
          className="border-2 rounded-5"
        />
      </Col>
      <Col md={4} className="d-flex justify-content-center">
        <Nav variant="underline" defaultActiveKey={'/'} activeKey={pathname}>
          <Nav.Link as={Link} href="/" className="text-body-secondary">
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            href="/services/exhaust-cleaning"
            className="text-body-secondary"
          >
            Exhaust System Cleaning
          </Nav.Link>
          <Nav.Link
            as={Link}
            href="/services/certification"
            className="text-body-secondary"
          >
            Certification
          </Nav.Link>

          <Nav.Link as={Link} href="/contact" className="text-body-secondary">
            Contact Us
          </Nav.Link>
        </Nav>
      </Col>
    </footer>
  );
};

export default Footer;
