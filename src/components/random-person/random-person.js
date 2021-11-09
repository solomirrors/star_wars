import React, {Component} from "react";
import {CardImg, Col, Container, Image, Row} from "react-bootstrap";
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
        const id = 74;
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

        const randomPersonDescription = (desk_1, arg_1, desk_2, arg_2) => {
            return(
                <Row>
                    <Col sm={6} md={6} className='p-0'>
                        <h4 className='random-person-description'>{desk_1}: {arg_1}</h4>
                    </Col>
                    <Col sm={6} md={6} className='p-0'>
                        <h4 className='random-person-description'>{desk_2}: {arg_2}</h4>
                    </Col>
                </Row>
            )
        };

        return(
            <Container fluid className='p-4 pt-0'>
                <Row className='random-person-bar m-2'>
                    <Col md={4} className='random-person-bar-image p-0'>
                        <Image className='random-person-image' src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
                    </Col>
                    <Col className='p-0' md={8}>
                        <Col className='random-planet-bar-name p-0' md={12}>
                            <h1 className='random-person-name'>{name}</h1>
                        </Col>
                        <Col className='p-0' md={12}>
                            {randomPersonDescription('Height', height, 'Mass', mass)}
                            {randomPersonDescription('Birth Year', birthYear, 'Gender', gender)}
                            {randomPersonDescription('Hair Color', hairColor, 'Skin Color', skinColor)}
                        </Col>
                    </Col>
                </Row>
            </Container>
        );
    };
};