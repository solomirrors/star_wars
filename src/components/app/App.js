import React, {Component} from "react";
import Header from "../header";
import './App.css';
import RandomElements from "../random-elements";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

export default class App extends Component{
    state = {
        selectedPerson: 8
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
        console.log(id)
    };

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
            <ItemList onItemSelected = {this.onPersonSelected}/>
            <PersonDetails personId = {this.state.selectedPerson}/>
        </React.Fragment>
    );
  };
};

