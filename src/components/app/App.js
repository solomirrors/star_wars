import React, {Component} from "react";
import Header from "../header";
import './App.css';
import RandomElements from "../random-elements";

export default class App extends Component{
  render() {
    return (
        <React.Fragment>
            <Header/>
            <RandomElements
                create='person'
                randomMin={1}
                randomMax={82}/>
            <RandomElements
                create='planet'
                randomMin={1}
                randomMax={60}/>
            <RandomElements
                create='starship'
                randomMin={1}
                randomMax={36}/>
        </React.Fragment>
    );
  };
};

