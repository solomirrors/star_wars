import React from "react";
import ItemList from "../item-list";
import {WithChild, WithData, WithSwapi, compose} from "../hoc-helpers";

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};

const renderName = ({ Name }) => <span>{Name}</span>;
const renderModelAndName = ({ starshipModel, starshipConsumables}) => <span>{starshipModel}:{starshipConsumables}</span>;

const PersonList = compose(
    WithSwapi(mapPersonMethodsToProps),
    WithData,
    WithChild(renderName))
(ItemList);


const PlanetList = compose(
    WithSwapi(mapPlanetMethodsToProps),
    WithData,
    WithChild(renderName))
(ItemList);

const StarshipList = compose(
    WithSwapi(mapStarshipMethodsToProps),
    WithData,
    WithChild(renderModelAndName))
(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
};