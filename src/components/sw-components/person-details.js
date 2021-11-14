import ItemDetails, {Record} from "../item-details";
import React from "react";
import {WithSwapi} from "../hoc-helpers";

const PersonDetails = (props) => {
    return(
        <ItemDetails {...props}>
            <Record label = "Gender: " field = "personGender" />
            <Record label = "Birth Year: " field = "personBirthYear"/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) =>{
    return {
        getData: swapiService.getPerson
    }
}

export default WithSwapi(PersonDetails, mapMethodsToProps);