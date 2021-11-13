import React, {Component} from "react";
import Header from "../header";
import RandomElements from "../random-elements";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import {Col, Container, Image, Row} from "react-bootstrap";
import './App.css';
import SwapiService from "../../services/swapi-service";

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

        return (
            <React.Fragment>
                <Header/>
                <RandomElements
                    create='person'
                    randomMin={1}
                    randomMax={82}/>
                <RandomElements
                    create='planet'
                    randomMin={1}
                    randomMax={60}/>
                <RandomElements
                    create='starship'
                    randomMin={1}
                    randomMax={36}/>
                <ItemList
                    onItemSelected = {this.onPersonSelected}
                    getData = {this.swapiService.getAllPeople}
                    renderItem = {({Name, desc_5, personBirthYear,desc_6, personGender}) =>
                        <React.Fragment>
                            {Name}
                            <div>
                                <span>{desc_5}:{personBirthYear}</span>
                            </div>
                            <div>
                                <span>{desc_6}:{personGender}</span>
                            </div>
                        </React.Fragment>}
                />
                <ItemList
                    onItemSelected = {this.onPersonSelected}
                    getData = {this.swapiService.getAllPlanets}
                    renderItem = {(item) => item.Name}
                />
                <ItemList
                    onItemSelected = {this.onPersonSelected}
                    getData = {this.swapiService.getAllStarships}
                    renderItem = {(item) => item.Name}
                />
                <PersonDetails
                    personId = {this.state.selectedPerson}
                />
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
