'use client';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './styles/services.module.css';
import Card from 'react-bootstrap/Card';
import { FaCertificate } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { isMobile } from '../utils/isMobile';

interface ServiceProps {
  scrollToSection: (id: string) => void;
}

const Services: React.FunctionComponent<ServiceProps> = ({ scrollToSection }) => {
  const mobileAnimation = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 }
  };

  const desktopAnimation = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 }
  };

  return (
    <Container id="services" className={`py-md-5 text-center min-vh-50`}>
      <motion.div
        initial="initial"
        whileInView="whileInView"
        variants={isMobile() ? mobileAnimation : desktopAnimation}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={`${styles.sectionTitle}`}>
          <h6 className={` mb-3 ${styles.line}`}>Services</h6>
        </div>
        <h1 className="text-center mb-4">What we Do</h1>
      </motion.div>
      <Row className="h-100">
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="h-100"
          >
            <Card className={`text-center p-5 ${styles.card} h-100`}>
              <Container className="d-flex justify-content-center">
                <FaTools
                  className={styles.serviceIcon}
                  size={100}
                />
              </Container>
              <Card.Title className="mt-4">Exhaust Hood Cleaning</Card.Title>
              <Card.Text>
                We specialize in providing comprehensive exhaust system cleaning
                services for commercial kitchens.
              </Card.Text>
              <Button
                variant="outline-light"
                className={styles.primaryButton}
                onClick={() => scrollToSection('exhaust-cleaning')}
              >
                Learn More
              </Button>
              <Button
                variant="outline"
                className={`mt-3 ${styles.secondaryButton}`}
                onClick={() => scrollToSection('contact')}
              >
                Contact Us{' '}
                <FaAngleRight className="ms-2" />
              </Button>
            </Card>
          </motion.div>
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="h-100"
          >
            <Card className={`text-center p-5 ${styles.card} h-100`}>
              <Container className="d-flex justify-content-center">
                <FaCertificate
                  className={styles.serviceIcon}
                  size={100}
                />
              </Container>
              <Card.Title className="mt-4">Certification</Card.Title>
              <Card.Text>
                With our ASTTBC certification you can ensure a clean and safe
                environment for your staff and customers.
              </Card.Text>
              <Button
                variant="outline-light"
                className={styles.primaryButton}
                onClick={() => scrollToSection('certification')}
              >
                Learn More
              </Button>
              <Button
                variant="outline"
                className={`mt-3 ${styles.secondaryButton}`}
                onClick={() => scrollToSection('contact')}
              >
                Contact Us{' '}
                <FaAngleRight className="ms-2" />
              </Button>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
