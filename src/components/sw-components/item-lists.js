import React from "react";
import ItemList from "../item-list";
import {WithData, WithSwapi} from "../hoc-helpers";

const WithChildFunction = (Wrapped, Func) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {Func}
            </Wrapped>
        )
    };
};

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: WithSwapi.getAllPeople
    };
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: WithSwapi.getAllPlanets
    };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: WithSwapi.getAllStarships
    };
};

const renderName = ({ Name }) => <span>{Name}</span>;
const renderModelAndName = ({ starshipModel, starshipConsumables}) => <span>{starshipModel}:{starshipConsumables}</span>;

const PersonList = WithSwapi(WithData(WithChildFunction(ItemList, renderName)), mapPersonMethodsToProps);
const PlanetList = WithSwapi(WithData(WithChildFunction(ItemList, renderName)), mapPlanetMethodsToProps);
const StarshipList = WithSwapi(WithData(WithChildFunction(ItemList, renderModelAndName)), mapStarshipMethodsToProps);

export {
  PersonList,
  PlanetList,
  StarshipList
};