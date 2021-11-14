import React from "react";
import ItemList from "../item-list";
import {WithData, WithSwapi} from "../hoc-helpers";

const WithChildFunction = (Func) => (Wrapped) => {
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

const PersonList =
    WithSwapi(mapPersonMethodsToProps)(
        WithData(
            WithChildFunction(renderName)(ItemList)
        )
    );

const PlanetList =
    WithSwapi(mapPlanetMethodsToProps)(
        WithData(
            WithChildFunction(renderName)(ItemList)
        )
    );

const StarshipList =
    WithSwapi(mapStarshipMethodsToProps)(
        WithData(
            WithChildFunction(renderModelAndName)(ItemList)
        )
    );

export {
  PersonList,
  PlanetList,
  StarshipList
};