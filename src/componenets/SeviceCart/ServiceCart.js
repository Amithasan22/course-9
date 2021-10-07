import React from 'react';
import './ServiceCart.css'
import { Card, Col, Container } from 'react-bootstrap';

//service product cart

const ServiceCart = (props) => {
  const { About, Course, Duration, Instructor, Price, img } = props.data
  // console.log(props.data);
  return (
    <Container>
      <Col>
        <Card className='serviceCart' style={{ height: '500px', }}>
          <Card.Img style={{ height: '180px' }} variant="top" src={img} />
          <Card.Body>
            <Card.Title className="text-primary">{Course}</Card.Title>
            <Card.Title className="text-danger">Instructor: {Instructor}</Card.Title>
            <Card.Text className='lh-1'>
              {About}
            </Card.Text>
            <b className="text-secondary">Duration:{Duration} Hours   Course Fee: {Price}$</b>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default ServiceCart;