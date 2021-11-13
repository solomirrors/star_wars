import React, {Component} from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends Component{
    swapiService = new SwapiService();

    state ={
        selectedPerson: 3,
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({selectedPerson});
    }

    render() {
        if (this.state.hasError)
            return <div>Component Error</div>

        return(
            <div>
                <div>
                    <ItemList
                        onItemSelected = {this.onPersonSelected}
                        getData = {this.swapiService.getAllPeople}
                        renderItem = {(item) => item.Name}
                    />
                </div>
                <div>
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        )
    }
}