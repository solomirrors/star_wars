import React from "react";
import ItemList from "../item-list";
import {WithData} from "../hoc-helpers";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;

const withChildFunction = (Wrapped, Func) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {Func}
            </Wrapped>
        )
    }
}

const renderName = ({ Name }) => <span>{Name}</span>;
const renderModelAndName = ({ starshipModel, starshipConsumables}) => <span>{starshipModel}:{starshipConsumables}</span>;

const PersonList = WithData(withChildFunction(ItemList, renderName), getAllPeople);
const PlanetList = WithData(withChildFunction(ItemList, renderName), getAllPlanets);
const StarshipList = WithData(withChildFunction(ItemList, renderModelAndName), getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList
};