import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css'
function Navbars(props) {
  return (
     <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary row bgclr">
      <Container className='col'>
        <Navbar.Brand onClick={props.homedir} href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav.Link className='navspace' href="#deets">About</Nav.Link>
            <Nav.Link className='navspace' href="#deets">Catalog</Nav.Link>
            <Nav.Link className='navspace' href="#deets">Delivery</Nav.Link>

<Nav.Link eventKey={2} href="#memes">
  Contact
</Nav.Link>
          <Nav>
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </>
  )
}

export default Navbars