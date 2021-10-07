import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


//About page start

const About = () => {
    return (
        <Container className='my-5'>
            <h1>We believe That...</h1>
            <Row>
                <Col sm={8}>

                    <p>
                        Learning is the source of human progress. It has the power to transform our world
                        from illness to health,
                        from poverty to prosperity,
                        from conflict to peace. It has the power to transform our lives
                        for ourselves,
                        for our families,
                        for our communities. No matter who we are or where we are,
                        learning empowers us to change and grow
                        and redefine what’s possible.
                        That’s why access to the best learning is a right, not a privilege. And that’s why Coursera is here.
                        We partner with the best institutions
                        to bring the best learning
                        to every corner of the world. So that anyone, anywhere has the power to
                        transform their life through learning.
                    </p>
                </Col>
                <Col sm={4}>
                    <img width='340px' src="https://cdn.wallpapersafari.com/37/63/DoFxOw.jpg" alt="" />
                </Col>
            </Row>

        </Container>
    );
};

export default About;