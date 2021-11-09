import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import './random-elements.css'
import {Col, Container, Image, Row} from "react-bootstrap";

export default class RandomElements extends Component{
    swapiService = new SwapiService();

    state = {
        personId: null,
        personName: null,
        personHeight: null,
        personMass: null,
        personHairColor: null,
        personSkinColor: null,
        personBirthYear: null,
        personGender: null,

        planetId: null,
        planetName: null,
        planetPopulation: null,
        planetClimate: null,
        planetDiameter: null,
        planetGravity: null,
        planetRotationPeriod: null,
        planetOrbitalPeriod: null,

        starshipId: null,
        starshipName: null,
        starshipModel: null,
        starshipManufacturer: null,
        starshipMaxSpeed: null,
        starshipLength: null,
        starshipCrew: null,
        starshipDriveRating: null
    }

    constructor() {
        super();
        this.upgradePerson();
        this.upgradePlanet();
        this.upgradeStarship();
    }

    upgradePerson(){
        const personId = 15;
        this.swapiService.
        getPerson(personId)
            .then((person) => {
                this.setState({
                    personId: personId,
                    personName: person.name,
                    personHeight: person.height,
                    personMass: person.mass,
                    personHairColor: person.hair_color,
                    personSkinColor: person.skin_color,
                    personBirthYear: person.birth_year,
                    personGender: person.gender
                });
            });
    };

    upgradePlanet(){
        const planetId = 15;
        this.swapiService.
        getPerson(planetId)
            .then((planet) => {
                this.setState({
                    planetId: planetId,
                    planetName: planet.name,
                    planetPopulation: planet.population,
                    planetClimate: planet.climate,
                    planetDiameter: planet.diameter,
                    planetGravity: planet.gravity,
                    planetRotationPeriod: planet.rotation_period,
                    planetOrbitalPeriod: planet.orbital_period,
                });
            });
    };

    upgradeStarship(){
        const starshipId = 15;
        this.swapiService.
        getPerson(starshipId)
            .then((starship) => {
                this.setState({
                    starshipId: starshipId,
                    starshipName: starship.name,
                    starshipModel: starship.model,
                    starshipManufacturer: starship.manufacturer,
                    starshipMaxSpeed: starship.max_atmosphering_speed,
                    starshipLength: starship.length,
                    starshipCrew: starship.crew,
                    starshipDriveRating: starship.hyperdrive_rating
                });
            });
    };

    getElementSrc(element, id){
        const result =
            (element === "person") ? `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
                : element ==="planet" ? `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
                    : `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
        return result;
    }

    render() {
        const {
            personId,
            personName,
            personHeight,
            personMass,
            personHairColor,
            personSkinColor,
            personBirthYear,
            personGender,

            planetId,
            planetName,
            planetPopulation,
            planetClimate,
            planetDiameter,
            planetGravity,
            planetRotationPeriod,
            planetOrbitalPeriod,

            starshipId,
            starshipName,
            starshipModel,
            starshipManufacturer,
            starshipMaxSpeed,
            starshipLength,
            starshipCrew,
            starshipDriveRating
        } = this.state;

        const randomDescription = (desk_1, arg_1, desk_2, arg_2) => {
            return(
                <Row>
                    <Col sm={6} md={6} className='p-0'>
                        <h4 className='random-elements-description'>{desk_1}: {arg_1}</h4>
                    </Col>
                    <Col sm={6} md={6} className='p-0'>
                        <h4 className='random-elements-description'>{desk_2}: {arg_2}</h4>
                    </Col>
                </Row>
            )
        };

        const randomElements = (
            id, src, name,
            desk_1, arg_1,
            desk_2, arg_2,
            desk_3, arg_3,
            desk_4, arg_4,
            desk_5, arg_5,
            desk_6, arg_6) => {
            return(
                <Container fluid className='p-4 pt-0'>
                    <Row className='random-elements-bar m-2'>
                        <Col md={4} className='random-elements-bar-image p-0'>
                            <Image className='random-elements-image' src={src}/>
                        </Col>
                        <Col className='p-0' md={8}>
                            <Col className='random-elements-bar-name p-0' md={12}>
                                <h1 className='random-elements-name'>{name}</h1>
                            </Col>
                            <Col className='p-0' md={12}>
                                {randomDescription(desk_1, arg_1, desk_2, arg_2)}
                                {randomDescription(desk_3, arg_3, desk_4, arg_4)}
                                {randomDescription(desk_5, arg_5, desk_6, arg_6)}
                            </Col>
                        </Col>
                    </Row>
                </Container>
            );
        };

        return(
            <div>
                {randomElements(personId, this.getElementSrc('person', personId), personName, personHeight, personMass, personHairColor, personSkinColor, personBirthYear, personGender)}
                {randomElements(planetId, this.getElementSrc('planet', planetId), planetName, planetPopulation, planetClimate, planetDiameter, planetGravity, planetRotationPeriod, planetOrbitalPeriod)}
            </div>
        )
    }
}
