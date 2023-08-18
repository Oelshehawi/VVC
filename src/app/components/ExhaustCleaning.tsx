'use client';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../page.module.css';
import NextImage from 'next/image';
import { FaAngleRight } from 'react-icons/fa';

const ExhaustCleaning = () => {
  return (
    <Container
    id="exhaust-cleaning"
    fluid
    className={styles.secondarySection}
  >
    <Container className={`my-5`}>
      <Row className="my-4 py-4">
        <Col md={6} className="d-flex align-items-center">
          <h1> Ensuring Clean and Safe Commercial Kitchens</h1>
        </Col>
        <Col md={6}>
          <p>
            We understand the importance of kitchen exhaust cleaning and
            certificaiton for commercial kitchens. Our certified technicians
            are trained to thoroughly clean and inspect kitchen exhaust
            systems, ensuring that they are free from grease buildup and
            potential fire hazards.
          </p>
          <Button
            variant="outline-primary"
            className={`${styles.secondaryButton}`}
            href="/services/exhaust-cleaning"
          >
            Learn More
          </Button>
          <Button
            variant="outline-light"
            className={`mx-2 ${styles.ternaryButton}`}
            href="/contact"
          >
            Contact Us
            <FaAngleRight className={`${styles.arrowIcon}`}></FaAngleRight>
          </Button>
        </Col>
      </Row>
      <Col className="pb-4">
        <NextImage
          alt="Clean Kitchen"
          src="/commercialKitchen.jpg"
          layout="responsive"
          width="600"
          height="400"
          className="rounded"
        />
      </Col>
    </Container>
  </Container>
  )
}

export default ExhaustCleaning