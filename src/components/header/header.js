import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import './header.css'

const Header = ({onServiceChange}) => {
    return(
        <Container fluid>
            <Row className='header-bar p-4'>
                <Col md={3}>
                    <h1 className='m-0'>
                        <Link className="header-star-wars" to="/">STAR WARS</Link>
                    </h1>
                </Col>
                <Col md={9}>
                    <Row>
                        <Col className='header-link-panel p-0' sm={3}>
                            <Link className='header-link' to='people'>People</Link>
                        </Col>
                        <Col className='header-link-panel p-0' sm={3}>
                            <Link className='header-link' to='planets'>Planets</Link>
                        </Col>
                        <Col className='header-link-panel p-0' sm={3}>
                            <Link className='header-link' to='starships'>Starships</Link>
                        </Col>
                        <Col className='header-link-panel p-0' sm={3}>
                            <Button onClick={onServiceChange}>Change</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;