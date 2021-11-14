import React from "react";
import ItemDetails, {Record} from "../item-details";
import {SwapiServiceConsumer} from "../sw-context";


const PersonDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPerson}) => {
                    return(
                        <ItemDetails
                            itemId = {itemId}
                            getData = {getPerson}
                        >
                            <Record label = "Gender: " field = "personGender" />
                            <Record label = "Birth Year: " field = "personBirthYear"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    );
};

const PlanetDetails = ({itemId}) => {
    return(
        <SwapiServiceConsumer>
            {
                ({getPlanet}) => {
                    return(
                        <ItemDetails
                            itemId = {itemId}
                            getData = {getPlanet}
                        >
                            <Record label = "Population: " field = "planetPopulation"/>
                            <Record label = "Climate: " field = "planetClimate"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
}

const StarshipDetails = ({itemId}) => {
    return(
        <SwapiServiceConsumer>
            {
                ({getStarship}) => {
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
            }
        </SwapiServiceConsumer>
    )
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};