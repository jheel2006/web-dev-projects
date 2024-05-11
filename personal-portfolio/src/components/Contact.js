import { useState } from "react";
import React from 'react';

import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    emailjs
      .send('service_0l5v14p', 'template_94sy04b', {
        from_name: form.name,
        to_name: "Jheel Thanki",
        from_email: form.email,
        to_email: "jheelthanki@gmail.com",
        message: form.message,
        reply_to: form.email,
      }, {
        publicKey: '7NmN-3L_V_gqLSycz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setStatus({ success: true, message: 'Message sent successfully!' });
          setButtonText('Send');
          setForm({
            name: "",
            email: "",
            message: "",
          });

        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus({ success: false, message: 'Failed to send message!' });
          setButtonText('Send');
        },
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form  onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type='text'
                          name='name'
                          value={form.name}
                          onChange={handleChange} placeholder="Name" />
                      </Col>
                      {/* <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col> */}
                      <Col size={12} sm={6} className="px-1">
                        <input type='email'
                          name='email'
                          value={form.email}
                          onChange={handleChange} placeholder="Email Address" />
                      </Col>
                      {/* <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col> */}
                      <Col size={12} className="px-1">
                        <textarea rows="6" placeholder="Message" name='message'
                          value={form.message}
                          onChange={handleChange}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col >
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
