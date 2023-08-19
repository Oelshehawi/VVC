'use client';
import React from 'react';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import styles from './styles/certification.module.css';
import NextImage from 'next/image';

const Certification = () => {
  return (
    <Container id="certification" className="text-center">
      <div className={` ${styles.sectionTitle}`}>
        <h6 className={` mb-3 ${styles.line}`}>Certification</h6>
      </div>
      <Row className={`d-flex align-items-center`}>
        <Col md={6}>
          <NextImage
            alt="Clean Kitchen"
            src="/asttbc2.png"
            fill={true}
            className={styles.image}
          />
        </Col>
        <Col md={6}>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Why Should You Care About Certification?
              </Accordion.Header>
              <Accordion.Body>
                Certification ensures that our Registered Fire Protection
                Technicians (RFPT) are ASTTBC certified. These certifications
                are essential for legal compliance in commercial kitchens. Our
                experts guarantee inspections, testing, and maintenance that
                adhere to the highest standards. Opting for certified RFPTs
                means prioritizing safety, legal compliance, and kitchen peace
                of mind.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                What Does Our Certification Guarantee?
              </Accordion.Header>
              <Accordion.Body>
                Our certification assures that our RFPTs are extensively trained
                for inspections, testing, and maintenance. These certifications
                are vital for your commercial kitchen's compliance with the law.
                By choosing certified professionals, you're ensuring the capable
                handling of your system. ASTTBC-certified RFPTs bring expertise
                and adherence to legal standards.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                How Does Certification Benefit You?
              </Accordion.Header>
              <Accordion.Body>
                Certification benefits you by ensuring your commercial kitchen
                meets legal requirements. Our ASTTBC-certified RFPTs enhance
                safety, reduce risks, and prevent legal issues. By having
                certified professionals maintain your kitchen's fire protection
                systems, you're upholding the highest industry standards. Trust
                us for a safeguarded and compliant establishment.
                <br />
                <br />
                <p className="fw-bolder">
                  As part of the certification process, an ASTTBC stamped
                  sticker is provided to ensure your exhaust system has been
                  thoroughly inspected and meets all necessary regulations. This
                  sticker serves as proof of compliance and gives you confidence
                  in the safety and functionality of your kitchen.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Row className={`d-flex justify-content-center px-0`}>
          <Button
            size="lg"
            type="submit"
            className={`my-4 w-50 px-0 ${styles.primaryButton}`}
            href="#contact"
          >
            Get Your Kitchen Certified
          </Button>
        </Row>
      </Row>
    </Container>
  );
};

export default Certification;
