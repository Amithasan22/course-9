import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

// import { faCoffee, } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap';

//footer section start

const Footer = () => {
  const Facebook = <FontAwesomeIcon icon={faFacebook} />
  const Linkedin = <FontAwesomeIcon icon={faLinkedin} />
  const Instagram = <FontAwesomeIcon icon={faInstagram} />
  const Twitter = <FontAwesomeIcon icon={faTwitter} />

  return (
    <Container className='mt-5 p-5 bg-dark text-white'>
      <Row>
        <Col>
          <h4 className='mb-5'> Programming Hero School</h4>
          <p><i className="fas fa-exclamation fs-2"></i> Level-4, 34, Awal Centre, Banani, Dhaka </p>
          <p> <i className="fas fa-envelope fs-2"></i> Official: web@programming-hero.com</p>
          <p><i className="fas fa-phone fs-2"></i> Helpline : 01322810867 (Available : 09:00am to 7:00pm)</p>
        </Col>
        <Col className="mx-5" xs={5}>
          <h4>Shortcut menu</h4>
          <a style={{ textDecoration: 'none' }} href="3">  <small className="text-primary fs-5 text ">Home  </small></a>

          <a style={{ textDecoration: 'none' }} href="3">  <small className="text-danger fs-5">About  </small></a>

          <a style={{ textDecoration: 'none' }} href="3">   <small className="text-success fs-5">Service  </small></a>

          <a style={{ textDecoration: 'none' }} href="3">   <small className="text-info fs-5">Notice </small></a>
        </Col>
        <Col className='text-center'>
          <h4>Social Links</h4>
          <p style={{ fontSize: "30px", color: '#1873EB' }} ><i ></i>{Facebook}</p>
          <p style={{ fontSize: "30px", color: '#E80012' }}  ><i ></i>{Instagram}</p>
          <p style={{ fontSize: "30px", color: '#0276B1' }} ><i ></i>{Linkedin}</p>
          <p style={{ fontSize: "30px", color: '##4FC5F7' }} ><i ></i>{Twitter}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;