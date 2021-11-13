import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";

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
            >
                {(i) => (
                  `${i.Name}, (${i.personGender})`
                )}
            </ItemList>
        )

        const personDetails = (
            <ItemDetails personId={this.state.selectedPerson}/>
        )

        return(
            <ErrorBoundry>
                <PeopleMarkup markLeft={itemList} markRight={personDetails}/>
            </ErrorBoundry>

        )
    }
}