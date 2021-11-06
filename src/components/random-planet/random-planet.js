import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import './random-planet.css'

const RandomPlanet = () => {
    return(
        <Container fluid className='p-4 pt-0'>
            <Row className='random-planet-bar m-2'>
                <Col sm={4} className='p-0'>
                    <Image className='random-planet-widget' src='https://pngimg.com/uploads/starwars/starwars_PNG56.png'></Image>
                </Col>
                <Col sm={8}>Information ...</Col>
            </Row>
        </Container>
    )
}

export default RandomPlanet;