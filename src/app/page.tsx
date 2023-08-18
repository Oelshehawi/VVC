'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NextImage from 'next/image';
import styles from './page.module.css';
import Contact from './components/Contact';
import OurClients from './components/OurClients';
import ExhaustCleaning from './components/ExhaustCleaning';
import Services from './components/Services';

export default function Home() {
  return (
    <>
      <Container id="home" className='my-5'>
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
      <Services  />
      <ExhaustCleaning />
      <OurClients />
      <Contact />
    </>
  );
}
