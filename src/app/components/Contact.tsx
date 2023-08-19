'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from './styles/contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container id="contact" className="text-center">
      <div className={` ${styles.sectionTitle}`}>
        <h6 className={` mb-3 ${styles.line}`}>Contact Us</h6>
      </div>
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
        </Col>
        <Row className="mx-0">
          <Col md={4} className={`${styles.contactInfo}`}>
            <Container className={`pb-2 pt-2 mb-5 ${styles.contactInfoItem}`}>
              <div className={`mt-4 ${styles.icon}`}>
                <FaPhoneAlt size={20} className={` ${styles.iconColor}`} />
              </div>
              <h3 className="mt-4 ms-5 ps-4 text-start">Call Us</h3>
              <p className="ms-5 ps-4 text-start">604-273-8717</p>
            </Container>

            <Container className={`pb-5 pt-2 mb-5 ${styles.contactInfoItem}`}>
              <div className={`mt-4 ${styles.icon}`}>
                <FaEnvelope size={20} className={` ${styles.iconColor}`} />
              </div>
              <h3 className="mt-4 ms-5 ps-4 text-start">Email Us</h3>
              <p className="ms-5 ps-4 text-start">
                adam@vancouverventcleaning.ca
              </p>
            </Container>
          </Col>
          <Col md={8} className="fw-medium">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <FloatingLabel
                controlId="floatingName"
                label="Name"
                className="mb-3"
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="Your Name"
                  className={`rounded-4`}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Name.
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  required
                  type="email"
                  placeholder="name@example.com"
                  className={`rounded-4`}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide an Email.
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInputPhone"
                label="Phone Number"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="****-***-***"
                  className={`rounded-4`}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide an Email.
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextArea" label="Details">
                <Form.Control
                  as="textarea"
                  type="textarea"
                  placeholder="Details"
                  className={`rounded-4 ${styles.textArea}`}
                />
              </FloatingLabel>
              <Button
                size="lg"
                type="submit"
                className={`my-4 ${styles.primaryButton}`}
              >
                Get your Quote
              </Button>
            </Form>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Contact;
