import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import './random-planet.css'

const RandomPlanet = () => {
    return(
        <Container fluid className='p-4 pt-0'>
            <Row className='random-planet-bar p-3 m-2'>
                <Col className='random-planet-bar-description' md={4}>
                    <Row className='random-planet-description'>
                        <Col>
                            <h4>Population: </h4>
                        </Col>
                        <Col>
                            <h4>Climate: </h4>
                        </Col>
                    </Row>
                    <Row className='random-planet-description'>
                        <Col>
                            <h4>Diametr: </h4>
                        </Col>
                        <Col>
                            <h4>Gravity: </h4>
                        </Col>
                    </Row>
                    <Row className='random-planet-description'>
                        <Col>
                            <h4>Rotation Period:</h4>
                        </Col>
                        <Col>
                            <h4>Orbital Period:</h4>
                        </Col>
                    </Row>
                </Col>
                <Col className='random-planet-bar-name' md={4}>
                    <h1 className='random-planet-name'>The Death Star</h1>
                </Col>
                <Col className='random-planet-bar-image p-0' md={4}>
                    <Image className='random-planet-image' src='https://pngimg.com/uploads/starwars/starwars_PNG56.png'></Image>
                </Col>
            </Row>
        </Container>
    )
}

export default RandomPlanet;