import React, {Component} from "react";
import SwapiService from "../../../services/swapi-service";

export default class RandomStarship extends Component{
    swapiService = new SwapiService();

    state = {
        starship: [],
        loading: true
    }

    constructor() {
        super();
        this.upgradeStarship();
    }

    onGetStarshipLoaded = (starship) => {
        this.setState({starship, loadingStarship: true});
    }

    upgradeStarship(){
        const starshipId = Math.floor(Math.random() * (21-1) + 1);
        this.swapiService.
        getStarship(starshipId)
            .then(this.onGetStarshipLoaded)
    };

    render() {
        const {
            starship,
            loading
        } = this.state;

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

            </React.Fragment>
        )
    }
}