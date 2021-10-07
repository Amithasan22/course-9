import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceCart from '../SeviceCart/ServiceCart';
import "./Services.css"

//service page start

const Services = (props) => {
    // console.log(props.data);
    const newData = props.data
    console.log(newData);

    return (
        <Container className='my-5 '>
            <h1 className="text-primary text-center mb-4 fs-1   "> Our Courses</h1>
            <div id="class">
                <Row xs={1} md={4} className="g-4">
                    {
                        newData.map(data => <ServiceCart
                            key={data.id}
                            data={data}
                        ></ServiceCart>)
                    }
                </Row>
            </div>

        </Container>
    );
};

export default Services;