import React, {Component} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import './random-planet.css'
import SwapiService from "../../services/swapi-service";

export default class RandomPlanet extends Component{
    swapiService = new SwapiService();

    state = {
        id: null,
        name: null,
        population: null,
        climate: null,
        diameter: null,
        gravity: null,
        rotationPeriod: null,
        orbitalPeriod: null
    }

    constructor() {
        super();
        this.updatePlanet();
    }

    updatePlanet(){
        const id = 6;
        this.swapiService.
        getPlanet(id)
            .then((planet) =>{
                this.setState({
                    id,
                    name: planet.name,
                    population: planet.population,
                    climate: planet.climate,
                    diameter: planet.diameter,
                    gravity: planet.gravity,
                    rotationPeriod: planet.rotation_period,
                    orbitalPeriod: planet.orbital_period
                });
            });
    }

    render(){
        const {
            id,
            name,
            population,
            climate,
            diameter,
            gravity,
            rotationPeriod,
            orbitalPeriod
        } = this.state;

        return(
            <Container fluid className='p-4 pt-0'>
                <Row className='random-planet-bar p-3 m-2'>
                    <Col className='random-planet-bar-description' md={5}>
                        <Row className='random-planet-description'>
                            <Col>
                                <h4>Population: {population}</h4>
                            </Col>
                            <Col>
                                <h4>Climate: {climate}</h4>
                            </Col>
                        </Row>
                        <Row className='random-planet-description'>
                            <Col>
                                <h4>Diameter: {diameter}</h4>
                            </Col>
                            <Col>
                                <h4>Gravity: {gravity}</h4>
                            </Col>
                        </Row>
                        <Row className='random-planet-description'>
                            <Col>
                                <h4>Rotation Period: {rotationPeriod}</h4>
                            </Col>
                            <Col>
                                <h4>Orbital Period: {orbitalPeriod}</h4>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='random-planet-bar-name' md={3}>
                        <h1 className='random-planet-name'>{name}</h1>
                    </Col>
                    <Col className='random-planet-bar-image p-0' md={4}>
                        <Image className='random-planet-image' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}></Image>
                    </Col>
                </Row>
            </Container>
        )
    }
}