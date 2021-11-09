import React, {Component} from "react";
import Header from "../header";
import RandomPerson from "../random-person";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import './App.css';
import RandomElements from "../random-elements";


export default class App extends Component{
  render() {
    return (
        <div>
            <Header/>
            <RandomPerson/>
            <RandomPlanet/>
            <RandomElements/>
            <ItemList/>
            <ItemList/>
            <ItemList/>
            <PersonDetails/>
        </div>
    );
  };
};

