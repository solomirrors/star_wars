import React, {Component} from "react";
import './App.css';
import {Col, Container, Image, Row} from "react-bootstrap";
import SwapiService from "../../services/swapi-service";
import {SwapiServiceProvider} from "../sw-context";
import ErrorBoundry from "../error-boundry";
import DummyService from "../../services/dummy-service";
import {MainPage, PeoplePage, PlanetsPage, StarshipsPage} from "../pages";
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import Header from "../header";
import {StarshipList} from "../sw-components";

export default class App extends Component{

    state = {
        selectedPerson: 8,
        hasError: false,
        swapiService: new SwapiService()
    }

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? DummyService : SwapiService;
            return{
                swapiService: new Service()
            }
        })
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <AppErrorIndicator/>
        }

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <BrowserRouter>
                        <Header
                            onServiceChange={this.onServiceChange}
                        />
                        <Routes>
                            <Route exact path="/" element={<MainPage/>}/>
                            <Route exact path="people" element={<PeoplePage/>}/>
                            <Route exact path="planets" element={<PlanetsPage/>}/>
                            <Route exact path="starships" element={<Invoice/>}>
                                <Route exact path=":invoiceId" element={<StarshipList/>}/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </SwapiServiceProvider>
            </ErrorBoundry>
    );
  }
}

function Invoice() {
    let { invoiceId } = useParams();
    return <h1>Invoice {invoiceId}</h1>;
}

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
