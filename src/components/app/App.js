import React, {Component} from "react";
import Header from "../header";
import RandomElements from "../random-elements";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import {Col, Container, Image, Row} from "react-bootstrap";
import './App.css';
import SwapiService from "../../services/swapi-service";
import PeoplePage from "../people-page";
import {Record} from "../item-details/item-details";
import {PersonDetails, PersonList, PlanetList, StarshipList} from "../sw-components";

export default class App extends Component{
    swapiService = new SwapiService();

    state = {
        selectedPerson: 8,
        hasError: false
    }


    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <AppErrorIndicator/>
        }

        const {getPerson, getStarship} = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId = {11}
                getData = {getPerson}
            >
                <Record label = "Gender: " field = "personGender" />
                <Record label = "Birth Year: " field = "personBirthYear"/>
            </ItemDetails>
        )

        const starshipDetails = (
            <ItemDetails
                itemId = {5}
                getData = {getStarship}
            >
                <Record label = "Model: " field = "starshipModel" />
                <Record label = "Consumables: " field = "starshipConsumables"/>
            </ItemDetails>
        )

        return (
            <React.Fragment>
                <Header/>
                <RandomElements
                    create='person'
                    randomMin={1}
                    randomMax={82}
                />
                <RandomElements
                    create='planet'
                    randomMin={1}
                    randomMax={60}
                />
                <RandomElements
                    create='starship'
                    randomMin={1}
                    randomMax={36}
                />

                <PersonList>
                    { ({Name}) => <span>{Name}</span> }
                </PersonList>

                <PlanetList>
                    { ({Name}) => <span>{Name}</span> }
                </PlanetList>

                <PersonList>
                    { ({Name}) => <span>{Name}</span> }
                </PersonList>

            </React.Fragment>
    );
  };
};

const AppErrorIndicator = () => {
    return(
        <Container fluid className='app-error'>
            <Row className='app-error-bar'>
                <Col className='col-auto'>
                    <Image className='app-error-image' src={'https://images.pngnice.com/download/2007/Emperor-Palpatine-PNG-Photos.png'}/>
                </Col>
                <Col className='col-12 p-5'>
                    <h3 className='app-error-message'>At the moment, our site is following order 66.</h3>
                    <h3 className='app-error-message'>Come back a little later :)</h3>
                </Col>
            </Row>
        </Container>
    );
};
