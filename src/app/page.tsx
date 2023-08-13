'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NextImage from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <header className={styles.headerContainer}>
        <Container fluid>
          <Row className="align-items-center">
            <Col
              md={6}
              className={`rounded-end text-center mt-4 mt-md-0 ${styles.headerContent}`}
            >
              <h1 className={`${styles.gradientText}`}>
                Clean. Safe. Certified.
              </h1>
              <p>
                Ensure your kitchen is safe, compliant, and running at its best
                with our top-quality cleaning and certification solutions.
              </p>
              <Button
                className={`rounded-5 text-center ${styles.primaryButton}`}
                variant="primary"
                size="lg"
              >
                Get a Free Quote
              </Button>
            </Col>
            <Col className="p-4">
              <NextImage
                alt="Clean Kitchen"
                src="/commercialKitchen.jpg"
                layout="responsive"
                width="700"
                height="500"
                className="rounded"
              />
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}
