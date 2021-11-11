import React, {Component} from "react";
import SwapiService from "../../../services/swapi-service";

export default class RandomPlanet extends Component{
    swapiService = new SwapiService();

    state = {
        planet: [],
        loading: true
    }

    constructor() {
        super();
        this.upgradePlanet();
    }

    onGetPlanetLoaded = (planet) => {
        this.setState({planet, loading: false});
    }

    upgradePlanet(){
        const planetId = Math.floor(Math.random() * (60-1) + 1);
        this.swapiService.
        getPlanet(planetId)
            .then(this.onGetPlanetLoaded)
    };

    render() {
        const {
            planet,
            loading
        } = this.state;

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

            </React.Fragment>
        )
    }
}