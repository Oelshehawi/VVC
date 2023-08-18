'use client';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../page.module.css';
import Card from 'react-bootstrap/Card';
import { FaCertificate } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

const Services = () => {
  return (
    <Container id="services" className='my-5'>
        <Row>
          <Col md={6}>
            <Card className={`text-center p-5 ${styles.card}`} text="white">
              <Container className="d-flex justify-content-center mb-5">
                <FaTools
                  className={`${styles.serviceIcon} ${styles.serviceCleaningIcon}`}
                  size={100}
                ></FaTools>
              </Container>
              <Card.Title>Exhaust System Cleaning</Card.Title>
              <Card.Text>
                We specialize in providing comprehensive exhaust cleaning and
                maintenance services for commercial kitchens.
              </Card.Text>
              <Button
                variant="outline-primary"
                className={`text-dark fw-bolder ${styles.primaryButton}`}
                href="/services/exhaust-cleaning"
              >
                Learn More
              </Button>
              <Button
                variant="outline"
                className={`my-4 text-dark fw-bolder ${styles.ternaryButton}`}
                href="/contact"
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
                variant="outline-primary"
                className={`text-dark fw-bolder ${styles.primaryButton}`}
                href="/services/exhaust-cleaning"
              >
                Learn More
              </Button>
              <Button
                variant="outline"
                className={`my-4 text-dark fw-bolder ${styles.ternaryButton}`}
                href="/contact"
              >
                Contact Us{' '}
                <FaAngleRight className={`${styles.arrowIcon}`}></FaAngleRight>
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
  )
}

export default Services