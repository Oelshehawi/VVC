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
          <Row>
            <Col md={6} className={`rounded-end ${styles.headerContent}`}>
              <h1>
                Professional Kitchen Exhaust Cleaning and Certification Services
              </h1>
              <p>
                Ensure your kitchen is safe, compliant, and running at its best
                with our top-quality cleaning and certification solutions.
              </p>
              <Button variant="primary">Get a Free Quote</Button>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}
