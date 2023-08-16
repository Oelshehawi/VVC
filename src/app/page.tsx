'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import NextImage from 'next/image';
import Nav from 'react-bootstrap/Nav';
import styles from './page.module.css';
import { FaAngleRight } from 'react-icons/fa';
import { FaCertificate } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
import Link from 'next/link';


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
      <Container fluid className={styles.secondarySection}>
        <Container className={`my-5`}>
          <Row className="my-4 py-4">
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
                href="/services/exhaust-cleaning"
              >
                Learn More
              </Button>
              <Button
                variant="outline-light"
                className={`mx-2 ${styles.ternaryButton}`}
                href="/contact"
              >
                Contact Us
                <FaAngleRight className={`${styles.arrowIcon}`}></FaAngleRight>
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
      <Container className="my-4">
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
      <Container fluid className={styles.secondarySection}>
        <Container className="my-5">
          <Row className="my-4 py-4">
            <Col md={12}>
              <h1> A Few Of Our Clients : </h1>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex align-items-center" md={2}>
              <NextImage
                alt="Dairy Queen"
                src="/dairyQueen.png"
                layout="responsive"
                width="150"
                height="150"
              />
            </Col>
            <Col md={2}>
              <NextImage
                alt="Clean Kitchen"
                src="/bostonPizza.png"
                layout="responsive"
                width="50"
                height="50"
              />
            </Col>
            <Col className="d-flex align-items-center" md={2}>
              <NextImage
                alt="Clean Kitchen"
                src="/oebBreakfast.png"
                layout="responsive"
                width="50"
                height="50"
              />
            </Col>
            <Col className="d-flex align-items-center" md={2}>
              <NextImage
                alt="Clean Kitchen"
                src="/panago.png"
                layout="responsive"
                width="50"
                height="50"
              />
            </Col>
            <Col className="d-flex align-items-center" md={2}>
              <NextImage
                alt="Clean Kitchen"
                src="/chitChat.png"
                layout="responsive"
                width="50"
                height="50"
              />
            </Col>
            <Col className="d-flex align-items-center" md={2}>
              <NextImage
                alt="Clean Kitchen"
                src="/attira.png"
                layout="responsive"
                width="50"
                height="50"
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} className="d-flex justify-content-end py-4">
              <h3>... and Hundreds More!</h3>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
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
            <Button
              size="lg"
              className={`my-4 text-uppercase ${styles.primaryButton}`}
            >
              Free Quote
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
