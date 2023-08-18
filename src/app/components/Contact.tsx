'use client';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../page.module.css';

const Contact = () => {
  return (
    <Container id="contact">
      <Row>
        <Col
          md={12}
          className=" d-flex justify-content-center align-items-center flex-column p-4"
        >
          <h1> Get a Free Quote Today</h1>
          <p className="my-3 text-secondary fw-bolder">
            Zero-Risk Choice: Free Estimate, Competitive Pricing, Decide with
            Confidence
          </p>
          <Button
            size="lg"
            className={`my-4 text-uppercase ${styles.primaryButton}`}
          >
            Free Quote
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
