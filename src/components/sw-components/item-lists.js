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

const PersonList = WithData(ItemList, getAllPeople);
const PlanetList = WithData(ItemList, getAllPlanets);
const StarshipList = WithData(ItemList, getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList
};