import React, {Component} from "react";
import Header from "../header";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import PlanetDetails from "../planet-details";
import RandomPlanet from "../random-planet";
import StarshipDetails from "../starship-details";
import './App.css';
import RandomPerson from "../random-person";

export default class App extends Component{
  render() {
    return (
        <div>
            <Header/>
            <RandomPerson/>
            <RandomPlanet/>
            <ItemList/>
            <ItemList/>
            <ItemList/>
            <PersonDetails/>
            <PlanetDetails/>
            <StarshipDetails/>
        </div>
    );
  };
};

