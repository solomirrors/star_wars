import React from "react";
import {PlanetList} from "../sw-components";
import {useNavigate} from "react-router-dom";


const PlanetsPage =() => {
    let navigate = useNavigate();
    return(
        <PlanetList onItemSelected = {(itemId) => {
        navigate(`${itemId}`)
    }}/>
    )
}

export default PlanetsPage;