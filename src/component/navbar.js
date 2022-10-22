import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets_images/logo.png';
import './navbar.css';

import { LinkContainer } from 'react-router-bootstrap';



export default function navigationbar() {
  return (
    <div className='nav'>
      <Navbar className=" fixed-top" collapseOnSelect expand="lg" bg="rgb=0 0 0" variant="rgb=0 0 0" >

        <Container>

          <LinkContainer to="/">
            <Navbar.Brand >
              <img src={logo} style={{ width: 30, height: 30 }} />
            </Navbar.Brand>
          </LinkContainer>


          <LinkContainer to="/">
            <Navbar.Brand href="#home">CIVF</Navbar.Brand>

          </LinkContainer>


          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" variant="#2521">


              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              {/* <NavDropdown.Link title="About us" id="basic-nav-dropdown"> */}
              
              {/* <LinkContainer to="/Aboutus">
                <NavDropdown.Link title="About us" id="basic-nav-dropdown">
                <Nav.Link href="#About us">About us</Nav.Link>
                  <NavDropdown.Item href="#action/3.1">Ethos</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Message from the Desk of Directors
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.4">
                    Advisory Committee
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.4">
                    CIVF Team
                  </NavDropdown.Item>
                </NavDropdown.Link>
              </LinkContainer> */}

              <LinkContainer to="/Aboutus">
                <Nav.Link href="#About us">About us</Nav.Link>
              </LinkContainer>

              <Nav.Link href="#Start-up Portfolio">Start-up Portfolio</Nav.Link>


              <LinkContainer to="/Acceleration_Program">
                <Nav.Link href="#Acceleration Program ">Acceleration Program </Nav.Link>
                
              </LinkContainer>


              <Nav.Link href="#Facilities ">Facilities </Nav.Link>

              <Nav.Link href="#Services">Services</Nav.Link>

              <Nav.Link href="#Market Trend ">Market Trend</Nav.Link>

              <LinkContainer to="/Gallery">
                <Nav.Link href="#Gallery ">Gallery </Nav.Link>
              </LinkContainer>

              <Nav.Link href="#Donate">Donate</Nav.Link>

              <Nav.Link href="#FAQs">FAQs</Nav.Link>

              <Nav.Link href="#Career at CIVF">Career at CIVF </Nav.Link>

              <Nav.Link href="#Contact Us">Contact Us  </Nav.Link>




            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  )
}
