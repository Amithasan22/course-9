import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

//header saction start


const Header = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container style={{ backgroundColor: "#659AD2", padding: "5px" }} className='mb-3'>
        <Navbar.Brand className="text-light" href="#">Programming Hero School</Navbar.Brand>
        <Nav className="ms-auto">
          <NavLink className='text-decoration-none text-light me-3' to="/home">Home</NavLink>
          <NavLink className='text-decoration-none text-light me-3' to="/services">Services</NavLink>
          <NavLink className='text-decoration-none text-light me-3' to="/about">About</NavLink>
          <NavLink className='text-decoration-none text-light ' to="/notice">Notice</NavLink>
        </Nav>
      </Container>
    </Navbar>

  );
};

export default Header;