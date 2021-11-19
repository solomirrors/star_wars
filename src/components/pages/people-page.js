import React from "react";
import {PersonList} from "../sw-components";
import {useNavigate} from "react-router-dom";

const PeoplePage = () => {
    let navigate = useNavigate();
    return (
        <PersonList onItemSelected = {(itemId) => {
            navigate(`${itemId}`)
        }}/>
    )
}

export default PeoplePage;