'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NextImage from 'next/image';
import styles from './page.module.css';
import Contact from './components/Contact';
import OurClients from './components/OurClients';
import ExhaustCleaning from './components/ExhaustCleaning';
import Services from './components/Services';
import Certification from './components/Certification';
import { motion } from 'framer-motion';
import { isMobile } from './utils/isMobile';

export default function Home() {
  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };

  const textAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const circleAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  return (
    <>
      <Container
        id='home'
        className='mt-5 pt-5 pb-2 pb-lg-4 overflow-hidden position-relative z-3'
      >
        <Row className='align-items-center'>
          <Col
            md={6}
            className={`rounded-end mt-4 mt-md-0 ${styles.headerContent}`}
          >
            <motion.div {...textAnimation}>
              <motion.h1
                className={`mb-4 ${styles.gradientText}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Certified Clean, Expert Service.
              </motion.h1>
              <motion.p
                className='fw-bold'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Experience the pinnacle of safety and compliance with our
                premium cleaning and certification solutions for a kitchen that
                operates at its absolute best.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                  className={`rounded-5 mt-4 ${styles.primaryButton}`}
                  variant='primary'
                  size='lg'
                  onClick={() => scrollToSection('contact')}
                >
                  Get a Free Quote
                </Button>
              </motion.div>
            </motion.div>
          </Col>
          <Col md={6} className='mt-5'>
            <div className={`${styles.circle} ${styles.fadeIn}`}></div>
            <div className={` ${styles.bubble} ${styles.bigBubble}`}></div>
            <div className={` ${styles.bubble} ${styles.mediumBubble}`}></div>
            <div className={` ${styles.bubble} ${styles.smallBubble}`}></div>
            <NextImage
              alt='Clean Kitchen'
              src='/pressureWasherCartoon2.png'
              fill={true}
              className={` ${styles.cartoonImage} ${styles.image}`}
            />
          </Col>
        </Row>
      </Container>

      <Services scrollToSection={scrollToSection} />

      <ExhaustCleaning scrollToSection={scrollToSection} />

      <Certification scrollToSection={scrollToSection} />

      <OurClients />

      <Contact />
    </>
  );
}
