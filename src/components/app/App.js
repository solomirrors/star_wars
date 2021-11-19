import React, {Component} from "react";
import './App.css';
import {Col, Container, Image, Row} from "react-bootstrap";
import SwapiService from "../../services/swapi-service";
import {SwapiServiceProvider} from "../sw-context";
import ErrorBoundry from "../error-boundry";
import DummyService from "../../services/dummy-service";
import {LoginPage, MainPage, PeoplePage, PlanetsPage, SecretPage, StarshipsPage} from "../pages";
import {BrowserRouter, Routes, Route, useParams, Outlet, Navigate} from "react-router-dom";
import Header from "../header";
import {PersonDetails, PlanetDetails, StarshipDetails} from "../sw-components";


export default class App extends Component{
    state = {
        selectedPerson: 8,
        hasError: false,
        swapiService: new SwapiService(),
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
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

        const {isLoggedIn} = this.state


        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <BrowserRouter>
                        <Header
                            onServiceChange={this.onServiceChange}
                        />
                        <Routes>
                                <Route path="/" element={<MainPage/>}/>
                                <Route path="people" element={<Outlet/>}>
                                    <Route path="" element={<PeoplePage/>}/>
                                    <Route path=":itemId" element={<PersonPathItemId/>}/>
                                </Route>
                                <Route path="planets" element={<Outlet/>}>
                                    <Route path="" element={<PlanetsPage/>}/>
                                    <Route path=":itemId" element={<PlanetsPathItemId/>}/>
                                </Route>
                                <Route path="starships" element={<Outlet/>}>
                                    <Route path="" element={<StarshipsPage/>}/>
                                    <Route path=":itemId" element={<StarshipsPathItemId/>}/>
                                </Route>
                                <Route path="login" element={<LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>}/>
                                <Route path="secret" element={<SecretPage isLoggedIn={isLoggedIn}/>}/>
                                <Route path="*" element={<div>Pages Not Found</div>}/>
                        </Routes>
                    </BrowserRouter>
                </SwapiServiceProvider>
            </ErrorBoundry>
    );
  }
}

function PersonPathItemId () {
    let params = useParams();
    return(
        <PersonDetails itemId={params.itemId}/>
    )
}

function PlanetsPathItemId () {
    let params = useParams();
    return(
        <PlanetDetails itemId={params.itemId}/>
    )
}

function StarshipsPathItemId () {
    let params = useParams();
    return(
        <StarshipDetails itemId={params.itemId}/>
    )
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
