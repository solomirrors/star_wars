import React, {Component} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import SwapiService from "../../services/swapi-service";
import './random-planet.css'

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
        const id = 15;
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

        const randomPlanetDescription = (desk_1, arg_1, desk_2, arg_2) => {
            return(
                <Row>
                    <Col sm={6} md={6} className='p-0'>
                        <h4 className='random-planet-description'>{desk_1}: {arg_1}</h4>
                    </Col>
                    <Col sm={6} md={6} className='p-0'>
                        <h4 className='random-planet-description'>{desk_2}: {arg_2}</h4>
                    </Col>
                </Row>
            )
        };

        return(
            <Container fluid className='p-4 pt-0'>
                <Row className='random-person-bar m-2'>
                    <Col md={4} className='random-person-bar-image p-0'>
                        <Image className='random-person-image' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                    </Col>
                    <Col className='p-0' md={8}>
                        <Col className='random-planet-bar-name p-0' md={12}>
                            <h1 className='random-person-name'>{name}</h1>
                        </Col>
                        <Col className='p-0' md={12}>
                            {randomPlanetDescription('Population', population, 'Climate', climate)}
                            {randomPlanetDescription('Diameter', diameter, 'Gravity', gravity)}
                            {randomPlanetDescription('Rotation Period', rotationPeriod, 'Orbital Period', orbitalPeriod)}
                        </Col>
                    </Col>
                </Row>
            </Container>
        )
    }
}