import React, {Component} from "react";
import './App.css';
import Header from "../header";
import RandomElements from "../random-elements";
import {Col, Container, Image, Row} from "react-bootstrap";
import SwapiService from "../../services/swapi-service";
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../sw-components";
import {SwapiServiceProvider, SwapiServiceConsumer} from "../sw-context";
import ErrorBoundry from "../error-boundry";

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
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
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

                    <PersonList/>
                    <PlanetList/>
                    <StarshipList/>

                    <PersonDetails itemId = {1}/>
                    <PlanetDetails itemId = {6}/>
                    <StarshipDetails itemId = {9}/>
                </SwapiServiceProvider>
            </ErrorBoundry>
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
