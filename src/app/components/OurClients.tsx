'use client';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './styles/clients.module.css';
import NextImage from 'next/image';

const OurClients = () => {
  return (
    <Container id="clients" fluid className={`px-0 ${styles.secondarySection}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
        <path
          fill="var(--body-bg-color)"
          fillOpacity="1"
          d="M0,160L60,170.7C120,181,240,203,360,229.3C480,256,600,288,720,277.3C840,267,960,213,1080,202.7C1200,192,1320,224,1380,240L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <Container className="mt-4 text-center">
        <div className={` ${styles.sectionTitle}`}>
          <h6 className={` mb-3 text-white ${styles.line}`}>Our Clients</h6>
        </div>
        <Row className="mt-4 pt-4 text-start">
          <Col md={12}>
            <h1> A Few Of Our Clients : </h1>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex align-items-center" md={2}>
            <NextImage
              alt="Dairy Queen"
              src="/dairyQueen.png"
              fill={true}
              className={styles.image}
            />
          </Col>
          <Col md={2}>
            <NextImage
              alt="Clean Kitchen"
              src="/bostonPizza.png"
              fill={true}
              className={styles.image}
            />
          </Col>
          <Col className="d-flex align-items-center" md={2}>
            <NextImage
              alt="Clean Kitchen"
              src="/oebBreakfast.png"
              fill={true}
              className={styles.image}
            />
          </Col>
          <Col className="d-flex align-items-center" md={2}>
            <NextImage
              alt="Clean Kitchen"
              src="/panago.png"
              fill={true}
              className={styles.image}
            />
          </Col>
          <Col className="d-flex align-items-center" md={2}>
            <NextImage
              alt="Clean Kitchen"
              src="/chitChat.png"
              fill={true}
              className={styles.image}
            />
          </Col>
          <Col className="d-flex align-items-center" md={2}>
            <NextImage
              alt="Clean Kitchen"
              src="/attira.png"
              fill={true}
              className={styles.image}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="d-flex justify-content-end pt-4">
            <h3>... and Hundreds More!</h3>
          </Col>
        </Row>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290">
        <path
          fill="var(--body-bg-color)"
          fillOpacity="1"
          d="M0,160L60,170.7C120,181,240,203,360,229.3C480,256,600,288,720,277.3C840,267,960,213,1080,202.7C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </Container>
  );
};

export default OurClients;
