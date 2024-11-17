'use client';
import React from 'react';
import { Col } from 'react-bootstrap';

import NextImage from 'next/image';
import Nav from 'react-bootstrap/Nav';
import styles from './styles/footer.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer
      className={`d-flex justify-content-between align-items-center p-4 border-top ${styles.footer}`}
    >
      <Col
        md={4}
        className="d-flex align-items-center text-body-secondary text-end"
      >
        <p className="my-0 text-white"> © 2023 Vancouver Hood Doctors</p>
      </Col>
      <Col
        md={8}
        className="d-flex align-items-center justify-content-end mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <NextImage
          alt="VHD Logo"
          src="/logo.png"
          width="30"
          height="30"
          className="border-2 rounded-5"
        />
      </Col>
    </footer>
  );
};

export default Footer;
