import React, {Component} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import './random-person.css'
import SwapiService from "../../services/swapi-service";

export default class randomPerson extends Component{
    swapiService = new SwapiService();

    state = {
        id: null,
        name: null,
        height: null,
        mass: null,
        hairColor: null,
        skinColor: null,
        birthYear: null,
        gender: null
    }

    constructor() {
        super();
        this.updatePerson();

    }

    updatePerson(){
        const id = 5;
        this.swapiService.
        getPerson(id)
            .then((person) =>{
                this.setState({
                    id,
                    name: person.name,
                    height: person.height,
                    mass: person.mass,
                    hairColor: person.hair_color,
                    skinColor: person.skin_color,
                    birthYear: person.birth_year,
                    gender: person.gender
                });
            });
    }

    render() {
        const {
            id,
            name,
            height,
            mass,
            hairColor,
            skinColor,
            birthYear,
            gender
        } = this.state;

        return(
            <Container fluid className='p-4 pt-0'>
                <Row className='random-person-bar p-3 m-2'>
                    <Col className='random-person-bar-image p-0' md={4}>
                        <h1 className='random-person-name'>{name}</h1>
                        <Image className='random-person-image' src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}></Image>
                    </Col>
                    <Col className='random-person-bar-description' md={8}>
                        <Row className='random-person-description'>
                            <Col>
                                <h4>Height: {height}</h4>
                            </Col>
                            <Col>
                                <h4>Mass: {mass}</h4>
                            </Col>
                        </Row>
                        <Row className='random-person-description'>
                            <Col>
                                <h4>Hair color: {hairColor}</h4>
                            </Col>
                            <Col>
                                <h4>Skin color: {skinColor}</h4>
                            </Col>
                        </Row>
                        <Row className='random-person-description'>
                            <Col>
                                <h4>Birth year: {birthYear}</h4>
                            </Col>
                            <Col>
                                <h4>Gender: {gender}</h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    };
};