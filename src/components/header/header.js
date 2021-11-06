import React from "react";
import {Button, Col, Container, Nav, Navbar, NavLink, Row} from "react-bootstrap";
import './header.css'

const Header = () => {
    return(
        <Container fluid>
            <Row className='header-bar p-4'>
                <Col md={4}>
                    <h1 className='header-star-wars m-0'>STAR WARS</h1>
                </Col>
                <Col md={8}>
                    <Row>
                        <Col className='header-link' sm={4}>
                            <a href='#'>People</a>
                        </Col>
                        <Col className='header-link' sm={4}>
                            <a href='#'>Planets</a>
                        </Col>
                        <Col className='header-link' sm={4}>
                            <a href='#'>Starships</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;