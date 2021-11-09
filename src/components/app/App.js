import React, {Component} from "react";
import Header from "../header";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import './App.css';
import RandomElements from "../random-elements";


export default class App extends Component{
  render() {
    return (
        <div>
            <Header/>
            <RandomElements/>
        </div>
    );
  };
};

