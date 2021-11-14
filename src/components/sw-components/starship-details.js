import ItemDetails, {Record} from "../item-details";
import React from "react";
import {WithSwapi} from "../hoc-helpers";

const StarshipDetails = (props) => {
    return(
        <ItemDetails {...props}>
            <Record label = "Model: " field = "starshipModel" />
            <Record label = "Consumables: " field = "starshipConsumables"/>
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getStarship
    }
}

export default WithSwapi(StarshipDetails, mapMethodsToProps);