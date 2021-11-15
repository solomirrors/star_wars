import React, {Component} from "react";
import {Col, Row} from "react-bootstrap";
import {PersonList, PersonDetails} from "../sw-components";

export default class PlanetsPage extends Component{
    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        });
    };

    render() {
        const {selectedItem} = this.state;

        return(
            <Row>
                <Col>
                    <PersonList onItemSelected = {this.onItemSelected}/>
                </Col>
                <Col>
                    <PersonDetails itemId = {selectedItem}/>
                </Col>
            </Row>
        )
    }
}