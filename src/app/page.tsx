'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NextImage from 'next/image';
import styles from './page.module.css';
import NavigationBar from './components/NavigationBar';

export default function Home() {
  return (
    <>
      <NavigationBar />
      <header className={styles.headerContainer}>
        <Container fluid>
          <Row className="justify-content-center align-items-center">
            <Col md={6} className={`rounded-end  ${styles.headerContent}`}>
              <h1>Clean. Safe. Certified.</h1>
              <p>
                Ensure your kitchen is safe, compliant, and running at its best
                with our top-quality cleaning and certification solutions.
              </p>
              <Button variant="primary">Get a Free Quote</Button>
            </Col>
            <Col className="p-4 align-items-center">
              <NextImage
                alt="Clean Kitchen"
                src="/commercialKitchen.jpg"
                width="750"
                height="550"
                className="rounded"
              />
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}
