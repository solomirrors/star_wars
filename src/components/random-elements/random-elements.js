import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import './random-elements.css'
import {Col, Container, Image, Row} from "react-bootstrap";

export default class RandomElements extends Component{
    swapiService = new SwapiService();

    state = {
        person: {},
        planet: {},
        starship: {},

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
        starshipConsumables: null,
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

    onGetPersonLoaded = (person) => {
        this.setState({person});
    }

    upgradePerson(){
        const personId = Math.floor(Math.random() * (82-1) + 1);
        this.swapiService.
        getPerson(personId)
            .then((person) => {
                this.setState(this.onGetPersonLoaded)
            });
    };

    onGetPlanetLoaded = (planet) => {
        this.setState({planet});
    }

    upgradePlanet(){
        const planetId = Math.floor(Math.random() * (60-1) + 1);
        this.swapiService.
        getPlanet(planetId)
            .then((planet) => {
                this.setState(this.onGetPlanetLoaded)
            });
    };

    onGetStarshipLoaded = (starship) => {
        this.setState({starship});
    }

    upgradeStarship(){
        const starshipId = Math.floor(Math.random() * (29-1) + 1);
        this.swapiService.
        getStarship(starshipId)
            .then((starship) => {
                this.setState(this.onGetStarshipLoaded)
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
            starshipConsumables,
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
            src, name,
            desk_1, arg_1,
            desk_2, arg_2,
            desk_3, arg_3,
            desk_4, arg_4,
            desk_5, arg_5,
            desk_6, arg_6
            ) => {
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

        const createRandomElements = (element, id) => {
            const src
                = this.getElementSrc(element, id);

            const prm = (element === 'person') ? [src, personName,
                'Height', personHeight, 'Mass', personMass,
                'Hair Color', personHairColor, 'Skin Color', personSkinColor,
                'Birth Year', personBirthYear, 'Gender', personGender
            ] :
                (element === 'planet') ? [src, planetName,
                    'Population', planetPopulation, 'Climate', planetClimate,
                    'Diameter', planetDiameter, 'Gravity', planetGravity,
                    'Rotation Period', planetRotationPeriod, 'Orbital Period', planetOrbitalPeriod
                    ] : [src, starshipName,
                    'Model', starshipModel, 'Consumables', starshipConsumables,
                    'Max Speed', starshipMaxSpeed, 'Length', starshipLength,
                    'Crew', starshipCrew, 'Drive Rating', starshipDriveRating
                    ]

            return (
                <React.Fragment>
                    {randomElements(prm[0], prm[1], prm[2], prm[3], prm[4], prm[5], prm[6], prm[7], prm[8], prm[9], prm[10], prm[11], prm[12], prm[13])}
                </React.Fragment>
            );
        };

        return(
            <React.Fragment>
                {createRandomElements('person', personId)}
                {createRandomElements('planet', planetId)}
                {createRandomElements('starship', starshipId)}
            </React.Fragment>
        )
    }
}
