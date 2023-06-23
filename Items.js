import React from "react";
import '../Style/Items.css';
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

function Items() {

    return (
        <>
        {/* <Items /> */}
                {/* <div className=" items">
                    <div className="item">
                        {/* <ul> */}
                            {/* <li>Rings</li>
                            <li>Bracelets</li>
                            <li>Earrings</li>
                            <li>Necklaces</li>
                        </ul> */} 



    <Navbar bg="light" expand="lg">
      <Container>   
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto items">
          <div className="me item">
            <Nav.Link href="#home">Rings</Nav.Link>
            <Nav.Link href="#link">Bracelets</Nav.Link>
            <Nav.Link href="#home">Earrings</Nav.Link>
            <Nav.Link href="#home">Necklaces</Nav.Link>
          </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  

  
                    {/* </div>

                </div> */}
         
        </>
    )
}
export default Items;

