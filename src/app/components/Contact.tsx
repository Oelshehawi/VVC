'use client';
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styles from './styles/contact.module.css';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import { sendEmail } from '@/data/actions';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const validateForm = (formData: FormData) => {
    const newErrors: { [key: string]: boolean } = {};
    const fields = ['name', 'email', 'number', 'details'];
    
    fields.forEach(field => {
      if (!formData.get(field)) {
        newErrors[field] = true;
      }
    });

    const email = formData.get('email') as string;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (formData: FormData) => {
    if (isSubmitting) return;
    
    if (!validateForm(formData)) {
      toast.error('Please fill in all required fields correctly');
      return;
    }

    setIsSubmitting(true);
    const result = await sendEmail(formData);

    if (result.message.includes('sent')) {
      toast.success(result.message);
      (document.getElementById('contact-form') as HTMLFormElement).reset();
    } else {
      toast.error(result.message);
    }

    setIsSubmitting(false);
  };

  const shakeAnimation = {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.4 }
  };

  return (
    <Container id="contact" className="mt-5 mb-5">
      <Toaster />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Row>
          <Col md={12} className="d-flex justify-content-center align-items-center flex-column p-4">
            <h1>Get a Free Quote Today</h1>
            <p className="my-3 text-secondary fw-bolder">
              Zero-Risk Choice: Free Estimate, Competitive Pricing, Decide with Confidence
            </p>
          </Col>
          <Row className="mx-0">
            <Col md={4} className={`${styles.contactInfo}`}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Container className={`pb-2 pt-2 mb-5 ${styles.contactInfoItem}`}>
                  <div className={`mt-4 ${styles.icon}`}>
                    <FaPhoneAlt size={20} className={styles.iconColor} />
                  </div>
                  <h3 className="mt-4 ms-5 ps-4 text-start">Call Us</h3>
                  <p className="ms-5 ps-4 text-start">604-273-8717</p>
                </Container>

                <Container className={`pt-2 mb-5 ${styles.contactInfoItem}`}>
                  <div className={`mt-4 ${styles.icon}`}>
                    <FaEnvelope size={20} className={styles.iconColor} />
                  </div>
                  <h3 className="mt-4 ms-5 ps-4 text-start">Email Us</h3>
                  <p className="ms-5 ps-4 text-start text-break">
                    adam@vancouverventcleaning.ca
                  </p>
                </Container>
              </motion.div>
            </Col>
            <Col md={8}>
              <Form
                id="contact-form"
                className="p-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  handleSubmit(formData);
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div animate={errors.name ? shakeAnimation : {}}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        name="name"
                        className={`p-3 ${errors.name ? 'border-danger' : ''}`}
                        onChange={() => setErrors({ ...errors, name: false })}
                      />
                    </Form.Group>
                  </motion.div>

                  <motion.div animate={errors.email ? shakeAnimation : {}}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        name="email"
                        className={`p-3 ${errors.email ? 'border-danger' : ''}`}
                        onChange={() => setErrors({ ...errors, email: false })}
                      />
                    </Form.Group>
                  </motion.div>

                  <motion.div animate={errors.number ? shakeAnimation : {}}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="tel"
                        placeholder="Phone Number"
                        name="number"
                        className={`p-3 ${errors.number ? 'border-danger' : ''}`}
                        onChange={() => setErrors({ ...errors, number: false })}
                      />
                    </Form.Group>
                  </motion.div>

                  <motion.div animate={errors.details ? shakeAnimation : {}}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Details"
                        name="details"
                        className={`${styles.textArea} ${errors.details ? 'border-danger' : ''}`}
                        onChange={() => setErrors({ ...errors, details: false })}
                      />
                    </Form.Group>
                  </motion.div>

                  <div className="d-flex justify-content-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={`p-3 ${styles.primaryButton}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Get Your Free Quote'}
                    </Button>
                  </div>
                </motion.div>
              </Form>
            </Col>
          </Row>
        </Row>
      </motion.div>
    </Container>
  );
};

export default Contact;