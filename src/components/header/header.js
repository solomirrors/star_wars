import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import './header.css'

const Header = () => {
    return(
        <Container fluid>
            <Row className='header-bar p-4'>
                <Col md={3}>
                    <h1 className='header-star-wars m-0'>STAR WARS</h1>
                </Col>
                <Col md={9}>
                    <Row>
                        <Col className='header-link-panel p-0' sm={4}>
                            <a className='header-link' href='#'>People</a>
                        </Col>
                        <Col className='header-link-panel p-0' sm={4}>
                            <a className='header-link' href='#'>Planets</a>
                        </Col>
                        <Col className='header-link-panel p-0' sm={4}>
                            <a className='header-link' href='#'>Starships</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;