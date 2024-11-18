'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './styles/clients.module.css';
import NextImage from 'next/image';
import { motion } from 'framer-motion';

const OurClients = () => {
  const clients = [
    { src: '/dairyQueen.png', alt: 'Dairy Queen' },
    { src: '/bostonPizza.png', alt: 'Boston Pizza' },
    { src: '/oebBreakfast.png', alt: 'OEB Breakfast' },
    { src: '/panago.png', alt: 'Panago' },
    { src: '/chitChat.png', alt: 'Chit Chat' },
    { src: '/attira.png', alt: 'Attira' }
  ];

  return (
    <Container id="clients" fluid className={`px-0 ${styles.secondarySection}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
        <path
          fill="var(--body-bg-color)"
          fillOpacity="1"
          d="M0,160L60,170.7C120,181,240,203,360,229.3C480,256,600,288,720,277.3C840,267,960,213,1080,202.7C1200,192,1320,224,1380,240L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <Container className="mt-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={` ${styles.sectionTitle}`}>
            <h6 className={` mb-3 text-white ${styles.line}`}>Our Clients</h6>
          </div>
          <Row className="mt-4 pt-4 text-start">
            <Col md={12}>
              <h1> A Few Of Our Clients : </h1>
            </Col>
          </Row>
          <Row>
            {clients.map((client, index) => (
              <Col key={index} className="d-flex align-items-center" md={2}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="w-100"
                >
                  <NextImage
                    alt={client.alt}
                    src={client.src}
                    fill={true}
                    className={styles.image}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>
          <Row>
            <Col md={12} className="d-flex justify-content-end pt-4">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                ... and Hundreds More!
              </motion.h3>
            </Col>
          </Row>
        </motion.div>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="var(--body-bg-color)"
          fillOpacity="1"
          d="M0,160L48,149.3C96,139,192,117,288,117.3C384,117,480,139,576,138.7C672,139,768,117,864,101.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </Container>
  );
};

export default OurClients;