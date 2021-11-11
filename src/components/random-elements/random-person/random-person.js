import React, {Component} from "react";
import SwapiService from "../../../services/swapi-service";

export default class RandomPerson extends Component{
    swapiService = new SwapiService();
    _personImagePath = 'https://starwars-visualguide.com/assets/img/characters/'

    state = {
        person: {},
        loading: true
    }

    constructor() {
        super();
        this.upgradePerson();
    }

    onGetPersonLoaded = (person) => {
        this.setState({person, loading: true});
    }

    upgradePerson(){
        const personId = Math.floor(Math.random() * (82-1) + 1);
        this.swapiService.
        getPerson(personId)
            .then(this.onGetPersonLoaded)
    };

    render() {
        const {
            person,
            loading
        } = this.state;

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
                {}
            </React.Fragment>
        )
    }
}