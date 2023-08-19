'use client';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './styles/exhaustCleaning.module.css';
import NextImage from 'next/image';
import { FaAngleRight } from 'react-icons/fa';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

const ExhaustCleaning = () => {
  return (
    <>
      <Container
        id="exhaust-cleaning"
        fluid
        className={`px-0 ${styles.secondarySection}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="var(--body-bg-color)"
            fillOpacity="1"
            d="M0,64L48,90.7C96,117,192,171,288,170.7C384,171,480,117,576,122.7C672,128,768,192,864,186.7C960,181,1056,107,1152,69.3C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <Container className={`mt-5`}>
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
                variant="outline-light"
                className={`${styles.primaryButton}`}
                href="#contact"
              >
                Free Quote
                <FaAngleRight className={`${styles.arrowIcon}`}></FaAngleRight>
              </Button>
            </Col>
          </Row>
          <h5 className="mb-5 text-center"> Let Our Work Speak for Itself:</h5>
          <Row>
            <Col md={4}>
              <ReactCompareSlider
                boundsPadding={30}
                itemOne={
                  <NextImage
                    alt="Before Fan"
                    src="/fanBefore.jpg"
                    layout="responsive"
                    width={200}
                    height={300}
                    className="rounded-5"
                  />
                }
                itemTwo={
                  <NextImage
                    alt="After FAN"
                    src="/fanAfter.jpg"
                    layout="responsive"
                    width={100}
                    height={200}
                    className="rounded-5"
                  />
                }
              />
            </Col>
            <Col md={4} className="mt-5 mt-md-0">
              <ReactCompareSlider
                boundsPadding={30}
                itemOne={
                  <NextImage
                    alt="Before Hood"
                    src="/hoodBefore.jpg"
                    layout="responsive"
                    width={200}
                    height={300}
                    className="rounded-5"
                  />
                }
                itemTwo={
                  <NextImage
                    alt="After Hood"
                    src="/hoodAfter.jpg"
                    layout="responsive"
                    width={100}
                    height={200}
                    className="rounded-5"
                  />
                }
              />
            </Col>
            <Col md={4} className="mt-5 mt-md-0">
              <ReactCompareSlider
                boundsPadding={30}
                itemOne={
                  <NextImage
                    alt="Before Duct"
                    src="/ductBefore.jpg"
                    layout="responsive"
                    width={200}
                    height={300}
                    className="rounded-5"
                  />
                }
                itemTwo={
                  <NextImage
                    alt="After Duct"
                    src="/ductAfter.jpg"
                    layout="responsive"
                    width={200}
                    height={300}
                    className="rounded-5"
                  />
                }
              />
            </Col>
          </Row>
        </Container>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="mx-0 px-0"
        >
          <path
            fill="var(--body-bg-color)"
            fillOpacity="1"
            d="M0,64L34.3,74.7C68.6,85,137,107,206,112C274.3,117,343,107,411,96C480,85,549,75,617,80C685.7,85,754,107,823,128C891.4,149,960,171,1029,176C1097.1,181,1166,171,1234,176C1302.9,181,1371,203,1406,213.3L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </Container>
    </>
  );
};

export default ExhaustCleaning;
