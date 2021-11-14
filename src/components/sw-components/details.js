import React from "react";
import ItemDetails, { Record } from "../item-details";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
} = swapiService;

const PersonDetails = (itemId) => {
    return (
        <ItemDetails
            itemId = {itemId}
            getData = {getPerson}
        >
            <Record label = "Gender: " field = "personGender" />
            <Record label = "Birth Year: " field = "personBirthYear"/>
        </ItemDetails>
    );
};

const PlanetDetails = (itemId) => {
    return(
        <ItemDetails
            itemId = {itemId}
            getData = {getStarship}
        >
            <Record label = "Population: " field = "planetPopulation" />
            <Record label = "Climate: " field = "planetClimate"/>
        </ItemDetails>
    )
}

const StarshipDetails = (itemId) => {
    return(
        <ItemDetails
            itemId = {itemId}
            getData = {getStarship}
        >
            <Record label = "Model: " field = "starshipModel" />
            <Record label = "Consumables: " field = "starshipConsumables"/>
        </ItemDetails>
    )
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};