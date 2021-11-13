import React, {Component} from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";
import {Col, Container, Row} from "react-bootstrap";

const PeopleMarkup = ({markLeft, markRight}) => {
    return(
        <Container>
            <Row>
                <Col>
                    {markLeft}
                </Col>
                <Col>
                    {markRight}
                </Col>
            </Row>
        </Container>
    );
}

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

        const itemList = (
            <ItemList
                onItemSelected = {this.onPersonSelected}
                getData = {this.swapiService.getAllPeople}
                renderItem = {(item) => item.Name}
            />
        )

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>
        )

        return(
            <PeopleMarkup markLeft={itemList} markRight={personDetails}/>
        )
    }
}