import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


export default function Header() {
    
  return (
    <div>
      <Navbar bg="grey" variant="dark"  className="flex-grow-1 justify-content-evenly"  >
        <Container >
          <Navbar.Brand href="#home" >Open Bonnet</Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
