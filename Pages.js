import React from "react";
import '../Style/Pages.css';
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { BiSearch } from 'react-icons/bi';
import { FaShoppingBasket } from 'react-icons/fa';



function Pages() {


    return (

        <>
           
            <div>

                <Navbar bg="light" expand="lg">
                    <Container>
                      
     
                        <Navbar.Collapse id="basic-navbar-nav pages">
                            <Nav className="me-auto page">
                                <Nav.Link className="home" href="#home">Home</Nav.Link>
                                <Nav.Link className="home" href="#link">About</Nav.Link>
                                <Nav.Link className="home" href="#home">Contact</Nav.Link>
                             
                                <Nav.Link id="search" href="#home">
                                    <BiSearch />
                                </Nav.Link>
                                <Nav.Link id="shopping" href="#home">
                                    <FaShoppingBasket />
                                </Nav.Link>


                            </Nav>
                        </Navbar.Collapse>
                        
                       
                    </Container>
                </Navbar>
            </div>
        </>
    )
}
export default Pages;