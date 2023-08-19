'use client';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './styles/services.module.css';
import Card from 'react-bootstrap/Card';
import { FaCertificate } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

const Services = () => {
  return (
    <Container id="services" className={`py-md-5 text-center`}>
      <div className={`${styles.sectionTitle}`}>
        <h6 className={` mb-3 ${styles.line}`}>Services</h6>
      </div>
      <h1 className="text-center mb-4">What we Do</h1>
      <Row>
        <Col md={6}>
          <Card className={`text-center p-5 ${styles.card}`} text="white">
            <Container className="d-flex justify-content-center mb-5">
              <FaTools
                className={`${styles.serviceIcon} ${styles.serviceCleaningIcon}`}
                size={100}
              ></FaTools>
            </Container>
            <Card.Title>Exhaust Hood Cleaning</Card.Title>
            <Card.Text>
              We specialize in providing comprehensive exhaust system cleaning services for commercial kitchens.
            </Card.Text>
            <Button
              variant="outline-light"
              className={`text-white fw-bolder ${styles.primaryButton}`}
              href="#exhaust-cleaning"
            >
              Learn More
            </Button>
            <Button
              variant="outline"
              className={`my-4 text-dark fw-bolder ${styles.ternaryButton}`}
              href="#contact"
            >
              Contact Us{' '}
              <FaAngleRight className={`${styles.arrowIcon}`}></FaAngleRight>
            </Button>
          </Card>
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <Card className={`text-center p-5 ${styles.card}`} text="white">
            <Container className="d-flex justify-content-center mb-5">
              <FaCertificate
                className={` ${styles.serviceIcon} ${styles.serviceCertificationIcon}`}
                size={100}
              ></FaCertificate>
            </Container>
            <Card.Title>Certification</Card.Title>
            <Card.Text>
              With our ASTTBC certification you can ensure a clean and safe
              environment for your staff and customers.
            </Card.Text>
            <Button
              variant="outline-light"
              className={`text-white fw-bolder ${styles.primaryButton}`}
              href="#certification"
            >
              Learn More
            </Button>
            <Button
              variant="outline"
              className={`my-4 text-dark fw-bolder ${styles.ternaryButton}`}
              href="#contact"
            >
              Contact Us{' '}
              <FaAngleRight className={`${styles.arrowIcon}`}></FaAngleRight>
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
