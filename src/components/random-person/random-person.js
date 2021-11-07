import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import './random-person.css'

const RandomPerson = () => {
    return(
        <Container fluid className='p-4 pt-0'>
            <Row className='random-person-bar p-3 m-2'>
                <Col className='random-person-bar-image p-0' md={4}>
                    <Image className='random-person-image' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/634e5fa5-3672-4a97-961b-fd8789a1f486/deb6v5n-6036c409-9042-4ff7-90d2-435d3ee63b84.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYzNGU1ZmE1LTM2NzItNGE5Ny05NjFiLWZkODc4OWExZjQ4NlwvZGViNnY1bi02MDM2YzQwOS05MDQyLTRmZjctOTBkMi00MzVkM2VlNjNiODQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.DvhI50I1Ri3PRm74LKoF-2N1-Qb1EsL7jj_JBNwPHUc'></Image>
                </Col>
                <Col className='random-person-bar-name' md={4}>
                    <h1 className='random-person-name'>Luke Skywalker</h1>
                </Col>
                <Col className='random-person-bar-description' md={4}>
                    <Row className='random-person-description'>
                        <Col>
                            <h4>Height: </h4>
                        </Col>
                        <Col>
                            <h4>Mass: </h4>
                        </Col>
                    </Row>
                    <Row className='random-person-description'>
                        <Col>
                            <h4>Hair color: </h4>
                        </Col>
                        <Col>
                            <h4>Skin color: </h4>
                        </Col>
                    </Row>
                    <Row className='random-person-description'>
                        <Col>
                            <h4>Birth year:</h4>
                        </Col>
                        <Col>
                            <h4>Gender:</h4>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default RandomPerson;