import React from "react";
import ItemDetails, {Record} from "../item-details";
import {WithSwapi} from "../hoc-helpers";

const PlanetDetails = (props) => {
    return(
        <ItemDetails {...props}>
            <Record label = "Population: " field = "planetPopulation"/>
            <Record label = "Climate: " field = "planetClimate"/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getPlanet
    }
}

export default WithSwapi(PlanetDetails, mapMethodsToProps);