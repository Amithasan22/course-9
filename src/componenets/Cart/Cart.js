import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Cart.css'

const Cart = (props) => {
  const { img, Course, Price, Duration, About, Date } = props.data
  // console.log(props.data);

  //cart page start

  return (
    <Col className=" ">
      <Card style={{ height: '530px', }} className='p-2 cart'>
        <Card.Img style={{ height: '200px' }} variant="top" src={img} />
        <Card.Body>
          <Card.Title> <small> {Course}</small> </Card.Title>
          <Card.Text className='lh-1'>
            {About}
          </Card.Text>
          <p><b>Course Fee: {Price}$ || First-Appeared {Date} || Duration: {Duration}.</b></p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cart;