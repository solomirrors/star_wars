import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import './random-elements.css'
import {Col, Container, Image, Row} from "react-bootstrap";
import Spinner from "../spinner";


const randomElementsBuilder = (src, {props}) => {
    const {
        starshipId,
        starshipName,
        starshipModel,
        starshipConsumables,
        starshipMaxSpeed,
        starshipLength,
        starshipCrew,
        starshipDriveRating
    } = props

    return (
        <Container fluid className='p-4 pt-0'>
            <Row className='random-elements-bar m-2'>
                <Col md={4} className='random-elements-bar-image p-0'>
                    <Image className='random-elements-image' src={`${src}${starshipId}.jpg`}/>
                </Col>
                <Col className='p-0' md={8}>
                    <Col className='random-elements-bar-name p-0' md={12}>
                        <h1 className='random-elements-name'>{starshipName}</h1>
                    </Col>
                    <Col className='p-0' md={12}>
                        <Row>
                            <Col sm={6} md={6} className='p-0'>
                                <h4 className='random-elements-description'>{'Test 1'}: {starshipModel}</h4>
                            </Col>
                            <Col sm={6} md={6} className='p-0'>
                                <h4 className='random-elements-description'>{'Test 2'}: {starshipConsumables}</h4>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};

export default randomElementsBuilder();

const randomElementsGetDescription = () => {
    return(
        <React.Fragment>

        </React.Fragment>
    )
}





class RandomElements extends Component{
    swapiService = new SwapiService();
    _getPathPictures = 'https://starwars-visualguide.com/assets/img/';

    state = {
        person: {},
        planet: {},
        starship: {},
        loadingPerson: true,
        loadingPlanet: true,
        loadingStarship: true
    }

    constructor() {
        super();
    }

    render() {
        const {
            person,
            planet,
            starship,
            loadingPerson,
            loadingPlanet,
            loadingStarship
        } = this.state;

        const propertyRandomInternals = (props_1, arg_1, props_2, arg_2) => {
            return(
                <React.Fragment>
                    <Row>
                        <Col sm={6} md={6} className='p-0'>
                            <h4 className='random-elements-description'>{props_1}: {arg_1}</h4>
                        </Col>
                        <Col sm={6} md={6} className='p-0'>
                            <h4 className='random-elements-description'>{props_2}: {arg_2}</h4>
                        </Col>
                    </Row>
                </React.Fragment>
            )
        }

        const propertyRandomDescription = (name, props_1, arg_1, props_2, arg_2, props_3, arg_3, props_4, arg_4, props_5, arg_5, props_6, arg_6) => {
            return(
                <React.Fragment>
                    <Col className='p-0' md={8}>
                        <Col className='random-elements-bar-name p-0' md={12}>
                            <h1 className='random-elements-name'>{name}</h1>
                        </Col>
                        <Col className='p-0' md={12}>
                            {propertyRandomInternals(props_1, arg_1, props_2, arg_2)}
                            {propertyRandomInternals(props_3, arg_3, props_4, arg_4)}
                            {propertyRandomInternals(props_5, arg_5, props_6, arg_6)}
                        </Col>
                    </Col>
                </React.Fragment>
            );
        };

        const propertyRandomImage = (element, id) =>{
            const src = (element === 'person') ? `${this._getPathPictures}characters/${id}.jpg`
                : (element === 'planet') ? `${this._getPathPictures}planets/${id}.jpg`
                    : `${this._getPathPictures}starships/${id}.jpg`
            return(
                <React.Fragment>
                    <Col md={4} className='random-elements-bar-image p-0'>
                        <Image className='random-elements-image' src={src}/>
                    </Col>
                </React.Fragment>
            );
        };



        const propertyRandomElement = (element, id, name, props_1, arg_1, props_2, arg_2, props_3, arg_3, props_4, arg_4, props_5, arg_5, props_6, arg_6) => {
            return(
                <React.Fragment>
                    <Container fluid className='p-4 pt-0'>
                        <Row className='random-elements-bar m-2'>
                            {propertyRandomImage(element, id)}
                            {propertyRandomDescription(
                                name, props_1, arg_1, props_2, arg_2, props_3, arg_3,
                                props_4, arg_4, props_5, arg_5, props_6, arg_6)}
                        </Row>
                    </Container>
                </React.Fragment>
            );
        };

        const PersonView = ({person}) => {
            const {
                personId,
                personName,
                personHeight,
                personMass,
                personHairColor,
                personSkinColor,
                personBirthYear,
                personGender
            } = person
            return(
                <React.Fragment>
                    {propertyRandomElement('person', personId, personName,
                        'Height', personHeight,
                        'Mass', personMass,
                        'Hair Color', personHairColor,
                        'Skin Color', personSkinColor,
                        'Birth Year', personBirthYear,
                        'Gender', personGender
                    )}
                </React.Fragment>
            )
        }

        const PlanetView = ({ planet }) => {
            const {
                planetId,
                planetName,
                planetPopulation,
                planetClimate,
                planetDiameter,
                planetGravity,
                planetRotationPeriod,
                planetOrbitalPeriod
            } = planet
            return(
                <React.Fragment>
                    {propertyRandomElement('planet', planetId, planetName,
                        'Population', planetPopulation,
                        'Climate', planetClimate,
                        'Diameter', planetDiameter,
                        'Gravity', planetGravity,
                        'Rotation Period', planetRotationPeriod,
                        'Orbital Period', planetOrbitalPeriod
                    )}
                </React.Fragment>
            )
        }

        const StarshipView = ({ starship }) => {
            const {
                starshipId,
                starshipName,
                starshipModel,
                starshipConsumables,
                starshipMaxSpeed,
                starshipLength,
                starshipCrew,
                starshipDriveRating
            } = starship
            return(
                <React.Fragment>
                    {propertyRandomElement('starship', starshipId, starshipName,
                        'Model', starshipModel,
                        'Consumables', starshipConsumables,
                        'Max Speed', starshipMaxSpeed,
                        'Length', starshipLength,
                        'Crew', starshipCrew,
                        'Drive Rating', starshipDriveRating
                    )}
                </React.Fragment>
            )
        }

        return(
            <React.Fragment>
                <PersonView person={person}/>
                <PlanetView planet={planet}/>
                <StarshipView starship={starship}/>
            </React.Fragment>
        )
    }
}
