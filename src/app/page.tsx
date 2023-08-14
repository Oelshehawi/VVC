'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NextImage from 'next/image';
import styles from './page.module.css';
import { FaAngleRight } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col
            md={6}
            className={`rounded-end mt-4 mt-md-0 ${styles.headerContent}`}
          >
            <h1 className={`${styles.gradientText}`}>
              Certified Clean, Expert Service.
            </h1>
            <p>
              Experience the pinnacle of safety and compliance with our premium
              cleaning and certification solutions for a kitchen that operates
              at its absolute best.
            </p>
            <Button
              className={`rounded-5 text-center ${styles.primaryButton}`}
              variant="primary"
              size="lg"
            >
              Get a Free Quote
            </Button>
          </Col>
          <Col md={6} className="mt-4">
            <NextImage
              alt="Clean Kitchen"
              src="/commercial-kitchen-cleaning-img.jpg"
              layout="responsive"
              width="300"
              height="200"
              className="rounded"
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className={styles.featureSection}>
        <Container className={`my-5 ${styles.featureSection}`}>
          <Row className="aling-items-center my-4 py-4">
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
              >
                Learn More
              </Button>
              <Button
                variant="outline-light"
                className={`mx-2 ${styles.ternaryButton}`}
              >
                Contact Us <FaAngleRight></FaAngleRight>
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
    </>
  );
}
