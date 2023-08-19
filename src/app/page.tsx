'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NextImage from 'next/image';
import styles from './page.module.css';
import Contact from './components/Contact';
import OurClients from './components/OurClients';
import ExhaustCleaning from './components/ExhaustCleaning';
import Services from './components/Services';
import Certification from './components/Certification';

export default function Home() {
  return (
    <>
      <Container
        id="home"
        className="mt-5 pt-5 pb-2 overflow-hidden position-relative"
      >
        <Row className="align-items-center">
          <Col
            md={6}
            className={`rounded-end mt-4 mt-md-0 ${styles.headerContent}`}
          >
            <h1 className={` mb-4 ${styles.gradientText}`}>
              Certified Clean, Expert Service.
            </h1>
            <p className="fw-bold">
              Experience the pinnacle of safety and compliance with our premium
              cleaning and certification solutions for a kitchen that operates
              at its absolute best.
            </p>
            <Button
              className={`rounded-5 mt-4 ${styles.primaryButton}`}
              variant="primary"
              size="lg"
              href='#contact'
            >
              Get a Free Quote
            </Button>
          </Col>
          <Col md={6} className="mt-5">
            <div className={styles.circle}></div>
            <div className={` ${styles.bubble} ${styles.bigBubble}`}></div>
            <div className={` ${styles.bubble} ${styles.mediumBubble}`}></div>
            <div className={` ${styles.bubble} ${styles.smallBubble}`}></div>
            <NextImage
              alt="Clean Kitchen"
              src="/pressureWasherCartoon2.png"
              fill={true}
              className={` ${styles.cartoonImage} ${styles.image}`}
            />
          </Col>
        </Row>
      </Container>
      <Services />
      <ExhaustCleaning />
      <Certification />
      <OurClients />
      <Contact />
    </>
  );
}
