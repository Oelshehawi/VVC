'use client';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../page.module.css';
import NextImage from 'next/image';

const OurClients = () => {
  return (
    <Container id="clients" fluid className={styles.secondarySection}>
      <Container className="mb-5">
        <Row className="my-4 py-4">
          <Col md={12}>
            <h1> A Few Of Our Clients : </h1>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex align-items-center" md={2}>
            <NextImage
              alt="Dairy Queen"
              src="/dairyQueen.png"
              layout="responsive"
              width="150"
              height="150"
            />
          </Col>
          <Col md={2}>
            <NextImage
              alt="Clean Kitchen"
              src="/bostonPizza.png"
              layout="responsive"
              width="50"
              height="50"
            />
          </Col>
          <Col className="d-flex align-items-center" md={2}>
            <NextImage
              alt="Clean Kitchen"
              src="/oebBreakfast.png"
              layout="responsive"
              width="50"
              height="50"
            />
          </Col>
          <Col className="d-flex align-items-center" md={2}>
            <NextImage
              alt="Clean Kitchen"
              src="/panago.png"
              layout="responsive"
              width="50"
              height="50"
            />
          </Col>
          <Col className="d-flex align-items-center" md={2}>
            <NextImage
              alt="Clean Kitchen"
              src="/chitChat.png"
              layout="responsive"
              width="50"
              height="50"
            />
          </Col>
          <Col className="d-flex align-items-center" md={2}>
            <NextImage
              alt="Clean Kitchen"
              src="/attira.png"
              layout="responsive"
              width="50"
              height="50"
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="d-flex justify-content-end py-4">
            <h3>... and Hundreds More!</h3>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default OurClients;
